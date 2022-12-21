import Link from 'next/link';
import { useRouter } from "next/router";

function Home(){
    const router = useRouter();
    const handleClick = (e) =>{
        console.log('placeing your order')
        router.replace('/product')
    }
    return (
        <div>
         <h1>Home page  </h1>
            <Link href="/blog">
              Blog
            </Link>
            <br/>
            <br/>
            <button onClick={handleClick}>
                place order
            </button>
        </div>
    )
}
export default Home;