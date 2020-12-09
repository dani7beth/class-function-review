import logo from './logo.svg';
import './App.css';
import { Button, Container, Header } from 'semantic-ui-react';
import Contacts from './classes/Contacts';
import {useState} from 'react';

function App() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <Container>
      <Header as="h1">Lifecycle and Class/Function Review</Header>
      <Button onClick={() => setShowContacts(!showContacts)}>
        {showContacts ? "Hide Contacts" : "Show Contacts"}
      </Button>
      {showContacts && <Contacts />}
      
    </Container>
  );
}

export default App;
