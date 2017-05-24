package br.com.projeto.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.servlet.ModelAndView;

import br.com.projeto.model.Location;
import br.com.projeto.service.LocationService;

@Controller
@Scope(value=WebApplicationContext.SCOPE_REQUEST)
public class LocationController 
{

	@Autowired
	private LocationService locationService;
	
	@RequestMapping("localizacao/form")
	public ModelAndView form()
	{
		ModelAndView mv = new ModelAndView("localizacao/form");
		return mv;
	}
	@RequestMapping("localizacao")
	public String salvar(Location localizacao)
	{	
		locationService.insert(localizacao);
		return "localizacoes/ok";
	}
	
}
