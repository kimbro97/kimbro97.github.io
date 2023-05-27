<template>
    <header class="page-header-wrapper">
        <div class="page-header">
            <div class="front-section">
                <a class="link link-title" href="https://kimbro97.github.io">kimbro97.github.io</a>
            </div>
            <div class="trailing-section">
                <a class="link">블로그</a>
                <div class="search-input">
                    <input class="input-field" type="text">
                    <div class="icon-container">
                      <svg-icon class="search-icon" type="mdi" :path="path"></svg-icon>
                    </div>
                </div>
            </div>

        </div>
    </header>
</template>

<script >
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiMagnify } from '@mdi/js';
export default {
    components: {
      SvgIcon
    },
    data() {
        return {
            path: mdiMagnify
        }
    },
    computed: {

    }
}

</script>

<style>

    @media (max-width: 770px) {
        .search-input {
            display: none;
        }
    }
    @media (min-width: 770px) {
      .search-input {
          display: flex;
          align-items: center;
          border-bottom: 2px solid #e6e6e6;
      }
    }

    .input-field {
        flex: 1;
        width: 180px;
        height: 30px;
        border: none;
        background: transparent;
        outline: none;
        color: #e6e6e6;
        font-size: 16px;
        font-weight: 700;
    }

    .icon-container {
        display: flex;
        align-items: center;
        padding-left: 5px; /* 아이콘과 입력란 사이의 간격 조정 */
    }

    .search-icon {
        width: 20px;
        height: 20px;
        color: #e6e6e6;
    }

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

    .page-header-wrapper .page-header .front-section .link {
        margin-right: 10px;
    }

    .page-header-wrapper .page-header .link {
      color: #e6e6e6;
      font-size: 20px;
      font-weight: 700;
    }

    .page-header-wrapper .page-header .trailing-section {
        align-items: center;
        display: flex;
    }
    .page-header-wrapper .page-header .trailing-section .link {
        margin-right: 10px;
    }

    .page-header-wrapper .page-header .link {
      color: #e6e6e6;
      font-size: 20px;
      font-weight: 700;
    }

    a {
        outline: none;
        text-decoration: none;
    }

    div {
        display: block;
    }

    .page-header-wrapper .page-header .link-title {
      font-size: 1.5rem;
    }



</style>
