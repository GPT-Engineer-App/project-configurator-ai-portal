export const fetchMetrics = async () => {
  // Simulate fetching metrics from an API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        labelsCustomized: 10,
        rolesPermissions: 5,
        documentsAnalyzed: 20,
        virtualAssistants: 3,
        documentsManaged: 50,
        activeUsers: 100,
        completedTasks: 75,
        publishedNews: 10,
        chatMessages: 200,
        calendarEvents: 15,
        managedLocations: 8,
        configurationsMade: 12,
      });
    }, 1000);
  });
};