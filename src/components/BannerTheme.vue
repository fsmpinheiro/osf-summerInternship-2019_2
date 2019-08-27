<template>
    <div>
        <div class="wrapper">
            <div class="banner-body">
                <div class="text">
                    <h1>Banner OSF Theme</h1>
                    <h3>Sed ut perspiciatis unde omnis iste natus error sit volup-tatem accusantium</h3>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
   name : 'BannerTheme'
}
</script>

<style scoped>

.banner-body{
    background-color: #262a32;
    background: url('../assets/imgs/banner-background.png') no-repeat;
    background-position-y: center;
}

.banner-body .text{
    height: 445px;
    font-family: 'LatoRegular';
    color: #ffffff;
    text-align: center;
}

.banner-body .text h1{
    font-size: 48px;
    font-weight: 900;
    margin: 0 0 41px 0;
    padding-top: 150px;
}
.banner-body .text h3{
    width: 370px;
    font-size: 15px;
    font-weight: normal;
    margin: auto;
    
}


</style>
