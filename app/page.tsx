"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Clock, Shield, Users, Award, Zap, Globe } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const calculateTimeLeft = () => {
      const now = new Date()
      const nextThursday = new Date()

      // Find next Thursday at 20:30 AEST
      const daysUntilThursday = (4 - now.getDay() + 7) % 7 || 7
      nextThursday.setDate(now.getDate() + daysUntilThursday)
      nextThursday.setHours(20, 30, 0, 0)

      // If it's Thursday and past 20:30, move to next Thursday
      if (now.getDay() === 4 && now.getHours() >= 20 && now.getMinutes() >= 30) {
        nextThursday.setDate(nextThursday.getDate() + 7)
      }

      const difference = nextThursday.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 overflow-hidden">
      <Header />
      <CookieBanner />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-ping delay-2000"></div>
        </div>

        <div
          className={`relative max-w-7xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-6 animate-fade-in-up">
              Your Gateway to
              <br />
              <span className="inline-block">Australian Lotteries</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-300">
              Experience the thrill of Australian lottery games with our licensed platform. Join thousands of players in
              the ultimate gaming adventure.
            </p>
          </div>

          {/* Powerball Timer */}
          <div className="max-w-4xl mx-auto mb-12 relative animate-fade-in-up delay-500">
            {/* Unique hexagon-like shape */}
            <div
              className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 relative overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/25"
              style={{
                clipPath: "polygon(10% 0%, 90% 0%, 100% 25%, 100% 75%, 90% 100%, 10% 100%, 0% 75%, 0% 25%)",
              }}
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 animate-pulse"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-white mr-3 animate-spin-slow" />
                  <h2 className="text-3xl font-bold text-white">Next Powerball Draw</h2>
                </div>
                <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-6">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Minutes", value: timeLeft.minutes },
                    { label: "Seconds", value: timeLeft.seconds },
                  ].map((item, index) => (
                    <div key={index} className="text-center group">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-2 border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 group-hover:shadow-lg">
                        <span className="text-3xl font-bold text-white transition-all duration-300 group-hover:text-yellow-300">
                          {item.value.toString().padStart(2, "0")}
                        </span>
                      </div>
                      <span className="text-white/90 text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/90 mb-6 font-medium">Every Thursday at 20:30 AEST</p>
                <Link href="/login">
                  <Button className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-3 text-lg font-bold rounded-full transform hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-white/25 animate-bounce-subtle">
                    Buy Ticket
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Platform Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
              About{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Aussie Lotto Chance
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We are Australia's premier licensed lottery information platform, dedicated to providing you with the most
              comprehensive and secure lottery gaming experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              {/* Mission Card - Unique border */}
              <div className="relative group animate-slide-in-left">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 rounded-3xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-white/90 leading-relaxed">
                    At Aussie Lotto Chance, we believe that everyone deserves access to fair, transparent, and exciting
                    lottery experiences. Our platform combines cutting-edge technology with traditional Australian
                    values to create a gaming environment that's both thrilling and trustworthy.
                  </p>
                </div>
              </div>

              {/* Why Choose Us Card - Unique border */}
              <div className="relative group animate-slide-in-left delay-300">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-gradient-to-br from-teal-600 to-teal-800 p-8 rounded-3xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/25">
                  <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us</h3>
                  <p className="text-white/90 leading-relaxed">
                    With years of experience in the Australian gaming industry, we've built a reputation for excellence,
                    security, and customer satisfaction. Our licensed platform ensures that every transaction is
                    protected and every game is fair.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
              {[
                {
                  icon: Shield,
                  title: "Licensed & Secure",
                  desc: "Fully licensed Australian operator",
                  color: "from-emerald-500 to-emerald-700",
                  borderColor: "border-emerald-400",
                },
                {
                  icon: Users,
                  title: "Trusted Community",
                  desc: "Thousands of satisfied players",
                  color: "from-teal-500 to-teal-700",
                  borderColor: "border-teal-400",
                },
                {
                  icon: Award,
                  title: "Award Winning",
                  desc: "Industry recognition for excellence",
                  color: "from-cyan-500 to-cyan-700",
                  borderColor: "border-cyan-400",
                },
                {
                  icon: Zap,
                  title: "Instant Results",
                  desc: "Real-time draw results and notifications",
                  color: "from-blue-500 to-blue-700",
                  borderColor: "border-blue-400",
                },
              ].map((item, index) => (
                <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <div
                    className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl border-4 ${item.borderColor} hover:scale-110 hover:rotate-3 transition-all duration-300 text-center cursor-pointer hover:shadow-2xl`}
                  >
                    <item.icon className="w-10 h-10 text-white mx-auto mb-3 group-hover:animate-bounce" />
                    <h4 className="text-white font-bold mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-white/90 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Large conclusion card - Unique shape with borders */}
          <div className="relative group animate-fade-in-up delay-700">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
            <div className="relative bg-gradient-to-r from-emerald-700 to-teal-700 p-12 rounded-3xl border-4 border-emerald-300 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/25">
              <Globe className="w-16 h-16 text-white mb-6 hover:animate-spin transition-all duration-300" />
              <h3 className="text-3xl font-bold text-white mb-6">Serving Australia with Pride</h3>
              <p className="text-white/90 text-lg leading-relaxed max-w-4xl">
                From the bustling streets of Sydney to the cultural heart of Melbourne, from the tropical beauty of
                Queensland to the wine regions of South Australia - Aussie Lotto Chance connects players across the
                continent. We're not just a platform; we're part of the Australian lottery tradition, bringing
                communities together through the shared excitement of possibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values & Team Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
              Our{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Values & Commitment
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              At Aussie Lotto Chance, we're more than just a platform - we're a team of passionate Australians dedicated
              to creating the best lottery experience possible.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Transparency First",
                description:
                  "Every process, every draw, every transaction is completely transparent. We believe you have the right to know exactly how everything works.",
                icon: "🔍",
                color: "from-emerald-600 to-emerald-800",
                border: "border-emerald-400",
                accent: "bg-emerald-500",
              },
              {
                title: "Australian Heritage",
                description:
                  "Born and bred in Australia, we understand the local culture, values, and what makes Australian lottery players unique.",
                icon: "🇦🇺",
                color: "from-teal-600 to-teal-800",
                border: "border-teal-400",
                accent: "bg-teal-500",
              },
              {
                title: "Innovation & Security",
                description:
                  "We combine cutting-edge technology with bank-level security to ensure your experience is both exciting and completely safe.",
                icon: "🛡️",
                color: "from-cyan-600 to-cyan-800",
                border: "border-cyan-400",
                accent: "bg-cyan-500",
              },
            ].map((value, index) => (
              <div key={index} className="group animate-slide-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative">
                  {/* Decorative top element */}
                  <div
                    className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 ${value.accent} rounded-full flex items-center justify-center border-4 border-white group-hover:animate-bounce transition-all duration-300`}
                  >
                    <span className="text-2xl">{value.icon}</span>
                  </div>
                  <div
                    className={`bg-gradient-to-br ${value.color} p-8 pt-12 rounded-3xl border-4 ${value.border} hover:scale-105 hover:rotate-1 transition-all duration-300 text-center cursor-pointer hover:shadow-2xl`}
                  >
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team & Approach */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="relative group animate-slide-in-left">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-300"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl border-4 border-blue-400 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Team</h3>
                  <p className="text-white/90 leading-relaxed">
                    Our diverse team includes lottery industry veterans, cybersecurity experts, customer service
                    specialists, and technology innovators. Each member brings years of experience and a genuine passion
                    for creating exceptional user experiences.
                  </p>
                </div>
              </div>

              <div className="relative group animate-slide-in-left delay-300">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-3xl transform -rotate-2 group-hover:-rotate-3 transition-transform duration-300"></div>
                <div className="relative bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 rounded-3xl border-4 border-indigo-400 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Approach</h3>
                  <p className="text-white/90 leading-relaxed">
                    We listen to our community, continuously improve our platform, and never compromise on security or
                    fairness. Every feature we develop is tested rigorously and designed with the Australian player in
                    mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-slide-in-right">
              {/* Statistics Cards */}
              {[
                {
                  number: "50,000+",
                  label: "Active Players",
                  description: "Trusted by thousands across Australia",
                  color: "from-emerald-600 to-emerald-800",
                  border: "border-emerald-400",
                },
                {
                  number: "99.9%",
                  label: "Uptime",
                  description: "Reliable platform you can count on",
                  color: "from-teal-600 to-teal-800",
                  border: "border-teal-400",
                },
                {
                  number: "24/7",
                  label: "Support",
                  description: "Always here when you need us",
                  color: "from-cyan-600 to-cyan-800",
                  border: "border-cyan-400",
                },
                {
                  number: "5 Years",
                  label: "Experience",
                  description: "Proven track record in the industry",
                  color: "from-blue-600 to-blue-800",
                  border: "border-blue-400",
                },
              ].map((stat, index) => (
                <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="relative">
                    <div
                      className={`absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full border-2 ${stat.border} group-hover:animate-ping`}
                    ></div>
                    <div
                      className={`bg-gradient-to-br ${stat.color} p-6 rounded-2xl border-3 ${stat.border} hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer hover:shadow-2xl`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-3xl font-bold text-white mb-1 group-hover:text-yellow-300 transition-colors duration-300">
                            {stat.number}
                          </div>
                          <div className="text-white/80 font-semibold mb-1">{stat.label}</div>
                          <div className="text-white/70 text-sm">{stat.description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment Statement */}
          <div className="mt-16 relative group animate-fade-in-up delay-1000">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
            <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-12 rounded-3xl border-4 border-purple-400 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25">
              <h3 className="text-3xl font-bold text-white mb-6">Our Promise to You</h3>
              <p className="text-white/90 text-lg leading-relaxed max-w-4xl mx-auto mb-6">
                We promise to always put our players first, maintain the highest standards of security and fairness, and
                continue innovating to make your lottery experience better every day. Your trust is our most valuable
                asset, and we work tirelessly to earn it every single day.
              </p>
              <div className="flex justify-center space-x-8 text-white/80">
                {[
                  { emoji: "🤝", label: "Trust" },
                  { emoji: "🔒", label: "Security" },
                  { emoji: "⚡", label: "Innovation" },
                  { emoji: "🎯", label: "Excellence" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center group hover:scale-110 transition-transform duration-300 cursor-pointer"
                  >
                    <div className="text-2xl mb-2 group-hover:animate-bounce">{item.emoji}</div>
                    <div className="font-semibold group-hover:text-yellow-300 transition-colors duration-300">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lottery Journey Through Time - Redesigned */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
              Lottery Journey{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Through Time
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how Australian lotteries have evolved through the decades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                year: "1970s",
                title: "First Public Lotteries",
                description: "Launch of modern format lotteries to fund community projects and public infrastructure",
                color: "from-emerald-600 to-emerald-800",
                borderColor: "border-emerald-400",
                bgColor: "bg-emerald-500",
              },
              {
                year: "1990s",
                title: "Process Automation",
                description: "Introduction of computer systems for conducting draws and processing results",
                color: "from-teal-600 to-teal-800",
                borderColor: "border-teal-400",
                bgColor: "bg-teal-500",
              },
              {
                year: "2010s",
                title: "Digital Revolution",
                description: "Online platforms and mobile apps revolutionize how Australians play lotteries",
                color: "from-cyan-600 to-cyan-800",
                borderColor: "border-cyan-400",
                bgColor: "bg-cyan-500",
              },
              {
                year: "2020s",
                title: "Smart Platforms",
                description: "AI-powered experiences and personalized gaming with advanced security",
                color: "from-blue-600 to-blue-800",
                borderColor: "border-blue-400",
                bgColor: "bg-blue-500",
              },
            ].map((item, index) => (
              <div key={index} className="group animate-slide-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative">
                  {/* Decorative corner */}
                  <div
                    className={`absolute -top-2 -right-2 w-8 h-8 ${item.bgColor} rounded-full border-4 border-white group-hover:animate-spin transition-all duration-300`}
                  ></div>
                  <div
                    className={`bg-gradient-to-br ${item.color} p-8 rounded-3xl border-4 ${item.borderColor} hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer hover:shadow-2xl`}
                  >
                    <div
                      className={`inline-block ${item.bgColor} text-white px-4 py-2 rounded-full text-sm font-bold mb-4 border-2 border-white group-hover:animate-pulse`}
                    >
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dreams Mosaic */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
              Dreams{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Mosaic
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Why do people choose lotteries? Everyone has their own reason...
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Belief in luck",
              "Love for surprises",
              "Thrill of anticipation",
              "Family tradition",
              "Playing with friends",
              "Thursday morning ritual",
              "Dreams of change",
              "Hope for better",
              "Moment of excitement",
              "Generational tradition",
              "Faith in destiny",
              "Magic of numbers",
            ].map((phrase, index) => {
              const colors = [
                { bg: "from-emerald-600 to-emerald-800", border: "border-emerald-400", accent: "bg-emerald-500" },
                { bg: "from-teal-600 to-teal-800", border: "border-teal-400", accent: "bg-teal-500" },
                { bg: "from-cyan-600 to-cyan-800", border: "border-cyan-400", accent: "bg-cyan-500" },
                { bg: "from-blue-600 to-blue-800", border: "border-blue-400", accent: "bg-blue-500" },
              ]
              const colorSet = colors[index % colors.length]

              return (
                <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative">
                    {/* Decorative elements */}
                    <div
                      className={`absolute -top-1 -left-1 w-4 h-4 ${colorSet.accent} rounded-full group-hover:animate-ping`}
                    ></div>
                    <div
                      className={`absolute -bottom-1 -right-1 w-6 h-6 ${colorSet.accent} rounded-full opacity-60 group-hover:animate-bounce`}
                    ></div>
                    <div
                      className={`bg-gradient-to-br ${colorSet.bg} p-6 rounded-2xl border-3 ${colorSet.border} hover:scale-110 hover:rotate-3 transition-all duration-300 text-center cursor-pointer hover:shadow-2xl`}
                    >
                      <p className="text-white font-bold text-sm md:text-base leading-tight group-hover:text-yellow-300 transition-colors duration-300">
                        {phrase}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Australian Lucky Symbols */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
              Australian{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Lucky Symbols
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Australian culture is rich with symbols that bring luck and inspiration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                symbol: "🌿",
                name: "Eucalyptus",
                meaning: "Symbol of renewal",
                description: "Symbol of renewal and fresh beginnings, bringing hope for new opportunities",
                color: "from-emerald-600 to-emerald-800",
                border: "border-emerald-400",
                accent: "bg-emerald-500",
              },
              {
                symbol: "🪃",
                name: "Boomerang",
                meaning: "Symbol of return and luck",
                description: "Ancient symbol of luck's return and dreams coming true",
                color: "from-teal-600 to-teal-800",
                border: "border-teal-400",
                accent: "bg-teal-500",
              },
              {
                symbol: "🦘",
                name: "Kangaroo",
                meaning: "Symbol of moving forward",
                description: "Symbol of moving forward and reaching new heights",
                color: "from-cyan-600 to-cyan-800",
                border: "border-cyan-400",
                accent: "bg-cyan-500",
              },
              {
                symbol: "💎",
                name: "Opal",
                meaning: "Australia's national gemstone",
                description: "Australia's national gemstone, symbol of hope and good fortune",
                color: "from-blue-600 to-blue-800",
                border: "border-blue-400",
                accent: "bg-blue-500",
              },
              {
                symbol: "⭐",
                name: "Southern Cross",
                meaning: "Symbol of guidance",
                description: "Constellation that guides to dreams and shows the right path",
                color: "from-indigo-600 to-indigo-800",
                border: "border-indigo-400",
                accent: "bg-indigo-500",
              },
              {
                symbol: "🌅",
                name: "Dawn",
                meaning: "Symbol of new beginnings",
                description: "Symbol of new beginnings and limitless possibilities",
                color: "from-purple-600 to-purple-800",
                border: "border-purple-400",
                accent: "bg-purple-500",
              },
            ].map((item, index) => (
              <div key={index} className="group animate-slide-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="relative">
                  {/* Decorative corner triangles */}
                  <div
                    className={`absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-white rounded-tr-3xl group-hover:animate-pulse`}
                  ></div>
                  <div
                    className={`bg-gradient-to-br ${item.color} p-8 rounded-3xl border-4 ${item.border} hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer hover:shadow-2xl`}
                  >
                    <div className="text-center">
                      <div
                        className={`inline-block ${item.accent} rounded-full p-4 mb-4 border-4 border-white group-hover:animate-bounce`}
                      >
                        <span className="text-4xl">{item.symbol}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-white/80 text-sm font-semibold mb-3">{item.meaning}</p>
                      <p className="text-white/90 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes About Dreams and Luck */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
              Quotes About{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Dreams and Luck
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Inspiring words from great minds about hope, dreams and possibilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Luck is what happens when preparation meets opportunity.",
                author: "Seneca",
                highlight: "preparation meets opportunity",
                color: "from-emerald-600 to-emerald-800",
                border: "border-emerald-400",
                accent: "bg-emerald-500",
              },
              {
                quote: "A dream you dream alone is only a dream. A dream you dream together is reality.",
                author: "John Lennon",
                highlight: "dream together is reality",
                color: "from-teal-600 to-teal-800",
                border: "border-teal-400",
                accent: "bg-teal-500",
              },
              {
                quote: "Hope is being able to see that there is light despite all of the darkness.",
                author: "Desmond Tutu",
                highlight: "light despite all of the darkness",
                color: "from-cyan-600 to-cyan-800",
                border: "border-cyan-400",
                accent: "bg-cyan-500",
              },
              {
                quote: "The future belongs to those who believe in the beauty of their dreams.",
                author: "Eleanor Roosevelt",
                highlight: "beauty of their dreams",
                color: "from-blue-600 to-blue-800",
                border: "border-blue-400",
                accent: "bg-blue-500",
              },
              {
                quote: "Believe you can and you're halfway there.",
                author: "Theodore Roosevelt",
                highlight: "halfway there",
                color: "from-indigo-600 to-indigo-800",
                border: "border-indigo-400",
                accent: "bg-indigo-500",
              },
              {
                quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
                author: "Ralph Waldo Emerson",
                highlight: "what lies within us",
                color: "from-purple-600 to-purple-800",
                border: "border-purple-400",
                accent: "bg-purple-500",
              },
            ].map((item, index) => (
              <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative">
                  {/* Quote mark decoration */}
                  <div
                    className={`absolute -top-4 -left-4 w-12 h-12 ${item.accent} rounded-full flex items-center justify-center border-4 border-white group-hover:animate-spin`}
                  >
                    <span className="text-white text-2xl font-bold">"</span>
                  </div>
                  <div
                    className={`bg-gradient-to-br ${item.color} p-8 pt-12 rounded-3xl border-4 ${item.border} hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-pointer hover:shadow-2xl`}
                  >
                    <blockquote className="text-white text-lg leading-relaxed mb-6 font-medium">
                      {item.quote.split(item.highlight).map((part, i) => (
                        <span key={i}>
                          {part}
                          {i < item.quote.split(item.highlight).length - 1 && (
                            <span className="text-yellow-300 font-bold bg-yellow-300/20 px-1 rounded group-hover:bg-yellow-300/40 transition-colors duration-300">
                              {item.highlight}
                            </span>
                          )}
                        </span>
                      ))}
                    </blockquote>
                    <cite className="text-white/90 font-bold group-hover:text-yellow-300 transition-colors duration-300">
                      — {item.author}
                    </cite>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-subtle {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out forwards;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }

        .glow-text {
          text-shadow: 0 0 10px rgba(52, 211, 153, 0.5), 0 0 20px rgba(52, 211, 153, 0.3);
        }
      `}</style>
    </div>
  )
}
