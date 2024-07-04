import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchMetrics } from "@/lib/api";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from "recharts";

const Dashboard = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["metrics"],
    queryFn: fetchMetrics,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading metrics</div>;

  const barData = [
    { name: "Labels Customized", value: data.labelsCustomized },
    { name: "Roles & Permissions", value: data.rolesPermissions },
    { name: "Documents Analyzed", value: data.documentsAnalyzed },
    { name: "Virtual Assistants", value: data.virtualAssistants },
    { name: "Documents Managed", value: data.documentsManaged },
    { name: "Active Users", value: data.activeUsers },
    { name: "Completed Tasks", value: data.completedTasks },
    { name: "Published News", value: data.publishedNews },
    { name: "Chat Messages", value: data.chatMessages },
    { name: "Calendar Events", value: data.calendarEvents },
    { name: "Managed Locations", value: data.managedLocations },
    { name: "Configurations Made", value: data.configurationsMade },
  ];

  const pieData = [
    { name: "Labels Customized", value: data.labelsCustomized },
    { name: "Roles & Permissions", value: data.rolesPermissions },
    { name: "Documents Analyzed", value: data.documentsAnalyzed },
    { name: "Virtual Assistants", value: data.virtualAssistants },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Bar Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart width={500} height={300} data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Pie Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <PieChart width={400} height={400}>
            <Pie
              data={pieData}
              cx={200}
              cy={200}
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Labels Customized</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{data.labelsCustomized}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Roles & Permissions</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{data.rolesPermissions}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Documents Analyzed</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{data.documentsAnalyzed}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Virtual Assistants</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{data.virtualAssistants}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Numero di documenti gestiti</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{data.documentsManaged}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Numero di utenti attivi</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{data.activeUsers}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Numero di attività completate</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{data.completedTasks}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Numero di news pubblicate</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{data.publishedNews}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Numero di messaggi in chat</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{data.chatMessages}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Eventi nel calendario</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{data.calendarEvents}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Numero di sedi gestite</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{data.managedLocations}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Configurazioni effettuate</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{data.configurationsMade}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;