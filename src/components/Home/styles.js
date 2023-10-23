import styled from "styled-components";

export const Box = styled.div`
    background-color: #000000;
    opacity: 0.8;
    border-radius: 10px;
    padding: 20px;
    width: 95%;
    max-width: 450px;
    transition: all 0.3s;
h1{
    color:#FFFFFF;
    font-size: 25px;
}
input{
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 25px;
    font-size: 15px;
    background-color: #7c7c7c2b;
    color: #fff;
    width: calc(100% - 70px);
}
button{
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 50px;
    background-color: #7c7c7c2b;
    cursor: pointer;
    float: right;
    img{
        width: 20px;
    }
}
`

export const BoxInfo = styled.div`
    margin-top: 20px;
    display:flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s;


`

export const BoxCity = styled.div`
display:flex;
flex-direction: row;
place-items: center;
gap:10px;

h2{
    color:#FFFFFF;
    font-size: 18px;
    font-weight: 300;
}
`

export const BoxDescription = styled.div`
display:flex;
flex-direction: column;
gap:10px;
align-items: center;
justify-content: center;
margin-top: 10px;

h1{
    font-size: 60px;
    color:#FFFFFF;
}

p{
    color:#FFFFFF;
    font-size: 15px;
    text-transform: capitalize;
}

`

export const MsgErr = styled.div`
display:flex;
flex-direction: column;
margin-top: 10px;
align-items: center;
transform: scale(1.1);

h1{
    font-size: 50px;
    color:red;
}

p{
    font-size: 15px;
    color:#FFFFFFFF;
}
`