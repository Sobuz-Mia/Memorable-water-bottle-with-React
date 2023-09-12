import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import './Bottle.css'
import { addToLS, getStorageCart } from "../utilities/Localstorage";
import Cart from "./card/Cart";

const Bottles = () => {
    const [bottles,setBottles] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
        .then(res=>res.json())
        .then(data => setBottles(data))
    },[])

    useEffect(()=>{
        // console.log(bottles)
        if(bottles.length>0){
            const getStorageId = getStorageCart();
            let FinalCartData = [];
            
          for(const id of getStorageId){
            const bottle = bottles.find(bottle=>bottle.id === id);
            if(bottle){
                FinalCartData.push(bottle)
            }
          }
            setCart(FinalCartData);
        }
    },[bottles])

    const [cart,setCart] = useState([]);
    const handleCart = bottle =>{
        const newCart = [...cart,bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }
    return (
        <>
            <h2>Bottle:{bottles.length}</h2>
            <Cart cart = {cart}></Cart>
           <div className="bottle-container">
                {
                 bottles.map(bottle =><Bottle bottle = {bottle} key={bottle.id} handleCart={handleCart} ></Bottle> )
                }
           </div>
        </>
    );
};

export default Bottles;