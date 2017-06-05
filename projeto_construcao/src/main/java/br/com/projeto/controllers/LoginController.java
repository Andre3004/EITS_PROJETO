package br.com.projeto.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController 
{

	@RequestMapping("/login")
	public String index(){
		return "http://localhost:4200/#/login";	
	}
}
