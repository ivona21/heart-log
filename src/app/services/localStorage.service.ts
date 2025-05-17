import { Injectable, signal } from '@angular/core';
import EmotionLog from '../emotion-form/emotion-log.interface';

@Injectable({
  providedIn: 'root',
})
export class LogalStorageService {
  private key = 'emotionLogs';
  emotions = signal<EmotionLog[]>([]);

  constructor() {
    this.setEmotionsFromLocalStorage();
  }

  private setEmotionsFromLocalStorage(): void {
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
    this.emotions.set(emotions);
  }

  setEmotionToLocalStorage(emotionLog: EmotionLog) {
    const previousLogs = JSON.parse(
      localStorage.getItem('emotionLogs') || '[]',
    );
    previousLogs.push(emotionLog);
    localStorage.setItem('emotionLogs', JSON.stringify(previousLogs));
    this.setEmotionsFromLocalStorage();
  }

  clear(): void {
    localStorage.removeItem(this.key);
  }
}
