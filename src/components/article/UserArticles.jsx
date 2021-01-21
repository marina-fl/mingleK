import React from 'react';
import ArticleForm from './ArticleForm'
import './ArticleStyle.css' 
function UserArticles(){
    return(
    <ul className="liststyle">
        <li><ArticleForm/></li>
        <li><ArticleForm/></li>
        <li><ArticleForm/></li>
    </ul>
    
  );
};

export default UserArticles;

