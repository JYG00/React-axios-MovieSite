import React from "react";
import "./imgcom.css";

export default function Imagecom(){
    return(
        <div>
            <img src={require('./img01.jpg')} alt="movieImg" />
            <div className="box01">aaaa</div>
        </div>
    );
}