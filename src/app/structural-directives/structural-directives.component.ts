import { Component } from '@angular/core';
import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [NgFor, NgIf, NgSwitch, NgSwitchCase],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.scss'
})
export class StructuralDirectivesComponent {
  stringsArr: string[] = ['A','B','C'];
}
