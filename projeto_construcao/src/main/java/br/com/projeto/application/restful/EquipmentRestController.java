package br.com.projeto.application.restful;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.projeto.domain.entity.Equipment;
import br.com.projeto.domain.service.EquipmentService;

/**
 * 
 * @author André
 *
 */
@RestController
@RequestMapping("equipment")
public class EquipmentRestController 
{
	
	@Autowired
	EquipmentService equipmentService;
	/**
	 * 
	 * @param equipment
	 */
	@CrossOrigin
	@RequestMapping(value = "/insertEquipment", method = RequestMethod.POST)
	public void insertEquipment(@RequestBody Equipment equipment)
	{
		equipmentService.insertEquipment(equipment);
	}
	/**
	 * 
	 * @return List<Equipment>
	 */
	@CrossOrigin
	@RequestMapping(value = "/listAllEquipment", method = RequestMethod.GET)
	public List<Equipment> listAllEquipment()
	{
		return equipmentService.listAllEquipment();
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
	@RequestMapping(value = "/listEquipmentsByFilters/{page}/{size}/{property}/{order}/{filter} ", method = RequestMethod.GET)
	public Page<Equipment> listEquipmentsByFilters(@PathVariable int page, @PathVariable int size,
											     @PathVariable String property, @PathVariable String order,
											     @PathVariable String filter)
	{
		Page<Equipment> equipments =  equipmentService.listEquipmentsByFilters(page, size, property, order, filter);
		return equipments;
	}
	
	/**
	 * 
	 * @param page
	 * @param size
	 * @param property
	 * @param order
	 * @return
	 */
	@CrossOrigin
	@RequestMapping(value = "/listEquipments/{page}/{size}/{property}/{order} ", method = RequestMethod.GET)
	public Page<Equipment> listEquipments(@PathVariable int page, @PathVariable int size,
							    @PathVariable String property, @PathVariable String order)
	{
		Page<Equipment> equipments =  equipmentService.listEquipments(page, size, property, order);
		return equipments;
	}
	/**
	 * 
	 * @param id
	 * @return
	 */
	@CrossOrigin
	@RequestMapping(value = "/listAllSubEquipment/{id}", method = RequestMethod.GET)
	public List<Equipment> listAllSubEquipment(@PathVariable("id") Long id)
	{
		return equipmentService.listAllSubEquipment(id);
	}
	/**
	 * 
	 * @param id
	 * @return
	 */
	@CrossOrigin
	@RequestMapping(value = "/findEquipmentById/{id}", method = RequestMethod.GET)
	public Equipment findEquipmentById(@PathVariable Long id)
	{
		return equipmentService.findEquipmentById(id);
	}
	/**
	 * 
	 * @param id
	 */
	@CrossOrigin
	@RequestMapping(value = "/deleteEquipment/{id}", method = RequestMethod.DELETE)
	public void deleteEquipment(@PathVariable Long id)
	{
		equipmentService.deleteEquipment(id);
	}
	/**
	 * 
	 * @param equipment
	 */
	@CrossOrigin
	@RequestMapping(value = "/updateEquipment", method = RequestMethod.PUT)
	public void updateEquipment(@RequestBody Equipment equipment)
	{
		equipmentService.updateEquipment(equipment);
	}
	
	@CrossOrigin
	@ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/upload",method = RequestMethod.POST, headers = "Content-Type: multipart/form-data")
	public void upload(@RequestParam("file") MultipartFile file) throws IOException {

        byte[] bytes;

        if (!file.isEmpty()) 
        {
             bytes = file.getBytes();
        }

        System.out.println(String.format("receive %s from %s", file.getOriginalFilename()));
    }
}
