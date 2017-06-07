package br.com.projeto.controllers;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.projeto.model.User;

@Controller
public class LoginController 
{
	@RequestMapping("/login")
	public String index(@AuthenticationPrincipal User user)
	{
		if ( user != null)
		{
			return "redirect:/#/user";
		}
		return "index";	
	}
}
