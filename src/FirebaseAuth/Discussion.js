import React, { useEffect, useState } from 'react';
import { dbService } from './firebase';
import Factory from './Factory';
import Message from './Message';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #f5f6fa;
`;

const Discussion = ({ userObj }) => {
    console.log("userObject is : ",userObj);
    const [nweets, setNweets] = useState([]);


  useEffect(() => {
    dbService
      .collection("nweets")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const nweetArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNweets(nweetArray);
      });
  }, []);

  console.log("nweets : \n",nweets);

  return (
   <Wrapper>
     <div className="authContainer">
    <div className="container">
      <Factory userObj={userObj} />
      <div style={{ marginTop: 20 }}>
        {nweets.map((nweet) => (
          <Message style={{ marginTop: 20 }} 
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
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