// Features Component
// Generated: 2025-08-28T11:04:50.504Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Pill, 
  Shield, 
  Truck, 
  UserCheck, 
  Heart, 
  Leaf,
  Clock,
  Award,
  Phone
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Pill,
      title: "Premium Supplements",
      description: "Carefully curated vitamins, minerals, and natural supplements from trusted brands.",
      badge: "Products"
    },
    {
      icon: Shield,
      title: "Licensed Pharmacists",
      description: "Expert guidance from certified pharmacists for all your health questions.",
      badge: "Expertise"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day delivery available with secure, temperature-controlled shipping.",
      badge: "Delivery"
    },
    {
      icon: UserCheck,
      title: "Personal Health Profile",
      description: "Track medications, allergies, and health goals with our digital health profile.",
      badge: "Personalization"
    },
    {
      icon: Heart,
      title: "Wellness Monitoring",
      description: "Health tracking tools and medication reminders to support your wellness journey.",
      badge: "Monitoring"
    },
    {
      icon: Leaf,
      title: "Natural Remedies",
      description: "Extensive selection of herbal medicines and organic wellness products.",
      badge: "Natural"
    },
    {
      icon: Clock,
      title: "24/7 Online Access",
      description: "Order anytime, access health resources, and get support whenever you need it.",
      badge: "Convenience"
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "All products are tested for purity and potency with satisfaction guarantee.",
      badge: "Quality"
    },
    {
      icon: Phone,
      title: "Health Consultations",
      description: "Free consultations with our pharmacists for medication and supplement advice.",
      badge: "Support"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Why Choose WellnessHub
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Your Complete Wellness
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Partner & Pharmacy
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From premium supplements to expert pharmacist consultations, we provide everything 
            you need for optimal health and wellness in one trusted platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to start your wellness journey with expert guidance?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Browse Health Products
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Consult a Pharmacist
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}