import express from 'express';
import router from "./router.js";
import cors from 'cors';
import "dotenv/config.js";
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}));

app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
  console.log("server working")
})