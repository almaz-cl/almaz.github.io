<template lang="pug">
    <hooper style="height: 400px">
        <slide>
            <img src="../images/gallery-1.jpg" alt="estudiantes bailando">
        </slide>
        <slide>
            <img src="../images/gallery-2.jpg" alt="estudiantes bailando">
        </slide>
        <slide>
            <img src="../images/gallery-3.jpg" alt="estudiantes bailando">
        </slide>

    <hooper-pagination slot="hooper-addons"></hooper-pagination>

    </hooper>
</template>

<script>
    import 'hooper/dist/hooper.css';
    import {
        Hooper,
        Slide,
        Pagination as HooperPagination
    } from 'hooper';

    export default {
        components: {
            Hooper,
            Slide,
            HooperPagination
        }
    }
</script>

<style scoped>
    img{
        width: 100%;
        height: 100%;
    }
</style>