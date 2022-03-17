import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries, fetchStates } from "../../../../redux/users/action";
import { Dropselect } from "../../../common";

export default function Countrydropdown() {
  const [dcountry, setCountry] = useState();
  const [dstates, setstates] = useState();
  const data = useSelector((state) => state.app);
  console.log(data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries()).then((res) => {
      setCountry(res);
    });
  }, []);

  const handleCountryChange = (e) => {
    console.log(e);
    dispatch(fetchStates(e._id)).then((res) => {
      setstates(res);
    });
  };

  const handleStateChange = (e) => {
    console.log(e);
  };

  return (
    <div className="budgetwrapper">
      <b>Country</b>
      <Dropselect
        placeholder="Select Country"
        options={dcountry}
        onChange={handleCountryChange}
        getOptionLabel={(x) => x.country}
        getOptionValue={(x) => x.country}
      />
      <br />
      <b>State</b>
      <Dropselect
        placeholder="Select State"
        options={dstates}
        onChange={handleStateChange}
        getOptionLabel={(x) => x.states}
        getOptionValue={(x) => x.states}
      />
    </div>
  );
}
