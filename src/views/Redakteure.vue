<template>

    <h1>Unsere Redakteure</h1>
    <div class="divStyle">
        <p> {{ redakteur1.name }}<br>
        <img :src='redakteur1.img' alt="Redakteur" title="Redakteur"></p>
    </div>
    <br>
    <div class="divStyle">
        <p> {{ redakteur2.name }}<br>
        <img :src='redakteur2.img' alt="Redakteur" title="Redakteur"></p>
    </div>
    <br>
    <div class="divStyle">
        <p> {{ redakteur3.name }}<br>
        <img :src='redakteur3.img' alt="Redakteur" title="Redakteur"></p>
    </div>

</template>

<script>

    export default {
        name: 'Redakteure',
        data () {
            return {            
                redakteur1:  {
                    name: 'Oliver',
                    img: require('../assets/bild_pixabay_von_stephanie_edwards_kostenlos.png'),
                    },
                redakteur2:  {
                    name: 'Janet',
                    img: require('../assets/bild_pixabay_von_stephanie_edwards_kostenlos.png'),
                    },
                redakteur3:  {
                    name: 'Bärbel',
                    img: require('../assets/bild_pixabay_von_stephanie_edwards_kostenlos.png'),
                    }
              }            
        }
    }

</script>

<style scoped>

    img {
        width: 100px;
        height: 100px;
    }


</style>