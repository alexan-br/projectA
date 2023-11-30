<script setup>
useHead({
  title: 'ProjectA',
  meta: [
    { name: 'description', content: 'Here is the future of simple dressing' }
  ],
})
</script>
<template>
    <div>
        <HeaderComponent />
        <NuxtPage/>
    </div>
</template>
<style lang="scss">
    $black: rgb(22, 22, 22);
    $white: rgb(243, 243, 243);

    *{
        box-sizing: border-box;
        scroll-behavior: smooth;
        margin: 0;
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
    a{
        display: inline-block;
        text-decoration: none;
        color: inherit;
    }
</style>