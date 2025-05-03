import { Component, input } from '@angular/core';
import { GroupedEmotionLog } from '../emotion-form/emotion-log.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-emotions-card-by-date',
  imports: [DatePipe],
  templateUrl: './emotions-card-by-date.component.html',
  styleUrl: './emotions-card-by-date.component.css',
})
export class EmotionsCardByDateComponent {
  dateCardWithLogs = input<GroupedEmotionLog>();
}
