import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAPI } from '../api/apiContext';
import filterTitles from '../utils/filterTitles';
import slugify from '../utils/slugify';
import * as style from '../styleVars/variables';
import useKeypress from '../hooks/useKeyPress';

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
        if (index > 0 ) {
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
                        <LeftArrow onClick={() => prev(firstItemIndex)} disabled={firstItemIndex === 0}>
                            &lt;
                        </LeftArrow>
                        <CarouselContent>
                            {titles?.slice(firstItemIndex, indexLimit).map((item, i) => 
                                <StyledLink 
                                    to={`/${slugify(item.title)}`} 
                                    onMouseEnter={() => setHoverIndex(i + firstItemIndex)}
                                    onMouseLeave={() => setHoverIndex(-1)}
                                    key={item.title}
                                    active={(i === 0 && hoverIndex === -1)?.toString()}
                                    isloading={isloading?.toString()}
                                    >
                                        <Artwork src={item.image} alt={item.title} aria-label={item.title} />
                                </StyledLink>
                            )}
                        </CarouselContent>
                        <RightArrow onClick={() => next(firstItemIndex)} disabled={(firstItemIndex === titles.length - 1)}>
                            &gt;
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
            margin: ${style.spacing.md};
        }
        @media (min-width: ${style.desktop_xl}) {
            width: unset;
            max-width: 339px;
        }
    }
`;

const Arrow = styled.button`
    ${style.arrow};
    &:disabled {
        opacity: 0;
    }
`;

const LeftArrow = styled(Arrow)`
    left: ${style.spacing.sm};
`;

const RightArrow = styled(Arrow)`
    right: ${style.spacing.sm};
`;

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
    ${style.width()}
    @media (min-width: ${style.desktop}) {
        max-width: ${style.mobile};
        height: 100%;
    }
`;

export default Carousel;