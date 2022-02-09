import React from 'react';
import styled from '@emotion/styled';

const ContenedorHeader = styled.div`
    background-color: #26c6da;
    padding: 10px;
    font-weight: bold;
    color:#ffffff;
`;

const TextoHeader = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: 'Slabo 27px', serif;
  text-align: center;
`;

const Header = ({titulo}) => {
  return (
  <div>
       <ContenedorHeader>
          <TextoHeader>{titulo}</TextoHeader>
      </ContenedorHeader> 
     
  </div>
  );
};

export default Header;
