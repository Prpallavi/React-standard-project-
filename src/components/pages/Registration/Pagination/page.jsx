import { useEffect, useState } from "react";
import Paginate from "./paginate";
import axios from "axios";
import { Materialcard } from "../../../common";
import { post_url } from "../../../../apiConfig/users";
import { Textbox } from "../../../common";
import { alignProperty } from "@mui/material/styles/cssUtils";

function NewsPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const [filters, setFilter] = useState("");

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    axios.get(post_url).then((res) => {
      setPosts(res.data);
    });
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = Array.from(posts).slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(currentPosts);

  let dataSearch = currentPosts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filters.toString().toLowerCase())
    );
  });
  return (
    <div>
     <div style={{width:"30%", margin:"auto"}}> Search
      <Textbox 
        id="name"
        name="name"
        onChange={(e) => searchText(e)}
        type="text"
        value={filters}
      /></div>
  
     

      <div className="container mt-5">
     
        <div>
          {dataSearch.map((c) => (
            <Materialcard header={c.id} data={c.body}></Materialcard>
          ))}
        </div>

        <Paginate
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default NewsPage;
