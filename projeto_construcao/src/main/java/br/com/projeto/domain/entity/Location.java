package br.com.projeto.domain.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotBlank;

@Entity
@Table(name = "location")
//@Audited
public class Location 
{
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id; 
	
	@Column(length = 50, unique=true)
	@NotBlank
	private String codLocation;

	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name = "responsible_id")
	@NotNull
	private User responsible;

	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name = "vice_responsible_id")
	private User viceResponsible;

	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name = "location_id")
	private Location location;
	
	
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCodLocation() {
		return codLocation;
	}

	public void setCodLocation(String codLocation) {
		this.codLocation = codLocation;
	}

	public User getResponsible() {
		return responsible;
	}

	public void setResponsible(User responsible) {
		this.responsible = responsible;
	}

	public User getViceResponsible() {
		return viceResponsible;
	}

	public void setViceResponsible(User viceResponsible) {
		this.viceResponsible = viceResponsible;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	@Override
	public int hashCode() 
	{
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
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
		Location other = (Location) obj;
		if (id == null) 
		{
			if (other.id != null)
				return false;
		} 
		else if (!id.equals(other.id))
			return false;
		return true;
	}

	
	
	
	
}
