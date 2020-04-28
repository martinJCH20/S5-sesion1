import React, { Component } from 'react';
import './PostList.css';

export default class PostList extends Component { //componente de clase
    constructor(props){
        super(props)
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
		this.setState({
			posts: this.props.posts,
		});
	}
	render() {
        const { posts } = this.props;
        const cardsPost = posts.map((post, index) => 
            <div className='card-container'>
                <div className='post-id'>
                    <h2>{post.id}</h2>
                </div>
                <div className='post-description'>
                    <div className='post-title'>
                        <h2>{post.title}</h2>
                    </div>
                    <div className='post-body'>
                        <p>{post.body}</p>
                    </div>
                </div>
            </div>
        );
		console.log('posts PostList', posts);
    return <div className='container-list'>{cardsPost}</div>;
	}
}