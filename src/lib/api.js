export const fetchMetrics = async () => {
  // Simulate fetching metrics from an API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        labelsCustomized: 10,
        rolesPermissions: 5,
        documentsAnalyzed: 20,
        virtualAssistants: 3,
      });
    }, 1000);
  });
};