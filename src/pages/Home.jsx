import React from 'react'

import '../assets/css/items.css'
import '../assets/css/categories.css'
import Items from '../components/Items'

function Home() {
    return (
        <>
            <section className="all-items">
                <div className="content">
                    <h1>Все товары:</h1>
                   <Items/>  
                </div>
            </section> 
        </>
    )
}

export default Home
