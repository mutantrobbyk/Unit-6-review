import React from 'react';

function PostDisplay(props) {
        return(
            <div onDoubleClick={() => props.deletePost(props.post.post_id)}>
                <img src={props.post.image_url} alt='user post' style={{width: '150px'}}/>
            </div>
        )
    
}

export default PostDisplay;