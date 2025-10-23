"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  Users, 
  Eye, 
  Search, 
  TrendingUp, 
  Calendar,
  Phone,
  Mail,
  MessageSquare,
  Settings,
  Download,
  RefreshCw
} from 'lucide-react';

interface DashboardStats {
  totalLeads: number;
  monthlyLeads: number;
  conversionRate: number;
  avgResponseTime: number;
  topKeywords: Array<{ keyword: string; position: number; traffic: number }>;
  recentLeads: Array<{
    id: string;
    name: string;
    email: string;
    phone: string;
    service: string;
    status: string;
    created_at: string;
  }>;
  seoScore: number;
  pageSpeed: number;
  uptime: number;
}

export default function ClientDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // This would fetch from your API
      // For now, using mock data
      const mockStats: DashboardStats = {
        totalLeads: 47,
        monthlyLeads: 12,
        conversionRate: 3.2,
        avgResponseTime: 2.5,
        topKeywords: [
          { keyword: 'power washing richmond', position: 3, traffic: 1200 },
          { keyword: 'house washing va', position: 5, traffic: 890 },
          { keyword: 'deck cleaning richmond', position: 2, traffic: 650 },
          { keyword: 'pressure washing near me', position: 8, traffic: 420 },
        ],
        recentLeads: [
          {
            id: '1',
            name: 'Sarah Johnson',
            email: 'sarah@email.com',
            phone: '(804) 555-0123',
            service: 'House Washing',
            status: 'new',
            created_at: '2024-01-15T10:30:00Z'
          },
          {
            id: '2',
            name: 'Mike Chen',
            email: 'mike@email.com',
            phone: '(804) 555-0456',
            service: 'Deck Cleaning',
            status: 'contacted',
            created_at: '2024-01-14T15:45:00Z'
          }
        ],
        seoScore: 87,
        pageSpeed: 92,
        uptime: 99.9
      };
      
      setStats(mockStats);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      new: { color: 'bg-blue-100 text-blue-800', label: 'New' },
      contacted: { color: 'bg-yellow-100 text-yellow-800', label: 'Contacted' },
      completed: { color: 'bg-green-100 text-green-800', label: 'Completed' },
      cancelled: { color: 'bg-red-100 text-red-800', label: 'Cancelled' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.new;
    return <Badge className={`${config.color}`}>{config.label}</Badge>;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">Loading dashboard...</div>
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-red-600">Error loading dashboard data</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Richmond Power Washing</h1>
              <p className="text-gray-600">Client Dashboard</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline" size="sm" onClick={fetchDashboardData}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Leads</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalLeads}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.monthlyLeads}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BarChart3 className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.conversionRate}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Search className="h-8 w-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">SEO Score</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.seoScore}/100</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Leads */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Recent Leads
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {stats.recentLeads.map((lead) => (
                      <div key={lead.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{lead.name}</p>
                          <p className="text-sm text-gray-600">{lead.service}</p>
                          <p className="text-xs text-gray-500">
                            {new Date(lead.created_at).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          {getStatusBadge(lead.status)}
                          <p className="text-xs text-gray-500 mt-1">{lead.phone}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Keywords */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="w-5 h-5" />
                    Top Keywords
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {stats.topKeywords.map((keyword, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{keyword.keyword}</p>
                          <p className="text-sm text-gray-600">{keyword.traffic} monthly searches</p>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-green-100 text-green-800">
                            Position #{keyword.position}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Page Speed</h3>
                  <p className="text-3xl font-bold text-green-600">{stats.pageSpeed}/100</p>
                  <p className="text-sm text-gray-600 mt-2">Excellent</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Uptime</h3>
                  <p className="text-3xl font-bold text-green-600">{stats.uptime}%</p>
                  <p className="text-sm text-gray-600 mt-2">Last 30 days</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Search className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">SEO Score</h3>
                  <p className="text-3xl font-bold text-blue-600">{stats.seoScore}/100</p>
                  <p className="text-sm text-gray-600 mt-2">Good</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Leads Tab */}
          <TabsContent value="leads" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Lead Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stats.recentLeads.map((lead) => (
                    <div key={lead.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{lead.name}</h3>
                        {getStatusBadge(lead.status)}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          {lead.email}
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          {lead.phone}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(lead.created_at).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="mt-2">
                        <span className="text-sm font-medium">Service: </span>
                        <span className="text-sm text-gray-600">{lead.service}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEO Tab */}
          <TabsContent value="seo" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>SEO Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Overall SEO Score</span>
                      <Badge className="bg-blue-100 text-blue-800">{stats.seoScore}/100</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Page Speed</span>
                      <Badge className="bg-green-100 text-green-800">{stats.pageSpeed}/100</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Mobile Friendly</span>
                      <Badge className="bg-green-100 text-green-800">Yes</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>SSL Certificate</span>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Keyword Rankings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {stats.topKeywords.map((keyword, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="font-medium">{keyword.keyword}</span>
                        <Badge className="bg-blue-100 text-blue-800">#{keyword.position}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2">Monthly Visitors</h3>
                  <p className="text-3xl font-bold text-blue-600">2,847</p>
                  <p className="text-sm text-green-600">+12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2">Bounce Rate</h3>
                  <p className="text-3xl font-bold text-orange-600">34%</p>
                  <p className="text-sm text-green-600">-5% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2">Avg. Session</h3>
                  <p className="text-3xl font-bold text-purple-600">2m 34s</p>
                  <p className="text-sm text-green-600">+8% from last month</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Organic Search</span>
                    <span className="font-semibold">68%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Direct</span>
                    <span className="font-semibold">22%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Social Media</span>
                    <span className="font-semibold">7%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Referral</span>
                    <span className="font-semibold">3%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

