interface ProfilePictureProps {
  src: string;
}

export default function ProfilePicture({ src }: ProfilePictureProps) {
  return (
    <div className='w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-md'>
      <img src={src} alt='My Profile' className='w-full h-full object-cover' />
    </div>
  );
}
