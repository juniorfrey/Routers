import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileUser = () => {
    const {username} = useParams();
    return (
      <div>
        <h1>Perfil de usuario: {username}</h1>
      </div>
    );
}

export default ProfileUser
