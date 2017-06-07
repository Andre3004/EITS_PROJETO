package br.com.projeto.model;

//import java.time.LocalDate;
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

import org.directwebremoting.annotations.DataTransferObject;
//import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "users")
@DataTransferObject(javascript = "User")
public class User implements UserDetails 
{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String name;
	private String lastName;
	private String email;
	private String password;

	@Column(name = "active", nullable = false, columnDefinition = "boolean default true")
	private boolean active;

	private String sex;

	@Enumerated(EnumType.STRING)
	private UserRole permission;

	public User()
	{

	}
	
	public User(Long id, String name, String email, String password, boolean active, UserRole permission, String lastName, String sex)
	{
		super();
		this.id = id;
		this.name = name;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.active = active;
		this.sex = sex;
		this.permission = permission;
	}
	
	
	public String getLastName() 
	{
		return lastName;
	}

	public void setLastName(String lastName) 
	{
		this.lastName = lastName;
	}

	public String getSex() 
	{
		return sex;
	}

	public void setSex(String sex) 
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
	
	@JsonProperty(access = Access.READ_ONLY)
	public static long getSerialversionuid() 
	{
		return serialVersionUID;
	}

	public void setPassword(String password) 
	{
		this.password = password;
	}

	@Override
	public int hashCode()
	{
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

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
	
	@JsonIgnore
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() 
	{
		List<UserRole> users = new ArrayList<>();
		users.add(permission);
		return users;
	}
	
	@Override
	public String getPassword() 
	{
		return this.password;
	}

	@JsonIgnore
	@Override
	public String getUsername() 
	{
		return this.email;
	}
	
	@JsonIgnore
	@Override
	public boolean isAccountNonExpired() 
	{
		return true;
	}
	
	@JsonIgnore
	@Override
	public boolean isAccountNonLocked() 
	{
		return true;
	}
	
	@JsonIgnore
	@Override
	public boolean isCredentialsNonExpired() 
	{
		return true;
	}

	@JsonIgnore
	@Override
	public boolean isEnabled() 
	{
		return this.active;
	}

}
