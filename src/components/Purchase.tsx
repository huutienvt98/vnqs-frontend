import * as React from 'react';
import {
	Box,
	NumberInput,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInputField,
	NumberInputStepper,
	Flex,
	Spacer,
	Text,
	Button,
} from '@chakra-ui/react';

type PurchaseProps = { action: string };
function Purchase({ action }: PurchaseProps) {
	return (
		<Box w='100%' p={1}>
			<Box>
				<NumberInput allowMouseWheel>
					<NumberInputField placeholder='Price' />
					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>
			</Box>

			<Box mt={5}>
				<NumberInput allowMouseWheel>
					<NumberInputField placeholder='Amount' />
					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>
			</Box>

			<Flex mt={5}>
				<Text fontSize='sm'>Available: </Text>
				<Spacer />
				<Text fontSize='sm'>0</Text>
			</Flex>
			<Flex mt={2}>
				<Text fontSize='sm'>Volumn: </Text>
				<Spacer />
				<Text fontSize='sm'>0</Text>
			</Flex>
			<Flex mt={2}>
				<Text fontSize='sm'>Margin: </Text>
				<Spacer />
				<Text fontSize='sm'>0</Text>
			</Flex>
			<Flex mt={2}>
				<Text fontSize='sm'>Fee: </Text>
				<Spacer />
				<Text fontSize='sm'>0</Text>
			</Flex>

			<Button colorScheme={action === 'buy' ? 'green' : 'red'} mt={5} w='100%'>
				{action}
			</Button>
		</Box>
	);
}

export default Purchase;
