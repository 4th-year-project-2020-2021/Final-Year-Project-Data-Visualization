import React, { useEffect, useState } from 'react';
import { dbService } from './firebase';
import Nweet from './Message';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #F0FFF0;
`;

const Discussion = ({ userObj }) => {
    //console.log("User is :",userObj);
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);

    

    useEffect( () => {
        dbService.collection("nweets").onSnapshot(snapshot => {
            const nweetArray = snapshot.docs.map((doc) => ({
                id:doc.id, 
                ...doc.data()
            }));
            setNweets(nweetArray);
        }); 
    },[]);

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("nweets").add({
            text:nweet,
            createdAt: Date.now(),
            //creatorId:userObj.uid,
        });
        //once you submit, we set the nweet to empty string.
        setNweet("");
    };

    const onChange = (event) => {
        const {
            target:{value},
        } = event;
        setNweet(value);
    };

    //console.log(nweets);
    return (
        <Wrapper>
        <div className="authContainer">
        <div className="Formcontainer">
           <form onSubmit={onSubmit} className="factoryForm">
             <div className="factoryInput__container">
             <input 
                value={nweet} 
                type="text" 
                onChange={onChange} 
                placeholder="Say something!" 
                required
                autoFocus
                maxLength={120} 
                className="formInput"
            />
             <input type="submit" value="Send" className="factoryInput__arrow" />
             </div>
           </form>
           <div style={{ marginTop: 30 }}>
             {nweets.map((nweet) => (
               <Nweet 
                    key={nweet.id} 
                    nweetObj={nweet} 
                    //isOwner={nweet.creatorId===userObj.uid} 
               />
              ))}
           </div>
        </div>
        </div>
        </Wrapper>
       )
}

export default Discussion;