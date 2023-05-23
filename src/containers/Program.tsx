import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAPI } from '../api/apiContext';
import filterTitles from '../utils/filterTitles';
import useKeypress from '../hooks/useKeyPress';
import DividedList from '../components/DividedList';
import * as style from '../styleVars/variables';

type ProgramlProps = {
  id: number;
};

const Program = ({ id }: ProgramlProps): JSX.Element => {
  const { data, isloading } = useAPI();
  const navigate = useNavigate();
  const [backPressed, setBackPressed] = useState(false);

  const filteredData = filterTitles(data, 'id', id);
  const [ content ] = filteredData;
  const { title, image, rating, year, genre, language, description } = content;

  const handleBack = () => {
    setBackPressed(true);
  }

  useKeypress(8, () => {
    handleBack();
  });

  useKeypress(46, () => {
    handleBack();
  });

  useEffect(() => {
    backPressed && navigate(-1);
  }, [backPressed]);
  return (
    <ProgramContainer>
      <ProgramArtworkWrapper isloading={isloading?.toString()}>
        <Artwork src={image} alt={title}  aria-label={title}/>
      </ProgramArtworkWrapper>
      <ProgramDetailsWrapper isloading={isloading?.toString()}>
        <h2>{title}</h2>
        <DividedList list={[rating, year.toString(), genre, language ]}/>
        <p>{description}</p>
      </ProgramDetailsWrapper>
    </ProgramContainer>
  )
};

const ProgramContainer = styled.div`
  ${style.width()}
  ${style.column()}
  @media (min-width: ${style.desktop}) {
    ${style.row()}
  }
`;

const ProgramArtworkWrapper = styled.div<{ isloading: string }>`
  margin: ${style.spacing.md} ${style.spacing.sm} 0;
  ${({ isloading }) => isloading === 'true' && `
    background-color: ${style.grey};
    min-width: 321px;
    height: 590px;
  `}
  @media (min-width: ${style.desktop}) {
    padding: 0 ${style.spacing.lg};
    margin: ${style.spacing.lg} 0 ${style.spacing.sm};
    ${({ isloading }) => isloading === 'true' && `
      background-color: ${style.grey};
      padding: 0;
      margin: ${style.spacing.lg} 0 ${style.spacing.sm} ${style.spacing.lg};
      min-width: 321px;
      height: 481px;
    `}
  }
`;

const Artwork = styled.img`
  ${style.width()}
  @media (min-width: ${style.desktop}) {
    max-width: ${style.mobile};
    height: 100%;
  }
`;

const ProgramDetailsWrapper = styled.div<{ isloading: string }>`
  padding: 0 ${style.spacing.sm};
  @media (min-width: ${style.desktop}) {
    padding: ${style.spacing.lg};
    margin: ${style.spacing.lg} ${style.spacing.lg} ${style.spacing.sm} ${style.spacing.lg};
    max-width: ${style.desktop}
  }
  & > * {
    ${({ isloading }) => isloading === 'true' && `
      background-color: ${style.grey};
    `}
  }
  h2 { 
    @media (min-width: ${style.desktop}) {
    ${({ isloading }) => isloading === 'true' && `
      width: calc(${style.desktop} / 3); 
      height: ${style.spacing.xl};
    `}}
  }
  ul { 
    ${({ isloading }) => isloading === 'true' && `
      li:after {
        content: '';
      }
    `}}
    @media (min-width: ${style.desktop}) {
    ${({ isloading }) => isloading === 'true' && `
      width: calc(${style.desktop} / 1.5); 
      height: ${style.spacing.lg};
    `}}
  }
  p { 
    @media (min-width: ${style.desktop}) {
    ${({ isloading }) => isloading === 'true' && `
      width: ${style.desktop};
      height: 200px;
    `}
    }
  }
`;

export default Program;