
import { Heebo } from 'next/font/google';
import Card1 from "./card 1";
import Card2 from "./card 2";
import Card3 from "./card 3";

const heebo = Heebo({ subsets: ['latin'] });

export default function FeaturedWork() {
  return (
    // Main container div
    <div className="w-60 h-[72%] md:w-[919px] md:h-[934.2px]  mt-[20px] mx-auto ">
      {/* Heading */}
      <h2
        className={`${heebo.className} w-60 h-[32px] md:w-[152px] font-medium text-black mb-[20px]`}
      >
        Featured Works
      </h2>

      {/* Cards container */}
      <div className="flex flex-col space-y-56 md:space-y-3 justify-start items-start  ">

        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
}

