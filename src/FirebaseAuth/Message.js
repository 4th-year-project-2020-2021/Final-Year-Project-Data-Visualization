/**
 * @author Jina Kim
 *
 * Users can create, update, delete their messages
 *
 */

import React, { useState } from 'react';
import { dbService, storageService } from './firebase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";


// Referances
// https://levelup.gitconnected.com/structure-firestore-firebase-for-scalable-chat-app-939c7a6cd0f5
// https://www.youtube.com/watch?v=LKAXg2drQJQ
// https://firebase.google.com/docs/auth/web/manage-users
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
// https://firebase.google.com/docs/auth/web/google-signin
// https://firebase.google.com/docs/auth/web/password-auth
// https://firebase.google.com/docs/auth/web/facebook-login
// https://firebase.google.com/docs/auth/web/github-auth
// https://firebase.google.com/docs/auth/web/firebaseui
// https://nomadcoders.co/nwitter
// https://www.youtube.com/watch?v=wkdCpktUfGg

const Message = ({ messageObj, isOwner, userObj }) => {

  const [editing, setEditing] = useState(false);
  const [newMessage, setNewMessage] = useState(messageObj.text);

  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this message?");
    if (ok) {
      await dbService.doc(`messages/${messageObj.id}`).delete();
      await storageService.refFromURL(messageObj.attachmentUrl).delete();
    }
  };

  const toggleEditing = () => setEditing((prev) => !prev);

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`messages/${messageObj.id}`).update({
      text: newMessage,
    });
    setEditing(false);
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewMessage(value);
  };


  return (
    <div className="message">
      {editing ? (
        <>
          <form onSubmit={onSubmit} className="container messageEdit">
            <input
              type="text"
              placeholder="Edit your message"
              value={newMessage}
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
          <>ღ <h4 className="formInput" > ➤ {messageObj.text}</h4></>
          {isOwner ? (
            <>
              <div className="font big"> By you [{userObj.displayName}]</div>
              <div class="message__actions">
                <span onClick={onDeleteClick} className="font">
                  <FontAwesomeIcon icon={faTrash} size="1.5x" color={"#A52A2A"} />
                Delete
              </span>
                <span onClick={toggleEditing} className="font">
                  <FontAwesomeIcon icon={faPencilAlt} size="1.5x" color={"#006400"} />
                Edit
              </span>
              </div>
            </>
          ) : <div className="font big">By someone </div>}
        </>
      )}
    </div>
  );
};


export default Message;
