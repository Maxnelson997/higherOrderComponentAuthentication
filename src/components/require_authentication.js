import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {


    class Authentication extends Component {

        static contextTypes = {
            router: React.PropTypes.object
        }

        componentWillMount() {
            if(!this.props.authenticated) {
                this.context.router.push('/')
            }
        }

        componentWillUpdate(nextProps, nextState, nextContext) {
            if(!nextProps.authenticated) {
                this.context.router.push('/')
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.authenticated }
    }

    return connect(mapStateToProps)(Authentication);
};


// // gotta use this higher order component in a different file.
// // this below the different file

// import Authentication; // HOC above
// import Resources;

// const ComposedComponent = Authentication(Resources);

// <ComposedComponent resources={resourceList} />