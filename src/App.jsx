import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Edit, Shield, FileText, User } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import CustomizeLabels from "./pages/CustomizeLabels.jsx";
import RolesPermissions from "./pages/RolesPermissions.jsx";
import DocumentAnalysis from "./pages/DocumentAnalysis.jsx";
import VirtualAssistants from "./pages/VirtualAssistants.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-6 w-6 text-blue-500 shadow-lg" />,
  },
  {
    title: "Personalizza Label e Testo",
    to: "/customize-labels",
    icon: <Edit className="h-6 w-6 text-green-500 shadow-lg" />,
  },
  {
    title: "Ruoli e autorizzazioni",
    to: "/roles-permissions",
    icon: <Shield className="h-6 w-6 text-red-500 shadow-lg" />,
  },
  {
    title: "Analisi documenti",
    to: "/document-analysis",
    icon: <FileText className="h-6 w-6 text-yellow-500 shadow-lg" />,
  },
  {
    title: "Assistenti virtuali evoluti",
    to: "/virtual-assistants",
    icon: <User className="h-6 w-6 text-purple-500 shadow-lg" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="customize-labels" element={<CustomizeLabels />} />
              <Route path="roles-permissions" element={<RolesPermissions />} />
              <Route path="document-analysis" element={<DocumentAnalysis />} />
              <Route path="virtual-assistants" element={<VirtualAssistants />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;