import React from 'react'

const Sort = React.memo(function Sort({sortName,onSelectSort,activeSortType}) {
    const [activeSort,setActiveSort] = React.useState(0)
    const [visableSort,setVisableSort] = React.useState(false)
    const ref = React.useRef()

    React.useEffect(() => {
       document.body.addEventListener('click',onVisableSortTogle)
    }, [])

    const onVisableSortTogle = (click) =>{
        if(!click.path.includes(ref.current)){
            setVisableSort(false)
        }
    }

    const onActiveSort = (sort,index) =>{
        setActiveSort(index)
        if(onSelectSort){
            onSelectSort(sort)
            setVisableSort(false)
        }
    }

    const onVisableSort = () =>{
        setVisableSort(!visableSort)
    }

    const sortChoose = sortName[activeSort].name



    return (
        <div className="sort" ref={ref}>
            <p>Сортировка по: <span onClick={onVisableSort}>{sortChoose}</span></p>
            {visableSort && <div className="sort-block">
                <ul>
                    {sortName.map((sort,index)=>(
                        <li
                            onClick={()=>onActiveSort(sort,index)}
                            className={activeSort === index ? 'active' : ''}
                            key={`${index}_sort`}
                        >{sort.name}
                        </li>
                    ))}
                </ul>
            </div>}
        </div>
    )
})

export default Sort
