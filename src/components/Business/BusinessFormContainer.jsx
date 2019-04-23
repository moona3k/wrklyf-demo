import { connect } from 'react-redux';
import { createBusiness } from "../../actions/business_actions";
import BusinessForm from './BusinessForm';

const mapDispatchToProps = dispatch => ({
    createBusiness: business => dispatch(createBusiness(business))
});

export default connect(null, mapDispatchToProps)(BusinessForm);