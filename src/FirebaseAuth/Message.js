import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Nweet = ({nweetObj, isOwner}) => {
  
  return (
    <div>
        <h4 className="h4">{nweetObj.text}</h4>
       {/* {isOwner && (
          <>
            <button>Delete</button>
            <button>Edit</button>
          </>
       )}  */}
    </div>
  )
}
export default Nweet;