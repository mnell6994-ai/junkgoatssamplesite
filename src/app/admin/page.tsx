"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase, ContactSubmission } from '@/lib/supabase';
import { Phone, Mail, Calendar, MessageSquare, CheckCircle, Clock, XCircle } from 'lucide-react';

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const result = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (result.error) {
        setError(result.error.message);
      } else {
        setSubmissions(result.data || []);
      }
    } catch (err) {
      setError('Failed to fetch submissions');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: ContactSubmission['status']) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ status })
        .eq('id', id);

      if (error) {
        console.error('Error updating status:', error);
      } else {
        // Update local state
        setSubmissions(prev => 
          prev.map(sub => 
            sub.id === id ? { ...sub, status } : sub
          )
        );
      }
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const getStatusBadge = (status: ContactSubmission['status']) => {
    const statusConfig = {
      new: { color: 'bg-blue-100 text-blue-800', icon: Clock, label: 'New' },
      contacted: { color: 'bg-yellow-100 text-yellow-800', icon: Phone, label: 'Contacted' },
      completed: { color: 'bg-green-100 text-green-800', icon: CheckCircle, label: 'Completed' },
      cancelled: { color: 'bg-red-100 text-red-800', icon: XCircle, label: 'Cancelled' }
    };

    const config = statusConfig[status || 'new'];
    const Icon = config.icon;

    return (
      <Badge className={`${config.color} flex items-center gap-1`}>
        <Icon className="w-3 h-3" />
        {config.label}
      </Badge>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">Loading submissions...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-red-600">Error: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Form Submissions</h1>
          <p className="text-gray-600">Manage and track customer inquiries</p>
        </div>

        <div className="grid gap-6">
          {submissions.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No submissions yet</p>
              </CardContent>
            </Card>
          ) : (
            submissions.map((submission) => (
              <Card key={submission.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{submission.name}</CardTitle>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          {submission.email}
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          {submission.phone}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(submission.created_at!).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    {getStatusBadge(submission.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {submission.service && (
                      <div>
                        <span className="font-medium">Service:</span> {submission.service}
                      </div>
                    )}
                    {submission.property_size && (
                      <div>
                        <span className="font-medium">Property Size:</span> {submission.property_size}
                      </div>
                    )}
                    {submission.message && (
                      <div>
                        <span className="font-medium">Message:</span>
                        <p className="mt-1 text-gray-700">{submission.message}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateStatus(submission.id!, 'contacted')}
                      disabled={submission.status === 'contacted'}
                    >
                      Mark as Contacted
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateStatus(submission.id!, 'completed')}
                      disabled={submission.status === 'completed'}
                    >
                      Mark as Completed
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateStatus(submission.id!, 'cancelled')}
                      disabled={submission.status === 'cancelled'}
                    >
                      Mark as Cancelled
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

