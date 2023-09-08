import { useState } from "react";


const UseState = () => {

    const [data, setData] = useState(0);
    const handleDecrement = () => {
        setData(data - 1);
    }
    return (
        <div className="text-center">
            <h1 className="mt-6">This is the USE State Component</h1>
            <p className="mt-6">value: {data}</p>
            <button onClick={()=>setData(data+1)} className=" mx-5 btn btn-outline btn-primary">increment</button>
            <button onClick={handleDecrement} className="btn btn-outline btn-secondary">decrement</button>
        </div>
    );
};

export default UseState;