package br.com.projeto.infrastructure;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import br.com.projeto.domain.entity.User;

@Component
public class Mailer 
{
	
	@Autowired
	private JavaMailSender mailSender;
	
	public void send(User user)
	{
		SimpleMailMessage mensagem = new SimpleMailMessage();
		mensagem.setFrom("andreferreira.junior235@gmail.com");
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
