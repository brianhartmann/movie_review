import { Table } from '@mantine/core';
import { IconPencil } from '@tabler/icons-react';

function ReviewTable() {
  const movies = [
    { id: 1, title: 'Wolf of Wall Street', rating: 9.3, dateAdded: 'March 14, 2022', },
    { id: 2, title: '500 Days of Summer', rating: 8.4, dateAdded: 'December 8, 2021' },
  ]
  const rows = movies.map((movies) => (
    <Table.Tr key={movies.id}>
      <Table.Td>{movies.title}</Table.Td>
      <Table.Td>{movies.rating}</Table.Td>
      <Table.Td>{movies.dateAdded}</Table.Td>
      <Table.Td>
      <IconPencil
      size={22}
      stroke={1.5}
      color="purple"
    />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table style={{ marginTop: '10px' }}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Title</Table.Th>
          <Table.Th>Rating</Table.Th>
          <Table.Th>Date Watched</Table.Th>
          <Table.Th>Edit</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

export default ReviewTable;