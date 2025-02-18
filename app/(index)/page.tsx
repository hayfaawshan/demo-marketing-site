import Link from "next/link";

export default function Page() {
 return (
        <>
            <div>Home Page</div>
            <Link href={"/about"}>About Page</Link> {" | "}
            <Link href={"/contact"}>Contact Page</Link> {" | "}
            <Link href={"/products"}>Products Page</Link>
        </>
    );
}