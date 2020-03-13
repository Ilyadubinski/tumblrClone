class RemoveConstraintsAndUrlFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :url, :string
    remove_column :users, :avatar_url, :string
    change_column :users, :session_token, :string, :null => true
  end
end
