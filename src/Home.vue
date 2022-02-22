<template>
    <div class="text-white bg-mel1">

        <!-- navigation -->
            <div class="sticky top-0 flex justify-between px-8 pt-5 ">
                <div class="flex text-4xl">
                    <p>melriver</p>
                    <p class="font-normal hidden sm:visible text-slate-600">/studio</p>
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
                
                <div class="pt-88 font-semibold text-6xl px-5 sm:px-44 sm:text-8xl">
                    <p>Timeless products,</p>
                    <p>outstanding brands.</p>
                </div>
                <div class=" pt-12 space-y-1 text-lg tracking-wide px-5">
                    <p>We craft outstanding direct-to-consumer brands with the common</p>
                    <p>ambition to offer true craftsmanship, timeless products that are</p>
                    <p>carbon neutral - and this without ever making any concessions</p>
                </div>
                <div class="absolute hidden bottom-5 right-5">
                    <ul class="space-y-5">
                        <li>Lorem ipsum dolor sit amet consectetur elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur elit.</li>
                    </ul>
                </div>             
            </div>

        <!-- content 2 -->
            <div class="h-screen sm:h-screen bg-white text-mel1">
                <div class="px-5 sm:py-12 py-5 text-5xl font-semibold sm:text-8xl">
                    <p>Our brands</p>
                </div>
                <div>
                     <div class="flex w-full bg-blue-200 h-auto border-t border-b">
                        <div class="w-96">
                            <div class="pt-6 border-r ">
                                <div class="w-88 mx-auto">
                                <img src="/public/img/img1.jpg" class="w-88 mx-auto transition duration-700 ease-in-out delay-150 rounded-md hover:scale-110" alt="">
                                </div>
                                
                                <div class="flex justify-between px-6 pt-3 pb-6" >
                                    <div class="text-2xl font-semibold">Hills</div>
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
                <div class="flex justify-between px-5 py-5">
                    <button class="border border-black rounded-full px-5 py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor">
                            <path stroke-linecap="round" 
                                stroke-linejoin="round" 
                                stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                    </button>
                    <button class="border border-black rounded-full px-5 py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="hover:animate-[wiggle_1s_ease-in-out_infinite] h-6 w-6" fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor">
                            <path stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>

        <!-- content 3 -->
            <div class="relative h-350">
                <div>
                    <div class="sm:text-8xl pt-10 text-5xl sm:pt-32 px-3 font-semibold sm:px-44">
                        <p>We're truly</p>    
                        <p>sustainable.</p>    
                    </div>
                    <div class="absolute sm:pt-20 pt-14 px-2 sm:right-40 space-y-1 text-xl">
                        <p>Sustainability is part of Melriver’s DNA since inception. Our ambition is
                        to safeguard successful, long-term, sustainable brands in balance
                        between social, environmental, and financial interests.</p>    
                        <p class="pt-5">We are committed to creating sustainable products that are
                        authentic, timeless and enduring. We design our products around
                        circular principles and partner with our suppliers to source
                        sustainable materials without compromising quality.</p>    
                    </div>
                    <div class="absolute hidden flex bottom-10 right-44 space-x-52">
                        <div>
                            <div class="py-8 border-t w-100 border-slate-600" v-for="data in datas" :key="data">
                                <div class="pt-2 flex justify-between">
                                    <p class="text-7xl "> {{data.number}} </p>
                                    <p> {{data.unit}} </p>     
                                </div>
                                <div>
                                    <p class="pt-8 text-xl text-slate-500/70"> {{data.txt}} </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="py-8 border-t w-100 border-slate-600" v-for="data in datas" :key="data">
                                <div class="pt-2 flex justify-between">
                                    <p class="text-7xl "> {{data.number}} </p>
                                    <p> {{data.unit}} </p>     
                                </div>
                                <div>
                                    <p class="pt-8 text-xl text-slate-500/70"> {{data.txt}} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute sm:hidden flex bottom-20 left-2"> 
                        <div>
                            <div class="py-2 border-t w-100 border-slate-600" v-for="data in datas" :key="data">
                                <div class="flex justify-between">
                                    <p class="text-5xl "> {{data.number}} </p>
                                    <p> {{data.unit}} </p>     
                                </div>
                                <div>
                                    <p class="pt-3 pb-5 text-base text-gray-500"> {{data.txt}} </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>     
                </div>
            </div>

        <!-- content 4 -->
            <div class="h-450 relative bg-white text-mel1">
                <div>
                    <div class="text-8xl pt-32 font-semibold px-44">
                        <p>We aim for</p>    
                        <p>timeless.</p>    
                    </div>
                    <div class="absolute pt-20 right-40 space-y-1 text-xl">
                        <p>One reason why people want to use certain products and services is</p>
                        <p>they like it, it is aesthetically pleasing. Timeless design includes the</p>
                        <p>aesthetic quality and high standard of a product and it is integral to its</p>
                        <p>usefulness due to its frequent usage. An ageless designed product</p>
                        <p>will have a profound effect on people and their wellbeing, it can even</p>
                        <p>change their habits and behavior.</p>    
                    </div>
                    
                </div>
                <div class="bg-slate-400 absolute inset-x-0 bottom-32 mx-auto w-4/5 h-2/4 ">
                        <div class="pt-5 pl-6">
                            <p class="text-white font-semibold">1/4</p>
                        </div>
                        <img src="" alt="">
                        <div class="absolute right-3 bottom-3">
                            <button class="text-4xl flex text-center pb-1 font-extralight text-white px-8 bg-gray-500/50 rounded-full">
                                +
                            </button>
                        </div>
                    </div>
            </div>

            



    </div>
</template>

<script>
export default {
    data(){
    return{
        // brands: [
        //     {name: 'Hills', icon: '1'},
        //     {name: 'Gunung', icon: '1'},
        //     {name: 'Api', icon: '1'}
        // ],
        datas: [
            {number: '18,389', unit: 'people', txt: 'became clients of Melriver brands'},
            {number: '1,846.2', unit: 'kgs of CO2', txt: 'were saved on shipping emissions offset'},
            {number: '50,304', unit: 'trees', txt: 'equivalent number of tree seedings protected'},
            {number: '90,500', unit: 'km2', txt: 'total forest area protected since 2020'},
            {number: '4.91/5', unit: 'avg. rate', txt: 'average rating given by customers of our brands'},
            {number: '21 billion', unit: 'kms', txt: 'distance traveled by our parcels that we have compensated'}
        ]
    }
    }
}
</script>