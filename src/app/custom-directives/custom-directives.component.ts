import { Component } from '@angular/core';
import { CapitalizeDirective } from '../directives/capitalize.directive';

@Component({
  selector: 'app-custom-directives',
  standalone: true,
  imports: [CapitalizeDirective],
  templateUrl: './custom-directives.component.html',
  styleUrl: './custom-directives.component.scss'
})
export class CustomDirectivesComponent {

}
