import './App.css';
import { Flex, Title } from '@mantine/core';

function Toolbar() {
  return (
    <Flex justify={'end'}>
      <Title order={2} style={{ marginTop: '10px', marginRight: '10px' }}>
        Movie Reviewer
      </Title>
    </Flex>
  );
}

export default Toolbar;
