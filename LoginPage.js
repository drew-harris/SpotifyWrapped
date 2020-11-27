function LoginPage() {
  const uri = "https://accounts.spotify.com/authorize?client_id=fd8e4fd87a464ee28f2e5fdf5700880d&scope=user-top-read%20user-read-recently-played&redirect_uri=http://localhost:3000/&response_type=token";
  return(
    <a href={uri}>click here to login</a>
  );
}

export default LoginPage;