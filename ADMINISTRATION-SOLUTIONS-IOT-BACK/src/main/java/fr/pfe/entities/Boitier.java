package fr.pfe.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import fr.pfe.enumeration.EtatBoitier;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor
@Table(name = "BOITIER")
public class Boitier implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "BOITIER_ID", length = 20)
	private long idBoitier;

	@Column(name = "LABEL", length = 100)
	private String label;

	@Column(name = "NUM_BOITIER")
	private long numBoitier;

	@Enumerated(EnumType.STRING)
	private EtatBoitier etatBoitier;

	@Column(name = "stream_id")
	private Integer streamId;

	@Column(name = "rawstream_id")
	private Long rawstream_id;
}
