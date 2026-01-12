import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

// Initialize the client strictly with the environment variable
const getClient = () => {
  if (!aiClient) {
    if (!process.env.API_KEY) {
      console.error("API_KEY is missing from environment variables.");
      throw new Error("API configuration error.");
    }
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (
  history: { role: 'user' | 'model'; text: string }[],
  newMessage: string
): Promise<string> => {
  try {
    const ai = getClient();
    
    // Transform history to the format expected by the SDK if needed, 
    // but for simple single-turn or managed history, we can just use the chat model.
    // Here we reconstruct the chat history for the context.
    
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview', // Using the specified efficient model
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "Desculpe, não consegui processar sua resposta no momento.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Estou com dificuldade de conexão no momento. Por favor, tente novamente em instantes.";
  }
};