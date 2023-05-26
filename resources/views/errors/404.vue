<template>
    <div class="error-message">
        <h1>404</h1>
        <p>Page not found</p>
    </div>
</template>
<script setup></script>
<style lang="scss" scoped>
    .error-message {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    .error-message h1 {
        font-size: 10rem;
        margin: 0;
    }
    .error-message p {
        font-size: 2rem;
        margin: 0;
    }
</style>