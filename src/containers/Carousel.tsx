import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAPI } from '../api/apiContext';
import filterTitles from '../utils/filterTitles';
import slugify from '../utils/slugify';
import * as style from '../styleVars/variables';
import useKeypress from '../hooks/useKeyPress';

import Card from '../components/Card'

type CarouselProps = {
  type: 'movie' | 'series' | null;
};
  
const Carousel = ({ type }: CarouselProps)=> {
  const { data, isloading } = useAPI();

  const navigate = useNavigate();
  const titles = type && filterTitles(data, 'type', type) || data;

  const [firstItemIndex, setfirstItemIndex] = useState(0);
  const [indexLimit, setIndexLimit] = useState(6);
  const [enterPressed, setEnterPressed] = useState(false);
  const [leftPressed, setLeftPressed] = useState(false);
  const [rightPressed, setRightPressed] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(-1);

  const next = (index: number) => {
    if (index < titles.length - 1) {
      setfirstItemIndex(prevState => prevState + 1);
      setIndexLimit(prevState => prevState + 1);
    }
    setLeftPressed(false);
    setRightPressed(false);
  };
  
  const prev = (index: number) => {
    if (index > 0) {
      setIndexLimit(prevState => prevState - 1);
      setfirstItemIndex(prevState => prevState - 1);
    }
    setLeftPressed(false);
  };
  
  useKeypress(37, () => {
    setLeftPressed(true);
  });

  useKeypress(39, () => {
    setRightPressed(true);
  });

  useKeypress(13, () => {
    setEnterPressed(true);
  });

  useEffect(() => {
    leftPressed && prev(firstItemIndex);
    rightPressed && next(firstItemIndex);
    enterPressed && navigate(`/${slugify(titles[hoverIndex !== -1 ? hoverIndex + firstItemIndex : firstItemIndex].title)}`);
  }, [firstItemIndex, titles, enterPressed, leftPressed, rightPressed, hoverIndex]);
    return (
    <>
      <CarouselContainer>
        <CarouselWrapper>
          <CarouselContentWrapper>
            <LeftArrow onClick={() => setLeftPressed(true)} disabled={firstItemIndex === 0}>
              <ArrowContent aria-label="Previous">&lt;</ArrowContent>
            </LeftArrow>
            <CarouselContent>
              {titles?.slice(firstItemIndex, indexLimit).map((item, i) => 
                <Card 
                  item={item} 
                  index={i} 
                  hoverIndex={hoverIndex} 
                  firstItemIndex={firstItemIndex} 
                  isloading={isloading} 
                  setHoverIndex={setHoverIndex}
                  key={i}
                />
              )}
            </CarouselContent>
            <RightArrow onClick={() => setRightPressed(true)} disabled={(firstItemIndex === titles.length - 1)}>
              <ArrowContent aria-label="Next">&gt;</ArrowContent>
            </RightArrow>
            </CarouselContentWrapper>
        </CarouselWrapper>
      </CarouselContainer>
    </>
  );
};

const CarouselContainer = styled.div`
  ${style.width()}
  ${style.row()}
`;

const CarouselWrapper = styled.div`
  display: flex;
  ${style.width()}
  position: relative;
`;

const CarouselContentWrapper = styled.div`
  ${style.width()}
  padding: ${style.spacing.sm};
  overflow: hidden;
`;

const CarouselContent = styled.div`
  display: flex;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
      display: none;
  }
  & > * {
    flex-shrink: 0;
    flex-grow: 1;
    ${style.width()}
    margin: ${style.spacing.sm} ${style.spacing.sm} 0 0;
    @media (min-width: ${style.desktop}) {
      max-width: 168px;
      margin: 0;
    }
    @media (min-width: ${style.desktop_xl}) {
      width: unset;
      max-width: 339px;
    }
  }
`;

const Arrow = styled.div<{ disabled: boolean }>`
  ${style.arrow};
  ${({ disabled }) => disabled && `
    opacity: 0;
  `}
`;

const ArrowContent= styled.span`
  ${style.centeredContent};
`;

const LeftArrow = styled(Arrow)`
  left: ${style.spacing.sm};
`;

const RightArrow = styled(Arrow)`
  right: ${style.spacing.sm};
`;

export default Carousel;