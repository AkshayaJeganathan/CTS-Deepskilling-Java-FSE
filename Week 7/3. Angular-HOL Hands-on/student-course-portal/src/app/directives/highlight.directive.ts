import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // Step 37: Configurable input color defaulting to yellow
  @Input() appHighlight: string = 'yellow';

  constructor(private el: ElementRef) {}

  // Step 33: Listen to mouseenter event
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'yellow');
  }

  // Step 33: Listen to mouseleave event
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color ? color : '';
    if (color) {
      this.el.nativeElement.style.color = '#0f172a'; // Ensure contrast on highlight
    } else {
      this.el.nativeElement.style.color = '';
    }
  }
}
