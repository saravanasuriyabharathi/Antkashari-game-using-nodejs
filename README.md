# Word Antakshari Game

A fun **Word Antakshari** game where players take turns entering words, ensuring that each new word starts with the last letter of the previous word. The game stores words in a **MongoDB** database and restarts if an invalid word is entered.

## Features
- **Interactive UI**: Users can input words and see the history of used words.
- **Validation**: Ensures the new word starts with the last letter of the previous word.
- **MongoDB Integration**: Words are stored in the database for tracking.
- **Restart Mechanism**: The game resets if a wrong word is entered.

## 🛠 Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

---

## 🏗 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/word-antakshari.git
cd word-antakshari
```

### 2️ Install Dependencies
```bash
npm install
```

### 3️ Set Up MongoDB
- Ensure **MongoDB is installed and running locally** or use **MongoDB Atlas**.
- Update the database connection in **server.js**:
```javascript
mongoose.connect("mongodb://localhost:27017/antakshari", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
```

### 4️ Run the Server
```bash
node server.js
```

### 5️ Open in Browser
Visit: [http://localhost:5000](http://localhost:5000)

---

