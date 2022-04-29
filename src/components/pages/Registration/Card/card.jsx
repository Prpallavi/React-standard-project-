import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../../../../redux/users/action";
import Materialcard from "../../../common/primarycard";
import {Textbox} from '../../../../components/common'

export default function Cards() {
  let currentOffset = 0;
  let limit = 10;
  const [comment, setComment] = useState([]);
 
  const [filters, setFilter] = useState("");

  const searchText = (event) => {
    setFilter(event.target.value);
  };
  let dataSearch = comment.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filters.toString().toLowerCase())
    );
  });
  const dispatch = useDispatch();

  const loadTenComment = () => {
    const tenComment = [];
    dispatch(fetchTodos(currentOffset, limit)).then((res) => {
      res.forEach((p) => tenComment.push(p));
      setComment((comment) => [...comment, ...tenComment]);
      currentOffset += 10;
    
    });
  };


  const handleScroll = (e) => {
   /*  console.log(e.target.documentElement.scrollTop);
    console.log(window.innerHeight);
    console.log(e.target.documentElement.scrollHeight); */
    // console.log(
    //   Math.ceil(e.target.documentElement.scrollTop + window.innerHeight)
    // );
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight) {
      loadTenComment();
    }
  };

  useEffect(() => {
    loadTenComment();
   window.addEventListener("scroll", handleScroll);

  }, []);
  console.log(comment);
  return (
    <div>
        <div style={{width:"20%", margin:"auto"}}> Search
      <Textbox 
        id="name"
        name="name"
        onChange={(e) => searchText(e)}
        type="text"
        value={filters}
      /></div>
     
   

      {dataSearch.map((p, i) => {
        console.log(p);
        return (
          <div key={i}>
            <Materialcard header={p.id} data={p.body}></Materialcard>
          </div>
        );
      })}
    </div>
  );
}
