import React,{useState,useEffect,useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CharactherCard from "../component/charactherCard";

import { Context } from "../store/appContext";
import PlanetCard from "../component/planetCard";

export const Home = () => {

	const [characthers,setCharacthers] = useState([])
  const { store, actions } = useContext(Context);



	return(
    <>
      <div className="">
        <h2 className="mx-5 text-danger">Characthers</h2>
        <div className="row flex-row flex-nowrap " style={{overflowX:'auto'}}>
          
          {store.characthers.map((characther)=> <CharactherCard uid={characther.url.replace('https://swapi.dev/api/people/','').replace('/ ','')} key={characther.url} name={characther.name} hairColor={characther.hair_color} gender={characther.gender} eye_color={characther.eye_color} /> )}
        </div>
      </div>
      <div className="mt-5">
        <h2 className="mx-5 text-danger">Planets</h2>
        <div className="row flex-row flex-nowrap " style={{overflowX:'auto'}}>
          
          {store.planets.map((planet)=> <PlanetCard uid={planet.url.replace('https://swapi.dev/api/planets/','').replace('/ ','')} key={planet.url} name={planet.name} population={planet.population} terrain={planet.terrain} /> )}
        </div>
      </div>
      
          
        
    
    
    </>
		
			
      
		//las props vienen de la api? y se tienen que declarar? o se tiene que limpiar de alguna forma?
		
	);

}


/* [
    {
      "uid": "1",
      "name": "Luke Skywalker",
      "url": "https://www.swapi.tech/api/people/1"
    },
    {
      "uid": "2",
      "name": "C-3PO",
      "url": "https://www.swapi.tech/api/people/2"
    }, */