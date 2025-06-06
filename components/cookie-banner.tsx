"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setShowBanner(false)
    router.push("/cookies-policy")
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="bg-slate-900/95 backdrop-blur-sm border-emerald-500/30 rounded-2xl">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-white font-semibold">Cookie Notice</h3>
            <button onClick={() => setShowBanner(false)} className="text-gray-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            We use cookies to enhance your experience on our platform. By continuing to browse, you agree to our use of
            cookies.
          </p>
          <div className="flex space-x-3">
            <Button
              onClick={handleAccept}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-sm px-4 py-2"
            >
              Accept
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="border-emerald-500/30 text-gray-300 hover:text-white text-sm px-4 py-2"
            >
              Decline
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
