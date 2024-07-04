import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";

const predefinedRoles = [
  "Super Admin",
  "Admin",
  "Operatore Interno",
  "Operatore Esterno",
  "Referente Principale",
  "Dipendente Azienda",
];

const availableFunctions = [
  "Gestisci Documenti",
  "Gestisci Utenti",
  "Attività",
  "News",
  "Chat",
  "Calendario",
  "Gestione Sedi",
  "Configurazioni",
];

const RolesPermissions = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Gestisci Documenti", "Gestisci Utenti", "Attività"] },
    { id: 2, name: "User", permissions: ["Chat"] },
  ]);
  const [newRole, setNewRole] = useState({ name: "", permissions: [] });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCheckboxChange = (functionName) => {
    setNewRole((prevRole) => ({
      ...prevRole,
      permissions: prevRole.permissions.includes(functionName)
        ? prevRole.permissions.filter((perm) => perm !== functionName)
        : [...prevRole.permissions, functionName],
    }));
  };

  const handleAddRole = () => {
    setRoles((prevRoles) => [
      ...prevRoles,
      { id: prevRoles.length + 1, ...newRole },
    ]);
    setNewRole({ name: "", permissions: [] });
    setIsDialogOpen(false);
    toast.success("Role added successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Ruoli e autorizzazioni</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>Aggiungi Ruolo</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Aggiungi Nuovo Ruolo</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome Ruolo
                </label>
                <select
                  id="name"
                  name="name"
                  value={newRole.name}
                  onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="">Seleziona un ruolo</option>
                  {predefinedRoles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Permessi
                </label>
                <div className="mt-2 space-y-2">
                  {availableFunctions.map((functionName) => (
                    <div key={functionName} className="flex items-center">
                      <Checkbox
                        id={functionName}
                        checked={newRole.permissions.includes(functionName)}
                        onCheckedChange={() => handleCheckboxChange(functionName)}
                      />
                      <label htmlFor={functionName} className="ml-2 block text-sm text-gray-900">
                        {functionName}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <Button onClick={handleAddRole}>Salva</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome Ruolo</TableHead>
            <TableHead>Permessi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.id}>
              <TableCell>{role.name}</TableCell>
              <TableCell>{role.permissions.join(", ")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RolesPermissions;