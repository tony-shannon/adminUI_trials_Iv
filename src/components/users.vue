<script>
import json from '../assets/users.json'
export default {
  name: 'users',
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
              <h3 class="box-title">Users</h3>
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
                      <td>{{ l.name }}</td>
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
              <h3 class="box-title">User Detail</h3>
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
                      readonly
                    />
                    <span v-else>{{ detail.id }}</span>
                  </div>
                  <p class="col-4">Name:</p>
                  <div class="col-8">
                    <input
                      class="form-control"
                      v-if="editable"
                      type="text"
                      v-model="detail.name"
                    />
                    <span v-else>{{ detail.name }}</span>
                  </div>
                  <p class="col-4">Username:</p>
                  <div class="col-8">
                    <input
                      class="form-control"
                      v-if="editable"
                      type="text"
                      v-model="detail.username"
                    />
                    <span v-else>{{ detail.username }}</span>
                  </div>
                  <p class="col-4">Email:</p>
                  <div class="col-8">
                    <input
                      class="form-control"
                      v-if="editable"
                      type="text"
                      v-model="detail.email"
                    />
                    <span v-else>{{ detail.email }}</span>
                  </div>
                  <p class="col-4">Address</p>
                </div>
                <div class="row">
                  <div class="col-1"></div>
                  <div class="col-11">
                    <div class="row">
                      <div class="col-4">Street:</div>
                      <div class="col-8">
                        <input
                          class="form-control"
                          v-if="editable"
                          type="text"
                          v-model="detail.address.street"
                        />
                        <span v-else>{{ detail.address.street }}</span>
                      </div>
                      <div class="col-4">Suite:</div>
                      <div class="col-8">
                        <input
                          class="form-control"
                          v-if="editable"
                          type="text"
                          v-model="detail.address.suite"
                        />
                        <span v-else>{{ detail.address.suite }}</span>
                      </div>
                      <div class="col-4">City:</div>
                      <div class="col-8">
                        <input
                          class="form-control"
                          v-if="editable"
                          type="text"
                          v-model="detail.address.city"
                        />
                        <span v-else>{{ detail.address.city }}</span>
                      </div>
                      <div class="col-4">Zipcode:</div>
                      <div class="col-8">
                        <input
                          class="form-control"
                          v-if="editable"
                          type="text"
                          v-model="detail.address.zipcode"
                        />
                        <span v-else>{{ detail.address.zipcode }}</span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-4">Geo:</div>
                      <div class="col-8" v-if="editable">
                        <input
                          class="form-control"
                          type="text"
                          v-model="detail.address.geo.lat"
                          placeholder="lat"
                        />

                        <input
                          class="form-control"
                          type="text"
                          v-model="detail.address.geo.lng"
                          placeholder="lng"
                        />
                      </div>

                      <span v-else>
                        {{ detail.address.geo.lat }} -
                        {{ detail.address.geo.lng }}
                      </span>
                    </div>
                  </div>
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
