import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const DocumentAnalysis = () => {
  const [file, setFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAnalyze = () => {
    if (!file) {
      toast.error("Please upload a document first.");
      return;
    }

    // Simulate document analysis
    setTimeout(() => {
      setAnalysisResult({
        summary: "This is a summary of the document.",
        keywords: ["keyword1", "keyword2", "keyword3"],
      });
      toast.success("Document analyzed successfully!");
    }, 2000);
  };

  const categories = [
    { name: "Category 1" },
    { name: "Category 2" },
    { name: "Category 3" },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Analisi documenti</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label htmlFor="document" className="block text-sm font-medium text-gray-700">
                Carica Documento
              </label>
              <Input
                id="document"
                type="file"
                onChange={handleFileChange}
                className="mt-1"
              />
            </div>
            <Button onClick={handleAnalyze}>Analizza</Button>
          </div>
          {analysisResult && (
            <div className="mt-6">
              <h2 className="text-lg font-medium">Risultati dell'analisi</h2>
              <p><strong>Summary:</strong> {analysisResult.summary}</p>
              <p><strong>Keywords:</strong> {analysisResult.keywords.join(", ")}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Categorie già censite</h2>
        {categories.map((category, index) => (
          <Card key={index} className="mb-4">
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex space-x-4">
              <Button variant="outline">Modifica Regole di Classificazione</Button>
              <Button variant="outline">Modifica Regole di Estrazione</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DocumentAnalysis;