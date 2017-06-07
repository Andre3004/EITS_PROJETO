package br.com.projeto.restful;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	@RequestMapping(value = "/getCurrentUser", method = RequestMethod.GET)
	public User getCurrent()
	{
		return userService.getCurrent();
	}
	
	/*@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/deleteUser/{id}", method = RequestMethod.DELETE)
	public void deleteUser(@PathVariable("id") Long id)
	{
		userService.deleteUser(id);
	}*/
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/findUserByEmail", method = RequestMethod.GET)
	public User findUserByEmail(String email)
	{
		return userService.findUserByEmail(email);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/findUserById/{id}", method = RequestMethod.GET)
	public User findUserById(@PathVariable Long id)
	{
		return userService.findUserById(id);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/activateUser/{id}", method = RequestMethod.PATCH)
	public void activateUser(@PathVariable Long id)
	{
		userService.activateUser(userService.findUserById(id));
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/deactivateUser/{id}", method = RequestMethod.PATCH)
	public void deactivateUser(@PathVariable Long id)
	{
		userService.deactivateUser(userService.findUserById(id));
	}
	
	
	/*@Transactional(readOnly = false)*/
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/updateUser", method = RequestMethod.PUT)
	public void updateUser(@RequestBody User user)
	{
		userService.editUser(user);
	}

}
