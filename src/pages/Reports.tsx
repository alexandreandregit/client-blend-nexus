import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Clock, Calendar } from "lucide-react";

const reports = [
  {
    name: "Monthly Performance Report",
    type: "Standard",
    lastGenerated: "2025-10-01",
    status: "Ready",
    frequency: "Monthly",
  },
  {
    name: "Attribution Analysis",
    type: "Custom",
    lastGenerated: "2025-09-28",
    status: "Ready",
    frequency: "Weekly",
  },
  {
    name: "Channel ROI Overview",
    type: "Standard",
    lastGenerated: "2025-09-30",
    status: "Ready",
    frequency: "Bi-weekly",
  },
  {
    name: "Customer Journey Insights",
    type: "Enriched",
    lastGenerated: "2025-09-29",
    status: "Processing",
    frequency: "Monthly",
  },
];

const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Reports</h1>
          <p className="text-muted-foreground mt-1">
            Create and manage your marketing reports
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <FileText className="mr-2 h-4 w-4" />
          Create New Report
        </Button>
      </div>

      <div className="grid gap-4">
        {reports.map((report, index) => (
          <Card key={index} className="border-border/50 bg-gradient-card hover:shadow-glow transition-all">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{report.name}</CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="outline">{report.type}</Badge>
                    <Badge
                      variant={report.status === "Ready" ? "default" : "secondary"}
                      className={report.status === "Ready" ? "bg-success" : ""}
                    >
                      {report.status}
                    </Badge>
                  </div>
                </div>
                {report.status === "Ready" && (
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Last generated: {report.lastGenerated}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Frequency: {report.frequency}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Report Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <Button variant="outline" className="h-auto py-4 flex flex-col items-start">
              <FileText className="h-5 w-5 mb-2 text-primary" />
              <span className="font-semibold">Performance Overview</span>
              <span className="text-xs text-muted-foreground mt-1">
                KPIs, trends, and channel performance
              </span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col items-start">
              <FileText className="h-5 w-5 mb-2 text-accent" />
              <span className="font-semibold">Attribution Analysis</span>
              <span className="text-xs text-muted-foreground mt-1">
                Multi-model attribution comparison
              </span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col items-start">
              <FileText className="h-5 w-5 mb-2 text-success" />
              <span className="font-semibold">Customer Journey</span>
              <span className="text-xs text-muted-foreground mt-1">
                Path analysis and conversion funnels
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
