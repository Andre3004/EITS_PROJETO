package br.com.projeto.infrastructure;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import br.com.projeto.domain.entity.User;

/**
 * 
 * @author André
 * @category Component
 *
 */
@Component
@PropertySource({"classpath:env/email.properties"})
public class Mailer 
{
	/*-------------------------------------------------------------------
	 *                          ATTRIBUTES
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 */
	@Autowired
	private JavaMailSender mailSender;
	
	/**
	 * 
	 */
	@Autowired
	private Environment env;
	
	/*-------------------------------------------------------------------
	 *                          BEHAVIORS
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 * @param user
	 */
	public void send(User user)
	{
		SimpleMailMessage mensagem = new SimpleMailMessage();
		mensagem.setFrom(env.getProperty("mail.mailTest"));
		mensagem.setTo(user.getEmail());
		mensagem.setSubject("Cadastro realizado com sucesso!!");
		String email = "Obrigado por relizar o cadastro\n "+ 
					   "Usuario: " + user.getEmail() +"\n"+ 
					   "Senha: " + user.getPassword()+ "\n" +
					   "----------------------------------------";
		mensagem.setText(email);
		
		mailSender.send(mensagem);
		
	}

}
