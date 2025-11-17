interface AboutProps {
  role: string;
  name: string;
  bio: string;
}

export default function About({ role, name, bio }: AboutProps) {
  return (
    <>
      <p className='uppercase tracking-widest text-sm md:text-base font-semibold text-gray-500 dark:text-white'>
        {role}
      </p>
      <h1 className='text-xl md:text-2xl font-bold text-black dark:text-white'>
        {name}
      </h1>
      <p className='text-base md:text-lg text-gray-600 dark:text-white'>
        {bio}
      </p>
    </>
  );
}
