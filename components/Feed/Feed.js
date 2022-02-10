import { useSession } from "next-auth/react";

import Posts from "../Posts/Posts";
import Stories from "../Stories/Stories";
import MiniProfile from "../MiniProfile/MiniProfile";
import Suggestions from "../Suggestions/Suggestions";

import styles from "./../../styles/Feed.module.scss";

const Feed = () => {
  const { data: session } = useSession();
  return (
    <main className={styles.feed}>
      <section className={styles.content}>
        <Stories />
        <Posts />
      </section>
      {session && (
        <section className={styles.profile}>
          <div>
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}

export default Feed;