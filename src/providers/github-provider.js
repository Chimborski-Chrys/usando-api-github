import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';


export const GithubContext = createContext({
    loading: false,
    user: {

    },
    repositories: [],
    starred: [],
});

const GithubProvider = ({ children }) => {
    const [githubState, setGithubState] = useState({
        loading: false,
        hasUser: false,
        user: {
            id:undefined,
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

        setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }));

        api.get(`users/${username}`).then(({ data }) => {
            setGithubState((prevState) => ({
                ...prevState,
                hasUser: true,
                user: {
                    id:data.id,
                    avatar: data.avatar_url,
                    login: data.login,
                    name: data.name,
                    location: data.location,
                    html_url: data.html_url,
                    followers: data.followers,
                    following: data.following,
                    public_gists: data.public_gists,
                    publicRepos: data.publicRepos,
                },
            }));
        })
            .finally(() => {
                setGithubState((prevState) => ({
                    ...prevState,
                    loading: !prevState.loading,
                }));
            });
    };


    const getUserRepos = (username) => {

        api.get(`users/${username}/repos`).then(({ data }) => 
        {
            console.log('data: ' + JSON.stringify(data));
            setGithubState((prevState) => ({
                ...prevState,
                repositories: data,
            }));
        });
    };

    const getUserStarred = (username) => {

        api.get(`users/${username}/starred`).then(({ data }) => 
        {
            console.log('data: ' + JSON.stringify(data));
            setGithubState((prevState) => ({
                ...prevState,
                starred: data,
            }));
        });
    };


    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), []),
    };

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    );
};

export default GithubProvider;