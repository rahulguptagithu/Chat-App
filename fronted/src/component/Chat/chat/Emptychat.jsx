
import { Box, Typography ,styled , Divider} from "@mui/material";
import { emptyChatImage } from "../../../constant/Data";

const Component = styled(Box)`
    backgound:#f8f9fa;
    padding: 30px 0px;
    text-align:center;
    height: 100vh;
`;

const Container = styled(Box)`
    padding : 0 200px;
`;

const Image  = styled('img')({
    width:400,
    margintop:100
})

const Title = styled(Typography)`
    font-size:32px;
    margin:25px 0 10px 0;
    font-family : inherit;
    font-weight : 300;
    color : #41525d

`;

const SubTile = styled(Typography)`
   font-size : 13px;
   color : #667781;
   font-weight: 400;
   font-family : inherit;
`;

const Styleddivider = styled(Divider)`
     margin : 40px 0;
     opacity : 0.4;
`
const Emptychat = ()=>{
    return(
     <Component>
        <Container>
            <Image src= { emptyChatImage } alt="imag" />
            <Title>WhatsApp Web</Title>
            <SubTile>Now send and receive messeage without keeping your Phone online</SubTile>
            <SubTile>Use whatsApp up to 4 linked device and 1 phone at a time</SubTile>
            <Styleddivider />
        </Container>
     </Component>
    )
}
export default Emptychat;