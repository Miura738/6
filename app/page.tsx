import './globals.css'
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <header className="w-screen h-screen flex justify-center items-center">
                <Link href={"/dev/6"} className={"cursor-pointer w-[120px] h-[120px] flex justify-center items-center"}>
                    <div className="rotate">⑥</div>

                </Link>

                <div> 
                    <div className='border border-t-black wtl absolute z-10 top-16 left-10'></div>
                    <div className='border border-l-black htl absolute z-10 top-10 left-16'></div>
                </div>
            </header>
        </main>

    )
}