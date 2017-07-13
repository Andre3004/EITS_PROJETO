package br.com.projeto.application.restful;

import java.io.IOException;
import java.util.List;

import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.projeto.domain.entity.Equipment;
import br.com.projeto.domain.entity.Location;
import br.com.projeto.domain.service.EquipmentService;

/**
 * 
 * @author André
 * @category RestController
 * 
 */

@RestController
@RequestMapping("api/equipment")
public class EquipmentRestController 
{
	/*-------------------------------------------------------------------
	 * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/
	//Service
	/**
	 * 
	 */
	@Autowired
	EquipmentService equipmentService;
	
	private static final String APPLICATION_PDF = "application/pdf";
	
	/*-------------------------------------------------------------------
	 * 		 					RESOURCES
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 * @param equipment
	 * @return 
	 */
	@CrossOrigin
	@RequestMapping(value = "/insertEquipment", method = RequestMethod.POST)
	public ResponseEntity<String> insertEquipment(@RequestBody Equipment equipment)
	{
		return equipmentService.insertEquipment(equipment);
	}
	/**
	 * 
	 * @param id
	 * @param filter
	 * @return
	 */
	@CrossOrigin
	@RequestMapping(value = {"/ListNonAssociatedEquipmentByFilter/{page}/{size}/{property}/{order}/{id}/{filter}"}, method = RequestMethod.GET)
	public Page<Equipment> ListNonAssociatedEquipmentByFilter(@PathVariable Long id, @PathVariable int page, @PathVariable int size,
															  @PathVariable String property, @PathVariable String order, 
															  @PathVariable String filter)
	{
		return equipmentService.ListNonAssociatedEquipmentByFilter(page, size, property, order, id, filter);
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
	@RequestMapping(value = "/listMainEquipmentsByFilters/{page}/{size}/{property}/{order}/{filter} ", method = RequestMethod.GET)
	public Page<Equipment> listMainEquipmentsByFilters(@PathVariable int page, @PathVariable int size,
												       @PathVariable String property, @PathVariable String order,
												       @PathVariable String filter)
	{ 
		return  equipmentService.listMainEquipmentsByFilters(page, size, property, order, filter);
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
	@RequestMapping(value = "/clearFileEquipment/{id}", method = RequestMethod.DELETE)
	public void clearFileEquipment(@PathVariable Long id)
	{
		equipmentService.clearFileEquipment(id);
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
	 * @return 
	 */
	@CrossOrigin
	@RequestMapping(value = "/updateEquipment", method = RequestMethod.PUT)
	public ResponseEntity<String> updateEquipment(@RequestBody Equipment equipment)
	{
		return equipmentService.updateEquipment(equipment);
	}

	/**
	 * 
	 * @param file
	 * @param id
	 * @return
	 */
	@CrossOrigin
	@RequestMapping(value = "/uploadFile/{id}", method = RequestMethod.POST)
	public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file, @PathVariable Long id)
	{
		return equipmentService.uploadFile(file, id);
    }
	
	/**
	 * 
	 * @param response
	 * @param id
	 * @throws IOException
	 */
    @RequestMapping(value = "/downloadFile/{id}", method = RequestMethod.GET, produces = APPLICATION_PDF)
    public void downloadFile(HttpServletResponse response, @PathVariable Long id) throws IOException 
    {
        equipmentService.downloadFile(response, id);
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
	@RequestMapping(value = "/listSubEquipmentByFilter/{page}/{size}/{property}/{order}/{filter}/{id}", method = RequestMethod.GET)
	public Page<Equipment> listSubEquipmentByFilter(@PathVariable int page, @PathVariable int size,
											        @PathVariable String property, @PathVariable String order,
											        @PathVariable String filter, @PathVariable Long id)
	{
		return equipmentService.listSubEquipmentByFilter(page, size, property, order, filter, id);
	}

}
