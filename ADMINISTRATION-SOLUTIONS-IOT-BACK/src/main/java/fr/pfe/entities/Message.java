package fr.pfe.entities;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
@Table(name = "messages")
public class Message implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String objet;
	
	private String contenu;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "idUserSource")
	private User source;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "idUserDestinataire")
	private User destinataire;
}
