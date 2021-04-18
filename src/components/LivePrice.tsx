import * as React from 'react';
import { Box, Stack, Flex, Text, Spacer, HStack } from '@chakra-ui/react';

type LivePriceProps = { code: string; price: number; change: number; up: boolean };
function LivePrice({ code, price, change, up }: LivePriceProps) {
	const percentage: string = ((change / price) * 100).toFixed(2);
	return (
		<Box w='100%'>
			<Stack>
				<Flex>
					<Text fontSize='sm'>{code}</Text>
					<Spacer />
					<Text fontSize='sm'>{price}</Text>
				</Flex>
				<HStack spacing='20px'>
					<Text fontSize='xl' color={up ? 'green' : 'red'}>
						{percentage} %
					</Text>
					<Text fontSize='sm' color={up ? 'green' : 'red'}>
						{change}
					</Text>
				</HStack>
			</Stack>
		</Box>
	);
}

export default LivePrice;
