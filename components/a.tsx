import Link from "next/link";

const A = ({href,children,...props}: { href: string,children?:string }) => {
    const url = new URL(href);
    console.log(url)

    return(<Link href={href}
        {...props}
    >{children}</Link>)


}

export default A;