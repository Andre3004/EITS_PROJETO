package br.com.projeto.restful;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.model.User;
import br.com.projeto.service.UserService;

@RestController
@RequestMapping("user")
public class UserRestController 
{
	@Autowired
	private UserService userService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/insertUser", method = RequestMethod.POST)
	public User insertUser(@RequestBody User user)
	{
		return userService.insertUser(user);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/listAllUser", method = RequestMethod.GET)
	public List<User> listAllUser()
	{
		return userService.listAllUser();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "detailUser/{id}", method = RequestMethod.GET)
	@ResponseBody
	public User detailUser(@PathVariable("id") Long id)
	{	
		return userService.findUserById(id);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/deleteUser/{id}", method = RequestMethod.DELETE)
	public void deleteUser(@PathVariable("id") Long id)
	{
		userService.deleteUser(id);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/findByEmail", method = RequestMethod.GET)
	public User findUserByEmail(String email)
	{
		return userService.findUserByEmail(email);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/activate/{id}", method = RequestMethod.POST)
	public User activateUser(@PathVariable Long id)
	{
		return userService.activateUser(userService.findUserById(id));
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/deactivate/{id}", method = RequestMethod.POST)
	public User deactivateUser(@PathVariable Long id)
	{
		return userService.deactivateUser(userService.findUserById(id));
	}

}
