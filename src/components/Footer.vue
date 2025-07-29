<template>
    <div>
        <div hidden>
            <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">

                <symbol id="icon-facebook-square" viewBox="0 0 60.734 60.733">
                    <title>icon-facebook-square</title>
                    <path d="M57.378,0.001H3.352C1.502,0.001,0,1.5,0,3.353v54.026c0,1.853,1.502,3.354,3.352,3.354h29.086V37.214h-7.914v-9.167h7.914 v-6.76c0-7.843,4.789-12.116,11.787-12.116c3.355,0,6.232,0.251,7.071,0.36v8.198l-4.854,0.002c-3.805,0-4.539,1.809-4.539,4.462 v5.851h9.078l-1.187,9.166h-7.892v23.52h15.475c1.852,0,3.355-1.503,3.355-3.351V3.351C60.731,1.5,59.23,0.001,57.378,0.001z"/>
                    </symbol>
            
                <symbol id="icon-google-plus-square" viewBox="0 0 94 94"><title>icon-google-plus-square</title>
                    <path d="M89,0H5C2.239,0,0,2.239,0,5v84c0,2.761,2.239,5,5,5h84c2.762,0,5-2.239,5-5V5C94,2.239,91.762,0,89,0z M31.088,85.553 c-14.553,0-21.571-6.935-21.571-14.381c0-3.617,1.803-8.742,7.724-12.264c6.219-3.822,14.652-4.322,19.17-4.633 C35,52.465,33.4,50.557,33.4,47.441c0-1.708,0.502-2.713,0.999-3.922c-1.105,0.103-2.204,0.202-3.208,0.202 c-10.634,0-16.654-7.95-16.654-15.792c0-4.62,2.104-9.752,6.418-13.473c5.724-4.726,13.541-6.008,18.966-6.008h19.771l-6.525,4.099 h-6.217c2.307,1.909,7.117,5.931,7.117,13.578c0,7.436-4.209,10.964-8.421,14.28c-1.306,1.304-2.813,2.712-2.813,4.929 c0,2.207,1.508,3.413,2.608,4.325l3.617,2.809c4.414,3.72,8.428,7.138,8.428,14.083C57.482,76.005,48.346,85.553,31.088,85.553z M84.482,45.77H74.395v10.117H69.43V45.77H59.391v-5.02H69.43V30.695h4.965V40.75h10.088V45.77z"/>
                    <path d="M45.24,30.749c0-7.243-4.317-18.503-12.64-18.503c-2.616,0-5.42,1.307-7.029,3.32c-1.707,2.114-2.204,4.821-2.204,7.443 c0,6.734,3.911,17.894,12.544,17.894c2.507,0,5.207-1.2,6.821-2.811C45.04,35.771,45.24,32.56,45.24,30.749z"/>
                    <path d="M39.82,57.195c-0.8-0.102-1.302-0.102-2.305-0.102c-0.904,0-6.324,0.197-10.537,1.615 c-2.208,0.799-8.627,3.214-8.627,10.354c0,7.141,6.922,12.276,17.658,12.276c9.635,0,14.755-4.637,14.755-10.862 C50.764,65.334,47.451,62.627,39.82,57.195z"/></symbol>
                
                <symbol id="icon-pinterest-square" viewBox="0 0 94 94"><title>icon-pinterest-square</title>
                    <path d="M89,0H5C2.238,0,0,2.239,0,5v84c0,2.761,2.238,5,5,5h84c2.762,0,5-2.239,5-5V5C94,2.239,91.762,0,89,0z M53.012,64.352 c-4.834,0-9.379-2.612-10.934-5.578c0,0-2.6,10.309-3.146,12.299c-1.938,7.031-7.637,14.068-8.078,14.645 c-0.311,0.4-0.992,0.275-1.063-0.257c-0.123-0.896-1.578-9.769,0.133-17.005c0.857-3.635,5.756-24.384,5.756-24.384 s-1.428-2.857-1.428-7.082c0-6.631,3.846-11.583,8.631-11.583c4.07,0,6.035,3.056,6.035,6.719c0,4.091-2.605,10.209-3.949,15.878 c-1.123,4.749,2.378,8.62,7.06,8.62c8.478,0,14.187-10.89,14.187-23.792c0-9.806-6.6-17.149-18.616-17.149 c-13.571,0-22.034,10.124-22.034,21.433c0,3.898,1.152,6.65,2.955,8.776c0.826,0.978,0.943,1.371,0.643,2.494 c-0.219,0.825-0.707,2.805-0.912,3.59c-0.299,1.135-1.217,1.541-2.242,1.121c-6.25-2.552-9.164-9.398-9.164-17.095 c0-12.711,10.721-27.955,31.982-27.955c17.086,0,28.33,12.362,28.33,25.635C77.156,51.236,67.395,64.352,53.012,64.352z"/></symbol>
                
                <symbol id="icon-twitter-square" viewBox="0 0 94 94"><title>icon-twitter-square</title>
                    <path d="M89,0H5C2.239,0,0,2.239,0,5v84c0,2.761,2.239,5,5,5h84c2.762,0,5-2.239,5-5V5C94,2.239,91.762,0,89,0z M85.874,23.302 c-2.122,3.177-4.752,5.922-7.817,8.164c0.024,0.616,0.036,1.233,0.036,1.855c0,22.315-16.979,45.396-45.396,45.396 c-8.687,0-17.144-2.479-24.458-7.169c-0.152-0.097-0.217-0.286-0.155-0.456c0.061-0.169,0.234-0.273,0.409-0.254 c1.229,0.146,2.482,0.219,3.729,0.219c6.758,0,13.156-2.089,18.567-6.053c-6.487-0.547-12.062-4.938-14.068-11.199 c-0.041-0.131-0.011-0.271,0.08-0.375c0.09-0.103,0.229-0.146,0.362-0.123c1.797,0.342,3.624,0.362,5.387,0.078 c-6.69-2.08-11.393-8.346-11.393-15.481l0.002-0.208c0.003-0.136,0.077-0.26,0.193-0.326c0.118-0.068,0.264-0.069,0.381-0.003 c1.743,0.968,3.677,1.591,5.655,1.828c-3.844-3.064-6.102-7.709-6.102-12.678c0-2.867,0.76-5.686,2.194-8.148 c0.064-0.109,0.178-0.182,0.305-0.19c0.127-0.013,0.25,0.042,0.329,0.142c7.87,9.651,19.444,15.595,31.821,16.358 c-0.208-1.04-0.312-2.11-0.312-3.191c0-8.936,7.271-16.205,16.206-16.205c4.396,0,8.639,1.806,11.681,4.96 c3.432-0.699,6.697-1.96,9.715-3.75c0.139-0.082,0.312-0.069,0.438,0.03c0.125,0.101,0.176,0.268,0.126,0.421 c-1.021,3.199-3.018,5.989-5.696,8.004c2.523-0.439,4.974-1.182,7.302-2.214c0.157-0.072,0.342-0.027,0.453,0.104 C85.959,22.97,85.971,23.158,85.874,23.302z"/></symbol>

            </svg>
        </div>
        <footer class="botton-footer">
            <div class="wrapper">
            <div id="item-1-lista-contato" class="c-contact">
                <ul class="footer-item">
                <li id="copyright"> 
                Copyright {{getYear()}}.<br>All Rights Reserved.
                </li>
                <li>
                    <h3>Contact</h3>
                </li>
                <li>
                    <address>
                    Headquartes:
                    <br />5600, Blvd. des Galeries, Bur 530
                    <br />Québec, Québec G2k 2H6
                    <p>
                        <a href="mailto:contact@osf-global.com">contact@osf-global.com</a>
                    </p>
                    <p>
                        <a href="tel:+1-888-548-4344">+1 (888) 548-4344</a>
                    </p>
                    </address>
                </li>
                </ul>
            </div>

            <div id="item-2-lista-categorias" class="c-categories">
                <ul class="footer-item">
                <h3 class>Categories</h3>
                <li>
                    <ul class="categories-list">
                    <li>
                        <router-link to="notfound-404-error">Alcohol</router-link>
                    </li>
                    <li>
                        <router-link to="notfound-404-error">Art</router-link>
                    </li>
                    <li>
                        <router-link to="notfound-404-error">Books</router-link>
                    </li>
                    <li>
                        <router-link to="notfound-404-error">Drink</router-link>
                    </li>
                    <li>
                        <router-link to="notfound-404-error">Electronics</router-link>
                    </li>
                    </ul>
                    <ul class="categories-list">
                    <li>
                        <router-link to="notfound-404-error">Home</router-link>
                    </li>
                    <li>
                        <router-link to="notfound-404-error">Jewelry</router-link>
                    </li>
                    <li>
                        <router-link to="notfound-404-error">Kids &#38; Baby</router-link>
                    </li>
                    <li>
                        <router-link to="notfound-404-error">Men's Fashion</router-link>
                    </li>
                    <li>
                        <router-link to="notfound-404-error">Mobile</router-link>
                    </li>
                    <li>
                        <router-link to="notfound-404-error">Motorcycles</router-link>
                    </li>
                    <li>
                        <router-link to="notfound-404-error">Movies</router-link>
                    </li>
                    <li>
                        <router-link to="notfound-404-error">Music</router-link>
                    </li>
                    </ul>
                    <ul class="categories-list">
                    <li>
                        <router-link to="notfound-404-error">Sport</router-link>
                    </li>
                    <li>
                        <router-link to="notfound-404-error">Toys</router-link>
                    </li>
                    <li>
                        <router-link to="notfound-404-error">Travel</router-link>
                    </li>
                    <li>
                        <router-link to="notfound-404-error">Women's Fashion</router-link>
                    </li>
                    </ul>
                </li>
                </ul>
            </div>

            <div id="item-3-lista-about" class="c-about">
                <ul class="footer-item">
                <h3>About</h3>
                <li>
                    <router-link to="about">About us</router-link>
                </li>
                <li>
                    <router-link to="notfound-404-error">Delivery</router-link>
                </li>
                <li>
                    <router-link to="notfound-404-error">Testimonials</router-link>
                </li>
                <li>
                    <router-link to="notfound-404-error">Contact</router-link>
                </li>
                </ul>
            </div>

            <div id="item-4-lista-socialicons" class="c-social">
                <ul>
                <li class="single-social-link">
                    <div>
                    <router-link to="notfound-404-error">
                        <svg class="icon-social">
                        <use xlink:href="#icon-facebook-square" />
                        </svg>  
                    </router-link>
                    </div>
                </li>
                <li class="single-social-link">
                    <div>
                    <router-link to="notfound-404-error">
                        <svg class="icon-social">
                        <use xlink:href="#icon-google-plus-square" />
                        </svg>
                    </router-link>
                    </div>
                </li>
                <li class="single-social-link">
                    <div>
                    <router-link to="notfound-404-error">
                        <svg class="icon-social">
                        <use xlink:href="#icon-twitter-square" /> 
                        </svg>
                    </router-link>
                    </div>
                </li>
                <li class="single-social-link">
                    <div>
                    <router-link to="notfound-404-error">
                        <svg class="icon-social">
                        <use xlink:href="#icon-pinterest-square" />
                        </svg>
                    </router-link>
                    </div>
                </li>
                </ul>
            </div>
            </div>
        </footer>
    
    </div>
</template>


<script>
export default {
    name : 'PageFooter',


    methods : {
        getYear : function ( ) {
            var thisDate = new Date ( ) ;
            return thisDate.getFullYear ( ) + 0;
        }
    }

}

</script>


<style scoped>
.botton-footer,.wrapper{margin:0 auto;max-width:1280px}ol,ul{list-style:none;padding-left:0}li{margin-bottom:10px}address{font-style:normal;line-height:1.5}.about-item-list,.footer-item li a{text-decoration:none}.botton-footer .wrapper{margin-top:40px;padding:0 55px}.footer-item{font-family:LatoRegular;font-weight:400;font-size:.8em}.footer-item h3{text-transform:uppercase}.c-about,.c-categories,.c-contact,.c-social,.categories-list,.single-social-link{float:left}.c-about ul,.c-categories ul,.c-contact ul,.c-social ul,.footer-item h3{margin-top:0}.c-contact{width:21%}.c-categories{width:49%}.c-about{width:14%}.c-social{width:16%}.categories-list{width:33%}.single-social-link div{padding:0 .5em 0 .6em}.c-about li a:link,.c-about li a:visited,.categories-list a:link,.categories-list a:visited{color:#c3b1b1}address p a:link,address p a:visited{color:#000}
</style>