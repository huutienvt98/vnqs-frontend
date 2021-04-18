import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from '@chakra-ui/react';

function Orders() {
	return (
		<Table variant='simple'>
			<Thead>
				<Tr>
					<Th>Time</Th>
					<Th>All pairs</Th>
					<Th>All Types</Th>
					<Th>Buy/Sell</Th>
					<Th>Price</Th>
					<Th>Price</Th>
					<Th>Amount</Th>
					<Th>Executed</Th>
					<Th>Unexecuted</Th>
				</Tr>
			</Thead>
			<Tbody>
				<Tr>
					<Td>
						<Box h={300}></Box>
					</Td>
				</Tr>
			</Tbody>
		</Table>
	);
}
export default Orders;
