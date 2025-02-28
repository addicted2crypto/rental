"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Key, User } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [userType, setUserType] = useState("tenant")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Here we would integrate with Supabase auth
      // const { data, error } = await supabase.auth.signInWithPassword({
      //   email,
      //   password,
      // })

      // if (error) throw error

      // Redirect based on user type
      if (userType === "tenant") {
        router.push("/tenant/dashboard")
      } else {
        router.push("/landlord/dashboard")
      }
    } catch (error) {
      console.error("Login error:", error)
      // Handle error state
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center gap-2">
        <Key className="h-6 w-6" />
        <span className="font-bold">KeyLease</span>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Enter your credentials to sign in to your account</p>
        </div>
        <Tabs defaultValue="tenant" className="w-full" onValueChange={setUserType}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="tenant" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Tenant</span>
            </TabsTrigger>
            <TabsTrigger value="landlord" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              <span>Landlord</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tenant">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tenant-email">Email</Label>
                <Input
                  id="tenant-email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="tenant-password">Password</Label>
                  <Link href="/forgot-password" className="text-xs text-muted-foreground hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="tenant-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="landlord">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="landlord-email">Email</Label>
                <Input
                  id="landlord-email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="landlord-password">Password</Label>
                  <Link href="/forgot-password" className="text-xs text-muted-foreground hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="landlord-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

