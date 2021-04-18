import * as React from 'react';
import {
	Box,
	Tabs,
	TabList,
	TabPanel,
	TabPanels,
	Tab,
	HStack,
	StackDivider,
} from '@chakra-ui/react';
import Purchase from '../components/Purchase';

function PurchasePanel() {
	return (
		<Box borderWidth='1px' borderRadius='md'>
			<Tabs>
				<TabList bgColor='gray.100'>
					<Tab>Limit</Tab>
					<Tab>Market</Tab>
					<Tab>Stop Limit</Tab>
					<Tab>Stop Market</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<Box>
							<HStack divider={<StackDivider borderColor='gray.200' />} spacing={3}>
								<Purchase action='buy' />
								<Purchase action='sell' />
							</HStack>
						</Box>
					</TabPanel>
					<TabPanel>
						<Box>
							<HStack divider={<StackDivider borderColor='gray.200' />} spacing={3}>
								<Purchase action='buy' />
								<Purchase action='sell' />
							</HStack>
						</Box>
					</TabPanel>
					<TabPanel>
						<Box>
							<HStack divider={<StackDivider borderColor='gray.200' />} spacing={3}>
								<Purchase action='buy' />
								<Purchase action='sell' />
							</HStack>
						</Box>
					</TabPanel>
					<TabPanel>
						<Box>
							<HStack divider={<StackDivider borderColor='gray.200' />} spacing={3}>
								<Purchase action='buy' />
								<Purchase action='sell' />
							</HStack>
						</Box>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
}
export default PurchasePanel;
