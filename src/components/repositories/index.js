import React from 'react';
import RepositoryItem from '../repository-item';
import * as S from './styled';

const Repositories = () => {
    return(
        <S.WrapperTabs  
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>     
                <S.WrapperTab>Starred</S.WrapperTab>       
            </S.WrapperTabList>        
            <S.WrapperTabPanel>
                <RepositoryItem 
                    name="bookFlix"
                    linkToRepo="https://github.com/Chimborski-Chrys/bookFlix"
                    fullName="Chimborski-Chrys/bookFlix"/>
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepositoryItem 
                    name="BuscaRestaurante"
                    linkToRepo="https://github.com/Chimborski-Chrys/BuscaRestaurante"
                    fullName="Chimborski-Chrys/BuscaRestaurante"/>
            </S.WrapperTabPanel>
        </S.WrapperTabs>
    );
}

export default Repositories;