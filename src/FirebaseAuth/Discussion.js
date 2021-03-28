import React, { useEffect, useState } from 'react';
import { dbService } from './firebase';
import Factory from './Factory';
import Message from './Message';

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
    <div className="container">
      <Factory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
        {nweets.map((nweet) => (
          <Message
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Discussion;