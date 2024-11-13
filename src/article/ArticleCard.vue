<template>
  <div class="article-card" @click="handleClick">
    <h3 class="article-title">{{ article.title }}</h3>
    <p class="article-content">{{ article.content }}</p>
    <p class="article-date">{{ article.date }}</p>
    <router-link :to="`/common/${article.id}`" class="read-more">阅读更多</router-link>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleClick() {
      console.log(`点击了文章: ${this.article.title}`);
      // 可以在这里添加其他点击事件逻辑，比如导航到详情页等
    }
  }
};
</script>

<style scoped>
.article-card {
  padding: 20px;
  border-radius: 12px;
  background: linear-gradient(135deg, #6e7bff, #8a94ff);
  color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.article-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}

.article-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
}

.article-content {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.article-date {
  font-size: 14px;
  color: #ddd;
  margin-bottom: 15px;
}

.read-more {
  display: inline-block;
  padding: 8px 12px;
  background-color: #fff;
  color: #6e7bff;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.3s, color 0.3s;
}

.read-more:hover {
  background-color: #6e7bff;
  color: #fff;
}
</style>
