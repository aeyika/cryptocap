import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-1">
        <Image
        src="/CryptoCap.png"
        alt="cryptocap logo"
        width={205}
        height={30}
        />
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-[#ECF1F0] hover:text-[#0FAE96]/80 ">
          Home
        </a>
        <a href="#" className="text-[#ECF1F0] hover:text-[#0FAE96]/80">
          Businesses
        </a>
        <a href="#" className="text-[#ECF1F0] hover:text-[#0FAE96]/80">
          Trade
        </a>
        <a href="#" className="text-[#ECF1F0] hover:text-[#0FAE96]/80">
          Market
        </a>
        <a href="#" className="text-[#ECF1F0] hover:text-[#0FAE96]/80">
          Learn
        </a>
      </div>

      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-[#0FAE96]">
              <Globe className="w-4 h-4 mr-2" />
              EN
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>Spanish</DropdownMenuItem>
            <DropdownMenuItem>French</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button className="bg-[#16D8CC] text-black hover:bg-[#16D8CC]/90">Login</Button>
      </div>
    </nav>
  )
}