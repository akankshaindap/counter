import {configureStore,createSlice} from '@reduxjs/toolkit'
const counterSlice=createSlice({ //  helps to mutate states
    name:'counter', //name of the slice
    initialState:{counter:0}, //initial state 
    reducers:{ //all reducers
        increment(state,action){
            state.counter ++; //takes the current state and updates it with +1
        },
        decrement(state,action){
            state.counter -=action.payload; //takes the current state and updates it with -1
        },
        addBy(state,action){
            state.counter+=action.payload; //takes the current state and updates it with payload(data)
        }
    }
})
export const actions=counterSlice.actions; //exports actions of the slices
export const store=configureStore(
    {
        reducer:counterSlice.reducer //wraps all store in one single store
    }
    )
    export default store;