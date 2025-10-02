import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface KPICardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
  trend?: "up" | "down";
}

export function KPICard({ title, value, change, icon: Icon, trend = "up" }: KPICardProps) {
  const isPositive = trend === "up" ? change > 0 : change < 0;
  
  return (
    <Card className="relative overflow-hidden border-border/50 bg-gradient-card backdrop-blur-sm transition-all hover:shadow-glow">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs mt-1 ${isPositive ? 'text-success' : 'text-destructive'}`}>
          {change > 0 ? '+' : ''}{change}% from last period
        </p>
      </CardContent>
    </Card>
  );
}
