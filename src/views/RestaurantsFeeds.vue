// ./src/views/RestaurantsFeeds.vue
<template>
  <div class="container py-5">
     <NavTabs />
    <h1 class="mt-5">
      最新動態
    </h1>
<hr>
<div class="row">
  <div class="col-md-6">
    <h3>最新餐廳</h3>
    <Newest-restaurants  :restaurants="restaurants"/>
  </div>
  <div class="col-md-6">
    <h3>最新評論</h3>
    <Newest-comments  :comments="comments" />
  </div>
</div>



  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import NewestRestaurants from './../components/NewestRestaurants.vue'
import NewestComments from './../components/NewestComments.vue'

const dummyData = {
  
    "restaurants": [
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
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z"
            }
        },
        {
            "id": 3,
            "name": "Riley Thompson",
            "tel": "(402) 607-4280 x66533",
            "address": "2941 Noemie Point",
            "opening_hours": "08:00",
            "description": "Quidem et consequuntur ipsam eos iure iste. Et at impedit a molestiae. Officiis possimus veritatis qui dolor maxime non.",
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
            }
        },
        {
            "id": 44,
            "name": "Ebba Wiegand",
            "tel": "1-494-506-5183 x66159",
            "address": "51154 Wisoky Land",
            "opening_hours": "08:00",
            "description": "Et nam repellendus exercitationem sequi quia provident sed eum.\nNemo voluptatum expedita sunt dicta quam qui ut rem.\nVoluptatem et et maiores quaerat vel non porro.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.632305747860393",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z"
            }
        },
        {
            "id": 34,
            "name": "Karen Herzog",
            "tel": "210.915.9116",
            "address": "96662 Madisyn Gateway",
            "opening_hours": "08:00",
            "description": "Voluptatibus mollitia sint cum maiores ea molestiae cupiditate reiciendis.\nMagni ut consequatur et aut dolorum alias quas enim.\nMinus ab ut adipisci.\nQuo laboriosam perspiciatis et dicta iure aut numquam.\nAccusantium mollitia sint ut nemo.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.4506701612953",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z"
            }
        },
        {
            "id": 22,
            "name": "Juana Schimmel",
            "tel": "(787) 156-7858",
            "address": "27210 Marquardt Rapid",
            "opening_hours": "08:00",
            "description": "Rerum aut eos officia aut quae. Non commodi et adipisci et recusandae praesentium quasi corporis ut. Nemo ut reiciendis iure voluptas laudantium quibusdam et repudiandae. Rem voluptatem dolorem veritatis eum quo fuga ut perferendis. Eius dolore rerum expedita praesentium ex repellat delectus. Optio ut magnam quibusdam aliquam sit voluptatem consequatur consequatur iste.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=88.49484436301545",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z"
            }
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
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z"
            }
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
            }
        },
        {
            "id": 23,
            "name": "Florencio Jones",
            "tel": "(674) 209-6198",
            "address": "204 Gutkowski Unions",
            "opening_hours": "08:00",
            "description": "Ad asperiores eaque officia et ut enim sunt commodi recusandae. Et qui mollitia molestiae perspiciatis quo.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.8250797575163",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z"
            }
        },
        {
            "id": 8,
            "name": "Mckenzie Simonis",
            "tel": "247-211-7717 x369",
            "address": "47306 Weimann Curve",
            "opening_hours": "08:00",
            "description": "Id est vel magnam non est tenetur et. Aut qui aut architecto qui praesentium. Aut consequatur enim dolor. Cum sed voluptatem porro necessitatibus veniam suscipit repellendus at.",
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
            }
        },
        {
            "id": 45,
            "name": "Torrey Kuphal",
            "tel": "1-957-855-8105",
            "address": "4674 Borer Prairie",
            "opening_hours": "08:00",
            "description": "alias aperiam cum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=67.81964815403494",
            "viewCounts": 0,
            "createdAt": "2021-11-10T10:54:26.000Z",
            "updatedAt": "2021-11-10T10:54:26.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z"
            }
        }
    ],
    "comments": [
        {
            "id": 11,
            "text": "Voluptatibus praesentium similique aspernatur ratione sint aut sunt.",
            "UserId": 1,
            "RestaurantId": 11,
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
            },
            "Restaurant": {
                "id": 11,
                "name": "Avery Beatty",
                "tel": "327.202.5111",
                "address": "779 Schinner Extension",
                "opening_hours": "08:00",
                "description": "vel",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.96068864336044",
                "viewCounts": 0,
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 37,
            "text": "Delectus delectus et delectus iure veniam.",
            "UserId": 1,
            "RestaurantId": 37,
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
            },
            "Restaurant": {
                "id": 37,
                "name": "Jeremie Reinger",
                "tel": "1-987-196-4489",
                "address": "4113 Kulas Pass",
                "opening_hours": "08:00",
                "description": "Ratione sed velit in quia omnis ipsum non laboriosam cupiditate.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=60.511262250981446",
                "viewCounts": 0,
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z",
                "CategoryId": 1
            }
        },
        {
            "id": 53,
            "text": "Mollitia sint deleniti quia cumque magnam.",
            "UserId": 1,
            "RestaurantId": 3,
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
            },
            "Restaurant": {
                "id": 3,
                "name": "Riley Thompson",
                "tel": "(402) 607-4280 x66533",
                "address": "2941 Noemie Point",
                "opening_hours": "08:00",
                "description": "Quidem et consequuntur ipsam eos iure iste. Et at impedit a molestiae. Officiis possimus veritatis qui dolor maxime non.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=78.55899454185844",
                "viewCounts": 0,
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 74,
            "text": "Eum non cum eum laborum explicabo omnis placeat consectetur eos.",
            "UserId": 1,
            "RestaurantId": 24,
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
            },
            "Restaurant": {
                "id": 24,
                "name": "Grover Lockman",
                "tel": "(953) 445-6068 x44851",
                "address": "684 Christiansen Landing",
                "opening_hours": "08:00",
                "description": "Consequatur quis saepe. Sed explicabo et. Perferendis id similique qui et. Enim asperiores corporis vel deserunt.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=37.107892445116164",
                "viewCounts": 0,
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 107,
            "text": "Magnam laboriosam earum maxime non voluptates sit.",
            "UserId": 1,
            "RestaurantId": 7,
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
            },
            "Restaurant": {
                "id": 7,
                "name": "Osvaldo Schuppe",
                "tel": "1-690-182-8731 x04114",
                "address": "25907 Gislason Inlet",
                "opening_hours": "08:00",
                "description": "Eligendi minus non ipsa unde eaque perferendis. Dolor exercitationem sit tempora aut. Recusandae eius ea culpa dolor dolores possimus tempore sed.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.256524243662",
                "viewCounts": 0,
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 125,
            "text": "Sint illo omnis reprehenderit in.",
            "UserId": 1,
            "RestaurantId": 25,
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
            },
            "Restaurant": {
                "id": 25,
                "name": "Viva Langworth",
                "tel": "(069) 717-1276 x61481",
                "address": "4333 Malachi Shores",
                "opening_hours": "08:00",
                "description": "Tempore debitis beatae sequi sed. Impedit totam natus laborum dolor explicabo veritatis fugit. Sed nihil maxime non atque reprehenderit in in. Fugiat et rerum explicabo rerum architecto.\n \rDeserunt amet et maiores nobis excepturi. Optio dolor vel ea molestias est voluptatem id. In sit est incidunt rerum. Cum voluptates dolores maiores.\n \rNemo ex dolor reiciendis debitis et dolor repellat enim. Veniam aliquam et velit et doloremque necessitatibus architecto. Id inventore porro iure quidem. Perspiciatis est et dolor et eligendi ratione fugiat inventore.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.18413464179813",
                "viewCounts": 0,
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 4,
            "text": "Ipsam ducimus sit consequatur fugiat consequuntur veritatis nostrum occaecati.",
            "UserId": 2,
            "RestaurantId": 4,
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
            },
            "Restaurant": {
                "id": 4,
                "name": "Kiarra Oberbrunner",
                "tel": "1-632-446-9290",
                "address": "554 Casper Passage",
                "opening_hours": "08:00",
                "description": "Magnam amet possimus dolorem fuga molestiae iusto iste eum omnis. Autem sit suscipit voluptates placeat cumque rerum non ducimus odit. Aspernatur mollitia praesentium et omnis quam omnis repellendus reprehenderit. Ipsam mollitia placeat reiciendis sit sunt et expedita alias dolores. Excepturi quos labore quidem suscipit enim qui.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.008677649433314",
                "viewCounts": 0,
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z",
                "CategoryId": 1
            }
        },
        {
            "id": 34,
            "text": "Quo accusantium ipsam aut aut quibusdam vero voluptatum sed occaecati.",
            "UserId": 2,
            "RestaurantId": 34,
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
            },
            "Restaurant": {
                "id": 34,
                "name": "Karen Herzog",
                "tel": "210.915.9116",
                "address": "96662 Madisyn Gateway",
                "opening_hours": "08:00",
                "description": "Voluptatibus mollitia sint cum maiores ea molestiae cupiditate reiciendis.\nMagni ut consequatur et aut dolorum alias quas enim.\nMinus ab ut adipisci.\nQuo laboriosam perspiciatis et dicta iure aut numquam.\nAccusantium mollitia sint ut nemo.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.4506701612953",
                "viewCounts": 0,
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 65,
            "text": "Temporibus ipsa id voluptatem sed voluptatibus quae optio eaque.",
            "UserId": 2,
            "RestaurantId": 15,
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
            },
            "Restaurant": {
                "id": 15,
                "name": "Albina Kohler",
                "tel": "320.376.8858 x28955",
                "address": "86740 Leffler Cove",
                "opening_hours": "08:00",
                "description": "Nostrum voluptas sapiente vel accusamus ipsam odit mollitia accusantium fuga. Itaque dignissimos non dolor provident quibusdam. Quam voluptatem est error officia aut odit veritatis. Sed ipsum aut at enim.\n \rEa quod sunt veritatis libero enim fugit qui ut quod. Consequuntur saepe est excepturi quas rem adipisci expedita sunt aliquam. Accusantium laborum occaecati animi deserunt quas pariatur error.\n \rAdipisci consequatur velit omnis omnis exercitationem et. Odio neque voluptatem vel commodi aut. Ut tempore non eligendi velit distinctio doloremque nisi. Fuga ea non.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=45.4883261649432",
                "viewCounts": 0,
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z",
                "CategoryId": 1
            }
        },
        {
            "id": 82,
            "text": "Rem sed non commodi nesciunt possimus vero.",
            "UserId": 2,
            "RestaurantId": 32,
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
            },
            "Restaurant": {
                "id": 32,
                "name": "Rasheed Brakus",
                "tel": "1-691-139-3737 x6460",
                "address": "58335 Gaylord Common",
                "opening_hours": "08:00",
                "description": "hic tenetur illum",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=53.336623011249614",
                "viewCounts": 0,
                "createdAt": "2021-11-10T10:54:26.000Z",
                "updatedAt": "2021-11-10T10:54:26.000Z",
                "CategoryId": 5
            }
        }
    ]
}


export default {
  components:{NavTabs,NewestRestaurants,NewestComments},  

  data (){
    return {
      restaurants:[],
      comments:[]
    }
  },
   created(){
    this.fetchFeeds()
  },
  methods:{
    fetchFeeds(){
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments
    }
  },
 
}

</script>