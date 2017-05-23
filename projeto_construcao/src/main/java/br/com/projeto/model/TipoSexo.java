package br.com.projeto.model;

import org.directwebremoting.annotations.DataTransferObject;

@DataTransferObject(type = "enum")
public enum TipoSexo {
	
	MASCULINO("Masculino"), 
	FEMININO("Feminino"),
	OUTRO("Outro");
	
	private String descricao;
	
	TipoSexo(String descricao) {
		this.descricao = descricao;
	}
	
	public String getDescricao() {
		return descricao;
	}
}
