package br.com.projeto.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "equipamento")
public class Equipamento {
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id; 
	
	private String nome;
	private String descricao;
	
	private  String arquivoPath;
	
	@ManyToOne
	@JoinColumn(name = "localizacao_id")
	private Localizacao localizacao;
	
	@ManyToOne
	@JoinColumn(name = "sub_equipamento_id")
	private Equipamento subEquipamento;
	
	@OneToMany(mappedBy = "subEquipamento")
	private List<Equipamento> equipamentos;
	
	public List<Equipamento> getEquipamentos() {
		return equipamentos;
	}

	public void setEquipamentos(List<Equipamento> equipamentos) {
		this.equipamentos = equipamentos;
	}
	
	public String getArquivoPath() {
		return arquivoPath;
	}
	public void setArquivoPath(String arquivoPath) {
		this.arquivoPath = arquivoPath;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Localizacao getLocalizacao() {
		return localizacao;
	}

	public void setLocalizacao(Localizacao localizacao) {
		this.localizacao = localizacao;
	}

	public Equipamento getSubEquipamento() {
		return subEquipamento;
	}

	public void setSubEquipamento(Equipamento subEquipamento) {
		this.subEquipamento = subEquipamento;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Equipamento other = (Equipamento) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	

	
	
}
