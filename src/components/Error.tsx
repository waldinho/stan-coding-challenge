import React from 'react';
import styled from 'styled-components';
import * as style from '../styleVars/variables';

const Error = (): JSX.Element => <ErrorMessage data-testid="error">An unknown error occurred, please try again later.</ErrorMessage>;

const ErrorMessage = styled.h2`
    color: ${style.grey};
    margin: ${style.spacing.lg} ${style.spacing.md} 0;
`;

export default Error;