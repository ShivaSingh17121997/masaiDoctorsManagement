import React, { useEffect, useState } from 'react'
import Cards from './Cards'

function Home() {
    const [data, setData] = useState("")

    useEffect(() => {
        fetch("")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setData(data.all)

            })
            .catch((err) => { console.log(err) })
    }, []);
    console.log(data)

    return (
        <div>
           {
           data && data.map((ele)=>{
                return <div key={ele._id}>
                   <Cards {...ele}/>
                </div>
            })
           }
        </div>
    )
}

export default Home