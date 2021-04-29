import React, { useEffect, useState } from 'react';
import { dbService } from './firebase';
import Factory from './Factory';
import Message from './Message';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #f5f6fa;
`;

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