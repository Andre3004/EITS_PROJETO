package br.com.projeto.application.restful;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.domain.entity.Equipment;
import br.com.projeto.domain.service.EquipmentService;


@RestController
@RequestMapping("equipment")
public class EquipmentRestController 
{
	
	@Autowired
	EquipmentService equipmentService;

	@CrossOrigin
	@RequestMapping(value = "/insertEquipment", method = RequestMethod.POST)
	public void insertEquipment(@RequestBody Equipment equipment)
	{
		equipmentService.insertEquipment(equipment);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/listAllEquipment", method = RequestMethod.GET)
	public List<Equipment> listAllEquipment()
	{
		return equipmentService.listAllEquipment();
	}
	
	@CrossOrigin
	@RequestMapping(value = "/listAllSubEquipment/{id}", method = RequestMethod.GET)
	public List<Equipment> listAllSubEquipment(@PathVariable("id") Long id)
	{
		return equipmentService.listAllSubEquipment(id);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/findEquipmentById/{id}", method = RequestMethod.GET)
	public Equipment findEquipmentById(@PathVariable Long id)
	{
		return equipmentService.findEquipmentById(id);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/deleteEquipment/{id}", method = RequestMethod.DELETE)
	public void deleteEquipment(@PathVariable Long id)
	{
		equipmentService.deleteEquipment(id);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/updateEquipment", method = RequestMethod.PUT)
	public void updateEquipment(@RequestBody Equipment equipment)
	{
		equipmentService.updateEquipment(equipment);
	}
	
}
