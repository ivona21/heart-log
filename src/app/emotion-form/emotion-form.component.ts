import { Component, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import EmotionLog from './emotion-log.interface';
import { LogalStorageService } from '../services/localStorage.service';

@Component({
  selector: 'app-emotion-form',
  imports: [FormsModule],
  templateUrl: './emotion-form.component.html',
  styleUrl: './emotion-form.component.css',
})
export class EmotionFormComponent {
  emotion = '';
  description = '';
  localStorageService = inject(LogalStorageService);

  setToLocalStorage(emotionLog: EmotionLog) {
    this.localStorageService.setEmotionToLocalStorage(emotionLog);
  }

  clearForm() {
    this.emotion = '';
    this.description = '';
  }

  submit() {
    const emotionLog = {
      emotion: this.emotion,
      description: this.description,
      date: new Date(),
    };
    this.clearForm();
    this.setToLocalStorage(emotionLog);
  }
}
