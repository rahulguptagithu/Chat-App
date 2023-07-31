import { useContext } from 'react'; 
import { Dialog ,Box , Typography, List , ListItem , styled} from '@mui/material';
import { qrCodeImage } from '../../constant/Data';
import { AccountContext } from '../../context/Accountprovider';
import {  GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { addUser } from '../../Service/api';


const Componet = styled(Box)`
      display:flex;

`;
const Container = styled(Box)`
      padding : 56px 0 56px 56px;

`;
const Qrcode = styled('img')({
     heigth:265,
     width: 256,
     margin: '50px 0 0 50px'
})

const  Title=styled(Typography)`
       font-size:26px;
   color: #525252;
   font-wigth: 300;
   font-family: inherit;
   margin-bottom: 25px;

`
const Styledcss = styled(List)`
  & li{
    padding:0;
    margin-top:15px;
    font-size:18px;
    line-heigth:28px;
    color:#4a4a4a;
  }

`
const DialogueStyle ={
    height: "90%" ,
    marginTop: "12%",
    width: "70%",
    maxWidth:"100%",
    maxHeight:"100%",
    boxShadow: "none",
    overFlow:"hidden"
}
const LoginDialogue =()=>{
  const {account} = useContext(AccountContext);
   
    const {setAccount} = useContext(AccountContext);

const onLoginSuccess= async(res)=>{
      const decoded = jwt_decode(res.credential);
      console.log(decoded); 
      setAccount(decoded);
      console.log(account);
      await addUser(decoded);
    }

const onLoginError = (res)=>{
        console.log('loginfailed',res);
    }
 return(
       <Dialog open={true}
        PaperProps = {{sx : DialogueStyle}}
        hideBackdrop={true}
       >
        <Componet>
          <Container>
           <Title>
            To use what's app on your Computer
           </Title>
           <Styledcss>
           <ListItem>1. Open What's app on your Phone</ListItem>
            <ListItem>2. Tap Menu : Setting sw and Select What's app Web</ListItem>
            <ListItem>3. Point your phone to this screen to capture the code</ListItem>
           </Styledcss>
          </Container>
             <Box style={{position:"relative"}}>
               <Qrcode src={qrCodeImage} alt="QR Code" />
             <Box style={{position:"absolute" ,top:"50%", transform:"translateX(25%)"}}>
               <GoogleLogin 
               onSuccess={onLoginSuccess}
               onError={onLoginError}
               
               />
            
               </Box>
             </Box>
        </Componet>
       </Dialog>

 );

}

export default LoginDialogue;