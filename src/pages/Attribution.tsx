import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Badge } from "@/components/ui/badge";

const attributionModels = [
  {
    name: "Linear",
    description: "Equal credit to all touchpoints",
    digital: 42,
    clienteling: 38,
    email: 20,
  },
  {
    name: "Last Touch",
    description: "100% credit to final interaction",
    digital: 55,
    clienteling: 35,
    email: 10,
  },
  {
    name: "First Touch",
    description: "100% credit to first interaction",
    digital: 60,
    clienteling: 25,
    email: 15,
  },
  {
    name: "Position Based (40-20-40)",
    description: "40% first, 40% last, 20% middle",
    digital: 48,
    clienteling: 32,
    email: 20,
  },
  {
    name: "Shapley",
    description: "Game theory-based contribution",
    digital: 45,
    clienteling: 36,
    email: 19,
  },
];

const Attribution = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Attribution Models</h1>
        <p className="text-muted-foreground mt-1">
          Compare different attribution methodologies
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {attributionModels.map((model) => (
          <Card key={model.name} className="border-border/50 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center justify-between">
                {model.name}
                <Badge variant="outline" className="ml-2">Active</Badge>
              </CardTitle>
              <p className="text-sm text-muted-foreground">{model.description}</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Digital Ads</span>
                  <span className="font-semibold">{model.digital}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${model.digital}%` }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Clienteling</span>
                  <span className="font-semibold">{model.clienteling}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-accent h-2 rounded-full"
                    style={{ width: `${model.clienteling}%` }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Email</span>
                  <span className="font-semibold">{model.email}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-success h-2 rounded-full"
                    style={{ width: `${model.email}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Model Comparison Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={attributionModels}>
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
              <Legend />
              <Bar dataKey="digital" fill="hsl(221, 83%, 53%)" name="Digital Ads (%)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="clienteling" fill="hsl(262, 83%, 58%)" name="Clienteling (%)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="email" fill="hsl(142, 76%, 36%)" name="Email (%)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Attribution;
