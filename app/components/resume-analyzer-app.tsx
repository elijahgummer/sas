"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Progress } from "../components/ui/progress"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import {
  BarChart3,
  TrendingUp,
  DollarSign,
  Award,
  CheckCircle,
  FileText,
  Users,
  Clock,
  Target,
  Zap,
  ArrowUp,
  ArrowDown,
  Minus,
  Upload,
  Download,
  RefreshCw,
} from "lucide-react"

// PDF.js types
import type { TextContent, TextItem } from 'pdfjs-dist/types/src/display/api'

function ResumeUploader({ setResumeText, setIsLoading }: { setResumeText: (t: string) => void, setIsLoading: (b: boolean) => void }) {
  const [error, setError] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);

  const mergeTextContent = (textContent: TextContent) => {
    return textContent.items
      .map((item) => {
        const { str, hasEOL } = item as TextItem;
        return str + (hasEOL ? '\n' : '');
      })
      .join('');
  };

  const readResume = async (pdfFile: File | undefined) => {
    const pdfjs = await import('pdfjs-dist');
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

    if (!pdfFile) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const arrayBuffer = event.target?.result;
      if (arrayBuffer && arrayBuffer instanceof ArrayBuffer) {
        const loadingTask = pdfjs.getDocument(new Uint8Array(arrayBuffer));
        loadingTask.promise.then(
          (pdfDoc) => {
            pdfDoc.getPage(1).then((page) => {
              page.getTextContent().then((textContent) => {
                const extractedText = mergeTextContent(textContent);
                setResumeText(extractedText);
                setIsLoading(false);
              });
            });
          },
          (reason) => {
            setError('Error during PDF loading');
            setIsLoading(false);
          }
        );
      }
    };
    reader.readAsArrayBuffer(pdfFile);
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setResumeText('');
    setError('');
    setIsLoading(true);

    try {
      const items = event.dataTransfer.items;
      if (!items || items.length !== 1) {
        throw new Error('Please drop a single file.');
      }
      const item = items[0];
      if (item.kind !== 'file' || item.type !== 'application/pdf') {
        throw new Error('Please drop a single PDF file.');
      }
      const file = item.getAsFile();
      if (!file) {
        throw new Error("The PDF wasn't uploaded correctly.");
      }
      await readResume(file);
    } catch (error) {
      setError('There was an error reading the resume. Please try again.');
      setIsLoading(false);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleButtonUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setIsLoading(true);
    setResumeText('');

    try {
      const file = event.target.files?.[0];
      if (!file) {
        setError("The PDF wasn't uploaded correctly.");
        setIsLoading(false);
        return;
      }
      await readResume(file);
    } catch (error) {
      setError('There was an error reading the resume. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div
        className={`border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer transition-colors ${
          isDragOver ? 'border-purple-500 bg-purple-50' : 'border-gray-300 bg-white dark:bg-gray-800'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
      >
        <input
          type="file"
          id="file-upload"
          onChange={handleButtonUpload}
          accept="application/pdf"
          hidden
        />
        <label htmlFor="file-upload" className="flex flex-col items-center gap-2 cursor-pointer">
          <Upload size={36} className="text-purple-500" />
          <span className="font-medium text-purple-700">Upload resume</span>
          <span className="text-xs text-gray-500">PDF only</span>
        </label>
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}

export function ResumeAnalyzerApp() {
  const [step, setStep] = useState<"upload" | "analyzing" | "result">("upload");
  const [resumeText, setResumeText] = useState("");
  const [analysis, setAnalysis] = useState<any>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Call your real API here!
  const analyzeResume = async (text: string) => {
    setStep("analyzing");
    setError("");
    try {
      // Replace this with your real API endpoint
      const res = await fetch("/api/resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setAnalysis(data);
      setStep("result");
    } catch (e) {
      setError("There was an error analyzing your resume.");
      setStep("upload");
    }
  };

  useEffect(() => {
    if (resumeText) {
      analyzeResume(resumeText);
    }
    // eslint-disable-next-line
  }, [resumeText]);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <ArrowUp className="h-3 w-3 text-green-500" />
      case "down":
        return <ArrowDown className="h-3 w-3 text-red-500" />
      default:
        return <Minus className="h-3 w-3 text-gray-400" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300"
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
    }
  }

  if (step === "upload") {
    return (
      <div className="max-w-lg mx-auto mt-10">
        <ResumeUploader setResumeText={setResumeText} setIsLoading={setIsLoading} />
        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
      </div>
    );
  }

  if (step === "analyzing" || isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px]">
        <RefreshCw className="h-10 w-10 animate-spin text-purple-500 mb-4" />
        <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Analyzing your resume...</p>
      </div>
    );
  }

  if (!analysis) return null;

  // "result" step
  const {
    overallScore,
    marketValue,
    industryPercentile,
    categoryScores,
    strengths,
    improvements,
    marketComparison,
  } = analysis;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Resume Worth Analyzer</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Comprehensive analysis of your resume&#39;s market value and potential
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => analyzeResume(resumeText)}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Re-analyze
          </Button>
          <Button className="bg-purple-500 hover:bg-purple-600" onClick={() => setStep("upload")}>
            <Upload className="h-4 w-4 mr-2" />
            Upload New Resume
          </Button>
        </div>
      </div>

      {/* Overall Score Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-200 dark:text-gray-700"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(overallScore / 100) * 314} 314`}
                    className="text-purple-500 transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">{overallScore}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">/ 100</div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Overall Resume Score</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Above average performance</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                Market Value
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">${marketValue?.toLocaleString?.() ?? marketValue}</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Estimated annual salary</p>
              <div className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400">
                <ArrowUp className="h-3 w-3" />
                <span>+12% from last analysis</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">Percentile</Badge>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{industryPercentile}th</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Industry percentile</p>
              <p className="text-xs text-blue-600 dark:text-blue-400">Better than 85% of candidates</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analysis */}
      <Tabs defaultValue="breakdown" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="breakdown">Score Breakdown</TabsTrigger>
          <TabsTrigger value="strengths">Strengths</TabsTrigger>
          <TabsTrigger value="improvements">Improvements</TabsTrigger>
          <TabsTrigger value="market">Market Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="breakdown" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Category Scores</CardTitle>
              <CardDescription>Detailed breakdown of your resume performance across key areas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryScores?.map((category: any, index: number) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900 dark:text-white">{category.name}</span>
                      <div className="flex items-center gap-2">
                        {getTrendIcon(category.trend)}
                        <span className="text-sm font-medium">{category.score}/100</span>
                        <Badge variant="outline" className="text-xs">
                          {category.change}
                        </Badge>
                      </div>
                    </div>
                    <Progress value={category.score} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="strengths" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Resume Strengths</CardTitle>
              <CardDescription>Key areas where your resume excels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {strengths?.map((strength: any, index: number) => (
                  <div
                    key={index}
                    className="border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 rounded-lg p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-green-100 dark:bg-green-800 rounded-lg text-green-600 dark:text-green-300">
                        {strength.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-green-800 dark:text-green-300">{strength.title}</h4>
                          <Badge
                            className={`text-xs ${
                              strength.impact === "High"
                                ? "bg-green-600 text-white"
                                : "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-300"
                            }`}
                          >
                            {strength.impact} Impact
                          </Badge>
                        </div>
                        <p className="text-sm text-green-700 dark:text-green-300">{strength.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="improvements" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Improvement Opportunities</CardTitle>
              <CardDescription>Actionable recommendations to boost your resume score</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {improvements?.map((improvement: any, index: number) => (
                  <div
                    key={index}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg text-purple-600 dark:text-purple-400">
                        {improvement.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900 dark:text-white">{improvement.title}</h4>
                          <div className="flex items-center gap-2">
                            <Badge className={`text-xs ${getPriorityColor(improvement.priority)}`}>
                              {improvement.priority}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {improvement.impact}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{improvement.description}</p>
                        <Button size="sm" className="bg-purple-500 hover:bg-purple-600">
                          Get Guidance
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="market" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Market Position Analysis</CardTitle>
              <CardDescription>How your resume compares across different roles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marketComparison?.map((role: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">{role.role}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Salary: {role.salary}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {role.percentile}th percentile
                        </div>
                        <div className="w-24">
                          <Progress value={role.percentile} className="h-2" />
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant={role.percentile >= 70 ? "default" : "outline"}
                        className={role.percentile >= 70 ? "bg-green-600 hover:bg-green-700" : ""}
                      >
                        {role.percentile >= 70 ? "Strong Match" : "Improve"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Salary Potential</CardTitle>
              <CardDescription>Projected earnings based on improvements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">Current</div>
                  <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">${marketValue?.toLocaleString?.() ?? marketValue}</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="text-lg font-semibold text-yellow-800 dark:text-yellow-300">With Improvements</div>
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">$108k</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-lg font-semibold text-green-800 dark:text-green-300">Potential Gain</div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">+$15.5k</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button className="bg-purple-500 hover:bg-purple-600">
          <Download className="h-4 w-4 mr-2" />
          Download Report
        </Button>
        <Button variant="outline">
          <FileText className="h-4 w-4 mr-2" />
          View Detailed Analysis
        </Button>
        <Button variant="outline">
          <Clock className="h-4 w-4 mr-2" />
          Schedule Review
        </Button>
      </div>
    </div>
  );
}