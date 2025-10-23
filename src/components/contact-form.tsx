"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Phone, Mail, Clock } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    propertySize: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          propertySize: "",
          message: ""
        });
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      service: value
    });
  };

  if (isSubmitted) {
    return (
      <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <CardContent className="p-8 text-center">
          <Check className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
          <p className="text-lg mb-4">
            We've received your request and will contact you within 24 hours to schedule your free estimate.
          </p>
          <p className="text-sm opacity-90">
            For immediate assistance, call us at (804) 555-0123
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-[#1e40af]">Get Your Free Estimate</CardTitle>
          <CardDescription className="text-lg">
            Ready to see the difference professional power washing can make? Contact us today for a free, no-obligation estimate.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1"
                  placeholder="(804) 555-0123"
                />
              </div>
              <div>
                <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                  Service Needed *
                </Label>
                <Select onValueChange={handleSelectChange} required>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house-washing">House Washing</SelectItem>
                    <SelectItem value="deck-fence-cleaning">Deck & Fence Cleaning</SelectItem>
                    <SelectItem value="concrete-cleaning">Concrete Cleaning</SelectItem>
                    <SelectItem value="roof-cleaning">Roof Cleaning</SelectItem>
                    <SelectItem value="window-cleaning">Window Cleaning</SelectItem>
                    <SelectItem value="gutter-cleaning">Gutter Cleaning</SelectItem>
                    <SelectItem value="multiple-services">Multiple Services</SelectItem>
                    <SelectItem value="not-sure">Not Sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="propertySize" className="text-sm font-medium text-gray-700">
                Property Size
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, propertySize: value})}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select property size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small (under 1,500 sq ft)</SelectItem>
                  <SelectItem value="medium">Medium (1,500-2,500 sq ft)</SelectItem>
                  <SelectItem value="large">Large (2,500+ sq ft)</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="not-sure">Not Sure</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                Additional Details
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1"
                rows={4}
                placeholder="Tell us about your specific needs, any problem areas, or questions you have..."
              />
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-lg py-3 disabled:opacity-50"
            >
              {isSubmitting ? "SUBMITTING..." : "Get My Free Estimate"}
            </Button>

            <div className="text-center text-sm text-gray-600">
              <p className="mb-2">Or call us directly:</p>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#dc2626]" />
                  <span className="font-semibold">(804) 555-0123</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#dc2626]" />
                  <span className="font-semibold">info@richmondpowerwashpro.com</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <Clock className="w-4 h-4 text-[#dc2626]" />
                <span>Mon-Sat: 7AM-7PM</span>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}


