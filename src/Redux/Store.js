import { configureStore } from '@reduxjs/toolkit';
import RocketReducer from './RocketReducer';

const Store = configureStore({
    reducer:{
       RocketReducer   
    }
})

export default Store;