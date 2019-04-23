import { connect } from 'react-redux';
import SplashPage from './SplashPage';

const mapStateToProps = state => ({
  businesses: state.businesses,  
  employees: state.employees,
  schedules: state.schedules
});

export default connect(mapStateToProps, null)(SplashPage);