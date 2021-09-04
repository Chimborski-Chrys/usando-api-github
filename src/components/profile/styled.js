import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    
    
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 10px;
    height: 190px;
   
    h1{
        font-size:30px;
        font-weight: bold;
    }

    h3{
        font-size:20px;
        font-weight: bold;
    }

    h4{
        font-size:16px;
        font-weight: bold;
       
    }

`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;   
   
    div{
        margin:5px;
        text-align: center;        
    }     
`;

export const WrapperUserGeneric = styled.div`
    display: flex;
    align-items: center; 
    margin-top: 20px;  
    h3 {
        margin-right: 10px;
    }  
    a{
        font-size: 15px;
        color : brown;
        font-weight: bold;
    } 
`;

export const WrapperImage = styled.img`
   border-radius:50%;
   width: 150px;
   height: 150px;
   margin: 10px;
`;


