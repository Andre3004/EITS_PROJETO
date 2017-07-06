package br.com.projeto.tests;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;

import br.com.projeto.domain.entity.User;
import br.com.projeto.domain.entity.UserRole;
import br.com.projeto.domain.entity.UserSex;
import br.com.projeto.domain.service.UserService;

public class UserServiceTest extends IntegrationTests
{

	@Autowired
	private UserService userService;

	@Test
	public void insertAndListMustPass() 
	{
		
		User user = new User();
		
		user.setName("Teste");
		user.setLastName("Junit");
		user.setActive(true);
		user.setEmail("teste.junit@teste.com.br");
		user.setPassword("12345");
		user.setPermission(UserRole.ROLE_ADMIN);
		user.setSex(UserSex.MASCULINO);
		
		userService.insertUser(user);
		
		Assert.assertNotNull( user );
		Assert.assertNotNull( user.getName() );
		Assert.assertNotNull( user.getLastName() );
		Assert.assertNotNull( user.isActive() );
		Assert.assertNotNull( user.getEmail() );
		Assert.assertNotNull( user.getPassword() );
		Assert.assertNotNull( user.getPermission() );
		Assert.assertNotNull( user.getSex() );
		
/*		Page<User> users = userService.listUsersByFilters( user.getName() );
		Assert.assertNotNull( users );
		
		users = userService.listUsersByFilters( user.getEmail() );
		Assert.assertNotNull( users );*/
		
	}
	
	@Test(expected = NullPointerException.class)
	public void insertNotMustPass() 
	{
		User user = new User();
		
		user.setName(null);
		user.setLastName("Junit");
		user.setActive(true);
		user.setEmail(null);
		user.setPassword(null);
		user.setPermission(null);
		user.setSex(null);
		
		
		userService.insertUser(user);
	}
	
	@Test
	public void deactivateMustPass() 
	{
		User user = userService.findUserById(new Long(15));
		userService.deactivateUser(user);
	}
	
	@Test(expected = IllegalArgumentException.class)
	public void deactivateNotMustPass() 
	{
		User user = userService.findUserById(new Long(2));
		userService.deactivateUser(user);
	}
	
	
	@Test
	public void findUserMustPass() 
	{
		User user = userService.findUserById(new Long(2));
		assertNotNull(user);
	}
	
	@Test
	public void findUserNotMustPass() 
	{
		User user = userService.findUserById(new Long(0));
		assertTrue(user == null);
	}
	
//	@Test
//	public void shouldHaveUnchangedPasswordDigest()
//	{
//		User user = userService.findByEmail("andre.luiz@eits.com.br");
//		String password = user.getPassword();
//		user.setName("Usuário");
//		userService.editUser(user);
//		System.out.println(password);
//		System.out.println(user.getPassword());
//		assertFalse(password.equals(user.getPassword()));
//	}
}
