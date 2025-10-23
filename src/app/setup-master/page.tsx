"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { setupMasterDatabase } from '@/lib/setup-master-site';

export default function SetupMasterPage() {
  const [isSettingUp, setIsSettingUp] = useState(false);
  const [setupComplete, setSetupComplete] = useState(false);
  const [error, setError] = useState('');

  const handleSetup = async () => {
    setIsSettingUp(true);
    setError('');

    try {
      const success = await setupMasterDatabase();
      
      if (success) {
        setSetupComplete(true);
      } else {
        setError('Failed to set up master database. Please check your environment variables.');
      }
    } catch (err) {
      setError('An error occurred during setup. Please try again.');
      console.error('Setup error:', err);
    } finally {
      setIsSettingUp(false);
    }
  };

  if (setupComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Setup Complete!</h2>
            <p className="text-gray-600 mb-6">
              Your master database has been set up successfully. Your website building site has been added to the master system.
            </p>
            <div className="space-y-2">
              <Button 
                onClick={() => window.location.href = '/master-admin'}
                className="w-full"
              >
                Go to Master Dashboard
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/new-client'}
                className="w-full"
              >
                Deploy New Client Site
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Master Database Setup</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Set Up Your Master System</h2>
              <p className="text-gray-600 mb-6">
                This will add your current website building site to the master database and prepare the system for managing multiple client sites.
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-800 font-medium">Setup Error</span>
                </div>
                <p className="text-red-700 mt-1">{error}</p>
              </div>
            )}

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Master Supabase project configured</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Database schema created</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Environment variables set</span>
              </div>
            </div>

            <Button 
              onClick={handleSetup}
              disabled={isSettingUp}
              className="w-full"
            >
              {isSettingUp ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Setting Up...
                </>
              ) : (
                'Initialize Master Database'
              )}
            </Button>

            <div className="text-center text-sm text-gray-500">
              <p>This will add your website building site to the master system.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
