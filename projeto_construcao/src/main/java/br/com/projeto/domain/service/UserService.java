package br.com.projeto.domain.service;

import java.util.List;

import org.directwebremoting.annotations.RemoteMethod;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.projeto.domain.entity.User;
import br.com.projeto.domain.repository.IUserRepository;
import br.com.projeto.infrastructure.Mailer;

//IMPLEMENTAÇÃO

@RemoteProxy(name = "userService")
@Service("userService")
public class UserService
{
	
	@Autowired
	private IUserRepository userRepository;
	
	@Autowired
	private Mailer mailer;
	
	@RemoteMethod
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public User insertUser(User user)
	{		
		if ( userRepository.findByEmail(user.getEmail()) != null )
 		{
 			throw new IllegalArgumentException("Este email já está cadastrado.");
 		}
		if ( !user.isValid(user) )
		{
			throw new IllegalArgumentException("Senhas não conferem.");
		}
		
		mailer.send(user); // envio de email
		
		String hash = new BCryptPasswordEncoder().encode(user.getPassword()); // criptografando a senha para o banco
		user.setPassword(hash);// set senha criptografada
		user.setActive(true);
		return userRepository.save(user); // inserindo o usuario
	}
	
	@RemoteMethod
	public List<User> listAllUser() 
	{
		return userRepository.findAll();
	}
	
	@RemoteMethod
	public Page<User> listUsersByFilters(String filter)
	{
		return userRepository.listUsersByFilters(filter, null);
	}
	
	@RemoteMethod
	public User findUserById(Long id) 
	{
		return userRepository.findOne(id);
	}	
	
	@RemoteMethod
	public User findByEmail(String email) 
	{
		return userRepository.findByEmail(email);
	}
	
	public User getCurrent()
	{
//		User userCurrent = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		User userCurrent = findByEmail("andre.luiz@eits.com.br");
		return userCurrent;
	}
	
	/*@RemoteMethod
	@PreAuthorize("hasRole('ADMIN')")
	public void deleteUser(Long id)
	{
		userRepository.delete(id);
	}*/
	
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public void activateUser(User user) 
	{
		user.setActive(true);
		userRepository.saveAndFlush(user);
	}
	
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public User deactivateUser(User user) 
	{
		User userCurrent = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		if ( ( user.getId() == 1 ) || ( userCurrent.getId() == user.getId() ) )
		{
			throw new IllegalArgumentException("O usuário não pode ser desativado.");
		}
		user.setActive(false);
		return userRepository.saveAndFlush(user);
	}

	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public void editUser(User user) 
	{
		System.out.println(user.getPassword());
		String hash = new BCryptPasswordEncoder().encode(user.getPassword());
		user.setPassword(hash);
		userRepository.saveAndFlush(user);	 
	}
}
