"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, FileText, Key, Search } from "lucide-react"
import TenantLayout from "@/components/tenant-layout"

export default function TenantDashboard() {
  const [searchZip, setSearchZip] = useState("")

  // Mock data for demonstration
  const upcomingTours = [
    { id: 1, address: "123 Main St, Apt 4B", date: "2025-03-01T14:00:00", status: "confirmed" },
    { id: 2, address: "456 Park Ave, Unit 7", date: "2025-03-03T10:30:00", status: "pending" },
  ]

  const applications = [
    { id: 1, property: "123 Main St, Apt 4B", submitted: "2025-02-20", status: "under review" },
    { id: 2, property: "789 Broadway, Unit 12C", submitted: "2025-02-15", status: "approved" },
  ]

  const leases = [
    {
      id: 1,
      property: "789 Broadway, Unit 12C",
      startDate: "2025-04-01",
      endDate: "2026-03-31",
      status: "active",
      hasSigned: true,
      landlordSigned: true,
    },
  ]

  return (
    <TenantLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Tenant Dashboard</h1>
          <p className="text-muted-foreground">Find, tour, and manage your rental properties all in one place.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Property Search</CardTitle>
              <Search className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Find a Home</div>
              <p className="text-xs text-muted-foreground">Search by zip code</p>
            </CardContent>
            <CardFooter>
              <form className="flex w-full gap-2">
                <Input placeholder="Enter zip code" value={searchZip} onChange={(e) => setSearchZip(e.target.value)} />
                <Button type="submit" size="sm">
                  Search
                </Button>
              </form>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Tours</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{upcomingTours.length}</div>
              <p className="text-xs text-muted-foreground">Scheduled property tours</p>
            </CardContent>
            <CardFooter>
              <Link href="/tenant/tours">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Applications</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{applications.length}</div>
              <p className="text-xs text-muted-foreground">Rental applications</p>
            </CardContent>
            <CardFooter>
              <Link href="/tenant/applications">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Leases</CardTitle>
              <Key className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{leases.filter((l) => l.status === "active").length}</div>
              <p className="text-xs text-muted-foreground">Current rental agreements</p>
            </CardContent>
            <CardFooter>
              <Link href="/tenant/leases">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <Tabs defaultValue="tours" className="w-full">
          <TabsList>
            <TabsTrigger value="tours">Upcoming Tours</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="leases">Leases</TabsTrigger>
          </TabsList>
          <TabsContent value="tours" className="space-y-4">
            <h3 className="text-lg font-medium">Scheduled Property Tours</h3>
            {upcomingTours.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {upcomingTours.map((tour) => (
                  <Card key={tour.id}>
                    <CardHeader>
                      <CardTitle className="text-base">{tour.address}</CardTitle>
                      <CardDescription>{new Date(tour.date).toLocaleString()}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <Badge variant={tour.status === "confirmed" ? "default" : "outline"}>
                          {tour.status === "confirmed" ? "Confirmed" : "Pending"}
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                      {tour.status === "confirmed" && (
                        <Button size="sm" className="flex items-center gap-2">
                          <Key className="h-4 w-4" />
                          <span>Unlock Door</span>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No upcoming tours scheduled.</p>
            )}
            <div className="flex justify-center">
              <Link href="/tenant/properties">
                <Button>Find Properties to Tour</Button>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="applications" className="space-y-4">
            <h3 className="text-lg font-medium">Rental Applications</h3>
            {applications.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {applications.map((app) => (
                  <Card key={app.id}>
                    <CardHeader>
                      <CardTitle className="text-base">{app.property}</CardTitle>
                      <CardDescription>Submitted: {new Date(app.submitted).toLocaleDateString()}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <Badge variant={app.status === "approved" ? "default" : "outline"}>
                          {app.status === "approved" ? "Approved" : "Under Review"}
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No applications submitted.</p>
            )}
          </TabsContent>

          <TabsContent value="leases" className="space-y-4">
            <h3 className="text-lg font-medium">Lease Agreements</h3>
            {leases.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {leases.map((lease) => (
                  <Card key={lease.id}>
                    <CardHeader>
                      <CardTitle className="text-base">{lease.property}</CardTitle>
                      <CardDescription>
                        {new Date(lease.startDate).toLocaleDateString()} -{" "}
                        {new Date(lease.endDate).toLocaleDateString()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <Badge variant={lease.status === "active" ? "default" : "outline"}>
                            {lease.status === "active" ? "Active" : "Pending"}
                          </Badge>
                        </div>
                        <div className="text-sm">
                          {lease.hasSigned ? (
                            <span className="text-green-600">✓ Signed by you</span>
                          ) : (
                            <span className="text-amber-600">Awaiting your signature</span>
                          )}
                        </div>
                        <div className="text-sm">
                          {lease.landlordSigned ? (
                            <span className="text-green-600">✓ Signed by landlord</span>
                          ) : (
                            <span className="text-amber-600">Awaiting landlord signature</span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View Lease
                      </Button>
                      {lease.status === "active" && (
                        <Button size="sm" className="flex items-center gap-2">
                          <Key className="h-4 w-4" />
                          <span>Unlock Door</span>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No active leases.</p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </TenantLayout>
  )
}

