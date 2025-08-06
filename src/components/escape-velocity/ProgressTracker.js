import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const revenueData = [
    { month: 'August', revenue: 0 },
    { month: 'September', revenue: null },
    { month: 'October', revenue: null },
    { month: 'November', revenue: null },
    { month: 'December', revenue: null }

];

const ProgressTracker = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = echarts.init(chartRef.current);

        const months = revenueData.map(d => d.month);
        const revenues = revenueData.map(d => d.revenue);

        const option = {
            // title: {
            //     text: 'Revenue Progress Tracker',
            //     left: 'center'
            // },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: months
            },
            yAxis: {
                type: 'value',
                name: 'Revenue ($)'
            },
            series: [
                {
                    data: revenues,
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 12,
                    lineStyle: {
                        width: 4,
                        color: '#5470C6'
                    },
                    itemStyle: {
                        color: function(params) {
                            // Rocket emoji at the last point
                            if (params.dataIndex === revenues.length - 1) {
                                return '#FF9800';
                            }
                            return '#5470C6';
                        }
                    },
                    markPoint: {
                        symbol: 'image://https://em-content.zobj.net/source/apple/419/rocket_1f680.png',
                        symbolSize: 40,
                        data: [
                            {
                                coord: [0, 0], // [months[months.length - 1], revenues[revenues.length - 1]],
                                value: null // '🚀'
                            }
                        ]
                    }
                }
            ],
            grid: {
                left: 40,
                right: 20,
                bottom: 40,
                top: 60
            }
        };

        chart.setOption(option);

        const handleResize = () => chart.resize();
        window.addEventListener('resize', handleResize);

        return () => {
            chart.dispose();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div
            ref={chartRef}
            style={{ width: '100%', height: '400px' }}
        />
    );
};

export default ProgressTracker;