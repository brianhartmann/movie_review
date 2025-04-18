package com.example.movie_review.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    // Configure HTTP security to allow all endpoints and disable login form
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests()
                .requestMatchers("/**").permitAll() // Allow access to all URLs without authentication
                .and()
                .csrf().disable() // Disable CSRF protection (for simplicity)
                .formLogin().disable() // Disable the login form
                .httpBasic().disable(); // Disable HTTP Basic authentication
        return http.build();
    }

    // Customize Web Security (optional)
    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring().requestMatchers("/h2-console/**"); // Ignore security for H2 console
    }
}


