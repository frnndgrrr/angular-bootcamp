import { Component } from '@angular/core';
import { AttrDirectivesComponent } from './components/attr-directives/attr-directives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [AttrDirectivesComponent]
})
export class AppComponent {
}
