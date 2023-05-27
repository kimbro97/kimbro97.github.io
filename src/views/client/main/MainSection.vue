<template>
    <client-page>
        <post-tabs>
            <post-card />
        </post-tabs>
    </client-page>
</template>

<script>
import ClientPage from "@/views/client/template/ClientPage.vue";
import PostTabs from "@/components/client/post/post-tabs.vue";
import PostCard from "@/components/client/post/post-card.vue";

export default {
    components: {
        ClientPage,
        PostTabs,
        PostCard
    },
    data() {

    }
}

</script>
