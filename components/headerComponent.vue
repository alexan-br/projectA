<script setup>
import headerData from '@/cms/queries/headerData'
const { data: headerQuery, pending: headerPending, error: headerError, refresh: headerRefresh } = await useLazyAsyncQuery(headerData);
</script>
<template>
    <header v-if="!headerPending && headerQuery">
        <div class="header-container">
            <NuxtLink to="/">
                <img :src="headerQuery.header.headerLogo.url" alt="">
            </NuxtLink>
        </div>
    </header>
</template>
<style lang="scss">
    header{
        padding: 10px;
        background-color: white;
        .header-container{
            max-width: 1400px;
            margin-right: auto;
            margin-left: auto;
        }
        img{
            max-height: 60px;
        }
    }
</style>