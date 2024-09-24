# Tic-Tac-Toe AI

It's an implementation of simple AI for Tic-Tac-Toe game.

## Prerequisites

- Node.js installed 20.x or higher
- Wrangler CLI installed
- Cloudflare account

## Setup

1) Clone the repository
2) Run `npm install` to install the dependencies

## Run

1) Run `npm run start` to start the project locally
2) Your worker will be available at `http://localhost:8787`
3) Use POST /ai-move endpoint to make move

## Deploy to Cloudflare Workers

Note: make sure you have a Cloudflare account and `wrangler` authenticated with it.
Also you need KV namespace to store game state (update id in `wrangler.toml` file).

1) Run `npm run deploy` to deploy the project to Cloudflare
2) Your worker will be available at `https://tic-tac-toe-ai.${your-account}.workers.dev` (Mine is `https://tic-tac-toe-ai.d-schewchenko91.workers.dev`)
3) Use POST /ai-move endpoint to make move



