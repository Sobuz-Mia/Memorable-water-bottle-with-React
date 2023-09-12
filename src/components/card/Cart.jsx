import './cart.css'
import PropTypes from 'prop-types';
const Cart = ({cart}) => {
    // console.log(cart);
    return (
        <div>
            <h2>Card: {cart.length}</h2>
            <div className='cart-container'>
                {
                    cart.map(bottle => <img key={bottle.id} src={bottle.img}></img>)
                }
            </div>
        </div>
    );
};
Cart.propTypes =PropTypes.array.isRequired
export default Cart;