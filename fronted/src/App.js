import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './component/Messenger';
import Accountprovider from './context/Accountprovider';
function App() {

  const clientId ='873590679352-n0248uibq29d6fo7td8ak4sutmajlgbt.apps.googleusercontent.com'

  
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Accountprovider>
      <Messenger/>
      </Accountprovider>
    </GoogleOAuthProvider>
  );
}

export default App;
