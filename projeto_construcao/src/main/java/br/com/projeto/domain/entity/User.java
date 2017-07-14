package br.com.projeto.domain.entity;

import java.io.Serializable;
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
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.directwebremoting.annotations.DataTransferObject;
import org.hibernate.envers.Audited;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;



/**
 * 
 * @author André
 * @category Entity
 *
 */
@Entity
@Table(name = "users")
@DataTransferObject(javascript = "user")
@Audited
public class User implements Serializable, UserDetails 
{

	/**
	 * 
	 */
	private static final long serialVersionUID = -4737052671651923602L;
	

	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	/**
	 * 
	 */
	@NotBlank
	@Column(length = 50)
	private String name;

	/**
	 * 
	 */
	@NotBlank
	@Column(name="last_name", length = 50)
	private String lastName;

	/**
	 * 
	 */
	@Email
	@Column(length = 144, unique=true)
	@NotBlank
	private String email;

	/**
	 * 
	 */
	@JsonProperty(access = Access.WRITE_ONLY)
	@Size(min = 8, max = 100)
	@NotBlank
	private String password;
	
	/**
	 * 
	 */
	@Transient
	private String confirmPassword;

	/**
	 * 
	 */
	@Column(name = "active", nullable = false, columnDefinition = "boolean default true")
	private boolean active;

	/**
	 * 
	 */
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private UserSex sex;

	/**
	 * 
	 */
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private UserRole permission;

	/*-------------------------------------------------------------------
	 * 		 					CONSTRUCTORS
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 */
	public User()
	{

	}

	/**
	 * 
	 * @param id
	 * @param confirmPassword
	 * @param name
	 * @param email
	 * @param password
	 * @param active
	 * @param permission
	 * @param lastName
	 * @param sex
	 */
	public User(Long id, String confirmPassword, String name, String email, String password, boolean active, UserRole permission, String lastName, UserSex sex)
	{
		super();
		this.id = id;
		this.name = name;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.confirmPassword = confirmPassword;
		this.active = active;
		this.sex = sex;
		this.permission = permission;
	}
	
	/*-------------------------------------------------------------------
	 *							BEHAVIORS
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 */
	@JsonIgnore
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() 
	{
		List<UserRole> users = new ArrayList<>();
		users.add(permission);
		return users;
	}
	
	/*
	 * (non-Javadoc)
	 * @see org.springframework.security.core.userdetails.UserDetails#getPassword()
	 */
	@Override
	public String getPassword() 
	{
		return this.password;
	}

	/*
	 * (non-Javadoc)
	 * @see org.springframework.security.core.userdetails.UserDetails#getUsername()
	 */
	@JsonIgnore
	@Override
	public String getUsername() 
	{
		return this.email;
	}
	
	/**
	 * 
	 */
	@JsonIgnore
	@Override
	public boolean isAccountNonExpired() 
	{
		return true;
	}
	/**
	 * 
	 */
	@JsonIgnore
	@Override
	public boolean isAccountNonLocked() 
	{
		return true;
	}
	/**
	 * 
	 */
	@JsonIgnore
	@Override
	public boolean isCredentialsNonExpired() 
	{
		return true;
	}

	/**
	 * 
	 */
	@JsonIgnore
	@Override
	public boolean isEnabled() 
	{
		return this.active;
	}

	/**
	 * 
	 * @return
	 */
	public boolean passwordIsValid()
	{
		if ( this.password.equals(this.confirmPassword)) 
		{
			return true;
		}
		
		return false;
	}
	
	/*-------------------------------------------------------------------
	 *						GETTERS AND SETTERS
	 *-------------------------------------------------------------------*/
	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}
	
	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	public String getLastName() 
	{
		return lastName;
	}

	public void setLastName(String lastName) 
	{
		this.lastName = lastName;
	}

	public UserSex getSex() 
	{
		return sex;
	}

	public void setSex(UserSex sex) 
	{
		this.sex = sex;
	}

	public long getId() 
	{
		return id;
	}

	
	public void setId(long id) 
	{
		this.id = id;
	}

	public String getName() 
	{
		return name;
	}

	public void setName(String name) 
	{
		this.name = name;
	}

	public String getEmail() 
	{
		return email;
	}

	public void setEmail(String email) 
	{
		this.email = email;
	}

	public boolean isActive() 
	{
		return active;
	}

	public void setActive(boolean active) 
	{
		this.active = active;
	}

	public UserRole getPermission() 
	{
		return permission;
	}

	public void setPermission(UserRole permission) 
	{
		this.permission = permission;
	}
	
	@JsonProperty(access = Access.WRITE_ONLY)
	public static long getSerialversionuid() 
	{
		return serialVersionUID;
	}

	@JsonProperty(access = Access.WRITE_ONLY)
	public void setPassword(String password) 
	{
		this.password = password;
	}

	/*-------------------------------------------------------------------
	 *						HASH AND EQUALS
	 *-------------------------------------------------------------------*/
	
	/*
	 * (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode()
	{
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	/*
	 * (non-Javadoc)
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object obj) 
	{
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (id != other.id)
			return false;
		return true;
	}

}