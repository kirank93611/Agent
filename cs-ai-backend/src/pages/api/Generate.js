import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();
    
    const { topic } = req.body;

    const response = await openai.chat.completions.create({
        model: "gpt-4-turbo",
        messages: [{ role: "user", content: `Generate an engaging LinkedIn post about ${topic}` }],
    });

    res.json({ post: response.choices[0].message.content });
}
