import { GoogleGenAI, Type, Modality } from "@google/genai";
import { ChatMessage, VocabularyItemWithLevel } from "../types";

const apiKey = process.env.API_KEY;

if (!apiKey) {
    throw new Error("API_KEY is not defined. Please set it in your environment variables.");
}

const ai = new GoogleGenAI({ apiKey });

const model = 'gemini-2.5-flash';
const systemInstruction = `You are "Gemini-Sensei", a friendly and encouraging Japanese language tutor. 
Your students are learning for the JLPT N5 to N3 levels.
When a student asks a question, follow these rules:
1.  Answer the core question directly and concisely in simple Japanese, suitable for their level.
2.  Provide a clear, brief explanation in Indonesian.
3.  Include one or two simple example sentences in Japanese with romaji and Indonesian translations.
4.  Keep your entire response short and easy to digest.
Example interaction:
Student: "What is the difference between は and が?"
Your response:
「は」はトピックを示し、「が」は主語を強調します。
(Penjelasan: 「は」 (wa) menandai topik pembicaraan, sedangkan 「が」 (ga) menekankan subjek dari sebuah tindakan.)

例 (rei - contoh):
1. わたしはがくせいです。 (Watashi wa gakusei desu.) - Saya adalah seorang murid. (Topiknya adalah "saya")
2. ねこがいます。 (Neko ga imasu.) - Ada seekor kucing. (Menekankan bahwa "kucing" lah yang ada)
`;

export async function getTutorResponse(
  userInput: string,
  chatHistory: ChatMessage[]
): Promise<string> {
  try {
    const history = chatHistory.map(msg => ({
        role: msg.role === 'ai' ? 'model' : 'user',
        parts: [{ text: msg.content }]
    }));

    const contents = [...history, { role: 'user', parts: [{ text: userInput }] }];

    const response = await ai.models.generateContent({
        model: model,
        contents: contents,
        config: {
            systemInstruction: systemInstruction,
        }
    });

    return response.text ?? '';

  } catch (error) {
    console.error("Error in getTutorResponse:", error);
    return "Maaf, Sensei sedang istirahat sejenak. Coba lagi nanti ya.";
  }
}

export async function getExampleSentence(word: VocabularyItemWithLevel): Promise<{ japanese: string; romaji: string; indonesian: string; } | null> {
  try {
    const prompt = `Buatkan satu kalimat contoh yang SANGAT SEDERHANA menggunakan kata "${word.japanese}" (${word.romaji}). Kalimat ini harus cocok untuk pembelajar bahasa Jepang level ${word.level}. Berikan juga romaji dan terjemahan bahasa Indonesia.

    Format respons Anda harus berupa JSON yang valid dengan skema berikut:
    {
      "japanese": "kalimat dalam bahasa jepang",
      "romaji": "kalimat dalam romaji",
      "indonesian": "terjemahan dalam bahasa indonesia"
    }`;
    
    const responseSchema = {
        type: Type.OBJECT,
        properties: {
          japanese: { type: Type.STRING },
          romaji: { type: Type.STRING },
          indonesian: { type: Type.STRING },
        },
        required: ["japanese", "romaji", "indonesian"],
    };

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: responseSchema,
        }
    });

    const jsonText = (response.text ?? '').trim();
    if (!jsonText) {
        return null;
    }
    try {
        const parsedJson = JSON.parse(jsonText);
        return parsedJson;
    } catch (e) {
        console.error("Error parsing JSON in getExampleSentence:", e, "Raw text:", jsonText);
        return null;
    }

  } catch (error) {
    console.error("Error in getExampleSentence:", error);
    return null;
  }
}

export async function getCertificateMessage(userName: string, level: string): Promise<string> {
    try {
        const prompt = `You are "Gemini-Sensei". Write a short, encouraging, and personalized congratulatory message for a student named "${userName}" who has just completed all lessons for the JLPT ${level} level. Keep it under 30 words. The tone should be proud and motivating. Respond in Indonesian.`;
        
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        return (response.text ?? '').trim();

    } catch (error) {
        console.error("Error in getCertificateMessage:", error);
        return `Selamat atas pencapaian luar biasa Anda dalam menyelesaikan level ${level}! Teruslah bersemangat!`;
    }
}

export async function generateSpeech(text: string): Promise<string | null> {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-tts",
            contents: [{ parts: [{ text }] }],
            config: {
                responseModalities: [Modality.AUDIO],
            },
        });

        const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        return base64Audio ?? null;

    } catch (error) {
        console.error("Error in generateSpeech:", error);
        return null;
    }
}


// FIX: Add missing getPronunciationFeedback function
export async function getPronunciationFeedback(
  audioBase64: string,
  phrase: string
): Promise<string> {
  try {
    const audioPart = {
      inlineData: {
        mimeType: 'audio/webm',
        data: audioBase64,
      },
    };

    const systemInstruction = `You are a Japanese pronunciation coach. Your student is practicing a phrase. You will receive an audio of their attempt and the correct phrase.
Analyze their pronunciation and provide short, constructive feedback in Indonesian.
Start your feedback with one of these ratings:
- [Sempurna]: If the pronunciation is perfect or near-perfect.
- [Bagus]: If the pronunciation is mostly correct but has minor flaws.
- [Coba Lagi]: If there are significant errors that need correction.

Be encouraging and specific. For example: "[Bagus] Pelafalan 'wa' sudah benar, tapi 'desu' terdengar sedikit terlalu panjang."
If there's an issue with the audio, respond with "[Error] Audio tidak jelas atau rusak."`;
    
    const contents = {
        parts: [
            audioPart,
            { text: `Tolong evaluasi pengucapan saya untuk frasa: "${phrase}"` },
        ],
    };

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text ?? '[Error] Tidak ada respons dari AI.';
  } catch (error) {
    console.error("Error in getPronunciationFeedback:", error);
    return "[Error] Maaf, terjadi kesalahan saat menganalisis pengucapan Anda.";
  }
}