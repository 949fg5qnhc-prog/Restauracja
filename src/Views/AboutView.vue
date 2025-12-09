<script setup>
</script>

<template>
    <img src="/public/pexels-efrem-efre-2786187-16124818.jpg" class="blur-sm flex object-cover bg-no-repeat absolute" />
    <div class="grid grid-cols-3 gap-0  text-white bi-1">
        <div class="col-span-1 bg-black/60 p-8 min-h-[35vh]" style="clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%);">
            
            <img src="/public/chef.jpg" class="ml-2 rounded-2xl ring-2 ring-white/30 max-w-[20vw] max-h-[30vh]"></img>
        </div>
        <div class="col-span-2 bg-white/60 p-8 text-black" style="clip-path: polygon(12.5% 0, 100% 0, 100% 100%, 0 100%);">
            <p class="ml-16 mt-4" style="transform: skew(-20deg);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar accumsan mollis. Vestibulum ullamcorper nec metus posuere varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque libero sit amet risus semper, nec consectetur nibh tincidunt. Maecenas augue enim, fringilla nec nunc id, pellentesque semper sem. Ut vel quam id enim rhoncus lobortis. In nec odio auctor, ullamcorper risus a, lobortis quam. Nulla malesuada lorem nisl. Proin eu commodo lectus, eu viverra purus. Mauris pellentesque dui sed consequat lobortis. Vivamus scelerisque lacus eu urna iaculis laoreet.</p>
        </div>
        
    </div>
    <div class="bi-5 col-span-3 bg-gray-400/30 max-w-lvw max-h-[20vh] h-[10vh] flex items-center justify-center" style="clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);">        
        <h2 class="text-xl text-white text-center px-4">Oto nasi kucharze, którzy pomogą Wam stworzyć Wasze ulubione dania w taki sposób, jaki sobie zażyczycie</h2>
    </div>
    <div class="grid grid-cols-6 gap-0 min-h-[40vh]"> 
        <div class="col-span-2 bg-black/60 p-8 text-white bi-2" style="clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%);">
             <div class="pr-12">
                <img src="/public/chef.jpg" class="rounded-2xl ring-2 ring-white/30 max-w-[10vw] mx-auto mb-3"></img>
                <p style="transform: skew(-15deg);">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
             </div>
             
        </div>
        <div class="col-span-2 bg-white/60 p-12 text-black bi-3" style="clip-path: polygon(25% 0, 100% 0%, 75% 100%, 0% 100%);">
             <div class="px-8">
                <img src="/public/chef.jpg" class="rounded-2xl ring-2 ring-black/30 max-w-[10vw] mx-auto mb-3"></img>
                <p style="transform: skew(-15deg);">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
             </div>
        </div>
        <div class="col-span-2 bg-black/60 p-8 text-white bi-4" style="clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);">
             <div class="pl-12">
                <img src="/public/chef.jpg" class="rounded-2xl ring-2 ring-white/30 max-w-[10vw] mx-auto mb-3"></img>
                <p class="-ml-2 mr-2" style="transform: skew(-15deg);">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
             </div>
        </div>
    </div>
    <footer class="bg-gray-600/70 backdrop-blur-2xl backdrop-opacity-15 flex justify-between items-center p-2 border border-gray-950 inset-shadow-2xl inset-shadow-white">
        <div class="text-lg text-shadow-md text-shadow-gray-500 text-white italic"><p class="ml-5">SelfMade</p></div>
        <div class="flex items-center text-md text-shadow-md text-shadow-gray-500 text-white italic"><i class="pi pi-envelope mr-1.5" style="color: black; font-size: 14px;"></i><p class="mr-5">selfmade@self.com</p></div>
        <div class="flex items-center text-md text-shadow-md text-shadow-gray-500 text-white italic"><i class="pi pi-map-marker mr-1.5" style="color: black; font-size: 14px;"></i><p class="mr-5">adres</p></div>
    </footer>
</template>

<style scoped>
p{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
div{
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.bi-1{
    animation: bounce-in1 2s ease;
}
@keyframes bounce-in1 {
    0% { transform: translate(0%, -150%); opacity: 0; scale: 150%; }
    25% { scale: 125%; }
    50% { transform: translate(0px, 15px); opacity: 1; scale: 110%; }
    100% { transform: translate(0, 0); scale: 100%; }
}
.bi-2{
    animation: bounce-in2 2s ease;
}
@keyframes bounce-in2 {
    0% { transform: translate(-150%, 150%); opacity: 0; scale: 150%; }
    25% { scale: 125%; }
    50% { transform: translate(15px, -15px); opacity: 1; scale: 110%; }
    100% { transform: translate(0, 0); scale: 100%; }
}
.bi-3{
    animation: bounce-in3 2s ease;
}
@keyframes bounce-in3 {
    0% { transform: translate(0%, 150%); opacity: 0; scale: 150%; }
    25% { scale: 125%; }
    50% { transform: translate(0px, -15px); opacity: 1; scale: 110%; }
    100% { transform: translate(0, 0); scale: 100%; }
}
.bi-4{
    animation: bounce-in4 2s ease;
}
@keyframes bounce-in4 {
    0% { transform: translate(150%, 150%); opacity: 0; scale: 150%; }
    25% { scale: 125%; }
    50% { transform: translate(-15px, -15px); opacity: 1; scale: 110%; }
    100% { transform: translate(0, 0); scale: 100%; }
}
.bi-5{
    animation: bounce-in5 2s ease;
    z-index: 1000;
}
@keyframes bounce-in5 {
    0% { transform: translate(150%, 0%); opacity: 0; scale: 150%; }
    25% { scale: 125%; }
    50% { transform: translate(-15px, 0px); opacity: 1; scale: 110%; }
    100% { transform: translate(0, 0); scale: 100%; }
}
</style>