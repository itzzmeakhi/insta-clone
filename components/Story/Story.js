import Image from "next/image";

import styles from './../../styles/Story.module.scss';

const Story = (props) => {
  const {
    username,
    avatar
  } = props;
  return (
    <div className={styles.story}>
      <div className={styles.imgDiv}>
        <Image
          src={avatar}
          layout="fill"
          objectFit="contain" />
      </div>
      <p>{username.length > 8 ? username.slice(0, 8)+'...' : username}</p>
    </div>
  );
}

export default Story;