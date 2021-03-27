import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { authService } from './firebase';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #F0FFF0;
`;

export default ()=>{
    const history = useHistory();
    //const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
     const [newDisplayName, setNewDisplayName] = useState("");
    const onLogOutclick = () => {
        authService.signOut();
        //authService.currentUser.uid();
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

       /* if(userObj.displayName !== newDisplayName)
        {
            await userObj.updateProfile({
                displayName : newDisplayName,
            });
        }*/
    }

    return (
     <Wrapper>
      <div className="authContainer">
        <div className="Formcontainer">
          <form onSubmit={onSubmit} className="profileForm">
            <input 
                onChange={onChange}
                type="text" 
                placeholder="Display name" 
                value={newDisplayName}
                className="formInput"
            />
            <input type="submit" value="Update Profile"  className="formBtn" style={{marginTop: 10}}/>
          </form>
          <button className="formBtn cancelBtn logOut" onClick={onLogOutclick}>Log Out</button>
        </div>
      </div>
      </Wrapper>
    )
}