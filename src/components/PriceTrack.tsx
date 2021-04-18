import * as React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

type Data = {
	name: string;
	price: number;
	percentage: number;
};
type PriceTrackProps = { data: Data[] };
function PriceTrack({ data }: PriceTrackProps) {
	return (
		<Table size='sm' overflow='scroll'>
			<Thead>
				<Th>Pairs</Th>
				<Th>Last Price</Th>
				<Th>Change</Th>
			</Thead>
			<Tbody>
				{data.map((d) => {
					return (
						<Tr>
							<Td>{d.name}</Td>
							<Td isNumeric>{d.price}</Td>
							<Td color={d.percentage < 0 ? 'red' : 'green'} isNumeric>
								{d.percentage}%
							</Td>
						</Tr>
					);
				})}
			</Tbody>
		</Table>
	);
}
export default PriceTrack;
