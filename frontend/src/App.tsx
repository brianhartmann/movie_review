import './App.css';
import { Title, Container, Input, Center, Button} from '@mantine/core';
import Toolbar from './Toolbar';
import ReviewTable from './ReviewTable';

function App() {
  return (<>
    <Toolbar />
    <Container size={'80%'}>
      <Center>
      <Title order={3} style={{ marginTop: '10px', marginLeft: '10px' }}>
        Hey Brian! Please review a movie.
      </Title>
      </Center>
      <Container size={'50%'} style={{ marginTop: '10px', marginBottom: '10px' }}>
        <Center style={{ marginTop: '10px', padding: '10px' }}>
            <Input style={{marginRight: '10px'}} placeholder="Title" />
            <Input placeholder="Rating out of 10" />
            <Button style={{ marginLeft: '10px' }} variant="outline">
              Submit
            </Button>
        </Center>
        <ReviewTable />
      </Container>

    </Container>
    </>
  );
}

export default App;
