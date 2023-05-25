<template>
    <header class="page-header-wrapper">
        <div class="page-header">
            <div class="front-section">
                <a class="link link-title" href="https://kimbro97.github.io">kimbro97.github.io</a>
            </div>
            <div class="trailing-section">
                <a class="link">블로그</a>
                <div class="search-input-wrapper">
                    <v-text-field density="compact" variant="solo" label="Search templates" append-inner-icon="mdi-magnify" single-line hide-details></v-text-field>
                </div>
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
        background-color: #fff;
        border-bottom: 1px solid #f8f9fa;
        display: flex;
        height: 60px;
        justify-content: center;
        padding: 0 15px;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 9999;
    }
    .page-header {
        align-items: center;
        display: flex;
        justify-content: space-between;
        max-width: 720px;
        width: 100%;
    }

    .page-header-wrapper .page-header .link-title {
        font-size: 1.5rem;
    }

    .page-header-wrapper .page-header .link {
        color: #000;
        font-size: 1.2rem;
        font-weight: 700;
    }

    a {
        outline: none;
        text-decoration: none;
    }

    .page-header-wrapper .page-header .trailing-section {
        align-items: center;
        display: flex;
    }

    .search-input-wrapper {
        align-items: center;
        display: none;
        margin-top: 3px;
        width: 180px;
    }
</style>
