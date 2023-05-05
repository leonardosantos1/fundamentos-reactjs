import { Trash, ThumbsUp} from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"
import { useState } from "react";

export function Comment({content,onDeleteComment}){
    const [likeCount,setLikeCount] = useState(0);



    function handleDeleteComment(){

        onDeleteComment(content);
    }
    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://github.com/dev-ViniciusMonteiro.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Leonardo Santos</strong>
                            <time title="25 de abril as 16:18h" dateTime="2023-04-25" >Cerca de 1h atrás</time>

                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentario">
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}><span><ThumbsUp/></span>Aplaudir<span>{likeCount}</span></button>
                </footer>
            </div>
        </div>

    )
}