import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-bootcamp';
}
