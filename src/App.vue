<template> 
     
<div id="app"> 
         
 
 
<router-link to="/previewcard">About</router-link> 
 
<router-view> </router-view> 
 
</div> 
</template> 
 
<script> 
// import home from '@/components/home' 
//import axios from 'axios' 
     
import PreviewCardTop from '@/components/PreviewCard/PreviewCardTop' 
    import axios from 'axios'
    export default { 
 
  name: 'App', 
        date(){
         return { 
      searcResults: [], 
      searchValue: '', 
      apiUrl: "https://api.themoviedb.org/3/movie/popular?api_key=3b4c6e4b835fcf0c54e75da62ba54f49&language=en-US&page=1" 
    } 
  },} 
        </script> 
 
<style> 
 </style> 