package fr.pfe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.pfe.entities.User;
import fr.pfe.repositories.UserRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/all")
	@PreAuthorize("hasRole('ADMIN')")
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	@PostMapping("/add")
	@PreAuthorize("hasRole('ADMIN')")
    void addUser(@RequestBody User user) {
        userRepository.save(user);
    }
	
}
