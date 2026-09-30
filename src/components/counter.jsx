// import { getValue } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
function Counter () {
    const [arr, setArr] = useState([1, 2, 3, 4, 5]);

    function addPlus() {
        setArr(prevArr => [...prevArr, prevArr.length + 1]);
    }
    function removePlus() {
        setArr(prevArr => prevArr.slice(0, -1));
    }
    return (
        <div>
            <h1>Counter: {arr.length}</h1>
            <button onClick={addPlus}>+</button>
            <button onClick={removePlus}>-</button>
        </div>
    );
}
//     function addApple() {
//     setCart(prevCart => ({
//         ...prevCart, quantity: 1,
//     }))
//     }
//     function removeApple() {
//         setCart(prevCart => ({
//             ...prevCart, quantity: 0,
//         }))
//     }
//     function incrementCounter () {
//         setCart((prevCart) => ({ ...prevCart, quantity: prevCart.quantity + 1 }));
//     }
//     function decrementCounter () {
//         setCart((prevCart) => ({ ...prevCart, quantity: prevCart.quantity - 1 }));
//     }

//     return (
//         <div>
//             <h1>Counter: {cart.quantity}</h1>
//             <button onClick={addApple}>Increment</button>
//             <button onClick={removeApple}>Remove</button>
//         </div>
//     );
// }

export default Counter;

    // // 1. Use a callback to get the previous value
    // // 2. Spread out all the properties of the previous state object
    // 3. Only change the property that you want to change


