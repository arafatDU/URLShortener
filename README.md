# URLShortener
A URL Shortener application by Node.js Express.js MongoDB as Backend and EJS with Bootstrap as Frontend 


## Running Locally

### 0. Requirements

The application uses NodeJS for the backend, EJS for the frontend.
Make sure You have Node JS installed on your PC.


### 1. Initial setup

No surprise in the first step:

```bash
git clone https://github.com/arafatDU/URLShortener.git
cd URLShortener
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Setup MongoDB Database:

Rename ".env.example" file to .env and update "MONGO_URI"

```bash
MONGO_URI="....Your_MongoDB_URL..."
```

### 4. Running the IDE

```bash
npm run dev
```