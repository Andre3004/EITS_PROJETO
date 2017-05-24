package br.com.projeto.model;

import org.directwebremoting.annotations.DataTransferObject;
import org.springframework.security.core.GrantedAuthority;

@DataTransferObject(type = "enum")
public enum UserRole implements GrantedAuthority
{
	
	ROLE_ADMIN, 	
	ROLE_USER;	
	
	@Override
	public String getAuthority(){
		return this.name();
	}
}
