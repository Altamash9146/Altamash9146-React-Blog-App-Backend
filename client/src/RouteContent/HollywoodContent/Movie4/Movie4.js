import React ,{useState,useEffect}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Movie4.style.css"
import axios from "axios";

const  Movie4Content = ()=>{
    const [data,setData] = useState([])

    useEffect(()=>{
      Fetchdata()
    },[])
  
    const Fetchdata = async ()=>{
        try{
            const response = await axios.get(`https://react-blog-app-backend-gwf1.onrender.com/api/blog/Hollywood-Images`)
            setData(response.data)
        }
  
        catch(error){
          console.log(error);
        }
    }
return(
    <>
    <div className="Movie4-Container">
 
         
{data.filter((item)=>item.cat ==='Hollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Movie4-Heading">!!!{d.title4}!!!</h2>
        <Link to={"/Hollywood"}><button className="Movie4-Back-Button">Let's Explore More Hollywood</button></Link> 
        <div className="Movie4-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Movie4-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Movie4-Social-Media-Logo"/>
        </div>

        <div className="Movie4-Date-Container">
        <p className="Movie4-Dimitry">Dimitry Nozhenko</p>
        <p className="Movie4-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img4} alt="Not-Found" className="Movie4-Image"/>
        <div className="Movie4-Image-Name">Image:{d.title4}</div>
        <div className="Movie4-Para-Container">
        <p>{d.dpara1}</p>
        <p>{d.dpara2}</p>
        <p>{d.dpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Movie4Content