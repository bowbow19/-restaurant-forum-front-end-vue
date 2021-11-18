<template>
    <div class="card mb-3">
        <div class="card-header">
            收藏的餐廳
        </div>
        <div class="card-body">
            <router-link
            v-for="favorite in FavoritedRestaurants"
            :key="favorite.id"
            :to="{ name: 'users' , params: { id : favorite.id}}"
            >asdfasdfasd
                <img 
                :src="favorite.image"  
                width="60"
                height="60"
                class="mr-1">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        FavoritedRestaurants:{
            type:Array,
            default:() => {}
        }
    }
}
</script>