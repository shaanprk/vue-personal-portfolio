const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

let accessToken = null;

// Middleware
app.use(cors());

// Function to get a new access token
async function getAccessToken() {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({ grant_type: "client_credentials" }),
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${CLIENT_ID}:${CLIENT_SECRET}`
          ).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    accessToken = response.data.access_token;
    console.log("Access token fetched successfully!");
  } catch (error) {
    console.error("Error fetching access token:", error.response.data);
  }
}

// Fetch top artists
app.get("/api/top-artists", async (req, res) => {
  console.log("in app.get");
  if (!accessToken) {
    await getAccessToken();
  }

  try {
    const response = await axios.get(
      "https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=10",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    console.log(res.json({ artists: response.data.items }));
  } catch (error) {
    console.error("Error fetching top artists:", error.response.data);
    if (error.response.status === 401) {
      // Token expired, fetch a new one
      await getAccessToken();
      return res.redirect("/api/top-artists");
    }
    res.status(500).json({ error: "Failed to fetch top artists" });
  }
});

// Start server
app.listen(PORT, async () => {
  await getAccessToken();
  console.log(`Server is running on http://localhost:${PORT}`);
});
