class FixPostsTable < ActiveRecord::Migration[5.2]
  def change
    
    remove_column :posts, :author_id, :integer
    remove_column :posts, :content, :text
    remove_column :posts, :type, :string
    remove_column :posts, :parent_post_id, :integer

    add_column :posts, :original_post_id, :integer
    add_column :posts, :title, :string
    add_column :posts, :text, :text
    add_column :posts, :content_url, :string
    add_column :posts, :tags, :string
    add_column :posts, :user_id, :integer
    add_column :posts, :post_type, :string

     add_index :posts, :user_id
     add_index :posts, :id
   
    
   
   
  
    
    
    
  end
end
