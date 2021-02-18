<template>
<div id="app">
    <mynav></mynav>
    <router-view></router-view>
</div>
</template>

<script>
    import mynav from './components/nav.vue';
    export default {
        components: {
            mynav
        }
    };
</script>
