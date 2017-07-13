package br.com.projeto.tests.domain.service;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.context.jdbc.Sql;

import br.com.projeto.domain.entity.Location;
import br.com.projeto.domain.entity.User;
import br.com.projeto.domain.service.LocationService;
import br.com.projeto.domain.service.UserService;
import br.com.projeto.tests.config.IntegrationTests;


@Sql({
	"dataset/user/users_data.sql",
	"dataset/location/locations_data.sql"
})
public class LocationServiceTest extends IntegrationTests{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 */
	@Autowired
	UserService userService;
	/**
	 * 
	 */
	@Autowired
	LocationService locationService;
	
	/*-------------------------------------------------------------------
	 *				 		      TESTS
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 */
	@Test
	@Sql({
		"dataset/user/users_data.sql",
		"dataset/location/locations_data.sql"
	})
	public void insertAndListLocationMustPass() 
	{
		Location location = new Location();
		
		User user = userService.findUserById(new Long(2));
		
		location.setCodLocation("Cataratas");
		location.setResponsible(user);
		
		locationService.insertLocation(location);
		
		Assert.assertNotNull(location.getCodLocation());
		Assert.assertNotNull(location.getResponsible());
		
		Page<Location> locations = locationService.listLocationsByFilters(0, 5, "codLocation", "ASC", "Cataratas");
		Assert.assertEquals(locations.getContent().get(0).getCodLocation(), "Cataratas");
	}
	/**
	 * 
	 */
	@Test(expected = DataIntegrityViolationException.class)
	@Sql({
		"dataset/location/locations_data.sql"
	})
	public void insertLocationMustFail() 
	{
		Location location = new Location();
		location.setCodLocation("Parque das aves");
		locationService.insertLocation(location);	
	}
	/**
	 * 
	 */
	@Test
	@Sql({
		"dataset/location/locations_data.sql"
	})
	public void findLocationByIdMustPass() 
	{
		Location location = locationService.findLocationById(new Long(1));
		assertNotNull(location);
	}
	/**
	 * 
	 */
	@Test
	@Sql({
		"dataset/location/locations_data.sql"
	})
	public void updateMustPass() 
	{
		Location locationNew = locationService.findLocationById(new Long(2));
		Location location = locationService.findLocationById(new Long(2));
		
		location.setCodLocation("Andar 3");
		
		locationService.updateLocation(location);
		
		assertNotEquals(location.getCodLocation(), locationNew.getCodLocation());
		assertFalse(locationNew.equals(location.getCodLocation()));
	}
	/**
	 * 
	 */
	@Test(expected = DataIntegrityViolationException.class)
	@Sql({
		"dataset/location/locations_data.sql"
	})
	public void updateMustFail() 
	{
		Location location = locationService.findLocationById(new Long(2));
		
		location.setResponsible(null);
		
		locationService.updateLocation(location);
	}
	/**
	 * 
	 */
	@Test
	@WithUserDetails("administrator.001@email.com.br")
	@Sql({
		"dataset/location/locations_data.sql"
	})
	public void deleteMustPass() 
	{
		locationService.deleteLocation(new Long(6));
		
		Location location = locationService.findLocationById(new Long(6));
		
		assertTrue(location == null);
	}
	/**
	 * 
	 */
	@Test(expected = DataIntegrityViolationException.class)
	@WithUserDetails("administrator.001@email.com.br")
	@Sql({
		"dataset/location/locations_data.sql"
	})
	public void deleteMustFail() 
	{
		locationService.deleteLocation(new Long(4));
	}
	/**
	 * 
	 */
	@Test
	@Sql({
		"dataset/location/locations_data.sql"
	})
	public void listMainLocationsByFiltersMustPass() 
	{
		Page<Location> locations = locationService.listMainLocationsByFilters(0, 5, "codLocation", "ASC", "templo");
		assertTrue(locations.getNumberOfElements() == 1);
	}
	/**
	 * 
	 */
	@Test
	@Sql({
		"dataset/location/locations_data.sql"
	})
	public void listSubLocationByFilterMustPass() 
	{
		Page<Location> locations = locationService.listSubLocationByFilter(0, 5, "codLocation", "ASC", "a", new Long(1));
		assertTrue(locations.getNumberOfElements() == 1);
	}
	/**
	 * 
	 */
	@Test
	@Sql({
		"dataset/location/locations_data.sql"
	})
	public void ListNonAssociatedLocationByFilterMustPass() 
	{
		Page<Location> locations = locationService.ListNonAssociatedLocationByFilter(0, 5, "codLocation", "ASC",new Long(1), "p");
		assertTrue(locations.getNumberOfElements() == 2);
	}
	
}