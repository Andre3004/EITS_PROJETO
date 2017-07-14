package br.com.projeto.domain.service;

import java.util.List;

import org.directwebremoting.annotations.RemoteMethod;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.domain.entity.Equipment;
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
@Transactional
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
	 * @return 
	 */
	@RemoteMethod
	public ResponseEntity<String> insertLocation(Location location)
	{
		if ( location == null )
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Localização nula");
		}
		if ( ( locationRepository.findByCodLocationAndId(location.getCodLocation().toLowerCase(), new Long(0)) != null ) ) 
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Já existe uma localização com este código localizador");
		}
		locationRepository.save(location);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body("Localização salva com sucesso!");
	}
	/**
	 * 
	 * @param id
	 * @return
	 */
	@Transactional(readOnly = true)
	@RemoteMethod
	public Location findLocationById(Long id) 
	{
		return locationRepository.findOne(id);
	}
	/**
	 * 
	 * @param id
	 * @return 
	 */
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<String> deleteLocation(Long id) 
	{
		Location location = locationRepository.findOne(id);
		if ( location == null )
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Localização nula");
		}
		locationRepository.delete(id);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body("Localização deletada com sucesso!");
	}

	/**
	 * 
	 * @param location
	 * @return 
	 */
	public ResponseEntity<String> updateLocation(Location location) 
	{
		if ( location == null )
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Localização nula");
		}
		if ( ( locationRepository.findByCodLocationAndId(location.getCodLocation().toLowerCase(), location.getId()) != null ) ) 
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Já existe uma localização com este código localizador");
		}
		locationRepository.saveAndFlush(location);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body("Localização salva com sucesso!");
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
	@Transactional(readOnly = true)
    public Page<Location> listMainLocationsByFilters(int page, int size, String property, String order, String filter) 
	{
		Direction asc;
		if ( filter.compareToIgnoreCase("null") == 0 )
		{
			filter = "";
		}
		if (order.equals("ASC"))
		{
			asc = Direction.ASC;
		}
		else
		{
			asc = Direction.DESC;
		}
		PageRequest pageable = new PageRequest(page, size, asc, property);
		return locationRepository.listMainLocationsByFilters(filter.toLowerCase(), pageable);
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
	@Transactional(readOnly = true)
    public Page<Location> listLocationsByFilters(int page, int size, String property, String order, String filter) 
 	{
 		Direction asc;
 		if ( filter.compareToIgnoreCase("null") == 0 )
 		{
 			filter = "";
 		}
 		if (order.equals("ASC"))
 		{
 			asc = Direction.ASC;
 		}
 		else
 		{
 			asc = Direction.DESC;
 		}
 		PageRequest pageable = new PageRequest(page, size, asc, property);
 		return locationRepository.listLocationsByFilters(filter.toLowerCase(), pageable);
 	} 
	/**
	 * 
	 * @param page
	 * @param size
	 * @param property
	 * @param order
	 * @param id
	 * @param filter
	 * @return
	 */
	@Transactional(readOnly = true)
	public Page<Location> ListNonAssociatedLocationByFilter(int page, int size, String property, String order, Long id, String filter) 
	{
		Long idLocationAssociated = new Long(0);
		Direction asc;
		if ( filter.compareToIgnoreCase("null") == 0 )
		{
			filter = "";
		}
		if ( id == null )
		{
			id = new Long(0);
		}
		if (order.equals("ASC"))
		{
			asc = Direction.ASC;
		}
		else
		{
			asc = Direction.DESC;
		}
		PageRequest pageable = new PageRequest(page, size, asc, property);
		if ( ( id != 0 ) && ( id != null) )
		{
			if ( (locationRepository.findOne(id).getLocation() != null ) )
			{
				idLocationAssociated = locationRepository.findOne(id).getLocation().getId();
			}
		}
		return locationRepository.ListNonAssociatedLocationByFilter(filter.toLowerCase(), id, idLocationAssociated, pageable);	
	}
	/**
	 * 
	 * @param page
	 * @param size
	 * @param property
	 * @param order
	 * @param filter
	 * @param id
	 * @return
	 */
	@Transactional(readOnly = true)
	public Page<Location> listSubLocationByFilter(int page, int size, String property, String order, String filter,Long id) 
	{
		Direction asc;
		if ( filter.compareToIgnoreCase("null") == 0 )
		{
			filter = "";
		}
		if ( id == null )
		{
			id = new Long(0);
		}
		if (order.equals("ASC"))
		{
			asc = Direction.ASC;
		}
		else
		{
			asc = Direction.DESC;
		}
		PageRequest pageable = new PageRequest(page, size, asc, property);
		return locationRepository.listSubLocationByFilter(filter.toLowerCase(), id, pageable);	
	}

}
