import '../Style/Footer.css'

const Footer = () => {
    return (
        <div className='mb-32'>
            <div className='bg-[#2D3B36] w-full  h-[700px] overflow-hidden mb-20 '>
<div className='lg:flex items-center justify-around'>
{/* left */}
<div>
<h1 className='font lg:text-[60px] footer_hedar_1  text-white lg:mt-36 lg:w-[485px]'>Join The Skincare
Community Now.</h1>

<div className='lg:mt-40'>
     <div className='flex items-center justify-between text-white mt-10 lg:w-[485px] sosar'>
    <a href="/">Facebook</a>
    <a href="/">Instagram</a>
    <a href="/">YouTube</a>
</div>
</div>

</div>


{/* right */}
<div className=''>
<p className='font-normal text_aline_left  text-white lg:text-[25px] lg:mt-40 lg:w-[173px]'>Get in Touch</p>
    <h1 className='font text_right  lg:text-[60px] text-white lg:mt-0 lg:w-[485px]'>contact.skincare.com</h1>

  
  <div className='lg:mt-52'>
    <div className=' lg:flex items-center lg:justify-between text-white mt-10 lg:w-[485px]  sosar '>
     <a href="">Terms of Service</a>        
      <a href="/">Privacy Policy</a>
      <a href="/">Cookies Policy</a>
     
   </div>
  </div>
</div>






</div>

{/* sosal  */}




               <div className='marjin_right'>
                 <h1 className=' lg:text-[339px] last   lg:-left-[6rem] text-[#34423e]  lg:-top-[6rem] lg:relative  font_bold_700'>
                   
                    SKINCARE
                </h1>
               </div>

            </div>
        </div>
    );
};

export default Footer;