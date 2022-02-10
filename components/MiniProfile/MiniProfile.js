import {
  signOut,
  useSession
}  from "next-auth/react";

import styles from './../../styles/MiniProfile.module.scss';

const MiniProfile = () => {
  const { data: session } = useSession();
  return (
    <div className={styles.miniprofile}>
      <img
        src={session?.user.image} />
      <div>
        <h3>{session?.user.username}</h3>
        <p>Welcome to Instagram</p>
      </div>
      <button
        onClick={() => signOut()}>
        Sign out
      </button>
    </div>
  );
}

export default MiniProfile;