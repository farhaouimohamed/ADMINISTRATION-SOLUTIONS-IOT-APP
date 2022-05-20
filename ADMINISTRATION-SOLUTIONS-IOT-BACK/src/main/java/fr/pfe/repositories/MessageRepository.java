package fr.pfe.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.pfe.entities.Message;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long>{

}
