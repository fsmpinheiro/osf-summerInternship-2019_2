<template>
  <div class="header">
    <div hidden>
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="solid-arrow" viewBox="0 0 41.999 41.999">
          <title>solid-arrow</title>
          <path d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40 c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20 c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z" />
        </symbol>

        <symbol id="icon-search" viewBox="0 0 52.966 52.966">
          <title>icon-search</title>
          <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21 c5.083,0,9.748-1.817,
                            13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279 C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,
                            40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19 S32.459,40,21.983,40z" />
        </symbol>

        <symbol id="icon-profile" viewBox="0 0 55 55">
          <title>icon-profile</title>
          <path d="M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752 c0.058,0.049,0.121,0.089,0.179,
                            0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348 c0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,
                            0.212c0.613,0.349,1.239,0.678,1.88,0.98 c0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,
                            0.033 c0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55 c0.749,0,1.488-0.039,
                            2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287 c0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,
                            6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104 c0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,
                            1.581-1 c0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764 l-0.027-0.023C51.523,
                            42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5 c0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957 c0.196-0.242,
                            0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545 c0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.519,
                            0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8 s-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.345-1.883,5.864v4.667c-0.568,0.661-0.887,
                            1.502-0.887,2.369v3.545 c0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313 c-0.252,
                            0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z M42.459,48.132c-0.35,0.254-0.706,0.5-1.067,0.735 c-0.166,0.108-0.331,0.216-0.5,0.321c-0.472,
                            0.292-0.952,0.57-1.442,0.83c-0.108,0.057-0.217,0.111-0.326,0.167 c-1.126,0.577-2.291,1.073-3.488,1.476c-0.042,0.014-0.084,0.029-0.127,0.043c-0.627,
                            0.208-1.262,0.393-1.904,0.552 c-0.002,0-0.004,0.001-0.006,0.001c-0.648,0.16-1.304,0.293-1.964,0.402c-0.018,0.003-0.036,0.007-0.054,0.01 c-0.621,
                            0.101-1.247,0.174-1.875,0.229c-0.111,0.01-0.222,0.017-0.334,0.025C28.751,52.97,28.127,53,27.5,53 c-0.634,0-1.266-0.031-1.895-0.078c-0.109-0.008-0.218-0.015-0.326-0.025c-0.634-0.056-1.265-0.131-1.89-0.233 c-0.028-0.005-0.056-0.01-0.084-0.015c-1.322-0.221-2.623-0.546-3.89-0.971c-0.039-0.013-0.079-0.027-0.118-0.04 c-0.629-0.214-1.251-0.451-1.862-0.713c-0.004-0.002-0.009-0.004-0.013-0.006c-0.578-0.249-1.145-0.525-1.705-0.816 c-0.073-0.038-0.147-0.074-0.219-0.113c-0.511-0.273-1.011-0.568-1.504-0.876c-0.146-0.092-0.291-0.185-0.435-0.279 c-0.454-0.297-0.902-0.606-1.338-0.933c-0.045-0.034-0.088-0.07-0.133-0.104c0.032-0.018,
                            0.064-0.036,0.096-0.054l7.907-4.313 c1.36-0.742,2.205-2.165,2.205-3.714l-0.001-3.602l-0.23-0.278c-0.022-0.025-2.184-2.655-3.001-6.216l-0.091-0.396l-0.341-0.221 c-0.481-0.311-0.769-0.831-0.769-1.392v-3.545c0-0.465,0.197-0.898,0.557-1.223l0.33-0.298v-5.57l-0.009-0.131 c-0.003-0.024-0.298-2.429,1.396-4.36C21.583,10.837,24.061,10,27.5,10c3.426,0,5.896,0.83,7.346,2.466 c1.692,1.911,1.415,4.361,1.413,4.381l-0.009,5.701l0.33,0.298c0.359,0.324,0.557,0.758,0.557,1.223v3.545 c0,0.713-0.485,1.36-1.181,1.575l-0.497,0.153l-0.16,0.495c-0.59,1.833-1.43,3.526-2.496,5.032c-0.262,0.37-0.517,0.698-0.736,0.949 l-0.248,0.283V39.8c0,1.612,0.896,3.062,2.338,3.782l8.467,4.233c0.054,0.027,0.107,0.055,0.16,0.083 C42.677,47.979,42.567,48.054,42.459,48.132z" />
        </symbol>

        <symbol id="icon-favorites" viewBox="0 0 51.997 51.997">
          <title>icon-favorites</title>
          <path d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905 c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478 c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014 C52.216,18.553,51.97,16.611,51.911,16.242z M49.521,21.261c-0.984,4.172-3.265,7.973-6.59,10.985L25.855,47.481L9.072,32.25 c-3.331-3.018-5.611-6.818-6.596-10.99c-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101C2.725,9.139,7.806,3.826,14.158,3.826 c4.687,0,8.813,2.88,10.771,7.515l0.921,2.183l0.921-2.183c1.927-4.564,6.271-7.514,11.069-7.514 c6.351,0,11.433,5.313,12.096,12.727C49.938,16.57,50.229,18.264,49.521,21.261z" />
        </symbol>

        <symbol id="icon-shopping-bag" viewBox="0 0 33 33">
          <title>icon-shopping-bag</title>
          <path d="M28.313,33H4.688c-0.137,0-0.268-0.056-0.362-0.155c-0.094-0.099-0.144-0.232-0.138-0.369L5.313,8.851 c0.013-0.267,0.232-0.476,0.5-0.476h21.375c0.267,0,0.487,0.209,0.5,0.476l1.125,23.625c0.006,0.137-0.043,0.27-0.138,0.369 C28.58,32.944,28.449,33,28.313,33z M5.212,32h22.576L26.711,9.375H6.289L5.212,32z" />
          <path d="M21.905,11.375c-0.276,0-0.5-0.224-0.5-0.5v-4.97C21.405,3.201,19.205,1,16.5,1s-4.905,2.201-4.905,4.905v4.97 c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5v-4.97C10.595,2.649,13.244,0,16.5,0s5.905,2.649,5.905,5.905v4.97 C22.405,11.151,22.182,11.375,21.905,11.375z" />
        </symbol>

        <symbol id="eye" viewBox="0 0 452.995 452.996">
          <title>eye</title>
          <path d="M441.821,212.367c-0.903-1.143-22.558-28.295-59.366-55.338c-49.449-36.329-103.378-55.531-155.957-55.531 c-52.582,0-106.51,19.202-155.957,55.531c-36.921,27.124-58.473,54.204-59.367,55.339L0,226.498l11.17,14.125 c0.898,1.139,22.45,28.221,59.371,55.344c49.447,36.329,103.375,55.531,155.957,55.531c52.579,0,106.508-19.202,155.957-55.531 c36.81-27.044,58.463-54.195,59.367-55.338l11.173-14.131L441.821,212.367z M429.909,231.206 c-0.853,1.077-21.27,26.675-56.447,52.521c-46.823,34.399-97.642,52.582-146.964,52.582c-49.323,0-100.143-18.182-146.963-52.582 c-35.284-25.92-55.596-51.44-56.447-52.52l-3.725-4.709l3.729-4.714c0.847-1.074,21.158-26.594,56.442-52.514 c46.82-34.4,97.64-52.583,146.963-52.583c49.321,0,100.141,18.183,146.964,52.583c35.179,25.845,55.596,51.443,56.446,52.519 l3.725,4.709L429.909,231.206z" />
          <path d="M226.498,142.165c-46.502,0-84.335,37.831-84.335,84.333s37.833,84.333,84.335,84.333s84.334-37.832,84.334-84.333 S273,142.165,226.498,142.165z M226.498,295.642c-38.126,0-69.146-31.018-69.146-69.145s31.02-69.145,69.146-69.145 s69.146,31.018,69.146,69.145S264.624,295.642,226.498,295.642z" />
          <path d="M226.498,174.113v15.189c20.51,0,37.195,16.686,37.195,37.195h15.188C278.883,197.613,255.384,174.113,226.498,174.113z" />
        </symbol>
      </svg>
    </div>

    <header id="top-header" class="main-header">
      <div class="wrapper">
        <nav>
          <div id="item-1-logoBrand" class="c-OSFbrand">
              <router-link to="/">
               <div> 
                <img src="../assets/imgs/ui-kit_osf-logo.png" id="osf-logo" alt="Osf Logo" />
              </div>
              <div>
                <p id="osf-brand-0">Osf</p>
                <p id="osf-brand-1">Academy</p>
              </div>
              </router-link>
          </div>


          <div id="item-2-mainMenu" class="c-mainMenu">

            <div class="menu-item" id="dropdown">
                
                      <router-link to="services" class="dropbtn">Services 
                        <svg class="arrow-solid"><use xlink:href="#solid-arrow" /></svg>
                      </router-link>

                      <div class="dropdown-content services-list">
                      
                        <div class="categs-1"><p>Product Categories</p> 
                          <div class="content-column">
                            <router-link to="notfound-404-error"> <p>Acessories </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Alcohol </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Art </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Books </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Drink </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Electronics </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Flowers &#38; Plants </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Food </p> </router-link>
                          </div>
                          <div class="content-column">
                            <router-link to="notfound-404-error"> <p>Gadgets </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Garden </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Grocery </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Home </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Jewelry </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Kids &#38; Baby </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Man's Fashion </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Mobile </p> </router-link>
                          </div>
                          <div class="content-column">
                            <router-link to="notfound-404-error"> <p>Motorcycles </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Movies </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Music </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Office </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Pets </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Romantic </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Sport </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Toys </p> </router-link>
                          </div>
                        </div>

                        <div class="categs-2"><p>Sale</p>
                          <div class="content-column">
                            <router-link to="notfound-404-error"> <p>Accessories </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Alcohol </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Art </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Books </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Drink </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Electronics </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Flowers &#38; Plants </p> </router-link>
                            <router-link to="notfound-404-error"> <p>Food </p> </router-link>
                          </div>
                        </div>
                        
                        <div class="categs-3">
                          <div class="menu-banner"></div>
                        </div>
                      
                      </div> 
              
            </div>

            <div class="menu-item" id="menu-item">
              <router-link to="notfound-404-error">Company</router-link>
            </div>

            <div class="menu-item" id="menu-item">
              <router-link to="notfound-404-error">Library</router-link>
            </div>

            <div class="menu-item" id="menu-item">
              <router-link to="notfound-404-error">Contact Us</router-link>
            </div>
          </div>

          <div id="item-3-nationality" class="c-nationality">

              <div class="menu-item" id="dropdown"> 
                  <a href="#" class="dropbtn">En 
                    <svg class="arrow-solid"><use xlink:href="#solid-arrow" /></svg>
                  </a>

                  <div class="dropdown-content lang-select">
                    <div> <a href="#"> <p>Pt</p> </a> </div>
                    <div> <a href="#"> <p>Es</p> </a> </div>
                  </div>
                
              </div>
              
              <div class="menu-item" id="dropdown">
                  <a href="#" class="dropbtn">$ Us
                    <svg class="arrow-solid"><use xlink:href="#solid-arrow" /></svg>
                  </a>
                
                  <div class="dropdown-content curr-select">
                    <div> <a href="#"> <p>R$ BRL </p> </a> </div> 
                    <div> <a href="#"> <p>€$ EUR </p> </a> </div>
                  </div>
                
              </div>
          </div>

          <div id="item-4-icons" class="c-icons">
            <div>
              <a href="#">
                <div class="panel-icon">
                  <svg class="icon-header"><use xlink:href="#icon-search" /></svg>
                </div>
              </a>
            </div>

            <div>
              <a href="#">
                <div class="panel-icon">
                  <svg class="icon-header"><use xlink:href="#icon-profile" /></svg>
                </div>
              </a>
            </div>

            <div>
              <a href="#">
                <div class="panel-icon">
                  <svg class="icon-header"><use xlink:href="#icon-favorites" /></svg>
                </div>
              </a>
            </div>

            <div>
              <a href="#">
                <div class="panel-icon">
                  <svg class="icon-header"><use xlink:href="#icon-shopping-bag" /></svg>
                </div>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>

