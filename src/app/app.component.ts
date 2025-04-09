import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EmotionFormComponent} from './emotion-form/emotion-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmotionFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'heart-log';
}
