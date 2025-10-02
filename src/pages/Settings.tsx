import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Save, Database, Key, Bell } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Configure your platform preferences
        </p>
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" />
            Data Integration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="dataiku-endpoint">Dataiku API Endpoint</Label>
            <Input
              id="dataiku-endpoint"
              placeholder="https://your-dataiku-instance.com/api"
              className="bg-secondary/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="utm-source">UTM Source Tracking</Label>
            <Input
              id="utm-source"
              placeholder="utm_source, utm_medium, utm_campaign"
              defaultValue="utm_source, utm_medium, utm_campaign, utm_product"
              className="bg-secondary/50"
            />
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
            <div>
              <Label htmlFor="post-view">Post-View Tracking</Label>
              <p className="text-sm text-muted-foreground">Track ad impressions and visibility</p>
            </div>
            <Switch id="post-view" defaultChecked />
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
            <div>
              <Label htmlFor="clienteling">Clienteling Data Integration</Label>
              <p className="text-sm text-muted-foreground">Sync CRM and in-store sales data</p>
            </div>
            <Switch id="clienteling" defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5 text-primary" />
            API Keys
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="api-key">Platform API Key</Label>
            <div className="flex gap-2">
              <Input
                id="api-key"
                type="password"
                defaultValue="sk_live_************************"
                className="bg-secondary/50"
              />
              <Button variant="outline">Regenerate</Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="webhook">Webhook URL</Label>
            <Input
              id="webhook"
              placeholder="https://your-app.com/webhook"
              className="bg-secondary/50"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
            <div>
              <Label htmlFor="email-alerts">Email Alerts</Label>
              <p className="text-sm text-muted-foreground">Receive alerts via email</p>
            </div>
            <Switch id="email-alerts" defaultChecked />
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
            <div>
              <Label htmlFor="sms-critical">SMS Critical Alerts</Label>
              <p className="text-sm text-muted-foreground">SMS for critical issues only</p>
            </div>
            <Switch id="sms-critical" defaultChecked />
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
            <div>
              <Label htmlFor="weekly-report">Weekly Performance Report</Label>
              <p className="text-sm text-muted-foreground">Automated weekly summary</p>
            </div>
            <Switch id="weekly-report" defaultChecked />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button className="bg-primary hover:bg-primary/90">
          <Save className="mr-2 h-4 w-4" />
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default Settings;
