import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';


export const GithubContext = createContext({
    loading: false,
    user: {
        
    },
    repositories: [],
    starred: [],
});

const GithubProvider = ({children}) => {
    const [githubState, setGithubState] = useState({
        loading: false,
        user: {
            avatar: undefined,
            login: undefined,
            name: undefined,
            location: undefined,
            html_url: 0,
            followers: 0,
            following: 0,
            public_gists: 0,
            publicRepos: 0,
        },
        repositories: [],
        starred: [],
    });

const getUser = (username) => {
    api.get(`users/${username}`).then(({data}) => {
        setGithubState((prevState) => ({
            ...prevState,
            user: {
                avatar: data.avatar_url,
                login: data.login,
                name: data.name,
                location: data.location,
                html_url: data.html_url,
                followers: data.followers,
                following: data.following,
                public_gists:data.public_gists,
                publicRepos: data.publicRepos,
            },
        }));
    });
};

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
    };

    return(
    <GithubContext.Provider value={contextValue}>
        {children}
    </GithubContext.Provider>
    );
};

export default GithubProvider;