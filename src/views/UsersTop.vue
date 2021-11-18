// ./src/views/UsersTop.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div class="col-3" 
      v-for="user in users"
      :key="user.id"
      >
        <a href="#">
          <img
            src="http://via.placeholder.com/300x300?text=No+Image"
            width="140px"
            height="140px"
          >
        </a>
        <h2>{{user.name}}</h2>
        <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
            @click="deleteFollow"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click="addFollow"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import NavTabs from './../components/NavTabs.vue'

const dummyData={
    "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$4vqPDJA3IB/X3xT1ij.5NeA5hiLBRTU3CO3SQjnV/vHHF/xBEwYzG",
            "isAdmin": true,
            "image": null,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$gaK3DjChfe3Hj3jpIiZZFuF3kB7n5D.uPP78CVt2PvuCv8kDfM/RG",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$sJd2Cy7X78Jwb1PYYtL1mONjEcjft2wQoKZeK2KdZaepi0AXNngXu",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]
}

export default {
  components:{NavTabs},
  data(){
    return {
      users :[]
      }
  },
  created(){
    this.fetchUsers()
  } , 
  methods:{
    fetchUsers(){
      const users =dummyData.users

      this.users=users
    },
    addFollow(){
      this.users = {
        ...this.dummyData,
        isFollowed: true
      }
    },
    deleteFollow(){
      this.users ={
        ...dummyData.users,
        isFollowed: false
      }
    }
  }

}

</script>