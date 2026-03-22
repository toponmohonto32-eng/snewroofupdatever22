'use client'

import { useState, useRef, useMemo, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { format } from 'date-fns'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  Plane, Heart, Briefcase, PartyPopper, Wine, Car, Clock, Shield, Sparkles, 
  Phone, MessageCircle, CalendarDays, MapPin, Star, Check, ChevronRight, 
  Menu, X, ChevronDown, Wifi, Thermometer, Music, Zap, Users, Luggage, 
  Award, CreditCard, HeadphonesIcon, Globe, ArrowRight, Quote, Calculator, 
  Mail, Facebook, Twitter, Instagram, Linkedin, Play, Pause, Volume2, 
  VolumeX, Maximize2, Sunrise, Sunset, Moon, Sun, Info, Clock3,
  ChevronLeft, ExternalLink, MapPinned, User, Building2,
  GlassWater, Tv, Bluetooth, Armchair, Fan, Lightbulb,
  Refrigerator, CupSoda, Radio, Camera, Crown, Gem, Medal, BadgeCheck
} from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

// ============================================
// LAZY LOAD HEAVY COMPONENTS
// ============================================
const MotionDiv = motion.div

// ============================================
// ANIMATION VARIANTS - Optimized for mobile
// ============================================
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

// ============================================
// BRAND CONFIG
// ============================================
const BRAND = {
  name: 'TopOn Limo',
  tagline: 'Luxury You Deserve, Service You Can Trust',
  phone: '+1 (888) 555-LIMO',
  phoneClean: '+18885555466',
  email: 'reservations@toponlimo.com'
}

// ============================================
// IMAGE PLACEHOLDER - Mobile optimized blur
// ============================================
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#27272a" offset="0%" />
      <stop stop-color="#3f3f46" offset="50%" />
      <stop stop-color="#27272a" offset="100%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#27272a" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.5s" repeatCount="indefinite" />
</svg>`

const shimmerDataURL = `data:image/svg+xml;base64,${typeof window !== 'undefined' ? btoa(shimmer(400, 300)) : ''}`

// ============================================
// NAVIGATION - Mobile First
// ============================================
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => setScrolled(window.scrollY > 30), { passive: true })
  }
  
  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ]
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-black/95 backdrop-blur-lg shadow-xl" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
              <Car className="h-5 w-5 md:h-6 md:w-6 text-black" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl md:text-2xl font-bold text-white">
                Elite<span className="text-amber-400">Limo</span>
              </span>
            </div>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm text-white/70 hover:text-amber-400 transition-colors">
                {item.name}
              </a>
            ))}
          </nav>
          
          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${BRAND.phoneClean}`} className="text-white/80 hover:text-amber-400 text-sm">
              {BRAND.phone}
            </a>
            <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
              Book Now
            </Button>
          </div>
          
          {/* Mobile Menu */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/98 border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} 
                   className="block py-2 text-white/80 hover:text-amber-400">
                  {item.name}
                </a>
              ))}
              <Separator className="bg-white/10" />
              <Button className="w-full bg-amber-500 text-black font-semibold">
                Book Now
              </Button>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </header>
  )
}

