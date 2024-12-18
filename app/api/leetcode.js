import dbConnect from '../../utils/dbConnect';
import LeetCodePost from '../../models/LeetCodePost';

export async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const posts = await LeetCodePost.find({});
    res.status(200).json(posts);
  } else if (req.method === 'POST') {
    const newPost = new LeetCodePost(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  }
}
