function ProfilePicture() {
  return (
    <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-md">
      <img
        src="/uploads/profilepicture.jpg"
        alt="Artist Profile"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default ProfilePicture;
