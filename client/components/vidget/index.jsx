import styles from './styles.module.scss';

import { useState, useEffect } from 'react';
import axios from 'axios';

import { ReactSVG } from 'react-svg';

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
        <p>{track.trackname}</p>
        <small>{track.artist}</small>
      </div>
    </div>
  );
};

export default Vidget;
