package br.com.projeto.tests.domain.service;

import static org.junit.Assert.assertNotNull;


import static org.junit.Assert.assertNull;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.context.jdbc.Sql;

import br.com.projeto.domain.entity.User;
import br.com.projeto.domain.entity.UserRole;
import br.com.projeto.domain.entity.UserSex;
import br.com.projeto.domain.service.UserService;
import br.com.projeto.tests.config.IntegrationTests;

@Sql("dataset/user/users_data.sql")
public class UserServiceTest extends IntegrationTests
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 */
	@Autowired
	private UserService userService;
	
	/*-------------------------------------------------------------------
	 *				 		      TESTS
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 */
	@WithUserDetails("administrator.001@email.com.br")
	@Test
	@Sql({
		"dataset/user/users_data.sql"
	})
	public void insertAndListUserMustPass() 
	{
		User user = new User();
		user.setName("Teste");
		user.setLastName("Junit");
		user.setPermission(UserRole.ROLE_ADMIN);
		user.setSex(UserSex.MASCULINO);
		user.setPassword("12345");
		user.setConfirmPassword("12345");
		user.setEmail("teste.junit@teste.com.br");
		userService.insertUser(user);

		Assert.assertNotNull( user );
		Assert.assertNotNull( user.getName() );
		Assert.assertNotNull( user.getLastName() );
		Assert.assertNotNull( user.isActive() );
		Assert.assertNotNull( user.getPermission() );
		Assert.assertNotNull( user.getSex() );
		
		Page<User> users = userService.listUsersByFilters(0, 5, "email", "ASC", "administrator.001@email.com.br");
		Assert.assertEquals(users.getContent().get(0).getEmail(), "administrator.001@email.com.br");
		
	}
	/**
	 * 
	 */
	@Test(expected = AuthenticationCredentialsNotFoundException.class)
	@Sql({
		"dataset/user/users_data.sql"
	})
	public void insertUserMustFail() 
	{
		User user = new User();
		userService.insertUser(user);
	}
	/**
	 * 
	 */
	@WithUserDetails("administrator.001@email.com.br")
	@Test
	@Sql({
		"dataset/user/users_data.sql"
	})
	public void updateUsertoDeactivateMustPass() 
	{
		User user = userService.findUserById(new Long(2));
		userService.updateUsertoDeactivate(user);
	}
	/**
	 * 
	 */
	@WithUserDetails("administrator.001@email.com.br")
	@Test(expected = IllegalArgumentException.class)
	@Sql({
		"dataset/user/users_data.sql"
	})
	public void updateUsertoDeactivateMustFail() 
	{
		User user = userService.findUserById(new Long(1));
		userService.updateUsertoDeactivate(user);
	}
	/**
	 * 
	 */
	@Test
	@Sql({
		"dataset/user/users_data.sql"
	})
	public void findUserByIdMustPass() 
	{
		User user = userService.findUserById(new Long(2));
		assertNotNull(user);
	}
	/**
	 * 
	 */
	@Test
	@Sql({
		"dataset/user/users_data.sql"
	})
	public void findUserByIdMustFail() 
	{
		User user = userService.findUserById(new Long(5));
		assertNull(user);
	}
	/**
	 * 
	 */
	@WithUserDetails("administrator.001@email.com.br")
	@Test
	@Sql({
		"dataset/user/users_data.sql"
	})
	public void updateUserMustPass() 
	{
		User user = userService.findUserById(new Long(3));
		user.setName("José");
		userService.updateUser(user);
	}
	/**
	 * 
	 */
	@WithUserDetails("administrator.001@email.com.br")
	@Test(expected = DataIntegrityViolationException.class)
	@Sql({
		"dataset/user/users_data.sql"
	})
	public void updateUserMustFail() 
	{
		User user = userService.findUserById(new Long(3));
		user.setName(null);
		userService.updateUser(user);
	}
	
	

}
