import styled from 'styled-components';
import { Form } from "formik";

export const SignUpDiv = styled.div`
  @media (max-width: 768px) {
    margin: 5%;
  }
`;

export const FormDiv = styled(Form)`
  position: relative;
  top: 20px;
`;

export const Title = styled.h2`
  color: darkblue;
  margin: 10px 0;
`;

export const Span = styled.span`
  color: grey;
  margin: 10px 0;
`;

export const ErrorSpan = styled.span`
    margin: 4px;
    color: red;
`;