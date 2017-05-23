package br.com.projeto.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.servlet.ModelAndView;

import br.com.projeto.model.Localizacao;
import br.com.projeto.service.LocalizacaoService;

@Controller
@Scope(value=WebApplicationContext.SCOPE_REQUEST)
public class LocalizacaoController {

	@Autowired
	private LocalizacaoService localizacaoService;
	
	@RequestMapping("localizacao/form")
	public ModelAndView form(){
		ModelAndView mv = new ModelAndView("localizacao/form");
		return mv;
	}
	@RequestMapping("localizacao")
	public String salvar(Localizacao localizacao){	
		localizacaoService.gravar(localizacao);
		return "localizacoes/ok";
	}
	
}
