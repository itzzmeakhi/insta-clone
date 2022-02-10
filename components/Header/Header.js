import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn } from "next-auth/react";
import { 
  PaperAirplaneIcon,
  MenuIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon 
} from "@heroicons/react/outline";

import SearchField from "../SearchField/SearchField";

import styles from './../../styles/Header.module.scss';

const Header = () => {
  const { data: session } = useSession();
  console.log(session)
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={`${styles.imgContainer} ${styles.lgDevice}`}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png"
            layout="fill"
            objectFit="contain" />
        </div>
        <div className={`${styles.imgContainer} ${styles.smDevice}`}>
          <Image
            src="https://1000logos.net/wp-content/uploads/2017/02/insta-logo.png"
            layout="fill"
            objectFit="contain" />
        </div>
        <SearchField />
        <div className={styles.navBtns}>
          <HomeIcon />
          {!session && (
            <button
              type="button"
              onClick={() => signIn()}>
                Sign In
            </button>
          )}
          {session && (
            <>
              <MenuIcon className={styles.smBtn}/>
              <div className={styles.msgBtn}>
                <PaperAirplaneIcon />
                <div className={styles.count}>2</div>
              </div>
              <PlusCircleIcon className={styles.lgBtn} />
              <UserGroupIcon className={styles.lgBtn} />
              <HeartIcon className={styles.lgBtn} />
              <img
                src={session.user.image} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;