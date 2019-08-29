<template>
<div>
    <div class="container">
        <div class="wrapper">
            <div class="breadcumbs">
                <!-- <router-link to="/"> Home <router-link /> -->
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

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name : 'services',
}
</script>

<style scoped>
.wrapper{
    background-color: #f1edea;
}
.breadcumbs{
    padding: 45px 0 10px 435px;
    font-family: 'LatoRegular';
}
.breadcumbs p{
    text-align: center;
    font-size: 22px;
    color: #45413e;
    float: left;
    display: block;
    margin: 0 8px;
}
.breadcumbs a p{
    color: #84bc22;
}
.label{
    font-family: 'LatoRegular';
    font-size: 1.5em;
    padding-top: 18px;
    height: 50px;
}
.label div{
    float: left;
}
.label p{
    margin: 0 18px;
    font-size: 48px;
    color: #45413e;
    font-weight: 900;
}
.horizontal{
    margin-top: -4px;
}
.horizontal hr{
    fill: #fff;
    height: 0.125em;
    width: 410px;
    border: none;
    background-color: #fff;
    margin: 32px 55px;
}

.filters-field{
    margin: 0 55px;
}
.filters{
    height: 166px;
    background-color: #fff;
    margin: 15px 0;
    border: 1px solid #45413e;
    border-radius: 8px;
}
.filters .column{
    float: left;
    height: 10.3em;
    width: 33.33%;
    background-color: none;
    font-family: 'LatoRegular';
}
.label{
    display: inline-block;
    float: none;
    font-size: 14px;
}

.opt-field{
    display: inline-block;
    float: none;
    color: #45413e;
    font-size: 14px;
    margin: 10px;
    border: 1px solid #45413e;
    width: 198px;
    height: 32px;
    text-align: center;
    line-height: 33px;
    border-radius: 15px;
}

</style>