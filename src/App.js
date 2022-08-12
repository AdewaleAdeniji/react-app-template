import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Internal Modules and files
import './App.css';
import Routes from './routing/Routes';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      response: ''
    }
  }

  render() {

    const childProps = {
      isAuthenticated: this.props.isAuthenticated,
    }

    return (
      <ErrorBoundary>
          <Routes childProps={childProps} />
      </ErrorBoundary>
    );
  }

}

// Typechecking for the App's passed in props 
App.propTypes = {
	isAuthenticated: PropTypes.bool,
};

// Sets the default props of the app container
App.defaultProps = {
	isAuthenticated: false
};

// Maps the store's properties to the App container's props in order to render the
// correct application UI when user authenticates
function mapStateToProps(state) {
	return {
			isAuthenticated: state.user.loggedIn
	};
}

export default connect(
  mapStateToProps,
)(App);
