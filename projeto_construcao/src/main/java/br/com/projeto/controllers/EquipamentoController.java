package br.com.projeto.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.servlet.ModelAndView;

import br.com.projeto.model.Equipamento;
import br.com.projeto.service.EquipamentoService;

@Controller
@Scope(value=WebApplicationContext.SCOPE_REQUEST)
public class EquipamentoController {
	
	@Autowired
	private EquipamentoService equipamentoService;
	
	@RequestMapping("equipamentos/form")
	public ModelAndView form(){
		ModelAndView mv = new ModelAndView("equipamentos/form");
		return mv;
	}
	@RequestMapping("equipamentos")
	public String salvar(Equipamento equipamento){	
		equipamentoService.gravar(equipamento);
		return "equipamentos/ok";
	}
	
}
