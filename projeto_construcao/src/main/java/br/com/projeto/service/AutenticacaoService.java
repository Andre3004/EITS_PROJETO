package br.com.projeto.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.projeto.model.Usuario;
import br.com.projeto.repository.UsuarioRepository;

@Service
public class AutenticacaoService implements UserDetailsService {
	
	@Autowired
	private UsuarioRepository usuariosRepository;
	
	public Usuario loadUserByUsername(String email){
		try{
			return  usuariosRepository.findByEmail(email);
		} 
		catch (Exception e){
			throw new UsernameNotFoundException("Usuário " + email + " não encontrado.");
		}
	}
}
