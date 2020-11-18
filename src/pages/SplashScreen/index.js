import React, { useEffect } from 'react';

import { Container } from './styles';

const pages = ({ navigation }) => {

    useEffect(() => {
        navigation.replace('Profiles');
    }, []);

    return <Container />
}

export default pages;