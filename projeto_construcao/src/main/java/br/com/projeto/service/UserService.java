package br.com.projeto.service;

import java.util.List;

import org.directwebremoting.annotations.RemoteMethod;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.infra.Mailer;
import br.com.projeto.model.User;
import br.com.projeto.repository.UserRepository;

//IMPLEMENTAÇÃO
@Service
@Transactional
@RemoteProxy(name = "userService")
public class UserService
{
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private Mailer mailer;
	
	@RemoteMethod
	public void insert(User usuario)
	{		
		mailer.send(usuario); // envio de email
		
		System.out.println("Email enviado!!");
		
		String hash = new BCryptPasswordEncoder().encode(usuario.getPassword()); // criptografando a senha para o banco
		usuario.setPassword(hash);// set senha criptografada
		
		userRepository.save(usuario); // inserindo o usuario
	}
	
	@RemoteMethod
	public List<User> listAll() 
	{
		return userRepository.findAll();
	}
	
	@RemoteMethod
	public User findById(Long id) 
	{
		return userRepository.findOne(id);
	}	
	
	@RemoteMethod
	public void deleteUser(Long id)
	{
		userRepository.delete(id);
	}
}
