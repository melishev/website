import styled from 'styled-components';
import PropTypes from 'prop-types';

import Logo from '../../../assets/images/Melnitsa-logo.svg';

const Wrapper = styled.div`
  background-color: ${props => props.theme.main.colors.pale};
  padding-left: 2rem;
  height: ${props => props.theme.main.sizes.leftMenu.height};

  box-shadow: 0 1px 2px 0 rgba(40, 42, 49, 0.16);

  .leftMenuHeaderLink {
    &:hover {
      text-decoration: none;
    }
  }

  .projectName {
    display: block;
    width: 100%;
    height: ${props => props.theme.main.sizes.leftMenu.height};
    font-size: 2rem;
    letter-spacing: 0.2rem;
    color: $white;

    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: auto 2.5rem;
  }
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      colors: {
        leftMenu: {},
      },
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

Wrapper.propTypes = {
  theme: PropTypes.object,
};

export default Wrapper;
