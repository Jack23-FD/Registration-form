
function Login() {
  return (
    <>
      <div className="App">
        <h1>Registration Area...!</h1>
        <form>
          <label htmlFor="name">First Name:</label>
          <input type="text" className="App" name="fname" required/>
          <br />
          <label htmlFor="name">Last Name:</label>
          <input type="text" className="App" name="lname" required/>
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" className="App" name="email" required/>
          <br/>
          <label htmlFor="gender">Gender:</label> 
          <input type="radio" id="male" name="gender" value="male"/>
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" value="female"/>
          <label htmlFor="female">Female</label>
          <br/>
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default Login;
