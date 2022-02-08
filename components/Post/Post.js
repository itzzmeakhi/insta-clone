import Image from "next/image";
import {
  HeartIcon,
  DotsHorizontalIcon,
  PaperAirplaneIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon
} from "@heroicons/react/outline";

import styles from "./../../styles/Post.module.scss";

const Post = (props) => {
  const {
    username,
    userImg,
    img,
    caption
  } = props;
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div className={styles.imgDiv}>
          <Image
            src={userImg}
            layout="fill"
            objectFit="contain" />
        </div>
        <p>{username}</p>
        <DotsHorizontalIcon />
      </div>
      <img
        alt={caption}
        src={img} />
      <div className={styles.btns}>
        <div className={styles.btnsGroup}>
          <HeartIcon />
          <ChatIcon />
          <PaperAirplaneIcon />
        </div>
        <BookmarkIcon />
      </div>
      <p>
        <span>{username} </span>
        {caption}
      </p>
      <form>
        <EmojiHappyIcon />
        <input 
          type="text"
          placeholder="Add comment..." />
        <button>Post</button>
      </form>
    </div>
  );
}

export default Post;