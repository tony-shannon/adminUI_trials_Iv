<template>
  <div class="wrapper" style="height: auto; min-height: 100%;">
    <Header />
    <aside class="main-sidebar">
      <section class="sidebar" style="height: auto;">
        <ul class="sidebar-menu mt-4 " data-widget="tree">
          <li class="active">
            <a class="clickable" @click="goto('users')">
              <span>Users</span>
            </a>
          </li>
          <li>
            <a class="clickable" @click="goto('posts')">
              <span>Posts</span>
            </a>
          </li>
          <li>
            <a class="clickable" @click="goto('comments')">
              <span>Comments</span>
            </a>
          </li>
        </ul>
      </section>
    </aside>
    <div class="content-wrapper" style="min-height: 900px; width: 100%;">
      <User v-if="page === 'users'" />
      <Post v-if="page === 'posts'" />
      <Comment v-if="page === 'comments'" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import User from './components/users.vue'
import Post from './components/posts.vue'
import Comment from './components/comments.vue'
export default {
  name: 'app',
  components: { Header, Footer, User, Post, Comment },
  data() {
    return {
      page: 'users'
    }
  },
  methods: {
    goto(name) {
      this.page = name
    }
  }
}
</script>
