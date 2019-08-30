<template>
    <div class="notfound">
        <div hidden>
            <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                <symbol id="icon-search" viewBox="0 0 52.966 52.966">
                    <title>icon-search</title>
                    <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21 c5.083,0,9.748-1.817,
                                        13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279 C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,
                                        40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19 S32.459,40,21.983,40z" />
                </symbol>
            </svg>
        </div>
            <div class="wrapper">
                <div class="breadcumbs">
                    <router-link to="/"><p>Home</p></router-link >
                    <p>/</p> 
                    <p>404</p>
                </div>
                <div class="label">
                        <div class="horizontal"><hr></div>
                        <div><p>404</p></div>
                        <div class="horizontal"><hr></div>
                </div>
                
                <div class="message-container">
                    <div class="opps">
                        <p>Opps!</p>
                    </div>
                    <div class="message">
                        <h2>Sorry, this page could not be found!</h2>
                        <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                        <router-link to="/"> Go back to Homepage </router-link>
                        <h2>Search our site</h2>
                        <div class="search-field">
                            <input type="text" name="seacrh" placeholder="Search">
                            <div class="search-field-icon">
                                <svg class="icon-header"><use xlink:href="#icon-search" /></svg>
                            </div>
                        </div> 
                    </div>    

                </div>
            </div>
        </div>
</template>

<script>
export default {
    name : 'notfound',
}
</script>

<style scoped>
.wrapper{height:720px;background-color:#f1edea}.breadcumbs{padding:45px 550px 10px 550px;font-family:LatoRegular}.breadcumbs p{text-align:center;font-size:22px;color:#45413e;float:left;display:block;margin:0 8px}.breadcumbs a p{color:#84bc22}.label{font-family:LatoRegular;font-size:1.5em;padding-top:18px;height:50px}.label div{float:left}.label p{margin:0 18px;font-size:48px;color:#45413e;font-weight:900}.horizontal{margin-top:-4px}.horizontal hr{fill:#e5e2df;height:.125em;width:510px;border:none;background-color:#e5e2df;margin:32px 32px}.message-container{font-family:LatoRegular;margin:auto;height:492px;width:1170px;background-color:#fff;background:url(../assets/imgs/warning-exclamation.png) -105px 25px/38% no-repeat}.opps{height:100%;width:40.18%;background:#fffffff1;float:left;color:#84bc22;font-weight:900;font-size:113px;text-align:center}.opps p{margin:180px 0}.message{height:100%;width:59.82%;float:left;background-color:#fff}.message a,.message h2,.message input,.message p{margin-left:10px}.message h2{margin-top:70px;font-size:28px}.message a{color:#84bc22;font-size:18px;text-decoration:none}.message p{margin-right:120px;margin-top:30px;font-size:18px}.search-field{margin-right:100px;border:1px solid #e8e2d6;border-radius:20px;padding-left:15px;height:36px}.search-field input{height:35px;float:left;width:36em;font-size:14px;color:#45413e;text-transform:uppercase;border:transparent;background:0 0;padding-left:10px}.search-field input:focus{outline:0}.search-field-icon{float:right;padding:0;margin:3px 12px;line-height:1px}.search-field-icon .icon-header{fill:#45413e}
</style>