import React, { useState } from 'react'

export default function AddItem() {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [device, setDevice] = useState("")
    const [noc, setNoc] = useState("")
    const [userID, setUserid] = useState("")
    const [name, setName] = useState("")

    const handleAdd = () => {
        let userObj = {
            title,
            body,
            device,
            noc,
            userID,
            name
        }
        // connection frontend to backend

        fetch("http://localhost:8080/employee/post/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                alert("Item is added")

            })
            .catch((err) => { console.log(err) })

        // to empty the input field

        setTitle("")
        setBody("")
        setDevice("")
        setNoc("")
        setUserid("")
        setName("")

    }
    return (
        <div>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter your title ' /> <br />   <br />
            <input type="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder='Enter your body ' /> <br />   <br />
            <input type="text" value={device} onChange={(e) => setDevice(e.target.value)} placeholder='Enter your device' /> <br /> <br />
            <input type="number" value={noc} onChange={(e) => setNoc(e.target.value)} placeholder='Enter your noc ' /> <br />   <br />
            <input type="text" value={userID} onChange={(e) => setUserid(e.target.value)} placeholder='Enter your Password' /> <br /> <br />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' /> <br /> <br />

            <button onClick={handleAdd} >Add Item</button>
        </div>
    )
}