export default {
    name : 'Header'
}
</script>

<style scoped>
ul{list-style:none;padding-left:0}li{margin-bottom:10px}.c-mainMenu a,.c-nationality a{text-decoration:none}#osf-logo,.c-OSFbrand div{height:64px}#osf-brand-0{margin:4px 0 0 0;text-transform:uppercase;font-size:32px;font-weight:bolder;letter-spacing:5.8px;color:#011847}#osf-brand-1{margin:0;font-size:18px;font-weight:400;color:#84bc22}.c-OSFbrand a div{float:left;padding-right:10px}.main-header{height:66px;padding-top:14px}.c-OSFbrand,.c-icons,.c-mainMenu,.c-nationality{font-family:LatoRegular;font-size:16px;font-weight:400}.c-mainMenu,.c-nationality{text-transform:uppercase}.c-OSFbrand,.c-icons,.c-mainMenu,.c-nationality{height:64px;float:left}.c-OSFbrand{width:20%}.c-mainMenu{width:35%}.c-nationality{width:15%}.c-icons{width:25%}.main-header{border-bottom:2px solid #f3f0ea}.c-mainMenu .menu-item{float:left}.c-mainMenu .menu-item a{display:block;padding:23px 15.32px}.c-mainMenu .menu-item a{color:#45413e}.c-nationality .menu-item{float:left}.c-nationality .menu-item .dropbtn{display:block;padding:23px 20px;color:#999}.c-icons{margin:0;padding:0}.c-icons div{margin:.54em 0;padding:0 .8em;float:left}.dropdown{overflow:hidden;color:#fff}.dropdown-content div{display:inline-block}.dropdown-content .content-column{text-transform:capitalize}.services-list .categs-1{width:50%;margin-left:38px}.services-list .categs-2{width:15%}.services-list .categs-3{width:25%;text-align:right;padding:54px 0}.categs-1 .content-column{padding-right:105px}.categs-1 .content-column a,.categs-1 .content-column p,.categs-2 .content-column a,.categs-2 .content-column p{padding:4px 0;margin:0;color:#ddd}.curr-select,.lang-select{margin-top:2px}.curr-select div a,.curr-select div p{display:block;padding:8px 7.8px;margin:0;color:#ddd}.lang-select div a,.lang-select div p{display:block;padding:7px 13.9px;margin:0;color:#ddd}.menu-banner{height:276px;width:271px;background-color:tomato;background:url(../assets/imgs/featured_img.png) no-repeat;background-position-y:-12px;background-position-x:-16px;border-radius:7px}.services-list{display:none;position:absolute;background-color:#262a32;text-align:left;color:#ddd;width:1340px;z-index:1;margin-left:-282px;margin-top:2px}.lang-select{display:none;position:absolute;background-color:#262a32;text-align:center;color:#ddd;width:72.5px;z-index:1;margin-top:2px}.curr-select{display:none;position:absolute;background-color:#262a32;text-align:center;color:#ddd;width:84.9px;z-index:1;margin-top:2px}#dropdown:hover .dropbtn,.c-mainMenu .menu-item:hover,.c-nationality .menu-item:hover{background-color:#262a32;border-bottom:2px solid #84bc22;color:#fff}.c-mainMenu #menu-item a:hover{background-color:#262a32;border-bottom:2px solid #84bc22;color:#fff}.c-mainMenu .menu-item:hover .dropdown-content,.c-mainMenu .menu-item:hover .menu-item a,.c-nationality .menu-item:hover,.c-nationality .menu-item:hover .dropdown-content{display:block;background-color:#262a32}.categs-1 .content-column a:hover,.categs-2 .content-column a:hover,.curr-select a:hover,.lang-select a:hover{color:#fff;background-color:#999}
</style>