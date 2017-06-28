package br.com.projeto.domain.service;

import java.util.List;

import org.directwebremoting.annotations.RemoteMethod;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
	public ResponseEntity<String>  insertUser(User user)
	{		
		if (  !(userRepository.findByEmailAndName(user.getName(), user.getEmail()).isEmpty()) )
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Os valores preenchidos não atendem a restrição de unicidade");
		}
		if ( !user.isValid() )
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Senhas não conferem");
		}

		mailer.send(user); // envio de email
		
		String hash = new BCryptPasswordEncoder().encode(user.getPassword()); // criptografando a senha para o banco
		user.setPassword(hash);// set senha criptografada
		user.setActive(true);
	    userRepository.save(user); // inserindo o usuario
	    return ResponseEntity.status(HttpStatus.ACCEPTED).body("Usuário salvo com sucesso!");
	}
	
	@RemoteMethod
	public List<User> listAllUser() 
	{
		return userRepository.findAll();
	}
	
	@RemoteMethod
	public Page<User> listUsers(int page, int size, String property, String order) 
	{
		Direction asc;
		
		if (order.equals("ASC"))
		{
			asc = Direction.ASC;
		}
		else
		{
			asc = Direction.DESC;
		}
		
		PageRequest pageable = new PageRequest(page, size, asc, property);
	    System.out.println(pageable);
		return userRepository.findAll(pageable);
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
	
	@RemoteMethod
	public String helloWorld() 
	{
		return "Olá Mundo";
	}
	
	@RemoteMethod
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
	@RemoteMethod
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public void activateUser(User user) 
	{
		user.setActive(true);
		userRepository.saveAndFlush(user);
	}
	@RemoteMethod
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public User deactivateUser(User user) 
	{
//		User userCurrent = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//		if ( ( user.getId() == 1 ) || ( userCurrent.getId() == user.getId() ) )
//		{
//			throw new IllegalArgumentException("O usuário não pode ser desativado.");
//		}
		user.setActive(false);
		return userRepository.saveAndFlush(user);
	}
	@RemoteMethod
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public void editUser(User user) 
	{
		User currentUser = new User();
		currentUser = userRepository.findOne(user.getId());
		user.setPassword(currentUser.getPassword());
		userRepository.saveAndFlush(user);	 
	}
	
	@RemoteMethod
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<String> updateUserToPassword(User user) 
	{
		if ( !user.isValid() )
		{
			 return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Senhas não conferem");
		}
		String hash = new BCryptPasswordEncoder().encode(user.getPassword());
		user.setPassword(hash);
		userRepository.saveAndFlush(user);	 
		return ResponseEntity.status(HttpStatus.ACCEPTED).body("Senha atualizada com sucesso!");
	}

	public Page<User> listUsersByFilters(int page, int size, String property, String order, String filter) 
	{
		Direction asc;
		
		if (order.equals("ASC"))
		{
			asc = Direction.ASC;
		}
		else
		{
			asc = Direction.DESC;
		}
		PageRequest pageable = new PageRequest(page, size, asc, property);
	    System.out.println(pageable);
		return userRepository.listUsersByFilters(filter.toLowerCase(), pageable);
	}
}
