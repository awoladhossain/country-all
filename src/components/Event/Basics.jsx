/* eslint-disable no-unused-vars */
import { useState } from "react";

const Basics = () => {
    // let count = 0;
    const [count, setCount] = useState(0);

    const handleUpdate = () => {
        setCount(count + 1);
    }
    const handleDecrease = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
};

export default Basics;

//* the handleIncrease function is defined inside the Basics component function, so it has access to the count variable declared in the same scope.

// setcounter aray java ta porchos nah value set kore getter-setter method diay.. so oitai ekhn hoitace just ei khaney setCount tar modhe tokhn count er instial jai man ta ace oita shey thik koira dey upadate er madhome

//When you call setCount(count + 1);, you are not directly modifying the count variable. Instead, you are using the setCount function provided by the useState hook to update the state.

// React takes the argument count + 1 and schedules a state update.It doesn't immediately update the state.

// React will then re - render the component with the new state value.In this case, it will re - render with count incremented by 1.

// After the re - render, the component will reflect the updated state value, and any part of the component that depends on count will be updated to show the new value.
