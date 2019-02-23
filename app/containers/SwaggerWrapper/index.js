/**
 *
 * SwaggerWrapper
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import SwaggerUI from 'swagger-ui'
import CustomLayout from './CustomLayout'
import 'swagger-ui/dist/swagger-ui.css';

import injectSaga from 'utils/injectSaga';
import saga from './saga';

const DOM_ID = "swagger-ui-mountpoint"
const CustomLayoutPlugin = {
  // package our CustomLayout component into a plugin,
  // so Swagger-UI can use it
  components: {
    CustomLayout: CustomLayout
  }
}
/* eslint-disable react/prefer-stateless-function */
export class SwaggerWrapper extends React.Component {
  componentDidMount() {
    SwaggerUI({
      dom_id: `#${DOM_ID}`,
      url: "http://petstore.swagger.io/v2/swagger.json",
      plugins: [
        CustomLayoutPlugin
      ],
      layout: "CustomLayout"
    })
  }
  render() {
    return  <div id={DOM_ID} />
  }
}

SwaggerWrapper.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'swaggerWrapper', saga });

export default compose(
  withSaga,
  withConnect,
)(SwaggerWrapper);
