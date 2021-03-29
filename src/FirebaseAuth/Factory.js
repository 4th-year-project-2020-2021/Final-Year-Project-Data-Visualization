import React, { useState } from "react";
import { dbService } from "./firebase";
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #F0FFF0;
`;

const Factory = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const creatorIds = userObj.uid;

  //console.log("creatorId 1", creatorId);

  const onSubmit = async (event) => {
    event.preventDefault();

  

    //console.log("creatorId 2", creatorId);

    await dbService.collection("nweets").add({
      creatorId : creatorIds,
      text: nweet,
      createdAt: Date.now(),
    });
    setNweet("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
  
  
  return (
    <Wrapper> 
    <h1 className="Center big font">Share your thoughts with others</h1>
    <form onSubmit={onSubmit} >
      <div className="factoryInput__container">
        <input
          className="factoryInput__input"
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder= "Leave your message!"
          maxLength={120}
        />
        <input type="submit" value="&rarr;" className="factoryInput__arrow" />
      </div>
    </form>
    </Wrapper>
  );
};
export default Factory;