<template>
    <header>  
        <div>
            <router-link to="/"><img id="logo" src="../assets/logo.png"></router-link>    
        </div>  
        <div id="navi">
            <nav>            
                <label for="hamburg"><img style="width:30px;cursor:pointer; margin-top:1%;" src="@/assets/weiß_hamb.png" alt="Menü" title="Menü"></label>
                <input type="checkbox" id="hamburg">
                <router-link class="liVonHam" to="/">Home</router-link>
                <router-link class="liVonHam" to="/about">About</router-link>
                <router-link class="liVonHam" to="/redakteure">Redakteure</router-link>
            </nav>
        </div>
    </header>
 </template>

<script>

    export default {
        name: 'Header',
    }    

</script>

 <style scoped>

  header {
    background-color: rgb(145, 32, 32);
    height: 60px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
   }

   nav {
    height: 50px;
    float: right;
    margin-top: 35px;

   }

   nav a {
    padding: 5px;
    margin-left: 10px;
    color: white;
    text-decoration: none;
   }

   #logo {
    width: 160px;
    height: 65px;
   }

   

   #hamburg, [for="hamburg"]{
	display: none;
}

/**************************** 983 px Sreen **********************************/

    @media screen and (max-width: 983px){

    header {
        height: 80px;
    }

    #navi {
        display: block;
        
    }

    nav {
        margin-top: 20px; 
        width: 290px;   
    }
   
	[for="hamburg"] {
		display: block;
        float: right;
        margin-right: 15px;
	}

	#hamburg:checked ~ .liVonHam{
		display: inline;
        margin: 10px 20px 5px 5px;
	} 


	.liVonHam {
        padding: 10px;
        display: none;
    }

}

/**************************** 464 px Sreen **********************************/


@media screen and (max-width: 464px){

    #navi {
        width: 55px;
    }

}


</style>