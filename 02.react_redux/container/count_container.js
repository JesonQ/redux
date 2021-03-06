import Count from '../components/count'
import {connect} from 'react-redux'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../redux/count_create_reducers'

// function mapStateProps(state){
//     return {count:state}
// }

// function toDispatch(dispatch){
//     return {
//         increment:(value)=>{dispatch(createIncrementAction(value))},
//         decrement:(value)=>{dispatch(createDecrementAction(value))},
//     }
// }

export default connect(
    state=>({count:state}),
    {
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementAsyncAction
    }
    )(Count)