package br.com.projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.model.Localizacao;

@Repository
@Transactional
public interface LocalizacaoRepository extends JpaRepository<Localizacao, Long> {

}
