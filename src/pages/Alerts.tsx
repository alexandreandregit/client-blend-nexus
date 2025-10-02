import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, TrendingDown, TrendingUp, Info, Bell } from "lucide-react";

const alerts = [
  {
    type: "critical",
    title: "Significant ROI Drop - Digital Ads",
    message: "ROI decreased by 23% in the last 7 days. Current ROI: 285% (was 370%)",
    timestamp: "2 hours ago",
    suggestion: "Review ad creative and targeting settings",
    icon: AlertTriangle,
  },
  {
    type: "warning",
    title: "Conversion Rate Decline - Email Channel",
    message: "Email conversion rate down 12% compared to last month",
    timestamp: "5 hours ago",
    suggestion: "Consider A/B testing new email templates",
    icon: TrendingDown,
  },
  {
    type: "success",
    title: "Strong Performance - Clienteling",
    message: "Clienteling channel exceeded target by 34%",
    timestamp: "1 day ago",
    suggestion: "Increase budget allocation to maximize opportunity",
    icon: TrendingUp,
  },
  {
    type: "info",
    title: "Budget Threshold Alert",
    message: "Digital Ads campaign reached 80% of monthly budget",
    timestamp: "1 day ago",
    suggestion: "Review remaining budget allocation",
    icon: Info,
  },
];

const Alerts = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Smart Alerts</h1>
          <p className="text-muted-foreground mt-1">
            Automated alerts and anomaly detection
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Bell className="mr-2 h-4 w-4" />
          Configure Alerts
        </Button>
      </div>

      <div className="grid gap-4">
        {alerts.map((alert, index) => {
          const Icon = alert.icon;
          const getAlertColor = () => {
            switch (alert.type) {
              case "critical":
                return "border-destructive/50 bg-destructive/5";
              case "warning":
                return "border-warning/50 bg-warning/5";
              case "success":
                return "border-success/50 bg-success/5";
              default:
                return "border-primary/50 bg-primary/5";
            }
          };

          const getIconColor = () => {
            switch (alert.type) {
              case "critical":
                return "text-destructive";
              case "warning":
                return "text-warning";
              case "success":
                return "text-success";
              default:
                return "text-primary";
            }
          };

          const getBadgeVariant = () => {
            switch (alert.type) {
              case "critical":
                return "destructive";
              case "success":
                return "default";
              default:
                return "outline";
            }
          };

          return (
            <Card key={index} className={`border ${getAlertColor()} transition-all hover:shadow-glow`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex gap-3 items-start flex-1">
                    <Icon className={`h-5 w-5 mt-0.5 ${getIconColor()}`} />
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{alert.title}</CardTitle>
                        <Badge variant={getBadgeVariant()} className="capitalize">
                          {alert.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{alert.message}</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {alert.timestamp}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-card/50 rounded-lg p-3 border border-border/50">
                  <p className="text-sm">
                    <span className="font-semibold text-primary">Suggestion: </span>
                    {alert.suggestion}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Alert Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="font-semibold">Performance Thresholds</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 rounded bg-secondary/50">
                  <span>ROI Drop Alert</span>
                  <Badge variant="outline">&gt; 15%</Badge>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-secondary/50">
                  <span>Conversion Rate Alert</span>
                  <Badge variant="outline">&gt; 10%</Badge>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-secondary/50">
                  <span>Budget Alert</span>
                  <Badge variant="outline">&gt; 80%</Badge>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Notification Settings</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 rounded bg-secondary/50">
                  <span>Email Notifications</span>
                  <Badge className="bg-success">Enabled</Badge>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-secondary/50">
                  <span>In-App Alerts</span>
                  <Badge className="bg-success">Enabled</Badge>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-secondary/50">
                  <span>SMS Alerts (Critical)</span>
                  <Badge className="bg-success">Enabled</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Alerts;
