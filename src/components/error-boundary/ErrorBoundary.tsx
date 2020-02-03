import * as React from 'react'

export class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>Something went wrong, please refresh the page...</h1>
      )
    }

    return this.props.children
  }
}
