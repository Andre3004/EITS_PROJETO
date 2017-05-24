package br.com.projeto.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.servlet.ModelAndView;

import br.com.projeto.model.Equipment;
import br.com.projeto.service.EquipmentService;

@Controller
@Scope(value=WebApplicationContext.SCOPE_REQUEST)
public class EquipmentController 
{
	
	@Autowired
	private EquipmentService equipmentService;
	
	@RequestMapping("equipamentos/form")
	public ModelAndView form()
	{
		ModelAndView mv = new ModelAndView("equipamentos/form");
		return mv;
	}
	@RequestMapping("equipamentos")
	public String salvar(Equipment equipamento)
	{	
		equipmentService.insert(equipamento);
		return "equipamentos/ok";
	}
	
}
