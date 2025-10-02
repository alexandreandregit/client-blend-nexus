import { KPICard } from "@/components/KPICard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, DollarSign, Users, Target } from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 45000, conversions: 120 },
  { month: "Feb", revenue: 52000, conversions: 145 },
  { month: "Mar", revenue: 48000, conversions: 132 },
  { month: "Apr", revenue: 61000, conversions: 168 },
  { month: "May", revenue: 58000, conversions: 155 },
  { month: "Jun", revenue: 67000, conversions: 182 },
];

const channelData = [
  { name: "Digital Ads", value: 35, color: "hsl(221, 83%, 53%)" },
  { name: "Clienteling", value: 25, color: "hsl(262, 83%, 58%)" },
  { name: "Email", value: 20, color: "hsl(142, 76%, 36%)" },
  { name: "Social", value: 15, color: "hsl(38, 92%, 50%)" },
  { name: "Other", value: 5, color: "hsl(215, 20%, 65%)" },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Overview of your marketing performance
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Total Revenue"
          value="€331K"
          change={12.5}
          icon={DollarSign}
          trend="up"
        />
        <KPICard
          title="Conversions"
          value="902"
          change={8.2}
          icon={Target}
          trend="up"
        />
        <KPICard
          title="ROI"
          value="342%"
          change={15.3}
          icon={TrendingUp}
          trend="up"
        />
        <KPICard
          title="CAC"
          value="€48"
          change={-5.1}
          icon={Users}
          trend="down"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Revenue & Conversions Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(221, 83%, 53%)"
                  strokeWidth={2}
                  name="Revenue (€)"
                />
                <Line
                  type="monotone"
                  dataKey="conversions"
                  stroke="hsl(262, 83%, 58%)"
                  strokeWidth={2}
                  name="Conversions"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Channel Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={channelData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {channelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Channel Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={channelData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="value" name="Performance (%)" radius={[8, 8, 0, 0]}>
                {channelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
