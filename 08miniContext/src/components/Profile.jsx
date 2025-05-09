import React from 'react';
import { useContext } from 'react';
import UserContext from '../Context/UserContext';

const Profile = () => {
    const {user} = useContext(UserContext);

    if (!user) return <div>Please login</div> 

    return (
        <>Welcome, {user.username} </>
    )
}

export default Profile;