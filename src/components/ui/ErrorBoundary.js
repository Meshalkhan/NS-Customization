import { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="ui-error-boundary">
          <h1 className="ui-error-boundary__title">Something went wrong</h1>
          <p className="ui-error-boundary__text">The editor could not render. Try reloading the page.</p>
          <button type="button" className="btn btn-primary ui-error-boundary__btn" onClick={() => window.location.reload()}>
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
