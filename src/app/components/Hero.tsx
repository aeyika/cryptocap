import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import { raleway, roboto } from "../fonts";
import MarketTrend from "./MarketTrend";
const Hero = () => {
  return (
    <div className="bg-[#130123] bg-[url('/bg-above-the-fold.png')] bg-cover bg-center bg-blend-soft-light">
        <Navbar />
        <div className="text-center">
            <h1 className={`text-4xl pt-[178px] text-white ${raleway.className} antialiased font-bold`}>Start and Build Your Crypto Portfolio Here</h1>
            <p className={`text-[#B6B6B6] pt-[30px] pb-[30px] ${roboto.className} antialiased`}>Only at CryptoCap, you can build a good portfolio and learn <br/> best practices about cryptocurrency.</p>
            <Button className={`bg-[#0FAE96] hover:bg-[#511281] px-6 py-3 ${raleway.className} antialiased font-semibold`}>Get Started</Button>
        </div>
        <div className="pt-24 pb-24">
            <MarketTrend/>
        </div>
    </div>
  );
};

export default Hero;
