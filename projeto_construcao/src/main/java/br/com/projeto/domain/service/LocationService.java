package br.com.projeto.domain.service;

import java.util.List;

import org.directwebremoting.annotations.RemoteMethod;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import br.com.projeto.domain.entity.Location;
import br.com.projeto.domain.repository.ILocationRepository;

/**
 * 
 * @author André
 * @category Service
 * 
 */
@Service
@RemoteProxy(name = "locationService")
public class LocationService 
{
	
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/
	//Repository
	/**
	 * 
	 */
	@Autowired
	private ILocationRepository locationRepository;
	
	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/
	
	/**
	 * 
	 * @param location
	 */
	@RemoteMethod
	public void insertLocation(Location location)
	{
		locationRepository.save(location);
	}
	
	/**
	 * 
	 * @return
	 */
	public List<Location> listAllLocation()
	{
		return locationRepository.findAll();
	}

	/**
	 * 
	 * @param id
	 * @return
	 */
	public List<Location> listAllSubLocation(Long id) 
	{
		return locationRepository.findAllSubLocations(id);
	}

	/**
	 * 
	 * @param id
	 * @return
	 */
	public Location findLocationById(Long id) 
	{
		return locationRepository.findOne(id);
	}
	

	/**
	 * 
	 * @param id
	 */
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public void deleteLocation(Long id) 
	{
		locationRepository.delete(id);
	}

	/**
	 * 
	 * @param location
	 */
	public void updateLocation(Location location) 
	{
//		if ( location.getLocation().getId() == location.getId() )
//		{
//			throw new IllegalArgumentException("Nâo foi possível salvar a localização.");
//		}
//		if ( (location.getLocation().getLocation().getLocation()).equals(null)  )
//		{
//			throw new IllegalArgumentException("A localização selecionada é uma localização principal");
//		}
		
//		if ( !( (location.getLocation()).equals(null) )  )
//		{
//			Long id = location.getId();
//			Long idMain = location.getLocation().getId();
//			List<Location> locations = locationRepository.findAllSubLocations(idMain);
//			Boolean existe = false;
//			for (int i=0; locations.size() < i; i++)
//			{
//				if (  )
//			}
//			throw new IllegalArgumentException("A localização selecionada é uma localização principal");
//		}
		locationRepository.saveAndFlush(location);
	}
    /**
     * 
     * @param page
     * @param size
     * @param property
     * @param order
     * @param filter
     * @return
     */
	public Page<Location> listLocationsByFilters(int page, int size, String property, String order, String filter) 
	{
		Direction asc;
		
		if (order.equals("ASC"))
		{
			asc = Direction.ASC;
		}
		else
		{
			asc = Direction.DESC;
		}
		PageRequest pageable = new PageRequest(page, size, asc, property);
	    System.out.println(pageable);
		return locationRepository.listLocationsByFilters(filter.toLowerCase(), pageable);
	}
    /**
     * 
     * @param page
     * @param size
     * @param property
     * @param order
     * @return
     */
	public Page<Location> listLocations(int page, int size, String property, String order) 
	{
		Direction asc;
		
		if (order.equals("ASC"))
		{
			asc = Direction.ASC;
		}
		else
		{
			asc = Direction.DESC;
		}
		
		PageRequest pageable = new PageRequest(page, size, asc, property);
	    System.out.println(pageable);
		return locationRepository.findAll(pageable);
	}
	
	

}
