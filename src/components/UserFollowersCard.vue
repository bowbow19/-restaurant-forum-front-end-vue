<template>
    <div class="card mb-3">
        <div class="card-header">
            followers(追蹤者)
        </div>
        <div class="card-body">
            <router-link
            v-for="follower in UserFollowersCard"
            :key="follower.id"
            :to="{ name: 'users' , params: { id : follower.id}}"
            >
                <img 
                :src="follower.image"  
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
        UserFollowersCard:{
            type:Array,
            default:() => {}
        }
    }
}
</script>