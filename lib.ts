export const googleSignUpInitiate = () => {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI;
  const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

  const scopes = ["email", "profile"];

  console.log(clientId);
  const authUrl =
    `https://accounts.google.com/o/oauth2/v2/auth?` +
    `client_id=${clientId}&redirect_uri=${redirectUri}` +
    `&response_type=code&scope=${scopes.join("+")}`;

  return authUrl;
};

googleSignUpInitiate();
