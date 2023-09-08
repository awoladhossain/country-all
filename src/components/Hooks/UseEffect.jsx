import axios from "axios";
import { useEffect, useState } from "react";


const UseEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("the use effect have been called");
    }, [])
    
    const [users, setUsers] = useState([])

    useEffect(() =>{
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then((res) => res.json())
        //     .then((data) => setUsers(data))

        // const loadData =async () => {
        //     const res = await fetch('https://jsonplaceholder.typicode.com/users')
        //     const data = await res.json();
        //     setUsers(data)
        // }
        // loadData()

        const loadData = async () => {
            const data = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(data.data);
            setUsers(data.data)
        }
        loadData()

      
    },[])

    return (
        <>
            <div className="text-center mt-6">
                <h1>this is useEffect in jsx</h1>
                <p>{count}</p>
                <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Click Here</button>
            </div>

            <div className="grid grid-cols-3">
                {
                    users.map((singleUser) => {
                        return <div key={singleUser.id}  >
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">{singleUser.name}</h2>
                                    <p>{singleUser.email}</p>
                                 
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
        </>


    );
};

export default UseEffect;