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
@Table(name = "equipment")
public class Equipment 
{
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id; 
	
	private String name;
	private String description;
	
	private  String archivePath;
	
	@ManyToOne
	@JoinColumn(name = "location_id")
	private Location location;
	
	@ManyToOne
	@JoinColumn(name = "sub_equipment_id")
	private Equipment subEquipment;
	
	@OneToMany(mappedBy = "subEquipment")
	private List<Equipment> equipments;

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

	public String getDescription() 
	{
		return description;
	}

	public void setDescription(String description) 
	{
		this.description = description;
	}

	public String getArchivePath()
	{
		return archivePath;
	}

	public void setArchivePath(String archivePath) 
	{
		this.archivePath = archivePath;
	}

	public Location getLocation() 
	{
		return location;
	}

	public void setLocation(Location location) 
	{
		this.location = location;
	}

	public Equipment getSubEquipment() 
	{
		return subEquipment;
	}

	public void setSubEquipment(Equipment subEquipment) 
	{
		this.subEquipment = subEquipment;
	}

	public List<Equipment> getEquipments() 
	{
		return equipments;
	}

	public void setEquipments(List<Equipment> equipments) 
	{
		this.equipments = equipments;
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
		Equipment other = (Equipment) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	

	
	
}
