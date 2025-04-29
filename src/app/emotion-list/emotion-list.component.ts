import { Component, OnInit, signal } from '@angular/core';
import EmotionLog from '../emotion-form/emotion-log.interface';
import { getEmotionLogsFromLocalStorage } from '../helper';

@Component({
  selector: 'app-emotion-list',
  imports: [],
  templateUrl: './emotion-list.component.html',
  styleUrl: './emotion-list.component.css',
})
export class EmotionListComponent implements OnInit {
  emotions = signal<EmotionLog[]>([]);

  ngOnInit(): void {
    this.emotions.set(getEmotionLogsFromLocalStorage());
  }
}
