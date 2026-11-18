function ProfileInfo({ userName, followers }) {
  return (
    <>
      <h2>{userName}</h2>
      <p>Followers : {followers}</p>
    </>
  );
}

export default ProfileInfo;
