import mongoose from 'mongoose';

const approachSchema = new mongoose.Schema({
  approach: { type: String, required: true },
  timeComplexity: { type: String, default: 'N/A' },
  spaceComplexity: { type: String, default: 'N/A' },
  solution: { type: String, required: true },
  tags: { type: [String], required: true }, 
});

const leetCodePostSchema = new mongoose.Schema({
  problem: { type: String, required: true },
  leetCodeLink: { type: String, required: true },
  approaches: [approachSchema], // Array of approaches
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.LeetCodePost || mongoose.model('LeetCodePost', leetCodePostSchema);
