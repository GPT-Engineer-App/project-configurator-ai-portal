import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchMetrics } from "@/lib/api";

const Dashboard = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["metrics"],
    queryFn: fetchMetrics,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading metrics</div>;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
    </div>
  );
};

export default Dashboard;