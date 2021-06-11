import {useState, useEffect } from 'react'
import { MdDeleteForever } from "@react-icons/all-files/md/MdDeleteForever";
import * as StylesList from '../Styles/index.module.css'
import {Link} from 'next'
function HomePage({Articles}) {
   
   
   function GetDate(StringDate){
    const result = StringDate.split(/[-,T.:\s/]/)
    const year = result[0]
    const mount= result[1]
    const day = result[2]
    const hour = result[3]
    const minute= result[4]
     return <p>{`${day}/${mount}/${year}   ${hour}:${minute}`}</p>
   }
   



    async function deleteArticle(id) {
        const url = 'http://localhost:3000/api/Delete'
        const requestOptions={
            method: 'POST',
            body:id
        }
        fetch(url,requestOptions)
        setTimeout(() => {
          location.reload();
          
        }, 500);
        
      return console.log(`element with ${id} has delete`);
    }
    return (
        <div>
        <ul className={StylesList.Container}>
            {Articles && Articles.map((Article)=>
           
            <li className={StylesList.containerItem} key={Article._id}>
                <a href={Article.url}>{Article.story_title}</a>
                <a href={Article.url}>{Article.title}</a>
                {GetDate(Article.create_at)}
                <p className={StylesList.author}>{Article.author}</p>
                <button onClick={()=>deleteArticle(Article._id)}><MdDeleteForever className={StylesList.Icon} /></button>
            </li>
            )}
            </ul>
        </div>
    )
  }

  HomePage.getInitialProps = async (ctx) => {
    const res = await fetch('http://localhost:5000/articles/')
    const json = await res.json()
 
    const Fechas =json.map((x)=>x.create_at.split(/[-,T.:\s/]/));
   
    
    return { Articles: json, Fechas}
  }
  
  export default HomePage