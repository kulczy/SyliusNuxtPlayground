export default function({ app, $auth }) {
  $auth.options.redirect = {
    login: app.localePath('/'),
    logout: app.localePath('/login'),
    callback: app.localePath('/'),
    home: app.localePath('/')
  };
}
