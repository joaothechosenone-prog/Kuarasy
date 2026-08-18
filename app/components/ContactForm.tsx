"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <label>Nome<input name="nome" required autoComplete="name" /></label>
      <label>E-mail<input type="email" name="email" required autoComplete="email" /></label>
      <label>Telefone<input type="tel" name="telefone" autoComplete="tel" /></label>
      <label>Assunto<select name="assunto"><option>Reserva</option><option>Restaurante</option><option>Evento</option><option>Outro</option></select></label>
      <label className="field-wide">Mensagem<textarea name="mensagem" rows={5} required /></label>
      <button className="button button--green" type="submit">Enviar mensagem</button>
      {sent && <p className="form-note" role="status">Mensagem preparada. Na versão final, este formulário será conectado ao WordPress.</p>}
    </form>
  );
}
