export const validateNome = nome => {
  let valido = true;
  if (nome === "" || nome === "undefined" || nome === null) {
    valido = false;
    let msg = "nome é obrigatório";
    return { valido, msg };
  }
  return valido;
};

export const validateCelular = celular => {
  let valido = true;
  if (celular === "" || celular === null || celular === undefined) {
    valido = false;
    let msg = "celular é obrigatório";
    return { valido, msg };
  }

  if (celular.length !== 9) {
    valido = false;
    let msg = "Celular deve conter 9 dígitos";
    return { valido, msg };
  }

  const onlyNumbersRegex = new RegExp("^[0-9]*$");
  let result = celular.match(onlyNumbersRegex);
  if (result === null) {
    valido = false;
    let msg = "Só aceitamos números";
    return { valido, msg };
  }
  return valido;
};

export const validateEmail = email => {
  let valido = true;

  if (email === undefined || email === "" || email === null) {
    valido = false;
    let msg = "Email é obrigatório";
    return { valido, msg };
  }

  let checkArroba = email.trim().split("@");
  console.log(checkArroba);
  if (checkArroba.length === 1) {
    valido = false;
    let msg = "Email sem @";
    return { valido, msg };
  }

  if (checkArroba.length > 2) {
    valido = false;
    let msg = "Exceço de @'s?";
    return { valido, msg };
  }

  return valido;
};

export const validateSenha = senha => {
  let valido = true;
  if (senha === undefined || senha === "" || senha === null) {
    valido = false;
    let msg = "senha é obrigatória";
    return { valido, msg };
  }
  return valido;
};

export const validateConfirmarSenha = (confirmarSenha, senha) => {
  let valido = true;
  if (
    confirmarSenha === undefined ||
    confirmarSenha === "" ||
    confirmarSenha === null
  ) {
    valido = false;
    let msg = "confirmar senha é obrigatório";
    return { valido, msg };
  }

  if (confirmarSenha !== senha) {
    valido = false;
    let msg = "Senhas não coincidem";
    return { valido, msg };
  }

  return valido;
};

export const validateEndereco = endereco => {
  let valido = true;
  if (endereco === null || endereco === "" || endereco === undefined) {
    valido = false;
    let msg = "Endereço é obrigatório";
    return { valido, msg };
  }
  return valido;
};
