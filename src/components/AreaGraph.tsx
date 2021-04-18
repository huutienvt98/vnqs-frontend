import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { AreaChart, XAxis, YAxis, Tooltip, Area, CartesianGrid } from 'recharts';

/*
    data = [
        {
            "day": "Monday",
            "price": 2000
        },
        {
            "day": "Tuesday",
            "price": 4000
        }
    ]
*/
type AreaGraphProps = { green: boolean };
function AreaGraph({ green }: AreaGraphProps) {
	const data = [
		{
			name: 'Monday',
			uv: 4000,
		},
		{
			name: 'Tuesday',
			uv: 3000,
		},
		{
			name: 'Wednesday',
			uv: 2000,
		},
		{
			name: 'Thursday',
			uv: 2780,
		},
		{
			name: 'Friday',
			uv: 1890,
		},
		{
			name: 'Saturday',
			uv: 2390,
		},
		{
			name: 'Sunday',
			uv: 3490,
		},
	];
	return (
		<AreaChart
			width={300}
			height={212}
			data={data}
			margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
		>
			<defs>
				<linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
					<stop offset='5%' stopColor={green ? '#82ca9d' : '#fb3640'} stopOpacity={0.8} />
					<stop offset='95%' stopColor={green ? '#82ca9d' : '#fb3640'} stopOpacity={0} />
				</linearGradient>
			</defs>
			<XAxis dataKey='name' />
			<YAxis />
			<Tooltip />
			<Area
				type='monotone'
				dataKey='uv'
				stroke='#8884d8'
				fillOpacity={1}
				fill='url(#colorUv)'
			/>
		</AreaChart>
	);
}
export default AreaGraph;
