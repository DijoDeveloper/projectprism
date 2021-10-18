import { CommonAction } from '../../../redux/actions/Common.action';
import SwapInterface from './Index'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        settings: state.CommonReducer.commonSettings
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        commonActions: (commonDetails) => { dispatch(CommonAction(commonDetails)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SwapInterface);
