<template>
    <main class="page-content">
        <slot />
    </main>
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
    .page-wrapper .page-content {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-top: 60px;
        max-width: 720px;
        padding-left: 15px;
        padding-right: 15px;
        position: relative;
        width: 100%;
    }
</style>
