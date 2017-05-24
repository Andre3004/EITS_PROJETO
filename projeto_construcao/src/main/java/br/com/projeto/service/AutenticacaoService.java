package br.com.projeto.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.projeto.model.User;
import br.com.projeto.repository.UserRepository;

@Service
public class AutenticacaoService implements UserDetailsService 
{
	
	@Autowired
	private UserRepository userRepository;
	
	public User loadUserByUsername(String email)
	{
		try{
			return  userRepository.findByEmail(email);
		} 
		catch (Exception e){
			throw new UsernameNotFoundException("Usuário " + email + " não encontrado.");
		}
	}
}
