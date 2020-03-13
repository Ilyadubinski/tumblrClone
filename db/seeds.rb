# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all 
Post.destroy_all

user2 = User.create(username: "chico_rico", password: "123123123", email: "rico@master.com")
guest = User.create(username: "guest", password: "password", email: "guest@aol.com")
Post.create(title: "Abuela, 2020-",text: " 'Un ano mas, un ano menos' ", post_type: "quote", user_id: user2.id)
Post.create(title: "Farts in San Francisco",text: "Is it just me or do they roll downhill with you?", post_type: "text", user_id: user2.id)
Post.create(title: "Someone Smart-",text: "'There are fates worse than death'", post_type: "text", user_id: user2.id)
Post.create(title: "Cup of Yogurt-",text: "'what exactly is that water on top?'", post_type: "text", user_id: user2.id)
Post.create(title: "Something",text: "'Your fingers were covered in cheeto dust, and as cold as popsicles..'", post_type: "text", user_id: user2.id)
Post.create(title: "Tommy James-",text: "'Crimson and clover, over and over.'", post_type: "text", user_id: user2.id)