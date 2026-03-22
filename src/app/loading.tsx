'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl space-y-6">
          <Skeleton className="h-6 w-48 rounded-full bg-white/10" />
          <Skeleton className="h-16 w-full max-w-lg bg-white/10" />
          <Skeleton className="h-6 w-full max-w-md bg-white/10" />
          <div className="flex gap-4">
            <Skeleton className="h-12 w-40 bg-white/10" />
            <Skeleton className="h-12 w-40 bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function ServiceSkeleton() {
  return (
    <Card className="bg-zinc-900/50 border-white/10 overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <Skeleton className="aspect-video bg-white/5" />
        <CardContent className="p-6 space-y-4">
          <Skeleton className="h-4 w-32 bg-white/10" />
          <Skeleton className="h-6 w-48 bg-white/10" />
          <Skeleton className="h-4 w-full bg-white/10" />
          <Skeleton className="h-4 w-3/4 bg-white/10" />
          <div className="grid grid-cols-2 gap-3">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-20 bg-white/5" />
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

export function VehicleSkeleton() {
  return (
    <Card className="bg-zinc-900/50 border-white/10 overflow-hidden">
      <Skeleton className="aspect-[4/3] bg-white/5" />
      <CardContent className="p-4 space-y-3">
        <Skeleton className="h-4 w-24 bg-white/10" />
        <Skeleton className="h-5 w-32 bg-white/10" />
        <div className="flex gap-2">
          <Skeleton className="h-4 w-16 bg-white/10" />
          <Skeleton className="h-4 w-16 bg-white/10" />
        </div>
      </CardContent>
    </Card>
  )
}

export function FormSkeleton() {
  return (
    <Card className="bg-zinc-900/50 border-white/10">
      <CardContent className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-10 bg-white/5" />
          <Skeleton className="h-10 bg-white/5" />
        </div>
        <Skeleton className="h-10 bg-white/5" />
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-10 bg-white/5" />
          <Skeleton className="h-10 bg-white/5" />
        </div>
        <Skeleton className="h-12 w-full bg-white/5" />
      </CardContent>
    </Card>
  )
}

export default function Loading() {
  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4 space-y-8">
        {/* Hero Skeleton */}
        <HeroSkeleton />
        
        {/* Services Skeleton */}
        <div className="py-8">
          <div className="text-center mb-8">
            <Skeleton className="h-6 w-24 mx-auto mb-3 bg-white/10" />
            <Skeleton className="h-10 w-64 mx-auto bg-white/10" />
          </div>
          <ServiceSkeleton />
        </div>
      </div>
    </div>
  )
}
