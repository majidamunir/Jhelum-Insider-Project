
// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});


// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".sp-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".other-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".edu-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

// search bar Start Here 

  let searchInput = document.getElementById("search-input");
  let pages = [
    // Home Page array
    { name: "Home", url: "/" },
    { name: "Blog", url: "/#blog-post" },
    // Historical pages array
    { name: "Historical Places", url: "/hp#Historical Places" },
    { name: "Rohtas Fort", url: "/hp#Rohtas Fort" },
    { name: "Khewra", url: "/hp#Khewra" },
    { name: "Nandana Fort", url: "/hp#Nandana Fort" },
    { name: " Mangla Dam", url: "/hp#Mangla Dam" },
    { name: "jhelum Bridge", url: "/hp#Bridge" },
    { name: "Tilla Jogian", url: "/hp#Tilla Jogian" },
    { name: "Rasul Barrage", url: "/hp#Rasul Barrage" },
    { name: "CMH Mosque", url: "/hp#CMH Mosque" },
    // Food Points
    { name: "Food Points", url: "/fp#fast food" },
    { name: "restaurant", url: "/fp#Restaurant" },
    { name: "hotels", url: "/fp#hotels" },
    // Shoppig Point
    // Accessories page
    { name: "Shopping Points", url: "/accessories#Shopping Points" },
    { name: "Accessories", url: "/accessories#gallery" },
    { name: "khaadi Accessories", url: "/accessories#khaadi" },
    { name: "Ethnic Accessories", url: "/accessories#Ethnic" },
    { name: "Nishat Linen Accessories", url: "/accessories#Nishat Linen" },
    { name: "Alkaram Studio Accessories", url: "/accessories#Alkaram Studio" },
    { name: "gul ahmed Accessories", url: "/accessories#gul ahmed" },
    { name: "Lime Light Accessories", url: "/accessories#Lime Light" },
    { name: "Stylo Accessories", url: "/accessories#Stylo" },
    { name: "Clive Accessories", url: "/accessories#Clive" },
    { name: "Metro Accessories", url: "/accessories#Metro" },
    { name: "MINI Minor Accessories", url: "/accessories#MINI Minor" },
    // Brands Page
    { name: "brands", url: "/brand#brands" },
    { name: "KHAADI", url: "/brand#KHAADI" },
    { name: "j.", url: "/brand#j." },
    { name: "Ethnic", url: "/brand#Ethnic" },
    { name: "outffiter", url: "/brand#outffiter" },
    { name: "bareeze", url: "/brand#bareeze" },
    { name: "Nishat Linen", url: "/brand#Nishat Linen" },
    { name: "Alkaram", url: "/brand#Alkaram Studio" },
    { name: "gul ahmed", url: "/brand#gul ahmed" },
    { name: "Lime Light", url: "/brand#Lime Light" },
    { name: "Edenrobe", url: "/brand#Edenrobe" },
    { name: "Stylo", url: "/brand#Stylo" },
    { name: "Clive", url: "/brand#Clive" },
    { name: "ecs", url: "/brand#ecs" },
    { name: "Metro", url: "/brand#Metro" },
    { name: "Ndure", url: "/brand#Ndure" },
    { name: "MINI Minor", url: "/brand#MINI Minor" },
    { name: "Diner", url: "/brand#Diner" },
    { name: "STONE harbor", url: "/brand#STONE harbor" },
    // Casual
    { name: "Casual", url: "/casual#Casual" },
    { name: "khaadi", url: "/casual#khaadi" },
    { name: "j.", url: "/casual#j." },
    { name: "Ethnic", url: "/casual#Ethnic" },
    { name: "bareeze", url: "/casual#bareeze" },
    { name: "Nishat Linen", url: "/casual#Nishat Linen" },
    { name: "Alkaram Studio", url: "/casual#Alkaram Studio" },
    { name: "gul ahmed", url: "/casual#gul ahmed" },
    { name: "Lime Light", url: "/casual#Lime Light" },
    { name: "Edenrobe", url: "/casual#Edenrobe" },
    { name: "Clive", url: "/casual#Clive" },
    { name: "Metro", url: "/casual#Metro" },
    // Formal
    { name: "Formal", url: "/formal#Formal" },
    { name: "KHAADI", url: "/formal#KHAADI" },
    { name: "j.", url: "/formal#j." },
    { name: "Ethnic", url: "/formal#Ethnic" },
    { name: "bareeze", url: "/formal#bareeze" },
    { name: "Nishat Linen", url: "/formal#Nishat Linen" },
    { name: "Alkaram Studio", url: "/formal#Alkaram Studio" },
    { name: "gul ahmed", url: "/formal#gul ahmed" },
    { name: "Lime Light", url: "/formal#Lime Light" },
    { name: "Edenrobe", url: "/formal#Edenrobe" },
    //Kids
    { name: "Kids", url: "/kids#Kids" },
    { name: "j.", url: "/kids#j." },
    { name: "Ethnic", url: "/kids#Ethnic" },
    { name: "outffiter", url: "/kids#outffiter" },
    { name: "gul ahmed", url: "/kids#gul ahmed" },
    { name: "Lime Light", url: "/kids#Lime Light" },
    { name: "Edenrobe", url: "/kids#Edenrobe" },
    { name: "MINI Minor", url: "/kids#MINI Minor" },
    { name: "Stone Harbor", url: "/kids#Stone Harbor" },
    //Local Shops
    { name: "Local", url: "/local#Local" },
    { name: "Anarkali ", url: "/local#Anarkali Fablic" },
    { name: "Splash", url: "/local#Splash" },
    { name: "Laces Studio", url: "/local#Laces Studio" },
    { name: "Mughal e Azam Fabrics", url: "/local#Mughal e Azam Fabrics" },
    { name: "Barray Mian Fabrics ", url: "/local#Barray Mian Fabrics " },
    { name: "Cloth House & Boutique", url: "/local#Anwar Cloth House & Boutique" },
    { name: "Fix Price Shop ", url: "/local#FixPriceShop " },
    { name: "Mona's Ally's", url: "/local#Mona's Ally's" },
    { name: "Nadeem Cloth House", url: "/local#Nadeem Cloth House" },
    { name: "Khubis Collection ", url: "/local#Khubis Collection " },
    //Makeup
    { name: "Makeup", url: "/makeup#Makeup" },
    { name: "j.", url: "/makeup#j." },
    //Marts
    { name: "Marts", url: "/marts#Marts" },
    { name: "U-Mart", url: "/marts#U-Mart" },
    { name: "Ajwa-Mart", url: "/marts#Ajwa-Mart" },
    { name: "Ginza-mart", url: "/marts#Ginza-mart" },
    //Mens Cloth
    { name: "Men", url: "/men#Men" },
    { name: "Mens j.", url: "/men#j." },
    { name: "Mens bareeze", url: "/men#bareeze" },
    { name: "Mens Nishat Linen", url: "/men#Nishat Linen" },
    { name: "Mens Alkaram Studio", url: "/men#Alkaram Studio" },
    { name: "Mens Edenrobe", url: "/men#Edenrobe" },
    { name: "Mens Diner", url: "/men#Diner" },
    //Shoes
    { name: "Shoes", url: "/shoes#Shoes" },
    { name: "Ndure Shoes", url: "/shoes#Ndure" },
    { name: "Ethnic Shoes", url: "/shoes#Ethnic" },
    { name: "Stylo Shoes", url: "/shoes#Stylo" },
    { name: "Clive Shoes", url: "/shoes#Clive" },
    { name: "ecs Shoes", url: "/shoes#ecs" },
    { name: "Metro Shoes", url: "/shoes#Metro" },
    { name: "Dinners", url: "/shoes#Dinners" },
    //WestMen
    { name: "Westen Men", url: "/westmen#Westen Men" },
    { name: "outffiter", url: "/westmen#outffiter" },
    { name: "gul ahmed", url: "/westmen#gul ahmed" },
    { name: "Edenrobe", url: "/westmen#Edenrobe" },
    { name: "Diner", url: "/westmen#Diner" },
    { name: "STONE harbor", url: "/westmen#STONE harbor" },
    // Westwomen
    { name: "Westen Women", url: "/westwomen#Westen Women" },
    { name: "Ethnic", url: "/westwomen#Ethnic" },
    { name: "outffiter", url: "/westwomen#outffiter" },
    { name: "Alkaram Studio", url: "/westwomen#Alkaram Studio" },
    { name: "Lime Light", url: "/westwomen#Lime Light" },
    { name: "Stylo", url: "/westwomen#Stylo" },
    { name: "STONE harbor", url: "/westwomen#STONE harbor" },
     // Educational Institutes
     { name: "schools",   url: "/edu#schools" },
     { name: "Colleges", url: "/edu#Colleges" },
     { name: "Universities", url: "/edu#Universities" },
     { name: "Islamic Centers", url: "/edu#Islamic Centers" },
     //Schools or colleges or universities etc
     { name: "Air school", url: "/AFS#Air school" },
     { name: "Al Noor Islamic ", url:"/Alnoor#Al Noor Islamic" },
     { name: "Allama Iqbal Uni", url: "/AIOU#Allama Iqbal Uni" },
     { name: "Allied School", url: "/Allied#Allied School" },
     { name: "APS school", url: "/APS#APS school" },
     { name: "Aspire College", url: "/Aspire.c#Aspire College" },
     { name: "Bahria College", url: "/BFC#Bahria College" },
     { name: "cadet college", url: "/CCG#cadet college" },
     { name: "Bahria School", url: "/BFS#Bahria School" },
     { name: "CONVENT school", url: "/convent#CONVENT school" },
     { name: "Dar e arqam school", url: "/Darearqam#Dar e arqam school" },
     { name: "educator school", url: "/Educator#educator school" },
     { name: "faizan e madinah school", url: "/Faizan_Madina#faizan e madinah school" },
     { name: "fauji foundation college", url: "/FFC#fauji foundation college" },
     { name: "FG school", url: "/FG#FG school" },
     { name: "Govt. girls islamia", url: "/GMI#Govt. girls islamia" },
     { name: "GC Commerce", url: "/Commerce_c#GC Commerce" },
     { name: "GC GT ROAD", url: "/GCGTROAD#GC GT ROAD" },
     { name: "GCT CHAKDAULAT", url: "/chakdolat#GCT CHAKDAULAT" },
     { name: "GCW COLLEGE", url: "/ GWC#GCW COLLEGE" },
     { name: "GOVT GIRLS HIGH SCHOOL", url: "/GGHSJ#GOVT GIRLS HIGH SCHOOL" },
     { name: "GOVT GIRLS HIGH SCHOOL NO 1", url: "/GGHS1#GOVT GIRLS HIGH SCHOOL NO 1" },
     { name: "GOVT HIGH SCHOOL", url: "/GHSJJ#GOVT HIGH SCHOOL" },
     { name: "GOVT HIGH SCHOOL K G", url: "/GHSK#GOVT HIGH SCHOOL K G" },
     { name: "JAMIA ASRIA", url: "/Jamia_Asria#JAMIA ASRIA" },
     { name: "JAMIA HANFIA", url: "/Jamia_Hanfia#JAMIA HANFIA" },
     { name: "KANZULIMAN ISlamic center", url: "/Kanzul_Iman#KANZULIMAN ISlamic center" },
     { name: "lyceum", url: "/LLS#lyceum" },
     { name: "ma.jinnah", url: "/MJC#ma.jinnah" },
     { name: "millitary", url: "/Millitary#millitary" },
     { name: "mindverse", url: "/MC#mindverse" },
     { name: "minhaj islamic", url: "/Minhaj#minhaj islamic" },
     { name: "post graduate", url: "/post_gc#post graduate" },
     { name: "punjab university", url: "/PUJC#punjab university" },
     { name: "punjab college", url: "/Pgc#punjab college" },
     { name: "Riphah college", url: "/Riphah#Riphah college" },
     { name: "Roots", url: "/roots#Roots" },
     { name: "superior college", url: "/SGC#superior college" },
     { name: "the city school", url: "/edu#the city school" },
     { name: "the spirit school", url: "/spirit#the spirit school" },
     { name: "Virtual university", url: "/VU#Virtual university" },
     //Others
     //Software Houses
     { name: "Software Houses", url: "/Software_Houses#Software Houses" },
     //Software Houses Names
     { name: "Acuity Software", url: "/AcuitySoftwares#Acuity Software" },
     { name: "Bvoir Technologies", url: "/BVoirTechnologies#Bvoir Technologies" },
     { name: "competent computers", url: "/CompetentComputers#competent computers" },
     { name: "IT solution network", url: "/ITSolutionNetwork#IT solution network" },
     { name: "Jinnah soft", url: "/Jinnahsoft#Jinnah soft" },
     { name: "leaflight studios", url: "/Leaflight_Studios#leaflight studios" },
     { name: "new it systems", url: "/NewITSystems#new it systems" },
     { name: "next pak agile", url: "/NextPakAgile#next pak agile" },
     { name: "perfect web solution", url: "/PerfectWebSolutions#perfect web solution" },
     { name: "pre post tech", url: "/Pre_PostTech#pre post tech" },
     { name: "Rev 9", url: "/Rev9#Rev 9" },
     { name: "teqholic", url: "/TeqHolic#teqholic" },
     { name: "waris software", url: "/WarisSoftwareHouse#waris software" },
     // PARKS
     { name: "PARKS ", url: "/town#PARKS" },
     { name: "Adventura Park ", url: "/town#Adventura Park" },
     { name: "Citi Land Theme Park ", url: "/town#Citi Land Theme Park" },
     { name: "Family park ", url: "/town#Family park" },
     { name: "Altaf Park ", url: "/town#Altaf Park" },
     { name: "Childern Park ", url: "/town#Childern Park" },
     { name: "River View Golf Park ", url: "/town#River View Golf Park" },
     { name: "Hill View Park ", url: "/town#Hill View Park" },
     { name: "Sunset View Park Mangla ", url: "/town#Sunset View Park Mangla" },
     { name: "Gulshan-E-Amber Park ", url: "/town#Gulshan-E-Amber Park" },
     { name: "Lehri Natural Park ", url: "/town#Lehri Natural Park" },
     { name: "Sunset Park ", url: "/town#Sunset Park" },
     //TOWNS
     { name: "TOWNS ", url: "/town#TOWNS" },
     { name: "Jhelum  ", url: "/town#Jhelum" },
     { name: "Sarai Alamgir  ", url: "/town#Sarai Alamgir" },
     { name: "Sohawa ", url: "/town#Sohawa" },
     { name: "Dina ", url: "/town#Dina" },
     { name: "Jalalpur Sharif ", url: "/town#Jalalpur Sharif" },
     { name: "Pind Dadan Khan ", url: "/town#Pind Dadan Khan" },
     //Emergency Services
     { name: "Emergency Services ", url: "/service#Emergency Services" },
     { name: "Ambulance Services ", url: "/service#Ambulance Services" },
     { name: "Government Contacts ", url: "/service#Government Contacts" },
     { name: "Home Services ", url: "/service#Home Services" },
    // Hospitals 
    { name: "Hospitals ", url: "/hospital#Hospitals" },
    { name: "DHQ Hospital ", url: "/hospital#DHQ" },
    { name: "AHD Hospital ", url: "/hospital#AHD" },
    { name: "Cardiac Center ", url: "/hospital#Cardiac Center" },
    { name: "Fauji Foundation ", url: "/hospital#Fauji Foundation" },
    { name: "Sarmad Hospital ", url: "/hospital#Sarmad Hospital" },
    { name: "CMH ", url: "/hospital#CMH" },


   
  ];

  searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      let keyword = searchInput.value.toLowerCase();
      let matchingPage = null;

      for (let i = 0; i < pages.length; i++) {
        if (pages[i].name.toLowerCase().includes(keyword)) {
          matchingPage = pages[i];
          break;
        }
      }

      if (matchingPage) {
        window.location.href = matchingPage.url;
      } else {
        window.location.href = "/";
      }
    }
  });
// search bar Start Here