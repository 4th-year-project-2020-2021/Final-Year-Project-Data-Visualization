import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { authService } from './firebase';

export default ({ userObj })=>{
    const history = useHistory();
    //const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const [newDisplayName, setNewDisplayName] = useState(authService.currentUser.uid);
    const onLogOutclick = () => {
        authService.signOut();
        authService.currentUser.uid();
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

        if(userObj.displayName !== newDisplayName)
        {
            await userObj.updateProfile({
                displayName : newDisplayName,
            });
        }
    }

    return (
        <>
          <form onSubmit={onSubmit}>
            <input 
                onChange={onChange}
                type="text" 
                placeholder="Display name" 
                value={newDisplayName}
            />
            <input type="submit" value="Update Profile" />
          </form>
          <button onClick={onLogOutclick}>Log Out</button>
        </>
    )
}