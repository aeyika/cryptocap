import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Image from "next/image" 

export default function Footer() {
  return (
    <footer className="bg-[#0E041E] text-white py-12 ">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Section */}
          <div className="space-y-6">
            <Link href="/">
            <Image src="/CryptoCap.png" alt="CryptoCap logo" width={600} height={600} />
            </Link>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-emerald-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-emerald-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-emerald-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-emerald-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Legal & privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Buy Crypto
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Affiliate
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Institutional Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Learn</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  What is Cryptocurrency?
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Crypto Basic
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Tips and Tutorials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Market Update
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">2021 CoinMarketCap. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

