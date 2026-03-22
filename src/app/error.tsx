'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

interface ErrorBoundaryProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <Card className="max-w-md w-full bg-zinc-900/50 border-white/10">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center">
            <AlertTriangle className="h-8 w-8 text-red-400" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-2">Something went wrong!</h2>
          <p className="text-white/60 mb-6">
            We apologize for the inconvenience. Our team has been notified and is working on a fix.
          </p>
          
          <div className="flex flex-col gap-3">
            <Button 
              onClick={reset}
              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/'}
              className="w-full border-white/20 text-white hover:bg-white/10"
            >
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Button>
          </div>
          
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-6 p-4 bg-zinc-800 rounded-lg text-left">
              <p className="text-xs text-white/40 font-mono break-all">
                {error.message}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
