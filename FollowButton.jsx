function FollowButton({ isFollowing, onToggle }) {
  return (
    <button onClick={onToggle}>{isFollowing ? "Unfollow" : "Follow"}</button>
  );
}

export default FollowButton;
