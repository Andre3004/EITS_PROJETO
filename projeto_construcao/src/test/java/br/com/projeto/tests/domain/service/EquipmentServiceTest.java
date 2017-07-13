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

import br.com.projeto.domain.entity.Equipment;
import br.com.projeto.domain.entity.Location;
import br.com.projeto.domain.service.EquipmentService;
import br.com.projeto.domain.service.LocationService;
import br.com.projeto.tests.config.IntegrationTests;


@Sql({
	"dataset/location/locations_data.sql",
	"dataset/equipment/equipments_data.sql"
})
public class EquipmentServiceTest extends IntegrationTests{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 */
	@Autowired
	LocationService locationService;
	/**
	 * 
	 */
	@Autowired
	EquipmentService equipmentService;
	
	/*-------------------------------------------------------------------
	 *				 		      TESTS
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 */
	@Test
	@Sql({
		"dataset/location/locations_data.sql",
		"dataset/equipment/equipments_data.sql"
	})
	public void insertAndListEquipmentMustPass() 
	{
		Equipment equipment = new Equipment();
		
		Location location = locationService.findLocationById(new Long(1));
		
		equipment.setName("Fogão");
		equipment.setDescription("4 bocas");
		equipment.setLocation(location);
		
		equipmentService.insertEquipment(equipment);
		
		Assert.assertNotNull(equipment.getName());
		Assert.assertNotNull(equipment.getDescription());
		Assert.assertNotNull(equipment.getLocation());
		
		Page<Equipment> equipments = equipmentService.listMainEquipmentsByFilters(0, 5, "name", "ASC", "Fogão");
		Assert.assertEquals(equipments.getContent().get(0).getName(), "Fogão");
	}
	/**
	 * 
	 */
	@Test(expected = DataIntegrityViolationException.class)
	@Sql({
		"dataset/equipment/equipments_data.sql"
	})
	public void insertEquipmentMustFail() 
	{
		Equipment equipment = new Equipment();
		equipment.setName("Armário");
		equipmentService.insertEquipment(equipment);	
	}
	/**
	 * 
	 */
	@Test
	@Sql({
		"dataset/equipment/equipments_data.sql"
	})
	public void findEquipmentByIdMustPass() 
	{
		Equipment equipment = equipmentService.findEquipmentById(new Long(1));
		assertNotNull(equipment);
		System.out.println(equipment.getName());
		assertTrue(equipment.getName().equals("Ar condicionado"));
	}
	/**
	 * 
	 */
	@Test
	@Sql({
		"dataset/equipment/equipments_data.sql"
	})
	public void updateEquipmentMustPass() 
	{
		Equipment equipmentNew = equipmentService.findEquipmentById(new Long(2));
		Equipment equipment = equipmentService.findEquipmentById(new Long(2));
		
		equipment.setName("Cama");
		
		equipmentService.updateEquipment(equipment);
		
		assertNotEquals(equipment.getName(), equipmentNew.getName());
		assertFalse(equipmentNew.equals(equipment.getName()));
	}
	/**
	 * 
	 */
	@Test(expected = DataIntegrityViolationException.class)
	@Sql({
		"dataset/equipment/equipments_data.sql"
	})
	public void updateEquipmentMustFail() 
	{
		Equipment equipment = equipmentService.findEquipmentById(new Long(2));
		
		equipment.setLocation(null);
		
		equipmentService.updateEquipment(equipment);
	}
	/**
	 * 
	 */
	@Test
	@WithUserDetails("administrator.001@email.com.br")
	@Sql({
		"dataset/equipment/equipments_data.sql"
	})
	public void deleteEquipmentMustPass() 
	{
		equipmentService.deleteEquipment(new Long(6));
		
		Equipment equipment = equipmentService.findEquipmentById(new Long(6));
		
		assertTrue(equipment == null);
	}
	/**
	 * 
	 */
	@Test(expected = DataIntegrityViolationException.class)
	@WithUserDetails("administrator.001@email.com.br")
	@Sql({
		"dataset/equipment/equipments_data.sql"
	})
	public void deleteEquipmentMustFail() 
	{
		equipmentService.deleteEquipment(new Long(4));
	}
	/**
	 * 
	 */
	@Test
	@Sql({
		"dataset/equipment/equipments_data.sql"
	})
	public void listMainEquipmentsByFiltersMustPass() 
	{
		Page<Equipment> equipments = equipmentService.listMainEquipmentsByFilters(0, 5, "name", "ASC", "Ar");
		assertTrue(equipments.getNumberOfElements() == 1);
	}
	/**
	 * 
	 */
	@Test
	@Sql({
		"dataset/equipment/equipments_data.sql"
	})
	public void listSubEquipmentByFilterMustPass() 
	{
		Page<Equipment> equipments = equipmentService.listSubEquipmentByFilter(0, 5, "name", "ASC", "condensador", new Long(1));
		assertTrue(equipments.getNumberOfElements() == 1);
	}
	/**
	 * 
	 */
	@Test
	@Sql({
		"dataset/equipment/equipments_data.sql"
	})
	public void ListNonAssociatedEquipmentByFilterMustPass() 
	{
		Page<Equipment> equipments = equipmentService.ListNonAssociatedEquipmentByFilter(0, 5, "name", "ASC",new Long(1), "a");
		assertTrue(equipments.getNumberOfElements() == 3);
	}
	
	
	
	
	
	
}
