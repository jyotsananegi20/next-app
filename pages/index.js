import Head from 'next/head';
import Link from 'next/link';

function HomePage(){
    return(
        <>
            <Head>
                <title>My blog</title>
                <meta name='description' value="This is my blog"/>
            </Head>
            <main>
                <h1>Jyotsana's Blog</h1>
                <ul>
                    <li>
                        <Link href="/posts/first-post">First post</Link>
                    </li>
                    <li>
                        <Link href="/posts/second-post">Second post</Link>
                    </li>
                </ul>
            </main>
        </>
    )
}
export default HomePage;