package br.com.projeto.application.configuration;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import br.com.projeto.infrastructure.Mailer;

/**
 * 
 * @author André
 * @category Configuration
 *
 */
@ComponentScan( basePackageClasses = Mailer.class)
@PropertySource({"classpath:env/email.properties"})
@Configuration
public class MailConfig
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 */
	@Autowired
	private Environment env;
	
	/*-------------------------------------------------------------------
	 * 		 						BEANS
	 *-------------------------------------------------------------------*/	
	/**
	 * 
	 * @return
	 */
	@Bean
	public JavaMailSender mailSender() 
	{
		JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
		mailSender.setHost(env.getProperty("mail.Host"));
		mailSender.setPort(25);
		mailSender.setUsername(env.getProperty("mail.Username"));
		mailSender.setPassword(env.getProperty("mail.Password"));
		
		Properties props = new Properties();
		props.put("mail.transport.protocol", "smtp");
		props.put("mail.smtp.auth", true);
		props.put("mail.smtp.starttls.enable", false);
		props.put("mail.debug", false);
		props.put("mail.smtp.connectiontimeout", 10000); // miliseconds

		mailSender.setJavaMailProperties(props);
		
		return mailSender;
	}
}
