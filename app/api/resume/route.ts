import MistralClient from '@mistralai/mistralai';

const mistral = new MistralClient(process.env.MISTRAL_API_KEY || '');

export const runtime = 'edge';

function parseMistralResponse(text: string) {
  // Extract values from the AI's response using regex
  const worthMatch = text.match(/<Estimated Worth>\$?([\d,\.]+)<\/Estimated Worth>/i);
  const explanationMatch = text.match(/<Explanation>[\s\S]*?<ul>([\s\S]*?)<\/ul>[\s\S]*?<\/Explanation>/i);
  const improvementsMatch = text.match(/<Improvements>[\s\S]*?<ul>([\s\S]*?)<\/ul>[\s\S]*?<\/Improvements>/i);

  const parseList = (str?: string) =>
    str
      ? Array.from(str.matchAll(/<li>(.*?)<\/li>/g)).map((m) => m[1].trim())
      : [];

  return {
    overallScore: worthMatch ? Math.min(100, Math.round(Number(worthMatch[1].replace(/,/g, '')) / 1000)) : 75,
    marketValue: worthMatch ? Number(worthMatch[1].replace(/,/g, '')) : 90000,
    industryPercentile: 85,
    categoryScores: [
      { name: "Experience", score: 85, trend: "up", change: "+5" },
      { name: "Skills", score: 72, trend: "up", change: "+8" },
      { name: "Education", score: 90, trend: "neutral", change: "0" },
      { name: "Achievements", score: 68, trend: "down", change: "-2" },
      { name: "Format & Structure", score: 82, trend: "up", change: "+3" },
      { name: "Keywords", score: 75, trend: "up", change: "+12" },
    ],
    strengths: parseList(explanationMatch?.[1]).map((item) => ({
      title: item,
      description: item,
      impact: "High",
      icon: "Award",
    })),
    improvements: parseList(improvementsMatch?.[1]).map((item) => ({
      title: item,
      description: item,
      priority: "Medium",
      impact: "+5 points",
      icon: "Users",
    })),
    marketComparison: [
      { role: "Software Engineer", percentile: 78, salary: "$85k - $105k" },
      { role: "Senior Software Engineer", percentile: 65, salary: "$95k - $130k" },
      { role: "Full Stack Developer", percentile: 82, salary: "$80k - $110k" },
      { role: "Technical Lead", percentile: 45, salary: "$110k - $150k" },
    ],
  };
}

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const response = await mistral.chat({
    model: 'mistral-large-latest',
    messages: [{
      role: 'user',
      content: `IMPORTANT: Only output the following XML format. Do not add any extra text or commentary.
<Estimated Worth>$...</Estimated Worth>
<Explanation>
   <ul>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      ...
   </ul>
</Explanation>
<Improvements>
   <ul>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      ...
   </ul>
</Improvements>
-------
CONTEXT: You are an expert at predicting the dollar worth of resumes.
You are funny and witty, with an edge. You talk like a mentor hyping the user up.
If the candidate is a man, you talk like a big brother, but still keep it a bit professional.
If the candidate is a woman, you use talk in a sweet and funny way.
-------
TASK: 
- Analyze the resume given below and provide its estimated worth in US dollars. Give a single dollar value, not a range.
- Provide 4 short bullet points explanation of the key factors contributing to the assessment,
and 4 tips on how they can improve their worth. Each bullet point should be less than 80 characters.
- Write in a funny and witty way to make the response more engaging. If you can add 1 or 2 creative/funny metaphors, do that.
- Always speak to the user in 'you'.
-------
RESUME:
${prompt}
`
    }],
  });

  const aiText = response.choices[0]?.message?.content || "";
  // Uncomment for debugging:
  // console.log("Mistral AI response:", aiText);
  const result = parseMistralResponse(aiText);

  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json" },
  });
}