<template>
    <div class="entry-container mb-3 pointer p-2"
    @click="$router.push({name:'entry', params: {id:10}})"
    >
        
        <!-- Titulo -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">25</span>
            <span class="mx-1 fs-5">enero</span>
            <span class="mx-2 fw-light">2023, miercoles</span>
        </div>

        <div class="entry-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>

    </div>
</template>

<script>
     export default {

     }
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: .2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: .2s all ease-in;
    }
    .entry-description{
        font-size: 12px;
    }
}

</style>