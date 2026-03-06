const HuggingFaceAPI = require("./index");

const hf = new HuggingFaceAPI();

async function run() {

    // Text generation
    const text = await hf.text(
        "gpt2",
        "The future of artificial intelligence"
    );

    console.log("Text Result:");
    console.log(text);

    // Question answering
    const qa = await hf.questionAnswer(
        "deepset/roberta-base-squad2",
        "What is AI?",
        "Artificial intelligence is a field of computer science focused on creating intelligent machines."
    );

    console.log("QA Result:");
    console.log(qa);
}

run();