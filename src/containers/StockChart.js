import React from 'react';
import Chart from '../components/Chart';
import { getData } from '../utils/utils';

import { TypeChooser } from 'react-stockcharts/lib/helper';
import { Box } from '@chakra-ui/react';

class ChartComponent extends React.Component {
	componentDidMount() {
		getData().then((data) => {
			this.setState({ data });
		});
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>;
		}
		return (
			<Box borderWidth='1px' borderRadius='md'>
				<TypeChooser>{(type) => <Chart type={type} data={this.state.data} />}</TypeChooser>
			</Box>
		);
	}
}

export default ChartComponent;
