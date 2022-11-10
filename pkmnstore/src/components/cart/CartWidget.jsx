import './cartwidget.css'

function CartWidget({counter}){
    return <>
        <img className="cartIcon" src="https://i.imgur.com/bDjCq9f.png" alt="Carrito de Compras" />
        <sub>{counter}</sub>
    </>
}

export default CartWidget