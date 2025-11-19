interface AboutProps {
  role: string;
  name: string;
  bio: string;
}

export default function About({ role, name, bio }: AboutProps) {
  return (
    <>
      <p className='uppercase tracking-widest text-sm md:text-base font-semibold'>
        {role}
      </p>
      <h1 className='text-xl md:text-2xl font-bold'>{name}</h1>
      <p className='text-base md:text-lg'>{bio}</p>
    </>
  );
}
