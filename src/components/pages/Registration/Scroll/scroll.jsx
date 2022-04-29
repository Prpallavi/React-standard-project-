import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../../../../redux/users/action";
import { Materialcard } from "../../../common";



export default function Scroll() {
  const [items, setItems] = useState([]);

  const [hasMore, sethasMore] = useState(true);

 // const [page, setpage] = useState(2);
  let currentOffset = 0;
  let limit = 20;
const dispatch=useDispatch();
    const getComments = async () => {
        const tenComment = [];
        dispatch(fetchTodos(currentOffset, limit)).then((res) => {
            res.forEach((p) => tenComment.push(p));
            setItems((items) => [...items, ...tenComment]);
    
           
    })
    };
    const handleScroll = () => {
        const commentsFormServer = getComments();
        
        if (commentsFormServer.length === 0 || commentsFormServer.length < 20) {
            sethasMore(false);
          }
         
    }
  
    useEffect(() => {
     getComments();
        window.addEventListener("scroll", handleScroll);
      }, []);
  


  return (
    <InfiniteScroll
      dataLength={items.length} //This is important field to render the next data
      next={handleScroll}
      hasMore={hasMore}
      loader={<h2>LOADING...</h2>}
      endMessage={<h2>YOU HAVE SEEN EVERYTING</h2>}
    >
      <div >
        <div >
          {items.map((item) => {
            return (
                <div >
             
                    <Materialcard header={item.id} data={item.body}></Materialcard>
                    </div>
                
            )
          })}
        </div>
      </div>
    </InfiniteScroll>
  );
}

