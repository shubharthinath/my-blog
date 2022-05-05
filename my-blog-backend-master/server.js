require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db/connectDB");
const mongoose = require("mongoose");

const app = express();

app.use(express.json({ extended: false }));
app.use("/API/userModel", require("./API/User"));
app.use(bodyParser.json());

const withDB = async (operations, res) => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(8000, () => console.log(`Server is listening port 8000...`));
  } catch (error) {
    console.log(error);
  }
};

app.post("/api/articles/:name/add-comments", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;

  articlesInfo[articleName].comments.push({ username, text });
  res.status(200).send(articlesInfo[articleName]);
});

app.get("/dbstatus", (req, res) => {
  const dbConnection = mongoose.connection.readyState;
  if (dbConnection == 1) {
    res.send("DB Connected");
  } else if (dbConnection == 2) {
    res.send("Connecting to DB");
  } else if (dbConnection == 3) {
    res.send("Disconnecting from DB");
  } else {
    res.send("DB is disconnected");
  }
});

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(8000, () => console.log(`Server is listening port 8000...`));
  } catch (error) {
    console.log(error);
  }
};

start();

// const express = require("express");
// const bodyParser = require("body-parser");
// const { MongoClient } = require("mongodb");

// const app = express();

// app.use(bodyParser.json());

// const withDB = async (operations, res) => {
//   try {
//     const client = await MongoClient.connect("mongodb://localhost:27017", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     const db = client.db("myblog");
//     await operations(db);
//     client.close();
//   } catch (error) {
//     res.status(500).json({ message: "Error connecting to db", error });
//   }
// };

// app.get("/api/articles/:name", async (req, res) => {
//   withDB(async (db) => {
//     const articleName = req.params.name;

//     const articleInfo = await db
//       .collection("articles")
//       .findOne({ name: articleName });
//     res.status(200).json(articleInfo);
//     client.close();
//   }, res);
// });

// app.post("/api/articles/:name/add-comments", (req, res) => {
//   const { username, text } = req.body;
//   const articleName = req.params.name;

//   withDB(async (db) => {
//     const articleInfo = await db
//       .collection("articles")
//       .findOne({ name: articleName });
//     await db.collection("articles").updateOne(
//       { name: articleName },
//       {
//         $set: {
//           comments: articleInfo.comments.concat({ username, text }),
//         },
//       }
//     );
//     const updatedArticleInfo = await db
//       .collection("articles")
//       .findOne({ name: articleName });
//     res.status(200).json(updatedArticleInfo);
//   }, res);
// });

// app.listen(8000, () => console.log("Listening on port 8000"));