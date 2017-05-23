package br.com.projeto.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.model.Equipamento;
import br.com.projeto.repository.EquipamentoRepository;

@Service
@Transactional
public class EquipamentoService {
	
	@Autowired
	private EquipamentoRepository equipamentos;
	
	@Transactional
	public void gravar(Equipamento equipamento){
		equipamentos.save(equipamento);
	}
	
	

}
