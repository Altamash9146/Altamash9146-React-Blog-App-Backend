import React ,{useState,useEffect}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Food9.style.css"
import axios from "axios";

const  Food9Content = ()=>{
    const [data,setData] = useState([])

    useEffect(()=>{
      Fetchdata()
    },[])
  
    const Fetchdata = async ()=>{
        try{
            const response = await axios.get(`https://react-blog-app-backend-gwf1.onrender.com/api/blog/Food-Images`)
            setData(response.data)
        }
  
        catch(error){
          console.log(error);
        }
    }
return(
    <>
    <div className="Food9-Container">
 
         
{data.filter((item)=>item.cat ==='Food-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Food9-Heading">!!!{d.title9}!!!</h2>
        <Link to={"/Food"}><button className="Food9-Back-Button">Let's Explore More Fitness</button></Link> 
        <div className="Food9-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Food9-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Food9-Social-Media-Logo"/>
        </div>

        <div className="Food9-Date-Container">
        <p className="Food9-Dimitry">Dimitry Nozhenko</p>
        <p className="Food9-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img9} alt="Not-Found" className="Food9-Image"/>
        <div className="Food9-Image-Name">Image:{d.title9}</div>
        <div className="Food9-Para-Container">
        <p>{d.ipara1}</p>
        <p>{d.ipara2}</p>
        <p>{d.ipara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Food9Content