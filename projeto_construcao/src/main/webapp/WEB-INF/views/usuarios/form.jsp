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
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome">
        
        <label for="email">Email</label>
        <input type="email" name="email" id="email">
        
        <label for="senha">senha</label>
        <input type="password" name="senha" id="senha">
        
       	<label for="confirmacaoSenha">Confirma a senha</label>
        <input type="password" name="confirmacaoSenha" id="confirmacaoSenha">
       
        <br>
        <input type="radio" name="permissao" id="permissao" checked value="ROLE_USER">Engenheiro
        <input type="radio" name="permissao" id="permissao" value="ROLE_ADMIN">Administrador     
		<br><br>
		<input type="radio" name="ativo" id="ativo" checked value="TRUE">Ativo     
		<br><br>
		
        <button type="submit">Salvar</button>
	</form>
	
	
	
	
	
</body>
</html>