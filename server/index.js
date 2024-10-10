import express from "express";
import dotenv from "dotenv";

import cors from "cors";

dotenv.config();

import { connectToDB, getDB } from "./src/configDB/mongoDB.js";

// jwt
import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

// router
import initRouterUser from "./src/routes/user.js";

const app = express();

app.use(cors());

// CORS configuration
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    process.env.PORT_FONTEND_SHOPZZY_APP
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// Body parser middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

let port = process.env.PORT || 5000;

let db;
connectToDB((err) => {
  if (!err) {
    db = getDB();
    // Setup passport jwt after db connection is established
    setupPassport(db);

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } else {
    console.error("Failed to connect to the database and error is ", err);
  }
});

function setupPassport(db) {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  };

  passport.use(
    new JwtStrategy(opts, async function (jwt_payload, done) {
      try {
        const user = await db
          .collection("user")
          .findOne({ _id: jwt_payload.sub });
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (err) {
        return done(err, false);
      }
    })
  );

  // app.use(passport.initialize());
}

// Initialize routes
initRouterUser(app);
