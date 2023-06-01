<template>
    <client-page>
        <post-tabs>
            <post-card />
        </post-tabs>
        <div class="more-post-card">
            <button class="more-post-card-button">포스트 더보기</button>
        </div>
    </client-page>
</template>

<script>
import ClientPage from "@/components/client/template/ClientPage.vue";
import PostTabs from "@/components/client/post/post-tabs.vue";
import PostCard from "@/components/client/post/post-card.vue";

export default {
    components: {
        ClientPage,
        PostTabs,
        PostCard
    },
    data() {
        return {

        }
    }
}

</script>

<style>
  .more-post-card {
      display: flex;
  }
  .more-post-card-button {
      padding: 7px 12px 7px 12px;
      background-color: #e5f9f1;
      border-radius: 8px;
      color: #00c471;
      font-weight: 600;
  }
</style>
