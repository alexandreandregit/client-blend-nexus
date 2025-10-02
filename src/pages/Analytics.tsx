import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const performanceData = [
  { channel: "Digital Ads", revenue: 115000, conversions: 312, roi: 385 },
  { channel: "Clienteling", revenue: 82000, conversions: 228, roi: 420 },
  { channel: "Email", revenue: 66000, conversions: 185, roi: 315 },
  { channel: "Social Media", revenue: 49000, conversions: 135, roi: 290 },
  { channel: "Organic", revenue: 19000, conversions: 42, roi: 510 },
];

const timeSeriesData = [
  { date: "Week 1", digitalAds: 18500, clienteling: 13200, email: 10500 },
  { date: "Week 2", digitalAds: 19200, clienteling: 13800, email: 11200 },
  { date: "Week 3", digitalAds: 18900, clienteling: 13500, email: 10800 },
  { date: "Week 4", digitalAds: 20100, clienteling: 14200, email: 11800 },
  { date: "Week 5", digitalAds: 19800, clienteling: 13900, email: 11400 },
  { date: "Week 6", digitalAds: 21200, clienteling: 14400, email: 12100 },
];

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground mt-1">
          Deep dive into your marketing performance
        </p>
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Channel Performance Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="channel" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="revenue" fill="hsl(221, 83%, 53%)" name="Revenue (€)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="conversions" fill="hsl(262, 83%, 58%)" name="Conversions" radius={[8, 8, 0, 0]} />
              <Bar dataKey="roi" fill="hsl(142, 76%, 36%)" name="ROI (%)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Revenue Trends by Channel</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={timeSeriesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="digitalAds" stroke="hsl(221, 83%, 53%)" strokeWidth={2} name="Digital Ads" />
              <Line type="monotone" dataKey="clienteling" stroke="hsl(262, 83%, 58%)" strokeWidth={2} name="Clienteling" />
              <Line type="monotone" dataKey="email" stroke="hsl(142, 76%, 36%)" strokeWidth={2} name="Email" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        {performanceData.map((channel) => (
          <Card key={channel.channel} className="border-border/50 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-base">{channel.channel}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-sm text-muted-foreground">Revenue</p>
                <p className="text-2xl font-bold">€{(channel.revenue / 1000).toFixed(0)}K</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Conversions</p>
                <p className="text-xl font-semibold">{channel.conversions}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">ROI</p>
                <p className="text-xl font-semibold text-success">{channel.roi}%</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
