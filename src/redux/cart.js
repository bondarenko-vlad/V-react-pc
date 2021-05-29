import api from "../api/api"

const initialState = []

const cart = (state=initialState, action) =>{
    switch(action.type){
        case 'GET_CART': 
            return [...state, ...action.payload]
        case 'SET_CART':
            return[
                ...state,
                action.payload,
            ]

        default:
            return state
    }
}

const setCartAC = (payload) => (
   {type:"SET_CART",payload}
)
const getCardAC = (payload) => (
   { type:'GET_CART', payload}
)

export const getCart = () => (dispatch) => {
    api.get('cart')
    .then(({data})=>dispatch(getCardAC(data)))
}

export const addToCart = (item) => (dispatch) => {
    api.post('cart',item)
    .then(()=>dispatch(setCartAC(item)))
}

export default cart