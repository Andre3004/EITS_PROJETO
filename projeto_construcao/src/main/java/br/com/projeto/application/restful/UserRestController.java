package br.com.projeto.application.restful;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.domain.entity.User;
import br.com.projeto.domain.service.UserService;

/**
 * 
 * @author André
 *
 */

@RestController
@RequestMapping("user")
public class UserRestController 
{
	@Autowired
	private UserService userService;
	/**
	 * 
	 * @param user
	 * @return
	 */
	@CrossOrigin
	@RequestMapping(value = "/insertUser", method = RequestMethod.POST)
	public User insertUser(@RequestBody User user)
	{
		return userService.insertUser(user);
	}
	/**
	 * 
	 * @return 
	 */
	@CrossOrigin
	@RequestMapping(value = "/listAllUser", method = RequestMethod.GET)
	public List<User> listAllUser()
	{
		return userService.listAllUser();
	}
	
	/**
	 * 
	 * @param page
	 * @param size
	 * @return
	 */
	@CrossOrigin
	@RequestMapping(value = "/listUsers/{page}/{size}", method = RequestMethod.GET)
	public Page<User> listUsers(@PathVariable int page, @PathVariable int size)
	{
		System.out.println("Page " + page);
		System.out.println("Size " + size);
		Page<User> users =  userService.listUsers(page, size);
		return users;
	}
    /**
     * 
     * @return 
     */
	@CrossOrigin
	@RequestMapping(value = "/getCurrentUser", method = RequestMethod.GET)
	public User getCurrent()
	{
		return userService.getCurrent();
	}
    /**
     * 
     * @param id
     * @return
     */
	@CrossOrigin
	@RequestMapping(value = "/findUserById/{id}", method = RequestMethod.GET)
	public User findUserById(@PathVariable Long id)
	{
		return userService.findUserById(id);
	}
	/**
	 * 
	 * @param id
	 */
	@CrossOrigin
	@RequestMapping(value = "/activateUser/{id}", method = RequestMethod.PATCH)
	public void activateUser(@PathVariable Long id)
	{
		userService.activateUser(userService.findUserById(id));
	}
	/**
	 * 
	 * @param id
	 */
	@CrossOrigin
	@RequestMapping(value = "/deactivateUser/{id}", method = RequestMethod.PATCH)
	public void deactivateUser(@PathVariable Long id)
	{
		System.out.println(id);
		userService.deactivateUser(userService.findUserById(id));
	}
    /**
     * 
     * @param user
     */
	@CrossOrigin
	@RequestMapping(value = "/updateUser", method = RequestMethod.PUT)
	public void updateUser(@RequestBody User user)
	{
		userService.editUser(user);
	}
	/**
	 * 
	 * @param user
	 */
	@CrossOrigin
	@RequestMapping(value = "/updateUserToPassword", method = RequestMethod.PUT)
	public void updateUserToPassword(@RequestBody User user)
	{
		userService.updateUserToPassword(user);
	}

}
