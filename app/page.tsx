import './globals.css'
import Test from "@/components/test";
import React from "react";

export default function Home() {



    return (
        <main id={"main"} className={`overflow-y-visible overflow-x-hidden h-screen w-screen`}>
            <header className="w-screen h-[calc(100vh)] overflow-hidden flex justify-center items-center relative">
                    <div id={"button"}
                         className={"cursor-pointer w-[120px] h-[120px] flex justify-center items-center"}>
                        <div className="rotate">⑥</div>

                    </div>

                    <div>
                        <div className={`absolute z-10 bottom-16 right-10 w-20 rotate-180`}>
                            <div className={`border border-t-black wbr`}></div>
                        </div>
                        <div className={`absolute z-10 bottom-10 right-16 h-52 rotate-180`}>
                            <div className={`border border-l-black hbr`}></div>
                        </div>

                        <div className={`absolute z-10 top-16 left-10 w-48`}>
                            <div className={`border border-t-black wtl`}></div>
                        </div>
                        <div className={`absolute z-10 top-10 left-16 h-32`}>
                            <div className={`border border-l-black htl`}></div>
                        </div>
                    </div>

                    <div className={`w-full h-full absolute top-0 left-0 bg-[url(/static/download.jpg)] -z-50 bg-center bg-no-repeat bg-cover
                after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-white after:bg-opacity-75 after:-z-40`}>
                    </div>
            </header>

            <div className={`w-screen h-36 flex justify-center items-center`}>
                666666666666666666666666666666666666666666666666666666666666
            </div>
            <div className={`w-screen h-screen flex justify-center items-center`}>
                6666666666666666666666666666
            </div>
            <Test/>
        </main>

    )
}