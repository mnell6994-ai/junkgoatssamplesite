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
  RefreshCw,
  Plus,
  Globe,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Activity
} from 'lucide-react';
import { getAllSites, getAdminDashboard, ClientSite } from '@/lib/multi-site-manager';

export default function MasterAdminDashboard() {
  const [sites, setSites] = useState<ClientSite[]>([]);
  const [dashboard, setDashboard] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [sitesData, dashboardData] = await Promise.all([
        getAllSites(),
        getAdminDashboard()
      ]);
      setSites(sitesData);
      setDashboard(dashboardData);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { color: 'bg-green-100 text-green-800', icon: CheckCircle, label: 'Active' },
      inactive: { color: 'bg-gray-100 text-gray-800', icon: Clock, label: 'Inactive' },
      maintenance: { color: 'bg-yellow-100 text-yellow-800', icon: AlertTriangle, label: 'Maintenance' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.inactive;
    const Icon = config.icon;

    return (
      <Badge className={`${config.color} flex items-center gap-1`}>
        <Icon className="w-3 h-3" />
        {config.label}
      </Badge>
    );
  };

  const getPerformanceBadge = (score: number) => {
    if (score >= 90) return <Badge className="bg-green-100 text-green-800">Excellent</Badge>;
    if (score >= 80) return <Badge className="bg-blue-100 text-blue-800">Good</Badge>;
    if (score >= 70) return <Badge className="bg-yellow-100 text-yellow-800">Fair</Badge>;
    return <Badge className="bg-red-100 text-red-800">Needs Attention</Badge>;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">Loading master dashboard...</div>
        </div>
      </div>
    );
  }

  if (!dashboard) {
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
              <h1 className="text-3xl font-bold text-gray-900">Master Admin Dashboard</h1>
              <p className="text-gray-600">Manage all client websites and analytics</p>
            </div>
            <div className="flex items-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                New Client Site
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export All Data
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
        {/* Master Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Globe className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Sites</p>
                  <p className="text-2xl font-bold text-gray-900">{dashboard.totalSites}</p>
                  <p className="text-xs text-green-600">{dashboard.activeSites} active</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Leads</p>
                  <p className="text-2xl font-bold text-gray-900">{dashboard.totalLeads.toLocaleString()}</p>
                  <p className="text-xs text-green-600">{dashboard.monthlyLeads} this month</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BarChart3 className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Avg SEO Score</p>
                  <p className="text-2xl font-bold text-gray-900">{dashboard.avgSeoScore}/100</p>
                  <p className="text-xs text-blue-600">Across all sites</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">${(dashboard.totalSites * 300).toLocaleString()}</p>
                  <p className="text-xs text-green-600">Estimated</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sites">All Sites</TabsTrigger>
            <TabsTrigger value="leads">All Leads</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sites Needing Attention */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    Sites Needing Attention
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {dashboard.sitesNeedingAttention.map((site: ClientSite) => (
                      <div key={site.id} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                        <div>
                          <p className="font-medium">{site.name}</p>
                          <p className="text-sm text-gray-600">{site.domain}</p>
                          <div className="flex gap-2 mt-1">
                            {site.seoScore < 70 && <Badge className="bg-red-100 text-red-800">Low SEO</Badge>}
                            {site.pageSpeed < 80 && <Badge className="bg-orange-100 text-orange-800">Slow Speed</Badge>}
                            {site.uptime < 99 && <Badge className="bg-red-100 text-red-800">Uptime Issue</Badge>}
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Fix Issues
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Performing Sites */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    Top Performing Sites
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {dashboard.topPerformingSites.map((site: ClientSite, index: number) => (
                      <div key={site.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium">{site.name}</p>
                            <p className="text-sm text-gray-600">{site.monthlyLeads} leads this month</p>
                          </div>
                        </div>
                        <div className="text-right">
                          {getPerformanceBadge(site.seoScore)}
                          <p className="text-xs text-gray-500 mt-1">{site.seoScore}/100 SEO</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {dashboard.recentActivity.map((activity: any) => (
                    <div key={activity.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-gray-600">{activity.siteName} - {activity.details}</p>
                      </div>
                      <span className="text-xs text-gray-500">
                        {new Date(activity.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* All Sites Tab */}
          <TabsContent value="sites" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sites.map((site) => (
                <Card key={site.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{site.name}</CardTitle>
                      {getStatusBadge(site.status)}
                    </div>
                    <p className="text-sm text-gray-600">{site.domain}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>SEO Score:</span>
                        <span className="font-medium">{site.seoScore}/100</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Page Speed:</span>
                        <span className="font-medium">{site.pageSpeed}/100</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Monthly Leads:</span>
                        <span className="font-medium">{site.monthlyLeads}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Uptime:</span>
                        <span className="font-medium">{site.uptime}%</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" className="flex-1">
                        View Dashboard
                      </Button>
                      <Button size="sm" variant="outline">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* All Leads Tab */}
          <TabsContent value="leads" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>All Client Leads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Lead management across all sites</p>
                  <p className="text-sm text-gray-400">This would show aggregated leads from all client sites</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2">Total Traffic</h3>
                  <p className="text-3xl font-bold text-blue-600">45,230</p>
                  <p className="text-sm text-green-600">+15% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2">Conversion Rate</h3>
                  <p className="text-3xl font-bold text-green-600">3.2%</p>
                  <p className="text-sm text-green-600">+0.5% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2">Avg. SEO Score</h3>
                  <p className="text-3xl font-bold text-purple-600">{dashboard.avgSeoScore}</p>
                  <p className="text-sm text-blue-600">Across all sites</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Performance Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Performance analytics across all sites</p>
                  <p className="text-sm text-gray-400">This would show detailed performance comparisons</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Automated Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">Monthly SEO Report</h3>
                      <p className="text-sm text-gray-600">Comprehensive SEO analysis for all sites</p>
                    </div>
                    <Button size="sm">Generate</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">Lead Performance Report</h3>
                      <p className="text-sm text-gray-600">Lead generation and conversion analysis</p>
                    </div>
                    <Button size="sm">Generate</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">Client Performance Summary</h3>
                      <p className="text-sm text-gray-600">Individual client performance reports</p>
                    </div>
                    <Button size="sm">Generate</Button>
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

