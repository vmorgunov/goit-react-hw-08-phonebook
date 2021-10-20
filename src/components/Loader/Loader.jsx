import Loader from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

import React from 'react';

const Spinner = () => {
  return (
    <LoaderContainer>
      <Loader
        type="TailSpin"
        color="#FF6747"
        height={80}
        width={80}
        timeout={3000}
      />
    </LoaderContainer>
  );
};

export default Spinner;
