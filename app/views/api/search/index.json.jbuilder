json.search do
    @posts.each do |post|
    json.set! post.id do
        json.partial! 'api/search/search', post: post
    end
    end
end