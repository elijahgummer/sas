import { Award, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

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


export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 md:py-28 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <FadeInWhenVisible className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 text-sm font-medium mb-2">
            <Award className="h-3.5 w-3.5 mr-1.5" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-gray-900 dark:text-white">
            What Our Users Say
          </h2>
          <p className="max-w-[800px] text-gray-600 dark:text-gray-300 md:text-lg">
            Thousands of professionals have improved their resumes and advanced their careers with CVWorth
          </p>
        </FadeInWhenVisible>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Testimonial 1 */}
          <FadeInWhenVisible>
            <Card className="bg-white dark:bg-gray-800 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 card-shadow h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300 mb-4">
                  &quot;CVWorth helped me identify exactly what was missing from my resume. After implementing their
                  suggestions, I got 3x more interview calls and landed my dream job at Google!&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=40&width=40&text=SM"
                      width={40}
                      height={40}
                      alt="Sarah Martinez"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Sarah Martinez</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Software Engineer at Google</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInWhenVisible>

          {/* Testimonial 2 */}
          <FadeInWhenVisible delay={150}>
            <Card className="bg-white dark:bg-gray-800 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 card-shadow h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300 mb-4">
                  &quot;The AI analysis was incredibly detailed. It caught formatting issues I never noticed and
                  suggested keywords that made my resume ATS-friendly. Increased my response rate by 400%!&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=40&width=40&text=MJ"
                      width={40}
                      height={40}
                      alt="Michael Johnson"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Michael Johnson</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Marketing Director at Microsoft</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInWhenVisible>

          {/* Testimonial 3 */}
          <FadeInWhenVisible delay={300}>
            <Card className="bg-white dark:bg-gray-800 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 card-shadow h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300 mb-4">
                  &quot;As a career changer, I was struggling to position my experience. CVWorth&apos;s career fit analysis
                  helped me identify transferable skills and reframe my background perfectly.&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=40&width=40&text=EP"
                      width={40}
                      height={40}
                      alt="Emily Parker"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Emily Parker</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Product Manager at Amazon</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInWhenVisible>

          {/* Testimonial 4 */}
          <FadeInWhenVisible delay={450}>
            <Card className="bg-white dark:bg-gray-800 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 card-shadow h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300 mb-4">
                  &quot;The salary insights were eye-opening! I realized I was undervaluing myself. Used their data to
                  negotiate a 35% salary increase in my current role.&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=40&width=40&text=DL"
                      width={40}
                      height={40}
                      alt="David Lee"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">David Lee</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Data Scientist at Netflix</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInWhenVisible>

          {/* Testimonial 5 */}
          <FadeInWhenVisible delay={600}>
            <Card className="bg-white dark:bg-gray-800 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 card-shadow h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300 mb-4">
                  &quot;The cover letter generator saved me hours of work. It created personalized, compelling letters
                  for each application. My application quality improved dramatically!&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=40&width=40&text=JW"
                      width={40}
                      height={40}
                      alt="Jessica Wong"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Jessica Wong</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">UX Designer at Airbnb</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInWhenVisible>

          {/* Testimonial 6 */}
          <FadeInWhenVisible delay={750}>
            <Card className="bg-white dark:bg-gray-800 border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 card-shadow h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300 mb-4">
                  &quot;The skill gap analysis was a game-changer. It showed me exactly what to learn for my target roles
                  and provided a clear roadmap for career advancement.&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=40&width=40&text=RC"
                      width={40}
                      height={40}
                      alt="Robert Chen"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Robert Chen</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">DevOps Engineer at Tesla</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInWhenVisible>

          {/* Stats and CTA */}
          <FadeInWhenVisible delay={900} className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="grid gap-8 md:grid-cols-3 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10,000+</div>
                  <div className="text-gray-600 dark:text-gray-300">Resumes Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">4.9/5</div>
                  <div className="text-gray-600 dark:text-gray-300">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">85%</div>
                  <div className="text-gray-600 dark:text-gray-300">Get More Interviews</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Join thousands of successful professionals
              </h3>
              <Button className="bg-purple-500 hover:bg-purple-600 text-white" size="lg">
                Start Your Success Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}