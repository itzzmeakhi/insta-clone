import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
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
          <MenuIcon className={styles.smBtn}/>
          <div className={styles.msgBtn}>
            <PaperAirplaneIcon />
            <div className={styles.count}>2</div>
          </div>
          <PlusCircleIcon className={styles.lgBtn} />
          <UserGroupIcon className={styles.lgBtn} />
          <HeartIcon className={styles.lgBtn} />
        </div>
      </div>
    </div>
  );
}

export default Header;