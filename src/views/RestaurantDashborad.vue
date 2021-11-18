<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData={
    "restaurant": {
        "id": 1,
        "name": "Stephon Bartell",
        "tel": "1-775-364-6844 x87651",
        "address": "08139 Ondricka Stravenue",
        "opening_hours": "08:00",
        "description": "Id deleniti aperiam. Nisi amet sunt sit quibusdam et porro velit. Qui id ratione doloribus voluptatum. Porro quaerat eum. Voluptas iusto molestias.\n \rLabore rerum est minima voluptatem nemo cupiditate qui molestiae voluptatum. Asperiores explicabo omnis non aliquam placeat autem odio et qui. Minima quos veritatis consequuntur qui enim voluptatem laboriosam reprehenderit quia. Nulla at temporibus consectetur reiciendis illo iure qui eum. Ullam porro sit autem.\n \rArchitecto ex quam eos et autem repellendus fuga facere error. Beatae perferendis ut doloremque sint rem inventore. Quasi alias cum quidem saepe et. Expedita unde molestias error. Voluptas quia eaque reprehenderit ut. At et saepe voluptas id ut porro.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.18291853237764",
        "viewCounts": 1,
        "createdAt": "2021-11-10T10:54:26.000Z",
        "updatedAt": "2021-11-14T08:07:46.000Z",
        "CategoryId": 3,
        "Category": {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z"
        },
        "Comments": [
            {
                "id": 51,
                "text": "Voluptate assumenda quia cupiditate autem qui cupiditate vel laborum.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$4vqPDJA3IB/X3xT1ij.5NeA5hiLBRTU3CO3SQjnV/vHHF/xBEwYzG",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2021-11-10T10:54:26.000Z",
                    "updatedAt": "2021-11-10T10:54:26.000Z"
                }
            },
            {
                "id": 1,
                "text": "Commodi et quaerat nam quasi tempore.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$gaK3DjChfe3Hj3jpIiZZFuF3kB7n5D.uPP78CVt2PvuCv8kDfM/RG",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-11-10T10:54:26.000Z",
                    "updatedAt": "2021-11-10T10:54:26.000Z"
                }
            },
            {
                "id": 101,
                "text": "Dignissimos dolorum perferendis asperiores quo voluptas officiis et sed.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$gaK3DjChfe3Hj3jpIiZZFuF3kB7n5D.uPP78CVt2PvuCv8kDfM/RG",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-11-10T10:54:26.000Z",
                    "updatedAt": "2021-11-10T10:54:26.000Z"
                }
            }
        ]
    }
}
export default {
  name:"RestaurantDashboard",
  data(){
    return{
       restaurant:{
            id:-1,
            name:'',
            categoryName:'',
            commentsLength:0,
            viewCounts: 0
      }
    }
  },
  created(){
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods:{
    fetchRestaurant(restaurantId){
      console.log('fetchRestaurant id:', restaurantId);
      
      this.restaurant ={
        ...this.restaurant,
            id: dummyData.restaurant.id,
            name:dummyData.restaurant.name,
            categoryName:dummyData.restaurant.Category.name,
            commentsLength:dummyData.restaurant.CategoryId,
            viewCounts: dummyData.restaurant.viewCounts

      }
    }
  }
  
}
</script>