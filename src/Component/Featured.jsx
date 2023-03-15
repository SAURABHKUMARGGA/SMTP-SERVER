import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom';
import './style/home.css'
import Items from './Items';
function Featured() {
    const [data,setdata]= useState();
    const [rdata,setrdata]= useState();
    const {id,category} = useParams()
const loadItems = async ()=>{
    try{
        const reqest_data = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await reqest_data.json();
        setdata(data);
        // console.log(data);
    }catch(error){
        console.log("items not loaded");
    }
}
const loadRelateItems = async()=>{
    try{
        // console.log(category)
        const reqest_data = await fetch(`https://fakestoreapi.com/products/category/${category}`)
        const reqdata = await reqest_data.json();
        setrdata(reqdata);
        // console.log(rdata);
    }catch(error){
        console.log("items not loaded");
    }
}
    useEffect(()=>{
        loadItems()
        loadRelateItems()
        // eslint-disable-next-line 
    },[])
    useEffect(()=>{
        loadItems()
        setTimeout(()=>{
            window.scrollTo(0,0);

        },300)
        // loadRelateItems()
        // eslint-disable-next-line 
    },[useParams()])
  return (
    <>
    {/* {console.log(data)} */}
    {data?<div className="container d-flex my-5">
        <div className='mx-2'>
            <img className='rounded' style={{maxWidth:"300px",height:"250px"}} src={data.image} alt="products pictures"/>
        </div>
        <div className="content mx-4 px-4" style={{height:"auto",minHeight:"250px"}}>
            <h3>{data.title}</h3>
            <div className='d-flex my-2'>
                <span>
                    <span className='rating text-white text-center'>{`${data.rating.rate}`}<span className='text-white'> &#9733;</span></span> {`${data.rating.count} Ratings`}
                </span>
            </div>
            <p>{data.description}</p>
            <p className='fs-5 text-danger'>Rs. {data.price} /-</p>
            <div className='d-flex justify-content-start my-5'>
            {/* this features enabled when need just copy paste code set local storage*/}
            {/* <button className="btn btn-outline-success" onClick={()=>{}}>Add to Cart</button> */}
            <button className="btn btn-outline-success mx-3">Buy Now</button>
            </div>
            
        </div>

    </div>:"Please Wait..."}
    <div className='container'><h3>Related items</h3></div>
    <hr/>
    <div className="container position-relative">
        <div className="row">
            {rdata?rdata.map((item,index)=>{
                return <Items item={item} key={index}/>
            }):"Loading..."}
        </div>
       
    </div>
    </>
  )
}

export default Featured