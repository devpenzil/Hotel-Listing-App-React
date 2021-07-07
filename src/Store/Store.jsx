import {configureStore} from '@reduxjs/toolkit'
import idReducer from '../Store/Components/idSlicer'
export default configureStore({
    reducer:{
        id:idReducer
    }
})