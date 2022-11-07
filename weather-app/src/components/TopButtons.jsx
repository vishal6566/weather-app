import React from 'react'

const TopButtons = ({setQuery}) => {
    const cities = [
        {
            id: 1,
            title: "Mumbai"
        },
        {
            id: 2,
            title: "Delhi"
        },
        {
            id: 3,
            title: "Bangalore"
        },
        {
            id: 4,
            title: "Ranchi"
        },
        {
            id: 5,
            title: "Kolkata"
        },
    ]
    return (
        <div className='flex items-center justify-around my-6'>
{cities.map((city)=>(
<button key={city.id} className='text-white text-lg font-medium ' onClick={()=>setQuery({q:city.title})}>
    {city.title}</button>))}
        </div>
    )
}

export default TopButtons