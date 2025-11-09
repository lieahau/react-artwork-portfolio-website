import { FaInstagram, FaDiscord, FaFacebook } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      {/* Contact Label */}
      <h2 className='text-base md:text-lg font-bold uppercase text-black dark:text-white'>
        Contact Me!
      </h2>

      {/* Social Media */}
      <div className='flex space-x-5 text-white text-xl'>
        <a href='#' target='blank' className='hover:text-black'>
          <FaInstagram />
        </a>
        <a href='#' target='blank' className='hover:text-black'>
          <FaDiscord />
        </a>
        <a href='#' target='blank' className='hover:text-black'>
          <FaFacebook />
        </a>
      </div>
    </>
  );
}
