require("dotenv").config();
const fetch = require("node-fetch");

class HuggingFaceAPI {
    constructor() {
        this.apiKey = process.env.HF_TOKEN;
        this.baseURL = "https://api-inference.huggingface.co/models/";
    }

    async request(model, payload) {
        const response = await fetch(this.baseURL + model, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        return await response.json();
    }

    async text(model, prompt) {
        return this.request(model, {
            inputs: prompt
        });
    }

    async image(model, prompt) {
        return this.request(model, {
            inputs: prompt
        });
    }

    async questionAnswer(model, question, context) {
        return this.request(model, {
            inputs: {
                question: question,
                context: context
            }
        });
    }
}

module.exports = HuggingFaceAPI;