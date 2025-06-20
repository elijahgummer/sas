import { Rocket, FileText, Brain, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

import { useInView } from "react-intersection-observer";

const FadeInWhenVisible = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className} ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};


export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-20 md:py-28 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <FadeInWhenVisible className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 text-sm font-medium mb-2">
            <Rocket className="h-3.5 w-3.5 mr-1.5" />
            <span>Simple Process</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-gray-900 dark:text-white">
            How CVWorth Works
          </h2>
          <p className="max-w-[800px] text-gray-600 dark:text-gray-300 md:text-lg">
            Get your resume analyzed and improved in just three simple steps
          </p>
        </FadeInWhenVisible>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <FadeInWhenVisible>
            <div className="relative text-center group">
              <div className="relative mx-auto w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-purple-100 dark:bg-purple-900/40 rounded-full"></div>
                <div className="relative flex items-center justify-center w-full h-full bg-white dark:bg-gray-800 rounded-full border-2 border-purple-200 dark:border-purple-800 group-hover:border-purple-400 dark:group-hover:border-purple-600 transition-colors duration-300">
                  <span className="text-2xl font-bold text-purple-500 dark:text-purple-400">1</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Upload Your Resume</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Simply upload your current resume in PDF, Word, or text format. Our AI will instantly begin
                analyzing your content.
              </p>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <FileText className="h-4 w-4" />
                  <span>PDF, DOCX, TXT supported</span>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={150}>
            <div className="relative text-center group">
              <div className="relative mx-auto w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-purple-100 dark:bg-purple-900/40 rounded-full"></div>
                <div className="relative flex items-center justify-center w-full h-full bg-white dark:bg-gray-800 rounded-full border-2 border-purple-200 dark:border-purple-800 group-hover:border-purple-400 dark:group-hover:border-purple-600 transition-colors duration-300">
                  <span className="text-2xl font-bold text-purple-500 dark:text-purple-400">2</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our advanced AI analyzes your resume across multiple dimensions including ATS compatibility, keyword
                optimization, and market value.
              </p>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Brain className="h-4 w-4" />
                  <span>Analysis complete in 30 seconds</span>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={300}>
            <div className="relative text-center group">
              <div className="relative mx-auto w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-purple-100 dark:bg-purple-900/40 rounded-full"></div>
                <div className="relative flex items-center justify-center w-full h-full bg-white dark:bg-gray-800 rounded-full border-2 border-purple-200 dark:border-purple-800 group-hover:border-purple-400 dark:group-hover:border-purple-600 transition-colors duration-300">
                  <span className="text-2xl font-bold text-purple-500 dark:text-purple-400">3</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Get Insights & Improve</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Receive detailed insights, improvement suggestions, and your resume&#39;s market worth. Apply changes
                and track your progress.
              </p>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <TrendingUp className="h-4 w-4" />
                  <span>Instant actionable insights</span>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>

        <FadeInWhenVisible delay={400} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Ready to see your resume's true potential?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join thousands of professionals who have improved their resumes and landed better jobs.
            </p>
            <Button className="bg-purple-500 hover:bg-purple-600 text-white" size="lg">
              Start Free Analysis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}