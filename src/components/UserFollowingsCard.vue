<template>
    <div class="card mb-3">
        <div class="card-header">
            followings(追蹤者)
        </div>
        <div class="card-body">
            <router-link
            v-for="followings in UserFollowingsCard"
            :key="followings.id"
            :to="{ name: 'users' , params: { id : followings.id}}"
            >
                <img 
                :src="followings.image"  
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
        UserFollowingsCard:{
            type:Array,
            default:() => {}
        }
    }
}
</script>