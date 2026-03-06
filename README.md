# HuggingFace Multi-Model Wrapper

Simple Node.js wrapper for the Hugging Face Inference API.

## Features

* Text generation
* Image generation
* Question answering
* Works with any Hugging Face model

## Install

```
npm install
```

## Setup

Create `.env`

```
HF_TOKEN=your_token_here
```

## Example

```
node example.js
```

## Example Code

```
const hf = new HuggingFaceAPI();

await hf.text("gpt2", "Hello world");
```
