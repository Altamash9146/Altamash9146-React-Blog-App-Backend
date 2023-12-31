import React ,{useState,useEffect}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import axios from "axios";

const  Tech9Content = ()=>{
    const [data,setData] = useState([])

    useEffect(()=>{
      Fetchdata()
    },[])
  
    const Fetchdata = async ()=>{
        try{
            const response = await axios.get(`https://react-blog-app-backend-gwf1.onrender.com/api/blog/Technology-Images`)
            setData(response.data)
        }
  
        catch(error){
          console.log(error);
        }
    }
return(
    <>
    <div className="Tech9-Container">
 
         
{data.filter((item)=>item.cat ==='Technology-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Tech9-Heading">!!!{d.title9}!!!</h2>
        <Link to={"/Technology"}><button className="Tech9-Back-Button">Let's Explore More Technology</button></Link> 
        <div className="Tech9-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Tech9-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Tech9-Social-Media-Logo"/>
        </div>


        <div className="Tech9-Date-Container">
        <p className="Tech9-Dimitry">Dimitry Nozhenko</p>
        <p className="Tech9-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img9} alt="Not-Found" className="Tech9-Image"/>
        <div className="Tech9-Image-Name">Image:{d.title9}</div>
        <div className="Tech9-Para-Container">
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

export default Tech9Content