import React,{useEffect, useState} from "react";

export default function Contact(){
    const contact ={width:'100%',height:'771px',textAlign:'center'}
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    //-------Creating two function for loading a users list------------
    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:8080/api/users/login")
            .then(response => response.json())
            .then(data => {
                setUser(data);
                setLoading(false);
            })
    }, []);

    if (loading){
        return <p>Loading...</p>
    }
    //------------------------------------------------------------------react

    const Enter = (getUser)=>{
        alert("soy: "+ getUser.user_firstname + " - "+getUser.user_password)
        return <h1>soy: + getUser.user_firstname + " - "+getUser.user_password</h1>
    }

    return(
        <div style={contact}>
            <h1 style={{lineHeight:'600px', color:'darkblue'}}>Contact Page</h1>
            <ab></ab>
            <div>
                {
                    user.map((getUser)=>
                        <div>
                            <span type="text">{getUser.id}</span>
                            <span type="text">{getUser.user_firstname}</span>
                            <span type="text">{getUser.user_lastname}</span>
                            <span type="text">{getUser.user_email}</span>
                            <span type="text">{getUser.user_password}</span>
                            <span type="text">{getUser.user_status}</span>
                            <button onClick={()=> Enter(getUser)}>Click</button>
                        </div>
                    )
                }
            </div>

        </div>
    )
}