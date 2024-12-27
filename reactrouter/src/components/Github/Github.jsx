import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
    const data = useLoaderData() //is method se data.follower mil jayega 
    // const [data, setdata] = useState([])
//     useEffect(() =>{
//         fetch('https://api.github.com/users/hiteshchoudhary')
//         .then(response => response.json())
//         .then(data =>{
//             console.log(data);
//             setdata(data)
//         })
//     },[])


    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers}
        <img src={data.avatar_url} alt="Github profil" width={300}/>
        </div>
    )
}

export default Github

//this is optimzed method 2nd you can easily call api 

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}