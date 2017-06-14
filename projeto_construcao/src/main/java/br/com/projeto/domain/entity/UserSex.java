package br.com.projeto.domain.entity;

import org.directwebremoting.annotations.DataTransferObject;

@DataTransferObject(type = "enum")
public enum UserSex 
{
	MASCULINO("Masculino"),
	FEMININO("Feminino"),
	OUTRO("Outro");
	
	private String description;
	
	UserSex(String description) {
		this.description = description;
	}
	
	public String getDescription() { 
		return description;
	}
}
