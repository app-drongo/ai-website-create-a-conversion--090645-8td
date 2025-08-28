// Footer Component
// Generated: 2025-08-28T11:04:50.504Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Pill,
  Shield,
  Clock,
  Users
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Prescription Services", href: "/prescriptions" },
        { name: "Health Consultations", href: "/consultations" },
        { name: "Wellness Products", href: "/wellness" },
        { name: "Home Delivery", href: "/delivery" },
        { name: "Health Screenings", href: "/screenings" },
        { name: "Vaccination Services", href: "/vaccinations" }
      ]
    },
    {
      title: "Health Resources",
      links: [
        { name: "Health Blog", href: "/blog" },
        { name: "Drug Information", href: "/drug-info" },
        { name: "Health Tips", href: "/health-tips" },
        { name: "Medication Guides", href: "/medication-guides" },
        { name: "Wellness Programs", href: "/wellness-programs" },
        { name: "Health Calculator", href: "/calculator" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Pharmacist", href: "/contact-pharmacist" },
        { name: "Insurance Help", href: "/insurance" },
        { name: "Prescription Refills", href: "/refills" },
        { name: "Transfer Prescription", href: "/transfer" },
        { name: "FAQ", href: "/faq" },
        { name: "Customer Support", href: "/support" }
      ]
    },
    {
      title: "About",
      links: [
        { name: "Our Story", href: "/about" },
        { name: "Our Pharmacists", href: "/team" },
        { name: "Locations", href: "/locations" },
        { name: "Careers", href: "/careers" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/wellnesshub" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/wellnesshub" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/wellnesshub" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/wellnesshub" }
  ]

  return (
    <footer className="bg-secondary text-background">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <div className="size-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Pill className="size-6 text-background" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-background">WellnessHub</span>
                  <span className="text-sm text-background/80 -mt-1">Pharmacy</span>
                </div>
              </Link>
              <p className="text-background/80 text-sm leading-relaxed mb-6">
                Your trusted healthcare partner providing comprehensive pharmaceutical services, 
                health consultations, and wellness solutions for over 15 years.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">(555) 123-CARE</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">info@wellnesshub.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">123 Health Street, Medical District</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">Mon-Fri: 8AM-9PM, Sat-Sun: 9AM-7PM</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-background">Health Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-background/20 rounded-md bg-background/10 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                />
                <Button size="sm" className="px-3 bg-accent hover:bg-accent/90 text-background">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-background/70">
                Get health tips, medication reminders, and wellness updates.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-background">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-background/80 hover:text-background transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Shield className="size-5 text-accent" />
              <span className="text-sm text-background/80">Licensed & Certified</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Users className="size-5 text-accent" />
              <span className="text-sm text-background/80">50,000+ Patients Served</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="size-5 text-accent" />
              <span className="text-sm text-background/80">24/7 Emergency Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20 bg-secondary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-background/80">
              <span>© 2024 WellnessHub Pharmacy. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Caring for your health with <Heart className="size-3 text-accent fill-current" />
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-background/80 mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-background/10 hover:bg-accent/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-background/80 group-hover:text-accent transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-background/10">
            <Link href="/accessibility" className="text-xs text-background/70 hover:text-background transition-colors">
              Accessibility
            </Link>
            <Link href="/hipaa" className="text-xs text-background/70 hover:text-background transition-colors">
              HIPAA Compliance
            </Link>
            <Link href="/pharmacy-license" className="text-xs text-background/70 hover:text-background transition-colors">
              Pharmacy License
            </Link>
            <Link href="/emergency" className="text-xs text-background/70 hover:text-background transition-colors">
              Emergency Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}