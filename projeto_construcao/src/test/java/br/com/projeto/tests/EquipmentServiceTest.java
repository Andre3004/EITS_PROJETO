package br.com.projeto.tests;

import static org.junit.Assert.*;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;

import br.com.projeto.domain.entity.Equipment;
import br.com.projeto.domain.entity.Location;
import br.com.projeto.domain.service.EquipmentService;
import br.com.projeto.domain.service.LocationService;

public class EquipmentServiceTest extends IntegrationTests{

	@Autowired 
	EquipmentService equipmentService;
	
	@Autowired
	LocationService locationService;

	@Test
	public void insertMustPass() 
	{
		Equipment equipment = new Equipment();
		Location location = new Location();
		
		location = locationService.findLocationById(new Long(1));	
		
		equipment.setName("Fogao");
		equipment.setDescription("Fogao Daco");
		equipment.setEquipment(null);
		equipment.setLocation(location);
		
		equipmentService.insertEquipment(equipment);
		
		Assert.assertNotNull(equipment.getName());
		Assert.assertNotNull(equipment.getDescription());
		Assert.assertNotNull(equipment.getLocation());
		
	}
	
	@Test(expected = DataIntegrityViolationException.class)
	public void insertNotMustPass() 
	{
		Equipment equipment = new Equipment();
		
		equipment.setName(null);
		equipment.setDescription(null);
		equipment.setEquipment(null);
		equipment.setLocation(null);
		
		equipmentService.insertEquipment(equipment);	
	}
	
	@Test
	public void deleteMustPass() 
	{
		equipmentService.deleteEquipment(new Long(21));
		
		Equipment equipment = equipmentService.findEquipmentById(new Long(21));
		
		assertTrue(equipment == null);
	}
	
	@Test(expected = EmptyResultDataAccessException.class)
	public void deleteNotMustPass() 
	{
		equipmentService.deleteEquipment(new Long(0));
	}
	
	@Test
	public void findMustPass() 
	{
		Equipment equipment = equipmentService.findEquipmentById(new Long(2));
		assertNotNull(equipment);
	}
	
	@Test
	public void updateMustPass() 
	{
		Equipment equipmentNew = equipmentService.findEquipmentById(new Long(3));
		Equipment equipment = equipmentService.findEquipmentById(new Long(3));
		
		equipment.setName("Espuma de ar condicionad0o");
		
		equipmentService.updateEquipment(equipment);
		
		assertNotEquals(equipment.getName(), equipmentNew.getName());
		assertFalse(equipmentNew.equals(equipment.getName()));
	}

}
