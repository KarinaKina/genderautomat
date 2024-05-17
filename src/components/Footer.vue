<template>

    <footer>
        
            <router-link class="footNav" to="datenschutz">Datenschutz</router-link>
            <router-link class="footNav" to="impressum">Impressum</router-link>
    </footer>

</template>

<script>

    export default {
        name: 'Footer',
    }

</script>

<style>

footer {
    bottom: 5px;
    background-color: rgb(145, 32, 32);
    height: 60px;
    width: 98%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

.footNav a {
    list-style: none;
    display: flex;  
}

.footNav {
    margin-left: 20px;    
    color: white;   
    text-decoration: none;
}

</style>