<template>
    <div class="card mb-3">
        <div class="card-header">
            已評論餐廳
        </div>
        <div class="card-body">
            <router-link
            v-for="Comments in UserCommentsCard"
            :key="Comments.id"
            :to="{ name: 'users' , params: { id : Comments.id}}"
            >
                <img 
                :src="Comments.Restaurant.image"  
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
        UserCommentsCard:{
            type:Array,
            default:() => {}
        }
    }
}
</script>