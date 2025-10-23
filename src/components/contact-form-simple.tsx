"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

  if (isSubmitted) {
    return (
      <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-4">✓</div>
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
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-5xl font-black text-[#dc2626] text-center uppercase tracking-wide italic">
          FREE ESTIMATE
        </CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
              placeholder="(804) 555-0123"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
            >
              <option value="">Select a service</option>
              <option value="house-washing">House Washing</option>
              <option value="deck-cleaning">Deck & Fence Cleaning</option>
              <option value="concrete-cleaning">Concrete Cleaning</option>
              <option value="roof-cleaning">Roof Cleaning</option>
              <option value="window-cleaning">Window Cleaning</option>
              <option value="gutter-cleaning">Gutter Cleaning</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
              placeholder="Tell us about your project..."
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black text-xl py-4 uppercase tracking-wide italic disabled:opacity-50"
          >
            {isSubmitting ? "SUBMITTING..." : "FREE ESTIMATE"}
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Phone className="w-4 h-4 text-[#dc2626]" />
              <span>(804) 555-0123</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Mail className="w-4 h-4 text-[#dc2626]" />
              <span>info@richmondpowerwashpro.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <MapPin className="w-4 h-4 text-[#dc2626]" />
              <span>Richmond, VA</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
