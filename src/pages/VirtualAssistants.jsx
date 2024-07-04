import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";

const VirtualAssistants = () => {
  const [assistants, setAssistants] = useState([]);
  const [newAssistant, setNewAssistant] = useState({ name: "", config: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAssistant((prevAssistant) => ({
      ...prevAssistant,
      [name]: value,
    }));
  };

  const handleAddAssistant = () => {
    setAssistants((prevAssistants) => [
      ...prevAssistants,
      { id: prevAssistants.length + 1, ...newAssistant },
    ]);
    setNewAssistant({ name: "", config: "" });
    toast.success("Virtual assistant added successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Assistenti virtuali evoluti</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome Assistente
              </label>
              <Input
                id="name"
                name="name"
                value={newAssistant.name}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="config" className="block text-sm font-medium text-gray-700">
                Configurazione
              </label>
              <Input
                id="config"
                name="config"
                value={newAssistant.config}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <Button onClick={handleAddAssistant}>Aggiungi Assistente</Button>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-medium">Assistenti Configurati</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Configurazione</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assistants.map((assistant) => (
                  <TableRow key={assistant.id}>
                    <TableCell>{assistant.name}</TableCell>
                    <TableCell>{assistant.config}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VirtualAssistants;