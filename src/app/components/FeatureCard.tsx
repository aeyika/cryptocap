import Image from "next/image"
import { raleway, roboto } from "../fonts"
import { ArrowRight } from "lucide-react"
interface FeatureData {
    feature: string,
    description: string,
    iconUrl: string,
}

const featureData: FeatureData[] = [
  {
    feature: "Manage Portfolio",
    description: "Buy and sell popular digital currencies, keep track of them in the one place.",
    iconUrl: "/feature-image 1.png"
  },
  {
    feature: "Protected Securely",
    description: "All cash balances are covered by FDIC insurance, up to a maximum of $250,000.",
    iconUrl: "/feature-image 2.png"
  },
  {
    feature: "Cryptocurrency Variety",
    description: "Supports a variety of the most popular digital currencies and always up to date.",
    iconUrl: "/feature-image 3.png"
  },
  {
    feature: "Learn Best Practices",
    description: "Easy to know how to cryptocurrency works and friendly to newbie.",
    iconUrl: "/feature-image 4.png"
  },
]

export default function FeatureCard() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {featureData.map((feature) => (
          <div key={feature.feature} className="bg-[rgba(255,255,255,0.02)] rounded-lg p-4 border-[1px] border-[#3C0A4C] hover:bg-[#1D1429] hover:cursor-pointer">
            <div className="mb-4">
              <div className="items-center gap-3">
                <div className="relative w-16 h-16">
                  <Image
                    src={feature.iconUrl || "/feature-image.png"}
                    alt={feature.feature}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col pt-4">
                  <span className={`text-lg text-[#ECF1F0] ${raleway.className} antialiased font-semibold`}>{feature.feature}</span>
                  <span className={`text-sm text text-[#B6B6B6] pt-3 ${roboto.className} antialiased`}>{feature.description}</span>
                  <span className={`text-[#0FAE96] flex text-sm pt-8 ${roboto.className} antialiased`}>See Explained <ArrowRight className="pl-[4px] w-5"/></span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
