
import { FaFacebook, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const FollowUs = () => {
    return (
        <div className='flex flex-col sm:flex-row sm:items-center sm:gap-2 gap-1 text-center sm:text-left'>
            <span className='text-[#4B5563] text-[12px] sm:text-[14px]'>Follow Us:</span>
            <div className='flex justify-center sm:justify-start items-center gap-2 text-[20px]'>
                <FaFacebook className='text-[#3B5998] cursor-pointer' />
                <FaTwitterSquare className='text-[#1DA1F2] cursor-pointer' />
                <FaInstagramSquare className='text-[#262626] cursor-pointer' />
                <FaLinkedin className='text-[#0077B5] cursor-pointer' />
            </div>
        </div>
    );
};

export default FollowUs;
