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
	<form action="/projeto/equipamentos" method="POST">
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome">
        
        <label for="descricao">Descrição</label>
        <textarea rows="10" cols="20" name = "descricao" id = "descricao"></textarea>
        
        <label for="localizacao">Localizacao</label>
        <input type="number" name="localizacao" id ="localizacao"  min="0" max="5">
        
		<button type="submit">Salvar</button>
	</form>
</body>
</html>