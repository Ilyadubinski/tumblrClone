class Api::PostsController < ApplicationController

  def index
  
    @posts = Post.all.includes(:likes)
  end

  def show
    @post = Post.includes(:likes)
    .find(params[:id]) 
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      render :show
    else 
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
    
    if (@post && @post.update(post_params))
    
      render :show
    else
      render :show
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :show
  end


  private

  def post_params
    params.require(:post).permit(:title, :text, :tags, :post_type, :content_url, :user_id) 
  end

end