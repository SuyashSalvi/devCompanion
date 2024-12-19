import dbConnect from "@/utils/dbConnect";
import LeetCodePost from "@/models/LeetCodePost";

export async function GET(req, context) {
  try {
    const params = await context.params; // Await the `params` object
    const { id } = params;

    await dbConnect();

    const problem = await LeetCodePost.findById(id);
    if (!problem) {
      return new Response(JSON.stringify({ message: "Problem not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(problem), { status: 200 });
  } catch (error) {
    console.error("Error fetching problem:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
