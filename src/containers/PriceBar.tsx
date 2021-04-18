import * as React from 'react';
import LivePrice from '../components/LivePrice';
import { HStack, StackDivider, Box } from '@chakra-ui/react';
function PriceBar() {
	return (
		<Box borderRadius='md' borderWidth='1px' p='10px'>
			<HStack divider={<StackDivider borderColor='gray.200' />} spacing={3}>
				<LivePrice code='S&P 500' price={4191.0} change={20.8} up={true} />
				<LivePrice code='S&P 500' price={4191.0} change={20.8} up={true} />
				<LivePrice code='S&P 500' price={4191.0} change={20.8} up={true} />
				<LivePrice code='S&P 500' price={4191.0} change={20.8} up={true} />
				<LivePrice code='S&P 500' price={4191.0} change={20.8} up={true} />
			</HStack>
		</Box>
	);
}

export default PriceBar;
