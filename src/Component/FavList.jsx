import React, { useEffect } from "react";
import { useState } from "react";
import Items from "./Items";
function FavList() {
  const [FavList, setFavList] = useState([]);
  const loadData = () => {
    let items;
    if (localStorage.getItem("itemList") === null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem("itemList"));
      setFavList(items);
    }
  };
  const removeFav = (e) => {
    let items;
    if (localStorage.getItem("itemList") === null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem("itemList"));
      setFavList(items);
    }
    let existItem = items.filter((ei) => ei.id !== e);
    localStorage.setItem("itemList", JSON.stringify(existItem));
    setFavList(existItem);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          {FavList.length === 0
            ? "Empty"
            : FavList.map((item, index) => {
                return <Items item={item} key={index} removeFav={removeFav} />;
              })}
        </div>
      </div>
    </>
  );
}

export default FavList;
