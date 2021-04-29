import React, { useState } from "react";
import { dbService } from "./firebase";
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #f5f6fa;
`;

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