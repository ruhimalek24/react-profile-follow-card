function LikeButton({ likes, onLike }) {
  return (
    <>
      <button onClick={onLike}>Like</button>
      <p>Likes : {likes}</p>
    </>
  );
}

export default LikeButton;
