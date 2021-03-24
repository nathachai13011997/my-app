import React from 'react'
import PropType from 'prop-types'
// { id, title, deletePost }
const Post = (props) => {
//     let alt ="https://source.unsplash.com/random"
//    if(!props.id){
//      alt = `https://source.unsplash.com/random?sig=${props.id}` 
//    }
   

    return <>
        <div className="Post">
            <button className="Post__delete" onClick={() => { props.deletePost(props.id) }}>X</button>
            <div className="Post__title">{props.title}</div>
            {/* random รูปภาพ */}
            
            <img className="Post__image" src={`https://source.unsplash.com/random?sig=${props.id}`} alt="img"/>
        </div>
    </>
}

Post.PropType = {
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
    deletePost: PropType.func.isRequired,
}

export default Post