import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../directives/fade-in';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './education.html',
  styleUrls: ['./education.scss'],
})
export class EducationComponent {
  achievements = [
    {
      icon: 'star',
      text: 'Honored as <strong>Outstanding Employee</strong> at organizational level, receiving awards in multiple quarters',
    },
    {
      icon: 'code',
      text: 'Solved <strong>400+ coding problems</strong> across multiple platforms with problem-solving certification',
    },
    {
      icon: 'rocket',
      text: 'Led <strong>zero-downtime CI/CD migration</strong> impacting multiple enterprise services',
    },
    {
      icon: 'shield-alt',
      text: 'Successfully implemented <strong>DevSecOps</strong> practices with Black Duck integration',
    },
  ];
}
