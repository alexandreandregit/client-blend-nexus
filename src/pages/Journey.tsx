import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const customerPaths = [
  {
    path: "Social Media → Website → Email → Clienteling → Purchase",
    conversions: 245,
    conversionRate: 18.5,
    avgValue: 425,
  },
  {
    path: "Digital Ads → Website → Clienteling → Purchase",
    conversions: 198,
    conversionRate: 22.3,
    avgValue: 512,
  },
  {
    path: "Email → Website → Purchase",
    conversions: 156,
    conversionRate: 15.2,
    avgValue: 348,
  },
  {
    path: "Organic → Website → Email → Purchase",
    conversions: 128,
    conversionRate: 12.8,
    avgValue: 385,
  },
  {
    path: "Clienteling → Website → Purchase",
    conversions: 112,
    conversionRate: 28.5,
    avgValue: 625,
  },
];

const journeyStages = [
  { stage: "Awareness", visitors: 12500, conversionRate: 45 },
  { stage: "Consideration", visitors: 5625, conversionRate: 32 },
  { stage: "Intent", visitors: 1800, conversionRate: 52 },
  { stage: "Purchase", visitors: 936, conversionRate: 100 },
];

const Journey = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Customer Journey</h1>
        <p className="text-muted-foreground mt-1">
          Analyze omnichannel customer paths and conversion funnels
        </p>
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Conversion Funnel</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {journeyStages.map((stage, index) => (
              <div key={stage.stage} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">{index + 1}</Badge>
                    <span className="font-semibold">{stage.stage}</span>
                  </div>
                  <div className="flex gap-6 text-sm">
                    <span className="text-muted-foreground">
                      {stage.visitors.toLocaleString()} visitors
                    </span>
                    <span className="text-success font-medium">
                      {stage.conversionRate}% conversion
                    </span>
                  </div>
                </div>
                <div className="w-full bg-secondary rounded-full h-8 overflow-hidden">
                  <div
                    className="bg-gradient-primary h-8 rounded-full flex items-center justify-end pr-4 text-white text-sm font-medium transition-all duration-500"
                    style={{ width: `${(stage.visitors / journeyStages[0].visitors) * 100}%` }}
                  >
                    {((stage.visitors / journeyStages[0].visitors) * 100).toFixed(0)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Top Conversion Paths</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {customerPaths.map((path, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-border/50 bg-gradient-card hover:shadow-glow transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-primary">{index + 1}</Badge>
                      <span className="font-mono text-sm">{path.path}</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Conversions</p>
                    <p className="text-lg font-bold">{path.conversions}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Conversion Rate</p>
                    <p className="text-lg font-bold text-success">{path.conversionRate}%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Avg. Value</p>
                    <p className="text-lg font-bold">€{path.avgValue}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Journey;
