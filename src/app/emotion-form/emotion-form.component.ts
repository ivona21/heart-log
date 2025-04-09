import {Component, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import EmotionLog from './emotion-log.interface';

@Component({
  selector: 'app-emotion-form',
  imports: [
    FormsModule
  ],
  templateUrl: './emotion-form.component.html',
  styleUrl: './emotion-form.component.css'
})
export class EmotionFormComponent {
   emotion = "";
   description ="";

   setToLocalStorage(emotionLog: EmotionLog) {
     const previousLogs = JSON.parse(localStorage.getItem('emotionLogs') || '[]');
      previousLogs.push(emotionLog);
      localStorage.setItem('emotionLogs', JSON.stringify(previousLogs));
   }

   clearForm() {
     this.emotion = "";
     this.description = "";
   }

   submit() {
     const emotionLog = {
       emotion: this.emotion,
       description: this.description,
       date: new Date()
     };
      this.clearForm();
     this.setToLocalStorage(emotionLog);
   }
}
