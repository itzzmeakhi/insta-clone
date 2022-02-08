import Posts from "../Posts/Posts";
import Stories from "../Stories/Stories";

import styles from "./../../styles/Feed.module.scss";

const Feed = () => {
  return (
    <main className={styles.feed}>
      <section className={styles.content}>
        <Stories />
        <Posts />
      </section>

      <section className={styles.profile}>
        <h1>hello</h1>
      </section>
    </main>
  );
}

export default Feed;