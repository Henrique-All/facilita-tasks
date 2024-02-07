<template>
  <main class="main-auth">
    <div class="left">
      <div class="content">
        <img src="../../components/icons/logo.svg" alt="" />
        <p>FACILITA <span>TASKS</span></p>
        <span class="sub-title">Gestão de tarefas pessoais</span>
      </div>
    </div>
    <div class="right">
      <form class="form-login">
        <h1 class="title">Entre com seus dados de acesso.</h1>
        <div class="user-credencial">
          <p>Nome de usuário ou e-mail:</p>
          <input type="text" />
        </div>

        <div class="password">
          <p>Senha:</p>
          <input type="password" />
        </div>

        <button type="button" class="submit">Entrar</button>

        <a href="#" class="reset-password">Esqueci minha senha</a>
      </form>
    </div>
  </main>
</template>
<script>
export default {}
</script>
<style scoped>
.main-auth {
  display: flex;
  width: 100vw;
  height: 100vh;
}

.left {
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 100%;
  background-color: #2693ff;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  img {
    width: 120px;
  }

  p {
    font-weight: 700;
    font-size: 50px;

    span {
      font-weight: 200;
    }
  }

  .sub-title {
    font-size: 18px;
    font-weight: 700;
  }
}

.right {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  height: 100%;

  .form-login {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 350px;

    .title {
      font-size: 18px;
    }

    .user-credencial {
      display: flex;
      flex-direction: column;
      color: rgba(0, 0, 0, 0.7);
      font-weight: 700;
      font-size: 15px;
      gap: 5px;
    }

    .password {
      display: flex;
      flex-direction: column;
      color: rgba(0, 0, 0, 0.7);
      font-weight: 700;
      font-size: 15px;
      gap: 5px;
    }

    .submit {
      padding: 20px;
      background-color: #1ad18f;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      color: #ffffff;
      font-weight: 700;
      font-size: 18px;
      transition: ease-in 200ms;
    }

    .submit:active {
      background-color: rgba(25, 219, 148, 0.486);
    }

    .reset-password {
      margin: 20px 0 0 0;
      color: #2693ff;
      cursor: pointer;
      font-weight: 700;
    }
  }

  input {
    padding: 15px;
    width: 100%;
    border-radius: 5px;
    border: 2px solid #bfdaeb;
  }
  input:focus {
    outline-color: #2693ff;
  }
}
</style>
