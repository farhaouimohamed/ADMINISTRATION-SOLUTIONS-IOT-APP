package fr.pfe.dto;

import java.util.Date;

import lombok.Data;

@Data
public class WebClientAccountDto {
	
	private Long idWebClientAccount;
	private String username;
	private String email;
	private String password;
	private String rawPassword;
	private Date date_creation;
	private Date date_expiration;
	private String code_pays;
	private int pool;
	private int telephone;
	private String area;
	private String notificationSubquery;
	private boolean mobileNotif;
	private double deviceFeeByDay;
	private double accountFeeByMonth;
	private double deviceFeePerMonth;
	private double simCardFeePerMonth;
	private RoleDto role;
	
	public WebClientAccountDto() {
		super();
	}
	
	public WebClientAccountDto(String rawPassword, Date date_creation, Date date_expiration, String code_pays, int pool,
			int telephone, String area, String notificationSubquery, boolean mobileNotif, double deviceFeeByDay,
			double accountFeeByMonth, double deviceFeePerMonth, double simCardFeePerMonth) {
		super();
		this.rawPassword = rawPassword;
		this.date_creation = date_creation;
		this.date_expiration = date_expiration;
		this.code_pays = code_pays;
		this.pool = pool;
		this.telephone = telephone;
		this.area = area;
		this.notificationSubquery = notificationSubquery;
		this.mobileNotif = mobileNotif;
		this.deviceFeeByDay = deviceFeeByDay;
		this.accountFeeByMonth = accountFeeByMonth;
		this.deviceFeePerMonth = deviceFeePerMonth;
		this.simCardFeePerMonth = simCardFeePerMonth;
	}
}
