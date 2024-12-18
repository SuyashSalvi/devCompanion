import mongoose from 'mongoose';

const leetCodePostSchema = new mongoose.Schema({
  problem: String,
  solution: String,
  approach: String,
  timeComplexity: String,
  spaceComplexity: String,
  leetCodeLink: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.LeetCodePost || mongoose.model('LeetCodePost', leetCodePostSchema);
