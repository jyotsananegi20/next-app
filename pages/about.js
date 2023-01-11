import Head from "next/head";

function AboutPage(){
    return(
        <>
            <Head>
                <title>About</title>
                <meta name='description' value="This is my about page"/>
            </Head>
            <main>
                <h1>About</h1>
                <p>Hi This is a page about me</p>
            </main>
        </>
    )
}
export default AboutPage;