import React, {useState} from "react";
import {Button, TextField} from "@material-ui/core"


function UserData(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return(
    <form>
      <TextField value={email} onChange={(evt) => setEmail(evt.target.value)}
        id="email" label="Email" type="email" variant="outlined" fullWidth margin="normal"/>

      <TextField value={password} onChange={(evt) => setPassword(evt.target.value)}
        id="password" label="Senha" type="password" variant="outlined" fullWidth margin="normal"/>

      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
  );
}

export default UserData;