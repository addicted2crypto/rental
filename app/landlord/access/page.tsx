import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building, Home, Key, Search, FileText } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <Key className="h-6 w-6" />
            <span>KeyLease</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/properties" className="text-sm font-medium hover:underline underline-offset-4">
              Properties
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex gap-2">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Lease Properties Remotely with Smart Access
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Find, tour, and lease properties without in-person meetings. Sign documents digitally and access your
                  new home with smart lock technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/tenant-signup">
                    <Button size="lg" className="w-full sm:w-auto">
                      I'm Looking to Rent
                    </Button>
                  </Link>
                  <Link href="/landlord-signup">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      I'm a Property Owner
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg?height=500&width=800"
                  alt="Smart home access system"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform makes property leasing 100% remote and hassle-free
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Find Properties</h3>
                <p className="text-muted-foreground">
                  Search properties by zip code, schedule virtual tours, and browse detailed listings.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Sign Digitally</h3>
                <p className="text-muted-foreground">
                  Complete applications and sign lease agreements with secure digital signatures.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Key className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Remote Access</h3>
                <p className="text-muted-foreground">
                  Unlock properties remotely for tours and move in with our smart lock integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">For Property Owners</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed">
                    Manage your properties remotely and streamline the entire leasing process.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <Building className="h-4 w-4 text-primary" />
                    </div>
                    <span>List and manage multiple properties</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <span>Digital lease agreements and signatures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <Key className="h-4 w-4 text-primary" />
                    </div>
                    <span>Remote access control for showings</span>
                  </li>
                </ul>
                <div>
                  <Link href="/landlord-signup">
                    <Button size="lg">Get Started as a Property Owner</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">For Tenants</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed">
                    Find and lease your next home completely remotely.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <Search className="h-4 w-4 text-primary" />
                    </div>
                    <span>Search properties by zip code</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <Home className="h-4 w-4 text-primary" />
                    </div>
                    <span>Self-guided tours with smart access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <span>Apply and sign leases digitally</span>
                  </li>
                </ul>
                <div>
                  <Link href="/tenant-signup">
                    <Button size="lg">Find Your Next Home</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <Key className="h-6 w-6" />
              <span>KeyLease</span>
            </Link>
            <p className="text-sm text-muted-foreground">The complete remote property leasing platform.</p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Smart Locks
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} KeyLease. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

