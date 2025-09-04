import { Injectable, signal } from '@angular/core';

export interface ProjectionsTable {
  headers: string[];
  rows: (string | number)[][];
}

export interface BarChartItem {
  label: string;
  value: number;
  formattedValue: string;
}

export interface PieChartItem {
  label: string;
  value: number; // percentage
  color: string; // hex color for style binding
  tailwindColor: string; // tailwind class for legend
}

export interface Section {
  type: 'list' | 'table' | 'keyValue' | 'paragraph' | 'barChart' | 'pieChart';
  title?: string;
  items?: string[];
  tableData?: ProjectionsTable;
  data?: { key: string; value: string };
  barChartData?: { items: BarChartItem[]; unit: string };
  pieChartData?: PieChartItem[];
}

export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  sections: Section[];
}

@Injectable({
  providedIn: 'root',
})
export class PresentationDataService {
  private readonly presentationData: Slide[] = [
    {
      id: 1,
      title: 'The Opportunity',
      subtitle: 'Large Untapped Market in Legal Tech',
      sections: [
        {
          type: 'list',
          title: 'Problem:',
          items: [
            'Legal services cost $200-500/hour - unaffordable for 90% of population',
            '75,000+ businesses struggle with compliance',
            'No unified platform for Armenian legal information',
            'Manual legal research takes weeks',
          ],
        },
        {
          type: 'list',
          title: 'Market Size:',
          items: [
            '$150M Armenian legal services market',
            '$800M CIS legal tech opportunity',
            '35% annual growth rate',
          ],
        },
        {
          type: 'keyValue',
          title: 'Our Timing:',
          data: {
            key: 'Government digital transformation + AI technology maturity',
            value: ''
          }
        },
      ],
    },
    {
      id: 2,
      title: 'Our Solution',
      subtitle: 'AI-Powered Legal Intelligence Platform',
      sections: [
        {
          type: 'list',
          title: 'What We Built:',
          items: [
            'Unified access to all Armenian laws and regulations',
            'AI that understands legal questions in natural language',
            'Automated document generation',
            'Real-time compliance monitoring',
          ],
        },
        {
          type: 'list',
          title: 'Revenue Model:',
          items: [
            'B2C Subscriptions: $19-99/month',
            'B2B/Enterprise: $5,000-50,000/year',
            'API Access: Pay-per-use',
          ],
        },
        {
          type: 'keyValue',
          title: 'Current Status:',
          data: {
            key: 'MVP ready, beta launch in 3 months',
            value: ''
          }
        },
      ],
    },
    {
      id: 3,
      title: 'Traction & Validation',
      subtitle: 'Strong Early Momentum',
      sections: [
        {
          type: 'list',
          title: '✓ Technology: Working prototype with 3 integrated projects',
          items: [
            'Legal AI Platform (primary focus)',
            'Blockchain infrastructure',
            'Confidential flagship project (NDA required)',
          ],
        },
        {
          type: 'list',
          title: '✓ Data Access: Partnerships with government portals',
          items: [
            'e-gov.am (official government portal)',
            'court.am (judicial decisions)',
            'parliament.am (legislative database)',
          ],
        },
        {
          type: 'list',
          title: '✓ Market Validation:',
          items: [
            'LOIs from 2 law firms',
            'Pilot discussions with enterprises',
            'Government agency interest',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Business Projections',
      subtitle: 'Clear Path to $10M ARR',
      sections: [
        {
          type: 'barChart',
          title: 'Revenue Projections (MRR)',
          barChartData: {
            unit: 'K $',
            items: [
              { label: 'M3', value: 10, formattedValue: '$10K' },
              { label: 'M6', value: 40, formattedValue: '$40K' },
              { label: 'Y1', value: 100, formattedValue: '$100K' },
              { label: 'Y2', value: 500, formattedValue: '$500K' },
              { label: 'Y3', value: 2000, formattedValue: '$2M' },
            ]
          }
        },
        {
          type: 'list',
          title: 'Unit Economics:',
          items: [
            'Customer Acquisition Cost: $15',
            'Lifetime Value: $500',
            'Gross Margin: 70%',
          ],
        },
      ],
    },
    {
      id: 5,
      title: 'Investment Ask',
      subtitle: 'Seed Round: $2-3M',
      sections: [
        {
          type: 'pieChart',
          title: 'Use of Funds:',
          pieChartData: [
            { label: 'AI Development & Infrastructure', value: 40, color: '#3b82f6', tailwindColor: 'bg-blue-500' },
            { label: 'Customer Acquisition', value: 30, color: '#06b6d4', tailwindColor: 'bg-cyan-500' },
            { label: 'Team (10 key hires)', value: 20, color: '#8b5cf6', tailwindColor: 'bg-violet-500' },
            { label: 'Legal & Compliance', value: 10, color: '#d946ef', tailwindColor: 'bg-fuchsia-500' },
          ]
        },
        {
          type: 'list',
          title: 'Why Now:',
          items: [
            'Product ready for market',
            'Your 3-month deployment timeline aligns perfectly',
            'First-mover advantage in $800M market',
            'Government support secured',
          ],
        },
        {
          type: 'keyValue',
          title: 'Structure:',
          data: {
            key: 'SAFE Note, $10-12M valuation cap',
            value: ''
          }
        },
      ],
    },
    {
      id: 6,
      title: 'Why HAYLEX Wins',
      subtitle: 'Perfect Fit for UCEA Portfolio',
      sections: [
        {
          type: 'list',
          title: 'Competitive Advantages:',
          items: [
            '✓ Only unified legal AI platform in Armenia',
            '✓ 90% cost reduction vs traditional legal services',
            '✓ Multi-language support (Armenian, Russian, English)',
            '✓ Government data partnerships',
            '✓ Scalable to entire CIS region',
          ],
        },
        {
          type: 'list',
          title: 'Team:',
          items: [
            'Deep expertise in AI/ML and Armenian legal system',
            'Previous successful exits',
            'Advisory board with government connections',
          ],
        },
        {
          type: 'list',
          title: 'Next Steps:',
          items: [
            '1. Schedule call this week',
            '2. Product demonstration',
            '3. Due diligence (2 weeks)',
            '4. Close funding within your 3-month timeline',
          ],
        },
      ],
    },
  ];

  slides = signal<Slide[]>(this.presentationData);
}
