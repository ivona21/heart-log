import EmotionLog, {
  GroupedEmotionLog,
} from './emotion-form/emotion-log.interface';

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

export function groupEmotionLogsByDate(
  logs: EmotionLog[],
): GroupedEmotionLog[] {
  const groupedMap = new Map<string, EmotionLog[]>();

  for (const log of logs) {
    const dateKey = log.date.toISOString().split('T')[0]; // 'YYYY-MM-DD'
    if (!groupedMap.has(dateKey)) {
      groupedMap.set(dateKey, []);
    }
    groupedMap.get(dateKey)!.push(log);
  }

  return Array.from(groupedMap.entries())
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([dateString, logs]) => ({
      date: new Date(dateString),
      logs,
    }));
}
