import React from 'react'
import styled from 'styled-components';
import { useDrag } from "react-dnd";

function Card2(props) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "div",
        item: { id: props.id },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));
  return (
    <Conatiner  ref={drag}>{props.card}</Conatiner> 
  )
}

export default Card2

 
const Conatiner = styled.div`
cursor: move;
width: 120px;
height: 70px;
// padding: 0.2rem 0.2rem 0.2rem ;
display:flex; 
align-items: center;
justify-content: center;
font-weight: bold;
background-color: #bc8f8f;
box-shadow: 0 0 10px rgb(0 0 0 / 20%);
margin-left: 10px;
padding-top: 10px;
padding-right: 10px;
padding-bottom: 10px;
padding-left: 10px;
    
`