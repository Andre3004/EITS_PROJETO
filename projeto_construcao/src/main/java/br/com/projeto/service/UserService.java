package br.com.projeto.service;

import java.util.List;

import org.directwebremoting.annotations.RemoteMethod;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.infra.Mailer;
import br.com.projeto.model.User;
import br.com.projeto.repository.UserRepository;

//IMPLEMENTAÇÃO
@Service("userService")
@Transactional
@RemoteProxy(name = "userService")
public class UserService
{
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private Mailer mailer;
	
	@RemoteMethod
	@PreAuthorize("hasRole('ADMIN')")
	public User insertUser(User user)
	{		
		mailer.send(user); // envio de email
		
		System.out.println("Email enviado!!");
		
		String hash = new BCryptPasswordEncoder().encode(user.getPassword()); // criptografando a senha para o banco
		user.setPassword(hash);// set senha criptografada
		
		return userRepository.save(user); // inserindo o usuario
	}
	
	@RemoteMethod
	@PreAuthorize("hasRole('USER')")
	public List<User> listAllUser() 
	{
		return userRepository.findAll();
	}
	
	@RemoteMethod
	@PreAuthorize("hasRole('USER')")
	public User findUserById(Long id) 
	{
		return userRepository.findOne(id);
	}	
	
	@RemoteMethod
	@PreAuthorize("hasRole('ADMIN')")
	public void deleteUser(Long id)
	{
		userRepository.delete(id);
	}
	
	@RemoteMethod
	@PreAuthorize("hasRole('USER')")
	public User findUserByEmail(String email)
	{
		return userRepository.findByEmail(email);
	}

	@PreAuthorize("hasRole('ADMIN')")
	public User activateUser(User user) {
		if ( user.isActive()){
			throw new IllegalArgumentException("O usuário já está ativo");
		}
		user.setActive(true);
		return insertUser(user);
	}
	@PreAuthorize("hasRole('ADMIN')")
	public User deactivateUser(User user) {
		if ( user.isActive() == false ){
			throw new IllegalArgumentException("O usuário já está desativado");
		}
		user.setActive(false);
		return insertUser(user);
	}
}
