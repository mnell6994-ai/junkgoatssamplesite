"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Clock, Users, Thermometer, Star, Zap } from "lucide-react";

export default function ApplicationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Thermometer className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">SaunaSwift</span>
            </div>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
              Demo Mode
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Welcome to SaunaSwift
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            Your mobile sauna rental platform for Virginia locations. Book portable sauna experiences 
            in Richmond, Charlottesville, Williamsburg, and Fredericksburg.
          </p>
        </div>

        {/* Booking Form Demo */}
        <Card className="max-w-2xl mx-auto mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Book Your Sauna Experience
            </CardTitle>
            <CardDescription>
              Select your location, date, and preferences to reserve your private sauna session
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="richmond">Richmond, VA</SelectItem>
                    <SelectItem value="charlottesville">Charlottesville, VA</SelectItem>
                    <SelectItem value="williamsburg">Williamsburg, VA</SelectItem>
                    <SelectItem value="fredericksburg">Fredericksburg, VA</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input type="date" id="date" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                    <SelectItem value="evening">Evening (5PM - 9PM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Session length" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1hour">1 Hour - $89</SelectItem>
                    <SelectItem value="2hours">2 Hours - $149</SelectItem>
                    <SelectItem value="3hours">3 Hours - $199</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  <Zap className="w-4 h-4 mr-2" />
                  Book Now (Demo)
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-96">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://koqqkpitepqwlfjymcje.supabase.co/storage/v1/object/public/brand-assets/5ds-blank.svg" />
                      <AvatarFallback>5DS</AvatarFallback>
                    </Avatar>
                    <h4 className="text-sm font-semibold">Booking System Integration</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">Connect this booking form to a real payment and scheduling system</p>
                  <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-md text-xs font-mono">
                    <div className="text-slate-600 dark:text-slate-400 mb-2">Claude Code Prompt (copy & paste):</div>
                    <div className="text-slate-800 dark:text-slate-200 whitespace-pre-wrap">
                      {`Add booking system integration to SaunaSwift. Create API route at /api/bookings using Stripe API for payments and Supabase for scheduling. Add STRIPE_API_KEY=your_stripe_key to .env.local. Implement real-time availability checking and email confirmations. Use existing form components and maintain current styling. After completing all tasks from this prompt, provide a 1-line feedback summary to Cursor Chat about what was accomplished.`}
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full" 
                    onClick={() => navigator.clipboard.writeText(`Add booking system integration to SaunaSwift. Create API route at /api/bookings using Stripe API for payments and Supabase for scheduling. Add STRIPE_API_KEY=your_stripe_key to .env.local. Implement real-time availability checking and email confirmations. Use existing form components and maintain current styling. After completing all tasks from this prompt, provide a 1-line feedback summary to Cursor Chat about what was accomplished.`)}
                  >
                    Copy Claude Code Prompt
                  </Button>
                </div>
              </HoverCardContent>
            </HoverCard>
          </CardContent>
        </Card>

        {/* Available Locations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Available Locations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Richmond", address: "Downtown Richmond", rating: 4.9, available: true },
              { name: "Charlottesville", address: "University Area", rating: 4.8, available: true },
              { name: "Williamsburg", address: "Historic District", rating: 4.7, available: false },
              { name: "Fredericksburg", address: "Old Town", rating: 4.6, available: true }
            ].map((location) => (
              <Card key={location.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{location.name}</CardTitle>
                    <Badge variant={location.available ? "default" : "secondary"}>
                      {location.available ? "Available" : "Booked"}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {location.address}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{location.rating}</span>
                    <span className="text-sm text-slate-500">(24 reviews)</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    disabled={!location.available}
                  >
                    {location.available ? "View Availability" : "Fully Booked"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Demo */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Sauna Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-2">
                  <Thermometer className="w-6 h-6 text-orange-600 dark:text-orange-300" />
                </div>
                <CardTitle>Temperature Control</CardTitle>
                <CardDescription>
                  Adjustable heat settings from 150°F to 200°F
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <CardTitle>Group Sessions</CardTitle>
                <CardDescription>
                  Accommodates 2-6 people for private sessions
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-green-600 dark:text-green-300" />
                </div>
                <CardTitle>Flexible Timing</CardTitle>
                <CardDescription>
                  Book sessions from 1-3 hours with flexible scheduling
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="max-w-4xl mx-auto text-center">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Experience SaunaSwift?</CardTitle>
            <CardDescription className="text-lg">
              This is your starter kit - customize and enhance with real functionality
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                Start Building
              </Button>
              <Button variant="outline" size="lg">
                View Components
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
