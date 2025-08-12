import img from '../../public/icone/skin_care_beauty_cosmetic_packaging_design_agency_mumbai_delhi_bangalore_india 1.png'
import img1 from '../../public/icone/ChatGPT Image Jun 15, 2025, 10_24_47 PM 2.png'
import '../Style/Style.css'
import '../Style/HeroSection.css'

const HeroSection = () => {
    return (
      <div>

  <div className="bg-[#eff5e1] herro lg:h-[1204px]"> 

        <div className='lg:flex  lg:justify-around items-center'>
             <div className='lg:flex lg:flex-row-reverse items-center lg:gap-40'>
                 <h1 className='w-[398px] lg:mt-32 font_bold_700 font-bold text-[100px] text-[#2D3B36] leading-[100px]'>GLOW
NATUR-ALLY</h1>
            <p className='w-[335px] peragirap3 lg:mt-32 font_normal text-[20px] text-[#2D3B36]'>Transform your skincare routine with premium products that restore, protect, and enhance your nautural glow every day.</p>
          
             </div>
<img width={'222px'} className=' lg:h-[220px] imges1'  src={img} alt="" />


        </div>



        <div className='lg:flex Herro1  items-center gap-52 mt-20 lg:ml-28'>
            <button className='btn bg-[#2D3B36] rounded-full w-[180px] button1 h-[60px]'> Shop Now</button>
          <div className='z-10'>
              <img className='lg:w-[610px] lg:h-[680px]  imges2' src={img1} alt="" />
               
              <div className='avetar w-[360px] h-[60px] bg-white rounded-full absolute lg:bottom-[-480px] lg:left-[590px] text-center'>

<div className='flex justify-evenly items-center mt-1 gap-3 '>
    <img className='w-[50px] h-[50px] rounded-full ml-3 imges2' src={img} alt="" />
    <p className='w-[304px] text-[16px] text-start text-[#2D3B36] leading-[20px] font_normal'>While giving you an invigorating cleansing experience.</p>
</div>
              </div>
          </div>

        </div>
        <div>
            <h1 className='font_bold_800 SKINEARE2 font-extrabold lg:text-[305px] text-[#2D3B36] z-0 lg:absolute lg:top-[58rem]'> SKINEARE</h1>

        </div>
            
        </div>

{/* peragerap */}

<div className='bg-[#FEFFF4] pragirap2'>
    <p className='font_normal pragirap2 lg:text-[40px] pt-24 lg:leading-[78px] text-[#2D3B36] lg:mr-[5rem] lg:ml-20'>Experience the ultimate in skincare with our expertly formulated products,
crafted to nourish, protect, and rejuvenate your skin. Combining the finest
natural ingredients with advanced science, our collection ensures every
skin type can achieve a radiant, healthy glow. Embrace your beauty with
confidence every day. Experience the ultimate in skincare with our 
expertly formulated products, crafted to nourish, protect, and rejuvenate
your skin.</p>
</div>

      </div>
    );
};

export default HeroSection;