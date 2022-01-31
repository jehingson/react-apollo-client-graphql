import React from 'react';
import styled from 'styled-components';


function Profile() {
  return <ProfileContent>
    <div>
    Perfil
    </div>
  </ProfileContent>;
}

export default Profile;

const ProfileContent = styled.div`
flex: 0.35;
border: 1px solid green;

>div{
    position: fixed;
}
@media(max-width: 615px){
  flex: 1;
}
`