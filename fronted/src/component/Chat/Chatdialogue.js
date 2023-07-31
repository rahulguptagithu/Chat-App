
// import LoginDialogue from "../Account/LoginDialogue";
import { useContext } from 'react';
import { Dialog ,Box,styled} from '@mui/material';
import { AccountContext } from '../../context/Accountprovider';
import Menu from './menu/Menu';
import Emptychat from './chat/Emptychat';
import ChatBox from './chat/ChatBox';


const Component=styled(Box)`
   display:flex;
`
const LeftComponent = styled(Box)`
      min-width:450px;
`
const RightComponent = styled(Box)`
   width:75%;
   min-width:300px;
   height:100%;
   border-left: 1px solid rgba(0,0,0,.14);
`

const DialogueStyle ={
    height: "95%" ,
    margin:"20px",
    width: "100%",
    maxWidth:"100%",
    maxHeight:"100%",
    borderRadius:0,
    boxShadow: "none",
    overFlow:"hidden",
}
const Chatdialogue = ()=>{

    const { person } = useContext(AccountContext);
    return(
       <Dialog
       open={true} 
    //    BackdropProps={{style: {backgroundColor: 'unset'}}}
       PaperProps={{ sx: DialogueStyle }}
       hideBackdrop={true}
       maxWidth={'md'}
       >
        <Component>
            <LeftComponent>
             <Menu />
            </LeftComponent>

            <RightComponent>
              { Object.keys(person).length ? <ChatBox /> : <Emptychat /> }
            </RightComponent>
        </Component>

       </Dialog>
    )
}
export default Chatdialogue;
