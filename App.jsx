import { useState } from "react";
import FollowButton from "./FollowButton";
import ProfileInfo from "./ProfileInfo";
import LikeButton from "./LikeButton";

function App() {
  const [follower, setFollower] = useState(120);
  const [isFollowing, setFollowing] = useState(false);
  const [isLike, setLike] = useState(0);

  function buttonHandler() {
    if (isFollowing) {
      setFollower((prev) => prev - 1);
    } else {
      setFollower((prev) => prev + 1);
    }
    setFollowing((prev) => !prev);
  }

  function likeHandler() {
    setLike((prev) => prev + 1);
  }

  return (
    <>
      <ProfileInfo userName="Juli Thummar" followers={follower} />
      <FollowButton isFollowing={isFollowing} onToggle={buttonHandler} />
      <LikeButton likes={isLike} onLike={likeHandler} />
    </>
  );
}

export default App;
