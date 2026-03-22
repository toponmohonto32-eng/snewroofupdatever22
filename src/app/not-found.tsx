'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Car, Home, Phone, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <Card className="max-w-lg w-full bg-zinc-900/50 border-white/10 text-center">
        <CardContent className="p-8 md:p-12">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
              <Car className="h-6 w-6 text-black" />
            </div>
            <span className="text-2xl font-bold text-white">
              TopOn<span className="text-amber-400">Limo</span>
            </span>
          </div>
          
          {/* 404 */}
          <div className="mb-6">
            <span className="text-8xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              404
            </span>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-3">Page Not Found</h2>
          <p className="text-white/60 mb-8 max-w-sm mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Let us take you back to your destination.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/" className="flex-1">
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </Button>
            </Link>
            <Link href="/#contact" className="flex-1">
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                <Phone className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>
          
          <button 
            onClick={() => window.history.back()}
            className="mt-6 text-sm text-white/40 hover:text-amber-400 transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </CardContent>
      </Card>
    </div>
  )
}
