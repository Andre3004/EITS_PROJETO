package br.com.projeto.domain.entity;

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
