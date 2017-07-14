<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login</title>
<style type="text/css">
@import url(https://fonts.googleapis.com/css?family=Roboto:300);
.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #1976d2;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #ef6c00;
}
body {
  background: #1976d2; /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #1976d2, #1976d2);
  background: -moz-linear-gradient(right, #1976d2, #1976d2);
  background: -o-linear-gradient(right, #1976d2, #1976d2);
  background: linear-gradient(to left, #1976d2, #1976d2);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;      
}
</style>
</head>
<body>
	<div class="login-page">
	  <div class="form">
	    <form action="./authenticate" method="post" class="login-form">
	      <input type="email" name="email" placeholder="Email"/>
	      <input type="password" name="password" placeholder="Senha"/>
	      <button type="submit">Login</button>
	      <br/></br>
	      
		      <c:if test="${param.error != null}">
			      <font color="red">
					 Email ou senha inválidos
				 </font>
			  </c:if>
	    </form>
	  </div>
	</div>
</body>
</html>