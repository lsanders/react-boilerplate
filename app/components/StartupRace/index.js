/**
 *
 * StartupRace
 *
 */

import React from 'react';
import { useDispatch } from 'react-redux';
// import { loadRepos } from '../../containers/App/actions';
import { changeUsername } from '../../containers/HomePage/actions';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function StartupRace() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(changeUsername('lsanders'));
    // dispatch(loadRepos());
  }, []);
  return <div></div>;
}

StartupRace.propTypes = {};

export default StartupRace;
