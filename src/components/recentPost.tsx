import { Heebo } from 'next/font/google';
import Link from 'next/link';
import RecentPostCard from './recentPostCard';

const heebo = Heebo({ subsets: ['latin'] });

export default function RecentPost() {
  return (
    <div className=" bg-recentPost py-[66px]">
      {/* Main Section with Limited Width */}
      <div className="bg-recentPost mx-auto p-6 flex flex-col justify-between items-center 
          w-72 md:h-[502px] md:w-[1340px] lg:w-full">
        <div className="flex flex-col justify-between">
          {/* Heading and View All Link */}
          <div className="flex flex-row justify-between">
            <h2 className={`${heebo.className} text-[22px] font-medium`}>Recent Post</h2>
            <Link href={""} className={`${heebo.className} text-[22px] font-medium text-myPink`}>
              View all
            </Link>
          </div>
        <div className="mt-[16px] space-y-3 md:space-y-0 md:space-x-8 flex flex-col md:flex-row justify-between">
  <RecentPostCard />
  <RecentPostCard />
</div>

        </div>
      </div>
    </div>
  );
}

