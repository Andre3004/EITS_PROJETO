package br.com.projeto.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.model.Localizacao;
import br.com.projeto.repository.LocalizacaoRepository;

@Service
@Transactional
public class LocalizacaoService {
	
	@Autowired
	private LocalizacaoRepository Localizacoes;
	
	@Transactional
	public void gravar(Localizacao localizacao){
		Localizacoes.save(localizacao);
	}

}
