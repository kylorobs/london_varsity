/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <page-content>
          <h2>This page is undergoing maitenance</h2>
          <p>
            Apologies for the inconvenience, we will have the page back up asap.
          </p>
          <p>
            In the meantime, visit <a href="/events">The KCLSU Events page</a>
            for all the upcoming events
          </p>
        </page-content>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default ErrorBoundary;
