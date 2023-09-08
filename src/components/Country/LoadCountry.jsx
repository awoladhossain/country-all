/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Country from './Country';


const LoadCountry = () => {

    const [data, setData] = useState([])
    
    useEffect(() => {
        // const loadData = async () => {
        //     const res = await axios.get('https://restcountries.com/v3.1/all')
        //     // console.log(res.data);
        //     setData(res.data)
        // }
        // loadData()
        const loadData = async () => {
            const res = await fetch('https://restcountries.com/v3.1/all')
            const resData = await res.json()
            // console.log(resData);
            setData(resData)
        }
            loadData()
    },[])

    const handleCountry = (name) => {
        console.log(name);
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then((res) => res.json())
            .then((data) => setData(data) )
    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-center mb-6'>All Country</h1>
            <div className='text-center'>
                <input type="text" placeholder="Search Country" className="input input-bordered input-error w-full max-w-xs" onChange={(event) => handleCountry(event.target.value)} />
           </div>
            <div className="grid grid-cols-3 mt-10">
                {/* <h1>this is load Country Api Section</h1> */}
                {
                 data.map((singleCountry, index) => <Country key={index} singleCountry={singleCountry} ></Country>)
                    
                }
            </div>
       </div>
    );
};

export default LoadCountry;