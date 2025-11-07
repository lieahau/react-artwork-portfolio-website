import { FaPatreon, FaHeart } from 'react-icons/fa';

function OtherArts() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-2 py-4 w-full">
      <p className="text-sm md:text-base font-bold uppercase text-black dark:text-white">
        View More Arts!
      </p>
      <div className="flex space-x-5 text-xl">
        <a href="#" aria-label="Patreon" className="hover:text-black">
          <FaPatreon />
        </a>
        <a href="#" aria-label="Support" className="hover:text-black">
          <FaHeart />
        </a>
      </div>
    </div>
  );
}

export default OtherArts;
