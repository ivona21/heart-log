import EmotionLog from './emotion-form/emotion-log.interface';

export function getEmotionLogsFromLocalStorage(): EmotionLog[] {
  const storedLogs = localStorage.getItem('emotionLogs');
  const emotions: EmotionLog[] = [];

  if (storedLogs) {
    try {
      const parsedLogs = JSON.parse(storedLogs);

      if (Array.isArray(parsedLogs)) {
        for (const log of parsedLogs) {
          if (
            typeof log.emotion === 'string' &&
            typeof log.description === 'string' &&
            typeof log.date === 'string'
          ) {
            emotions.push({
              emotion: log.emotion,
              description: log.description,
              date: new Date(log.date), // Convert string to Date object
            });
          }
        }
      }
    } catch (error) {
      console.error('Failed to parse emotionLogs from localStorage:', error);
    }
  }
  return emotions;
}
