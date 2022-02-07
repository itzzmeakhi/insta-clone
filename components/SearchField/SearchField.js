import { SearchIcon } from '@heroicons/react/outline';
import styles from './../../styles/SearchField.module.scss';

const SearchField = () => {
  return (
    <div className={styles.searchField}>
      <div className={styles.icon}>
        <SearchIcon />
      </div>
      <input
        type="search"
        placeholder="Search" />
    </div>
  );
}

export default SearchField;