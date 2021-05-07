import React, { useState, useEffect } from 'react';
import './post.scss';
import { MoreVert } from '@material-ui/icons';
import axios from 'axios';

const Post = ({ post }) => {
  console.log(post);
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(`users/${post.userId}`);
      setUser(data);
    };
    fetchUser();
  }, []);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={user.profilePicture || publicFolder + 'person/noAvatar.png'}
              alt="author of post"
            />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert style={{ cursor: 'pointer' }} />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={publicFolder + post.img} alt="post" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={`${publicFolder}like.png`}
              onClick={likeHandler}
              alt="like"
            />
            <img
              src={`${publicFolder}heart.png`}
              onClick={likeHandler}
              alt="heart"
            />
            <span className="postLikeCounter">{like} people like this</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
