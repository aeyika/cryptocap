import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { raleway, roboto } from "../fonts"

interface CryptoData {
  name: string
  symbol: string
  price: number
  change: number
  chartUrl: string
  iconUrl: string
}

const cryptoData: CryptoData[] = [
  {
    name: "BITCOIN",
    symbol: "BTC",
    price: 56623.54,
    change: 1.41,
    chartUrl: "/chart-state 1.png",
    iconUrl: "/coin-icon.png" // Updated to a valid path
  },
  {
    name: "ETHEREUM",
    symbol: "ETH",
    price: 4267.9,
    change: 2.22,
    chartUrl: "/chart-state 2.png",
    iconUrl: "/coin-icon 2.png" // Updated to a valid path
  },
  {
    name: "BINANCE",
    symbol: "BNB",
    price: 587.74,
    change: 0.82,
    chartUrl: "/chart-state 3.png",
    iconUrl: "/coin-icon 3.png" // Updated to a valid path
  },
  {
    name: "TETHER",
    symbol: "USDT",
    price: 0.9998,
    change: 0.03,
    chartUrl: "/chart-state 4.png",
    iconUrl: "/coin-icon 4.png" // Updated to a valid path
  },
]

export default function MarketTrend() {
  return (
    <div className="p-6">
      <h2 className={`text-2xl text-[#ECF1F0] mb-6 ${raleway.className} antialiased`}>Market Trend</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cryptoData.map((crypto) => (
          <div key={crypto.symbol} className="bg-[rgba(255,255,255,0.02)] rounded-lg p-4 hover:bg-[#1D1429] hover:cursor-pointer transition-colors border-[1px] border-[#3C0A4C]">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8">
                  <Image
                    src={crypto.iconUrl || "/coin-icon.png"}
                    alt={crypto.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#ECF1F0] font-medium">{crypto.symbol}</span>
                  <span className="text-xs text-[#ECF1F0]">{crypto.name}</span>
                </div>
              </div>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2C223B]">
                <ArrowUpRight className="w-4 h-4 text-[#B6B6B6]" />
              </div>
            </div>
            <div className="space-y-2">
              <div className={`text-2xl font-semibold text-[#ECF1F0] ${roboto.className} antialiased font-medium`}>
                ${crypto.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#B6B6B6]">+{crypto.change}%</span>
                <Image
                  src={crypto.chartUrl || "/coin-icon.png"}
                  alt={`${crypto.name} price chart`}
                  width={100}
                  height={50}
                  className="text-[#B6B6B6]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
