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
@Table(name = "localizacao")
public class Localizacao {
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id; 
	
	private String localizacao;
	
	@JoinColumn(name = "cod_localizador")
	private int codLocalizador;

	@ManyToOne
	@JoinColumn(name = "responsavel_id")
	private Usuario responsavel;
	
	@ManyToOne
	@JoinColumn(name = "vice_responsavel_id")
	private Usuario viceResponsavel;
	
	@ManyToOne
	@JoinColumn(name = "sub_localizacao_id")
	private Localizacao subLocalizacao;
	
	@OneToMany(mappedBy = "subLocalizacao")
	private List<Localizacao> localizacoes;
	
	@OneToMany(mappedBy = "localizacao")
	private List<Equipamento> equipamentos;
	
	
	public List<Equipamento> getEquipamentos() {
		return equipamentos;
	}

	public void setEquipamentos(List<Equipamento> equipamentos) {
		this.equipamentos = equipamentos;
	}

	public Localizacao getSubLocalizacao() {
		return subLocalizacao;
	}

	public void setSubLocalizacao(Localizacao subLocalizacao) {
		this.subLocalizacao = subLocalizacao;
	}

	public List<Localizacao> getLocalizacoes() {
		return localizacoes;
	}

	public void setLocalizacoes(List<Localizacao> localizacoes) {
		this.localizacoes = localizacoes;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getCodLocalizador() {
		return codLocalizador;
	}

	public void setCodLocalizador(int codLocalizador) {
		this.codLocalizador = codLocalizador;
	}

	public String getLocalizacao() {
		return localizacao;
	}

	public void setLocalizacao(String localizacao) {
		this.localizacao = localizacao;
	}
	public Usuario getResponsavel() {
		return responsavel;
	}

	public void setResponsavel(Usuario responsavel) {
		this.responsavel = responsavel;
	}

	public Usuario getViceResponsavel() {
		return viceResponsavel;
	}

	public void setViceResponsavel(Usuario viceResponsavel) {
		this.viceResponsavel = viceResponsavel;
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
		Localizacao other = (Localizacao) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	
	
	
}
