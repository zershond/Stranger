<template>
<div class="">
  <div class="zer-myinfo-header">
    <div class="zer-abstract">
      <span>我&nbsp;的&nbsp;简&nbsp;介</span>
    </div>
    <div>
      <span>About me</span>
    </div>
  </div>
  <div class="zer-myinfo-container">
    <div class="zer-myinfo-item">
      <img class="zer-item-img" v-bind:src="myphoto" alt="简介配图">
      <div class="zer-info">
        <p>我是一个码农</p>
        <p>三月的烟雨 飘摇的南方,你坐在你空空的米店,你一手拿着苹果,一手拿着命运在寻找你自己的香</p>
      </div>
    </div>
    <div style="clear: both"></div>
  </div>
</div>
</template>

<style scope>
.zer-abstract{
  font-size: 18px;
  font-weight: bold;
  padding: 5px 0;
}
.zer-myinfo-container{
  width: 1550px;
  margin: 0 auto;
  overflow: hidden;
}
.zer-myinfo-item{
  width: 100%;
  text-align: left;
  padding: 20px 5px;
}
.zer-item-img{
  width: 800px;
  /*float: left;*/
}
.zer-info{
  width: 700px;
  float: right;
  padding-top: 20px;
}
.zer-info p{
  text-indent: 25px;
  color: #F5F6EB;
  font-size: 14px;
  padding: 5px 0;
}
</style>

<script>
export default{
  name: "MyInfo",
  data () {
    return {
      myphoto: '/static/img/img01.png'
    }
  }
}
</script>
