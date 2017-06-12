package br.com.projeto.application.restful;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.domain.entity.Location;
import br.com.projeto.domain.service.LocationService;

@RestController
@RequestMapping("location")
public class LocationRestController 
{
	@Autowired
	LocationService locationService;

	@RequestMapping(value = "/insertLocation", method = RequestMethod.POST)
	public void insertLocation(@RequestBody Location location)
	{
		System.out.println(location.getCodLocation());
		locationService.insertLocation(location);
	}
	
	@RequestMapping(value = "/listAllLocation", method = RequestMethod.GET)
	public List<Location> listAllLocation()
	{
		return locationService.listAllLocation();
	}
	
	@RequestMapping(value = "/listAllSubLocation/{id}", method = RequestMethod.GET)
	public List<Location> listAllSubLocation(@PathVariable("id") Long id)
	{
		return locationService.listAllSubLocation(id);
	}
	
	@RequestMapping(value = "/findLocationById/{id}", method = RequestMethod.GET)
	public Location findLocationById(@PathVariable Long id)
	{
		return locationService.findLocationById(id);
	}
	
	@RequestMapping(value = "/deleteLocation/{id}", method = RequestMethod.DELETE)
	public void deleteLocation(@PathVariable Long id)
	{
		locationService.deleteLocation(id);
	}
	
	@RequestMapping(value = "/updateLocation", method = RequestMethod.PUT)
	public void updateLocation(@RequestBody Location location)
	{
		locationService.updateLocation(location);
	}
	
}