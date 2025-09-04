"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectionsTable {
  headers: string[]
  rows: (string | number)[][]
}

interface BarChartItem {
  label: string
  value: number
  formattedValue: string
}

interface PieChartItem {
  label: string
  value: number
  color: string
  tailwindColor: string
}

interface Section {
  type: "list" | "table" | "keyValue" | "paragraph" | "barChart" | "pieChart"
  title?: string
  items?: string[]
  tableData?: ProjectionsTable
  data?: { key: string; value: string }
  barChartData?: { items: BarChartItem[]; unit: string }
  pieChartData?: PieChartItem[]
}

interface Slide {
  id: number
  title: string
  subtitle?: string
  sections: Section[]
}

const presentationData: Slide[] = [
  {
    id: 1,
    title: "The Opportunity",
    subtitle: "Large Untapped Market in Legal Tech",
    sections: [
      {
        type: "list",
        title: "Problem:",
        items: [
          "Legal services cost $200-500/hour - unaffordable for 90% of population",
          "75,000+ businesses struggle with compliance",
          "No unified platform for Armenian legal information",
          "Manual legal research takes weeks",
        ],
      },
      {
        type: "list",
        title: "Market Size:",
        items: ["$150M Armenian legal services market", "$800M CIS legal tech opportunity", "35% annual growth rate"],
      },
      {
        type: "keyValue",
        title: "Our Timing:",
        data: {
          key: "Government digital transformation + AI technology maturity",
          value: "",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Our Solution",
    subtitle: "AI-Powered Legal Intelligence Platform",
    sections: [
      {
        type: "list",
        title: "What We Built:",
        items: [
          "Unified access to all Armenian laws and regulations",
          "AI that understands legal questions in natural language",
          "Automated document generation",
          "Real-time compliance monitoring",
        ],
      },
      {
        type: "list",
        title: "Revenue Model:",
        items: ["B2C Subscriptions: $19-99/month", "B2B/Enterprise: $5,000-50,000/year", "API Access: Pay-per-use"],
      },
      {
        type: "keyValue",
        title: "Current Status:",
        data: {
          key: "MVP ready, beta launch in 3 months",
          value: "",
        },
      },
    ],
  },
  {
    id: 3,
    title: "Traction & Validation",
    subtitle: "Strong Early Momentum",
    sections: [
      {
        type: "list",
        title: "✓ Technology: Working prototype with 3 integrated projects",
        items: [
          "Legal AI Platform (primary focus)",
          "Blockchain infrastructure",
          "Confidential flagship project (NDA required)",
        ],
      },
      {
        type: "list",
        title: "✓ Data Access: Partnerships with government portals",
        items: [
          "e-gov.am (official government portal)",
          "court.am (judicial decisions)",
          "parliament.am (legislative database)",
        ],
      },
      {
        type: "list",
        title: "✓ Market Validation:",
        items: ["LOIs from 2 law firms", "Pilot discussions with enterprises", "Government agency interest"],
      },
    ],
  },
  {
    id: 4,
    title: "Business Projections",
    subtitle: "Clear Path to $10M ARR",
    sections: [
      {
        type: "barChart",
        title: "Revenue Projections (MRR)",
        barChartData: {
          unit: "K $",
          items: [
            { label: "M3", value: 10, formattedValue: "$10K" },
            { label: "M6", value: 40, formattedValue: "$40K" },
            { label: "Y1", value: 100, formattedValue: "$100K" },
            { label: "Y2", value: 500, formattedValue: "$500K" },
            { label: "Y3", value: 2000, formattedValue: "$2M" },
          ],
        },
      },
      {
        type: "list",
        title: "Unit Economics:",
        items: ["Customer Acquisition Cost: $15", "Lifetime Value: $500", "Gross Margin: 70%"],
      },
    ],
  },
  {
    id: 5,
    title: "Investment Ask",
    subtitle: "Seed Round: $2-3M",
    sections: [
      {
        type: "pieChart",
        title: "Use of Funds:",
        pieChartData: [
          { label: "AI Development & Infrastructure", value: 40, color: "#3b82f6", tailwindColor: "bg-blue-500" },
          { label: "Customer Acquisition", value: 30, color: "#06b6d4", tailwindColor: "bg-cyan-500" },
          { label: "Team (10 key hires)", value: 20, color: "#8b5cf6", tailwindColor: "bg-violet-500" },
          { label: "Legal & Compliance", value: 10, color: "#d946ef", tailwindColor: "bg-fuchsia-500" },
        ],
      },
      {
        type: "list",
        title: "Why Now:",
        items: [
          "Product ready for market",
          "Your 3-month deployment timeline aligns perfectly",
          "First-mover advantage in $800M market",
          "Government support secured",
        ],
      },
      {
        type: "keyValue",
        title: "Structure:",
        data: {
          key: "SAFE Note, $10-12M valuation cap",
          value: "",
        },
      },
    ],
  },
  {
    id: 6,
    title: "Why HAYLEX Wins",
    subtitle: "Perfect Fit for UCEA Portfolio",
    sections: [
      {
        type: "list",
        title: "Competitive Advantages:",
        items: [
          "✓ Only unified legal AI platform in Armenia",
          "✓ 90% cost reduction vs traditional legal services",
          "✓ Multi-language support (Armenian, Russian, English)",
          "✓ Government data partnerships",
          "✓ Scalable to entire CIS region",
        ],
      },
      {
        type: "list",
        title: "Team:",
        items: [
          "Deep expertise in AI/ML and Armenian legal system",
          "Previous successful exits",
          "Advisory board with government connections",
        ],
      },
      {
        type: "list",
        title: "Next Steps:",
        items: [
          "1. Schedule call this week",
          "2. Product demonstration",
          "3. Due diligence (2 weeks)",
          "4. Close funding within your 3-month timeline",
        ],
      },
    ],
  },
]

function SectionRenderer({ section }: { section: Section }) {
  switch (section.type) {
    case "list":
      return (
        <div className="space-y-4">
          {section.title && <h3 className="text-lg font-semibold text-primary">{section.title}</h3>}
          <ul className="space-y-2">
            {section.items?.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )

    case "keyValue":
      return (
        <div className="space-y-2">
          {section.title && <h3 className="text-lg font-semibold text-primary">{section.title}</h3>}
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-medium text-center">{section.data?.key}</p>
          </div>
        </div>
      )

    case "barChart":
      return (
        <div className="space-y-4">
          {section.title && <h3 className="text-lg font-semibold text-primary">{section.title}</h3>}
          <div className="space-y-3">
            {section.barChartData?.items.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{item.label}</span>
                  <span className="font-medium">{item.formattedValue}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(item.value / 2000) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )

    case "pieChart":
      return (
        <div className="space-y-4">
          {section.title && <h3 className="text-lg font-semibold text-primary">{section.title}</h3>}
          <div className="grid grid-cols-2 gap-4">
            {section.pieChartData?.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded ${item.tailwindColor}`} />
                <div className="text-sm">
                  <div className="font-medium">{item.value}%</div>
                  <div className="text-muted-foreground">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )

    default:
      return null
  }
}

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % presentationData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + presentationData.length) % presentationData.length)
  }

  const slide = presentationData[currentSlide]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-primary">HAYLEX AI</h1>
            <span className="text-sm text-muted-foreground">Legal Intelligence Platform</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {currentSlide + 1} / {presentationData.length}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto min-h-[600px]">
          <CardHeader className="text-center space-y-2 pb-6">
            <CardTitle className="text-3xl font-bold text-balance">{slide.title}</CardTitle>
            {slide.subtitle && <p className="text-xl text-muted-foreground text-balance">{slide.subtitle}</p>}
          </CardHeader>

          <CardContent className="space-y-8">
            {slide.sections.map((section, index) => (
              <SectionRenderer key={index} section={section} />
            ))}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button variant="outline" size="sm" onClick={prevSlide} disabled={currentSlide === 0}>
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>

          <div className="flex gap-2">
            {presentationData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            disabled={currentSlide === presentationData.length - 1}
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </main>
    </div>
  )
}
