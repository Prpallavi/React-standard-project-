import React from 'react'
import { Materialcard } from '../../../common';

const Commentsec = ({ comments, loading }) => {
  
    if (loading) {
      return <h2>Loading...</h2>;
    }
    console.log(comments)
    return (
      <div>
          {comments.map(c=>(
              <Materialcard header={c.title} data={c.body}></Materialcard>
          ))}

        
      </div>

  )
}

export default Commentsec