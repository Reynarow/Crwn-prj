import React from 'react';
import Image from '../assets/images/notFound.png';

import {
  ErrorImageContainer,
  ErrorImageText,
  ErrorImageOverlay,
} from './error-boundary.styles';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={Image} />
          <ErrorImageText>
            Sorry this page is not found or broken{' '}
          </ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
