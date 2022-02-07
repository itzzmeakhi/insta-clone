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
        <div className={styles.imgContainer}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png"
            layout="fill"
            objectFit="contain" />
        </div>
        <SearchField />
        <div className={styles.navBtns}>
          <HomeIcon />
          <MenuIcon />
          <PaperAirplaneIcon />
          <PlusCircleIcon />
          <UserGroupIcon />
          <HeartIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;