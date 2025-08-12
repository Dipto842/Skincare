import '../Style/Style.css'
import img from '../../public/icone/BESTCARE.png'
import img1 from '../../public/icone/award-svgrepo-com 1.png'
const BESTCARE = () => {
    return (
        <div className="bg-white mt-40">
            <div className=" w-[200px] h-[40px] rounded-full border border-black justify-evenly items-center flex text-center ml-12 ">
                <div className="border border-[#2D3B36] w-[15px] bg-[#2D3B36]  h-[15px] rounded-full"></div>
                <h1 className="text-[#2D3B36]">Why Our Products</h1>

            </div>


<div className='lg:flex items-center justify-evenly'>
<div>
    
    <div>
        <h1 className=" lg:w-[610px] top_hedig font_normal lg:text-[55px] tracking-[-2%]  mt-10 text-[#2D3B36]">YOUR SKIN DESERVES 
THE BEST CARE.</h1>
<p className=' w-[605px] font_normal top_peragirp text-[#525349] leading-[24px] lg:text-[18px] tracking-[-2%] mt-6'>Discover a curated collection of skincare products designed to rejuvenate,
protect, and pamper your skin. Explore our rage crafted with love backed
by science, and inspired by nature.</p>
    </div>


<div className='flex items-center  gap-14'> 
    <h1 className='lg:w-[63px] h-[44px]  font_normal lg:text-[40px] tracking-[-2%] bg-gradient-to-b  from-[#293330] to-[#FEFFF4] bg-clip-text text-transparent cound '>01</h1>
   <div>
     <h2 className='lg:w-[408px] h-[44px] mt-14 font_normal hedig1 lg:text-[60px] tracking-[-2%] text-[#2D3B36]'>Bio Ingredients</h2>
     <p className=' w-[605px] font_normal text-[#525349] peragirap2 lg:leading-[24px] lg:text-[18px] tracking-[-2%] lg:mt-10 '>Get naturally beautiful and transform with our bio
ingredients creams for healthy, radiant skin.</p>
   </div>
</div>

<div className='flex items-center  gap-14'> 
    <h1 className='w-[63px] h-[44px]  font_normal text-[40px] tracking-[-2%] bg-gradient-to-b  from-[#293330] to-[#FEFFF4] bg-clip-text text-transparent cound'>02</h1>
   <div>
     <h2 className='lg:w-[481px] h-[44px] mt-14 font_normal hedig1 lg:text-[60px] tracking-[-2%] text-[#2D3B36]'>Everything Natural</h2>
     <p className=' w-[605px] font_normal text-[#525349] peragirap2  lg:leading-[24px] text-[18px] tracking-[-2%] lg:mt-10 '>Pure ingredients for pure skin. The Perfect solution
for your skin care needs.</p>
   </div>
</div>

<div className='flex items-center  gap-14'> 
    <h1 className='w-[63px] h-[44px]  font_normal lg:text-[40px] tracking-[-2%] bg-gradient-to-b  from-[#293330] to-[#FEFFF4] bg-clip-text text-transparent cound'>03</h1>
   <div>
     <h2 className='lg:w-[408px] h-[44px] lg:mt-14 mt-10 font_normal hedig1  lg:text-[60px] tracking-[-2%] text-[#2D3B36]'>All Handmade</h2>
     <p className=' w-[605px]  font_normal text-[#525349] peragirap2 leading-[24px] text-[18px] tracking-[-2%] lg:mt-10 '>Made with love and care. Just for you. Give your skin
the tender loving care it deserves.</p>
   </div>
</div>

</div>
{/* laft Imges */}
<div>

<img className='h-[849px] ' src={img} alt="" />
   <div className=' w-[360px] h-[60px] avetar2 bg-white rounded-full absolute lg:bottom-[-2100px] lg:left-[1000px] text-center'>

<div className='flex justify-evenly items-center mt-1 gap-3 '>
    <img className='w-[50px] imges4 h-[50px] rounded-full ml-3 bg-[#2D3B36]' src={img1} alt="" />
    <p className='w-[304px] text-[16px] text-start text-[#2D3B36] leading-[20px] font_normal'>Best Skin Care ProductAward Wining</p>
</div>
              </div>

</div>

</div>





        </div>
    );
};

export default BESTCARE;