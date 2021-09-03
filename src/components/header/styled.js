import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
width: 80%;
justify-content: space-between;
padding: 6px;

input {
    border: 2px solid black;
    border-radius:25px;
    width: 100%;
    height: 30px;
    padding: 12px;
}

button {
    background-color: #ccc;
    border-radius:10px;
    padding: 6px;
    margin-left: 10px;

    &:hover{
        box-shadow: 3px 2px 10px green ;
    }
}

`;