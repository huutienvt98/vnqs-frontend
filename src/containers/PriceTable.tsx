import * as React from 'react';

import { Box, Tabs, TabList, TabPanel, TabPanels, Tab } from '@chakra-ui/react';
import PriceTrack from '../components/PriceTrack';
import { BTCpriceData, ETHPriceData } from '../utils/data';
import { convertData } from '../utils/utils';

function PriceTable() {
	const BTCPrice = convertData(BTCpriceData);
	const ETHPrice = convertData(ETHPriceData);
	console.log(BTCPrice);
	return (
		<Box borderWidth='1px' borderRadius='md'>
			<Tabs isLazy={true}>
				<TabList>
					<Tab>BTC</Tab>
					<Tab>ETH</Tab>
					<Tab>NEO</Tab>
					<Tab>USDT</Tab>
					<Tab>DAI</Tab>
				</TabList>

				<TabPanels overflowY='scroll' maxHeight={830}>
					<TabPanel>
						<Box>
							<PriceTrack data={BTCPrice} />
						</Box>
					</TabPanel>
					<TabPanel>
						<Box>
							<PriceTrack data={ETHPrice} />
						</Box>
					</TabPanel>
					<TabPanel>
						<Box>
							<PriceTrack data={BTCPrice} />
						</Box>
					</TabPanel>
					<TabPanel>
						<Box>
							<PriceTrack data={BTCPrice} />
						</Box>
					</TabPanel>
					<TabPanel>
						<Box>
							<PriceTrack data={BTCPrice} />
						</Box>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
}
export default PriceTable;
