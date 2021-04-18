import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';
import AreaGraph from './AreaGraph';

type PriceGraphProps = { name: string; value: number; percentage: number };
function PriceGraph({ name, value, percentage }: PriceGraphProps) {
	return (
		<Box borderWidth='1px' borderRadius='md' textAlign='center' pt={5}>
			<Text fontSize='3xl' m={3} color='navy'>
				{name}
			</Text>
			<Text fontSize='xl' m={3} color='navy'>
				{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
			</Text>
			<Text fontSize='l' m={3} color={percentage < 0 ? 'red' : 'green'}>
				{percentage} %
			</Text>

			<Box>
				<AreaGraph green={percentage > 0} />
			</Box>
		</Box>
	);
}

export default PriceGraph;
