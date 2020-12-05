import React, { PureComponent } from 'react';
import errorReporter from '../../libs/errorReporter';
import './style.css';

export default class ErrorBoundary extends PureComponent {
  state = {
    isError: false,
    errorName: '',
  };

  static getDerivedStateFromError(error) {
    return {
      isError: true,
      errorName: error.name !== 'Error' ? error.name : '',
    };
  }

  componentDidCatch(error, info) {
    errorReporter.reportError('app crash', {
      error: {
        message: error.message,
        // dont log unimportant stack field
        // stack: error.stack,
        env: process.env.REACT_APP_ENV,
      },
      info,
    });
  }

  clickToRefresh = () => {
    // eslint-disable-next-line no-undef
    window.location.href = '/';
  };

  render() {
    if (this.state.isError)
      return (
        <div className='error-boundary-container'>
          <h1 className='title'>Oops!</h1>
          <p className='subtitle'>Simithing wint wring.</p>
          {this.state.errorName && (
            <small className='text-muted'>
              Error code: #{this.state.errorName}
            </small>
          )}
          <p className='desc'>
            We are ongoing to resolve this issue. Please wait for updates.
          </p>
          <button className='btn' type='button' onClick={this.clickToRefresh}>
            Back to Home {'>'}
          </button>
        </div>
      );
    return this.props.children;
  }
}
