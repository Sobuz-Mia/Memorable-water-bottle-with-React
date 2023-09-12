import './Bottle.css'
import PropTypes from 'prop-types';
const Bottle = ({bottle,handleCart}) => {
    const {name,img,price} = bottle;
   
    return (
        <>
            <div className="bottle ">
                <h2>Bottle Name:{name}</h2>
                <img src={img} alt="" />
                <h3>Price:${price}</h3>
                <button onClick={()=>handleCart(bottle)}>Buy Now</button>
            </div>
        </>
    );
};
Bottle.propTypes= {
    bottle:PropTypes.object.isRequired,
    handleCart:PropTypes.func.isRequired
}
export default Bottle;