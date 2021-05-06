import React, { useEffect, useState } from 'react';
import { dbService } from './firebase';
import Factory from './Factory';
import Message from './Message';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #f5f6fa;
`;


// Referances
// https://www.youtube.com/watch?v=LKAXg2drQJQ
// https://levelup.gitconnected.com/structure-firestore-firebase-for-scalable-chat-app-939c7a6cd0f5
// https://firebase.google.com/docs/auth/web/manage-users
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
// https://firebase.google.com/docs/auth/web/google-signin
// https://firebase.google.com/docs/auth/web/password-auth
// https://firebase.google.com/docs/auth/web/facebook-login
// https://firebase.google.com/docs/auth/web/github-auth
// https://firebase.google.com/docs/auth/web/firebaseui
// https://nomadcoders.co/nwitter
// https://www.youtube.com/watch?v=wkdCpktUfGg

const Discussion = ({ userObj }) => {
  console.log("userObject is : ", userObj);
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    dbService
      .collection("messages")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const messageArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(messageArray);
      });
  }, []);

  console.log("messages : \n", messages);

  return (
    <Wrapper>
      <div className="authContainer">
        <div className="container">
          <Factory userObj={userObj} />
          <div style={{ marginTop: 20 }}>
            {messages.map((message) => (
              <Message style={{ marginTop: 20 }}
                key={message.id}
                messageObj={message}
                isOwner={message.creatorId === userObj.uid}
                userObj={userObj}
              />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Discussion;

