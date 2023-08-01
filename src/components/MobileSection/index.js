export default function MobileSection(){
    return(
        <div className="w-full flex py-[80px] justify-center gap-2 p-4">
            <div className=" pr-[100px] max-w-[700px]">
                <div className="flex text-sm">
                    <div className="flex gap-[12px] text-sm">
                        <div>
                            <p className="font-semibold text-[15px]"> Available on </p>
                        </div>
                        <p ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16"> <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/> <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/> </svg></p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16"> <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/> </svg> </p>
                    </div>
                   
                </div>
                <p className="font-bold text-[80px] leading-[92px]">Download the Fresha app</p>
                <p className="text-2xl mb-6">Book unforgettable beauty and wellness experiences with the Fresha mobile app</p>
                <div className="p-[20px] border rounded-xl absolute">
                    <img className=" hover:scale-105 " src="https://cdn-static.fresha.com/assets/cc3cbe9d1c29c4e85e677e250437e150.png"/>
                    {/* <button className="text-white bg-black rounded-3xl border border-[#bfbfbf] h-[48px] px-5" >
                        Get the App
                    </button> */}
                </div>
                
            </div>
            
                
            <div className=" flex justify-center gap-7 items-center">
                <picture>
                    <img src="https://cdn-static.fresha.com/assets/6984689be98ef82af31abede595aff3d.png"
                /></picture>
                <video autoPlay className="border-[3px] border-black rounded-3xl h-[524px]" loop muted playsInline>
                    <source type="video/mp4" src="https://cdn-static.fresha.com/assets/static/media/mobileAppVideo.cbf4226c.mp4" />
                </video>
                
            </div>
        </div>
    )
}