<template>
    <form action="#" @submit.prevent="onSubmit">
       <p v-if="errorsPresent" class="error">Please fill out both fields!</p>
   
       <div class="ui labeled input fluid">
         <div class="ui label">
           <i class="germany flag"></i> German
         </div>
         <input type="text" placeholder="Enter word..." v-model="word.german" />
       </div>
   
       <div class="ui labeled input fluid">
         <div class="ui label">
           <i class="united kingdom flag"></i> English
         </div>
         <input type="text" placeholder="Enter word..." v-model="word.english" />
       </div>

       <!-- Task 3 -->
       <div class="ui labeled input fluid">
         <div class="ui label">
           <i class="vietnam flag"></i> Vietnam
         </div>
         <input type="text" placeholder="Enter word..." v-model="word.vietnam" />
       </div>
   
       <button class="positive ui button">Submit</button>
     </form>
   </template>
   
   <script>
   export default {
     name: 'word-form',
     props: {
       word: {
         type: Object,
         required: false,
         default: () => {
            return {
                english: '',
                german: '',
                // Task 3
                vietnam: ''
            };
         }
       }
     },
     data() {
       return {
         errorsPresent: false
       };
     },
     methods: {
       onSubmit: function() {
         if (this.word.english === '' || this.word.german === '' || this.word.vietnam === '') { // Task 3
            this.errorsPresent = true;
         } else {
            this.$emit('createOrUpdate', this.word);
         }
       }
     }
   };
   </script>
   
   <style scoped>
   .error {
     color: red;
   }
   </style>