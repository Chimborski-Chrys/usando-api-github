import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs) `
font-size: 16px;
width: 100%;
margin-top: 16px;

`;

export const WrapperTabList = styled(TabList) `
list-style-type: none;
padding:4px;
display: flex;
margin: 0;
`;
WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab) `
border-radius: 20px;
border: 2px solid black;
padding:16px;
user-select: none;
cursor:ponter;
box-shadow: 0 0 0.3em black;
z-index:9999,
background-color:"#fff";
margin: 8px;

&:focus{
    outline:none;
}

&.is-selected{
    border-top-left-radius:0px;
    border-top-right-radius:0px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 2px solid white;
}
`;
WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel) `
padding: 16px;
border: 1px solid black;
box-shadow: 0 0 0.3em black;
display:none;
margin-top: -10px;
margin-left:12px;



&.is-selected{
    display:block;
    border-top: 2px solid white;   
}

`;
WrapperTabPanel.tabsRole = 'TabPanel';