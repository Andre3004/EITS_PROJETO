package br.com.projeto.service;

import java.util.List;

import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.model.Usuario;
import br.com.projeto.repository.UsuarioRepository;

//IMPLEMENTAÇÃO
@Service
@Transactional
@RemoteProxy(name = "UsuarioService")
public class UsuarioService{
	
	@Autowired
	private UsuarioRepository usuariosRepository;
	
	@Transactional
	public void insert(Usuario usuario){
		
		String hash = new BCryptPasswordEncoder().encode(usuario.getSenha());
		usuario.setSenha(hash);
		
		usuariosRepository.save(usuario);
	}

	public List<Usuario> listAll() {
		return usuariosRepository.findAll();
	}

	public Usuario findById(long id) {
		return usuariosRepository.findOne(id);
	}	
	public void delete(Long id){
		usuariosRepository.delete(id);
	}
}
