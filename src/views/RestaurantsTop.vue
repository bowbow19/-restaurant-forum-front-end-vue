// ./src/views/RestaurantsTop.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
      v-for="restaurant in restaurants"
      :key=restaurant.id
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link 
          :to="{ name: 'restaurant', params: {id: restaurant.id}}"
          >
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{restaurant.name}}
            </h5>
            <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text">
              {{restaurant.description}}
            </p>
            <router-link
            :to="{name: 'restaurant' , params : {id: restaurant.id}}"
              class="btn btn-primary mr-2"
            >
            Show
            </router-link>

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavTabs from './../components/NavTabs.vue'

const dummyData= {
    "restaurants": [
        {
            "id": 1,
            "name": "Stephon Bartell",
            "tel": "1-775-364-6844 x87651",
            "address": "08139 Ondricka Stravenue",
            "opening_hours": "08:00",
            "description": "Id deleniti aperiam. Nisi amet sunt sit quibusdam ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.18291853237764",
            "viewCounts": 1,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-14T08:07:46.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 22,
            "name": "Juana Schimmel",
            "tel": "(787) 156-7858",
            "address": "27210 Marquardt Rapid",
            "opening_hours": "08:00",
            "description": "Rerum aut eos officia aut quae. Non commodi et adi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=88.49484436301545",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 23,
            "name": "Florencio Jones",
            "tel": "(674) 209-6198",
            "address": "204 Gutkowski Unions",
            "opening_hours": "08:00",
            "description": "Ad asperiores eaque officia et ut enim sunt commod",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.8250797575163",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 24,
            "name": "Grover Lockman",
            "tel": "(953) 445-6068 x44851",
            "address": "684 Christiansen Landing",
            "opening_hours": "08:00",
            "description": "Consequatur quis saepe. Sed explicabo et. Perferen",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=37.107892445116164",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 25,
            "name": "Viva Langworth",
            "tel": "(069) 717-1276 x61481",
            "address": "4333 Malachi Shores",
            "opening_hours": "08:00",
            "description": "Tempore debitis beatae sequi sed. Impedit totam na",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.18413464179813",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 21,
            "name": "Estrella Lehner",
            "tel": "1-511-990-1030 x8630",
            "address": "0456 Muhammad Station",
            "opening_hours": "08:00",
            "description": "sed",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.858173617518382",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 27,
            "name": "Uriel Pagac DDS",
            "tel": "829-286-8473 x3122",
            "address": "817 Crystal Meadow",
            "opening_hours": "08:00",
            "description": "Dolor molestiae quam voluptatibus sunt tenetur exc",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=17.45510245547779",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 28,
            "name": "Clarabelle Gislason",
            "tel": "620.483.5389 x0686",
            "address": "06731 Hegmann Ford",
            "opening_hours": "08:00",
            "description": "Eaque ducimus in saepe dolorum sit non rerum ex. S",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=5.6404494354747925",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 29,
            "name": "Lavern Gislason",
            "tel": "116.293.1373 x1310",
            "address": "451 Percy Trail",
            "opening_hours": "08:00",
            "description": "consequatur",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=55.50488458880376",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 30,
            "name": "Aimee Schneider",
            "tel": "1-710-023-7364",
            "address": "826 Eloisa Locks",
            "opening_hours": "08:00",
            "description": "Rem velit dolor ipsam rerum recusandae.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=41.643379948304826",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
}

export default {
  components:{NavTabs},
  name : 'Restaurant',
  data(){
    return{
      restaurants:[]
    }
  },
  created(){
    this.fetchRestaurants()
  },
  methods:{
    fetchRestaurants(){
     this.restaurants = dummyData.restaurants
    }
  }
  
}

</script>