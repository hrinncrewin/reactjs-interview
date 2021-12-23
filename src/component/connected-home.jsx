import { connect } from 'react-redux';
import Home from './Home';
import {addEmployee, editEmployee, removeEmployee} from '../component/actions'

const mapStateToProp = state => {
    return { employee : state };
}

const mapDispatchToProp = dispatch => {
    return {
        addEmployee: () => dispatch(addEmployee()),
        editEmployee: () => dispatch(editEmployee()),
        removeEmployee: () => dispatch(removeEmployee())
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(Home);