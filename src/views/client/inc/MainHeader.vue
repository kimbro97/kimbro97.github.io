<template>
    <header class="page-header-wrapper">
        <div class="page-headerr">
            <div class="front-section">
                <a class="link link-title" href="https://kimbro97.github.io">kimbro97.github.io</a>
            </div>
            <div class="trailing-section">
                <a class="link">블로그</a>
            </div>
        </div>
    </header>
</template>

<script >
export default {
    components: {

    },
    computed: {

    }
}

</script>

<style>
    .page-header-wrapper {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 60px;
    }

    .page-header-wrapper .page-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 720px;
    }

    .page-header-wrapper .page-header .trailing-section {
        align-items: center;
        display: flex;
    }
    .page-header-wrapper .page-header .link {
        font-size: 20px;
        font-weight: 700;
    }
</style>
