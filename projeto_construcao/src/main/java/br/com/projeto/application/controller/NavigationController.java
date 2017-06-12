package br.com.projeto.application.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.projeto.domain.entity.User;

@Controller
public class NavigationController 
{	
	@RequestMapping("/")
	public String home()
	{
		return "dist/index";	
	}
	
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
