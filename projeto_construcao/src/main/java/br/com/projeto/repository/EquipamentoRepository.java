package br.com.projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.model.Equipamento;

@Repository
@Transactional
public interface EquipamentoRepository extends JpaRepository<Equipamento, Long>{

}
