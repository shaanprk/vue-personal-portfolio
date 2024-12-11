import dotenv from "dotenv";
import express from "express";
import querystring from "querystring";
import axios from "axios";
import cors from "cors";
// import cron from "node-cron";

// Load environment variables from .env file
dotenv.config();
// Create an Express application
const app = express();
app.use(cors());

// Variables from the .env file
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI;
const PORT = process.env.PORT || 3000;

// Tokens
let accessToken;
let refreshToken;
// let lastUpdated = null;

// Helper function for Step 1.
// Generate a random string
const generateRandomString = function (length) {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

// Step 1: Request User Authorization
// http://localhost:3000/login
app.get("/login", function (req, res) {
  const scope = "user-read-private user-read-email user-top-read";
  const state = generateRandomString(16);

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: CLIENT_ID,
        scope: scope,
        redirect_uri: REDIRECT_URI,
        state: state,
      })
  );
});

// Step 2: Handle Callback from Spotify
// http://localhost:3000/callback
app.get("/callback", async (req, res) => {
  const code = req.query.code || null;
  const state = req.query.state || null;

  if (state === null) {
    res.redirect(
      "/#" +
        querystring.stringify({
          error: "state_mismatch",
        })
    );
  } else {
    try {
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        querystring.stringify({
          code: code,
          redirect_uri: REDIRECT_URI,
          grant_type: "authorization_code",
        }),
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${new Buffer.from(
              `${CLIENT_ID}:${CLIENT_SECRET}`
            ).toString("base64")}`,
          },
        }
      );

      // console.log("response", response.data);
      accessToken = response.data.access_token;
      console.log("og accessToken", accessToken);
      refreshToken = response.data.refresh_token;
      console.log("og refreshToken", refreshToken);
      console.log("--------------------");

      res.redirect("/top-items");
    } catch (error) {
      res.redirect(
        "/#" +
          querystring.stringify({
            error: "invalid_token",
          })
      );
    }
  }
});

// Step 3: Use the Access Token to Access the Spotify Web API
// http://localhost:3000/top-items
app.get("/top-items", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.spotify.com/v1/me/top/artists",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          limit: 10,
          time_range: "short_term",
          offset: 0,
        },
      }
    );

    res.json(response.data.items);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Step 4: Refresh the Access Token
// http://localhost:3000/refresh_token
app.get("/refresh_token", async (req, res) => {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      querystring.stringify({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${CLIENT_ID}:${CLIENT_SECRET}`
          ).toString("base64")}`,
          "content-type": "application/x-www-form-urlencoded",
        },
      }
    );

    // console.log(response.data);
    accessToken = response.data.access_token;
    console.log("refreshed accessToken", accessToken);
    console.log("refreshed refreshToken", refreshToken);
    console.log("--------------------");
    // res.json({
    //   access_token: accessToken,
    //   refresh_token: refreshToken,
    // });
    res.redirect("/top-items");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
