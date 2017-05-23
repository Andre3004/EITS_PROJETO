package br.com.projeto.model;

import org.springframework.security.core.GrantedAuthority;

public enum UsuarioRole implements GrantedAuthority{
	
	ROLE_ADMIN, 	
	ROLE_USER;	
	
	@Override
	public String getAuthority(){
		return this.name();
	}
}
