module.exports = {
  getPosts: (req, res) => {
      const {id} = req.params;
      const db = req.app.get('db');
      db.get_posts(id).then(posts => {
          res.status(200).send(posts)
      })
      .catch(err => res.status(500).send(err))
  },
  addPost: (req, res) => {
    console.log(req.params)
    console.log(req.body)
    const {id} = req.params
    const {image_url} = req.body
    const db = req.app.get('db')
    db.add_post([id, image_url]).then(result => {
      res.status(200).send(result)
    }).catch(err => res.status(500).send(err))
  },
  deletePost: (req,res) => {
    // console.log(req.params)
    const {postId, userId} = req.params
    const db = req.app.get('db')
    db.delete_post([postId, userId]).then(result => {
      res.status(200).send(result)
    }).catch(err => res.status(500).send(err))
  } 
}