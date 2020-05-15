import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBarContainer from '../navigation_bar_container';
import PostIndexItem from './post_index_item';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCamera, faQuoteLeft, faHeadphones, faVideo, faPlusSquare, faComment, faRetweet, faCog, faCheckSquare
} from "@fortawesome/free-solid-svg-icons";






class PostIndex extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            reblogged: false
        }
    }

    reblog(e) {
        const post = this.props.post;

        const reblog = e.target
        if (this.state.reblogged) {
            this.setState({ reblogged: false });

            reblog.classList.remove('added')
        } else {
            this.setState({ reblogged: true });
            reblog.classList.add("added")
        }
    }


    componentDidMount() {
        this.props.fetchAllPosts()
    }

    render() {
        let postitems = this.props.posts.map(post => {
            if (post) {
                return <PostIndexItem 
                post={post} 
                key={post.id} 
                fetchSinglePost={this.props.fetchSinglePost} 
                likePost={this.props.likePost} 
                unlikePost={this.props.unlikePost} 
                closeModal={this.props.closeModal}
                openblogSeven={this.props.openblogsevenForm}
                />

            } else {
                return null
            }
        })
        return (
            <div>
                <NavigationBarContainer />


                <div className='post-index-container'>
                    {/* <div className='left-column'>

</div> */}
                    <div className='middle-column'>
                        <div className='create-all-post-buttons'>
                            <div className='create-text-post-button'>
                                <button className='text-button' onClick={this.props.openTextPostForm}>Aa</button>
                                <span>Text</span>
                            </div>
                            <div className='create-photo-post-button'>
                                <button className='photo-button' onClick={this.props.openImagePostForm}><FontAwesomeIcon icon={faCamera} id='camera-icon' /></button>
                                <span>Photo</span>
                            </div>
                            <div className='create-quote-post-button'>
                                <button className='quote-button' onClick={this.props.openQuotePostForm}><FontAwesomeIcon icon={faQuoteLeft} id='quote-icon' /></button>
                                <span>Quote</span>
                            </div>
                            <div className='create-audio-post-button'>
                                <button className='audio-button' onClick={this.props.openAudioPostForm}><FontAwesomeIcon icon={faHeadphones} id='headphones-icon' /></button>
                                <span>Audio</span>
                            </div>
                            <div className='create-video-post-button'>
                                <button className='video-button' onClick={this.props.openVideoPostForm}><FontAwesomeIcon icon={faVideo} id='video-icon' /></button>
                                <span>Video</span>
                            </div>
                        </div>


                        <ul className='post-items-list'>
                            {postitems}
                        </ul>
                    </div>
                    <div className='right-column'>
                        <h4 className='recommended-blogs-title'>Recommended Blogs</h4>
                        <div className='blog-2'> 
                            <img className="blog-avatar"
                                src="https://img.icons8.com/color/48/000000/avatar.png"
                            id="75"
                                onClick={this.props.openblogoneForm}
                        />
                            <div className='blog-2-title-descriction'>
                                <div className='blog-2-title' onClick={this.props.openblogoneForm}>
                                    MenWithPonyTails
                                </div>
                                <div className='blog-2-description'>
                                    It's more than just a hairstyle
                                </div>

                            </div>
                            <div className="add" onClick={(e) => this.reblog(e)} id='retweet-div'>
                            <FontAwesomeIcon icon={faPlusSquare}/>
                            </div>
                            
                        </div>
                        <div className='blog-2'>
                            <img className="blog-avatar"
                                src="https://img.icons8.com/color/16/000000/beyoncé.png"
                                id="75"
                                onClick={this.props.openblogtwoForm}
                            />
                            <div className='blog-2-title-descriction'>
                                <div className='blog-2-title' onClick={this.props.openblogtwoForm}>
                                    WaitBeckyDidWhat?
                                </div>
                                <div className='blog-2-description'>
                                    She is literally unbelievable
                                </div>
                            </div>
                            <div className="add" onClick={(e) => this.reblog(e)} id='retweet-div'>
                                <FontAwesomeIcon icon={faPlusSquare} />
                            </div>
                        </div>
                        <div className='blog-2'>
                            <img className="blog-avatar"
                                src="https://img.icons8.com/plasticine/100/000000/chuck-norris.png"
                                id="75"
                                onClick={this.props.openblogthreeForm}
                            />
                            <div className='blog-2-title-descriction'>
                                <div className='blog-2-title' onClick={this.props.openblogthreeForm}>NoMomIt'sNotAPHASE!</div>
                                <div className='blog-2-description'>Angsty boys and their Mothers</div>

                            </div>
                            <div className="add" onClick={(e) => this.reblog(e)} id='retweet-div'>
                                <FontAwesomeIcon icon={faPlusSquare} />
                            </div>
                        </div>
                        <div className='blog-2'>
                            <img className="blog-avatar"
                                src="https://img.icons8.com/cute-clipart/64/000000/frida-kahlo.png"
                                id="75"
                                onClick={this.props.openblogfourForm}
                             />
                            <div className='blog-2-title-descriction'>
                                <div className='blog-2-title' onClick={this.props.openblogfourForm}>OfficialPeptoBismolBlog</div>
                                <div className='blog-2-description'>Pink like Majin Buu</div>
                            </div>
                            <div className="add" onClick={(e) => this.reblog(e)} id='retweet-div'>
                                <FontAwesomeIcon icon={faPlusSquare} />
                            </div>
                        </div>
                        <h4 className='radar-title'>Radar</h4>
                        <div className='blog-2'>
                            <img className="blog-avatar"
                                src="https://dreamr-app.herokuapp.com/assets/cloud_avatar-35871f205f34d3ba755f43a0618a7ed8e732e01458082ddbf5d7b959534a59de.png"
                                id="75"
                                onClick={this.props.openblogfiveForm}
                            />
                            <div className='blog-2-title-descriction'>
                                <div className='blog-2-title' onClick={this.props.openblogfiveForm}>ScribblesOnTheWall</div>
                                <div className='blog-2-description'>Only silly geese fly south</div>
                            </div>
                            <div className="add" onClick={(e) => this.reblog(e)} id='retweet-div'>
                                <FontAwesomeIcon icon={faPlusSquare} />
                            </div>
                        </div>
                        
                        <div className='poster'>
                            <img src={window.wantedurl} size='60'/> 
                          
                        </div>
                        <div className='poster-bottom'>
                            <div className='post-bottom'>
                            <FontAwesomeIcon icon={faComment} id='post-icon' />
                            <FontAwesomeIcon icon={faRetweet} id='retweet-icon' />
                            <FontAwesomeIcon icon={faCog} id='post-icon' />

                            </div>
                        </div>
                        <h4 className='radar-title'>Sponsored</h4>
                        <div className='blog-2'>
                            <img className="blog-avatar"
                                src="https://dreamr-app.herokuapp.com/assets/cloud_avatar-35871f205f34d3ba755f43a0618a7ed8e732e01458082ddbf5d7b959534a59de.png"
                                id="75"
                                onClick={this.props.openblogsixForm}
                        />
                            <div className='blog-2-title-descriction'>
                                <div className='blog-2-title' onClick={this.props.openblogsixForm}>TheOfficialPepsiBestie</div>
                                <div className='blog-2-description'>Same Same but Different</div>
                            </div>
                            <div className="add" onClick={(e) => this.reblog(e)} id='retweet-div'>
                                <FontAwesomeIcon icon={faPlusSquare} />
                            </div>
                        </div>
                        <div className='poster'>
                            <img src={window.rossurl} size='60' />
                        </div>
                        <h5 className='fineprint'>About Wander ads</h5>
                        <h5 className='fineprint'>Please sell my personal information</h5>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default PostIndex; 