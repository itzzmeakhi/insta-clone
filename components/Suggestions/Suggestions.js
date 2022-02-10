import { useState, useEffect } from "react";
import { faker } from '@faker-js/faker';

import styles from "./../../styles/Suggestions.module.scss";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
  const suggestions = [...Array(5)].map((_,id) => ({
    ...faker.helpers.createCard(),
    avatar: faker.image.avatar(),
    id: id
  }));
  setSuggestions(suggestions);
  }, []);
  return (
    <div className={styles.suggestions}>
      <div className={styles.title}>
        <p>Suggestions</p>
        <button>
          See all
        </button>
      </div>
      <div className={styles.cards}>
        {suggestions.map(suggestion => (
          <div 
            key={suggestion.id} 
            className={styles.card}>
            <img
              src={suggestion.avatar} />
            <p>{suggestion.username}</p>
            <button>
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;