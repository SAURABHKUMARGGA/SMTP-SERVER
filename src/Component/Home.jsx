import React, { useEffect,useState} from 'react'
import e from '../img/e.gif'
import './style/home.css'
import Items from './Items';
function Home() {
    const [item,setItem] = useState();
    const [NoOfResult,setNoOfResult]=useState(12);
    const [more,setmore]= useState(true);
    const loadItems = async ()=>{
        try{
            setmore(true)
            const reqest_data = await fetch(`https://fakestoreapi.com/products?limit=6`)
            const data = await reqest_data.json();
            setItem(data);
            // console.log(data);
        }catch(error){
            console.log("items not loaded");
        }
    }
    
    const loadMore = async()=>{
        // console.log(NoOfResult,item.length)
        setNoOfResult(NoOfResult+6)
        item.length%6===0?setmore(true):setmore(false);//12 
        try{
            if(item.length%6===0){
                const reqest_data = await fetch(`https://fakestoreapi.com/products?limit=${NoOfResult}`)
                const data = await reqest_data.json();
                setItem(data);
                // console.log(data);
            }else{
                setmore(false)
            }
        }catch(error){
            console.log("items not loaded");
        }
    }
    useEffect(()=>{
        loadItems()
    
    },[])  
return (
    <>
   <h1 className='text-center my-3 animate__animated animate__lightSpeedInRight animate-slow'>Welcome to smile world...</h1>
 
   <div className="container d-grid item-center">
    <img className='m-auto' src={e} alt="team work"/>
   </div>
    <h2 className='text-center'>All Items</h2>
    <hr/>
    <div className="container position-relative">
        <div className="row">
            {item?item.map((item,index)=>{
                return <Items item={item} key={index}/>
            }):"Loading..."}
        </div>
        <p className='text-center mt-4'>{!more?"No more data":""}</p>
    {more?<button onClick={loadMore} className='position-absolute end-0 btn btn-outline-primary btn-sm' style={{bottome:"-10px",cursor:"pointer",zIndex:"1"}}>More result..</button>:""}
    </div>
    </>
  )
}

export default Home