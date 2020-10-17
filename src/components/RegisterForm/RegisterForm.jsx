import React, {useState} from "react";
import {Button, FormControlLabel, Switch, TextField} from "@material-ui/core"


function RegisterForm({sendForm, validateCpf, dname}){
  const cpfBaseError = {valid: true, msg: ""}
  const [name, setName] = useState(dname)
  const [lastName, setLastName] = useState('')
  const [cpf, setCpf] = useState('')
  const [promotion, setPromotion] = useState(true)
  const [newsletter, setNewsletter] = useState(false)
  const [erros, setErros] = useState({cpf: cpfBaseError})

	return(
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        sendForm({name, lastName, cpf, promotion, newsletter});
      }}
    >
      <TextField value={name} onChange={(evt) => setName(evt.target.value)}
        id="first-name" label="Nome" variant="outlined" fullWidth margin="normal"/>

      <TextField value={lastName} onChange={(evt) => setLastName(evt.target.value)}
        id="last-name" label="Sobrenome" variant="outlined" fullWidth margin="normal"/>

      <TextField value={cpf} onChange={(evt) => setCpf(evt.target.value)}
        error={!erros.cpf.valid} helperText={erros.cpf.msg}
        onBlur={(evt) => setErros({cpf: validateCpf(cpf)})}
        id="cpf" label="CPF" variant="outlined" fullWidth margin="normal"/>

      <FormControlLabel control={<Switch onChange={(evt) => setPromotion(evt.target.checked)}
        checked={promotion} name="promotion" color="primary" />} label="Promoção" />

      <FormControlLabel control={<Switch onChange={(evt) => setNewsletter(evt.target.checked)}
        checked={newsletter} name="newsletter" color="primary" />} label="Novidades" />

      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
	)
}

export default RegisterForm;