package br.com.projeto.application.restful;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.domain.entity.Location;
import br.com.projeto.domain.entity.User;
import br.com.projeto.domain.service.LocationService;
/**
 * 
 * @author André
 *
 */
@RestController
@RequestMapping("location")
public class LocationRestController 
{
	@Autowired
	LocationService locationService;
	/**
	 * 
	 * @param location
	 */
	@CrossOrigin
	@RequestMapping(value = "/insertLocation", method = RequestMethod.POST)
	public void insertLocation(@RequestBody Location location)
	{
		System.out.println(location.getCodLocation());
		System.out.println(location.getResponsible().getName());
		locationService.insertLocation(location);
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
	@CrossOrigin
	@RequestMapping(value = "/listLocationsByFilters/{page}/{size}/{property}/{order}/{filter} ", method = RequestMethod.GET)
	public Page<Location> listLocationsByFilters(@PathVariable int page, @PathVariable int size,
											     @PathVariable String property, @PathVariable String order,
											     @PathVariable String filter)
	{
		Page<Location> locations =  locationService.listLocationsByFilters(page, size, property, order, filter);
		return locations;
	}
	@CrossOrigin
	@RequestMapping(value = "/listAllLocation", method = RequestMethod.GET)
	public List<Location> listAllLocation()
	{
		return locationService.listAllLocation();
	}
	
	@CrossOrigin
	@RequestMapping(value = "/listLocations/{page}/{size}/{property}/{order} ", method = RequestMethod.GET)
	public Page<Location> listLocations(@PathVariable int page, @PathVariable int size,
							    @PathVariable String property, @PathVariable String order)
	{
		Page<Location> locations =  locationService.listLocations(page, size, property, order);
		return locations;
	}
	/**
	 * 
	 * @param id
	 * @return
	 */
	@CrossOrigin
	@RequestMapping(value = "/listAllSubLocation/{id}", method = RequestMethod.GET)
	public List<Location> listAllSubLocation(@PathVariable("id") Long id)
	{
		return locationService.listAllSubLocation(id);
	}
	/**
	 * 
	 * @param id
	 * @return
	 */
	@CrossOrigin
	@RequestMapping(value = "/findLocationById/{id}", method = RequestMethod.GET)
	public Location findLocationById(@PathVariable Long id)
	{
		return locationService.findLocationById(id);
	}
	/**
	 * 
	 * @param id
	 */
	@CrossOrigin
	@RequestMapping(value = "/deleteLocation/{id}", method = RequestMethod.DELETE)
	public void deleteLocation(@PathVariable Long id)
	{
		locationService.deleteLocation(id);
	}
	/**
	 * 
	 * @param location
	 */
	@CrossOrigin
	@RequestMapping(value = "/updateLocation", method = RequestMethod.PUT)
	public void updateLocation(@RequestBody Location location)
	{
		locationService.updateLocation(location);
	}
	
}
