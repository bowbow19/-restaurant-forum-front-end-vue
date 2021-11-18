// ./src/views/Restaurants.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories"/>
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantsCard  
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :initial-restaurant="restaurant"/>
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination 
    v-if="totalPage.length > 1"
    :current-page="currentPage"
    :total-page="totalPage"
    :category="categoryId"
    :previous-page="previousPage"
    :next-page="nextPage"
    />
  </div>
</template>


<script>
import NavTabs from './../components/NavTabs.vue'
import RestaurantsCard from './../components/RestaurantsCard.vue'
import RestaurantsPagination from './../components/RestaurantsPagination.vue'
import RestaurantsNavPills from './../components/RestaurantsNavPills.vue'


const dummyData={
    "restaurants": [
        {
            "id": 1,
            "name": "Stephon Bartell",
            "tel": "1-775-364-6844 x87651",
            "address": "08139 Ondricka Stravenue",
            "opening_hours": "08:00",
            "description": "Id deleniti aperiam. Nisi amet sunt sit quibusdam ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.18291853237764",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Alvina Larkin",
            "tel": "(903) 476-8196 x79175",
            "address": "08749 Russel Landing",
            "opening_hours": "08:00",
            "description": "Distinctio et a aut.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=12.430905384268787",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Riley Thompson",
            "tel": "(402) 607-4280 x66533",
            "address": "2941 Noemie Point",
            "opening_hours": "08:00",
            "description": "Quidem et consequuntur ipsam eos iure iste. Et at ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=78.55899454185844",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Kiarra Oberbrunner",
            "tel": "1-632-446-9290",
            "address": "554 Casper Passage",
            "opening_hours": "08:00",
            "description": "Magnam amet possimus dolorem fuga molestiae iusto ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.008677649433314",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Louie Dare",
            "tel": "003.281.4305",
            "address": "82928 Jordy Place",
            "opening_hours": "08:00",
            "description": "Sed consequatur alias nobis laborum ut. At perfere",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=26.635071749210425",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Carolyn Jakubowski",
            "tel": "801-871-1803",
            "address": "18337 Sage Ford",
            "opening_hours": "08:00",
            "description": "voluptas",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=49.39923417718348",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Osvaldo Schuppe",
            "tel": "1-690-182-8731 x04114",
            "address": "25907 Gislason Inlet",
            "opening_hours": "08:00",
            "description": "Eligendi minus non ipsa unde eaque perferendis. Do",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.256524243662",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Mckenzie Simonis",
            "tel": "247-211-7717 x369",
            "address": "47306 Weimann Curve",
            "opening_hours": "08:00",
            "description": "Id est vel magnam non est tenetur et. Aut qui aut ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=7.194825370833913",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Mathias Harris",
            "tel": "(005) 412-0482 x6711",
            "address": "713 Ahmad Well",
            "opening_hours": "08:00",
            "description": "Ratione ut veniam voluptas reiciendis eius molesti",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.698265441022407",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Maxwell Schuster I",
            "tel": "1-903-668-1759 x946",
            "address": "17491 Dylan Passage",
            "opening_hours": "08:00",
            "description": "Quia aut ut esse ut pariatur. Aut at molestiae at ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.500064238072545",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}

export default {
  
  components:{
    NavTabs,
    RestaurantsCard,
    RestaurantsPagination,
    RestaurantsNavPills
    },

    data(){
        return{
            restaurants: [],
            categories: [],
            categoryId: -1,
            currentPage: 1,
            totalPage: [],
            previousPage: -1,
            nextPage: -1
        }
    },
    created(){
      this.fetchRestaurants()
    },
    methods:{
      fetchRestaurants(){
        const{
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next
        } = dummyData
        
        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage
        this.previousPage = prev
        this.nextPage = next
      }
    }


}

</script>