import {useContext } from 'react';
import { MoreVert } from "@mui/icons-material";
import {Box ,Typography , styled} from "@mui/material";
import {Search } from "@mui/icons-material";
import { AccountContext } from '../../../context/Accountprovider';
// import { defaultProfilePicture } from "../../../constant/Data";
const Header = styled(Box)`
    height: 44px;
    background : #ededed;
    padding:8px 16px;
    display: flex;
    align item: center;

`
const Image = styled('img')({
    height: 40,
    weight: 40,
    objectfit : 'cover',
    borderRadius:'50%'
});
const Name = styled(Typography)`
    margin-left: 12px !important;
`;
const Status = styled(Typography)`
    font-size: 12px !important;
    color: rgb(0, 0, 0, 0.6);
    margin-left: 12px !important;
`;

// by using & > svg we change the child css in parent css
const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 24px;
        color: #000;
    }
`;


const ChatHeader =({person})=>{
const {activeUsers} = useContext(AccountContext);
    return (

       <Header>
        <Image src ={person.picture} alt ="dp"/>
        <Box>
            <Name>{person.name}</Name>
            <Status>{activeUsers?.find(user => user.sub === person.sub) ? 'online' : 'offline'}</Status>
        </Box>
        <RightContainer>
            <Search />
            <MoreVert/>
        </RightContainer>
       </Header>
    )
}
export default ChatHeader;