// ============================================
// HERO - Mobile Optimized
// ============================================
function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background - Optimized for mobile */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-premium.png"
          alt="Luxury Limousine"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23000'/%3E%3C/svg%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 pt-16 pb-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-4 md:mb-6">
              <Crown className="h-3 w-3 mr-1" />
              Premium Luxury Transportation
            </Badge>
          </motion.div>
          
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
          >
            Luxury Limo Service{' '}
            <span className="block text-amber-400">You Can Trust</span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-white/70 mb-6 md:mb-8 max-w-xl"
          >
            Professional chauffeurs, premium fleet, and world-class service for airport transfers, 
            corporate travel, weddings, and special events.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 mb-8"
          >
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold text-base px-6">
              <CalendarDays className="h-4 w-4 mr-2" />
              Book Your Ride
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-base px-6">
              <Phone className="h-4 w-4 mr-2" />
              Get Instant Quote
            </Button>
          </motion.div>
          
          {/* Trust Indicators - Mobile optimized */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 md:gap-4 text-sm"
          >
            {[
              { icon: Shield, text: 'Fully Insured' },
              { icon: Clock, text: '24/7 Service' },
              { icon: Plane, text: 'Flight Tracking' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                <item.icon className="h-4 w-4 text-amber-400" />
                <span className="text-white/80 text-xs md:text-sm">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Stats Bar - Mobile friendly */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm border-t border-white/10"
      >
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="grid grid-cols-4 gap-2 text-center">
            {[
              { value: '15+', label: 'Years' },
              { value: '50K+', label: 'Rides' },
              { value: '99.8%', label: 'On-Time' },
              { value: '5.0', label: 'Rating' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-amber-400 font-bold text-lg md:text-2xl">{stat.value}</div>
                <div className="text-white/50 text-[10px] md:text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

// ============================================
// SERVICES SECTION - Page-like Experience
// ============================================
function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [activeService, setActiveService] = useState(0)
  
  const services = [
    {
      id: 'airport',
      icon: Plane,
      title: 'Airport Transfers',
      subtitle: 'Seamless Airport Transportation',
      headline: 'Never Miss a Flight Again',
      description: 'Experience stress-free airport transportation with real-time flight tracking, meet & greet service, and complimentary wait time. Our chauffeurs monitor your flight and adjust pickup times automatically.',
      features: [
        { icon: Plane, title: 'Flight Tracking', desc: 'Real-time monitoring & auto-adjustments' },
        { icon: Users, title: 'Meet & Greet', desc: 'Personal greeting at arrivals' },
        { icon: Clock, title: 'Free Wait Time', desc: '30-60 mins complimentary' },
        { icon: Luggage, title: 'Luggage Help', desc: 'Door-to-door assistance' }
      ],
      includes: ['Flight delay coverage', 'Meet & greet sign', 'Bottled water', 'Phone chargers', 'Wi-Fi access', 'Toll included'],
      price: 'From $85',
      image: '/images/chauffeur-service.png',
      color: 'sky'
    },
    {
      id: 'wedding',
      icon: Heart,
      title: 'Wedding Transportation',
      subtitle: 'Your Perfect Day, Perfectly Styled',
      headline: 'Make Your Special Day Unforgettable',
      description: 'Arrive in elegance on your wedding day. Our pristine wedding fleet includes classic stretch limousines and luxury sedans, decorated to match your theme, with red carpet service available.',
      features: [
        { icon: Sparkles, title: 'Custom Decor', desc: 'Ribbons, flowers & colors to match' },
        { icon: Award, title: 'Red Carpet', desc: 'VIP arrival experience' },
        { icon: Wine, title: 'Champagne Toast', desc: 'Complimentary bubbly' },
        { icon: Camera, title: 'Photo Stops', desc: 'Built-in time for photos' }
      ],
      includes: ['Vehicle decoration', 'Red carpet rollout', 'Champagne service', 'Multiple stops', '3-hour minimum', 'Clean & detailed'],
      price: 'From $350',
      image: '/images/stretch-premium.png',
      color: 'rose'
    },
    {
      id: 'corporate',
      icon: Briefcase,
      title: 'Corporate Travel',
      subtitle: 'Executive Transportation Solutions',
      headline: 'Travel Like a CEO',
      description: 'Elevate your business travel with premium corporate transportation. Wi-Fi equipped vehicles, confidential service, and professional chauffeurs ensure you arrive prepared for every meeting.',
      features: [
        { icon: Wifi, title: 'Wi-Fi Enabled', desc: 'High-speed connectivity' },
        { icon: Shield, title: 'Confidential', desc: 'Privacy assured' },
        { icon: Building2, title: 'Account Mgmt', desc: 'Dedicated coordinator' },
        { icon: CreditCard, title: 'Monthly Billing', desc: 'Corporate accounts' }
      ],
      includes: ['High-speed Wi-Fi', 'Privacy partition', 'Work space', 'Power outlets', 'Water & refreshments', 'Invoice billing'],
      price: 'From $85',
      image: '/images/sedan-premium.png',
      color: 'emerald'
    },
    {
      id: 'events',
      icon: PartyPopper,
      title: 'Special Events',
      subtitle: 'Arrive in Style',
      headline: 'Make Every Occasion Memorable',
      description: 'Prom nights, anniversaries, birthdays, concerts, and sporting events. Arrive in style and make a statement with luxury transportation that matches the importance of your celebration.',
      features: [
        { icon: PartyPopper, title: 'Any Occasion', desc: 'All celebrations welcome' },
        { icon: Users, title: 'Group Options', desc: 'Multiple vehicles available' },
        { icon: Clock, title: 'Hourly Charter', desc: 'Flexible scheduling' },
        { icon: MapPin, title: 'Multiple Stops', desc: 'Door-to-door service' }
      ],
      includes: ['Custom decoration', 'Multiple stops', 'Hourly packages', 'Group coordination', 'Special requests', 'Photo opportunities'],
      price: 'From $150',
      image: '/images/party-bus.png',
      color: 'purple'
    },
    {
      id: 'tours',
      icon: Wine,
      title: 'Wine & City Tours',
      subtitle: 'Explore in Luxury',
      headline: 'Discover the Region in Style',
      description: 'Discover local wineries, scenic routes, and city landmarks in comfort. Our knowledgeable chauffeurs provide curated routes, insider recommendations, and a truly memorable experience.',
      features: [
        { icon: Map, title: 'Custom Routes', desc: 'Tailored itineraries' },
        { icon: Wine, title: 'Wine Country', desc: 'Premium vineyard tours' },
        { icon: Camera, title: 'Photo Stops', desc: 'Scenic viewpoints' },
        { icon: Clock, title: 'Full Day', desc: '6-8 hour experiences' }
      ],
      includes: ['Custom itinerary', 'Winery reservations', 'Picnic setup', 'Photo stops', 'Local recommendations', 'Flexible timing'],
      price: 'From $125/hr',
      image: '/images/suv-premium.png',
      color: 'amber'
    }
  ]
  
  const colorClasses: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
    sky: { bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/30', gradient: 'from-sky-400 to-sky-600' },
    rose: { bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/30', gradient: 'from-rose-400 to-rose-600' },
    emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30', gradient: 'from-emerald-400 to-emerald-600' },
    purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30', gradient: 'from-purple-400 to-purple-600' },
    amber: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30', gradient: 'from-amber-400 to-amber-600' }
  }
  
  return (
    <section id="services" className="py-12 md:py-20 bg-zinc-950 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-8 md:mb-12"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 mb-3">
            <Sparkles className="h-3 w-3 mr-1" />
            Our Services
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Exceptional Services for{' '}
            <span className="text-amber-400">Every Occasion</span>
          </h2>
          <p className="text-sm md:text-base text-white/60">
            From airport transfers to once-in-a-lifetime celebrations, we deliver exceptional experiences.
          </p>
        </motion.div>
        
        {/* Service Tabs - Mobile optimized */}
        <div className="mb-6 overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-2 min-w-max">
            {services.map((service, index) => {
              const colors = colorClasses[service.color]
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap",
                    activeService === index 
                      ? `${colors.bg} ${colors.text} border ${colors.border}` 
                      : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
                  )}
                >
                  <service.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{service.title}</span>
                  <span className="sm:hidden">{service.title.split(' ')[0]}</span>
                </button>
              )
            })}
          </div>
        </div>
        
        {/* Active Service Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-zinc-900/50 border-white/10 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Image Side */}
                <div className="relative aspect-[16/10] lg:aspect-auto">
                  <Image
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent lg:bg-gradient-to-r" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-xl px-4 py-2">
                    <div className="text-amber-400 font-bold text-lg">{services[activeService].price}</div>
                  </div>
                  
                  {/* Mobile Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                    <div className={cn("text-sm font-medium mb-1", colorClasses[services[activeService].color].text)}>
                      {services[activeService].subtitle}
                    </div>
                    <h3 className="text-xl font-bold text-white">{services[activeService].title}</h3>
                  </div>
                </div>
                
                {/* Content Side */}
                <CardContent className="p-4 md:p-6 lg:p-8">
                  {/* Desktop Title */}
                  <div className="hidden lg:block mb-6">
                    <div className={cn("text-sm font-medium mb-1", colorClasses[services[activeService].color].text)}>
                      {services[activeService].subtitle}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{services[activeService].headline}</h3>
                    <p className="text-white/60">{services[activeService].description}</p>
                  </div>
                  
                  {/* Mobile Description */}
                  <p className="text-white/60 text-sm mb-6 lg:hidden">{services[activeService].description}</p>
                  
                  {/* Features Grid - Mobile optimized */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {services[activeService].features.map((feature, i) => (
                      <div key={i} className="bg-white/5 rounded-xl p-3">
                        <feature.icon className={cn("h-5 w-5 mb-2", colorClasses[services[activeService].color].text)} />
                        <div className="text-sm font-medium text-white">{feature.title}</div>
                        <div className="text-xs text-white/50">{feature.desc}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* What's Included */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">What&apos;s Included</div>
                    <div className="flex flex-wrap gap-2">
                      {services[activeService].includes.map((item, i) => (
                        <Badge key={i} variant="outline" className="bg-white/5 border-white/10 text-white/70 text-xs">
                          <Check className="h-3 w-3 mr-1 text-amber-400" />
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                      Book This Service
                    </Button>
                    <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
        
        {/* All Services Quick Links - Mobile */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:hidden">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={cn(
                "p-3 rounded-xl text-center transition-all",
                activeService === index 
                  ? "bg-amber-500/20 border border-amber-500/30" 
                  : "bg-white/5 border border-white/10"
              )}
            >
              <service.icon className={cn("h-5 w-5 mx-auto mb-1", activeService === index ? "text-amber-400" : "text-white/50")} />
              <div className={cn("text-xs font-medium", activeService === index ? "text-amber-400" : "text-white/60")}>
                {service.title.split(' ')[0]}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// FLEET SECTION - Page-like Experience
// ============================================
function FleetSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [selectedVehicle, setSelectedVehicle] = useState(0)
  const [viewMode, setViewMode] = useState<'tabs' | 'grid'>('grid')
  
  const vehicles = [
    {
      id: 'sedan',
      name: 'Executive Sedan',
      model: 'Mercedes-Benz S-Class',
      tagline: 'The Pinnacle of Executive Travel',
      description: 'The Mercedes-Benz S-Class represents the absolute pinnacle of luxury sedans. Featuring massage seats, ambient lighting with 64 colors, and a whisper-quiet cabin, it delivers an unparalleled executive travel experience.',
      image: '/images/sedan-premium.png',
      passengers: 3,
      luggage: 2,
      priceFrom: 85,
      specs: {
        engine: '4.0L V8 Biturbo',
        power: '496 HP',
        length: '17.9 ft',
        features: ['Massage Seats', 'Air Suspension', 'Climate Control', 'Privacy Glass']
      },
      amenities: [
        { icon: Armchair, name: 'Leather Seats', desc: 'Premium Nappa leather' },
        { icon: Thermometer, name: '4-Zone Climate', desc: 'Individual controls' },
        { icon: Wifi, name: 'Wi-Fi Hotspot', desc: 'High-speed 4G' },
        { icon: Zap, name: 'Power Outlets', desc: 'USB-C & 110V' },
        { icon: Music, name: 'Burmester Audio', desc: '3D surround sound' },
        { icon: Bluetooth, name: 'Bluetooth', desc: 'Wireless streaming' }
      ],
      bestFor: ['Airport Transfers', 'Business Meetings', 'Executive Travel', 'City Transfers'],
      color: 'sky'
    },
    {
      id: 'stretch',
      name: 'Stretch Limousine',
      model: 'Lincoln Town Car Stretch',
      tagline: 'Classic Elegance for Special Moments',
      description: 'The iconic stretch limousine combines timeless elegance with modern amenities. Perfect for weddings, proms, and milestone celebrations, featuring a spacious cabin with entertainment systems and ambient lighting.',
      image: '/images/stretch-premium.png',
      passengers: 10,
      luggage: 4,
      priceFrom: 195,
      specs: {
        engine: '3.5L V6 Twin-Turbo',
        power: '380 HP',
        length: '28 ft',
        features: ['Mini Bar', 'Fiber Optics', 'Privacy Partition', 'Sunroof']
      },
      amenities: [
        { icon: Wine, name: 'Mini Bar', desc: 'Complimentary beverages' },
        { icon: Lightbulb, name: 'Fiber Optics', desc: 'Mood lighting system' },
        { icon: Tv, name: 'Entertainment', desc: 'Multiple LCD screens' },
        { icon: Music, name: 'Sound System', desc: 'Premium audio' },
        { icon: Sparkles, name: 'LED Lighting', desc: 'Color-changing LEDs' },
        { icon: GlassWater, name: 'Champagne', desc: 'Upon request' }
      ],
      bestFor: ['Weddings', 'Prom Nights', 'Anniversaries', 'VIP Events'],
      color: 'rose'
    },
    {
      id: 'suv',
      name: 'Luxury SUV',
      model: 'Cadillac Escalade ESV',
      tagline: 'Commanding Presence, First-Class Comfort',
      description: 'The Cadillac Escalade ESV offers commanding presence with a first-class interior. Ideal for groups, families, or executives requiring extra space, featuring captain seats, rear entertainment, and premium materials.',
      image: '/images/suv-premium.png',
      passengers: 6,
      luggage: 6,
      priceFrom: 125,
      specs: {
        engine: '6.2L V8',
        power: '420 HP',
        length: '18.6 ft',
        features: ['Captain Seats', 'Rear Entertainment', 'Panoramic Roof', 'Heated Seats']
      },
      amenities: [
        { icon: Armchair, name: 'Captain Seats', desc: 'Heated & cooled' },
        { icon: Tv, name: 'Rear Screens', desc: 'Dual 12.6" displays' },
        { icon: Wifi, name: 'Wi-Fi Hotspot', desc: '4G LTE connectivity' },
        { icon: Thermometer, name: 'Tri-Zone AC', desc: 'Independent controls' },
        { icon: Zap, name: 'Wireless Charge', desc: 'Qi charging pad' },
        { icon: Music, name: 'AKG Audio', desc: '36-speaker system' }
      ],
      bestFor: ['Family Travel', 'Group Airport', 'VIP Transfers', 'Road Shows'],
      color: 'emerald'
    },
    {
      id: 'sprinter',
      name: 'Executive Sprinter',
      model: 'Mercedes-Benz Sprinter',
      tagline: 'Mobile Conference Room on Wheels',
      description: 'The Mercedes-Benz Sprinter transforms group travel into a productive experience. Conference seating, work tables, and high-speed connectivity make it perfect for corporate teams and executive groups.',
      image: '/images/sprinter-van.png',
      passengers: 14,
      luggage: 12,
      priceFrom: 175,
      specs: {
        engine: '3.0L V6 Turbo Diesel',
        power: '188 HP',
        length: '23 ft',
        features: ['Conference Table', 'Individual Screens', 'Meeting Space', 'Refrigerator']
      },
      amenities: [
        { icon: Briefcase, name: 'Work Tables', desc: 'Conference setup' },
        { icon: Tv, name: 'Individual TVs', desc: 'Personal screens' },
        { icon: Wifi, name: 'High-Speed Wi-Fi', desc: 'Video conferencing' },
        { icon: Refrigerator, name: 'Refrigerator', desc: 'Complimentary drinks' },
        { icon: Thermometer, name: 'Climate Control', desc: 'Multi-zone AC' },
        { icon: Zap, name: 'Power Outlets', desc: 'At every seat' }
      ],
      bestFor: ['Corporate Groups', 'Team Transfers', 'Road Shows', 'Executive Shuttles'],
      color: 'purple'
    },
    {
      id: 'party-bus',
      name: 'Party Bus',
      model: 'Luxury Party Coach',
      tagline: 'The Ultimate Celebration Vehicle',
      description: 'The ultimate celebration vehicle features a dance floor, premium sound system, LED lighting, and bar area. Perfect for bachelor/bachelorette parties, birthdays, and group celebrations on wheels.',
      image: '/images/party-bus.png',
      passengers: 20,
      luggage: 8,
      priceFrom: 350,
      specs: {
        engine: '6.8L V10',
        power: '362 HP',
        length: '35 ft',
        features: ['Dance Floor', 'DJ Booth', 'Laser Lights', 'Bar Area']
      },
      amenities: [
        { icon: PartyPopper, name: 'Dance Floor', desc: 'Spacious area' },
        { icon: Radio, name: 'DJ Sound', desc: 'Club-quality audio' },
        { icon: Lightbulb, name: 'Laser Lights', desc: 'LED light show' },
        { icon: CupSoda, name: 'Full Bar', desc: 'Premium setup' },
        { icon: Tv, name: 'TV Screens', desc: 'Multiple displays' },
        { icon: Music, name: 'Karaoke', desc: 'Available on request' }
      ],
      bestFor: ['Bachelor Parties', 'Birthday Parties', 'Club Hopping', 'Concert Events'],
      color: 'amber'
    }
  ]
  
  const colorClasses: Record<string, { bg: string; text: string; border: string; badge: string }> = {
    sky: { bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/30', badge: 'bg-sky-500' },
    rose: { bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/30', badge: 'bg-rose-500' },
    emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30', badge: 'bg-emerald-500' },
    purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30', badge: 'bg-purple-500' },
    amber: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30', badge: 'bg-amber-500' }
  }
  
  return (
    <section id="fleet" className="py-12 md:py-20 bg-black relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-8"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 mb-3">
            <Car className="h-3 w-3 mr-1" />
            Our Fleet
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            World-Class{' '}
            <span className="text-amber-400">Luxury Fleet</span>
          </h2>
          <p className="text-sm md:text-base text-white/60">
            Meticulously maintained premium vehicles for the most discerning travelers.
          </p>
        </motion.div>
        
        {/* View Toggle - Desktop */}
        <div className="hidden md:flex justify-center gap-2 mb-6">
          <Button 
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
            className={viewMode === 'grid' ? 'bg-amber-500 text-black' : 'border-white/20 text-white'}
          >
            Grid View
          </Button>
          <Button 
            variant={viewMode === 'tabs' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('tabs')}
            className={viewMode === 'tabs' ? 'bg-amber-500 text-black' : 'border-white/20 text-white'}
          >
            Detail View
          </Button>
        </div>
        
        {/* Grid View - Mobile default */}
        <div className={cn("md:hidden", viewMode === 'tabs' ? 'hidden' : 'block')}>
          <motion.div 
            className="grid gap-4"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {vehicles.map((vehicle, index) => {
              const colors = colorClasses[vehicle.color]
              return (
                <motion.div key={vehicle.id} variants={fadeInUp}>
                  <Card 
                    className="bg-zinc-900/50 border-white/10 overflow-hidden cursor-pointer hover:border-amber-500/30 transition-colors"
                    onClick={() => { setSelectedVehicle(index); setViewMode('tabs') }}
                  >
                    <div className="grid grid-cols-2">
                      <div className="relative aspect-square">
                        <Image
                          src={vehicle.image}
                          alt={vehicle.name}
                          fill
                          className="object-cover"
                          sizes="50vw"
                          loading="lazy"
                        />
                      </div>
                      <CardContent className="p-4 flex flex-col justify-center">
                        <div className={cn("text-xs font-medium mb-1", colors.text)}>{vehicle.model}</div>
                        <h3 className="text-base font-bold text-white mb-2">{vehicle.name}</h3>
                        <div className="flex items-center gap-3 text-xs text-white/50 mb-3">
                          <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {vehicle.passengers}</span>
                          <span className="flex items-center gap-1"><Luggage className="h-3 w-3" /> {vehicle.luggage}</span>
                        </div>
                        <div className="text-amber-400 font-bold">From ${vehicle.priceFrom}/hr</div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
        
        {/* Grid View - Desktop */}
        <div className={cn("hidden md:block", viewMode === 'tabs' ? 'hidden' : 'block')}>
          <motion.div 
            className="grid md:grid-cols-3 lg:grid-cols-5 gap-4"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {vehicles.map((vehicle, index) => {
              const colors = colorClasses[vehicle.color]
              return (
                <motion.div key={vehicle.id} variants={fadeInUp}>
                  <Card 
                    className="bg-zinc-900/50 border-white/10 overflow-hidden cursor-pointer group hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1"
                    onClick={() => { setSelectedVehicle(index); setViewMode('tabs') }}
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 33vw, 20vw"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                      <div className={cn("absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold text-white", colors.badge)}>
                        ${vehicle.priceFrom}/hr
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className={cn("text-xs font-medium mb-1", colors.text)}>{vehicle.model}</div>
                      <h3 className="text-base font-bold text-white mb-2">{vehicle.name}</h3>
                      <div className="flex items-center gap-3 text-xs text-white/50">
                        <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {vehicle.passengers}</span>
                        <span className="flex items-center gap-1"><Luggage className="h-3 w-3" /> {vehicle.luggage}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
        
        {/* Detail View (Tabs) */}
        {viewMode === 'tabs' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Vehicle Tabs */}
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
              <div className="flex gap-2 min-w-max">
                {vehicles.map((vehicle, index) => {
                  const colors = colorClasses[vehicle.color]
                  return (
                    <button
                      key={vehicle.id}
                      onClick={() => setSelectedVehicle(index)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all",
                        selectedVehicle === index 
                          ? `${colors.bg} ${colors.text} border ${colors.border}` 
                          : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
                      )}
                    >
                      {vehicle.name}
                    </button>
                  )
                })}
              </div>
            </div>
            
            {/* Selected Vehicle Detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedVehicle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-zinc-900/50 border-white/10 overflow-hidden">
                  <div className="grid lg:grid-cols-5">
                    {/* Image & Specs */}
                    <div className="lg:col-span-2 relative">
                      <div className="relative aspect-[16/10] lg:aspect-square">
                        <Image
                          src={vehicles[selectedVehicle].image}
                          alt={vehicles[selectedVehicle].name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent lg:bg-gradient-to-r" />
                      </div>
                      
                      {/* Price Badge - Mobile */}
                      <div className="absolute top-4 right-4 lg:hidden bg-black/60 backdrop-blur-sm rounded-xl px-4 py-2">
                        <div className="text-amber-400 font-bold text-lg">From ${vehicles[selectedVehicle].priceFrom}/hr</div>
                      </div>
                      
                      {/* Specs - Desktop */}
                      <div className="hidden lg:block absolute bottom-4 left-4 right-4">
                        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4">
                          <div className="grid grid-cols-2 gap-3 text-xs">
                            <div><span className="text-white/50">Engine:</span> <span className="text-white ml-1">{vehicles[selectedVehicle].specs.engine}</span></div>
                            <div><span className="text-white/50">Power:</span> <span className="text-white ml-1">{vehicles[selectedVehicle].specs.power}</span></div>
                            <div><span className="text-white/50">Length:</span> <span className="text-white ml-1">{vehicles[selectedVehicle].specs.length}</span></div>
                            <div><span className="text-white/50">Passengers:</span> <span className="text-white ml-1">{vehicles[selectedVehicle].passengers}</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <CardContent className="lg:col-span-3 p-4 md:p-6">
                      {/* Title */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className={cn("text-sm font-medium", colorClasses[vehicles[selectedVehicle].color].text)}>
                            {vehicles[selectedVehicle].model}
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-white">{vehicles[selectedVehicle].name}</h3>
                          <p className="text-white/50 text-sm">{vehicles[selectedVehicle].tagline}</p>
                        </div>
                        <div className="hidden lg:block text-right">
                          <div className="text-2xl font-bold text-amber-400">${vehicles[selectedVehicle].priceFrom}</div>
                          <div className="text-xs text-white/50">per hour</div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-white/60 text-sm mb-6">{vehicles[selectedVehicle].description}</p>
                      
                      {/* Quick Stats - Mobile */}
                      <div className="flex gap-4 mb-6 lg:hidden">
                        <div className="bg-white/5 rounded-lg px-4 py-2 text-center flex-1">
                          <Users className="h-4 w-4 text-amber-400 mx-auto mb-1" />
                          <div className="text-white font-bold">{vehicles[selectedVehicle].passengers}</div>
                          <div className="text-[10px] text-white/50">Passengers</div>
                        </div>
                        <div className="bg-white/5 rounded-lg px-4 py-2 text-center flex-1">
                          <Luggage className="h-4 w-4 text-amber-400 mx-auto mb-1" />
                          <div className="text-white font-bold">{vehicles[selectedVehicle].luggage}</div>
                          <div className="text-[10px] text-white/50">Bags</div>
                        </div>
                        <div className="bg-white/5 rounded-lg px-4 py-2 text-center flex-1">
                          <Clock className="h-4 w-4 text-amber-400 mx-auto mb-1" />
                          <div className="text-white font-bold">${vehicles[selectedVehicle].priceFrom}</div>
                          <div className="text-[10px] text-white/50">Per Hour</div>
                        </div>
                      </div>
                      
                      {/* Amenities */}
                      <div className="mb-6">
                        <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Amenities Included</div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {vehicles[selectedVehicle].amenities.map((amenity, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg p-2.5">
                              <amenity.icon className={cn("h-4 w-4 flex-shrink-0", colorClasses[vehicles[selectedVehicle].color].text)} />
                              <div>
                                <div className="text-xs font-medium text-white">{amenity.name}</div>
                                <div className="text-[10px] text-white/40">{amenity.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Best For */}
                      <div className="mb-6">
                        <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Perfect For</div>
                        <div className="flex flex-wrap gap-2">
                          {vehicles[selectedVehicle].bestFor.map((use, i) => (
                            <Badge key={i} variant="outline" className="bg-white/5 border-white/10 text-white/70">
                              {use}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <div className="flex gap-3">
                        <Button className="flex-1 bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                          Book This Vehicle
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10">
                          <Phone className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
            
            {/* Back to Grid - Desktop */}
            <div className="hidden md:flex justify-center">
              <Button variant="outline" onClick={() => setViewMode('grid')} className="border-white/20 text-white hover:bg-white/10">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back to Fleet Overview
              </Button>
            </div>
          </motion.div>
        )}
        
        {/* Trust Note */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 text-sm text-white/60">
            <BadgeCheck className="h-4 w-4 text-emerald-400" />
            All vehicles are detailed daily, fully insured, and maintained to the highest standards
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================
// SERVICE AREAS SECTION
// ============================================
function ServiceAreasSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  const areas = [
    { city: 'New York City', airports: ['JFK', 'LGA', 'EWR'], popular: true },
    { city: 'Los Angeles', airports: ['LAX', 'BUR', 'LGB'], popular: true },
    { city: 'Miami', airports: ['MIA', 'FLL'], popular: true },
    { city: 'Chicago', airports: ['ORD', 'MDW'], popular: false },
    { city: 'Las Vegas', airports: ['LAS'], popular: false },
    { city: 'San Francisco', airports: ['SFO', 'SJC', 'OAK'], popular: false },
    { city: 'Boston', airports: ['BOS'], popular: false },
    { city: 'Washington DC', airports: ['DCA', 'IAD', 'BWI'], popular: false }
  ]
  
  return (
    <section className="py-12 md:py-16 bg-zinc-950" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-8"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 mb-3">
            <Globe className="h-3 w-3 mr-1" />
            Service Areas
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Serving <span className="text-amber-400">Major Cities</span> Nationwide
          </h2>
          <p className="text-sm text-white/60">
            Premium limo service available in all major metropolitan areas with airport coverage.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {areas.map((area, index) => (
            <motion.div key={area.city} variants={fadeInUp}>
              <Card className={cn(
                "bg-zinc-900/50 border-white/10 overflow-hidden group cursor-pointer hover:border-amber-500/30 transition-colors h-full",
                area.popular && "ring-1 ring-amber-500/20"
              )}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <MapPin className="h-4 w-4 text-amber-400" />
                    {area.popular && (
                      <Badge className="bg-amber-500/20 text-amber-400 text-[10px] border-0">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1">{area.city}</h3>
                  <p className="text-[10px] text-white/50">
                    {area.airports.join(' • ')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <p className="text-center text-white/40 text-sm mt-6">
          Don&apos;t see your city? Contact us — we offer service to 260+ destinations worldwide.
        </p>
      </div>
    </section>
  )
}

// ============================================
// TESTIMONIALS SECTION
// ============================================
function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  const testimonials = [
    {
      quote: "TopOn Limo has been our go-to for executive transportation for over 5 years. Their attention to detail and professionalism is unmatched.",
      author: 'Sarah Mitchell',
      role: 'Executive Assistant, Goldman Sachs',
      rating: 5
    },
    {
      quote: "Our wedding day transportation was absolutely flawless. The stretch limo arrived early and was immaculately clean. Highly recommend!",
      author: 'Michael & Jessica Chen',
      role: 'Wedding Clients',
      rating: 5
    },
    {
      quote: "As a frequent business traveler, reliability is everything. TopOn has never let me down. Flight delays? No problem — they track and adjust.",
      author: 'Robert Thompson',
      role: 'CEO, Thompson Industries',
      rating: 5
    }
  ]
  
  return (
    <section className="py-12 md:py-16 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-8"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 mb-3">
            <Star className="h-3 w-3 mr-1 fill-amber-400" />
            Client Reviews
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            What Our <span className="text-amber-400">Clients Say</span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-4"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="bg-zinc-900/50 border-white/10 h-full">
                <CardContent className="p-5">
                  {/* Rating */}
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-sm text-white/80 mb-4 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold text-sm">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{testimonial.author}</div>
                      <div className="text-[11px] text-white/50">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Trust Stats */}
        <motion.div 
          className="mt-8 flex flex-wrap justify-center gap-6 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div>
            <div className="text-2xl font-bold text-amber-400">500+</div>
            <div className="text-xs text-white/50">Corporate Clients</div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" />
          <div>
            <div className="text-2xl font-bold text-amber-400">5.0</div>
            <div className="text-xs text-white/50">Average Rating</div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" />
          <div>
            <div className="text-2xl font-bold text-amber-400">50,000+</div>
            <div className="text-xs text-white/50">Happy Passengers</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================
// COMPACT REMAINING SECTIONS
// ============================================
function QuickPricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  return (
    <section id="pricing" className="py-12 md:py-16 bg-zinc-950" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-8"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 mb-3">
            <Calculator className="h-3 w-3 mr-1" />
            Transparent Pricing
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Instant <span className="text-amber-400">Price Calculator</span>
          </h2>
          <p className="text-sm text-white/60">All-inclusive rates. No hidden fees.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="max-w-xl mx-auto"
        >
          <Card className="bg-zinc-900/50 border-white/10 p-6">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <Label className="text-white/60 text-xs">Vehicle</Label>
                <Select>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white mt-1">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedan">Sedan ($85/hr)</SelectItem>
                    <SelectItem value="suv">SUV ($125/hr)</SelectItem>
                    <SelectItem value="stretch">Stretch ($195/hr)</SelectItem>
                    <SelectItem value="sprinter">Sprinter ($175/hr)</SelectItem>
                    <SelectItem value="party">Party Bus ($350/hr)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-white/60 text-xs">Hours</Label>
                <Select defaultValue="2">
                  <SelectTrigger className="bg-white/5 border-white/10 text-white mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <SelectItem key={n} value={n.toString()}>{n} Hour{n > 1 ? 's' : ''}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Separator className="bg-white/10 mb-6" />
            
            <div className="text-center">
              <div className="text-white/50 text-xs mb-1">Estimated Total</div>
              <div className="text-4xl font-bold text-amber-400 mb-1">$214</div>
              <div className="text-white/40 text-xs">Includes 20% gratuity</div>
            </div>
            
            <Button className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-black font-semibold">
              Get Exact Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', pickup: '', dropoff: '', date: undefined as Date | undefined, time: ''
  })
  const [submitted, setSubmitted] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, date: formData.date?.toISOString() })
      })
      setSubmitted(true)
    } catch (err) {
      console.error(err)
    }
  }
  
  return (
    <section id="contact" className="py-12 md:py-16 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <Badge className="bg-amber-500/10 text-amber-400">Contact Us</Badge>
            <h2 className="text-2xl font-bold text-white">Book Your <span className="text-amber-400">Luxury Ride</span></h2>
            <p className="text-sm text-white/60">Available 24/7 for reservations and inquiries.</p>
            
            <div className="space-y-3">
              <a href={`tel:${BRAND.phoneClean}`} className="flex items-center gap-3 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                <Phone className="h-5 w-5 text-amber-400" />
                <div>
                  <div className="text-white font-medium">{BRAND.phone}</div>
                  <div className="text-xs text-white/50">Call 24/7</div>
                </div>
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                <Mail className="h-5 w-5 text-amber-400" />
                <div>
                  <div className="text-white font-medium">{BRAND.email}</div>
                  <div className="text-xs text-white/50">Email Us</div>
                </div>
              </a>
            </div>
          </motion.div>
          
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="lg:col-span-2"
          >
            <Card className="bg-zinc-900/50 border-white/10">
              <CardContent className="p-4 md:p-6">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check className="h-8 w-8 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Request Submitted!</h3>
                    <p className="text-white/60 text-sm">We&apos;ll contact you within 15 minutes.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <Input placeholder="Your Name" className="bg-white/5 border-white/10 text-white" 
                             value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                      <Input placeholder="Phone" type="tel" className="bg-white/5 border-white/10 text-white"
                             value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
                    </div>
                    <Input placeholder="Email" type="email" className="bg-white/5 border-white/10 text-white"
                           value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                    <div className="grid sm:grid-cols-2 gap-3">
                      <Input placeholder="Pickup Location" className="bg-white/5 border-white/10 text-white"
                             value={formData.pickup} onChange={(e) => setFormData({...formData, pickup: e.target.value})} required />
                      <Input placeholder="Drop-off Location" className="bg-white/5 border-white/10 text-white"
                             value={formData.dropoff} onChange={(e) => setFormData({...formData, dropoff: e.target.value})} required />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="bg-white/5 border-white/10 text-white justify-start">
                            <CalendarDays className="h-4 w-4 mr-2" />
                            {formData.date ? format(formData.date, 'MMM d') : 'Date'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-zinc-900 border-white/10">
                          <Calendar mode="single" selected={formData.date} 
                                    onSelect={(date) => setFormData({...formData, date})} 
                                    disabled={(date) => date < new Date()} />
                        </PopoverContent>
                      </Popover>
                      <Input type="time" className="bg-white/5 border-white/10 text-white"
                             value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} />
                    </div>
                    <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-6">
                      Book Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                <Car className="h-5 w-5 text-black" />
              </div>
              <span className="text-xl font-bold text-white">TopOn<span className="text-amber-400">Limo</span></span>
            </div>
            <p className="text-sm text-white/50 mb-4 max-w-md">
              Premium luxury transportation for discerning travelers. Professional chauffeurs, world-class fleet, 24/7 service.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-amber-400 hover:bg-white/10 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-amber-400 hover:bg-white/10 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-amber-400 hover:bg-white/10 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Services', 'Fleet', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-white/50 hover:text-amber-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${BRAND.phoneClean}`} className="flex items-center gap-2 text-sm text-white/50 hover:text-amber-400">
                  <Phone className="h-4 w-4" /> {BRAND.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 text-sm text-white/50 hover:text-amber-400">
                  <Mail className="h-4 w-4" /> {BRAND.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Clock className="h-4 w-4" /> 24/7 Service
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-white/5 mb-6" />
        
        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-sm text-white/40">
            © 2026 TopOn Limo. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm text-white/40">
            <span className="flex items-center gap-1"><Shield className="h-4 w-4 text-amber-400" /> $5M Insured</span>
            <span className="flex items-center gap-1"><Award className="h-4 w-4 text-amber-400" /> Award Winning</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============================================
// MAIN PAGE
// ============================================
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <FleetSection />
        <ServiceAreasSection />
        <TestimonialsSection />
        <QuickPricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
