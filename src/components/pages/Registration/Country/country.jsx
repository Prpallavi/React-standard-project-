import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { getregionjson } from "../../../../services/baseapiservices";



export default function Countrydropdown(){
  const jsonreg = getregionjson();
  console.log(jsonreg); 

  const [country, setCountry] = useState(null);
  const [states, setstates] = useState(null);
  const [stateList, setstateList] = useState([]);
 
  const handleCountryChange = (e) => {
    setCountry(e);
    setstateList(e.states);
    setstates(null);
  };

  const handleStateChange = (e) => {
    setstates(e);
  };
  
      return (
      <div className="budgetwrapper">
 
         <div style={{ width: 400, marginBottom: 20 }}>
        <b>Country</b>
        <Select
          placeholder="Select Country"
          value={country}
          options={jsonreg}
          onChange={handleCountryChange}
          getOptionLabel={e => e.country}
          getOptionValue={e => e.country}
        />
        <br />
        <b>State</b>
        <Select
          placeholder="Select State"
          value={states}
          options={stateList}
          onChange={handleStateChange}
          getOptionLabel={x => x.state}
          getOptionValue={x => x.state}
        />
      </div>
     
    </div>
 
  
      )
}