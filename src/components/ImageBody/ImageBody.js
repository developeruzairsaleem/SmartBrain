
import React from "react";
import "./ImageBody.css";


const ImageBody=({imageURL,data,submitted,submitting})=>{
console.log(data)
if(submitting){
    return <h1>Detecting</h1>
}

if(!submitted){
    return '';
}
    return(
        <div className="imageContainer center">
            <img className="image" src={imageURL} alt="" />
            {
                data.map((item,index)=>{
                return(
                        <div key={index} style={{
                            top:item.topRow*100+'%',left:item.leftCol*100+'%',right:(1-item.rightCol)*100+'%',bottom:(1-item.bottomRow)*100+'%'
                        }} className="box">
                        </div>
                    )
                })
            }
        </div>
    )
}


export default ImageBody;