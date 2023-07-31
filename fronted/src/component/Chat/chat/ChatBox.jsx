import { useContext ,useEffect ,useState } from "react";
import {Box} from "@mui/material";
import { AccountContext } from "../../../context/Accountprovider";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { getConversation } from "../../../Service/api";

const ChatBox = () =>{
    const { person, account } = useContext(AccountContext);
  const [conversation ,setConversation] = useState({});
    useEffect(() =>{
        const getConversationDetails = async() =>{
        let data = await getConversation({ senderid: account.sub , receiverid: person.sub});
        setConversation(data);
        }
        getConversationDetails();
    }, [person.sub] );

 return (

    <Box>
       <ChatHeader person={person} />
       <Messages person={person} conversation = {conversation}/>
    </Box>
 )
}
export default ChatBox;