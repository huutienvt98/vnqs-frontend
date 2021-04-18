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
import Orders from '../components/Orders';

function OrderPanel() {
	return (
		<Box borderWidth='1px' borderRadius='md'>
			<Tabs isLazy={true}>
				<TabList bgColor='gray.100'>
					<Tab>Open Orders</Tab>
					<Tab>Closed Orders</Tab>
					<Tab>Order History</Tab>
					<Tab>Balance</Tab>
				</TabList>

				<TabPanels overflowY='scroll' maxHeight={500}>
					<TabPanel>
						<Box>
							<Orders />
						</Box>
					</TabPanel>
					<TabPanel>
						<Box>
							<Orders />
						</Box>
					</TabPanel>
					<TabPanel>
						<Box>
							<Orders />
						</Box>
					</TabPanel>
					<TabPanel>
						<Box>
							<Orders />
						</Box>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
}

export default OrderPanel;
