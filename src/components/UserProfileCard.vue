<template>
  <div class="row">
    <div class="col-md-4 mb-3">
      <img
        class="img-responsive center-block"
        :src="profile.image"
        style="width: 250px;margin-bottom: 25px;"
      >
    </div>
    <div class="col-md-8">

      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <strong><li>{{profile.name}}</li></strong>
      <li>
        <strong>{{profile.email}}</strong>
      </li>
          <li>
            
            {{profile.commentsLength}}
            <strong>已評論餐廳</strong>
           
          </li>
          <li>
            {{profile.favoritedRestaurants}}
            <strong>收藏的餐廳</strong>
            
          </li>
          <li>
            {{profile.following}}
            <strong>followings(追蹤者)</strong>
            
          </li>
          <li>
            {{profile.followers}}
            <strong>followers(追蹤者)</strong>
            
          </li>
        </ul>
      <div class="col-lg-8">
      <router-link
      v-if="profile.isAdmin"  
       class="btn btn-primary btn-border mr-2"
       :to="{ name:'users' , params:{ id : profile.id}}"
      >
      Edit
      </router-link>
      <div v-else>
      <button
      v-if="profile.isFollowed"
        type="button"
        class="btn btn-danger btn-border mr-2"
      >
        取消追蹤
      </button>
      <button
      v-else
        type="button"
        class="btn btn-primary btn-border mr-2"
      >
        追蹤
      </button>
      </div>
    </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props:{
    initialProfile:{
      type:Object,
      required:true
    }
  },
  data(){
    return{
      profile: this.initialProfile
    }
  }
}
</script>