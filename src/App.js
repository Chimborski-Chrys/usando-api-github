import React from 'react';
import Layout from './components/layout';
import Profile from './components/profile';
import Repositories from './components/repositories';
import { ResetCSS } from './global/resetCSS';
import useGithub from './hooks/githubHooks';
import GithubProvider from './providers/github-provider';

const App = () => {
  const { githubState } = useGithub();

  return (
    <Layout>
      {githubState.hasUser ? 
        <>
        {githubState.loading ? (<p>Loading</p>) : (
          <>
            <Profile />
            <Repositories />
          </>
        )}
        </> : <div>Nenhum usuario pesquisado ainda</div>}    
    </Layout>
  );
};

export default App;
