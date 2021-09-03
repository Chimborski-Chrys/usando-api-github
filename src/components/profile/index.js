import React from 'react';
import useGithub from '../../hooks/githubHooks';
import * as S from './styled';

const Profile = () => {

    const {githubState} = useGithub()

    return (
    <S.Wrapper>        
            <S.WrapperImage src="https://avatars.githubusercontent.com/u/86447837?v=4" alt="Avatar do usuario" />
          <S.WrapperInfoUser>
           <div>
            <h1>{githubState.user.name}</h1>
            <S.WrapperUserName>
            <h3>Username: </h3>
            <a href="https://github.com/Chimborski-Chrys" target="_blank" rel="noreferrer">Chrystiomar</a>
            </S.WrapperUserName>
        </div>
        <S.WrapperStatusCount>
                <div>
                    <h4>Followers</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>Starred</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>Followings</h4>
                    <span>5</span>
                </div>
            </S.WrapperStatusCount>   
            </S.WrapperInfoUser>
    </S.Wrapper>
    );
};

export default Profile;