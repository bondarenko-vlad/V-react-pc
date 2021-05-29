import React from 'react'

import arrow from '../assets/img/arrow.png'
import style from   '../assets/css/itemsPage.module.css'
import star from '../assets/img/blackstar.svg'

const imgChosen = [0,1,2]

function ItemsPage(props) {
    const [img,setImg] = React.useState(0)
    const onSetImg = (index) =>{
        setImg(index)
    }
    const onForward = (index) =>{
        setImg(index+1)
        if(index === 2){
            setImg(0)
        }
    }
    const onBack = (index) =>{
        setImg(index-1)
        if(index === 0){
            setImg(2)
        }
    }
    return (
            <div className={style.item}>
                <div className={style.img_content}>
                    <img className={style.itemImg} src={props.images[img]} alt={props.name} />
                    <div className={style.backArrow + ' ' + style.Arrow} onClick={()=>onBack(img)}>
                        <img src={arrow} className={style.withArrow} alt="arrow"/>
                    </div>
                    <div className={style.forwardArrow + ' ' + style.Arrow }  onClick={()=>onForward(img)}>
                        <img src={arrow} className={style.withArrow} alt="arrow"/>
                    </div>
                    <div className={style.imgChosen}>
                        {imgChosen.map((obj)=>(
                            <p
                                className={`imgWillChoose ${img === obj ? 'imgIsChoosing' : ''}`}
                                onClick={()=>onSetImg(obj)}
                                key={obj}
                            >{obj}</p>
                        ))}
                    </div>
                </div>
                <div className={style.info_item}>
                    <p className={style.info_item_name}>{props.name}</p>
                    <div className={style.popular}>
                        <img className={style.star} src={star} alt="star"/>
                        <p className={style.popularJson}>{props.popular}</p>
                    </div>
                    <div className={style.price_div}>
                        <p className={style.price}>{props.price} ₽</p>
                        <p className={style.buy}>Добавить</p>
                    </div>
                </div>
            </div>
    )
}

export default ItemsPage
