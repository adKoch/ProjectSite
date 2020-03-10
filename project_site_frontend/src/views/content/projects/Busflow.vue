<template>
    <v-card flat>
        <v-card-title>BusFlow</v-card-title>
        <v-divider class='ma-5'/>
        <v-card-text>
            {{$t('intro1')}}
        </v-card-text>
        <v-card-text>
            <v-lazy>
                <v-row align="center" justify="center">
                    <v-img src="../../../assets/projects/busflow/busflow_main.png" aspect-ratio="2.3" width="300" class="ma-10"></v-img>
                </v-row>
            </v-lazy>
        </v-card-text>
        <v-card-text>{{$t('intro2')}}</v-card-text>
        <v-card-title>{{$t('implTitle')}}</v-card-title>
        <v-divider class='ma-5'/>
        <v-card-subtitle><strong>{{$t('techSubtitle')}}</strong></v-card-subtitle>
        <v-card-text>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class='text-left'>{{$t('techHead')}}</th>
                        <th class='text-left'>{{$t('usageHead')}}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{{$t('vueRowName')}}</td>
                        <td>{{$t('vueRowUsage')}}</td>
                    </tr>
                    <tr>
                        <td>{{$t('leafletRowName')}}</td>
                        <td>{{$t('leafletRowUsage')}}</td>
                    </tr>
                    <tr>
                        <td>{{$t('vuetifyRowName')}}</td>
                        <td>{{$t('vuetifyRowUsage')}}</td>
                    </tr>
                    <tr>
                        <td>{{$t('kotlinRowName')}}</td>
                        <td>{{$t('kotlinRowUsage')}}</td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card-text>
        <v-card-subtitle><strong>{{$t('moduleSubtitle')}}</strong></v-card-subtitle>
        <v-card-text>{{$t('modulesIntro')}}
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class='text-left'>{{$t('modHead')}}</th>
                        <th class='text-left'>{{$t('functionHead')}}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{{$t('databaseRowName')}}</td>
                        <td>{{$t('databaseRowFunction')}}</td>
                    </tr>
                    <tr>
                        <td>{{$t('updateModRowName')}}</td>
                        <td>{{$t('updateModRowFunction')}}</td>
                    </tr>
                    <tr>
                        <td>{{$t('guiModRowName')}}</td>
                        <td>{{$t('guiModRowFunction')}}</td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card-text>
        <v-card-title>{{$t('functionsTitle')}}</v-card-title>
        <v-divider class='ma-5'/>
        <v-card-subtitle><strong>{{$t('positionFunctionSubtitle')}}</strong>
        </v-card-subtitle>
        <v-card-text>
            {{$t('positionFunctionText')}}
        </v-card-text>
        <v-card-text>
            <v-row align="center" justify="center">
                <video src="../../../assets/projects/busflow/wyswietlanie_ed.webm" width="500" autoplay loop/>
            </v-row>
        </v-card-text>
        <v-card-subtitle><strong>{{$t('filteringFunctionSubtitle')}}</strong>
        </v-card-subtitle>
        <v-card-text>
            {{$t('filteringFunctionText')}}
        </v-card-text>
        <v-card-text>
            <v-row align="center" justify="center">
                <v-lazy>
                    <video src="../../../assets/projects/busflow/filtrowanie_1_ed.webm" width="500" autoplay loop class="ma-5"/>
                    <video src="../../../assets/projects/busflow/filtrowanie_2_ed.webm" width="500" autoplay loop class="ma-5"/>
                </v-lazy>
            </v-row>
        </v-card-text>
        <v-card-subtitle><strong>{{$t('linesFunctionSubtitle')}}</strong></v-card-subtitle>
        <v-card-text>
            {{$t('linesFunctionText1')}}
        </v-card-text>
        <v-card-text>
            <v-row align="center" justify="center">
                <v-lazy>
                    <video src="../../../assets/projects/busflow/dostepnosc_ed.webm" width="500" autoplay loop/>
                </v-lazy>
            </v-row>
        </v-card-text>
        <v-card-text>
            {{$t('linesFunctionText2')}}
        </v-card-text>
        <v-card-subtitle>
            <strong>{{$t('chartFunctionSubtitle')}}</strong>
        </v-card-subtitle>
        <v-card-text>
            {{$t('chartFunctionText')}}
        </v-card-text>
        <v-card-text>
            <v-row align="center" justify="center">
                <v-lazy>
                    <video src="../../../assets/projects/busflow/wykres_ed.webm" width="500" autoplay loop/>
                </v-lazy>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">

  export default {
    name: 'busflow',
  };
</script>
<i18n>
    {
    "en": {
    "intro1":"This project was presented as an engineer's thesis \"Design and implementation of an application supporting the operation of a municipal transport facility in a selected field of its activity\". Scope of application's functionality consisted of presentation of traffic connected to public transportation.",
    "intro2":"This project was inspired mainly by warsawian authorities project \"Otwarte dane - czyli dane po warszawsku\". It is an initiative to share data about public transportation in Warsaw e.g. position of buses, trams and bus/tram stops.",
    "implTitle":"Implementation",
    "techSubtitle":"Used Technologies",
    "techHead":"Technology",
    "usageHead":"Usage",
    "vueRowName":"Vue.js",
    "vueRowUsage":"reactive presentation of data",
    "leafletRowName":"Leaflet.js",
    "leafletRowUsage":"map operations",
    "vuetifyRowName":"Vuetify",
    "vuetifyRowUsage":"graphics and controls",
    "kotlinRowName":"Kotlin, Spring Boot Webflux",
    "kotlinRowUsage":"communication with a database and integration with warsawian public transportation system",
    "moduleSubtitle":"Application modules",
    "modulesIntro":"App consists of 3 modules:",
    "modHead":"Module",
    "functionHead":"Function",
    "databaseRowName":"Database and API module sharing db's resources",
    "databaseRowFunction":"MongoDB with its resources shared through HTTP based REST API",
    "updateModRowName":"Module responsible for continuous updating data by using warsawian public transportation IT system",
    "updateModRowFunction":"WebClient responsible for downloading data in constant set intervals",
    "guiModRowName":"GUI module with defined operations that are supposed to be processed on client side",
    "guiModRowFunction":"Single Page Application with a map as a main view",
    "functionsTitle":"Basic functions",
    "positionFunctionSubtitle":"Showing positions of buses and trams",
    "positionFunctionText":"Position of a vehicle is updated every 10 seconds (interval based on on actual information update interval sent by vehicles). All buses and trams are marked by markers with tooltips showing their respective lines. If tooltips are covering each other and obstructing information presented, they are grouped into group marker with a tooltip showing a list of all lines grouped.",
    "filteringFunctionSubtitle":"Filtering based on drawn geometric shapes",
    "filteringFunctionText":"All elements shown on map can by filtered by drawing polygons on the map. There are predefined figures that are, in this case, districts fo Warsaw e.g. Bemowo or city centre Śródmieście.",
    "linesFunctionSubtitle":"Area coverage and number of lines for each bus/tram stop",
    "linesFunctionText1":"Number of lines on a stop is represented as a color based on visible spectrum that is based on previously established maximum value.",
    "linesFunctionText2":"It is also possible to show an area for each stop presenting line coverage with given circle radius.",
    "chartFunctionSubtitle":"Number of stops for each line chart as an example of a possible visualisation",
    "chartFunctionText":"As an example of a possible visualisation a google chart is shown as a relation between number of bus/tram stops for each line in a given chosen area."
    },
    "pl": {
    "intro1":"Projekt ten został przedstawiony jako praca inżynierska zatytułowana \"Projekt i implementacja aplikacji wspomagającej funkcjonowanie zakładu transportu miejskiego w wybranym zakresie jego działalności\". Zakres implementacji skupiał się na przedstawianiu danych związanych z ruchem pojazdów komunikacji miejskiej występujących w systemie zakładu ruchu miejskiego.",
    "intro2":"Projekt był w dużej mierze inspirowany projektem m. st. Warszawy \"Otwarte dane - czyli dane po warszawsku\", który polega na udostepnieniu danych na temat aktualnej sytuacji ruchu miejskiego wWarszawie takich jak np. położenie autobusów, tramwajów i przystanków.",
    "implTitle":"Forma realizacji",
    "techSubtitle":"Technologie",
    "techHead":"Technologia",
    "usageHead":"Wykorzystanie",
    "vueRowName":"Vue.js",
    "vueRowUsage":"reaktywne wyświetlanie danych",
    "leafletRowName":"Leaflet.js",
    "leafletRowUsage":"operacje na mapach",
    "vuetifyRowName":"Vuetify",
    "vuetifyRowUsage":"elementy graficzne",
    "kotlinRowName":"Kotlin, Spring Boot Webflux",
    "kotlinRowUsage":"komunikacja z bazą danych oraz integracja z systemem ZTM Warszawa",
    "moduleSubtitle":"Moduły",
    "modulesIntro":"Aplikacja składa się z 3 modułów:",
    "modHead":"Moduł",
    "functionHead":"Odpowiedzialność",
    "databaseRowName":"Baza danych oraz moduł API udostępniający jej zasoby",
    "databaseRowFunction":"MongoDB z określonym dostępem poprzez REST API korzystające z protokołu HTTP",
    "updateModRowName":"Moduł odpowiedzialny za stałą aktualizację danych z systemu ZTM",
    "updateModRowFunction":"WebClient odpowiedzialny za ciągłą aktualizację danych z systemu ZTM Warszawa",
    "guiModRowName":"Moduł odpowiadający za interfejs graficzny oraz operacje wykonywane po stronie klienta",
    "guiModRowFunction":"Single Page Application z mapą, jako głownym widokiem strony",
    "functionsTitle":"Podstawowe funkcje",
    "positionFunctionSubtitle":"Wyświetlanie pojazów",
    "positionFunctionText":"Położenie pojazdów aktualizowane jest co 10 sekund (z taką częstotliwością pojazdy wysyłają informacje na temat swojego położenia). Wszystkie pojazdy są oznaczone znacznikami, które posiadają etykietę z odpowiadającą linią. W przypadku nakładania się na siebie znaczników, są one grupowane w jeden znacznik grupowy, który posiada etykietę z listą wszystkich linii.",
    "filteringFunctionSubtitle":"Filtrowanie poprzez rysowanie figur na mapie",
    "filteringFunctionText":"Elementy wyświetlane na mapie mogą być filtrowane poprzez narysowane na mapie figury. Dostępne jest także filtrowanie poprzez wcześniej zdefiniowane figury - w tym przypadku dzielnice Warszawy.",
    "linesFunctionSubtitle":"Dostępność przystanków oraz liczba linii na przystankach",
    "linesFunctionText1":"Liczba przystanków jest reprezentowana jako barwa z zakresu widma widzialnego na podstawie znormalizowanej wartości za pomocą przyjętej wartości maksymalnej.",
    "linesFunctionText2":"Możliwe jest wyznaczenie obszarów dla każdego z przystanków o założonym promieniu.",
    "chartFunctionSubtitle":"Wykres liczby przystanków dla linii jako przykładowa wizualizacja",
    "chartFunctionText":"Jako przykładowa wizualizacja przedstawiony został wykres przystanków dla linii."
    }
    }
</i18n>
