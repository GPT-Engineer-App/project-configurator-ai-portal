import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const initialAssistants = [
  { id: 1, name: "Asia", behavior: "", knowledge: "esperta di contabilità, può gestire il servizio paghe e dare assistenza", documents: [] },
  { id: 2, name: "Carla", behavior: "", knowledge: "conosce tutta la storia di tutti i clienti e può essere interrogata su dati o documenti di qualunque cliente", documents: [] },
  { id: 3, name: "Sara", behavior: "", knowledge: "può prenotare appuntamenti e gestire la segreteria", documents: [] },
];

const VirtualAssistants = () => {
  const [assistants, setAssistants] = useState(initialAssistants);
  const [newAssistant, setNewAssistant] = useState({ name: "", behavior: "", knowledge: "", documents: [] });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAssistant((prevAssistant) => ({
      ...prevAssistant,
      [name]: value,
    }));
  };

  const handleBehaviorChange = (id, behavior) => {
    setAssistants((prevAssistants) =>
      prevAssistants.map((assistant) =>
        assistant.id === id ? { ...assistant, behavior } : assistant
      )
    );
  };

  const handleKnowledgeChange = (id, knowledge) => {
    setAssistants((prevAssistants) =>
      prevAssistants.map((assistant) =>
        assistant.id === id ? { ...assistant, knowledge } : assistant
      )
    );
  };

  const handleFileChange = (id, files) => {
    setAssistants((prevAssistants) =>
      prevAssistants.map((assistant) =>
        assistant.id === id ? { ...assistant, documents: files } : assistant
      )
    );
  };

  const handleAddAssistant = () => {
    setAssistants((prevAssistants) => [
      ...prevAssistants,
      { id: prevAssistants.length + 1, ...newAssistant },
    ]);
    setNewAssistant({ name: "", behavior: "", knowledge: "", documents: [] });
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
              <label htmlFor="behavior" className="block text-sm font-medium text-gray-700">
                Comportamento
              </label>
              <Select onValueChange={(value) => setNewAssistant({ ...newAssistant, behavior: value })}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Seleziona comportamento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Behavior 1">Behavior 1</SelectItem>
                  <SelectItem value="Behavior 2">Behavior 2</SelectItem>
                  <SelectItem value="Behavior 3">Behavior 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="knowledge" className="block text-sm font-medium text-gray-700">
                Conoscenza
              </label>
              <Textarea
                id="knowledge"
                name="knowledge"
                value={newAssistant.knowledge}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="documents" className="block text-sm font-medium text-gray-700">
                Documenti
              </label>
              <Input
                id="documents"
                type="file"
                multiple
                onChange={(e) => setNewAssistant({ ...newAssistant, documents: Array.from(e.target.files) })}
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
                  <TableHead>Comportamento</TableHead>
                  <TableHead>Conoscenza</TableHead>
                  <TableHead>Documenti</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assistants.map((assistant) => (
                  <TableRow key={assistant.id}>
                    <TableCell>{assistant.name}</TableCell>
                    <TableCell>
                      <Select onValueChange={(value) => handleBehaviorChange(assistant.id, value)} value={assistant.behavior}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Seleziona comportamento" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Behavior 1">Behavior 1</SelectItem>
                          <SelectItem value="Behavior 2">Behavior 2</SelectItem>
                          <SelectItem value="Behavior 3">Behavior 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Textarea
                        value={assistant.knowledge}
                        onChange={(e) => handleKnowledgeChange(assistant.id, e.target.value)}
                        className="mt-1"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="file"
                        multiple
                        onChange={(e) => handleFileChange(assistant.id, Array.from(e.target.files))}
                        className="mt-1"
                      />
                    </TableCell>
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