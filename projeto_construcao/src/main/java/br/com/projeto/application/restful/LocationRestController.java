package br.com.projeto.application.restful;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.domain.entity.Equipment;
import br.com.projeto.domain.entity.Location;
import br.com.projeto.domain.entity.User;
import br.com.projeto.domain.service.LocationService;
/**
 * 
 * @author André
 * @category RestController
 * 
 */
@RestController
@RequestMapping("api/location")
public class LocationRestController 
{
	/*-------------------------------------------------------------------
	 * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/
	//Service
	/**
	 * 
	 */
	@Autowired
	LocationService locationService;
	
	/*-------------------------------------------------------------------
	 * 		 					RESOURCES
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 * @param id
	 * @param page
	 * @param size
	 * @param property
	 * @param order
	 * @param filter
	 * @return
	 */
	@CrossOrigin
	@RequestMapping(value = {"/ListNonAssociatedLocationByFilter/{page}/{size}/{property}/{order}/{id}/{filter}"}, method = RequestMethod.GET)
	public Page<Location> ListNonAssociatedLocationByFilter(  @PathVariable Long id, @PathVariable int page, @PathVariable int size,
															  @PathVariable String property, @PathVariable String order, 
															  @PathVariable String filter)
	{
		return locationService.ListNonAssociatedLocationByFilter(page, size, property, order, id, filter);
	}
	/**
	 * 
	 * @param location
	 * @return 
	 */
	@CrossOrigin
	@RequestMapping(value = "/insertLocation", method = RequestMethod.POST)
	public ResponseEntity<String> insertLocation(@RequestBody Location location)
	{
		return locationService.insertLocation(location);
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
		return locationService.listLocationsByFilters(page, size, property, order, filter);
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
	@RequestMapping(value = "/listMainLocationsByFilters/{page}/{size}/{property}/{order}/{filter} ", method = RequestMethod.GET)
	public Page<Location> listMainLocationsByFilters(@PathVariable int page, @PathVariable int size,
											     @PathVariable String property, @PathVariable String order,
											     @PathVariable String filter)
	{
		return locationService.listMainLocationsByFilters(page, size, property, order, filter);
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
	@CrossOrigin
	@RequestMapping(value = "/listSubLocationByFilter/{page}/{size}/{property}/{order}/{filter}/{id}", method = RequestMethod.GET)
	public Page<Location> listSubLocationByFilter(@PathVariable int page, @PathVariable int size,
											      @PathVariable String property, @PathVariable String order,
											      @PathVariable String filter, @PathVariable Long id)
	{
		return locationService.listSubLocationByFilter(page, size, property, order, filter, id);
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
	public ResponseEntity<String> updateLocation(@RequestBody Location location)
	{
		return locationService.updateLocation(location);
	}
	
}
