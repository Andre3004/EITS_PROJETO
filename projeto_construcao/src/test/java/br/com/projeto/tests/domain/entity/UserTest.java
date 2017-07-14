package br.com.projeto.tests.domain.entity;

import org.junit.Test;

import br.com.projeto.domain.entity.User;
import br.com.projeto.domain.entity.UserRole;
import org.junit.Assert;

public class UserTest 
{
	/*-------------------------------------------------------------------
	 *                           ATTRIBUTES
	 *-------------------------------------------------------------------*/

	/*-------------------------------------------------------------------
	 *                           TESTS
	 *-------------------------------------------------------------------*/
	
	/**
     * 
     */
	@Test
	public void getAuthoritiesMustPass()
	{
		final User user = new User();
		user.setPermission( UserRole.ROLE_ADMIN  );
		
		Assert.assertNotNull( user.getAuthorities() );
		Assert.assertTrue( user.getAuthorities().contains( UserRole.ROLE_ADMIN ) );
	}
	/**
     * 
     */
	@Test
	public void passowordIsValidMustPass()
	{
		final User user = new User();
		user.setPassword("12345678");
		user.setConfirmPassword("12345678");
		Assert.assertTrue(user.passwordIsValid());
	}
	/**
     * 
     */
	@Test(expected = AssertionError.class)
	public void passowordIsValidMustFail()
	{
		final User user = new User();
		user.setPassword("12345678");
		user.setConfirmPassword("87654321");
		Assert.assertTrue(user.passwordIsValid());
	}
	
}
