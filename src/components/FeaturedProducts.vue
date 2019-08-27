<template>
<div>
    <div hidden>
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <symbol id="slim-arrow" viewBox="0 0 129 129"><title>slim-arrow</title>
                <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/></symbol>
        </svg>
    </div>


    <div class="wrapper">
        <div class="div-feat-itens">
            <div class="feat-label">
                <h1>Featured Products</h1>
                <span>Unde omnis iste natus error sit voluptatem</span>
            </div>
            <div class="carrousel-controler"> 
                <div class="carrousel-button leftArrow"><svg class="arrow-slim"><use xlink:href="#slim-arrow" /></svg></div>
                        <div class="horizontal"><hr></div>
                        <div class="diagonal"> <p>&#47; &#47; &#47;</p> </div>
                        <div class="horizontal"><hr></div>
                <div class="carrousel-button rightArrow"><svg class="arrow-slim"><use xlink:href="#slim-arrow" /></svg></div>
            </div>
            <div class="">
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name : 'FeaturedProducts'
}
</script>


<style scoped>
ul, li{
    padding: 0 0 0 0;
    margin: 0 0 0 0;
}
.div-feat-itens{
    padding: 0 3.438em;
    background-color: #262a32;
    
}
.feat-label{
    font-family: 'LatoRegular';
    color: #ffffff;
    text-align: center;
    padding: 34px 0 21px 0;
    letter-spacing: 0.1em;
    margin: auto;
}
.feat-label h1{
 font-size: 36px;
 margin: 0.4em 0;   
}
.feat-label span{
    font-size: 18px;   
}
.carrousel-controler,
.carrousel-button{
    height: 30px;
}
.carrousel-controler{
    width: 592px;
    text-align: center;
    margin: auto;
}
.carrousel-button{
    width: 30px;
    background-color: #45413e;
}
.carrousel-controler div{
    float: left;
}
.diagonal{
    color: #ffffff;
    font-weight: bold;
    font-size: 1.5em;
}
.diagonal p{
    margin: 0;
}
.horizontal hr{
    fill: #ffffff;
    height: 0.125em;
    width: 14.375em;
    border: none;
    background-color: #ffffff;
    margin: 14px 9px;
}
.leftArrow{
    transform: rotate(90deg);
}
.rightArrow{
    transform: rotate(270deg);
}


</style>