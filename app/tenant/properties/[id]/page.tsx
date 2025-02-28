"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, Check, Download, Key, Pencil } from "lucide-react"
import TenantLayout from "@/components/tenant-layout"

export default function LeaseDetailsPage({ params }: { params: { id: string } }) {
  const [isSigning, setIsSigning] = useState(false)

  // Mock lease data
  const lease = {
    id: params.id,
    property: {
      id: "1",
      address: "789 Broadway, Unit 12C",
      city: "New York",
      state: "NY",
      zip: "10003",
    },
    startDate: "2025-04-01",
    endDate: "2026-03-31",
    monthlyRent: 2800,
    securityDeposit: 2800,
    status: "pending",
    tenantSigned: false,
    landlordSigned: true,
    landlord: {
      name: "ABC Properties",
      email: "info@abcproperties.com",
      phone: "(212) 555-1234",
    },
  }

  const handleSignLease = () => {
    setIsSigning(true)
    // Simulate API call to sign lease
    setTimeout(() => {
      setIsSigning(false)
      alert("Lease signed successfully!")
    }, 2000)
  }

  return (
    <TenantLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Link href="/tenant/leases" className="text-sm text-muted-foreground hover:underline">
              Leases
            </Link>
            <span className="text-sm text-muted-foreground">/</span>
            <span className="text-sm">{lease.property.address}</span>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Lease Agreement</h1>
            <Badge variant={lease.status === "active" ? "default" : "outline"}>
              {lease.status === "active" ? "Active" : "Pending"}
            </Badge>
          </div>
          <p className="text-muted-foreground">
            {lease.property.address}, {lease.property.city}, {lease.property.state} {lease.property.zip}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Lease Document</CardTitle>
                <CardDescription>Review your lease agreement carefully before signing</CardDescription>
              </CardHeader>
              <CardContent className="h-[500px] overflow-y-auto border rounded-md p-4 bg-muted/30">
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-xl font-bold">RESIDENTIAL LEASE AGREEMENT</h2>
                    <p className="text-sm text-muted-foreground">
                      This document is a legally binding contract. If not understood, seek legal advice.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">1. PARTIES</h3>
                    <p>
                      This Lease Agreement ("Agreement") is entered into on [Date], between ABC Properties ("Landlord")
                      and [Tenant Name] ("Tenant").
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">2. PROPERTY</h3>
                    <p>
                      Landlord leases to Tenant the residential property located at: {lease.property.address},{" "}
                      {lease.property.city}, {lease.property.state} {lease.property.zip} ("Premises").
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">3. TERM</h3>
                    <p>
                      The lease term begins on {new Date(lease.startDate).toLocaleDateString()} and ends on{" "}
                      {new Date(lease.endDate).toLocaleDateString()}.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">4. RENT</h3>
                    <p>Tenant agrees to pay ${lease.monthlyRent} per month, due on the 1st day of each month.</p>
                    <p>Late payments will incur a fee of $50 if not received by the 5th day of the month.</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">5. SECURITY DEPOSIT</h3>
                    <p>
                      Tenant will pay a security deposit of ${lease.securityDeposit} to be held during the term of this
                      Agreement.
                    </p>
                    <p>
                      The security deposit will be returned within 30 days after the Premises have been vacated, less
                      any deductions for damages beyond normal wear and tear.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">6. UTILITIES</h3>
                    <p>
                      Tenant is responsible for payment of all utilities and services, including electricity, gas,
                      water, sewer, trash, internet, and cable TV.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">7. MAINTENANCE</h3>
                    <p>
                      Tenant shall maintain the Premises in a clean and sanitary condition and shall not damage or
                      misuse the Premises.
                    </p>
                    <p>Landlord shall be responsible for repairs not due to Tenant's misuse or negligence.</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">8. ENTRY BY LANDLORD</h3>
                    <p>
                      Landlord may enter the Premises with 24 hours' notice for inspections, repairs, or to show the
                      property to prospective tenants.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">9. SMART ACCESS</h3>
                    <p>
                      The property is equipped with smart lock technology. Tenant agrees to use the provided digital
                      access methods responsibly and not share access credentials with unauthorized individuals.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">10. SIGNATURES</h3>
                    <p>By signing below, the parties agree to be bound by the terms of this Agreement.</p>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="space-y-2">
                        <p className="font-medium">Landlord:</p>
                        {lease.landlordSigned ? (
                          <div className="flex items-center gap-2 text-green-600">
                            <Check className="h-4 w-4" />
                            <span>Signed electronically</span>
                          </div>
                        ) : (
                          <p className="text-muted-foreground">Not signed</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <p className="font-medium">Tenant:</p>
                        {lease.tenantSigned ? (
                          <div className="flex items-center gap-2 text-green-600">
                            <Check className="h-4 w-4" />
                            <span>Signed electronically</span>
                          </div>
                        ) : (
                          <p className="text-amber-600">Awaiting signature</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </Button>
                {!lease.tenantSigned && (
                  <Button onClick={handleSignLease} disabled={isSigning} className="flex items-center gap-2">
                    <Pencil className="h-4 w-4" />
                    <span>{isSigning ? "Signing..." : "Sign Lease"}</span>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Lease Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Property</div>
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span>{lease.property.address}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Lease Term</div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {new Date(lease.startDate).toLocaleDateString()} - {new Date(lease.endDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Monthly Rent</div>
                  <div className="text-xl font-bold">${lease.monthlyRent}</div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Security Deposit</div>
                  <div>${lease.securityDeposit}</div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Landlord</div>
                  <div>{lease.landlord.name}</div>
                  <div className="text-sm text-muted-foreground">{lease.landlord.email}</div>
                  <div className="text-sm text-muted-foreground">{lease.landlord.phone}</div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Signature Status</div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span>Landlord:</span>
                      {lease.landlordSigned ? (
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          Signed
                        </Badge>
                      ) : (
                        <Badge variant="outline">Pending</Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Tenant:</span>
                      {lease.tenantSigned ? (
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          Signed
                        </Badge>
                      ) : (
                        <Badge variant="outline">Pending</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Access Control</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {lease.status === "active"
                    ? "You have access to this property through the smart lock system."
                    : "You will gain access to this property once the lease is active."}
                </p>

                {lease.status === "active" && (
                  <Button className="w-full flex items-center gap-2">
                    <Key className="h-4 w-4" />
                    <span>Unlock Door</span>
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </TenantLayout>
  )
}

