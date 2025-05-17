import { Component, computed, inject } from '@angular/core';
import EmotionLog, {
  GroupedEmotionLog,
} from '../emotion-form/emotion-log.interface';
import {
  getEmotionLogsFromLocalStorage,
  groupEmotionLogsByDate,
} from '../helper';
import { EmotionsCardByDateComponent } from '../emotions-card-by-date/emotions-card-by-date.component';
import { LogalStorageService } from '../services/localStorage.service';

@Component({
  selector: 'app-emotion-list',
  imports: [EmotionsCardByDateComponent],
  templateUrl: './emotion-list.component.html',
  styleUrl: './emotion-list.component.css',
})
export class EmotionListComponent {
  localStorageService = inject(LogalStorageService);
  groupedByDateEmotions = computed<GroupedEmotionLog[]>(() => {
    return groupEmotionLogsByDate(this.localStorageService.emotions());
  });
}
