package br.com.projeto.application.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.projeto.domain.entity.User;

/**
 * 
 * @author André
 * @category Controller
 * 
 */
@Controller
public class NavigationController 
{	
	/*-------------------------------------------------------------------
	 * 		 					CONTROLLERS
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 * @return
	 */
	@RequestMapping("/")
	public String home()
	{
		return "dist/index.html";	
	}
	
	/**
	 * 
	 * @param user
	 * @return
	 */
	@RequestMapping("/login")
	public String index(@AuthenticationPrincipal User user)
	{
		if ( user != null)
		{
			return "redirect:/#/user";
		}
		return "index.jsp";	
	}
}
