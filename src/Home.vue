<template>
    <div class="text-white bg-mel1">

        <!-- navigation -->
            <div class="sticky top-0 flex justify-between px-8 pt-5 bg-transparent ">
                <div class="flex text-4xl">
                    <p>melriver</p>
                    <p class="font-normal text-slate-600">/studio</p>
                </div>
                <div>
                    <button class="py-2 border rounded-full px-7 hover:bg-slate-400 border-slate-600/90 ">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            class="w-6 h-6" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="white">
                            <path stroke-linecap="round" 
                            stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

        <!-- content 1 -->
            <div class="relative h-screen">              
                
                <div class="pt-20 font-semibold text-8xl font px-44">
                    <p>Timeless products,</p>
                    <p>outstanding brands.</p>
                </div>
                <div class="pt-20 space-y-1 text-lg tracking-wide font px-44">
                    <p>We craft outstanding direct-to-consumer brands with the common</p>
                    <p>ambition to offer true craftsmanship, timeless products that are</p>
                    <p>carbon neutral - and this without ever making any concessions</p>
                </div>
                <div class="absolute bottom-5 right-5">
                    <ul class="space-y-5">
                        <li>Lorem ipsum dolor sit amet consectetur elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur elit.</li>
                    </ul>
                </div>             
            </div>

        <!-- content 2 -->
            <div class="h-screen bg-white text-mel1">
                <div class="px-5 py-12 text-8xl">
                    <p>Our brands</p>
                </div>
                <div>
                     <div class="flex w-full h-auto border-t border-b ">
                        <div class="w-1/4" v-for="brand in brands">
                            <div class="pt-10 border-r ">
                                <div class="">
                                <img src="/public/img/img1.jpg" class="mx-auto transition duration-700 ease-in-out delay-150 rounded-md w-96 hover:scale-110" alt="">
                                </div>
                                
                                <div class="flex justify-between px-10 pt-3 pb-9" >
                                    <div class="text-2xl font-semibold"> {{brand.name}} </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" 
                                            class="w-6 h-6" 
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            stroke="currentColor">
                                        <path stroke-linecap="round" 
                                        stroke-linejoin="round" 
                                        stroke-width="1" d="m13 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
</template>

<script>
export default {
    data(){
    return{
        brands: [
            {name: 'Hills', icon: '1'},
            {name: 'Hills', icon: '1'},
            {name: 'Hills', icon: '1'}
        ]
    }
    }
}
</script>