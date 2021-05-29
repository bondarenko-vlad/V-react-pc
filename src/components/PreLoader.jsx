import React from 'react'

import style from '../assets/css/preLoader.module.css'

function PreLoader({classes}) {
    return (
        <div className={style.preloader_background}>
            <div className={style.preLoader}>
                <p className={style.preLoader_p}>Загрузка</p>
                <div className={style.preLoader_animation}></div>
            </div>
        </div>
    )
}

export default PreLoader
