const path     = require('path');
var fs = require('fs');
var User       = require('../schemas/user');
var Post       = require('../schemas/post');
var PostImage       = require('../schemas/postimage');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })



module.exports = (app, passport) => {

    // LOGOUT 
    app.get('/api/logout', (req, res) => {
    	req.logout();
    	res.redirect('/');
    });

    // LOGIN
    app.post('/api/login', passport.authenticate('local-login'),
        (req, res) => {
            res.json(req.user);
        });

	// SIGNUP 
    app.post('/api/signup', passport.authenticate('local-signup'), 
        (req, res) => {
            res.json(req.user);
        });

    //Get user by id
    app.get('/api/user/:userid', (req,res) => {
        User.findById(req.params.userid, (err, user) => {
            res.json(user);
        });
    });
    //Delete user by id
    app.delete('/api/user/:userid',(req, res) => {
        User.findByIdAndRemove(req.params.userid, (err, results)=> {
            if (err) {
                res.json({"error":err})
            } if (results)  {
                res.json({"Deleted user":results})
            } else {
               res.json({"status":"User doesn't exist."});

            }
        })        
    });
    //Get all users
    app.get('/api/users',(req, res) => {
        User.find({}, (err, users) => {
            var userMap = {};
            users.forEach((user) => {
                userMap[user._id] = user;
            });
            res.send(userMap);  
        })
    });

    //Get all posts
    app.get('/api/posts',(req, res) => {
        Post.find({}, (err, posts) => {
            var postsMap = {};
            posts.forEach((post) => {
                postsMap[post._id] = post;
            });
            res.send(postsMap);  
        })
    });

    //Delete Post by id
    app.delete('/api/posts/:post_id',(req, res) => {
        let id = req.params.post_id;
        Post.findById(id, (err,post) => {
            if (err) {
                console.log(err);
                res.json({"error":err});
                return
            }
            Post.remove( {_id:id},(err) => {
                if (err) {
                    //error
                    res.json({"success":"false"});
                    return
                } else {
                    //Success
                    res.json({"success":"true"});
                }
            })
        });
    });

    //Create a post 
    app.post('/api/upload_post',upload.single('post_image'),(req,res) => {

        let body = req.body;
        var post = new Post();
        post.title = body.title;
        post.description = body.description;
        post.image_url = req.file.path;

         //store an img in binary in mongo
         var postimage = new PostImage();
         postimage.img.data = fs.readFileSync(req.file.path);
         postimage.img.contentType = 'image/png';
         postimage.save((err, a) => {
            if (err) throw err;
            post.image_url = postimage._id
            post.save( (err) => {
                if (err) 
                    return 
                upload.re
                res.json(post);

            })
        })
     })
        
    

    //Get a single post image
    app.get('/api/uploads/:post_id', (req,res) => {
        PostImage.findById(req.params.post_id, (err, doc) => {
            if (err) return 
                res.contentType(doc.img.contentType);
                res.send(doc.img.data);   
            });
    })
};









