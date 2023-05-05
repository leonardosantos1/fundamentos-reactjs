import { Header } from "./components/Header"
import "./global.css"
import styles from "./App.module.css"
import { Sidebar } from "./components/SiderBar"
import { Post } from "./components/Post"


const posts = [{

  id:1,
  author:{
    avatarUrl:"https://github.com/dev-ViniciusMonteiro.png",
    name:'Vinicius Monteiro',
    role:"FullStack Developer at Compass"
  },
  content:[
    {type:'paragraph', content:'Fala Rapaziada'},
    {type:'paragraph', content:'Acabei de hackear a nasa aqui que locuura, segura o rojão'},
    {type:'link', content:'rojão.com.br'}
  ],
  publishedAt:new Date("2023-04-24 10:00:00")

},
{

  id:1,
  author:{
    avatarUrl:"https://github.com/leo.png",
    name:'Leo',
    role:"Developer"
  },
  content:[
    {type:'paragraph', content:'Fala Rapdawdawdawdaziada'},
    {type:'paragraph', content:'Acabei de hackear a nasa aqui que locuura, segura o rojão'},
    {type:'link', content:'rojão.com.br'}
  ],
  publishedAt:new Date("2023-04-26 10:00:00")

}
]

export function App() {

  return (
    <div>
    <Header/>
    <div className={styles.wrapper}>

      <Sidebar/>
      <main>

        {posts.map(post =>{
          return <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt}/>
        })

        }

      </main>

    </div>
    
    </div>
    
  )
}

