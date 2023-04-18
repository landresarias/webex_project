import React, {useEffect, useRef, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//import useLocalState from '../assets/useLocalState';


export default function Setup(){
    const setup ={width:'100%',height:'771px',textAlign:'center'};

    const Form1 = {position:'fixed', zIndex:'2', top:0, left:0, right:0, bottom:0, backgroundColor:'rgba(0,0,0,.7)',};

    const Form2 = {position:'fixed', zIndex:'3', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
        backgroundColor:'#fff', color:'#666', fontFamily:'sans-serif', fontWeight:'700', padding:'50px',
        borderRadius:'10px', display:'inline-block', /*textAlign: 'left',*/
    };

    const butConn={width:'30%',marginTop:'100px',fontSize:'2rem',borderRadius:'10px'};

    const butMeet={width:'30%',marginTop:'100px',fontSize:'2rem',borderRadius:'10px'};

    const butList={width:'30%',marginTop:'100px',fontSize:'2rem',borderRadius:'10px'};


    //**********************************************************************************************//
    //******For creating a login form******//
    //const URL_LOGIN = 'http://localhost:8080/api/users/login';
    const [isOpen, setIsOpen] = useState('true');
    const refUser = useRef("");
    const refPassword = useRef("");
    //const [login, setLogin] = useState({username: "", password: ""})
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

    const handleChange = (e,parField)=>{
        const val = e.target.value;
        setUser({
            ...user,[parField]:val
        })
    }

    //*******This two method below that I used to handle for connecting to my php server file *****//
    /*const Submit = (getUser) => {
        //e.preventDefault();
        alert("aja: - "+getUser.user_email)

    };*/
    const Submit = () => {
        //e.preventDefault();
        user.map((b)=> alert(b.id===2?"OK":"Naaaaaaa")
        )

    };



    return(
        <div className="col-sm-7" style={setup}>


            { isOpen === "true" && (

                <div className="Auth-form-container" style={Form1}>
                { user.map((getUser)=>
                    <form className="Auth-form" style={Form2}>
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Sign In</h3>
                            <div className="form-group mt-3">
                                <input type="email" className="form-control mt-1" placeholder="Enter email" ref={refUser}
                                       required />
                            </div>
                            <div className="form-group mt-3">
                                <input type="password" className="form-control mt-1" placeholder="Enter password" ref={refPassword}
                                        required />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary" onClick={()=> Submit(getUser)}>Submit</button>
                            </div>
                            <p className="text-center mt-2" style={{ fontSize: '1.3rem' }}>
                                <a onClick={() => setIsOpen('false')}>Cancel</a>
                            </p>
                        </div>
                        <ToastContainer autoClose={2500}></ToastContainer>
                    </form>
                    )}
                </div>
            )}
            <div>
                <button type="submit" className="btn btn-primary" style={butConn}> Webex Connection </button>
            </div>
            <div>
                <button type="submit" className="btn btn-primary" style={butMeet}> Create Meeting </button>
            </div>
            <div>
                <button type="submit" className="btn btn-primary" style={butList}> Meetings List </button>
            </div>
        </div>
    )
}



/*if(refUser.current.value===""){
           toast.error('There are empty USERNAME fields',{position: toast.POSITION.BOTTOM_CENTER});
           return;
       }
       else if(refPassword.current.value===""){
           toast.error('There are empty PASSWORD fields',{position: toast.POSITION.BOTTOM_CENTER});
           return;
       }
       else{
          // toast.success('success',{position: toast.POSITION.BOTTOM_CENTER});
           if(refUser.current.value===getUser.user_email){
               alert("Holaaaaaa")
           }
       }
        */


/*if(user.username.trim()===""){
    toast.error('There are empty USERNAME fields',{position: toast.POSITION.BOTTOM_CENTER});
    return;
}
else if(user.password.trim()===""){
    toast.error('There are empty PASSWORD fields',{position: toast.POSITION.BOTTOM_CENTER});
    return;
}
else{
    toast.success('success',{position: toast.POSITION.BOTTOM_CENTER});

}*/




/*const reqLogin = {
    'user': refUser.current.value,
    'password': refPassword.current.value,
}
fetch(URL_LOGIN,{
    headers:{ "Content-Type":"application/json",},
    method: "post",
    body: JSON.stringify(reqLogin),
})
    .then((response)=>{
        if(response.status === 200) return Promise.all([response.jsonp(), response.headers]);
        else return Promise.reject("Invalid login attempt");
    })
    .then(([body, headers])=>{
        setLogin(headers.get("authorization"));
        window.location.href="dashboard";
    }).catch((message)=>{ alert(message); });*/




/*const data = {
    'user': refUser.current.value,
    'password': refPassword.current.value
};
const responseJson = await getData(URL_LOGIN, data);
console.log('event response: ', responseJson.connected);
if (responseJson.connected) {
    //alert("You are login now - " + responseJson.user + " - " + responseJson.password);
    setIsOpen('false');
}
else {
    alert("User or password not found");
}*/


/*const getData = async (url, data) => {
        const resp = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'aplication/json'
            }
        });
        const json = await resp.json();
        return json;
    };*/
//********************************************//

