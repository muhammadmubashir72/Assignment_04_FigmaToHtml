import FeaturedWork from "@/components/FeaturedWork";
import Hero from "@/components/hero";
import RecentPost from "@/components/recentPost";

export default function Home(){
  return(
    <div className="bg-background">
     <Hero/>
     <RecentPost/>
     <FeaturedWork/>
     </div>
  )
}