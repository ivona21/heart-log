import { Component, computed, OnInit, signal } from '@angular/core';
import EmotionLog, {
  GroupedEmotionLog,
} from '../emotion-form/emotion-log.interface';
import {
  getEmotionLogsFromLocalStorage,
  groupEmotionLogsByDate,
} from '../helper';
import { EmotionsCardByDateComponent } from '../emotions-card-by-date/emotions-card-by-date.component';

@Component({
  selector: 'app-emotion-list',
  imports: [EmotionsCardByDateComponent],
  templateUrl: './emotion-list.component.html',
  styleUrl: './emotion-list.component.css',
})
export class EmotionListComponent implements OnInit {
  emotions = signal<EmotionLog[]>([]);
  groupedByDateEmotions = computed<GroupedEmotionLog[]>(() => {
    return groupEmotionLogsByDate(this.emotions());
  });

  ngOnInit(): void {
    this.emotions.set(getEmotionLogsFromLocalStorage());
  }
}
