import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchElem } from "../redux/elem";

function Items() {
  const dispatch = useDispatch();
  const element = useSelector(({ elements }) => elements.element);
  const { category, sort } = useSelector(({ filters }) => filters);
  const [fetching, setFetching] = useState(true);
  
  React.useEffect(() => {
    if (fetching) {
      dispatch(fetchElem(category, sort));
      setFetching(false)  
    }
  }, [category, sort, fetching]);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (window.innerHeight + e.target.documentElement.scrollTop) <
      100
    )
      setFetching(true);
  };
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  
  return (
    <>
      {element.map((obj, index) => (
        <div className="item" key={`${index}_item`}>
          <NavLink to={`${obj.path}/${obj.id}`}>
            <div className="img-content">
              <img src={obj.images[0]} alt={obj.name} />
            </div>
          </NavLink>
          <div className="info-item">
            <NavLink to={`${obj.path}/${obj.id}`}>
              <p>{obj.name}</p>
            </NavLink>
            <div className="stopCLick">
              <p className="price">{obj.price} ₽</p>
              <p className="buy">Купить</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Items;
