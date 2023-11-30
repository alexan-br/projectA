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
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<style lang="scss">
    header{
        padding: 10px;
        background-color: white;
        color: black;
        .header-container{
            max-width: 1400px;
            margin-right: auto;
            margin-left: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img{
                max-height: 60px;
            }
            nav{
                ul {
                    list-style: none;
                    padding-left: 0;
                    li{
                        font-weight: 500;
                        font-size: 20px;
                    }
                }
            }
        }
    }
</style>