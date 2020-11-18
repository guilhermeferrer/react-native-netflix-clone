import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background-color: #000;
    padding-top: 23px;
`;

export const Header = styled.View`
    justify-content: center;
    align-items: center;
    padding: 15px;
`;

export const Logo = styled.Image`
    width: 100px;
    height: 30px;
    resize-mode: contain;
`;

export const IconContainer = styled.View`
    position: absolute;
    right: 15px;
`;

export const IconButton = styled(BorderlessButton).attrs(() => ({ rippleColor: 'rgba(255, 255, 255, .6)' }))`
    padding: 5px;
`;

export const EditIcon = styled(Icon).attrs(() => ({ name: 'pen' }))`
    color: white;
    font-size: 18px;
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    padding: 25px;
`;

export const Title = styled.Text`
    color: white;
    font-size: 18px;
`;

export const ProfilesList = styled.View`
    flex-wrap: wrap;
    width: 90%;
    margin-left: 5%;
    flex-direction: row;
    padding: 20px 0;
`;

export const Profile = styled(RectButton)`
    align-items: center;
    width: 42%;
    margin: 4%;
    border-radius: 3px;
    overflow: hidden;
`;

export const ProfilePicture = styled.Image`
    width: 100px;
    height: 100px;
    resize-mode: cover;
    border-radius: 3px;
`;

export const ProfileName = styled.Text`
    text-align: center;
    margin-top: 10px;
    color: white;
`;

export const AddIcon = styled(Icon).attrs(() => ({ name: 'plus-circle' }))`
    color: white;
    font-size: 50px;
    margin-top: 20px;
`;