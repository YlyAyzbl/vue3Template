<template>
    <el-card class="ip-card" v-if="ipInfo.status === '1'">
        <p style="text-align: center;color: #fff">ip定位检测</p>
        <div class="card-content">
            <p class="info-item">省份: {{ ipInfo.province }}</p>
            <p class="info-item">城市: {{ ipInfo.city }}</p>
            <p class="info-item">行政代码: {{ ipInfo.adcode }}</p>
            <p class="info-item">地理范围: {{ ipInfo.rectangle }}</p>
        </div>
    </el-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const ipInfo = ref({
    status: '1',
    province: '北京市',
    city: '北京',
    adcode: '110000',
    rectangle: '116.01,39.66',
});
</script>

<style scoped>
.ip-card {
    max-width: 400px;
    margin: 20px auto;
    background-image: linear-gradient(25deg, #7700ac, #7864c8, #67a3e3, #00e1ff);
    border: none;
}

.card-content {
    color: #fff;
}

.info-item {
    margin: 0;
    padding: 4px 0;
    font-size: 16px;
}
</style>
