"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  Globe, 
  Palette, 
  Settings, 
  Upload,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { siteTemplates, SiteTemplate, ClientSiteConfig } from '@/lib/site-templates';

export default function NewClientOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState<SiteTemplate | null>(null);
  const [clientConfig, setClientConfig] = useState<Partial<ClientSiteConfig>>({});
  const [isCreating, setIsCreating] = useState(false);

  const steps = [
    { id: 1, title: 'Choose Template', description: 'Select a template for your client' },
    { id: 2, title: 'Client Information', description: 'Enter client details and preferences' },
    { id: 3, title: 'Customization', description: 'Customize colors, content, and branding' },
    { id: 4, title: 'Deploy', description: 'Create and deploy the new site' }
  ];

  const handleTemplateSelect = (template: SiteTemplate) => {
    setSelectedTemplate(template);
    setClientConfig({
      templateId: template.id,
      industry: template.industry,
      services: template.defaultContent.services.map(s => s.name)
    });
    setCurrentStep(2);
  };

  const handleInputChange = (field: string, value: string) => {
    setClientConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceToggle = (service: string) => {
    setClientConfig(prev => ({
      ...prev,
      services: prev.services?.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...(prev.services || []), service]
    }));
  };

  const handleCreateSite = async () => {
    setIsCreating(true);
    
    try {
      // This would:
      // 1. Create new Supabase project
      // 2. Set up database schema
      // 3. Deploy site to Vercel
      // 4. Configure domain
      // 5. Set up analytics
      // 6. Send client credentials
      
      console.log('Creating site with config:', clientConfig);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Success - redirect to master dashboard
      window.location.href = '/master-admin';
    } catch (error) {
      console.error('Error creating site:', error);
    } finally {
      setIsCreating(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Choose a Template</h2>
              <p className="text-gray-600">Select the best template for your client's business</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteTemplates.map((template) => (
                <Card 
                  key={template.id} 
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => handleTemplateSelect(template)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <Badge className="bg-blue-100 text-blue-800">{template.industry}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">{template.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium mb-2">Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {template.features.slice(0, 4).map((feature) => (
                            <Badge key={feature} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Pages:</h4>
                        <p className="text-sm text-gray-600">{template.pages.join(', ')}</p>
                      </div>
                      <div className="flex gap-2">
                        <div 
                          className="w-4 h-4 rounded-full border-2" 
                          style={{ backgroundColor: template.colorScheme.primary }}
                        ></div>
                        <div 
                          className="w-4 h-4 rounded-full border-2" 
                          style={{ backgroundColor: template.colorScheme.secondary }}
                        ></div>
                        <div 
                          className="w-4 h-4 rounded-full border-2" 
                          style={{ backgroundColor: template.colorScheme.accent }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Client Information</h2>
              <p className="text-gray-600">Enter your client's business details</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="businessName">Business Name *</Label>
                <Input
                  id="businessName"
                  value={clientConfig.businessName || ''}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  placeholder="e.g., Richmond Power Washing Pro"
                />
              </div>

              <div>
                <Label htmlFor="domain">Domain *</Label>
                <Input
                  id="domain"
                  value={clientConfig.domain || ''}
                  onChange={(e) => handleInputChange('domain', e.target.value)}
                  placeholder="e.g., richmondpowerwashpro.com"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={clientConfig.phone || ''}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={clientConfig.email || ''}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="info@example.com"
                />
              </div>

              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={clientConfig.city || ''}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  placeholder="Richmond"
                />
              </div>

              <div>
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  value={clientConfig.state || ''}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  placeholder="VA"
                />
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="address">Address (Optional)</Label>
                <Input
                  id="address"
                  value={clientConfig.address || ''}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="123 Main St, Richmond, VA 23220"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button onClick={() => setCurrentStep(3)}>
                Next Step
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Customization</h2>
              <p className="text-gray-600">Customize the site for your client</p>
            </div>

            {selectedTemplate && (
              <>
                {/* Services Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle>Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {selectedTemplate.defaultContent.services.map((service) => (
                        <div
                          key={service.name}
                          className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                            clientConfig.services?.includes(service.name)
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => handleServiceToggle(service.name)}
                        >
                          <div className="flex items-center gap-2">
                            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                              clientConfig.services?.includes(service.name)
                                ? 'border-blue-500 bg-blue-500'
                                : 'border-gray-300'
                            }`}>
                              {clientConfig.services?.includes(service.name) && (
                                <CheckCircle className="w-3 h-3 text-white" />
                              )}
                            </div>
                            <span className="text-sm font-medium">{service.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Color Customization */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="w-5 h-5" />
                      Brand Colors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="primaryColor">Primary Color</Label>
                        <div className="flex gap-2 mt-1">
                          <Input
                            id="primaryColor"
                            type="color"
                            value={clientConfig.customColors?.primary || selectedTemplate.colorScheme.primary}
                            onChange={(e) => handleInputChange('customColors', {
                              ...clientConfig.customColors,
                              primary: e.target.value
                            })}
                            className="w-16 h-10"
                          />
                          <Input
                            value={clientConfig.customColors?.primary || selectedTemplate.colorScheme.primary}
                            onChange={(e) => handleInputChange('customColors', {
                              ...clientConfig.customColors,
                              primary: e.target.value
                            })}
                            placeholder="#1e40af"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="secondaryColor">Secondary Color</Label>
                        <div className="flex gap-2 mt-1">
                          <Input
                            id="secondaryColor"
                            type="color"
                            value={clientConfig.customColors?.secondary || selectedTemplate.colorScheme.secondary}
                            onChange={(e) => handleInputChange('customColors', {
                              ...clientConfig.customColors,
                              secondary: e.target.value
                            })}
                            className="w-16 h-10"
                          />
                          <Input
                            value={clientConfig.customColors?.secondary || selectedTemplate.colorScheme.secondary}
                            onChange={(e) => handleInputChange('customColors', {
                              ...clientConfig.customColors,
                              secondary: e.target.value
                            })}
                            placeholder="#dc2626"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="accentColor">Accent Color</Label>
                        <div className="flex gap-2 mt-1">
                          <Input
                            id="accentColor"
                            type="color"
                            value={clientConfig.customColors?.accent || selectedTemplate.colorScheme.accent}
                            onChange={(e) => handleInputChange('customColors', {
                              ...clientConfig.customColors,
                              accent: e.target.value
                            })}
                            className="w-16 h-10"
                          />
                          <Input
                            value={clientConfig.customColors?.accent || selectedTemplate.colorScheme.accent}
                            onChange={(e) => handleInputChange('customColors', {
                              ...clientConfig.customColors,
                              accent: e.target.value
                            })}
                            placeholder="#FFA500"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Content Customization */}
                <Card>
                  <CardHeader>
                    <CardTitle>Content</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="heroTitle">Hero Title</Label>
                      <Input
                        id="heroTitle"
                        value={clientConfig.businessName || ''}
                        onChange={(e) => handleInputChange('businessName', e.target.value)}
                        placeholder="Professional Power Washing Services"
                      />
                    </div>

                    <div>
                      <Label htmlFor="aboutText">About Text</Label>
                      <Textarea
                        id="aboutText"
                        value={clientConfig.aboutText || selectedTemplate.defaultContent.aboutText}
                        onChange={(e) => handleInputChange('aboutText', e.target.value)}
                        rows={4}
                        placeholder="Tell us about your business..."
                      />
                    </div>

                    <div>
                      <Label htmlFor="seoKeywords">SEO Keywords (comma-separated)</Label>
                      <Input
                        id="seoKeywords"
                        value={clientConfig.seoKeywords?.join(', ') || ''}
                        onChange={(e) => handleInputChange('seoKeywords', e.target.value.split(',').map(k => k.trim()))}
                        placeholder="power washing, pressure washing, house cleaning"
                      />
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setCurrentStep(2)}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <Button onClick={() => setCurrentStep(4)}>
                Next Step
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Deploy New Site</h2>
              <p className="text-gray-600">Review and deploy your client's new website</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Site Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Template:</span>
                      <p className="text-gray-600">{selectedTemplate?.name}</p>
                    </div>
                    <div>
                      <span className="font-medium">Domain:</span>
                      <p className="text-gray-600">{clientConfig.domain}</p>
                    </div>
                    <div>
                      <span className="font-medium">Business:</span>
                      <p className="text-gray-600">{clientConfig.businessName}</p>
                    </div>
                    <div>
                      <span className="font-medium">Location:</span>
                      <p className="text-gray-600">{clientConfig.city}, {clientConfig.state}</p>
                    </div>
                    <div>
                      <span className="font-medium">Services:</span>
                      <p className="text-gray-600">{clientConfig.services?.length || 0} selected</p>
                    </div>
                    <div>
                      <span className="font-medium">Status:</span>
                      <Badge className="bg-yellow-100 text-yellow-800">Ready to Deploy</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setCurrentStep(3)}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <Button 
                onClick={handleCreateSite}
                disabled={isCreating}
                className="bg-green-600 hover:bg-green-700"
              >
                {isCreating ? 'Creating Site...' : 'Deploy Site'}
                <Globe className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-gray-900">New Client Onboarding</h1>
            <p className="text-gray-600">Create a new website for your client</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  currentStep >= step.id
                    ? 'border-blue-500 bg-blue-500 text-white'
                    : 'border-gray-300 text-gray-500'
                }`}>
                  {currentStep > step.id ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-medium">{step.id}</span>
                  )}
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-blue-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card>
          <CardContent className="p-8">
            {renderStepContent()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

