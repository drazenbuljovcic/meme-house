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
            res.send(users);  
        })
    });

    //Get all posts
    app.get('/api/posts',(req, res) => {
        Post.find({}, (err, posts) => {
            res.send(posts);  
        })
    });

    //Get post by id
    app.get('/api/posts/:post_id',(req,res) => {
        Post.findById(req.params.post_id, (err,post) => {
            if (err) {
                console.log(err);
                return
            }
            res.json(post);
        });
    });

    //Update post by id
    app.put('/api/posts/:post_id',(req, res) => { 
        let id = req.params.post_id;
        Post.findById(id, (err,post) => {
            if (err) {
                return res.send(500, { error: err });
            }
            if (!post) {
                return res.send(404);
            }
            let currentValue = post.hearts || 0;
            if (!req.user) {
                    res.json("You are not logged in.")
                    return
            }
            User.findById(req.user._id, (err, user) => {

                if (err) {
                    res.json(err);
                    return
                }
                var voted_by_user = user.voted_posts || [];
                var userVote = 1;
                for (var i = 0; i < voted_by_user.length; i++) {
                    if (voted_by_user[i] == id) {
                        // User already gave a hearth.
                        userVote = -1
                        delete voted_by_user[i];
                        // Ako ovde koristimo splice, iz nekog razloga svaki put bude -1, nisam skontao, ovako radi kako treba, 
                        //ali ostavalja index. Umoran sam. Radi ovo dobro ali sutra/danas jer je sad prošlo 12, ovo da optimizujemo, 
                        // ne ostavlja iza sebe null polja (nije problem, ali bezveze ja da ostavlja.)
                        //Video sam workarround, ne sviđa mi se baš, tako da videćemo ovo zajedno sutra. ;)
                    }
                }
                if (userVote == 1) {
                    voted_by_user.push(id);
                } else {
                    // Already deleted the post id from user's voted objects.
                }
                user.voted_posts = voted_by_user;

                post.hearts += userVote;
                user.save((err) => {
                    if (err) {
                        return
                    }
                })
                post.save((err) => {
                    if(err) {
                        res.json(err);
                    } else {
                        res.json(post);
                    }
                });
            })
        })
    })

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









