import React from 'react';
import styled from 'styled-components';
import * as style from '../styleVars/variables';

interface DivideListProps {
    list: string[];
}

const DividelList = ({ list }:  DivideListProps): JSX.Element => {
    return (
        <List>
            {list?.map((item, i) => {
                return (
                    <ListItem key={item}>
                        {item}
                    </ListItem>
                )
            })}
        </List>
    )
};

const List = styled.ul`
    padding: 0;
    margin: auto;
    @media (min-width: ${style.desktop}) {
        margin: auto 0;
    }
`;

const ListItem = styled.li`
    display: inline;
    &:after {
        content: ' | ';
        padding: ${style.spacing.sm};
    }
    &:last-child:after { 
        content: ''; 
    }
`;

export default DividelList;