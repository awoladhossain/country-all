/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Country from './Country';


const LoadCountry = () => {

    const [data, setData] = useState([])
    const [serachItem, setSearchItem] = useState('')
    

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



    return (
        <div>
            <div>
                <input type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" onChange={(event) => setSearchItem(event.target.value)} />
           </div>
            <div className="grid grid-cols-3 mt-10">
                <h1>this is load Country Api Section</h1>
                {
                    data.map((singleCountry, index) => <Country key={index} singleCountry={singleCountry} ></Country>)
                    
                }
               
            </div>
       </div>
    );
};

export default LoadCountry;