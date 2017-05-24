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
@Table(name = "location")
public class Location 
{
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id; 
	
	private String location;
	
	private int codLocation;

	@ManyToOne
	@JoinColumn(name = "responsible_id")
	private User responsible;
	
	@ManyToOne
	@JoinColumn(name = "vice_responsible_id")
	private User viceResponsible;
	
	@ManyToOne
	@JoinColumn(name = "sub_location_id")
	private Location subLocation;
	
	@OneToMany(mappedBy = "location")
	private List<Location> locations;
	
	@OneToMany(mappedBy = "location")
	private List<Equipment> equipments;

	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public int getCodLocation() {
		return codLocation;
	}

	public void setCodLocation(int codLocation) {
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

	public Location getSubLocation() {
		return subLocation;
	}

	public void setSubLocation(Location subLocation) {
		this.subLocation = subLocation;
	}

	public List<Location> getLocations() {
		return locations;
	}

	public void setLocations(List<Location> locations) {
		this.locations = locations;
	}

	public List<Equipment> getEquipments() {
		return equipments;
	}

	public void setEquipments(List<Equipment> equipments) {
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
		Location other = (Location) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	
	
	
}
