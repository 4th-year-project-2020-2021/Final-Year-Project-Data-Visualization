import React, { useState } from 'react';
import { dbService, storageService } from './firebase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Message = ({nweetObj, isOwner, userObj}) => {

  //console.log("What is user name ",userObj.displayName);
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);

  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this message?");
    if (ok) {
      await dbService.doc(`nweets/${nweetObj.id}`).delete();
      await storageService.refFromURL(nweetObj.attachmentUrl).delete();
    }
  };
  
  const toggleEditing = () => setEditing((prev) => !prev);

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`nweets/${nweetObj.id}`).update({
      text: newNweet,
    });
    setEditing(false);
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };


    return (
      <div className="nweet">
      {editing ? (
        <>
          <form onSubmit={onSubmit} className="container nweetEdit">
            <input
              type="text"
              placeholder="Edit your message"
              value={newNweet}
              required
              autoFocus
              onChange={onChange}
              className="formInput font"
            />
            <input type="submit" value="Update" className="formBtn font" />
          </form>
          <span onClick={toggleEditing} className="formBtn cancelBtn font">
            Cancel
          </span>
        </>
      ) : (
        <>
          <>ღ <h4 className="formInput" > ➤ {nweetObj.text}</h4></>
         {isOwner && (
            <div class="nweet__actions">
              <span onClick={onDeleteClick} className="font"> 
                <FontAwesomeIcon icon={faTrash} size="1.5x" color={"#A52A2A"} />
                Delete
              </span>
              <span onClick={toggleEditing} className="font"> 
                <FontAwesomeIcon icon={faPencilAlt} size="1.5x" color={"#006400"} />
                Edit
              </span>
            </div>
         )}
        </>
      )}
    </div>
  );
};


export default Message;