import React from 'react'
import { Link,useLocation } from 'react-router-dom'


function Items({item,removeFav}) {
    const location = useLocation();
    // console.log(location.pathname==="/fav")
    const addFav = ()=>{
        let items;
        if(localStorage.getItem("itemList")===null){
            items=[]
        }else{
          items = JSON.parse(localStorage.getItem("itemList"));  
        }
        // console.log(item,items)
        // console.log(items.includes(item))
        let existItem = items.find(e=>e.id===item.id)
        // console.log(existItem)
        if(existItem===undefined||items.length ===0){
            items.push(item)
        }else{
            alert("Already added in cart");
        }
        localStorage.setItem("itemList",JSON.stringify(items))
        // console.log(JSON.parse(localStorage.getItem("itemList")));
    }
  return (
    <div className="col-sm-4 my-2" >
                        <div className="item-card">
                        <div className="item-image">
                            <img className='rounded img-thumbnail' src={item.image} alt="Item im"/>
                        </div>
                        <div className="item-details">
                            <h4 className='my-3'><Link className='text-black text-decoration-none' to={`/features/${item.id}/${item.category}`}>{item.title.slice(0,20)}</Link></h4>
                            <div className='d-flex my-2'>
                                <span>
                                    <span className='rating text-white'>{`${item.rating.rate}`}<span className='text-white'> &#9733;</span></span> {`${item.rating.count} Ratings`}
                                </span>
                            </div>
                            <p className='mt-3' style={{textAlign:"justify",}}>{item.description.slice(0,90)}<Link to={`features/${item.id}/${item.category}`} title='more' className='text-primary text-decoration-none' > ...</Link></p>
                            <div className="item-price text-left">
                            
                            <span className="new-price">Rs. {item.price} /-</span>
                            </div>
                            <div className='d-flex justify-content-end mt-4'>
                            {location.pathname==="/fav"?<button className="btn btn-outline-danger mx-2" onClick={()=>{removeFav(item.id)}}>Remove to Cart</button>:
                            <button className="btn btn-outline-success mx-2" onClick={addFav}>Add to Cart</button>}
                            <button className="btn btn-outline-success">Buy Now</button>
                            </div>
                        </div>
                        </div>

                    </div>
  )
}

export default Items