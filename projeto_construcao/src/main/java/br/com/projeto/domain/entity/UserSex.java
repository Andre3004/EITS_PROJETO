package br.com.projeto.domain.entity;

import org.directwebremoting.annotations.DataTransferObject;

/**
 * 
 * @author André
 * @category Enum
 */
@DataTransferObject(type = "enum")
public enum UserSex 
{
	/*-------------------------------------------------------------------
	 *				 		     ENUMS
	 *-------------------------------------------------------------------*/
	MASCULINO("Masculino"),
	FEMININO("Feminino"),
	OUTRO("Outro");
	
	private String description;
	
	/**
	 * 
	 * @param description
	 */
	UserSex(String description) {
		this.description = description;
	}
	/**
	 * 
	 * @return
	 */
	public String getDescription() { 
		return description;
	}
}
