<template>
  <div class="publish-container">
    <div class="publish-card">
      <h2>发布新文章</h2>

      <!-- 文章标题 -->
      <div class="form-group">
        <input v-model="title" type="text" placeholder="请输入文章标题" class="input-field" />
      </div>

      <!-- Markdown 编辑器 -->
      <div ref="editor" class="editor-container"></div>

      <!-- 发布按钮 -->
      <div class="form-group">
        <button @click="submitArticle" class="submit-btn">发布文章</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Editor } from '@toast-ui/editor'; // 导入 Markdown 编辑器

export default {
  name: 'PublishArticle',
  data() {
    return {
      title: '', // 标题
      editor: null, // 编辑器实例
    };
  },
  mounted() {
    // 初始化 Markdown 编辑器
    this.editor = new Editor({
      el: this.$refs.editor,
      height: '400px',
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      useCommandShortcut: true,
    });
  },
  methods: {
    submitArticle() {
      const content = this.editor.getMarkdown();
      const title = this.title.trim();

      if (!title || !content) {
        alert('标题和内容不能为空！');
        return;
      }

      // 假设发布文章时提交的 API 地址
      console.log('发布文章:', { title, content });

      // 在这里你可以发送请求到后端 API，发布文章
      // 例如：this.$http.post('/api/articles', { title, content });

      // 发布成功后跳转到首页
      this.$router.push('/blog');
    }
  }
}
</script>

<style scoped>
.publish-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #6e7bff, #3a3a3a);
}

.publish-card {
  background-color: #fff;
  width: 90%;
  max-width: 800px;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.publish-card:hover {
  transform: scale(1.03);
}

h2 {
  font-size: 28px;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  padding: 15px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;
}

.input-field:focus {
  border-color: #6e7bff;
}

.editor-container {
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.submit-btn {
  width: 100%;
  padding: 15px;
  background-color: #6e7bff;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.submit-btn:hover {
  background-color: #5a6ad1;
}

.submit-btn:active {
  transform: translateY(2px);
}
</style>
