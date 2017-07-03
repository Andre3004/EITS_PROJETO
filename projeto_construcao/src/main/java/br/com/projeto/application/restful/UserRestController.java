package br.com.projeto.application.restful;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
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
 * @category RestController
 * 
 */

@RestController
@RequestMapping("user")
public class UserRestController 
{
	/*-------------------------------------------------------------------
	 * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/
	//Service
	/**
	 * 
	 */
	@Autowired
	private UserService userService;
	

	/*-------------------------------------------------------------------
	 * 		 					RESOURCES
	 *-------------------------------------------------------------------*/
	
	/**
	 * 
	 * @param user
	 * @return
	 */
	@CrossOrigin
	@RequestMapping(value = "/insertUser", method = RequestMethod.POST)
	public ResponseEntity<String> insertUser(@RequestBody User user)
	{
		return userService.insertUser(user);
	}
	/**
	 * 
	 * @param page
	 * @param size
	 * @param property
	 * @param order
	 * @return
	 */
	@CrossOrigin
	@RequestMapping(value = "/listUsers/{page}/{size}/{property}/{order} ", method = RequestMethod.GET)
	public Page<User> listUsers(@PathVariable int page, @PathVariable int size,
							    @PathVariable String property, @PathVariable String order)
	{
		Page<User> users =  userService.listUsers(page, size, property, order);
		return users;
	}
	/*RETIRAR*/
	@CrossOrigin
	@RequestMapping(value = "/listAllUser", method = RequestMethod.GET)
	public List<User> listAllUser()
	{
		return userService.listAllUser();
	}
	/**************************/
	
	/**
	 * 
	 * @param page
	 * @param size
	 * @param property
	 * @param order
	 * @param filter
	 * @return
	 */
	@CrossOrigin
	@RequestMapping(value = "/listUsersByFilters/{page}/{size}/{property}/{order}/{filter} ", method = RequestMethod.GET)
	public Page<User> listUsersByFilters(@PathVariable int page, @PathVariable int size,
									     @PathVariable String property, @PathVariable String order,
									     @PathVariable String filter)
	{
		Page<User> users =  userService.listUsersByFilters(page, size, property, order, filter);
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
	 * @return 
	 */
	@CrossOrigin
	@RequestMapping(value = "/updateUserToPassword", method = RequestMethod.PUT)
	public ResponseEntity<String> updateUserToPassword(@RequestBody User user)
	{
		return userService.updateUserToPassword(user);
	}

}
