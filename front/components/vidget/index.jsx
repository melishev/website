import styles from './styles.module.scss';

import { useState, useEffect } from 'react';
import axios from 'axios';

import { ReactSVG } from 'react-svg';

import { Small, Text } from 'components/typography';

const Vidget = () => {
  const [track, setTrack] = useState({});

  useEffect(() => {
    try {
      axios.get('https://website-services.dwarf.dk/api/current-track')
        .then((res) => setTrack(res.data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className={styles.Vidget}>
      <ReactSVG className={styles.Vidget_icon} src="/svg/boomBox.svg" />
      <div className={styles.Vidget_info}>
        <Text>{track.trackname}</Text>
        <Small>{track.artist}</Small>
      </div>
    </div>
  );
};

export default Vidget;
