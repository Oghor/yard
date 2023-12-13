import React from 'react'
import styled from "styled-components";

export const Button = styled.button`
  width: 285px;
  padding: 15px;
  border-radius: 8px;
  background: #f63;
  color: #fff;
  /* text-align: center; */
  font-size: 20px;
  font-weight: 500;
  border: none;
  outline: none;
@media screen and (max-width: 500px){
   &&.button-full {
    width: 100%;
  }
}
 
`;
const button = ({text, classNme}) => {
  return (
    <Button className={classNme}>{text}</Button>
  )
}

export default button
