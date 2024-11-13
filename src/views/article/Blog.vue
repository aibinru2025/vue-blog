<template>
  <div class="blog-container">
    <h1>博客首页</h1>
    <p>欢迎来到我的博客！在这里，你可以阅读我分享的文章。</p>

    <!-- 跳转到发布文章页面的按钮 -->
    <button @click="goToPublishPage" class="publish-btn">发布新文章</button>

    <div class="article-list">
      <!-- 使用 ArticleCard 组件展示文章列表 -->
      <ArticleCard
          v-for="article in articles"
          :key="article.id"
          :article="article"
      />
    </div>
  </div>
</template>

<script>
import ArticleCard from '@/article/ArticleCard.vue';

export default {
  name: 'Blog',
  components: {
    ArticleCard,
  },
  data() {
    return {
      articles: [
        { id: 1, title: '文章标题1', content: '文章内容摘要1', date: '2024-10-01' },
        { id: 2, title: '文章标题2', content: '文章内容摘要2', date: '2024-10-02' },
        { id: 3, title: '文章标题3', content: '文章内容摘要3', date: '2024-10-03' },
      ],
    };
  },
  methods: {
    goToPublishPage() {
      this.$router.push('/publish'); // 跳转到发布文章页面
    }
  }
};
</script>

<style scoped>
.blog-container {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.publish-btn {
  padding: 12px 24px;
  background-color: #6e7bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 20px;
}

.publish-btn:hover {
  background-color: #5a6ad1;
}

.article-list {
  margin-top: 20px;
}

h1 {
  text-align: center;
  font-size: 32px;
  color: #333;
}
</style>
