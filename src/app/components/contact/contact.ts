import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../directives/fade-in';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class ContactComponent {
  contacts = [
    {
      icon: 'envelope',
      label: 'sajithsajan@gmail.com',
      href: 'mailto:sajithsajan@gmail.com',
      isBrand: false,
    },
    { icon: 'phone', label: '+91 8281638998', href: 'tel:+918281638998', isBrand: false },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sajithsajankoshy/',
      isBrand: true,
    },
    { icon: 'github', label: 'GitHub', href: 'https://github.com/sajithssk', isBrand: true },
  ];
}
