import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const CustomizeLabels = () => {
  const [labels, setLabels] = useState({
    header: "",
    footer: "",
    sidebar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLabels((prevLabels) => ({
      ...prevLabels,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Labels updated successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Personalizza Label e Testo</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="header" className="block text-sm font-medium text-gray-700">
                Header Label
              </label>
              <Input
                id="header"
                name="header"
                value={labels.header}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="footer" className="block text-sm font-medium text-gray-700">
                Footer Label
              </label>
              <Input
                id="footer"
                name="footer"
                value={labels.footer}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="sidebar" className="block text-sm font-medium text-gray-700">
                Sidebar Label
              </label>
              <Input
                id="sidebar"
                name="sidebar"
                value={labels.sidebar}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <Button type="submit" className="mt-4">
              Save
            </Button>
          </form>
          <div className="mt-6">
            <h2 className="text-lg font-medium">Preview</h2>
            <div className="mt-2">
              <p><strong>Header:</strong> {labels.header}</p>
              <p><strong>Footer:</strong> {labels.footer}</p>
              <p><strong>Sidebar:</strong> {labels.sidebar}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomizeLabels;