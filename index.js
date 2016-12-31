var builder = require('botbuilder');  
var restify = require('restify');  
var apiairecognizer = require('api-ai-recognizer');  

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var server = restify.createServer();  
server.listen(process.env.port || process.env.PORT || 3978, function () {  
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat bot
var connector = new builder.ChatConnector({  
    appId: 'f2082879-8178-45d5-bf25-673b5e5c1fc6',
    appPassword: 'jtqPRuuL7Yn0fP2ee5Ly3qq'
});
var bot = new builder.UniversalBot(connector);

var recognizer = new apiairecognizer('7c60839dd93244dba8ce1469b3942f8e');
var intents = new builder.IntentDialog({
        recognizers: [recognizer]
});

var data = 
{
    "airports":[
        {
            "city":"amsterdam",
            "country":"netherlands",
            "description":"Sit near the KLM lounge and tweak this password with the current date: KLM110613 (i.e. KLMDDMMYY) -- Free wifi; network name: Airport_Free_WiFi",
            "name":"Amsterdam Airport Schiphol"
        },
        {
            "city":"frankfurt",
            "country":"germany",
            "description":"Free wireless extended throughout entire airport. Network name: Frankfurt Airport, Hotspot Telekom - Name and email required.",
            "name":"Frankfurt Airport"
        },
        {
            "city":"istanbul",
            "country":"turkey",
            "description":"Several passwords.1.Toss Cafe Anyway, the password for their wifi is atahava2012 -- 2. Next to the food court downstairs, to the right: network name: palmiyeturizm password: phone-card -- 3. Upstairs by the Food Court, network name: PrimeClass_Lounge password: Lounge2015 -- The Eat u0026 Go by Gates 501-504 network name: Eatu0026Go 500BG password: istanbul4 -- Both In front of Skyteam Lounge:Network: eatandgo. Password: istanbul1Network: eatandGo2. Password: istanbul2 -- Takeoff Cafe; network name: takeoff - password: cafe1986 -- Network : TKLounge username : TKpassword: ISTANBULHAVANA",
            "name":"Istanbul Ataturk Airport"
        },
        {
            "city":"maiquetia",
            "country":"venezuela",
            "description":"Wifi Network: WIFIAEROPUERTO Password: WIFIAEROPUERTO -- Admirals Club; password: club2000",
            "name":"International Airport of Maiquetia"
        },
        {
            "city":"bangkok",
            "country":"thailand",
            "description":"Bangkok Thai Lounge: network name: THAINETWORK_SILK (D) Username: tglounge Password: tglounge -- Oman Air Lounge; username: WYL - password: welcome@wyl",
            "name":"Suvarnabhumi Airport"
        },
        {
            "city":"sydney",
            "country":"australia",
            "description":"SkyTeam Lounge near Gate 24; password: skyteam2015\u00a0 -- Emirates Loungeufeff: network name: EK Lounges password: e12345678e -- Virgin Domestic Lounge password: vasupercars",
            "name":"Sydney Airport"
        },
        {
            "city":"vienna",
            "country":"austria",
            "description":"Free wireless; network name: AIRPORT_FREE_WIFI no password required throughout entire airport.",
            "name":"Vienna International Airport"
        },
        {
            "city":"velika gorica",
            "country":"croatia",
            "description":"15 minutes free wireless.",
            "name":"Zagreb Airport"
        },
        {
            "city":"london",
            "country":"united kingdom of great britain and northern ireland",
            "description":"Plaza Premium Lounge (arrivals hall) Terminal 2 network name: PPLLHR - password: plaza2015 -- Admirals Club; password: HAVANA2016 -- 40 minutes free wifi; lockouts MAC address based. Hereu0027s how to extend your wireless access indefinitely: http://foxnomad.com/2014/05/22/unlock-unlimited-wifi-airports-time-restrictions/",
            "name":"Heathrow Airport"
        },
        {
            "city":"guatemala",
            "country":"guatemala",
            "description":"Outside of Airport Lounge Coffee Shop; wifi passwords - Airport Lounge 1: c56fd97a30Airport Lounge 2: c56fd97a32",
            "name":"La Aurora International Airport"
        },
        {
            "city":"new york",
            "country":"united states of america",
            "description":"Wingtip Lounge password: WiNgtip$ Delta Sky Club password: godelta -- Admirals Club; password: HAVANA2016 -- Alitalia VIP Lounge; network name: AlitaliaVIP - password: romamilano",
            "name":"John F. Kennedy International Airport"
        },
        {
            "city":"stockholm",
            "country":"sweden",
            "description":"Free wireless throughout airport.",
            "name":"Stockholm Arlanda Airport"
        },
        {
            "city":"manila",
            "country":"philippine",
            "description":"Terminal 3: Go upstairs to left, follow all the way to end. At the food court there is wifi. If you buy a coffee theyu0027ll give you a password if you ask.",
            "name":"Ninoy Aquino International Airport"
        },
        {
            "city":"sao paulo",
            "country":"brazil",
            "description":"Air France Business Lounge: Network name: villa gru - password: grulounge -- VIP Lounge LATAM; password: latamvip2",
            "name":"Sao Paulo International Airport"
        },
        {
            "city":"atlanta",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta -- Admirals Club (North Terminal, Concourse T) password: HAVANA2016 -- The CLUB password: Georgia2013*",
            "name":"Hartsfield-Jackson Atlanta International Airport"
        },
        {
            "city":"boston",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta -- Admirals Club; password: HAVANA2016 -- Terminal E; Vino Volo password: welovewinetoo",
            "name":"Boston Logan International Airport"
        },
        {
            "city":"chicago",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta -- Admirals Club; password: HAVANA2016",
            "name":"O'Hare International Airport"
        },
        {
            "city":"kentucky",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta",
            "name":"Cincinnati/Northern Kentucky International Airport"
        },
        {
            "city":"dallas",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta -- Centurion Lounge; password: MemberSince -- Admirals Club; password: HAVANA2016",
            "name":"DFW Airport"
        },
        {
            "city":"detroit",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta",
            "name":"Detroit Metropolitan Wayne County Airport"
        },
        {
            "city":"miami",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta",
            "name":"Fort Lauderdale-Hollywood International Airport"
        },
        {
            "city":"honolulu",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta -- Admirals Club; password: HAVANA2016",
            "name":"Honolulu International Airport"
        },
        {
            "city":"houston",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta -- Centurion Lounge; password: MemberSince",
            "name":"George Bush Intercontinental Airport"
        },
        {
            "city":"indianapolis",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta",
            "name":"Indianapolis International Airport"
        },
        {
            "city":"jacksonville",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta",
            "name":"Jacksonville International Airport"
        },
        {
            "city":"los angeles",
            "country":"united states of america",
            "description":"Delta Sky Club password: deltaone",
            "name":"Los Angeles International Airport"
        },
        {
            "city":"memphis",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta",
            "name":"Memphis International Airport"
        },
        {
            "city":"miami",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta -- Centurion Lounge; password: MemberSince -- American Airlines Lounge password: HAVANA2016",
            "name":"Miami International Airport"
        },
        {
            "city":"milwaukee",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta",
            "name":"General Mitchell International Airport"
        },
        {
            "city":"minneapolis",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta",
            "name":"Minneapolis Saint Paul International Airport"
        },
        {
            "city":"nashville",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta -- American Airlines Admirals Club; password: HAVANA2016(Concourse C, across from gate C10)",
            "name":"Nashville International Airport"
        },
        {
            "city":"new orleans",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta",
            "name":"Louis Armstrong New Orleans International Airport"
        },
        {
            "city":"new york",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta",
            "name":"LaGuardia Airport"
        },
        {
            "city":"new jersey",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta -- Admirals Club; password: HAVANA2016",
            "name":"Newark Liberty International Airport"
        },
        {
            "city":"orlando",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta",
            "name":"Orlando International Airport"
        },
        {
            "city":"philadelphia",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta -- Admirals Club; password: HAVANA2016",
            "name":"Philadelphia International Airport"
        },
        {
            "city":"portland",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta",
            "name":"Portland International Airport"
        },
        {
            "city":"morrisville",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta -- Admirals Club; password: HAVANA2016",
            "name":"Raleigh-Durham International Airport"
        },
        {
            "city":"salt lake city",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta",
            "name":"Salt Lake City International Airport"
        },
        {
            "city":"san diego",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta",
            "name":"San Diego International Airport"
        },
        {
            "city":"seattle",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta -- Centurion Lounge; password: MemberSince -- Alaska Airlines Boardroom; password: BR2016(North Satellite, between gates N1 and N2 and Concourse D, near Central Security Checkpoint)",
            "name":"Seattle-Tacoma International Airport"
        },
        {
            "city":"tampa",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta -- Admirals Club; password: HAVANA2016",
            "name":"Tampa International Airport"
        },
        {
            "city":"dulles",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta -- British Airways Lounge password: singapore",
            "name":"Dulles International Airport"
        },
        {
            "city":"arlington",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta -- Admirals Club; password: HAVANA2016",
            "name":"Ronald Reagan Washington National Airport"
        },
        {
            "city":"miami",
            "country":"united states of america",
            "description":"Delta Sky Club password: godelta",
            "name":"Palm Beach International Airport"
        },
        {
            "city":"surat thani",
            "country":"thailand",
            "description":"Cafe right next to the entrance, password: 12345678",
            "name":"Surat Thani International Airport"
        },
        {
            "city":"malaga",
            "country":"spain",
            "description":"Free wireless throughout airport; network name (Kubi)",
            "name":"Aeropuerto de Malaga"
        },
        {
            "city":"copenhagen",
            "country":"sweden",
            "description":"Free wireless.",
            "name":"Copenhagen Airport"
        },
        {
            "city":"budapest",
            "country":"hungary",
            "description":"Free wireless.",
            "name":"Budapest Airport"
        },
        {
            "city":"bonn",
            "country":"germany",
            "description":"Free wireless; signal strongest in domestic/EU terminal near security check.",
            "name":"Cologne Bonn Airport"
        },
        {
            "city":"oulu",
            "country":"finland",
            "description":"Free wireless.",
            "name":"Oulu Airport"
        },
        {
            "city":"helsinki",
            "country":"finland",
            "description":"Free wireless.",
            "name":"Helsinki Airport"
        },
        {
            "city":"montreal",
            "country":"canada",
            "description":"Maple Lounge: Network name: VIP password: montreal",
            "name":"Montreal-Pierre Elliott Trudeau International Airport"
        },
        {
            "city":"oslo",
            "country":"norway",
            "description":"Two hours free wifi; unlimited for all with a .edu or eduroam email address.",
            "name":"Oslo Airport"
        },
        {
            "city":"kuala lumpur",
            "country":"malaysia",
            "description":"Free wifi; 3 hour time limit. -- Terminal 2 (Low Cost Terminal LCCT) Air Asia Red Premium Lounge;\u00a0 network name: Premium_Red_Loungepassword: everyonecanfly",
            "name":"KL International Airport"
        },
        {
            "city":"alicante",
            "country":"valencia",
            "description":"Free wifi throughout airport. Network name: Kubi",
            "name":"Alicante Airport"
        },
        {
            "city":"addis abada",
            "country":"ethiopia",
            "description":"Find London Bar in Terminal 2 in the airport, user names and passwords (remove quotes):London CAFE 5GHZ , pw London5gLondon cafe 5GHZ , pw London5gLondon CAFE 2.4GHZ , pw London24 -- Star Gold Lounge; network name: xcloud9 - password: LMGold24 -- network name: London cafe * - password: Thankyou",
            "name":"Addis Abada Airport"
        },
        {
            "city":"panama city",
            "country":"panama",
            "description":"Two hours free wifi.",
            "name":"Tocumen International Airport"
        },
        {
            "city":"bogota",
            "country":"colombia",
            "description":"Free wireless. Signal strongest near Juan Valdez Cafe.",
            "name":"El Dorado International Airport"
        },
        {
            "city":"maracaibo",
            "country":"venezuela",
            "description":"Free wireless but terrible signal.",
            "name":"La Chinita International Airport"
        },
        {
            "city":"dubai",
            "country":"united arab emirates",
            "description":"Dubai International Hotel (lounge opposite Boots store, concourse D). Network: DubaiIntHotelPassword: wifi@dih",
            "name":"Dubai International Airport"
        },
        {
            "city":"ljubljana",
            "country":"slovenia",
            "description":"Free wireless throughout airport.",
            "name":"Ljubljana Joze Pucnik Airport"
        },
        {
            "city":"sofia",
            "country":"bulgaria",
            "description":"Free wireless throughout airport. Signal strongest on upper level. Network name: Sofia Airport Public",
            "name":"Sofia International Airport"
        },
        {
            "city":"auckland",
            "country":"new zealand",
            "description":"Free wireless in airport, 30 minute time limit. network name: Airport Hotspot",
            "name":"Auckland Airport"
        },
        {
            "city":"rome",
            "country":"italy",
            "description":"Network Name: AIRPORT FREE WIFI\u00a0 -- Alitalia Lounge: Network Name: Casa Alitalia Lounge; no password required -- Avia Lounge Network Name: Aviapartner ; password: Aviapartner01",
            "name":"Leonardo da Vinci International Airport"
        },
        {
            "city":"mexico city",
            "country":"mexico",
            "description":"Amex Centurion Club; network: Infintium; password: salacenturion1 -- United Clubnetwork name: United Club 1 -password: Myclub01 -- network name: Global Lounge password: 19301291 -- Admirals Club; password: HAVANA2016",
            "name":"Mexico City International Airport"
        },
        {
            "city":"cape town",
            "country":"south africa",
            "description":"Outside of Alba Easy Lounge; free wifi near gate 11.",
            "name":"Cape Town Intl"
        },
        {
            "city":"nairobi",
            "country":"kenya",
            "description":"Turkish Airlines Lounge; password: primeclass2016 - Hardeeu0027s in food court, password: hardees1234",
            "name":"Jomo Kenyatta International Airport"
        },
        {
            "city":"barcelona",
            "country":"spain",
            "description":"Terminal 1; T2A, T2B, T2C; network: Airport_Free_Wifi_AENA; free wifi",
            "name":"Barcelona-El Prat Airport"
        },
        {
            "city":"madrid",
            "country":"spain",
            "description":"Terminals 1, 2, 3, select areas of T4 and boarding areas. Airport_Free_Wifi_AENA; free wifi -- Iberia Lounge password: berlin -- VIP AENA Lounge; network name: VIP AENA - username: jvv1447 password: jvv1447",
            "name":"Madrid-Barajas Airport"
        },
        {
            "city":"belgrade",
            "country":"serbia",
            "description":"Network: UniFi; password unifi",
            "name":"Belgrade Nikola Tesla International Airport"
        },
        {
            "city":"skopje",
            "country":"macedonia",
            "description":"T-Com Hotspot; free wifi",
            "name":"Skopje Alexander the Great Airport"
        },
        {
            "city":"kiev",
            "country":"ukraine",
            "description":"Free wifi",
            "name":"Airport Kiev"
        },
        {
            "city":"bucharest",
            "country":"romania",
            "description":"Free wifi -- first floor eatery, TakeOff; network name: TakeOff - password: vodafone123",
            "name":"Henri Coanda International Airport"
        },
        {
            "city":"asheville",
            "country":"united states of america",
            "description":"Free wifi",
            "name":"Asheville Regional Airport"
        },
        {
            "city":"reykjavik",
            "country":"iceland",
            "description":"Free wifi",
            "name":"Reykjavik Airport"
        },
        {
            "city":"tymbou",
            "country":"cyprus",
            "description":"Ercan (Cyprus) - ECN - Simit Sarayi outside security: 11223344",
            "name":"Ercan Airport"
        },
        {
            "city":"luxemborg city",
            "country":"luxemborg",
            "description":"Free wifi",
            "name":"Luxembourg Airport"
        },
        {
            "city":"wellington",
            "country":"new zealand",
            "description":"Free wifi",
            "name":"Wellington Airport"
        },
        {
            "city":"london",
            "country":"united kingdom of great britain and northern ireland",
            "description":"Free wifi; 60 minute limit.",
            "name":"Stansted Airport"
        },
        {
            "city":"dresden",
            "country":"germany",
            "description":"Free wifi throughout terminal. network: mycloud; 30 minute time limit can be reset with new (if desired, fake) email.",
            "name":"Dresden Airport"
        },
        {
            "city":"zuric",
            "country":"switzerland",
            "description":"Free wifi but you must get access code from information desk (unless you have a mobile number to get via text). Network name: ZurichAirport",
            "name":"Zurich Airport"
        },
        {
            "city":"basel",
            "country":"switzerland",
            "description":"Free wifi with a 2 hour limit. Requires a (throwaway) email to reset the timer. Network name: Free_EuroAirport_WiFi",
            "name":"EuroAirport Basel-Mulhouse-Freiburg"
        },
        {
            "city":"tel aviv",
            "country":"isreal",
            "description":"Free wifi; network name: WIFI_BEN_GURION_AIRPORT",
            "name":"Ben Gurion Airport"
        },
        {
            "city":"al muharraq",
            "country":"bahrain",
            "description":"McDonaldu0027s in Departures Terminal. password: immobility",
            "name":"Bahrain International Airport"
        },
        {
            "city":"christchurch",
            "country":"new zealand",
            "description":"Free wifi; network name: CIAL_Free_WiFi",
            "name":"Christchurch Airport"
        },
        {
            "city":"toulouse",
            "country":"france",
            "description":"Free wifil network name: wifi-airport (no time limit).",
            "name":"Toulouse-Blagnac Airport"
        },
        {
            "city":"nouasseur",
            "country":"morroco",
            "description":"Starbucks; password: 12345678",
            "name":"Casablanca Mohammed V Airport"
        },
        {
            "city":"saint martin",
            "country":"saint martin",
            "description":"Free wifi in arrivals and departures only, not beyond security check. Network name: SXM AIRPORT FREE WIFI",
            "name":"Princess Juliana International Airport"
        },
        {
            "city":"pittsburgh",
            "country":"united states of america",
            "description":"Free wifi; network name: Fly Pittsburgh -- Admirals Club; password: HAVANA2016",
            "name":"Pittsburgh International Airport"
        },
        {
            "city":"mendoza",
            "country":"argentina",
            "description":"Free wifi; network name: AA2000-Personal",
            "name":"Governor Francisco Gabrielli International Airport"
        },
        {
            "city":"cordoba",
            "country":"argentina",
            "description":"Free wifi; network name: AA2000-Personal",
            "name":"Aeropuerto Internacional Ingeniero Ambrosio Taravella"
        },
        {
            "city":"termas de rio hondo",
            "country":"argentina",
            "description":"Free wifi; network name: AA2000-Personal",
            "name":"Aeroparque Internacional Jorge Newbery"
        },
        {
            "city":"buenos aires",
            "country":"argentina",
            "description":"Free wifi; network name: AA2000-Personal -- Admirals Club; password: AA900908934",
            "name":"Ezeiza International Airport"
        },
        {
            "city":"aberdeen",
            "country":"united kingdom of great britain and northern ireland",
            "description":"Free wifi; network name: BT Openzone -- British Airways Lounge (near gates 1 and 2); network name: BALoungeWiFi password: any departing flight number",
            "name":"Aberdeen Airport"
        },
        {
            "city":"santiago",
            "country":"chile",
            "description":"Free wifi -- Admirals Club; password: HAVANA2016 -- Delta VIP Santiago Chilepassword: DeltaAccess -- Sal\u00f3n VIP Santiago Chile password: inter022",
            "name":"Arturo Merino Benedtez International Airport"
        },
        {
            "city":"dublin",
            "country":"ireland",
            "description":"Free wifi; network name: Dublin Airport Free Wi-Fi",
            "name":"Dublin Airport"
        },
        {
            "city":"prague",
            "country":"czech republic",
            "description":"Free wifi; network name: prg.aero-free -- network name: Erste-Premier-Lounge (no password)",
            "name":"Vaclav Havel Airport Prague"
        },
        {
            "city":"riga",
            "country":"latvia",
            "description":"Free wifi; network name: Connect IT Wi-Fi",
            "name":"Riga International Airport"
        },
        {
            "city":"berlin",
            "country":"germany",
            "description":"Free wifi (60 minute limit); network name: Free Airport WiFi Telekom",
            "name":"Berlin Schonefeld Airport"
        },
        {
            "city":"lima",
            "country":"peru",
            "description":"Free wifi for customers at the Starbucks on the second floor.",
            "name":"Jorge Chavez International Airport"
        },
        {
            "city":"tbilisi",
            "country":"georgia",
            "description":"Free wifi; network name: Tbilisi Loves You -- Primeclass Lounge; password: primeclass2016",
            "name":"Tbilisi Airport"
        },
        {
            "city":"lapu-lapu city",
            "country":"phillipines",
            "description":"Bois Coffee at the Mactan-Cebu Airport, Philippines: ashmugcup560",
            "name":"Mactan-Cebu International Airport"
        },
        {
            "city":"dunedin",
            "country":"new zealand",
            "description":"Free wifi; 30 minute or 1000MB limit.",
            "name":"Dunedin International Airport"
        },
        {
            "city":"shanghai",
            "country":"china",
            "description":"SSID: #AirportPVG-WIFIUsername: 576518Password: 3852",
            "name":"Shanghai Pudong International Airport"
        },
        {
            "city":"bogota",
            "country":"colombia",
            "description":"Avianca VIP Lounge Gold and Diamond; password: MOVISTARMUSICA",
            "name":"El Dorado International Airport"
        },
        {
            "city":"cartagena",
            "country":"colombia",
            "description":"Avianca VIP Lounge; password: Movistaru",
            "name":"Aeropuerto Internacional Rafael Nunez"
        },
        {
            "city":"jerez",
            "country":"spain",
            "description":"Free wifi; network: Kubi",
            "name":"Jerez Airport"
        },
        {
            "city":"seville",
            "country":"spain",
            "description":"Free wifi; network: Kubi",
            "name":"Seville Airport"
        },
        {
            "city":"el alto",
            "country":"bolivia",
            "description":"Free wifi; network name: ENTEL-LPZ -- VIP Lounge; network name: SALAS VIP - password: vip010616",
            "name":"El Alto International Airport"
        },
        {
            "city":"cochabamba",
            "country":"bolivia",
            "description":"Free wifi; network name: ENTEL-CBBA",
            "name":"Jorge Wilsterman Airport"
        },
        {
            "city":"flores",
            "country":"portugal",
            "description":"Free wifi; network name: ENTEL-SCZ",
            "name":"Flores Airport"
        },
        {
            "city":"denpasar",
            "country":"bali",
            "description":"Restaurant Manda; password: lovebali",
            "name":"Ngurah Rai International Airport"
        },
        {
            "city":"medina",
            "country":"saudi arabia",
            "description":"Free open WiFi, available throughout the airport.Network name: TIBAHAIRPORTS",
            "name":"Prince Mohammed Bin Abdulaziz International Airport"
        },
        {
            "city":"foz do iguacu",
            "country":"brazi",
            "description":"Free wifi; network name: AA2000-Personal",
            "name":"Cataratas International Airport"
        },
        {
            "city":"rio negro",
            "country":"argentina",
            "description":"Free wifi; network name: AA2000-Personal",
            "name":"San Carlos de Bariloche Airport"
        },
        {
            "city":"porto",
            "country":"portugal",
            "description":"Vip Lounge/ ANA Lounge. Pass: ANA2016OPO",
            "name":"Francisco Sa Carneiro Airport"
        },
        {
            "city":"seoul",
            "country":"south korea",
            "description":"Free wifi; network name: AirportWiFi",
            "name":"Incheon International Airport"
        },
        {
            "city":"casablanca",
            "country":"morocco",
            "description":"Free wifi, 3 hour time limit. Network name: WIFI_Aeroport_MedV",
            "name":"Casablanca Mohammed V Airport"
        },
        {
            "city":"san fransisco",
            "country":"united states of america",
            "description":"Air France/KLM Lounge; network name: AIRFRANCEKLMLOUNGE password: LOUNGEAFKL2016 -- Centurion Lounge; password: MemberSince -- Admirals Club; password: HAVANA2016",
            "name":"San Francisco International Airport"
        },
        {
            "city":"sao paulo",
            "country":"brazil",
            "description":"American Airlines Lounge password: HAVANA2016",
            "name":"Sao Paulo International Airport"
        },
        {
            "city":"melbourne",
            "country":"australia",
            "description":"Emirates LoungeNetwork name: EmiratesmelbournePassword: F@RSTCL@55",
            "name":"Melbourne Airport"
        },
        {
            "city":"kaula lumpur",
            "country":"malaysia",
            "description":"Emirates LoungeNetwork name: Emirates_LoungePassword: abcde12345",
            "name":"KL International Airport"
        },
        {
            "city":"munich",
            "country":"germany",
            "description":"BA Lounge; password: singapore",
            "name":"Munich Airport"
        },
        {
            "city":"nuremberg",
            "country":"germany",
            "description":"24 hours free wifi; network name: Telekom",
            "name":"Airport Nurnberg"
        },
        {
            "city":"bologna",
            "country":"italy",
            "description":"Free wifi; network name: bologna airport free wifi",
            "name":"Bologna Guglielmo Marconi Airport"
        },
        {
            "city":"las vegas",
            "country":"united states of america",
            "description":"Centurion Lounge; password: MemberSince",
            "name":"McCarran International Airport"
        },
        {
            "city":"guangzhou",
            "country":"china",
            "description":"In Terminal A: Network name: gbdya - password: 020itcbytj",
            "name":"Guangzhou Baiyun International Airport"
        },
        {
            "city":"benda",
            "country":"indonesia",
            "description":"Garuda Lounge Terminal 3; network name: GarudaLounge - password: garuda1234",
            "name":"Soekarno-Hatta International Airport"
        },
        {
            "city":"gauteng",
            "country":"south africa",
            "description":"Free wifi 30 minutes. Connect to the network AlwaysOn and then (often you have to do this manually as the site doesnu0027t always automatically pop up) go to: Connect.alwayson.za -- South African Lounge; network name: AlwaysOn@SAA: password VIAflysaa",
            "name":"O.R. Tambo International Airport"
        },
        {
            "city":"vilinus",
            "country":"lithuania",
            "description":"Free wifi; network name: Invest Lithuania FREE WIFI VNO",
            "name":"Vilnius International Airport"
        },
        {
            "city":"tababela",
            "country":"ecuador",
            "description":"VIP Lounge; network name: VIP_INTTL - password: V1p..N4iq",
            "name":"Mariscal Sucre International Airport"
        },
        {
            "city":"hanoi",
            "country":"vietnam",
            "description":"Free wifi; network name: NoiBai AirPort FreeWifi",
            "name":"Noi Bai International Airport"
        },
        {
            "city":"brisbane",
            "country":"australia",
            "description":"Plaza Premium Lounge; Southern End of Terminal for access - password: plaza2016",
            "name":"Brisbane Airport"
        },
        {
            "city":"rheinmunster",
            "country":"germany",
            "description":"Charter Lounge;\u00a0 network name: ACM offen - password: ACMMACHTSPASS",
            "name":"Baden Airpark"
        },
        {
            "city":"berlin",
            "country":"germany",
            "description":"Free wifi 60 minute limit. Network name: Free Airport WiFi Telekom",
            "name":"Berlin Tegel Airport"
        },
        {
            "city":"brussels",
            "country":"belgium",
            "description":"Brussels Airlines Lounge; network name: B.connected Guests - password: extrasmile",
            "name":"Brussels Airport"
        },
        {
            "city":"austin",
            "country":"united states of america",
            "description":"Admirals Club; password: HAVANA2016",
            "name":"Austin-Bergstrom International Airport"
        },
        {
            "city":"hartford",
            "country":"united states of america",
            "description":"Admirals Club; password: HAVANA2016",
            "name":"Bradley International Airport"
        },
        {
            "city":"paris",
            "country":"france",
            "description":"Admirals Club; password: HAVANA2016",
            "name":"Charles de Gaulle Airport"
        },
        {
            "city":"charlotte",
            "country":"united states of america",
            "description":"Admirals Club; password: HAVANA2016",
            "name":"Charlotte Douglas International Airport"
        },
        {
            "city":"denver",
            "country":"united states of america",
            "description":"Admirals Club; password: HAVANA2016",
            "name":"Denver International Airport"
        },
        {
            "city":"orange county",
            "country":"united states of america",
            "description":"Admirals Club; password: HAVANA2016",
            "name":"John Wayne Airport"
        },
        {
            "city":"toronto",
            "country":"canada",
            "description":"Admirals Club; password: HAVANA2016",
            "name":"Toronto Pearson International Airport"
        },
        {
            "city":"phoenix",
            "country":"united states of america",
            "description":"Admirals Club; password: HAVANA2016",
            "name":"Phoenix Sky Harbor International Airport"
        },
        {
            "city":"greensboro",
            "country":"united states of america",
            "description":"Admirals Club; password: HAVANA2016",
            "name":"Piedmont Triad International Airport"
        },
        {
            "city":"baku",
            "country":"azerbaijan",
            "description":"Free wifi; network name: Baku Airport Free",
            "name":"Heydar Aliyev International Airport"
        },
        {
            "city":"managua",
            "country":"nicaragua",
            "description":"Free wifi; poor connection, works best in passenger arrivals. Network name: Aeropuerto Sandino",
            "name":"Augusto Cesar Sandino International Airport"
        },
        {
            "city":"london",
            "country":"united kingdom of great britain and northern ireland",
            "description":"Free wifi; network name: Luton Airport WIFI",
            "name":"London Luton Airport"
        },
        {
            "city":"tricity",
            "country":"poland",
            "description":"Free wifi; network name: @GDNAirport_hotspot",
            "name":"Gdansk Lech Walesa Airport"
        },
        {
            "city":"taiwan",
            "country":"taiwan",
            "description":"Free wifi; network name: Airport Free WiFi",
            "name":"Taiwan Taoyuan International Airport"
        },
        {
            "city":"bilinga",
            "country":"queensland",
            "description":"Free wifi; network name: Airport Free Wi-Fi - Users are disconnected after 24 hours, or if they leave the airport u003e1 hour (requires social media login).",
            "name":"Gold Coast Airport"
        },
        {
            "city":"townsville",
            "country":"queensland",
            "description":"Free wifi; network name: Airport Free Wi-Fi - Users are disconnected after 24 hours, or if they leave the airport u003e1 hour (requires social media login).",
            "name":"Townsville Airport"
        },
        {
            "city":"ho chi minh city",
            "country":"vietnam",
            "description":"Free wifi. Network name: TSN_Wifi_Express -- FinBar (Level 2, Food Court) after immigration clearance; network name: Finbar - password: finbartsn",
            "name":"Tan Son Nhat International Airport"
        },
        {
            "city":"kiev",
            "country":"ukraine",
            "description":"Free wifi; network name: Free Boryspil WiFi (logging on and off resets time)",
            "name":"Kyiv Boryspil International Airport"
        },
        {
            "city":"hamburg",
            "country":"germany",
            "description":"Free wifi 1 hour limit; network name: HAM AIRPORT FREE WIFI",
            "name":"Hamburg Airport"
        },
        {
            "city":"bucaramanga",
            "country":"colombia",
            "description":"Free wifi; network name: AEROPUERTO WIFI",
            "name":"Aeropuerto Internacional Palonegro"
        },
        {
            "city":"varna",
            "country":"bulgaria",
            "description":"Free wifi; network name: Airport Public Wifi",
            "name":"Varna Airport"
        },
        {
            "city":"mallorca",
            "country":"spain",
            "description":"Free wifi; network name: Airport_Free_WiFi_AENA",
            "name":"Palma de Mallorca Airport"
        },
        {
            "city":"klagenfurt",
            "country":"austria",
            "description":"Free wifi; network name: Freewave",
            "name":"Karnten Airport"
        },
        {
            "city":"graz",
            "country":"austria",
            "description":"Free wifi; network name: Freewave",
            "name":"Graz Airport"
        },
        {
            "city":"salzburg",
            "country":"austria",
            "description":"Free wifi; network name: Freewave",
            "name":"Salzburg Airport"
        },
        {
            "city":"istanbul",
            "country":"turkey",
            "description":"CIP (Turkish Airlines) Lounge: network name: thy password: investinTurkey",
            "name":"Sabiha Gokcen International Airport"
        },
        {
            "city":"enfield",
            "country":"canada",
            "description":"Free wifi; 4 hour limit. Network name: Halifax_Airport",
            "name":"Halifax Stanfield International Airport"
        },
        {
            "city":"tampere",
            "country":"finland",
            "description":"Free wifi; network name: Free Wi-Fi for you by Finavia",
            "name":"Tampere-Pirkkala Airport"
        },
        {
            "city":"colombo",
            "country":"sri lanka",
            "description":"Araliya Lounge; password: B1@lounge -- World Duty Free Departure Shop password: WDFG@T803 -- Lotus Lounge network name: #WIFI@LotusLounge password: B1@lounge",
            "name":"Bandaranaike International Airport"
        },
        {
            "city":"el paso",
            "country":"mexico",
            "description":"Free wifi; network name: Digital El Paso",
            "name":"El Paso International Airport"
        },
        {
            "city":"schkeuditz",
            "country":"germany",
            "description":"Free wifi; only works near Lufthansa Business Lounge; network name: Telekom",
            "name":"Leipzig/Halle Airport"
        },
        {
            "city":"muscat",
            "country":"oman",
            "description":"Oman Air Business Class Lounge; username: OmanAir - password: welcome -- network name: Plaza Premium Lounge password: plaza2016",
            "name":"Muscat International Airport"
        },
        {
            "city":"tucson",
            "country":"united states of america",
            "description":"Free wifi; network name: TUS-hotspot",
            "name":"Tucson International Airport"
        },
        {
            "city":"sandakan",
            "country":"malaysia",
            "description":"Gloria Jeanu0027s Coffees (right before security control); network name: GloriaJeanu0027sCoffees - password: 26gj2828",
            "name":"Sandakan Airport"
        },
        {
            "city":"madeira",
            "country":"portugal",
            "description":"TAP Lounge;\u00a0 password: TAP-wifi-2014",
            "name":"Madeira Airport"
        },
        {
            "city":"dusseldorf",
            "country":"germany",
            "description":"Network name: 30min free wifi Vodafone",
            "name":"Dusseldorf International Airport"
        },
        {
            "city":"palmira",
            "country":"colombia",
            "description":"Avianca Gold Lounge (domestic terminal); password: Movistarmusica",
            "name":"Aeropuerto Internacional Alfonso Bonilla Aragn de Palmira"
        },
        {
            "city":"guadalajara",
            "country":"jalisco",
            "description":"VIP Lounge Nacional 1; password: vipnac16",
            "name":"Miguel Hidalgo y Costilla International Airport"
        },
        {
            "city":"luque",
            "country":"paraguay",
            "description":"Sala VIP Gold Lounge; network name: VIPGOLD - password: welcome1710 -- Open network name: TIGO AISP",
            "name":"Silvio Pettirossi International Airport"
        },
        {
            "city":"stuggart",
            "country":"germany",
            "description":"Network name: Telekom - 60 minute time limit.",
            "name":"Stuttgart Airport"
        },
        {
            "city":"kuwait city",
            "country":"kuwait",
            "description":"Network name: FreeAirportWiFi - works best near gates 9 and 27.",
            "name":"Kuwait International Airport"
        },
        {
            "city":"tucuman province",
            "country":"argentina",
            "description":"Free wifi; network name: AA2000-Personal",
            "name":"Aeropuerto Teniente General Benjam Matienzo"
        },
        {
            "city":"bremen",
            "country":"germany",
            "description":"Network name: #WiFi@Changi - you need to get an access code from any information desk, good for 3 hours.",
            "name":"Changi Airport Singapore"
        },
        {
            "city":"bremen",
            "country":"germany",
            "description":"Jacbos Coffee Bar (Arrivals); network name: WLAN-C19F15 - password: 4965659732044143",
            "name":"City Airport Bremen"
        },
        {
            "city":"riyadh",
            "country":"saudi arabia",
            "description":"Alfursan Lounge Terminal 2; network name: Alfursan - password: alwahadining",
            "name":"King Khalid International Airport"
        },
        {
            "city":"katowice",
            "country":"poland",
            "description":"Network name: Business_Lounge - password: airport1",
            "name":"Katowice Airport"
        },
        {
            "city":"abu dhabi",
            "country":"united arab emirates",
            "description":"Al Reem Lounge; network name: Plaza Premium Lounge - password: plaza2016",
            "name":"Abu Dhabi International Airport"
        },
        {
            "city":"tokyo",
            "country":"japan",
            "description":"Free wifi; network name: HANEDA-FREE-WIFI",
            "name":"Haneda Airport"
        },
        {
            "city":"tokyo",
            "country":"japan",
            "description":"Free wifi; network name: FreeWiFi-NARITA",
            "name":"Narita International Airport"
        },
        {
            "city":"apodaca",
            "country":"mexico",
            "description":"Network: AREAS WIFIPassword: Divers123",
            "name":"Monterrey International Airport"
        },
        {
            "city":"luqa",
            "country":"malta",
            "description":"Free wifi; network name: Maltairport Wi-Fi",
            "name":"Malta International Airport"
        },
        {
            "city":"new delhi",
            "country":"India",
            "description":"Emirates Lounge Terminal 3; network name: LOUNGE A and LOUNGE B - password: 5555666690",
            "name":"Indira Gandhi International Airport"
        },
        {
            "city":"kigali",
            "country":"rwanda",
            "description":"Network name: Bourbon@Airport - password: kivulake2016",
            "name":"Kigali International Airport"
        },
        {
            "city":"rotterdam",
            "country":"netherlands",
            "description":"Free wifi; network name: KPN",
            "name":"Rotterdam The Hague Airport"
        },
        {
            "city":"luganville",
            "country":"vanuatu",
            "description":"Free wifi; network name: NFWIFI",
            "name":"Santo-Pekoa International Airport"
        },
        {
            "city":"yangon",
            "country":"myanmar",
            "description":"Terminal 2 - network name: EspaceCyberCafepassword: espacecafewifi",
            "name":"Yangon International Airport"
        },
        {
            "city":"edinburgh",
            "country":"scotland",
            "description":"Free wifi; network name: _EDI FREE WIFI",
            "name":"Edinburgh Airport"
        },
        {
            "city":"adelaide",
            "country":"australia",
            "description":"Free wifi; network name: Adelaide Airport Free Wifi",
            "name":"Adelaide Airport"
        },
        {
            "city":"lisbon",
            "country":"portugal",
            "description":"ANA Lounge; network name: _ANA Loungepassword: wifiLounge2016",
            "name":"Lisbon Portela Airport"
        }
    ]
}
bot.dialog('/',intents);

intents.matches('smalltalk.greetings',function(session, args){  
  var fulfillment =  builder.EntityRecognizer.findEntity(args.entities, 'fulfillment');
  if (fulfillment){
        var speech = fulfillment.entity;
        session.send(speech);
  }else{
    session.send('Sorry...not sure how to respond to that');
  }
});

intents.matches('hi',function(session){
    session.send('Hey there! I can help you find wifi passwords at Airports');
});

intents.matches('findPassword',function(session,args){
    var airport = builder.EntityRecognizer.findEntity(args.entities,'airports');
    var city = builder.EntityRecognizer.findEntity(args.entities,'geo-city');
    var country = builder.EntityRecognizer.findEntity(args.entities,'geo-country');

    
    if (country){

        if (country.entity == 'United States of America'){
            session.send("That's too broad. Which city or airport are you looking for?");
        }else{
            var airports = data.airports.filter(function(element){
            return element.country.toLowerCase() === country.entity.toLowerCase();
            });
            session.send("We found " + airports.length + " airports in " + country.entity);
        }
    }
    else if(city){
        var airports = data.airports.filter(function(element){
            return element.city.toLowerCase() === city.entity.toLowerCase();
        });
        session.send("We found " + airports.length + " airports in " + city.entity);
    }
    else if (airport){
        var airports = data.airports.filter(function(element){
            return element.name === airport.entity;
        });

        if (airports.length > 0){
            session.send("Here's the info for " + airports[0]['name'] + " : " + airports[0]['description']);
        } else{
            var airport_name = airport.entity.replace(/(^|\s)[a-z]/g,function(f){return f.toUpperCase();});
            var airport_name = airport_name.replace('Airport','International Airport');
            var airports = data.airports.filter(function(element){
                return element.name === airport_name;
            });

            if (airports.length > 0){
                session.send("Here's the info for " + airports[0]['name'] + " : " + airports[0]['description']);
            } else{
                var city = airport.entity;

                var airports = data.airports.filter(function(element){
                    return element.city.toLowerCase() === city.entity.toLowerCase();
                });

                session.send("We found " + airports.length + " airports in " + city.entity);
            }
        }
        
    }
});

intents.onDefault(function(session){
    session.send("Sorry...can you please rephrase?");
});

function upperCaseFirst(str){
    return str.charAt(0).toUpperCase() + str.substring(1);
}