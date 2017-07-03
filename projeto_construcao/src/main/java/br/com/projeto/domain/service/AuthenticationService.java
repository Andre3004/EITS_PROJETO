package br.com.projeto.domain.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.projeto.domain.entity.User;
import br.com.projeto.domain.repository.IUserRepository;

/**
 * 
 * @author André
 * @category Service
 * 
 */
@Service
public class AuthenticationService implements UserDetailsService 
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/
	//Repository
	/**
	 * 
	 */
	@Autowired
	private IUserRepository userRepository;
	
	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 */
	public User loadUserByUsername(String email)
	{
		try
		{
			return  userRepository.findByEmailAndActive(email);
		} 
		catch (Exception e)
		{
			throw new UsernameNotFoundException("Usuário " + email + " não encontrado.");
		}
	}
}
