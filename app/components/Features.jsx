import FeaturesCard from "./FeaturesCard";
import Image from "next/image";

export default function () {
  return (
    <div className="max-w-7xl m-auto">
    <div className="text-white w-full px-2 md:px-4  lg:px-8  ">
      <div className="flex items-center ">
        {/* heading */}
        <div className="text-3xl md:text-5xl lg:text-6xl text-center mx-auto lg:text-start space-y-1  md:space-y-2 ">
          <p>Designed for Designers.</p>
          <p>
            Powered by
            <span className="text-[#FF541F]"> AI</span>.
          </p>
          <div className="text-xs md:text-sm  max-w-sm md:max-w-md lg:max-w-5xl mx-auto md:max-w">
            <p className="pt-2" >
            Unlock the full potential of your creativity with our AI-Powered design assistant.
          </p>
          <p >Explore new dimensions of design</p>
          </div>
        </div>

        {/* features image */}
        <div className=" hidden lg:flex items-center justify-center flex-1">
          <Image
            src="/images/polygon.png"
            alt="features logo"
            width={200}
            height={200}
          ></Image>
        </div>
      </div>
      <div className="grid  lg:grid-cols-3 gap-5 mt-10">
        <div >
          <FeaturesCard
          title='Instant Ideation'
          gradient={true}
          desc="Skip the blank canvas and spark creativity instantly. Our AI generates high-quality, on-brand design concepts within seconds" />
        </div>
        <div className="lg:col-span-2">
          <FeaturesCard
          
          title='Smart Adaptability'
          desc="No two creators are the same, and neither are their styles. Our AI learns from your inputs, understands your aesthetic preferences, and fine-tunes every design" />
        </div>

        <div className="lg:col-span-2">
          <FeaturesCard
         
          title='Multi-Format Export'
          desc="Design once, export anywhere. Whether you need high-res graphics for print, responsive visuals for the web, mobile-optimized assets," />
        </div>
        <div>
          <FeaturesCard 
          title='Seamless Revisions'
          gradient={true}
          desc="Say goodbye to repetitive tweaks and endless back-and-forths. With intuitive prompt-based editing" />
        </div>
      </div>
    </div>
    </div>
  );
}
