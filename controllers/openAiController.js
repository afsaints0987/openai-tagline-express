const { Configuration, OpenAIApi } = require("openai");
const config = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});

const openai = new OpenAIApi(config);

const generateTagLine = async (req, res) => {
    const {prompt} = req.body
    try {
        const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt,
          temperature: 0.7,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        }); 

        const tagLine = response.data.choices

        res.status(200).json({
            prompt,
            success: true,
            data: tagLine,
            message: "Generate Successful!"
        })

    } catch(error) {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }

        res.status(400).json({
          success: false,
          error: "Generate Tagline Failed",
          message: error.message
        });
    }
}

module.exports = {
    generateTagLine
}