import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { authService } from './firebase';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #f5f6fa;
`;


// Referances
// https://firebase.google.com/docs/auth/web/manage-users
// https://www.youtube.com/watch?v=LKAXg2drQJQ
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
// https://firebase.google.com/docs/auth/web/google-signin
// https://firebase.google.com/docs/auth/web/password-auth
// https://firebase.google.com/docs/auth/web/facebook-login
// https://firebase.google.com/docs/auth/web/github-auth
// https://firebase.google.com/docs/auth/web/firebaseui
// https://nomadcoders.co/nwitter
// https://www.youtube.com/watch?v=wkdCpktUfGg
// https://levelup.gitconnected.com/structure-firestore-firebase-for-scalable-chat-app-939c7a6cd0f5

export default ({ refreshUser, userObj }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };

  return (
    <Wrapper className="authContainer">
      <div className="container">
        <form onSubmit={onSubmit} className="profileForm">
          <input
            onChange={onChange}
            type="text"
            autoFocus
            placeholder="Display name"
            value={newDisplayName}
            className="formInput"
          />
          <input
            type="submit"
            value="Update Profile"
            className="formBtn font"
            style={{
              marginTop: 10,
            }}
          />
        </form>
        <span className="formBtn cancelBtn logOut font" onClick={onLogOutClick}>
          Log Out
          </span>
      </div>
    </Wrapper>
  );
};