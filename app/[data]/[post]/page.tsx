import Link from "next/link";

export default function Page({ params }: { params: { data: string,post: string } }) {
  return (
  <main>
    <header className="w-screen h-screen flex justify-center items-center">
      <Link href={`/${params.post}`} className={"cursor-pointer w-[120px] h-[120px] flex justify-center items-center"}>
        <div className="rotate">{params.data}</div>

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
    </header>
  </main>
)
}