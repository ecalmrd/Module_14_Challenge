const User = require('./User');
const Comment = require ('./comment');
const Post = require ('./post');

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id' 
})

Post.hasMany(Comment, {
    foreignKey: 'post_id',
})


module.exports = {User, Comment, Post}
