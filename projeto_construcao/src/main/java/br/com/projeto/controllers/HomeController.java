package br.com.projeto.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController 
{

	@RequestMapping("/autenticacao")
	public String index(){
		return "index";	
	}
	
	@RequestMapping("/")
	public String home(){
		return "dist/index";	
	}
}
