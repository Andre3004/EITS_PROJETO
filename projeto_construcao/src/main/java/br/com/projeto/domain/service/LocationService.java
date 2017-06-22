package br.com.projeto.domain.service;

import java.util.List;

import org.directwebremoting.annotations.RemoteMethod;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import br.com.projeto.domain.entity.Location;
import br.com.projeto.domain.repository.ILocationRepository;

@Service
@RemoteProxy(name = "locationService")
public class LocationService 
{
	
	@Autowired
	private ILocationRepository locationRepository;
	
	@RemoteMethod
	public void insertLocation(Location location)
	{
		locationRepository.save(location);
	}
	
	public List<Location> listAllLocation()
	{
		return locationRepository.findAll();
	}

	public List<Location> listAllSubLocation(Long id) 
	{
		return locationRepository.findAllSubLocations(id);
	}

	public Location findLocationById(Long id) 
	{
		return locationRepository.findOne(id);
	}
	

	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public void deleteLocation(Long id) 
	{
		locationRepository.delete(id);
	}

	public void updateLocation(Location location) 
	{
//		if ( location.getLocation().getId() == location.getId() )
//		{
//			throw new IllegalArgumentException("Nâo foi possível salvar a localização.");
//		}
		locationRepository.saveAndFlush(location);
	}
	
	

}
