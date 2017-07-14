package br.com.projeto.application.restful;

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
@RequestMapping("api/user")
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
	@RequestMapping(value = "/updateUsertoActivate/{id}", method = RequestMethod.PATCH)
	public void activateUser(@PathVariable Long id)
	{
		userService.updateUsertoActivate(userService.findUserById(id));
	}
	/**
	 * 
	 * @param id
	 */
	@CrossOrigin
	@RequestMapping(value = "/updateUsertoDeactivate/{id}", method = RequestMethod.PATCH)
	public void updateUsertoDeactivate(@PathVariable Long id)
	{
		userService.updateUsertoDeactivate(userService.findUserById(id));
	}
    /**
     * 
     * @param user
     * @return 
     */
	@CrossOrigin
	@RequestMapping(value = "/updateUser", method = RequestMethod.PUT)
	public ResponseEntity<String> updateUser(@RequestBody User user)
	{
		return userService.updateUser(user);
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
