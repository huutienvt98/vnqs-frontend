import * as React from 'react';
import { ChakraProvider, Box, Grid, GridItem, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import PriceBar from './containers/PriceBar';
import PriceGraph from './components/PriceGraph';
import ChartComponent from './containers/StockChart';
import PurchasePanel from './containers/PurchasePanel';
import OrderPanel from './containers/OrderPanel';
import PriceTable from './containers/PriceTable';

export const App = () => (
	<ChakraProvider theme={theme}>
		<Box p={5}>
			<ColorModeSwitcher justifySelf='flex-end' />
			<Grid
				h='2000px'
				templateRows='repeat(20, 1fr)'
				templateColumns='repeat(4, 1fr)'
				gap={5}
			>
				<GridItem rowSpan={1} colSpan={4}>
					<PriceBar />
				</GridItem>

				<GridItem rowSpan={4} colSpan={1}>
					<PriceGraph name='LTC' value={431684298.45} percentage={-6.19} />
				</GridItem>
				<GridItem rowSpan={4} colSpan={1}>
					<PriceGraph name='LTC' value={431684298.45} percentage={8.15} />
				</GridItem>
				<GridItem rowSpan={4} colSpan={1}>
					<PriceGraph name='LTC' value={431684298.45} percentage={11.2} />
				</GridItem>
				<GridItem rowSpan={4} colSpan={1}>
					<PriceGraph name='LTC' value={431684298.45} percentage={-6.19} />
				</GridItem>

				<GridItem rowSpan={9} colSpan={1}>
					<PriceTable />
				</GridItem>

				<GridItem rowSpan={5} colSpan={3}>
					<ChartComponent />
				</GridItem>

				<GridItem rowSpan={4} colSpan={3}>
					<PurchasePanel />
				</GridItem>

				<GridItem rowSpan={5} colSpan={4}>
					<OrderPanel />
				</GridItem>
			</Grid>
		</Box>
	</ChakraProvider>
);
