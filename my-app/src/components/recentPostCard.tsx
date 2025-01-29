import { Heebo } from 'next/font/google';

const heebo = Heebo({ subsets: ['latin'] });

export default function RecentPostCard() {
  return (
    <div>
      <div className="bg-white w-full h-auto md:w-[483px] md:h-[356px] flex items-center">
        <div className="m-auto w-full md:w-[391px] h-auto md:h-[286px] flex flex-col items-start justify-between p-4">
          <h2 className={`${heebo.className} font-bold text-[20px] md:text-[26px]`}>
            Making a design system from scratch
          </h2>
          <div className="w-full md:w-[301.28px] h-auto flex items-center justify-between mt-2">
            <p className={`${heebo.className} text-[16px] md:text-[18px] font-normal text-black/70`}>
              12 Feb 2020
            </p>
            <p className={`${heebo.className} text-[16px] md:text-[18px] font-normal text-black/70`}>|</p>
            <p className={`${heebo.className} text-[16px] md:text-[18px] font-normal text-black/70`}>
            Design , Pattern
            </p>
          </div>
          <p className="w-full md:w-[391px] mt-4 text-[14px] md:text-[16px] text-black/80">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </div>
  );
}

