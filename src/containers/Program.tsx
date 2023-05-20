import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Program } from '../types/general'
import useKeypress from '../hooks/useKeyPress';

type ProgramlProps = {
    item: Program;
};

const Nav = ({ item }: ProgramlProps): JSX.Element => {
    const navigate = useNavigate();
    const [backPressed, setBackPressed] = useState(false);

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
        <h1>
            {item.title}
        </h1>
    )
};

export default Nav;