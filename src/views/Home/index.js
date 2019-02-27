import fetch from 'fetch';
import { connect } from 'react-redux';
import { GET_CHUCK_CAT } from 'actionTypes';
import Home from './component';

const mapStateToProps = state => {
  return {
    categories: state.chuck.categories
  }};

const mapDispatchToProps = dispatch => ({
  getChuckCategories: () =>
    dispatch({ type: GET_CHUCK_CAT, payload: fetch.ChuckAPI.categories() }),
});


export default connect(mapStateToProps, mapDispatchToProps)(Home)
