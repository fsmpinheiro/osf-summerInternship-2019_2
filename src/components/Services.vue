<template>
<div>
    <div class="container">
        <div class="wrapper">
            <div class="breadcumbs">
                <router-link to="/"><p>Home</p></router-link >
                <p>/</p> 
                <p>Category Landing Services</p>
            </div>
            <div class="label">
                <div class="horizontal"><hr></div>
                <div><p>Services</p></div>
                <div class="horizontal"><hr></div>
            </div>
            <div class="filters-field">
                <div class="filters">
                    <div class="column">
                        <p class="label">Price</p>
                        <div class="opt-field">$0.00 — $100.00</div>
                    </div>
                    <div class="column">
                        <p class="label">Brands</p>
                        <div class="opt-field">Ukraine sport</div>
                    </div>
                    <div class="column">
                        <p class="label">Size</p>
                        <div class="opt-field">Small</div>
                    </div>
                    <div class="column">
                        <p class="label">Color</p>
                        <div class="opt-field opt-colors">
                            <ul class="opt-dots">
                                <li class="opt-dot color1"> </li>
                                <li class="opt-dot color2"> </li>
                                <li class="opt-dot color3"> </li>
                                <li class="opt-dot color4"> </li>
                                <li class="opt-dot color5"> </li>
                                <li class="opt-dot color6"> </li>
                                <li class="opt-dot color7"> </li>
                                <li class="opt-dot color8"> </li>
                            </ul>
                        </div>
                    </div>
                    <div class="column">
                        <p class="label">Sort by</p>
                        <div class="opt-field">Price</div>
                    </div>
                    <div class="column">
                        <p class="label">Show</p>
                        <div class="opt-field">16 per page</div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name : 'ServicesComp',
}
</script>

<style scoped>
.wrapper{background-color:#f1edea;min-height:500px}.breadcumbs{padding:45px 0 10px 435px;font-family:LatoRegular}.breadcumbs p{text-align:center;font-size:22px;color:#45413e;float:left;display:block;margin:0 8px}.breadcumbs a p{color:#84bc22}.label{font-family:LatoRegular;font-size:1.5em;padding-top:18px;height:50px}.label div{float:left}.label p{margin:0 18px;font-size:48px;color:#45413e;font-weight:900}.horizontal{margin-top:-4px}.horizontal hr{fill:#fff;height:.125em;width:410px;border:none;background-color:#fff;margin:32px 55px}.filters-field{margin:0 55px}.filters{height:166px;background-color:#fff;margin:15px 0;border-radius:8px}.filters .column{text-align:center;float:left;height:5em;width:33.33%;font-family:LatoRegular}.label{display:inline-block;float:none;font-size:14px;margin-right:10px}.column .opt-colors{border:none}.opt-field{display:inline-block;float:none;color:#45413e;font-size:14px;margin:10px;border:1px solid #45413e;width:198px;height:32px;line-height:33px;border-radius:18px}.opt-dots{bottom:10px;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:flex;float:none;margin:0;margin-left:105px;align-items:center;list-style:none;width:200px}.opt-dot{margin:0 1.5px;border:2px solid #e6e6e6;border-radius:50%;display:block;height:16px;width:16px}.opt-dot:hover{border:2px solid #45413e}.opt-dots .color1{background-color:#fff}.opt-dots .color2{background-color:#43c0cf}.opt-dots .color3{background-color:#3d402f}.opt-dots .color4{background-color:#4aaf00}.opt-dots .color5{background-color:#315bbd}.opt-dots .color6{background-color:#ec6115}.opt-dots .color7{background-color:#dc041d}.opt-dots .color8{background-color:#efead7}
</style>