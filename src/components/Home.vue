<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-form>
        <v-text-field append-icon="fa-search" @keyup="search($event)" name="search" label="Escolha o seu deputado estadual"
          type="text"></v-text-field>
        <v-layout align-center justify-center row wrap>
          <v-flex v-if="!detail" :key="cand.NUMERO" v-for="cand in candidatos" xs6 :id="'card-' + cand.NUMERO" @click="showDetail(cand)">
            <v-card class="elevation-1 pa-3">
              <v-card-title>
                <v-flex xs4 sm3 md2>
                  <v-avatar size="50" color="grey lighten-4">
                    <img src="/static/anonymous.jpeg" alt="avatar">
                  </v-avatar>
                </v-flex>
                <v-flex xs8 sm9 md10>
                  <span class="headline">{{ cand.NUMERO }}</span><br>
                  <span>{{ cand.NOME }}</span><br>
                  <span>{{ cand.PARTIDO }}</span>
                </v-flex>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
        <v-slide-y-transition mode="out-in">
          <v-card v-if="detail && candidato" class="elevation-1 pa-3">
            <v-card-title>
              <v-flex xs4 sm3 md2>
                <v-avatar size="50" color="grey lighten-4">
                  <img src="/static/anonymous.jpeg" alt="avatar">
                </v-avatar>
              </v-flex>
              <v-flex xs8 sm9 md10>
                <span class="headline">{{ candidato.NUMERO }}</span><br>
                <span>{{ candidato.NOME }}</span><br>
                <span>{{ candidato.PARTIDO }}</span>
              </v-flex>
            </v-card-title>
            <v-card-actions>
              <v-btn @click="detail = false" block color="error">CANCELAR</v-btn>
              <v-btn block color="white">BRANCO</v-btn>
              <v-btn @click="confirmarVoto" block color="success">CONFIRMA</v-btn>
            </v-card-actions>
          </v-card>
        </v-slide-y-transition>
      </v-form>
    </v-slide-y-transition>
       <v-snackbar
        v-model="snackbar"
        color="success"
      >Seu voto foi computado com sucesso!</v-snackbar>
  </v-container>
</template>

<script>
  import axios from 'axios';

  // axios.get('http://192.168.0.21:8080/datasnap/rest/TServerMethods1/getcandidatos/DE')
  //   .then(function (response) {
  //     console.log(response.data.bpi);
  //     console.log(response.status);
  //     console.log(response.statusText);
  //     console.log(response.headers);
  //     console.log(response.config);
  //   });

  export default {
    data() {
      return {
        candidatos: [{
          "NUMERO": 30,
          "NOME": "JUCA BALA",
          "CARGO": "DE",
          "VICE": "VICE 2",
          "PARTIDO": "PPP",
          "COLIGACAO": "SEILA2",
          "ELEICAO": 2018
        }, {
          "NUMERO": 80,
          "NOME": "FULANO",
          "CARGO": "DE",
          "VICE": "VICE 2",
          "PARTIDO": "PPP",
          "COLIGACAO": "SEILA2",
          "ELEICAO": 2018
        }],
        detail: false,
        candidato: null,
        snackbar: false,
      }
    },
    mounted() {
      // this.candidatos.map(function (ca) {
      //   var o = Object.assign({}, ca);
      //   o.visible = true;
      //   return o;
      // })
    },
    methods: {
      search: function (event) {
        event = event.target.value.toUpperCase();

        for (let i = 0; i < this.candidatos.length; i++) {
          if (this.candidatos[i].NUMERO.toString().toUpperCase().indexOf(event) > -1 || this.candidatos[i].NOME.toString()
            .toUpperCase().indexOf(event) > -1) {
            document.getElementById('card-' + this.candidatos[i].NUMERO).style.display = "";
          } else {
            document.getElementById('card-' + this.candidatos[i].NUMERO).style.display = "none";
          }
        }
      },
      showDetail: function (candidato) {
        this.detail = true;
        this.candidato = candidato;
      },
      confirmarVoto: function() {
        this.snackbar = true;
        this.detail = false;
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */

</style>
