package br.com.projeto.application.restful;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.domain.entity.User;
import br.com.projeto.domain.service.UserService;

@RestController
@RequestMapping("user")
public class UserRestController 
{
	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/insertUser", method = RequestMethod.POST)
	public User insertUser(@RequestBody User user)
	{
		return userService.insertUser(user);
	}
	
	@RequestMapping(value = "/listAllUser", method = RequestMethod.GET)
	public List<User> listAllUser()
	{
		return userService.listAllUser();
	}

	@RequestMapping(value = "/getCurrentUser", method = RequestMethod.GET)
	public User getCurrent()
	{
		return userService.getCurrent();
	}

	@RequestMapping(value = "/findUserById/{id}", method = RequestMethod.GET)
	public User findUserById(@PathVariable Long id)
	{
		return userService.findUserById(id);
	}
	@CrossOrigin
	@RequestMapping(value = "/activateUser/{id}", method = RequestMethod.PATCH)
	public void activateUser(@PathVariable Long id)
	{
		userService.activateUser(userService.findUserById(id));
	}
	@CrossOrigin
	@RequestMapping(value = "/deactivateUser/{id}", method = RequestMethod.PATCH)
	public void deactivateUser(@PathVariable Long id)
	{
		System.out.println(id);
		userService.deactivateUser(userService.findUserById(id));
	}

	@CrossOrigin
	@RequestMapping(value = "/updateUser", method = RequestMethod.PUT)
	public void updateUser(@RequestBody User user)
	{
		userService.editUser(user);
	}

}
