import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditLabel'
})
export class CreditLabelPipe implements PipeTransform {
  // Step 35: Transform credits number to human-readable string with edge-case handling
  transform(credits: number | null | undefined): string {
    if (credits === null || credits === undefined || credits === 0) {
      return 'No Credits';
    }
    if (credits === 1) {
      return '1 Credit';
    }
    return `${credits} Credits`;
  }
}
