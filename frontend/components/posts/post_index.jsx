import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBarContainer from '../navigation_bar_container';
import PostIndexItem from './post_index_item';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCamera, faQuoteLeft, faHeadphones, faVideo, faPlusSquare, faComment, faRetweet, faCog
} from "@fortawesome/free-solid-svg-icons";






class PostIndex extends React.Component {

    componentDidMount() {
        this.props.fetchAllPosts()
    }

    render() {
        let postitems = this.props.posts.map(post => {
            if (post) {
                return <PostIndexItem post={post} key={post.id} />

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
                                <button className='photo-button' onClick={this.props.openTextPostForm}><FontAwesomeIcon icon={faCamera} id='camera-icon' /></button>
                                <span>Photo</span>
                            </div>
                            <div className='create-quote-post-button'>
                                <button className='quote-button' onClick={this.props.openTextPostForm}><FontAwesomeIcon icon={faQuoteLeft} id='quote-icon' /></button>
                                <span>Quote</span>
                            </div>
                            <div className='create-audio-post-button'>
                                <button className='audio-button' onClick={this.props.openTextPostForm}><FontAwesomeIcon icon={faHeadphones} id='headphones-icon' /></button>
                                <span>Audio</span>
                            </div>
                            <div className='create-video-post-button'>
                                <button className='video-button' onClick={this.props.openTextPostForm}><FontAwesomeIcon icon={faVideo} id='video-icon' /></button>
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
                        />
                            <div className='blog-2-title-descriction'>
                                <div className='blog-2-title'>
                                    MenWithPonyTails
                                </div>
                                <div className='blog-2-description'>
                                    It's more than just a hairstyle
                                </div>

                            </div>
                            <FontAwesomeIcon icon={faPlusSquare}/>
                        </div>
                        <div className='blog-2'>
                            <img className="blog-avatar"
                                src="https://img.icons8.com/color/16/000000/beyoncé.png"
                                id="75"
                    />
                            <div className='blog-2-title-descriction'>
                                <div className='blog-2-title'>
                                    WaitBeckyDidWhat?
                                </div>
                                <div className='blog-2-description'>
                                    She is literally unbelievable
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faPlusSquare} />
                        </div>
                        <div className='blog-2'>
                            <img className="blog-avatar"
                                src="https://img.icons8.com/plasticine/100/000000/chuck-norris.png"
                                id="75"
                        />
                            <div className='blog-2-title-descriction'>
                                <div className='blog-2-title'>NoMomIt'sNotAPHASE!</div>
                                <div className='blog-2-description'>Angsty boys and their Mothers</div>

                            </div>
                            <FontAwesomeIcon icon={faPlusSquare} />
                        </div>
                        <div className='blog-2'>
                            <img className="blog-avatar"
                                src="https://img.icons8.com/cute-clipart/64/000000/frida-kahlo.png"
                                id="75"
                        />
                            <div className='blog-2-title-descriction'>
                                <div className='blog-2-title'>OfficialPeptoBismolBlog</div>
                                <div className='blog-2-description'>Pink like Majin Buu</div>
                            </div>
                            <FontAwesomeIcon icon={faPlusSquare} />
                        </div>
                        <h4 className='radar-title'>Radar</h4>
                        <div className='blog-2'>
                            <img className="blog-avatar"
                                src="https://dreamr-app.herokuapp.com/assets/cloud_avatar-35871f205f34d3ba755f43a0618a7ed8e732e01458082ddbf5d7b959534a59de.png"
                                id="75"
                            />
                            <div className='blog-2-title-descriction'>
                                <div className='blog-2-title'>ScribblesOnTheWall</div>
                                <div className='blog-2-description'>Only silly geese fly south</div>
                            </div>
                            <FontAwesomeIcon icon={faPlusSquare} />
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
                        />
                            <div className='blog-2-title-descriction'>
                                <div className='blog-2-title'>TheOfficialPepsiBestie</div>
                                <div className='blog-2-description'>Same Same but Different</div>
                            </div>
                            <FontAwesomeIcon icon={faPlusSquare} />
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