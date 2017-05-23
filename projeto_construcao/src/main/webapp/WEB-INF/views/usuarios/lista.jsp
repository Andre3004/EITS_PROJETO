<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="s" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="security" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>LISTAGEM TESTE</title>
</head>
<body>
	<h1>LISTA TESTE</h1>
	<table>
		<tr>
			<td>Nome</td>
			<td>email</td>
			<td>senha</td>
		<%--	<td>sexo</td>--%>
			<td>permissao</td>
		<%--	<td>Data de nascimento</td>--%>
		</tr>
		<c:forEach items="${usuarios }" var="usuarios">
			<tr>
				<td>
					<a href="${s:mvcUrl('UC#detalhe').arg(0,usuarios.id).build()}">${usuarios.nome}
				</td> 
				<td>${usuarios.email}</td>
				<td>${usuarios.senha}</td>
			<%-- 	<td>${usuarios.sexo}</td> --%>
				<td>${usuarios.permissao}</td>
			<%--	<td><fmt:formatDate pattern="dd/MM/yyyy" value = "${usuarios.dataNascimento.time}"/></td>--%>
			</tr>
		</c:forEach>
	</table>
	<h1>
		<a href="#">
			<security:authentication property="principal" var="usuario" />
			Usuário logado: ${usuario.username }
		</a></h1>
</body>
</html>