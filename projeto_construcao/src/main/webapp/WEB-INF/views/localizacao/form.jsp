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
	<form action="/projeto/localizao" method="POST">
        <label for="codLocalizador">Codigo Localizador</label>
        <input type="number" name="codLocalizador" id="codLocalizador" min="0" max="10">
        
        <label for="localizacao">Localizacao</label>
        <textarea type="text" name = "localizacao" id = "localizacao"></textarea>
        
        <label for="responsavel">Responsavel</label>
        <input type="number" name="responsavel" id ="responsavel"  min="0" max="5">
        
		<button type="submit">Salvar</button>
	</form>
</body>
</html>