package br.com.projeto.model;


import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.directwebremoting.annotations.DataTransferObject;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import br.com.projeto.validation.AtributoConfirmacao;


@Entity
@Table(name = "usuario")
@DataTransferObject(javascript = "usuario")
public class Usuario implements UserDetails{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String nome;
	private String email;
	private String senha;
	
	@Column(name = "ativo", nullable = false, columnDefinition = "boolean default true")
	private boolean ativo;
	
	@Transient
	private String confirmacaoSenha;
	

	//@DateTimeFormat
	//private LocalDate dataNascimento;
	
	@Enumerated(EnumType.STRING)
	private UsuarioRole permissao;

	
	
	public UsuarioRole getPermissao() {
		return permissao;
	}

	public void setPermissao(UsuarioRole permissao) {
		this.permissao = permissao;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	public String getConfirmacaoSenha() {
		return confirmacaoSenha;
	}
	public void setConfirmacaoSenha(String confirmacaoSenha) {
		this.confirmacaoSenha = confirmacaoSenha;
	}
	public boolean isAtivo() {
		return ativo;
	}
	public void setAtivo(boolean ativo) {
		this.ativo = ativo;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getSenha () {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
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
		Usuario other = (Usuario) obj;
		if (id != other.id)
			return false;
		return true;
	}
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities(){
		List<UsuarioRole> usuarios = new ArrayList<>();
		usuarios.add(permissao);
		return usuarios;
	}
	@Override
	public String getPassword() {
		return this.senha;
	}
	@Override
	public String getUsername() {
		return this.email;
	}
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}
	@Override
	public boolean isEnabled() {
		return true;
	}

	
	
	
}
