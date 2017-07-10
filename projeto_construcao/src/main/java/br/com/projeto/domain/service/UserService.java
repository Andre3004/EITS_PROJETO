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
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.domain.entity.User;
import br.com.projeto.domain.repository.IUserRepository;
import br.com.projeto.infrastructure.Mailer;

/**
 * 
 * @author André
 * @category Service
 * 
 */
@RemoteProxy
@Service("userService")
@Transactional
public class UserService
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
	
	/**
	 * 
	 */
	@Autowired
	private Mailer mailer;
	
	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 * @param user
	 * @return
	 */
	@RemoteMethod
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<String>  insertUser(User user)
	{		
		if ( (userRepository.findByEmail(user.getEmail(), user.getId()) != null ) )
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Email já cadastrado");
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
	/**
	 * 
	 * @param id
	 * @return
	 */
	@RemoteMethod
	public User findUserById(Long id) 
	{
		return userRepository.findOne(id);
	}	
	/**
	 * 
	 * @return
	 */
	@RemoteMethod
	public String helloWorld() 
	{
		return "Olá Mundo";
	}
	
	/**
	 * 
	 * @return
	 */
	@RemoteMethod
	public User getCurrent()
	{
//		User userCurrent = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		User userCurrent = userRepository.findByEmail("andre.luiz@eits.com.br", (long) 0);
		return userCurrent;
	}
	
	/**
	 * 
	 * @param user
	 */
	@RemoteMethod
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public void activateUser(User user) 
	{
		user.setActive(true);
		userRepository.saveAndFlush(user);
	}
	/**
	 * 
	 * @param user
	 * @return
	 */
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
	/**
	 * 
	 * @param user
	 * @return 
	 */
	@RemoteMethod
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<String> updateUser(User user) 
	{
		User currentUser = userRepository.findOne(user.getId());
		System.out.println(currentUser.getEmail());
		System.out.println(currentUser.getId());
		if ( (userRepository.findByEmail(user.getEmail(), user.getId()) != null ) )
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Email já cadastrado");
		}
		
		user.setPassword(currentUser.getPassword());
		userRepository.saveAndFlush(user);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body("Usuário salvo com sucesso!");	 
	}
	
	/**
	 * 
	 * @param user
	 * @return
	 */
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

	/**
	 * 
	 * @param page
	 * @param size
	 * @param property
	 * @param order
	 * @param filter
	 * @return
	 */
	public Page<User> listUsersByFilters(int page, int size, String property, String order, String filter) 
	{
		Direction asc;
		if ( filter.compareToIgnoreCase("null") == 0 )
		{
			filter = "";
		}
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
