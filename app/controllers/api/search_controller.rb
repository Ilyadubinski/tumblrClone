class Api::SearchController < ApplicationController
    def index

        @posts = Post.where("title ILIKE ? ", "%#{params[:search_key]}%").or(Post.where("text ILIKE ? ", "%#{params[:search_key]}%"))
       
        if @posts
            render :index
        else 
            flash.now[:errors] = ['Cant find anything']
            render json: ['Cant find anything'], status: :not_found
        end

    end
end
