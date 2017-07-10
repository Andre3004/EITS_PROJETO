package br.com.projeto.tests;

import static org.junit.Assert.*;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;

import br.com.projeto.domain.entity.Location;
import br.com.projeto.domain.entity.User;
import br.com.projeto.domain.service.LocationService;
import br.com.projeto.domain.service.UserService;

public class LocationServiceTest extends IntegrationTests{

	@Autowired
	UserService userService;
	
	@Autowired
	LocationService locationService;

	@Test
	public void insertMustPass() 
	{
		Location location = new Location();
		User user = new User();
//		user = userService.findByEmail("andre.luiz@eits.com.br");	
		
		location.setCodLocation("Cataratas");
		location.setLocation(null);
		location.setResponsible(user);
		location.setViceResponsible(user);
		
		locationService.insertLocation(location);
		
		Assert.assertNotNull(location.getCodLocation());
		Assert.assertNotNull(location.getResponsible());
		Assert.assertNotNull(location.getViceResponsible());
		
	}
	
	@Test(expected = DataIntegrityViolationException.class)
	public void insertNotMustPass() 
	{
		Location location = new Location();
		
		location.setCodLocation(null);
		location.setLocation(null);
		location.setResponsible(null);
		location.setViceResponsible(null);
		
		locationService.insertLocation(location);	
	}
	
	@Test
	public void deleteMustPass() 
	{
		locationService.deleteLocation(new Long(53));
		
		Location location = locationService.findLocationById(new Long(55));
		
		assertTrue(location == null);
	}
	
	@Test(expected = EmptyResultDataAccessException.class)
	public void deleteNotMustPass() 
	{
		locationService.deleteLocation(new Long(0));
	}
	
	@Test
	public void findMustPass() 
	{
		Location location = locationService.findLocationById(new Long(1));
		assertNotNull(location);
	}
	
	@Test
	public void updateMustPass() 
	{
		Location locationNew = locationService.findLocationById(new Long(2));
		Location location = locationService.findLocationById(new Long(2));
		
		location.setCodLocation("Andar 3");
		
		locationService.updateLocation(location);
		
		assertNotEquals(location.getCodLocation(), locationNew.getCodLocation());
		assertFalse(locationNew.equals(location.getCodLocation()));
	}
	
	
	
	
	
}
