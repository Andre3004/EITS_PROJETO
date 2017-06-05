package br.com.projeto.service;

import java.util.List;

import org.directwebremoting.annotations.RemoteMethod;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;

import br.com.projeto.infra.Mailer;
import br.com.projeto.model.User;
import br.com.projeto.repository.IUserRepository;

//IMPLEMENTAÇÃO
@Service("userService")
@RemoteProxy(name = "userService")
public class UserService
{
	
	@Autowired
	private IUserRepository userRepository;
	
	@Autowired
	private Mailer mailer;
	
	@RemoteMethod
	@CrossOrigin(origins = "http://localhost:4200")
	public User insertUser(User user)
	{		
		mailer.send(user); // envio de email
		
		System.out.println("Email enviado!!");
		
		String hash = new BCryptPasswordEncoder().encode(user.getPassword()); // criptografando a senha para o banco
		user.setPassword(hash);// set senha criptografada
		user.setActive(true);
		
		return userRepository.save(user); // inserindo o usuario
	}
	
	@RemoteMethod
	@PreAuthorize("hasRole('USER')")
	public List<User> listAllUser() 
	{
		return userRepository.findAll();
	}
	
	@RemoteMethod
	public User findUserById(Long id) 
	{
		return userRepository.findOne(id);
	}	
	
	/*@RemoteMethod
	@PreAuthorize("hasRole('ADMIN')")
	public void deleteUser(Long id)
	{
		userRepository.delete(id);
	}*/
	
	@RemoteMethod
	@PreAuthorize("hasRole('USER')")
	public User findUserByEmail(String email)
	{
		return userRepository.findByEmail(email);
	}


	public void activateUser(User user) 
	{
		System.out.println(user.getName());
		user.setActive(true);
		userRepository.save(user);
	}
	
	public void deactivateUser(User user) 
	{
		if ( user.getId() == 42)
		{
			throw new IllegalArgumentException("O usuário Master não pode ser desativado.");
		}
		System.out.println(user.getName());
		user.setActive(false);
		userRepository.save(user);
	}

	public void editUser(User user) 
	{
		System.out.println(user.getName());
		String hash = new BCryptPasswordEncoder().encode(user.getPassword());
		user.setPassword(hash);
		userRepository.saveAndFlush(user);	 
	}
}
