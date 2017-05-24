package br.com.projeto.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import br.com.projeto.model.User;
import br.com.projeto.service.UserService;
@Controller
@Scope(value=WebApplicationContext.SCOPE_REQUEST)
public class UserController 
{
	//ASSINATURA DOS MÉTODOS
	
	
	@Autowired
	private UserService userService;
	
//	@Autowired
//	private FileSaver fileSaver;
	
	@RequestMapping("usuarios/form")
	public ModelAndView form()
	{
		ModelAndView mv = new ModelAndView("usuarios/form");
		return mv;
	}
	@RequestMapping(method=RequestMethod.POST)
	public ModelAndView salvar(MultipartFile arquivo , User user, RedirectAttributes ra)
	{
		
	/// path = fileSaver.write("arquivos-teste", arquivo);
	//	usuario.setArquivoPath(path);
		
		userService.insert(user);
		
		ra.addFlashAttribute("sucesso", "Usuario cadastrado com sucesso!");
		return new ModelAndView("redirect:usuarios");
	}
	
	@RequestMapping(method=RequestMethod.GET)
	public ModelAndView listar()
	{	
		List<User> usuarios = userService.listAll();
		ModelAndView mv = new ModelAndView("usuarios/lista");
		mv.addObject("usuarios", usuarios);
		return mv;		
	} 
	
	@RequestMapping("usuarios/detalhe/{id}")
	public ModelAndView detalhe(@PathVariable("id") Long id)
	{	
		ModelAndView mv = new ModelAndView("usuarios/detalhe");
		User usuario = userService.findById(id);
		mv.addObject("usuario", usuario);	
		return mv;
	}
	
	@RequestMapping("usuarios/{id}")
	@ResponseBody
	public User detalheJson(@PathVariable("id") Long id)
	{	
		User usuario = userService.findById(id);
		return usuario;
	}
}
