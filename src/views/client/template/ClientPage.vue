<template>
    <div class="page-wrapper">
        <main-header/>
        <main-content>
            <slot/>
        </main-content>
        <main-footer />
    </div>
</template>

<script >
import MainHeader from "../../../views/client/inc/MainHeader.vue";
import MainFooter from "../../../views/client/inc/MainFooter.vue";
import MainContent from "../../../views/client/inc/MainContent.vue";
export default {
  components: {
    MainFooter,
    MainHeader,
    MainContent
  },
  computed: {

  }
}

</script>

<style>
    .page-wrapper {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #e6e6e6;
        flex-direction: column;
        font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,sans-serif;
        min-height: 100vh;
        word-break: keep-all;
        align-items: center;
        display: flex;
        justify-content: center;
        width: 100%;
    }
</style>
