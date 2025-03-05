import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

const CHAT_ID = "6165758737";

app.post("/sendMessage", async (req, res) => {
    try {
        const { message } = req.body;
        if (!message) return res.status(400).json({ error: "Message is required" });

        await axios.post(`https://api.telegram.org/bot7554198711:AAGd4A0kzFL9t-i68fea0DlaahlYqecVLwM/sendMessage`, {
            chat_id: CHAT_ID,
            text: message,
        });

        res.json({ success: true, message: "Message sent to Telegram" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to send message" });
    }
});

app.listen(PORT);
