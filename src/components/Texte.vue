<template>        

<main>
    
    <h1>Willkommen beim Fachverlag für technische Dokumentationen!</h1>
    <h2>Übersetzung der Dokumentationen unserer Redakteure in gendergerechte Sprache</h2>
    
    <!-- Verschiedene Texte aus Anleitungen, Herkunft jeweils unter dem Text -->
    <div class="divStyle">
        <h3>Staubsauger - Auszug aus der technischen Dokumentation</h3>
        <p class="app">{{ benutzer }} Sie können das Pulsieren des Motors bei Warnmeldungen deaktivieren. Ihr
            Motor wird dann bei Warnmeldungen nicht mehr pulsieren, jedoch werden die
            Informationen zur Laufzeit-Warnmeldung weiterhin auf dem Display angezeigt.
            Wenn {{ einzelne }} Warnmeldungen auslöst, wird das Gerät im Falle einer
            Blockierung trotzdem pulsieren. So wird sichergestellt, dass Sie immer alle
            Blockierungen entfernen und Schäden am Gerät verhindern.
            Tippen Sie auf den Bildschirm, um durch das Einstellungsmenü zu scrollen.
            Wählen Sie die Option „Warnmeldungen“ aus.<br> {{ verfasser }} <br>
            <!-- Veränderter Auszug zur Dokumentation: https://www.dyson.de/content/dam/dyson/maintenance/user-guides/de_DE/vacuumcleaners/cordlessstickvacuums/v12/V12_Bedienungsanleitung.pdf -->
            <button @click="staubsauger">Gendergerecht</button>
        </p>        
    </div>

    <div class="divStyle">
        <h3>Fernseher - Auszug aus der technischen Dokumentation</h3>
        <p class="app">An {{ interessenten }} dieses Fernsehers. Falsche Spannungen können das Gerät beschädigen. Dieses Gerät darf
            nur an ein Stromversorgungsnetz mit der auf dem Typenschild angegebenen Spannung und Frequenz mittels beigefügtem Netzkabel 
            angeschlossen werden. Der Netzstecker des TV-Gerätes muss leicht erreichbar sein, damit das Gerät jederzeit vom Netz getrennt werden kann. 
            {{ leser }} sollten sich bewusst sein, das wenn Sie den Netzstecker abziehen, sie nicht am Kabel ziehen, sondern am Steckergehäuse. 
            Die Kabel im Netzstecker könnten beschädigt werden und beim Wiedereinstecken einen Kurzschluss verursachen.
            <!-- Veränderter Auszug zur Dokumentation: https://cdn.loewe.tv/manuals_new/TV_BA/L2715/68417xxx_68435xxx_68436xxx_Connect_32_37_42/34172002_Connect_32_42_5w_DE.pdf -->
            <button @click="fernseher">Gendergerecht</button>
        </p>
        
    </div>

    <div class="divStyle">
        <h3>Drucker - Auszug aus der technischen Dokumentation</h3>
        <p v-bind="finden" class="app" >Bestimmte Druckeinstellungen, die Sie häufig verwenden, können Sie als
            Schnelleinstellungen < speichern. Wenn {{ besitzer }} beispielsweise häufig Umschläge bedrucken, 
            können Sie eine Druckaufgabe erstellen, in der das Papierformat, die Druckqualität und die
            Ausrichtungseinstellungen definiert sind, die Sie normalerweise.für Umschläge
            verwenden. Somit brauchen {{ mitarbeiter }} beim Bedrucken von Umschlägen nur noch diese
            Druckaufgabe auszuwählen und müssen nicht mehr jede Druckeinstellung separat
            vornehmen.
            <!-- Veränderter Auszug zur Dokumentation: https://h10032.www1.hp.com/ctg/Manual/c00044027.pdf -->
            <button @click="drucker">Gendergerecht</button>
        </p>
        <p>{{reinerText}}</p>


    </div>

</main>

</template>

<script>

export default {
        name: 'Texte',
    
        data() {
            return {
                benutzer: 'Sehr geehrter Benutzer',
                verfasser: 'Der Verfasser des Buches ist unbekannt.',
                interessenten: 'die Interessenten',
                leser: 'Der Leser, die Leser',
                einzelne: 'der Einzelne',
                besitzer: 'der neue Besitzer',
                mitarbeiter: 'die Mitarbeiter',
                reinerText: '',
            };
        },
        methods: {
            staubsauger () {
                this.benutzer = 'Sehr geehrte Benutzerinnen und Benutzer';
                this.verfasser = 'Es ist nicht bekannt, wer das Werk verfasst hat.';
                this.einzelne = 'der Einzelne Mensch';
            },
            fernseher () {
                this.interessenten = 'Interessierte';
                this.leser = 'Lesende';
            },
            drucker () {
                this.besitzer = 'Sie';
                this.mitarbeiter = 'die Mitarbeiterinnen und Mitarbeiter';
            },
            finden () {
                let text = document.getElementsByClassName('app');
                let reinerText = text.replace(/(<([^>]+)>)/ig," ");
                console.log(reinerText) ;
            },
            
        },

    };
 
</script>

<style scoped>

    main {
        height: auto;
    }

    button {
        margin-top: 20px;
        float: right;
    }

    p {
        float: left;
    }


</style>