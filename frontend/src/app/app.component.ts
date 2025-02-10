import { Component, inject } from '@angular/core';
import { TempService } from './temp.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
  t = inject(TempService);
  message$ = this.t.getMessage();
}
