<template>
    <div>
        <NuxtPage/>
    </div>
</template>
<style lang="scss">
    $black: rgb(22, 22, 22);
    $white: rgb(243, 243, 243);

    *{
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body{
        background-color: $black;
        color: $white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 0;
        .navbar{
            display: flex;
            align-items: center;
            border-bottom: 1px solid $white;
        }
    }
</style>