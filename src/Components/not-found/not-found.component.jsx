import React from 'react';
import Image from '../assets/images/notFound.png';

import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from '../error-boundary/error-boundary.styles';

const NotFound = () => (
  <ErrorImageOverlay>
    <ErrorImageContainer imageUrl={Image} />
    <ErrorImageText>Sorry this page is not found or broken</ErrorImageText>
  </ErrorImageOverlay>
);

export default NotFound;
