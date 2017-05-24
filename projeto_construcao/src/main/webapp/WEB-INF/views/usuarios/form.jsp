<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>TESTE</title>
</head>
<body>
	<form action="/projeto/usuarios" method="POST"
	enctype="multipart/form-data">
        <label for="name">Nome</label>
        <input type="text" name="name" id="name">
        
        <label for="email">Email</label>
        <input type="email" name="email" id="email">
        
        <label for="password">senha</label>
        <input type="password" name="password" id="password">
        
       	<label for="confirmPassword">Confirma a senha</label>
        <input type="password" name="confirmPassword" id="confirmPassword">
       
        <br>
        <input type="radio" name="permission" id="permission" checked value="ROLE_USER">Engenheiro
        <input type="radio" name="permission" id="permission" value="ROLE_ADMIN">Administrador     
		<br><br>
		<input type="radio" name="active" id="active" checked value="TRUE">Ativo     
		<br><br>
		
        <button type="submit">Salvar</button>
	</form>
	
	
	
	
	
</body>
</html>