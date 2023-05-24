import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Program } from '../types/general'
import slugify from '../utils/slugify';
import * as style from '../styleVars/variables';

type CarouselProps = {
  item: Program;
  index: number;
  isloading: boolean;
  hoverIndex: number;
  firstItemIndex: number;
  setHoverIndex: Dispatch<SetStateAction<number>>;
};

const Card = ({ item, index, isloading, hoverIndex, setHoverIndex }: CarouselProps): JSX.Element => {
  const { title, image } = item;
  return (
    <StyledLink 
      to={`/${slugify(title)}`}
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(-1)}
      key={title}
      active={(index === 0 && hoverIndex === -1)?.toString()}
      isloading={isloading?.toString()}
      >
      <Artwork src={image} alt={title} aria-label={title} />
    </StyledLink>
  )
};

const StyledLink = styled(Link)<{ active?: string, isloading: string }>`
  ${({ isloading }) => isloading === 'true' && `
    background-color: ${style.grey};
    min-width: 321px;
    height: 590px;
  `}
  @media (min-width: ${style.desktop}) {
    margin: 0;
    padding: ${style.spacing.md};
    ${({ active }) => active === 'true' && `
    ${style.boxShadowBlue}
    position: relative;
    `};
    ${({ isloading }) => isloading === 'true' && `
      ${style.boxShadowBlack}
      background-color: ${style.grey}; 
      margin: ${style.spacing.md};
      padding: 0;
      min-width: 321px;
      height: 481px;
    `}
    &:hover {
      ${style.boxShadowBlue}
      ${({ isloading }) => isloading === 'true' && `
      ${style.boxShadowBlack}
      `}
      position: relative;
    }
  }
`;

const Artwork = styled.img`
  ${style.width}
  @media (min-width: ${style.desktop}) {
    max-width: ${style.mobile};
    height: 100%;
  }
`;

export default Card;