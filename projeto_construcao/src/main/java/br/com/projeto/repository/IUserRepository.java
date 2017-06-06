package br.com.projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.model.User;

@Repository
@Transactional
public interface IUserRepository extends JpaRepository<User, Long>
{
	@Query("select u from User u where u.email = :email")
	public User findByEmail(@Param("email") String email);
	
	/*EntityGraphCrudRepository<T, Serializable>*/

}
