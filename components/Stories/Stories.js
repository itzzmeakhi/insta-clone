import { useState, useEffect } from "react";
import { faker } from '@faker-js/faker';

import Story from "../Story/Story";

import styles from './../../styles/Stories.module.scss';

const Stories = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
  const suggestions = [...Array(20)].map((_,id) => ({
    ...faker.helpers.createCard(),
    avatar: faker.image.avatar(),
    id: id
  }));
  setStories(suggestions);
  }, []);
  return (
    <div className={styles.stories}>
      {stories.map(({ id, ...otherProps}) => (
        <Story key={id} {...otherProps} />
      ))}
    </div>
  );
}

export default Stories;