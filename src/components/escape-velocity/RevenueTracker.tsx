'use client';

import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const revenueData = [
    { month: 'Day 0', revenue: 0 },
    { month: 'August', revenue: 22.21 },
    { month: 'September', revenue: null },
    { month: 'October', revenue: null },
    { month: 'November', revenue: null },
    { month: 'December', revenue: null }

];

const RevenueTracker: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!chartRef.current) return;
        const chart = echarts.init(chartRef.current);

        const months = revenueData.map(data => data.month);
        const revenues = revenueData.map(data => data.revenue); 
        console.log([months[months.length - 1], revenues[revenues.length - 1]])

        const option = {
            grid: {
                left: '15%',
                right: '15%',
                top: '20%',
                bottom:'20%' // Reduce bottom margin to minimize space below x-axis
            },
            title: {
                text: 'Revenue Tracker',
                textStyle: {
                    color: '#fff',
                },
            },
            tooltip: {
                textStyle: {
                    color: '#fff',
                },
                backgroundColor: 'rgba(30,30,30,0.95)',
            },
            xAxis: {
                type: 'category',
                data: months,
                axisLabel: {
                    color: '#fff',
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                    },
                },
            },
            yAxis: {
                type: 'value',
                max: 50,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    color: '#fff',
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                    },
                },
            },
            series: [
                {
                    name: 'Revenue',
                    type: 'line',
                    data: revenues,
                    symbol: 'circle',
                    symbolSize: 12,
                    lineStyle: {
                        width: 4,
                        color: '#5470C6'
                    },
                    // itemStyle: {
                    //     color: function(params) {
                    //         // Rocket emoji at the last point
                    //         if (params.dataIndex === revenues.length - 1) {
                    //             return '#FF9800';
                    //         }
                    //         return '#5470C6';
                    //     }
                    // },
                    markPoint: {
                        symbol: 'image://https://em-content.zobj.net/source/apple/419/rocket_1f680.png',
                        symbolSize: 40,
                        data: [
                            {
                                coord: [months[1], revenues[1]],
                                value: revenues[1],
                                label: {
                                    show: false
                                }
                            }
                        ]
                    }
                },
            ],
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
            className="w-full h-[250px] md:h-[400px]"
        />
    );
};

export default RevenueTracker;