'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  BarChart, 
  Star,
  ChevronRight
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

export default function Home() {
  const { toast } = useToast()

  const showToast = () => {
    toast({
      title: "Welcome!",
      description: "Thanks for checking out our awesome website!",
    })
  }

  return (
    <div className="min-h-full">
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container relative mx-auto px-4 py-32 sm:py-40">
          <div className="flex flex-col items-center text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">
              Welcome to our platform
            </Badge>
            
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl mb-6 max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
              Create Something Amazing Today
            </h1>
            
            <p className="mt-6 text-xl max-w-2xl mx-auto text-white/80 leading-relaxed">
              Unlock your creative potential with our powerful tools and resources. 
              Start building your dream project in minutes.
            </p>
            
            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90 px-8 rounded-full">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 rounded-full" onClick={showToast}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-24 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-background"></div>
      </section>

      {/* Features Section with Icons */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build amazing projects, all in one place.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6 flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground leading-relaxed">
                Optimized for speed and performance, our platform ensures your projects load instantly.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6 flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Enterprise-grade security with 99.9% uptime guarantee keeps your data safe and accessible.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6 flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-6">
                <BarChart className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
              <p className="text-muted-foreground leading-relaxed">
                Gain valuable insights with comprehensive analytics and reporting tools.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 italic">
                    "This platform has completely transformed how we approach our projects. The tools are intuitive and the results are outstanding."
                  </p>
                  
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={} />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">Customer {i}</p>
                      <p className="text-xs text-muted-foreground">Company {i}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-[1000px] mx-auto rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-10 md:p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-white/80 text-lg mb-0 md:mb-6">
                Join thousands of satisfied customers who are already creating amazing projects.
              </p>
            </div>
            
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90 px-8 rounded-full whitespace-nowrap">
              Start Now
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
