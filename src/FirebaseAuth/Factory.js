import React, { useState } from "react";
import { dbService } from "./firebase";
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #f5f6fa;
`;


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

const Factory = ({ userObj }) => {
  const [message, setMessage] = useState("");
  const creatorIds = userObj.uid;

  const onSubmit = async (event) => {
    event.preventDefault();

    await dbService.collection("messages").add({
      creatorId: creatorIds,
      text: message,
      createdAt: Date.now(),
    });
    setMessage("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setMessage(value);
  };


  return (
    <Wrapper>
      <h1 className="Center big font">Message Board</h1>
      <form onSubmit={onSubmit} >
        <div className="factoryInput__container">
          <input
            className="factoryInput__input"
            value={message}
            onChange={onChange}
            type="text"
            placeholder="Leave your message!"
            maxLength={120}
          />
          <input type="submit" value="&rarr;" className="factoryInput__arrow" />
        </div>
      </form>
    </Wrapper>
  );
};
export default Factory;
