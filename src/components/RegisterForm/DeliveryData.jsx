import React, {useState} from "react";
import {Button, TextField} from "@material-ui/core"


function DeliveryData(){
  const [postalCode, setPostalCode] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [province, setProvince] = useState('')
  const [city, setCity] = useState('')

  return(
    <form>
      <TextField value={postalCode} onChange={(evt) => setPostalCode(evt.target.value)}
        id="postalCode" label="CEP" type="number" variant="outlined" fullWidth margin="normal"/>

      <TextField value={address} onChange={(evt) => setAddress(evt.target.value)}
        id="address" label="Endereço" type="text" variant="outlined" fullWidth margin="normal"/>

      <TextField value={number} onChange={(evt) => setNumber(evt.target.value)}
        id="number" label="Número" type="number" variant="outlined" margin="normal"/>

      <TextField value={province} onChange={(evt) => setProvince(evt.target.value)}
        id="province" label="Estado" type="text" variant="outlined" margin="normal"/>

      <TextField value={city} onChange={(evt) => setCity(evt.target.value)}
        id="city" label="Cidade" type="text" variant="outlined" fullWidth margin="normal"/>

      <Button type="submit" variant="contained" color="primary" fullWidth >Finalizar Cadastro</Button>
    </form>
  );
}

export default DeliveryData;