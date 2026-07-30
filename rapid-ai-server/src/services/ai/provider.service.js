// services/ai/provider.service.js

import ai, { GROQ_MODEL } from "../../config/groq.js";

export async function generateText(prompt) {
    const response = await ai.chat.completions.create({
        model: GROQ_MODEL,
        messages: [
            {
                role: "user",
                content: prompt,
            },
        ],
    });

    return response.choices[0].message.content;
}
export default groq;