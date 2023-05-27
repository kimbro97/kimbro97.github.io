<template>
    <div class="post-card-column-wrapper">
        <div class="post-card-column">
            <div class="post-card-wrapper">
                <a class="post-card">
                    <div class="title">
                        테스트 코드를 왜 그리고 어떻게 작성해야 할까?
                    </div>
                    <p class="description">테스트 코드가 필요한 이유와 잘 작성하는 방법에 대해 공유합니다.</p>
                    <div class="info">
                        <div class="date">April 11, 2023</div>
                        <div class="tags">
                            <div class="tag">test</div>
                            <div class="tag">jest</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
    .post-card-column-wrapper {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .post-card-column-wrapper .post-card-column {
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    .post-card-wrapper {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    @media (min-width: 768px) {
        .post-card-wrapper .post-card {
            margin-bottom: 0;
        }
    }

    .post-card-wrapper .post-card {
        color: #e6e6e6;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        height: 100%;
        max-width: 720px;
        padding: 15px;
        transition: -webkit-transform .2s;
        transition: transform .2s;
        transition: transform .2s,-webkit-transform .2s;
        width: 100%;
    }

    a {
      outline: none;
      text-decoration: none;
    }

    .post-card-wrapper .post-card .title {
        color: #00c471;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.4;
        margin-bottom: 7px;
    }
    .post-card-wrapper .post-card .description {
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      color: #e6e6e6;
      display: -webkit-box;
      font-size: 1rem;
      line-height: 20px;
      margin-bottom: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .post-card-wrapper .post-card .info {
      align-items: center;
      color: #e6e6e6;
      display: flex;
      flex-wrap: wrap;
      font-size: 14px;
      justify-content: space-between;
    }

    .post-card-wrapper .post-card .info .date {
      margin: 0 5px 5px 0;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
    }

    .tags .tag {
      background-color: #323a42;
      border-radius: 10px;
      color: #e6e6e6;
      cursor: default;
      font-weight: 500;
      margin: 0 5px 5px 0;
      padding: 5px 7px;
    }
</style>