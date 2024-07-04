import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
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

const RolesPermissions = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["read", "write", "delete"] },
    { id: 2, name: "User", permissions: ["read"] },
  ]);
  const [newRole, setNewRole] = useState({ name: "", permissions: "" });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRole((prevRole) => ({
      ...prevRole,
      [name]: value,
    }));
  };

  const handleAddRole = () => {
    setRoles((prevRoles) => [
      ...prevRoles,
      { id: prevRoles.length + 1, ...newRole, permissions: newRole.permissions.split(",") },
    ]);
    setNewRole({ name: "", permissions: "" });
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
                <Select onValueChange={(value) => setNewRole((prevRole) => ({ ...prevRole, name: value }))}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleziona un ruolo" />
                  </SelectTrigger>
                  <SelectContent>
                    {predefinedRoles.map((role) => (
                      <SelectItem key={role} value={role}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="permissions" className="block text-sm font-medium text-gray-700">
                  Permessi (separati da virgola)
                </label>
                <Input
                  id="permissions"
                  name="permissions"
                  value={newRole.permissions}
                  onChange={handleChange}
                  className="mt-1"
                />
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