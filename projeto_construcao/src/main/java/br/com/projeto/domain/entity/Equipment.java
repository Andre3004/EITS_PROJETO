package br.com.projeto.domain.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.hibernate.envers.Audited;
import org.hibernate.validator.constraints.NotBlank;


/**
 * 
 * @author André
 * @category Entity
 *
 */
@Entity
@Table(name = "equipment")
@Audited
public class Equipment implements Serializable 
{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 3842479366289837100L;

	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/
	
	/**
	 * 
	 */
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id; 
	
	/**
	 * 
	 */
	@Column(length = 50, unique=true)
	@NotBlank
	private String name;
	
	/**
	 * 
	 */
	@Column(length = 144)
	@NotBlank
	private String description;
	
	/**
	 * Location of equipment
	 */
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name = "location_id")
	private Location location;
	
	/**
	 * Main equipment
	 */
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name = "equipment_id")
	private Equipment equipment;
	
	/**
	 * 
	 */
	@Column(name = "file_path", length = 144)
	private String filePath;

	
	/*-------------------------------------------------------------------
	 *						GETTERS AND SETTERS
	 *-------------------------------------------------------------------*/
	
	public String getFilePath() 
	{
		return filePath;
	}

	public void setFilePath(String filePath) 
	{
		this.filePath = filePath;
	}

	public Long getId() 
	{
		return id;
	}

	public void setId(Long id) 
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

	public String getDescription() 
	{
		return description;
	}

	public void setDescription(String description) 
	{
		this.description = description;
	}

	public Location getLocation() 
	{
		return location;
	}

	public void setLocation(Location location) 
	{
		this.location = location;
	}

	public Equipment getEquipment() 
	{
		return equipment;
	}

	public void setEquipment(Equipment equipment) 
	{
		this.equipment = equipment;
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
		result = prime * result + ((id == null) ? 0 : id.hashCode());
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
		Equipment other = (Equipment) obj;
		if (id == null) 
		{
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	
	
	

	
	
}
