/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';
import { PropTypes } from 'prop-types';
import Wrapper, { A } from './Wrapper';

function LeftMenuFooter({ version }) {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef

  return (
    <Wrapper>
      <div className="poweredBy">
        <A
          href="https://melishev.ru"
          key="website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Melnitsa
        </A>
        &nbsp;
        <A
          href={`https://melishev.ru`}
          key="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          v{version}
        </A>
      </div>
    </Wrapper>
  );
}

LeftMenuFooter.propTypes = {
  version: PropTypes.string.isRequired,
};

export default LeftMenuFooter;
