import './Cart.css'
function Cart({ cartItems = [], onIncrease, onDecrease, onRemove }){
    const total = cartItems.reduce((sum, p) => sum + p.price * p.qty, 0);
    return (
<>
    <div className='Cartpage Cartdrawer'>
        <div className='Listofproducts'>
            {cartItems.length === 0 && (
                <div className='emptycart'>Your cart is empty.</div>
            )}
            {cartItems.map((item) => (
                <div key={item.id} className='product'>
                    <img src={item.thumbnail} alt={item.title} />
                    <div className='productdetails'>
                        <h4>{item.title}</h4>
                        <div>Price: ${item.price}</div>
                        <div className='qtycontrols'>
                            <button className='btn btn-outline-secondary btn-sm' onClick={() => onDecrease && onDecrease(item.id)}>-</button>
                            <span className='qty'>{item.qty}</span>
                            <button className='btn btn-outline-secondary btn-sm' onClick={() => onIncrease && onIncrease(item.id)}>+</button>
                        </div>
                        <div className='subtotal'>Subtotal: ${(item.price * item.qty).toFixed(2)}</div>
                        <button className='btn btn-link text-danger p-0' onClick={() => onRemove && onRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
        </div>
        <div className='Ordersummery'>
            <h3>Order Summary</h3>
            <div className='summaryrow'>
                <span>Items</span>
                <span>{cartItems.reduce((sum, p) => sum + p.qty, 0)}</span>
            </div>
            <div className='summaryrow'>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>
            <button className='btn btn-primary w-100 mt-3' disabled={cartItems.length === 0}>
                Checkout
            </button>
        </div>
    </div>
</>
    )
}

export default Cart
