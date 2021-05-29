import React from 'react'

import {useDispatch,useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {setTextSearchAC,setSaerchBoolean} from '../../redux/search'
import searchImg from '../../assets/img/search.svg'

function Search() {
    const dispatch = useDispatch()
    const [textSearch, setTextSearch] = React.useState('')
    const [buttonValid,setButtonValid] = React.useState(false)
    const postText = (text) =>{
        dispatch(setSaerchBoolean())
        dispatch(setTextSearchAC(text))
    }
    React.useEffect(()=>{
        if(textSearch === ''){
            setButtonValid(true)
        }
        else{
            setButtonValid(false)
        }
    },[textSearch])
    return (
        <div className="main-input">
            <input className="input-header" placeholder="Поиск по магазину..."  onChange={(e)=>setTextSearch(e.target.value)}/>
            <button disabled={buttonValid} className="ButtonSearch" onClick={()=>postText(textSearch)}>
                <NavLink className="searchClick" to={!buttonValid ? '/search' : '/'}>
                    <img src={searchImg} alt="seacrh" className={`search ${buttonValid ? 'SeacrhFalse' : ''}`}/>
                </NavLink>
            </button>
        </div>
    )
}

export default Search