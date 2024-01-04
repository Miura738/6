import './globals.css'
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <header className="w-screen h-screen flex justify-center items-center">
                <Link href={"/6/6"} className={"cursor-pointer w-[120px] h-[120px] flex justify-center items-center"}>
                    <div className="rotate">⑥</div>

                </Link>

                <div>
                    <div className={`absolute z-10 bottom-16 right-10 w-20 rotate-180`}>
                        <div className={`border border-t-black wbr`}></div>
                    </div>
                    <div className={`absolute z-10 bottom-10 right-16 h-52 rotate-180`}>
                        <div className={`border border-l-black hbr`}></div>
                    </div>

                    <div className={`border border-t-black wtl absolute z-10 top-16 left-10`}></div>
                    <div className={`border border-l-black htl absolute z-10 top-10 left-16`}></div>
                </div>

                <div className={`w-screen h-screen absolute top-0 left-0 bg-[url(https://loliapi.com/acg)] -z-50 bg-center bg-no-repeat bg-cover
                after:w-screen after:h-screen after:absolute after:top-0 after:left-0 after:bg-white after:bg-opacity-75 after:-z-40`}>

                </div>
            </header>


        </main>

    )
}