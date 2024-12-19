/* eslint-disable @typescript-eslint/no-unused-vars */

import dbConnect from '@/utils/dbConnect';
import LeetCodePost from '@/models/LeetCodePost';

export async function GET(req) {
  try {
    await dbConnect();

    // Fetch all LeetCode posts
    const posts = await LeetCodePost.find({});
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.error('Error in GET request:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json(); // Parse the incoming request body
    const { problem, leetCodeLink, approaches } = body;

    // Validate input
    if (!problem || !leetCodeLink || !approaches || !approaches.length) {
      return new Response(JSON.stringify({ message: 'Invalid data. All fields are required.' }), { status: 400 });
    }

    // Validate each approach for tags
    const validatedApproaches = approaches.map((approach) => {
      if (!approach.approach || !approach.solution || !approach.tags || !Array.isArray(approach.tags)) {
        throw new Error('Invalid approach data. Each approach must include an approach, solution, and tags.');
      }
      return {
        approach: approach.approach,
        timeComplexity: approach.timeComplexity || 'N/A',
        spaceComplexity: approach.spaceComplexity || 'N/A',
        solution: approach.solution,
        tags: approach.tags,
      };
    });

    // Create a new LeetCode post
    const newPost = new LeetCodePost({ problem, leetCodeLink, approaches: validatedApproaches });
    await newPost.save();

    return new Response(
      JSON.stringify({ message: 'LeetCode problem added successfully!', data: newPost }),
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in POST request:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error', error: error.message }), { status: 500 });
  }
}
