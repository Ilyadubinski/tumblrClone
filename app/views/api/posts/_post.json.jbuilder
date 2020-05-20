json.extract! post, :id, :title, :text, :content_url, :tags, :user_id, :post_type, :likes 

if post.photo.attached?
    json.photoUrl url_for(post.photo)
end