import React from 'react';

import {
    Container,
    Header,
    Logo,
    IconContainer,
    IconButton,
    EditIcon,
    Content,
    Title,
    ProfilesList,
    Profile,
    ProfilePicture,
    ProfileName,
    AddIcon
} from './styles';

const pages = () => {
    return (
        <Container>
            <Header>
                <Logo source={require('../../images/logo.png')} />
                <IconContainer>
                    <IconButton>
                        <EditIcon />
                    </IconButton>
                </IconContainer>
            </Header>
            <Content>
                <Title>Quem está assistindo?</Title>
                <ProfilesList>
                    <Profile>
                        <ProfilePicture source={require('../../images/profile01.jpg')} />
                        <ProfileName>GUILHERME</ProfileName>
                    </Profile>
                    <Profile>
                        <ProfilePicture source={require('../../images/profile02.jpg')} />
                        <ProfileName>GABRIELA</ProfileName>
                    </Profile>
                    <Profile>
                        <AddIcon />
                        <ProfileName>Adicionar perfil</ProfileName>
                    </Profile>
                </ProfilesList>
            </Content>
        </Container>
    );
}

export default pages;