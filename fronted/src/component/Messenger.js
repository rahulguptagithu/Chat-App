import { useContext } from 'react';

import {AppBar , Toolbar , styled} from '@mui/material'
import { AccountContext } from '../context/Accountprovider';
import LoginDialogue from './Account/LoginDialogue';
import { Box } from '@mui/system';
import Chatdialogue from './Chat/Chatdialogue';



const Component = styled(Box)`
    height:100vh;
    background: #DCDCDC;
`
const Header = styled(AppBar)`
    height:125px;
    background-color: #00A884;
    box-shadow:none;
   
`
const LoginHeader = styled(AppBar)`
   height:180px;
   background-color: #00bfa5;
   box-shadow:none;


`
const Messenger =() =>{
   const { account }= useContext(AccountContext);
    return(
        <Component>
           {
                account ? 
                <>
                    <Header>
                        <Toolbar></Toolbar>
                    </Header>
                    <Chatdialogue />
                </>
                :
                <>
                    <LoginHeader>
                        <Toolbar></Toolbar>
                    </LoginHeader>
                    <LoginDialogue />
                </>
            }
        </Component>
    )
}

export default Messenger;