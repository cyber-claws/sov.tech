import fetch from 'fetch';
import { connect } from 'react-redux';
import { GET_RANDOM_FACT, CLEAN_STATE } from 'actionTypes';
import Fact from './component';

const mapStateToProps = state => {
  return {
    asyncRunning: state.chuck.asyncRunning,
    fact: state.chuck.fact
  }};

const mapDispatchToProps = dispatch => ({
  getRandomFact: (category) =>
    dispatch({ type: GET_RANDOM_FACT, payload: fetch.ChuckAPI.randomFact(category) }),
  cleanState: () => 
    dispatch({ type: CLEAN_STATE, payload: null }),
});


export default connect(mapStateToProps, mapDispatchToProps)(Fact)
