import React from 'react'
import styled from 'styled-components'; 

function Card(props) {
     
   const handleClick=(pro,e)=>{
       console.log("props details")
       let id = props.id;
       props.remove(id)

   }
  return (
       
    <Conatiner style={{ backgroundColor: props.inputColor }}><P>{props.card}</P><Box onClick={()=>{handleClick(props)}}>{props.de}</Box></Conatiner>
  )
}

export default Card

const Box = styled.div`
// display: none;
width: 100px; 
// background-color: red;
display:flex; 
flex-direction: row;
padding-bottom: 80%;
align-items: center;
justify-content: end;

`
const P = styled.div`
// background-color: red;
width:100%;
padding-top: 25%;
padding-left: 50%;

`

const Conatiner = styled.div`
    cursor: pointer; 
    width: 120px;
    height: 120px;
    // padding: 0.2rem 0.2rem 0.2rem ;
    display:flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    background-color: #${props => props.inputColor};
    box-shadow: 0 0 10px rgb(0 0 0 / 20%);
    margin-left: 10px;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    
`