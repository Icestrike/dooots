import React from 'react';
import MainSearch from '../components/MainSearch';
import { useIntl } from 'umi';
import NewCollection from './components/NewCollection';

import styles from './style.less';

interface AnkiCollectionsProps {}

const AnkiCollections: React.FC<AnkiCollectionsProps> = () => {
  const { formatMessage } = useIntl();

  const handleSearch = (value: string) => {
    console.log(value);
  };

  return (
    <div className={styles.wrapper}>
      <MainSearch
        placeholder={formatMessage({
          id: 'anki.search.collection.placeholder',
        })}
        onSearch={handleSearch}
      />
      <div className={styles.content}>
        <NewCollection className={styles.folder} />
      </div>
    </div>
  );
};

export default AnkiCollections;
