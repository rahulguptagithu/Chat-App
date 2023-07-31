import { useContext,useState,useEffect,useRef } from "react";
import {Box , styled} from "@mui/material";
import { AccountContext } from "../../../context/Accountprovider";
import { getMessages,newMessage} from '../../../Service/api';
//component
import Footer from "./Footer";
import Message from "./Message";


const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;
const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`;

const Container = styled(Box)`
  padding : 1px 20px;

`


const Messages = ({person , conversation}) =>{

    const [value , setValue] = useState('');
    const [message,setMessage] = useState([]);
    
    const [file ,setFile] = useState();
    const [image, setImage] = useState('');
    
    const scrollRef = useRef();
    const { account,socket,newMessageFlag,setNewMessageFlag } = useContext(AccountContext);
    const [inMessage, setInMessage] = useState(null);
    useEffect(() =>{
      socket.current.on('getMessage', data =>{
        setInMessage({
          ...data,
          createdAt : Date.now()
        })
      })
    },[]);

useEffect(() =>{
        const getMessageDetails = async() =>{
          let data = await getMessages(conversation._id);
          setMessage(data);
        }
    conversation._id && getMessageDetails();
    },[person._id,conversation._id, newMessageFlag])
    
    useEffect(() =>{
      scrollRef.current?.scrollIntoView({transition : 'smooth'})
    },[message])


    useEffect(() => {
      inMessage && conversation?.members?.includes(inMessage.senderid) && 
          setMessage((prev) => [...prev, inMessage]);
  }, [inMessage, conversation]);

    const sendText = async(e)=>{
    const code= e.keyCode || e.which;
    if(code === 13){
        let message ={};
        if(!file){
         message ={
            senderid: account.sub,
            receiverid: person.sub,
            conversationid : conversation._id,
            type:'text',
            text: value
        }
    }else{
         message ={
            senderid: account.sub,
            receiverid: person.sub,
            conversationid : conversation._id,
            type:'file',
            text: image
        }
    }

     socket.current.emit('sendMessage',message);

       await newMessage(message);
       setValue('');
       setFile('');
       setImage('');
       setNewMessageFlag(prev => !prev)
    }
    }
    return (

   <Wrapper>
           <Component>
               {
                message && message.map(message =>(
                <Container ref={scrollRef}>
                  <Message message={message}/>
                </Container>
                ))
               }
           </Component>
           <Footer
           sendText = {sendText}
           setValue = {setValue}
           value = {value}
           file={file}
           setFile = {setFile}
           setImage={setImage}
           />
   </Wrapper>
       
    )
}

export default Messages;