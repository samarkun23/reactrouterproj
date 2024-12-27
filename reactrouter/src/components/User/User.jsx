import React from "react";
import { useParams } from "react-router-dom";
//value jo dalega us value ko kaise display karna hai vo dekege || url se para meter kaise loge
function User(){
    const {userid} = useParams()
    return(
        <div>User: {userid}</div> //jo vaha likha tha vahi yaha lika hai 
    )
}

export default User