import React from 'react'
import classNames from 'classnames'
import hamburger from '../../assets/img/hamburger_button_menu_icon_155296.svg'
import { NavLink } from 'react-router-dom'

const Categories = React.memo(function Categories({items,onClickCategory}) {
    const [activeItem,setActiveItem] = React.useState(null)
    const [visableCat,setVisableCat] = React.useState(false)
    const ref = React.useRef()
    React.useEffect(() => {
       document.body.addEventListener('click',falseVisable)
    },[])
    const falseVisable = (click) =>{
        if(!click.path.includes(ref.current)){
            setVisableCat(false)
        }
    }
    const onActiveItem = (index) =>{
        setActiveItem(index)
        onClickCategory(index)
    }
    const onAllActive = (index) =>{
        setActiveItem(index)
        onClickCategory(index)
    }
    const onVisable = () =>{
        setVisableCat(!visableCat)
    }
    return (
        <div className="Categories" ref={ref}>
            <div className="categories" onClick={onVisable}>
                <p>Каталог</p>
                <img src={hamburger} alt="hamburger"/>
            </div>
            <div className={`${"categories-block"} ${visableCat === true ? 'categories-block-active' : ''}`}>
                <ul>
                    <li onClick={()=>onAllActive(null)} className={activeItem === null ? 'actives' : ''}>Все</li>
                    {items.map((catName,index)=>(
                        <NavLink to="/"  key={`${index}_cat`}><li
                            onClick={()=> onActiveItem(index)}
                            className={classNames({
                                actives: activeItem === index,
                            })}
                        >
                            {catName}
                        </li>
                        </NavLink>
                    ))}
                </ul>       
            </div>
        </div>
    )
})

export default Categories
