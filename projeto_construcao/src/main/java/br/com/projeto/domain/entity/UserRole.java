package br.com.projeto.domain.entity;

import org.directwebremoting.annotations.DataTransferObject;
import org.springframework.security.core.GrantedAuthority;

/**
 * 
 * @author André
 * @category Enum
 */
@DataTransferObject(type = "enum")
public enum UserRole implements GrantedAuthority
{
	/*-------------------------------------------------------------------
	 *				 		     ENUMS
	 *-------------------------------------------------------------------*/
	
	ROLE_USER, 	
	ROLE_ADMIN;	
	
	/**
	 * 
	 */
	@Override
	public String getAuthority()
	{
		return this.name();
	}
}
