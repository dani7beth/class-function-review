import logo from './logo.svg';
import './App.css';
import Dog from './Function/dog';
import { Button, Container, Header } from 'semantic-ui-react';
import Contacts from './classes/Contacts';
import DogClass from './classes/DogClass'
import {useState} from 'react';

function App() {
  const [showFunctions, setShowFunctions] = useState(false);
  const [showClasses, setShowClasses] = useState(false);
  return (
    
    <Container>
      <Header as="h1">Lifecycle and Class/Function Review</Header>
      <Button onClick={() => setShowClasses(!showClasses)}>
        {showClasses ? "Hide Classes" : "Show Classes"}
      </Button>
      <Button onClick={() => setShowFunctions(!showFunctions)}>
        {showFunctions ? "Hide Functions" : "Show Functions"}
      </Button>
      {showClasses && <Contacts />}
      {showFunctions && <Dog />}
      {showClasses && <DogClass />}
    </Container>
  );
}

export default App;
