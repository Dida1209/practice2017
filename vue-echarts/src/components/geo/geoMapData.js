export const geoCoordMap = {
    "海门": [121.15, 31.89],
    "鄂尔多斯": [109.781327, 39.608266],
    "招远": [120.38, 37.35],
    "舟山": [122.207216, 29.985295],
    "齐齐哈尔": [123.97, 47.33],
    "盐城": [120.13, 33.38],
    "赤峰": [118.87, 42.28],
    "青岛": [120.33, 36.07],
    "乳山": [121.52, 36.89],
    "金昌": [102.188043, 38.520089],
    "泉州": [118.58, 24.93],
    "莱西": [120.53, 36.86],
    "日照": [119.46, 35.42],
    "胶南": [119.97, 35.88],
    "南通": [121.05, 32.08],
    "拉萨": [91.11, 29.97],
    "云浮": [112.02, 22.93],
    "梅州": [116.1, 24.55],
    "文登": [122.05, 37.2],
    "上海": [121.48, 31.22],
    "攀枝花": [101.718637, 26.582347],
    "威海": [122.1, 37.5],
    "承德": [117.93, 40.97],
    "厦门": [118.1, 24.46],
    "汕尾": [115.375279, 22.786211],
    "潮州": [116.63, 23.68],
    "丹东": [124.37, 40.13],
    "太仓": [121.1, 31.45],
    "曲靖": [103.79, 25.51],
    "烟台": [121.39, 37.52],
    "福州": [119.3, 26.08],
    "瓦房店": [121.979603, 39.627114],
    "即墨": [120.45, 36.38],
    "抚顺": [123.97, 41.97],
    "玉溪": [102.52, 24.35],
    "张家口": [114.87, 40.82],
    "阳泉": [113.57, 37.85],
    "莱州": [119.942327, 37.177017],
    "湖州": [120.1, 30.86],
    "汕头": [116.69, 23.39],
    "昆山": [120.95, 31.39],
    "宁波": [121.56, 29.86],
    "湛江": [110.359377, 21.270708],
    "揭阳": [116.35, 23.55],
    "荣成": [122.41, 37.16],
    "连云港": [119.16, 34.59],
    "葫芦岛": [120.836932, 40.711052],
    "常熟": [120.74, 31.64],
    "东莞": [113.75, 23.04],
    "河源": [114.68, 23.73],
    "淮安": [119.15, 33.5],
    "泰州": [119.9, 32.49],
    "南宁": [108.33, 22.84],
    "营口": [122.18, 40.65],
    "惠州": [114.4, 23.09],
    "江阴": [120.26, 31.91],
    "蓬莱": [120.75, 37.8],
    "韶关": [113.62, 24.84],
    "嘉峪关": [98.289152, 39.77313],
    "广州": [113.23, 23.16],
    "延安": [109.47, 36.6],
    "太原": [112.53, 37.87],
    "清远": [113.01, 23.7],
    "中山": [113.38, 22.52],
    "昆明": [102.73, 25.04],
    "寿光": [118.73, 36.86]
}

let convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push(geoCoord.concat(data[i].value));
        }
    }
    return res;
};

export let mapInit = {
    backgroundColor: '#404a59',
    title: {
        text: '全国主要城市空气质量',
        subtext: 'data from PM25.in',
        sublink: 'http://www.pm25.in',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['pm2.5'],
        textStyle: {
            color: '#fff'
        }
    },
    visualMap: {
        min: 0,
        max: 300,
        splitNumber: 5,
        color: ['#d94e5d', '#eac736', '#50a3ba'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{
        name: 'pm2.5',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData([
            { name: "海门", value: 9 },
            { name: "鄂尔多斯", value: 12 },
            { name: "招远", value: 12 },
            { name: "舟山", value: 12 },
            { name: "齐齐哈尔", value: 14 },
            { name: "盐城", value: 15 },
            { name: "赤峰", value: 16 },
            { name: "青岛", value: 18 },
            { name: "乳山", value: 18 },
            { name: "金昌", value: 19 },
            { name: "泉州", value: 21 },
            { name: "莱西", value: 21 },
            { name: "日照", value: 21 },
            { name: "胶南", value: 22 },
            { name: "南通", value: 23 },
            { name: "拉萨", value: 24 },
            { name: "云浮", value: 24 },
            { name: "梅州", value: 25 },
            { name: "文登", value: 25 },
            { name: "上海", value: 25 },
            { name: "攀枝花", value: 25 },
            { name: "威海", value: 25 },
            { name: "承德", value: 25 },
            { name: "厦门", value: 26 },
            { name: "汕尾", value: 26 },
            { name: "潮州", value: 26 },
            { name: "丹东", value: 27 },
            { name: "太仓", value: 27 },
            { name: "曲靖", value: 27 },
            { name: "烟台", value: 28 },
            { name: "福州", value: 29 },
            { name: "瓦房店", value: 30 },
            { name: "即墨", value: 30 },
            { name: "抚顺", value: 31 },
            { name: "玉溪", value: 31 },
            { name: "张家口", value: 31 },
            { name: "阳泉", value: 31 },
            { name: "莱州", value: 32 },
            { name: "湖州", value: 32 },
            { name: "汕头", value: 32 },
            { name: "昆山", value: 33 },
            { name: "宁波", value: 33 },
            { name: "湛江", value: 33 },
            { name: "揭阳", value: 34 },
            { name: "荣成", value: 34 },
            { name: "连云港", value: 35 },
            { name: "葫芦岛", value: 35 },
            { name: "常熟", value: 36 },
            { name: "东莞", value: 36 },
            { name: "河源", value: 36 },
            { name: "淮安", value: 36 },
            { name: "泰州", value: 36 },
            { name: "南宁", value: 37 },
            { name: "营口", value: 37 },
            { name: "惠州", value: 37 },
            { name: "江阴", value: 37 },
            { name: "蓬莱", value: 37 },
            { name: "韶关", value: 38 },
            { name: "嘉峪关", value: 38 },
            { name: "广州", value: 38 },
            { name: "延安", value: 38 },
            { name: "太原", value: 39 },
            { name: "清远", value: 39 },
            { name: "中山", value: 39 },
            { name: "昆明", value: 39 },
            { name: "寿光", value: 40 }
        ]),
        symbolSize: 12,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                borderColor: '#fff',
                borderWidth: 1
            }
        }
    }]
}