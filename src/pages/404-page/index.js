import React from 'react';
import { ErrorDivContainer, ErrorDivContentContainer, ErrorDivH1, ErrorDivP, ErrorImg } from "./style";

const NotFound = ({ location }) => (
    <ErrorDivContainer>
    <ErrorDivContentContainer>
      <ErrorDivH1>Error 404</ErrorDivH1>
      <ErrorDivP>
        No match found for <strong>{location.pathname}</strong>
      </ErrorDivP>
    </ErrorDivContentContainer>
    <ErrorImg />
  </ErrorDivContainer>
);

export default NotFound;