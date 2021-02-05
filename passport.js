const passport = require("passport");
const User = require("./models/users.js")

passport.serializeUser(function(user, done) {
    return done(null, user);
});

passport.deserializeUser(function(user, done) {
    return done(null, user);
});

passport.use(User.createStrategy());
