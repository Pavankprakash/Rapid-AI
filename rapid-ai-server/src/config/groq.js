import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const ai = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export const GROQ_MODEL = "openai/gpt-oss-20b";

console.log("GROQ_API_KEY loaded:", !!process.env.GROQ_API_KEY);
console.log("GROQ_MODEL:", GROQ_MODEL);

export default ai;