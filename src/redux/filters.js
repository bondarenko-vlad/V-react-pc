const initialState = {
    category: null,
    sort: {
        type: ''
    }
}

const filters = (state=initialState,action) =>{
    switch(action.type){
        case 'SET_CATEGORY':
            return{
                ...state,
                category: action.payload
            }
        case 'SET_SORT':
            return{
                ...state,
                sort: action.payload
            }    
        default: return state
    }
}

export const setSort = (type) =>({
    type: 'SET_SORT',
    payload: type,
})

export const setCategory = (catIndex) =>({
    type: 'SET_CATEGORY',
    payload: catIndex,
})

export default filters