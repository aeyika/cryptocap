import { raleway, roboto } from "../fonts"
import FeatureCard from "./FeatureCard"
import { Button } from "@/components/ui/button"

const Features = () => {
  return (
    <div className="bg-[#130123] bg-[url('/bg-features.png')] bg-cover bg-center pt-[60px] pb-[60px]">
        <h1 className={`text-[#ECF1F0] text-center text-3xl ${raleway.className} antialiased font-bold`}>CryptoCap&apos;s Amazing Featues</h1>
            <p className={`text-[#B6B6B6] text-center pt-[30px] pb-[30px] ${roboto.className} antialiased`}>Explore sensational features to prepare your best investment in cryptocurrency</p>
            <FeatureCard />
            <div className="flex justify-center items-center h-[512px]">
                <div className="bg-[rgba(255,255,255,0.02)] rounded-lg p-8 border border-[#3C0A4C] max-w-xl text-left">
                    <span className={`text-2xl text-[#ECF1F0] font-bold block mb-4 ${raleway.className} antialiased`}>
                    New In Cryptocurrency?
                    </span>
                    <p className={`text-sm text-[#B6B6B6] leading-6 mb-6 ${roboto.className} antialiased`}>
                    We&apos;ll tell you what cryptocurrencies are, how they work, and why you should own one right now. So let&apos;s do it.
                    </p>
                <div className="flex justify-end">
                    <Button className={`bg-[#0FAE96] text-white py-2 px-6 rounded hover:bg-[#511281] transition ${roboto.className} antialiased`}>
                        Learn & Explore Now
                    </Button>
                </div>
        </div>
    </div>
    </div>
  )
}

export default Features