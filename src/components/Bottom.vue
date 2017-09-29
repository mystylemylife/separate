<template>
    <div class="bottom">
        {{this.$store.state.bottom}}
    </div>
</template>
<script>
    export default{
        

        data() {
            return {
              
            };
        },

        // All slick methods can be used too, example here
        methods: {
          
        },
        created(){
            this.$store.dispatch('getAllData', this)
            
        }
    }
</script>
<style>
</style>
