<template>
<div class="block-header">
 <div class="nav-header one">
    <div class="icon-button">
     <a href=""><img src="../assets/icon-button360.png" alt=""></a>
     </div>
     <div>
         <img src="../assets/logo360.png" alt="">
     </div>
     <div>
         <p>Moogle</p>
     </div>
     <form>
         <a href=""><input type="search" name="q" placeholder="Search"></a> 
      </form>
 </div>
 <div class="nav-header two">
     <input id="tab1" type="radio" name="tabs" checked>
  <label for="tab1">Фильмы</label>
    
  <input id="tab2" type="radio" name="tabs">
  <label for="tab2">Сериалы</label>
    
  <input id="tab3" type="radio" name="tabs">
  <label for="tab3">Избранное</label>
    
 </div>
 </div>
</template>

<script>
    export default {
        name: 'CustomHeader',
        data() {
            return {
                id: 1
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .block-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 40px;
    }

    .one {
        width: 100%;
        height: 80px;
        background-color: #77c1bb;
        display: flex;
        flex-direction: row;
    }
    .icon-button {
        margin-top: 6px;
    }
    .one div img {
        margin-top: 20px;
        margin-left: 20px;
    }
    .one div p {
        margin-top: 23px;
        margin-left: 5px;
    }
    
    .one form input {
        margin-left: 1000px;
        margin-top: 40px;
    } 
    .two {
        width: 100%;
        height: 50px;
        border-bottom: 4px solid #a5aaaf;
        display: flex;
        justify-content: center;
    }

    .one input {
        border: 0px;
        background-color: #77c1bb;
        border-bottom: 1px solid #262626;
    }

   .two input {
        display: none;
       
    }

    label {
        display: inline-block;
        margin: 0 0 -1px;
        padding: 15px 25px;
        font-weight: 600;
        text-align: center;
        color: #bbb;
        border: 1px solid transparent;
        font-family: sans-serif;
    }

    label:before {
        font-family: fontawesome;
        font-weight: normal;
        margin-right: 10px;
    }

    label[for*='1']:before {
     
    }

    label[for*='2']:before {
       
    }

    label[for*='3']:before {
    }


    label:hover {
        color: #888;
        cursor: pointer;
    }

    .two input:checked+label {
        color: #555;
        border: 1px solid #ddd;
        border-top: 1px solid #fff;
        border-bottom: 3px solid #000;
    }

    #tab1:checked~#content1,
    #tab2:checked~#content2,
    #tab3:checked~#content3,
    #tab4:checked~#content4 {
        display: block;
    }
</style>
