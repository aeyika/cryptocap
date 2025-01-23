"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const categories = [
  "Popular",
  "Metaverse",
  "Entertainment",
  "Energy",
  "Gaming",
  "Music",
];

const cryptoData = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: 56623.54,
    change: 1.41,
    icon: "coin-icon.png",
    trending: "up",
    chart: "btc-chart-state.png",
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: 4267.9,
    change: 2.22,
    icon: "coin-icon 2.png",
    trending: "up",
    chart: "eth-chart-state.png",
  },
  {
    id: 3,
    name: "Binance",
    symbol: "BNB",
    price: 587.74,
    change: 0.82,
    icon: "coin-icon 3.png",
    trending: "up",
    chart: "bnb-chart-state.png",
  },
  {
    id: 4,
    name: "Tether",
    symbol: "USDT",
    price: 0.9998,
    change: 0.03,
    icon: "coin-icon 4.png",
    chart: "usdt-chart-state.png",
  },
  {
    id: 5,
    name: "Solana",
    symbol: "SOL",
    price: 213.67,
    change: -0.53,
    icon: "coin-icon 5.png",
    trending: "down",
    chart: "sol-chart-state.png",
  },
  {
    id: 6,
    name: "XRP",
    symbol: "XRP",
    price: 1.04,
    change: -0.44,
    icon: "coin-icon 6.png",
    trending: "down",
    chart: "xrp-chart-state.png",
  },
  {
    id: 7,
    name: "USD Coin",
    symbol: "USDC",
    price: 1.0,
    change: -0.03,
    icon: "coin-icon 7.png",
    trending: "down",
    chart: "usdc-chart-state.png",
  },
];

export default function MarketUpdate() {
  return (
    <div className="min-h-screen text-white p-8 bg-[#130123] px-10">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Market Update</h1>

        <div className="space-y-4">
          <h2 className="text-gray-400">Cryptocurrency Categories</h2>

          <div className="flex items-center gap-4 flex-wrap">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "secondary" : "ghost"}
                className={
                  index === 0
                    ? "bg-[#EAEAEA] text-black hover:bg-gray-200"
                    : "text-gray-400"
                }
              >
                {category}
              </Button>
            ))}
            <Button variant="ghost" className="text-gray-400">
              See All 12+
            </Button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search Coin"
              className="pl-10 bg-transparent border-gray-800 text-white placeholder:text-gray-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-gray-400 text-sm">
                <th className="text-left py-4 px-4">NO</th>
                <th className="text-left py-4 px-4">NAME</th>
                <th className="text-left py-4 px-4">LAST PRICE</th>
                <th className="text-left py-4 px-4">CHANGE</th>
                <th className="text-left py-4 px-4">MARKET STATS</th>
                <th className="text-left py-4 px-4">TRADE</th>
              </tr>
            </thead>
            <tbody>
              {cryptoData.map((crypto) => (
                <tr key={crypto.id} className="border-t border-gray-800">
                  <td className="py-4 px-4">{crypto.id}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={`/${crypto.icon}`}
                        alt={crypto.name}
                        className="w-8 h-8"
                      />
                      <div>
                        <div className="font-medium">{crypto.name}</div>
                        <div className="text-gray-400 text-sm">
                          {crypto.symbol}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    ${crypto.price.toLocaleString()}
                  </td>
                  <td
                    className={`py-4 px-4 ${
                      crypto.change >= 0
                        ? "text-emerald-500"
                        : "text-red-500"
                    }`}
                  >
                    {crypto.change >= 0 ? "+" : ""}
                    {crypto.change}%
                  </td>
                  <td className="py-4 px-4">
                    <div
                      className={`w-24 h-8 ${
                        crypto.trending === "up"
                          ? "text-emerald-500"
                          : "text-red-500"
                      }`}
                    >
                      <Image
                        src={`/${crypto.chart}`}
                        alt={`${crypto.name} trend ${crypto.trending}`}
                        width={96}
                        height={32}
                      />
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Button className="bg-emerald-500 hover:bg-emerald-600">
                      Trade
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Button variant="link" className="text-emerald-500">
          See All Coins
        </Button>
      </div>
    </div>
  );
}
