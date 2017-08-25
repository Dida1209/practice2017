<template>
    <chart :options="scatter"></chart>
</template>
<script>
import {data as data} from './scatter.js'
import ECharts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/tooltip'
import 'echarts/theme/dark'
import echarts from 'echarts/lib/echarts'

export default {
    components: {
        'chart': ECharts
    },
    data: function () {
        return {
            scatter: {
                // backgroundColor: '#c4ccd3',
                backgroundColor: {
                    type: 'radial',
                    x: 0.3, 
                    y: 0.3,
                    r: 0.8,
                    colorStops: [{
                        offset: 0, color: '#f7f8fa' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#cdd0d5' // 100% 处的颜色
                    }],
                    globalCoord: false
                } ,
                title: {
                    text: '1990 与 2015 年各国家人均寿命与 GDP'
                },
                legend: {
                    right: 10,
                    data: ['1990', '2015']
                },
                xAxis: {
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
                },
                yAxis: {
                    splitLine: {    // 
                        lineStyle: {
                            type: 'dashed'
                        }
                    },
                    scale: true   // 是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用。
                },
                tooltip: {
                    type: 'item'
                },
                series: [{
                    name: '1990',
                    data: data[0],
                    type: 'scatter',
                    symbolSize: function (data) {
                        
                        return Math.sqrt(data[2]) / 5e2;
                    },
                    label: {
                        normal: {
                            show: false,
                            formatter: function (param) {
                                return param.data[3];
                            },
                        },
                        emphasis: {
                            show: true,                            
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(120, 36, 50, 0.5)',
                            shadowOffsetY: 5,
                            // color:  {
                            //     type: 'radial',
                            //     x: 0.5,
                            //     y: 0.5,
                            //     r: 0.5,
                            //     colorStops: [{
                            //         offset: 0, color: 'rgb(251, 118, 123)' // 0% 处的颜色
                            //     }, {
                            //         offset: 1, color: 'rgb(204, 46, 72)' // 100% 处的颜色
                            //     }],
                            //     globalCoord: false
                            // }
                            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(251, 118, 123)'
                                }, {
                                    offset: 1,
                                    color: 'rgb(204, 46, 72)'
                                }
                                ])
                        }
                    }
                }, {
                    name: '2015',
                    data: data[1],
                    type: 'scatter',
                    symbolSize: function (data) {
                        return Math.sqrt(data[2]) / 5e2;
                    },
                    label: {
                        normal: {
                            show: false,
                            formatter: function (param) {
                                return param.data[3];
                            },
                        },
                        emphasis: {
                            show: true,                            
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(25, 100, 150, 0.5)',
                            shadowOffsetY: 5,
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.5,
                                colorStops: [{
                                    offset: 0, color: 'rgb(129, 227, 238)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgb(25, 183, 207)' // 100% 处的颜色
                                }],
                                globalCoord: false
                            }
                        }
                    }
                }]

            }
        }
    }
}
</script>
<style>
.echarts {
  height: 600px;
}
</style>