import { readFile } from 'fs/promises';
import {marked} from 'marked';

export async function getPost(slug){
    //const data = await readFile(`content/posts/${slug}.json`, 'utf8');
    //return JSON.parse(data);   
    //above two lined used for getting data from json
    
    //below lines used for marked down

    const source = await readFile(`content/posts/${slug}.md`, 'utf-8');
    const html = marked(source);
    return{
        body: html,
    };
}