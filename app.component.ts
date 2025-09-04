import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationDataService, BarChartItem, PieChartItem } from './presentation-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class AppComponent {
  private dataService = inject(PresentationDataService);
  slides = this.dataService.slides;

  getPieChartGradient(data: PieChartItem[]): string {
    const sortedData = [...data].sort((a, b) => b.value - a.value);
    let cumulativePercent = 0;
    const gradientParts = sortedData.map(item => {
      const start = cumulativePercent;
      const end = cumulativePercent + item.value;
      cumulativePercent = end;
      return `${item.color} ${start}% ${end}%`;
    });
    return `conic-gradient(${gradientParts.join(', ')})`;
  }

  getMaxBarValue(items: BarChartItem[]): number {
    if (!items || items.length === 0) return 1;
    return Math.max(...items.map(i => i.value));
  }

  extractInvestmentAsk(subtitle: string): string {
    const match = subtitle.match(/\$([\d.-]+M)/);
    return match ? match[0] : '';
  }
}
