import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface TypingState {
  text: string;
  progress: number;
}

@Injectable({
  providedIn: 'root',
})
export class TypingService {
  private texts = [
    'Full-Stack Developer',
    'Cloud-Native Engineer',
    'AI Integration Specialist',
    'Microservices Architect',
  ];

  state$ = new BehaviorSubject<TypingState>({ text: '', progress: 0 });

  private currentIndex = 0;
  private isFilling = true;

  constructor(private ngZone: NgZone) {}

  startTyping() {
    this.ngZone.runOutsideAngular(() => {
      const animate = () => {
        const currentText = this.texts[this.currentIndex];

        if (this.isFilling) {
          const charsToShow = Math.min(
            Math.ceil((this.state$.value.progress / 100) * currentText.length),
            currentText.length,
          );
          const displayText = currentText.substring(0, charsToShow);

          let newProgress = this.state$.value.progress + 1.5;

          if (newProgress >= 100) {
            newProgress = 100;
            this.isFilling = false;

            // Re-enter Angular zone to trigger update
            this.ngZone.run(() => {
              this.state$.next({ text: currentText, progress: 100 });
            });

            setTimeout(animate, 2000);
            return;
          }

          // Re-enter Angular zone for each update
          this.ngZone.run(() => {
            this.state$.next({ text: displayText, progress: newProgress });
          });

          setTimeout(animate, 25);
        } else {
          this.currentIndex = (this.currentIndex + 1) % this.texts.length;
          this.isFilling = true;

          this.ngZone.run(() => {
            this.state$.next({ text: '', progress: 0 });
          });

          setTimeout(animate, 300);
        }
      };

      animate();
    });
  }
}
