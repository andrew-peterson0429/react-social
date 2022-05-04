const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

//add env file for these
const GOOGLE_CLIENT_ID = "1096802090261-7kmqo76priq29ooo05pvsivgdklucvqi.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
    // callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(null, profile);
    });
  }
));

passport.serializeUser((user, done) => {
    done(null, user)
});

passport.deserializeUser((user, done) => {
    done(null, user)
});