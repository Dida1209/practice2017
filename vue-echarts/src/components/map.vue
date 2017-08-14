<template>
  <chart :options="map"></chart>
</template>
<script>
import ECharts from 'vue-echarts/components/ECharts.vue'
// import 'echarts/lib/chart/map'
import {geoCoordMap as geoCoordMap, mapInit as mapInit} from './geo/geoMapData.js'
import 'echarts/map/js/china.js'
export default {
    components: {
        'chart': ECharts
    },
    data: function() {
        return {
            geoCoordMap: geoCoordMap,
            map: mapInit           
        }
    }
}
</script>
<style>
.echarts {
  height: 600px;
}
</style>