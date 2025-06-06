import { Cookie, Shield, Settings, Eye, FileText, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <Header />

      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-emerald-600 to-teal-700 p-4 rounded-full mb-6">
              <Cookie className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-6">
              Cookies{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn how Aussie Lotto Chance uses cookies to enhance your experience and protect your privacy.
            </p>
          </div>

          {/* What are Cookies */}
          <div className="mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl transform rotate-1"></div>
              <div className="relative bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 rounded-3xl border-4 border-emerald-400">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-white mr-3" />
                  <h2 className="text-2xl font-bold text-white">What are Cookies?</h2>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our website. They help us
                  provide you with a better experience by remembering your preferences, keeping you logged in, and
                  helping us understand how you use our platform.
                </p>
              </div>
            </div>
          </div>

          {/* Types of Cookies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Types of Cookies We Use</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Essential Cookies",
                  description:
                    "These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.",
                  icon: Shield,
                  color: "from-emerald-600 to-emerald-800",
                  border: "border-emerald-400",
                  accent: "bg-emerald-500",
                  examples: ["Login sessions", "Security tokens", "Load balancing"],
                },
                {
                  title: "Functional Cookies",
                  description:
                    "These cookies allow us to remember choices you make and provide enhanced, more personal features.",
                  icon: Settings,
                  color: "from-teal-600 to-teal-800",
                  border: "border-teal-400",
                  accent: "bg-teal-500",
                  examples: ["Language preferences", "Theme settings", "Form data"],
                },
                {
                  title: "Analytics Cookies",
                  description:
                    "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
                  icon: Eye,
                  color: "from-cyan-600 to-cyan-800",
                  border: "border-cyan-400",
                  accent: "bg-cyan-500",
                  examples: ["Page views", "User behavior", "Performance metrics"],
                },
                {
                  title: "Marketing Cookies",
                  description:
                    "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
                  icon: FileText,
                  color: "from-blue-600 to-blue-800",
                  border: "border-blue-400",
                  accent: "bg-blue-500",
                  examples: ["Ad targeting", "Campaign tracking", "Social media integration"],
                },
              ].map((cookie, index) => (
                <div key={index} className="group">
                  <div className="relative">
                    <div
                      className={`absolute -top-4 -left-4 w-12 h-12 ${cookie.accent} rounded-full flex items-center justify-center border-4 border-white`}
                    >
                      <cookie.icon className="w-6 h-6 text-white" />
                    </div>
                    <div
                      className={`bg-gradient-to-br ${cookie.color} p-8 pt-12 rounded-3xl border-4 ${cookie.border} hover:scale-105 transition-transform duration-300`}
                    >
                      <h3 className="text-xl font-bold text-white mb-4">{cookie.title}</h3>
                      <p className="text-white/90 leading-relaxed mb-4">{cookie.description}</p>
                      <div className="space-y-2">
                        <h4 className="text-white font-semibold text-sm">Examples:</h4>
                        <ul className="text-white/80 text-sm space-y-1">
                          {cookie.examples.map((example, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cookie Management */}
          <div className="mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-3xl transform -rotate-1"></div>
              <div className="relative bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 rounded-3xl border-4 border-indigo-400">
                <h2 className="text-2xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
                <div className="space-y-4 text-white/90">
                  <p className="leading-relaxed">
                    You have the right to decide whether to accept or reject cookies. You can exercise your cookie
                    rights by setting your preferences in the cookie consent manager that appears when you first visit
                    our website.
                  </p>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h3 className="text-white font-semibold mb-2">Browser Settings</h3>
                    <p className="text-sm">
                      You can also set or amend your web browser controls to accept or refuse cookies. If you choose to
                      reject cookies, you may still use our website though your access to some functionality and areas
                      may be restricted.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Party Cookies */}
          <div className="mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl transform rotate-2"></div>
              <div className="relative bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-3xl border-4 border-purple-400">
                <h2 className="text-2xl font-bold text-white mb-6">Third-Party Cookies</h2>
                <div className="space-y-4 text-white/90">
                  <p className="leading-relaxed">
                    In addition to our own cookies, we may also use various third-party cookies to report usage
                    statistics of the service, deliver advertisements on and through the service, and so on.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/10 p-4 rounded-xl">
                      <h3 className="text-white font-semibold mb-2">Google Analytics</h3>
                      <p className="text-sm">Used to analyze website traffic and user behavior</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl">
                      <h3 className="text-white font-semibold mb-2">Social Media</h3>
                      <p className="text-sm">Integration with social media platforms for sharing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
