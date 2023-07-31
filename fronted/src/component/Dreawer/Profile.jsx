import  { useContext } from 'react';
import { Box , Typography, styled } from "@mui/material";

import { AccountContext } from '../../context/Accountprovider';

const Imagecontainer = styled(Box)`
    display : flex;
    justify-content : center;
`
const Image  = styled('img')({
    width : 200,
    heigth : 200,
    borderRadius : '50%',
    padding : '25px 0px'

})

const BoxWapper = styled(Box)`
   background : #FFFFFF;
   padding :  12px 30px 2px;
   box-Shadow : 0 1px 3px rgba(0,0,0,0.08);
   & : first-child{
    font-size : 13px;
    color : #009688;
    font-weight: 200px
   }
   & : last-child{
    margin : 14px 0px;
    color : #4A4A4A;
   }

`;

const DescriptionContainer = styled(Box)`
    padding : 15px 20px 28px 30px;
    & > p{
    font-size : 13px;
    color : #8696a0;
    }
`;



const Profile = () =>{
  
    const { account } = useContext(AccountContext);
    return (
      <>
      <Imagecontainer>
       <Image src={account.picture} alt="pd" />
      </Imagecontainer>
      <BoxWapper >
       <Typography>Your Name</Typography>
       <Typography>{account.name}</Typography>
      </BoxWapper>
      <DescriptionContainer>
       <Typography>This is your username or pin .This name will be visible to your whatsApp contact</Typography>
      </DescriptionContainer>
      <BoxWapper>
         <Typography>About</Typography>
        <Typography>Eat! Sleep! Code! Repeat!</Typography>
      </BoxWapper>
      </>
    )
};

export default Profile;