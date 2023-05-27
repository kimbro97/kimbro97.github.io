<template>
    <div class="post-tabs-wrapper">
        <div class="post-tabs">
            <div class="tabs">
                <div class="tab" @click="selectedTab = 'ALL'">
                    <button :class="`${ selectedTab === 'ALL' ? 'tab-btn-selected' : 'tab-btn' }`">
                      ALL
                    </button>
                </div>
                <div class="tab" @click="selectedTab = 'Spring'">
                    <button :class="`${ selectedTab === 'Spring' ? 'tab-btn-selected' : 'tab-btn' }`">
                      Spring
                    </button>
                </div>
                <div class="tab" @click="selectedTab = 'Node'">
                    <button :class="`${ selectedTab === 'Node' ? 'tab-btn-selected' : 'tab-btn' }`">
                      Node
                    </button>
                </div>
            </div>
        </div>
        <slot />
    </div>
</template>

<script>

export default {
  data() {
    return {
      selectedTab: "ALL"
    }
  }
}

</script>

<style>
.post-tabs-wrapper {
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  width: 100%;
}
.post-tabs-wrapper .post-tabs {
  display: flex;
  height: 40px;
  justify-content: center;
  margin-bottom: 12px;
  max-width: 760px;
  width: 100%;
}
.tabs {
  overflow: hidden;
  max-height: 31px;
  display: flex;
}

.tab {
  display: flex;
}

.tab-btn-selected {
  padding: 7px 12px 12px;
  background-color: #e5f9f1;
  border-radius: 8px;
  color: #00c471;
  font-weight: 600;
}

.tab-btn {
  color: #768390;
  font-family: Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,Helvetica Neue,Segoe UI,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,sans-serif;
  font-size: 1rem;
  font-weight: 500;
  min-height: auto;
  min-width: auto;
  padding: 7px 12px;
  transition: all .2s ease;
}
</style>
