import axios from 'axios'

const initialState = {
    searchText: '',
    searchItem: [],
    isLoadSeacrh: false
}

const search = (state=initialState,action) =>{
    if(action.type === 'SET_SEARCH_BOOLEAN'){
        return{
            ...state,
            isLoadSeacrh: false
        }
    }
    else if(action.type === 'SET_SEACRH_ITEM'){
        return{
            ...state,
            searchText: action.text,
            searchItem: action.item,
            isLoadSeacrh: true
        }
    }
    return state
}

export const setSaerchBoolean = () =>({
    type: 'SET_SEARCH_BOOLEAN'
})

export const setSeacrhItem = (text,data) =>({
    type: 'SET_SEACRH_ITEM',
    item: data,
    text: text,
})

export const setTextSearchAC = text => dispatch =>{
    axios.get('http://localhost:3002/elem').then(({data})=>{
        dispatch(setSeacrhItem(text,data))
    })
}

export default search