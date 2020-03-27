<template>
    <v-card max-width="1000">
        <v-card-text>
            <v-row align="center" justify="center">
                <h1 class="heading">
                    Adam <strong>Kochański</strong>
                </h1>
            </v-row>
        </v-card-text>
        <v-card-text>
            {{$t('hi')}}
        </v-card-text>
        <v-card-text>
            {{$t('intro')}}
        </v-card-text>
        <v-card-text>
            <v-row align="center" justify="center">
                <v-img src="../../assets/profilowe.jpg" max-width="400" class="profile-image"/>
            </v-row>
        </v-card-text>
        <v-card-text>
            {{$t('introTechnologies')}}
            </v-card-text>
        <v-card-text>
            {{$t('currentTechTableIntro')}}
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class='text-left'></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="tech in currentTechnologies">
                        <td>{{tech}}</td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card-text>
        <v-card-text>
            {{$t('futureTechTableIntro')}}
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class='text-left'></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="tech in futureTechnologies">
                        <td>{{tech}}</td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card-text>
        <v-card-text>
            {{$t('pastTechTableIntro')}}
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class='text-left'></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="tech in pastTechnologies">
                        <td>{{tech}}</td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
  export default {
    name: 'AboutMe',
    data: () => ({
      currentTechnologies: ['Java', 'Flutter', 'Kotlin', 'Spring/Spring Boot', 'Typescript + Vue.js + Vuetify'],
      futureTechnologies: ['Rust + Web Assembly', 'Azure', 'Redux', 'Apache Lucene'],
      pastTechnologies: ['MongoDB', 'MS SQL Server', 'Flask', 'Django', 'Leaflet.js', 'Apache Storm', 'Apache Kafka'],
    }),
  };
</script>

<style scoped>
    .profile-image{
        border-radius: 50%;
    }
</style>

<i18n>
    {
    "en": {
    "hi":"Hi,",
    "intro":"my name is Adam and I'm a recent computer science engineering degree graduate with IT systems specialty. It's been a couple of years since I discovered my passion for learning new technologies and programming languages. With each project I realise how much more I want to learn. ",
    "introTechnologies":"In my projects I mainly use Java-like languages: Java, Flutter, C# and Kotlin (I'm a fan). Recently I took interest in creating web applications in Vue.js framework, in which I wrote an app that I described as my diploma work and an app which serves as a website on which you can read this description.",
    "currentTechTableIntro":"My preferable technology stack:",
    "futureTechTableIntro":"Technologies which I plan on learning:",
    "pastTechTableIntro":"History:"
    },
    "pl": {
    "hi":"Cześć,",
    "intro":"na imię mam Adam i jestem świeżym absolwentem studiów inżynierskich informatyki ze specjalizacją w systemach informatycznych. Już od paru lat moją pasją jest poznawanie nowych technologii i języków programowania. Z każdym kolejnym projektem zdaję sobie sprawę, ile jeszcze rzeczy chciałbym poznać - języków programowania, bibliotek i metodyk.",
    "introTechnologies":"Głównie piszę w językach Javopodobnych - Java, Flutter, C# oraz Kotlin, którego jestem fanem. Ostatnio zainteresowany jestem tworzeniem aplikacji internetowych we frameworku Vue.js, w którym to została napisana aplikacja opisywana w mojej pracy inżynierskiej oraz strona, na której zamieszczony jest ten opis. ",
    "currentTechTableIntro":"Lista używanych technologii:",
    "futureTechTableIntro":"Lista technologii, z którymi mam plan się zapoznać:",
    "pastTechTableIntro":"Historia:"
    }
    }
</i18n>
