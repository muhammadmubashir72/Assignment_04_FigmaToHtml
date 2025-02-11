import Image from "next/image"
import { Heebo } from 'next/font/google'
const heebo=Heebo({subsets:['latin']})
export default function Card1(){
    return(
        <div className="w-60 md:w-[919px] h-[272.1px]">
             {/* {Image Div} */}
             <div className="bg-#CFA6A61C ] flex flex-col md:flex-row ">
                <div className="radius={6px}  ">
                    <Image src="/images/Rectangle 1.png" alt="Image 1" width={300}
                    height={300} className="w-[246px] md:h-[180px]"/>
                </div>


                {/* {Text Div} */}
                <div className=' w-[225px] md:w-[623.46px] h-[272.1px] ml-[20px]'>
                    <h1 className={`${heebo.className} text-black font-bold  text-[30px]`}>Designing Dashboards</h1>
                  <div className="flex flex-row space-x-4 ">
                      <h3 className={`${heebo.className} p-1 font-bold w-[68px] h-[24px] bg-myPink text-white rounded-full flex items-center justify-center`}>2020</h3>
                    <h3 className="w-[97px] h-[29px] text-black/60  ">Dashboard</h3>
                   </div>
                   <p className={`${heebo.className}" w-60 md:w-[622px] h-[170px] font-light text-[18px]
                    mt-[5px]`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>
        </div> 
        
    )
}