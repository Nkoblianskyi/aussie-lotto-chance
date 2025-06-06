import { Shield, Lock, Eye, Users, FileText, Clock, Phone, Mail } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <Header />

      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-emerald-600 to-teal-700 p-4 rounded-full mb-6">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-6">
              Privacy{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how Aussie Lotto Chance collects, uses, and protects
              your personal information.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Information We Collect</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Personal Information",
                  description:
                    "Information you provide when creating an account or using our services, including your name, email, address, and payment details.",
                  icon: Users,
                  color: "from-emerald-600 to-emerald-800",
                  border: "border-emerald-400",
                  accent: "bg-emerald-500",
                  items: [
                    "Full name and contact details",
                    "Date of birth and address",
                    "Payment information",
                    "Identity verification documents",
                  ],
                },
                {
                  title: "Usage Information",
                  description:
                    "Information about how you use our website and services, including your interactions, preferences, and technical data.",
                  icon: Eye,
                  color: "from-teal-600 to-teal-800",
                  border: "border-teal-400",
                  accent: "bg-teal-500",
                  items: [
                    "Website usage patterns",
                    "Device and browser information",
                    "IP address and location",
                    "Game preferences and history",
                  ],
                },
              ].map((section, index) => (
                <div key={index} className="group">
                  <div className="relative">
                    <div
                      className={`absolute -top-4 -left-4 w-12 h-12 ${section.accent} rounded-full flex items-center justify-center border-4 border-white`}
                    >
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div
                      className={`bg-gradient-to-br ${section.color} p-8 pt-12 rounded-3xl border-4 ${section.border} hover:scale-105 transition-transform duration-300`}
                    >
                      <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                      <p className="text-white/90 leading-relaxed mb-4">{section.description}</p>
                      <div className="space-y-2">
                        <h4 className="text-white font-semibold text-sm">Includes:</h4>
                        <ul className="text-white/80 text-sm space-y-1">
                          {section.items.map((item, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
                              {item}
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

          {/* How We Use Information */}
          <div className="mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-3xl transform rotate-1"></div>
              <div className="relative bg-gradient-to-br from-cyan-600 to-cyan-800 p-8 rounded-3xl border-4 border-cyan-400">
                <div className="flex items-center mb-6">
                  <FileText className="w-8 h-8 text-white mr-3" />
                  <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-xl">
                      <h3 className="text-white font-semibold mb-2">Service Provision</h3>
                      <p className="text-white/90 text-sm">
                        To provide, maintain, and improve our lottery services and platform functionality.
                      </p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl">
                      <h3 className="text-white font-semibold mb-2">Account Management</h3>
                      <p className="text-white/90 text-sm">
                        To create and manage your account, process transactions, and provide customer support.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-xl">
                      <h3 className="text-white font-semibold mb-2">Legal Compliance</h3>
                      <p className="text-white/90 text-sm">
                        To comply with legal obligations, including age verification and responsible gaming
                        requirements.
                      </p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl">
                      <h3 className="text-white font-semibold mb-2">Communication</h3>
                      <p className="text-white/90 text-sm">
                        To send you important updates, promotional offers, and service-related communications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl transform -rotate-1"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl border-4 border-blue-400">
                <div className="flex items-center mb-6">
                  <Lock className="w-8 h-8 text-white mr-3" />
                  <h2 className="text-2xl font-bold text-white">How We Protect Your Data</h2>
                </div>
                <div className="space-y-4 text-white/90">
                  <p className="leading-relaxed">
                    We implement industry-standard security measures to protect your personal information from
                    unauthorized access, disclosure, alteration, or destruction.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white/10 p-4 rounded-xl text-center">
                      <div className="text-2xl mb-2">🔐</div>
                      <h3 className="text-white font-semibold mb-1">Encryption</h3>
                      <p className="text-xs">SSL/TLS encryption for all data transmission</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl text-center">
                      <div className="text-2xl mb-2">🛡️</div>
                      <h3 className="text-white font-semibold mb-1">Secure Storage</h3>
                      <p className="text-xs">Protected servers with access controls</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl text-center">
                      <div className="text-2xl mb-2">👥</div>
                      <h3 className="text-white font-semibold mb-1">Limited Access</h3>
                      <p className="text-xs">Only authorized personnel can access data</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Your Privacy Rights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Access",
                  description: "Request a copy of the personal information we hold about you",
                  icon: "👁️",
                  color: "from-emerald-600 to-emerald-800",
                  border: "border-emerald-400",
                },
                {
                  title: "Correction",
                  description: "Request correction of inaccurate or incomplete personal information",
                  icon: "✏️",
                  color: "from-teal-600 to-teal-800",
                  border: "border-teal-400",
                },
                {
                  title: "Deletion",
                  description: "Request deletion of your personal information in certain circumstances",
                  icon: "🗑️",
                  color: "from-cyan-600 to-cyan-800",
                  border: "border-cyan-400",
                },
                {
                  title: "Portability",
                  description: "Request transfer of your data to another service provider",
                  icon: "📦",
                  color: "from-blue-600 to-blue-800",
                  border: "border-blue-400",
                },
                {
                  title: "Objection",
                  description: "Object to processing of your personal information for certain purposes",
                  icon: "🚫",
                  color: "from-indigo-600 to-indigo-800",
                  border: "border-indigo-400",
                },
                {
                  title: "Restriction",
                  description: "Request restriction of processing in certain circumstances",
                  icon: "⏸️",
                  color: "from-purple-600 to-purple-800",
                  border: "border-purple-400",
                },
              ].map((right, index) => (
                <div key={index} className="group">
                  <div className="relative">
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-gray-300"></div>
                    <div
                      className={`bg-gradient-to-br ${right.color} p-6 rounded-2xl border-3 ${right.border} hover:scale-105 transition-transform duration-300 text-center`}
                    >
                      <div className="text-3xl mb-3">{right.icon}</div>
                      <h3 className="text-white font-bold mb-2">{right.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">{right.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Retention */}
          <div className="mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-3xl transform rotate-2"></div>
              <div className="relative bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 rounded-3xl border-4 border-indigo-400">
                <h2 className="text-2xl font-bold text-white mb-6">Data Retention</h2>
                <div className="space-y-4 text-white/90">
                  <p className="leading-relaxed">
                    We retain your personal information only for as long as necessary to fulfill the purposes for which
                    it was collected, comply with legal obligations, and resolve disputes.
                  </p>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h3 className="text-white font-semibold mb-2">Retention Periods</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Account information: Retained while account is active plus 7 years</li>
                      <li>• Transaction records: 7 years for legal and regulatory compliance</li>
                      <li>• Marketing data: Until you opt out or 3 years of inactivity</li>
                      <li>• Technical logs: 12 months for security and performance monitoring</li>
                    </ul>
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
