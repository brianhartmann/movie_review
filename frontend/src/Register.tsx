import {
    Anchor,
    Box,
    Button,
    Center,
    Container,
    Group,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
  } from '@mantine/core';
  import classes from './AuthenticationTitle.module.css';
  
  import { Link } from 'react-router-dom';
import { IconArrowLeft } from '@tabler/icons-react';

export default function Register() {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Start your journey with us by creating an account.
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <PasswordInput label="Confirm Password" placeholder="Your password" required mt="md" />
        <Group justify="space-between" mt="lg" className={classes.controls}>
          <Anchor component={Link} to="/login" c="dimmed" size="sm" className={classes.control}>
            <Center inline>
              <IconArrowLeft size={12} stroke={1.5} />
              <Box ml={5}>Back to the login page</Box>
            </Center>
          </Anchor>
          <Button className={classes.control}>Submit</Button>
        </Group>
      </Paper>
    </Container>
  );
}