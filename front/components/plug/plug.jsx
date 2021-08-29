import styles from './plug.module.scss';

import { useState } from 'react';

const Plug = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setEmail('');
  };

  return (
    <div className={styles.Plug}>
      <h1>In currently time, web application not available yet.</h1>
      <h2>But in August 2021 everything will change!</h2>
      <h3>Subscribe to updates.</h3>
      <form onSubmit={handleSubmit} className={success ? styles.success : ''}>
        <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Plug;
