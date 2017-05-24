package br.com.projeto.controllers;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.WebApplicationContext;

@Controller
@Scope(value=WebApplicationContext.SCOPE_REQUEST)
public class HomeController 
{

	@RequestMapping("/")
	public String index(){
		return "home";	
	}
}
