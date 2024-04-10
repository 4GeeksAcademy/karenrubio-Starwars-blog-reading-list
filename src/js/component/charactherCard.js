import React,{useState,useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



const CharactherCard = (props) => {
    const { store, actions } = useContext(Context);
 

    return(
        
            <div className="card mx-2" style={{width: "450px"}}>
                <img src={rigoImage} className="card-img-top " style={{width: "400px", height:"200px"}} alt="..."/>
                <div className="card-body m-2 ">
                <h5 className="card-title"><strong>{props.name}</strong></h5>
                    <p>{props.uid}</p>
                    <p className="card-text">gender:{props.gender}</p>
                    <p className="card-text">hair color:{props.hairColor}</p>
                    <p className="card-text">eyes color:{props.eye_color}</p>
                <div className="d-flex justify-content-between">
                    <Link to={"/CharacthersDetail/" + props.uid } className="btn btn-outline-primary" >
						<span>Learn More</span>
					</Link>
                    <button onClick={()=>actions.favoriteLiked(props.name)} type="button" className="btn btn-outline-warning"><i className="bi bi-suit-heart"></i></button>

                </div>
                </div>
            </div>
        
        
        
    )
}

export default CharactherCard