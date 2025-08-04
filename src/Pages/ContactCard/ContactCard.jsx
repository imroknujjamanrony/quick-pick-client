import React from 'react';
import pic1 from  '../../assets/Card/1.png'
import pic2 from  '../../assets/Card/2.png'
import pic3 from  '../../assets/Card/3.png'
import pic4 from  '../../assets/Card/4.png'
const ContactCard = () => {
    return (
      <div>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
            {/* //card1 */}
            <div className='flex'>
                <div className='w-[56px] h-[57px]'>
                    <img src={pic1} alt="" />
                </div>
                <div>
                    <h1 className='text-[16px] font-bold text-[#030712]'>Payment only online</h1>
                    <p className='text-[#6B7280] text-[13px]'>Tasigförsamhet beteendedesign. Mobile
checkout. Ylig kärrtorpa.</p>
                </div>
            </div>

            {/* card2 */}
            <div className='flex'>
                <div className='w-[56px] h-[57px]'>
                    <img src={pic2} alt="" />
                </div>
                <div>
                    <h1 className='text-[16px] font-bold text-[#030712]'>New stocks and sales</h1>
                    <p className='text-[#6B7280] text-[13px]'>Tasigförsamhet beteendedesign. Mobile
checkout. Ylig kärrtorpa.</p>
                </div>
            </div>

            {/* card3 */}
            <div className='flex'>
                <div className='w-[56px] h-[57px]'>
                    <img src={pic3} alt="" />
                </div>
                <div>
                    <h1 className='text-[16px] font-bold text-[#030712]'>Quality assurance</h1>
                    <p className='text-[#6B7280] text-[13px]'>Tasigförsamhet beteendedesign. Mobile
checkout. Ylig kärrtorpa.</p>
                </div>
            </div>
            <div className='flex'>
                <div className='w-[56px] h-[57px]'>
                    <img src={pic4} alt="" />
                </div>
                <div>
                    <h1 className='text-[16px] font-bold text-[#030712]'>Delivery from 1 hour</h1>
                    <p className='text-[#6B7280] text-[13px]'>Tasigförsamhet beteendedesign. Mobile
checkout. Ylig kärrtorpa.</p>
                </div>
            </div>
        </div>
      </div>
    );
};

export default ContactCard;