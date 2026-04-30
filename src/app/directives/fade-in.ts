import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
  standalone: true,
})
export class FadeInDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'fade-in');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'visible');
            observer.unobserve(this.el.nativeElement);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    );

    observer.observe(this.el.nativeElement);
  }
}
