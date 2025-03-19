# Word Antakshari Game

A fun **Word Antakshari** game where players take turns entering words, ensuring that each new word starts with the last letter of the previous word. The game stores words in a **MongoDB** database and restarts if an invalid word is entered.

## Features
- **Interactive UI**: Users can input words and see the history of used words.
- **Validation**: Ensures the new word starts with the last letter of the previous word.
- **MongoDB Integration**: Words are stored in the database for tracking.
- **Restart Mechanism**: The game resets if a wrong word is entered.

##  Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

---

##  Installation & Setup


###  Install Dependencies
```bash
npm install
```

###  Set Up MongoDB
- Ensure **MongoDB is installed and running locally** or use **MongoDB Atlas**.
- Update the database connection in **server.js**:
```javascript
mongoose.connect("mongodb://localhost:27017/antakshari", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
```

###  Run the Server
```bash
node server.js
```

###  Open in Browser
Visit: [http://localhost:5000](http://localhost:5000)

---
### DEMO of the project
![image](https://github.com/user-attachments/assets/09a8ae54-3af5-439b-a133-83b39f3427cf)
![image](https://github.com/user-attachments/assets/1824edc7-dce8-46e6-9a5f-4093224085f7)
### before game restarts 
![image](https://github.com/user-attachments/assets/361d132b-c5ea-40cd-a53f-7c0e4a9fdaee)
### after given worng word game restarts 

![image](https://github.com/user-attachments/assets/936732b4-28e3-41f0-bccf-3f5c05986360)
### database becomes empty
![image](https://github.com/user-attachments/assets/fd60934b-66b1-4bed-bad6-09f1a481a8b2)




