import imges from '/icone/Mask group.png'
import Hedphon from '/icone/headphone-svgrepo-com 1.png'
import "../Style/Style.css"
import "../Style/FAQ.css"
const FAQItem = () => {
    return (
        <div className='lg:flex mt-40 mb-40 imges6 justify-evenly '>
            {/* imges */}
<div>
<img className='lg:w-[700px] h-[900px]' src={imges} alt="" />

{/* avetar */}
  <div className="lg:w-[308px] lg:h-[100px] rounded-full avetar3 bg-white relative lg:-mt-[140px] mb-8 ml-40 text-center">
                  <div className="flex  justify-between  items-center mt-1 text-center gap-4">
                    <div className="lg:w-[80px] imgesbox imges4 lg:h-[70px] mt-[14px] ml-3 bg-[#2D3B36]  text-center flex justify-evenly items-center rounded-full ">
                      <p className="imges4 text-[30px] text-[#2D3B36] rounded-full ">
                       <img className=' rounded-full' src={Hedphon} alt="" />
                      </p>
                    </div>
                    <p className="avaetarName text-[20px] text-start text-[#2D3B36] ml-4 font_normal">
                      24/7 We’re Here
to Help You
                    </p>
                  </div>
                 
                </div>
</div>


{/* FAQ */}
<div >
    <div className='lg:ml-10 faq'>
        <div className=" text-start w-[250px] font_normal h-[40px] rounded-full border border-black justify-evenly items-center flex   ">
                <div className="border border-[#2D3B36] w-[15px] bg-white  h-[15px] rounded-full"></div>
                <h1 className="text-[#2D3B36]">Frequently Asked Question</h1>

            </div>
            <h1 className='lg:w-[623px] h-[190px] lg:text-[60px] font_normal'>Answers to Your
Skincare Questions, All
in One Place.</h1>


{/* FAQ */}
<div>
<div className="collapse collapse-arrow bg-white font_normal lg:mt-[320px]">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title lg:text-xl font-medium  text-[#2D3B36]">Are your products safe for sensitive skin?</div>
  <div className="collapse-content">
    <p className='text-[14px]  text-[#525349]'>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-white">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-[20px] text-[#2D3B36] font_normal font-medium">Are your products cruelty-free?</div>
  <div className="collapse-content">
    <p className='text-[14px]  text-[#525349] w-[387px] h-[28px]'>Absolutely! All our products are cruelty-free, and most are vegan.
Check individual product details for specifics.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-white">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium font_normal  text-[#2D3B36]">What’s your return policy?</div>
  <div className="collapse-content">
    <p className='text-[14px]  text-[#525349]'>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-white">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium font_normal  text-[#2D3B36]">Do you ship internationally?</div>
  <div className="collapse-content">
    <p className='text-[14px]  text-[#525349]'>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-white">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium font_normal  text-[#2D3B36]">How do i choose the right product?</div>
  <div className="collapse-content">
    <p className='text-[14px]  text-[#525349]'>hello</p>
  </div>
</div>

</div>
    </div>
</div>

        </div>
    );
};

export default FAQItem;