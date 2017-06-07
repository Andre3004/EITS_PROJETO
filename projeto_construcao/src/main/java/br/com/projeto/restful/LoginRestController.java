package br.com.projeto.restful;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.model.Location;
import br.com.projeto.model.User;
import br.com.projeto.service.AuthenticationService;

@RestController
@RequestMapping("login")
public class LoginRestController 
{
	@Autowired
	AuthenticationService authenticationService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/logout", method = RequestMethod.TRACE)
	public String logout()
	{
		return "redirect:/logout";
	}
}
