<template>
  <div class="article-list">
    <h2>文章列表</h2>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <router-link :to="`/article/${article.id}`">{{ article.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  data() {
    return {
      articles: [
        { id: 1, title: '文章 1' },
        { id: 2, title: '文章 2' },
        { id: 3, title: '文章 3' }
      ]
    };
  }
}
</script>

<style scoped>
.article-list {
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.article-list h2 {
  color: #333;
  margin-bottom: 20px;
}

.article-list ul {
  list-style: none;
  padding: 0;
}

.article-list ul li {
  margin-bottom: 10px;
}

.article-list ul li a {
  color: #3498db;
  text-decoration: none;
}

.article-list ul li a:hover {
  text-decoration: underline;
}
</style>
