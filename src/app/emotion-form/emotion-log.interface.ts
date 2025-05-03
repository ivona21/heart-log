export default interface EmotionLog {
  emotion: string;
  description: string;
  date: Date;
}

export type GroupedEmotionLog = {
  date: Date;
  logs: EmotionLog[];
};
