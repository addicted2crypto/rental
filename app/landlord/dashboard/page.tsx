"use client"
import Link from "next/link"
import { CardFooter } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, FileText, Key, Plus, Users } from "lucide-react"
import LandlordLayout from "@/components/landlord-layout"

export default function LandlordDashboard() {
  // Mock data for demonstration
  const properties = [
    { id: 1, address: "123 Main St, Apt 4B", status: "vacant", nextTour: "2025-03-01T14:00:00" },
    { id: 2, address: "456 Park Ave, Unit 7", status: "occupied", leaseEnd: "2025-12-31" },
    { id: 3, address: "789 Broadway, Unit 12C", status: "pending", applicationDate: "2025-02-15" },
  ]

  const pendingApplications = [
    { id: 1, property: "123 Main St, Apt 4B", applicant: "John Smith", submitted: "2025-02-20" },
    { id: 2, property: "789 Broadway, Unit 12C", applicant: "Sarah Johnson", submitted: "2025-02-15" },
  ]

  const pendingLeases = [
    {
      id: 1,
      property: "789 Broadway, Unit 12C",
      tenant: "Sarah Johnson",
      startDate: "2025-04-01",
      endDate: "2026-03-31",
      tenantSigned: true,
      landlordSigned: false,
    },
  ]

  const upcomingTours = [
    { id: 1, property: "123 Main St, Apt 4B", visitor: "Michael Brown", date: "2025-03-01T14:00:00" },
    { id: 2, property: "456 Park Ave, Unit 7", visitor: "Emily Davis", date: "2025-03-03T10:30:00" },
  ]

  return (
    <LandlordLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Landlord Dashboard</h1>
          <p className="text-muted-foreground">Manage your properties, applications, and leases all in one place.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Applications</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Tenants</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Tours</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end">
          <Link href="/landlord/properties/new">
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              <span>Add New Property</span>
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="properties" className="w-full">
          <TabsList>
            <TabsTrigger value="properties">Properties</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="leases">Leases</TabsTrigger>
            <TabsTrigger value="tours">Tours</TabsTrigger>
          </TabsList>

          <TabsContent value="properties" className="space-y-4">
            <h3 className="text-lg font-medium">Your Properties</h3>
            {properties.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {properties.map((property) => (
                  <Card key={property.id}>
                    <CardHeader>
                      <CardTitle className="text-base">{property.address}</CardTitle>
                      <CardDescription>
                        {property.status === "vacant" && "Available for rent"}
                        {property.status === "occupied" &&
                          `Leased until ${property.leaseEnd ? new Date(property.leaseEnd).toLocaleDateString() : "N/A"}`}

                        {property.status === "pending" && "Application pending"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            property.status === "vacant"
                              ? "destructive"
                              : property.status === "occupied"
                                ? "default"
                                : "outline"
                          }
                        >
                          {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                        </Badge>

                        {property.status === "vacant" && property.nextTour && (
                          <span className="text-xs text-muted-foreground">
                            Next tour: {new Date(property.nextTour).toLocaleString()}
                          </span>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      {property.status === "vacant" && (
                        <Button size="sm" className="flex items-center gap-2">
                          <Key className="h-4 w-4" />
                          <span>Manage Access</span>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No properties listed yet.</p>
            )}
          </TabsContent>

          <TabsContent value="applications" className="space-y-4">
            <h3 className="text-lg font-medium">Pending Applications</h3>
            {pendingApplications.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {pendingApplications.map((app) => (
                  <Card key={app.id}>
                    <CardHeader>
                      <CardTitle className="text-base">{app.property}</CardTitle>
                      <CardDescription>Applicant: {app.applicant}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Submitted: {new Date(app.submitted).toLocaleDateString()}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View Application
                      </Button>
                      <div className="flex gap-2">
                        <Button variant="destructive" size="sm">
                          Reject
                        </Button>
                        <Button size="sm">Approve</Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No pending applications.</p>
            )}
          </TabsContent>

          <TabsContent value="leases" className="space-y-4">
            <h3 className="text-lg font-medium">Pending Leases</h3>
            {pendingLeases.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {pendingLeases.map((lease) => (
                  <Card key={lease.id}>
                    <CardHeader>
                      <CardTitle className="text-base">{lease.property}</CardTitle>
                      <CardDescription>Tenant: {lease.tenant}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-2">
                        <p className="text-sm text-muted-foreground">
                          {new Date(lease.startDate).toLocaleDateString()} -{" "}
                          {new Date(lease.endDate).toLocaleDateString()}
                        </p>
                        <div className="text-sm">
                          {lease.tenantSigned ? (
                            <span className="text-green-600">✓ Signed by tenant</span>
                          ) : (
                            <span className="text-amber-600">Awaiting tenant signature</span>
                          )}
                        </div>
                        <div className="text-sm">
                          {lease.landlordSigned ? (
                            <span className="text-green-600">✓ Signed by you</span>
                          ) : (
                            <span className="text-amber-600">Awaiting your signature</span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button size="sm">Review & Sign</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No pending leases.</p>
            )}
          </TabsContent>

          <TabsContent value="tours" className="space-y-4">
            <h3 className="text-lg font-medium">Upcoming Tours</h3>
            {upcomingTours.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {upcomingTours.map((tour) => (
                  <Card key={tour.id}>
                    <CardHeader>
                      <CardTitle className="text-base">{tour.property}</CardTitle>
                      <CardDescription>Visitor: {tour.visitor}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{new Date(tour.date).toLocaleString()}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                      <Button size="sm" className="flex items-center gap-2">
                        <Key className="h-4 w-4" />
                        <span>Grant Access</span>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No upcoming tours scheduled.</p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </LandlordLayout>
  )
}

