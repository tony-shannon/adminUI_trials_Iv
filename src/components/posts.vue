<script>
import json from '../assets/posts.json'
export default {
  name: 'posts',
  components: {},
  data: () => {
    return {
      list: [],
      detail: {},
      editable: false
    }
  },
  mounted() {
    this.list = json
  },
  methods: {
    show(i) {
      this.detail = JSON.parse(JSON.stringify(this.list[i]))
    },
    edit() {
      this.editable = !this.editable
    },
    save() {
      const index = this.list.findIndex((e, i) => e.id == this.detail.id)
      if (index >= 0) {
        this.list[index] = this.detail
      } else {
        this.list.push(this.detail)
      }
      this.editable = false
    },
    add() {
      this.editable = true
      this.detail = {
        id: this.list[this.list.length - 1].id + 1,
        name: '',
        username: '',
        email: '',
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: '',
          geo: {
            lat: '',
            lng: ''
          }
        }
      }
    }
  }
}
</script>

<template>
  <div class="col-md-10">
    <section class="content">
      <div class="row">
        <div class="col-md-6">
          <div class="box box-solid">
            <div class="box-header">
              <i class="fa fa-text-width"></i>
              <h3 class="box-title">Posts</h3>
              <div class="box-tools pull-right">
                <a class="btn btn-primary text-white" @click="add()">Add</a>
              </div>
            </div>
            <div class="box-body">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>User ID</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(l, i) in list"
                      :key="i"
                      @click="show(i)"
                      class="clickable"
                    >
                      <td>{{ l.id }}</td>
                      <td>{{ l.title }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="box box-solid">
            <div class="box-header with-border">
              <i class="fa fa-text-width"></i>
              <h3 class="box-title">Post Detail</h3>
              <div class="box-tools pull-right">
                <a class="btn btn-primary text-white" @click="edit()">
                  Edit
                </a>
              </div>
            </div>
            <div class="box-body">
              <div v-if="detail.id" class="text-left pl-4">
                <div class="row">
                  <p class="col-4">ID:</p>
                  <div class="col-8">
                    <input
                      class="form-control"
                      v-if="editable"
                      type="text"
                      v-model="detail.id"
                    />
                    <span v-else>{{ detail.id }}</span>
                  </div>
                  <p class="col-4">User ID:</p>
                  <div class="col-8">
                    <input
                      class="form-control"
                      v-if="editable"
                      type="text"
                      v-model="detail.userId"
                    />
                    <span v-else>{{ detail.userId }}</span>
                  </div>
                  <p class="col-4">Title:</p>
                  <div class="col-12">
                    <input
                      class="form-control"
                      v-if="editable"
                      type="text"
                      v-model="detail.title"
                    />
                    <span v-else>{{ detail.title }}</span>
                  </div>
                  <p class="col-4">Body:</p>

                  <div class="col-12" v-if="editable">
                    <textarea class="form-control" v-model="detail.body" />
                  </div>
                  <span v-else>{{ detail.body }}</span>
                  <div class="col-12" v-if="editable">
                    <br />
                    <a class="btn btn-success text-white" @click="save()">
                      Save
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
