require('dotenv').config();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { dreamDescription } = req.body;
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Interpret the following dream: ${dreamDescription}`,
      max_tokens: 1024,
      n: 1,
      temperature: 0.7
    });
    console.log(response);
    console.log(response.data.choices[0].text);
    const interpretation = response.data.choices[0].text.trim();
    res.status(200).json({ interpretation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
}
