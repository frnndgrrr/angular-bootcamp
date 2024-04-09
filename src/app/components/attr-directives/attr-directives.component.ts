import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-attr-directives',
  standalone: true,
  imports: [RouterOutlet, NgClass, NgStyle],
  templateUrl: './attr-directives.component.html',
  styleUrl: './attr-directives.component.scss',
})
export class AttrDirectivesComponent {
  title = 'angular-bootcamp';
  active = true;

  toggle() {
    this.active = !this.active;
  }
}
