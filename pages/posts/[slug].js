import Head from "next/head";
import { getPost } from "../../lib/posts";

export const getStaticPaths = async () => {
    return{
        paths:[
            { params: { slug: 'first-post' } },
            { params: { slug: 'second-post' } },
        ],
        fallback: false,
    }
}

export const getStaticProps = async ({ params: {slug}})=>{ //rendered on server
   const post = await getPost(slug);
   
   return{
        props: { post },
    };
}

const Post = ({post})=>{
    return(
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <main>
                <h1>{post.title}</h1>
               <article dangerouslySetInnerHTML={{__html: post.body }} />
            </main>
        </>
    );
}

export default Post;