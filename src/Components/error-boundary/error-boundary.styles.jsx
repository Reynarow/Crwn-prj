import styled from 'styled-components';

export const ErrorImageOverlay = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({imageUrl}) =>`url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 75vh;
  height: 75vh;
`;

export const ErrorImageText = styled.h2`
  font-size: 22px;
  font-family:'Roboto',sans-serif;
  color: #29388a;
`;

