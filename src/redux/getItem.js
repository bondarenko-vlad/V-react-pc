import axios from "axios"

const initialState = {
    windowItems: [{}],
    isLoad: false,
}

const getItemReducer = (state=initialState,action) =>{
   if(action.type === 'GET_ITEM'){
       return{
           ...state,
           windowItems: action.payload,
           isLoad: true
       }
   }
   else if(action.type === 'GET_BOOLEAN'){
        return{
            ...state,
            isLoad: false,
            windowItems: [{}]
        }
    }
   return state
}

export const getItemAC = (windowItem)=>({
    type: 'GET_ITEM',
    payload: windowItem,
})

export const getBoolean= ()=>({
    type: 'GET_BOOLEAN',
})

export const getItem = (path,id) => dispatch =>{
    axios.get(`http://localhost:3002/elem?path=${path}&id=${id}`).then(({data})=>{
        dispatch(getItemAC(data))
    })
}

export default getItemReducer