import { Component, OnInit } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import * as toastr from 'toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'loterias-diamante';
  jogos: any[] = [];

  detalhes: { titulo: string; descricao: string } = {
    descricao: '',
    titulo: '',
  };

  mostrarDetalhes = false;

  public numeroDeJogos: number = 0;

  ngOnInit() {}

  gerarJogosSimples() {
    if (this.numeroDeJogos <= 0) {
      toastr.options.progressBar = true;
      toastr.warning(
        'Favor preencher campo quantidade de jogos',
        'Erro qtd 0 ou menor',
        { timeOut: 8000 }
      );
      return;
    } else if (this.numeroDeJogos > 31) {
      toastr.options.progressBar = true;
      toastr.warning('Numero máximo de jogos permitido é 31', '', {
        timeOut: 8000,
      });
      return;
    }

    const jogos23_15 = env.combinacoes23_15;
    const jogos22_14 = env.combinacoes22_14;

    let jogos_simples = [...jogos22_14, ...jogos23_15];
    let jogos_simples_selecionados = [];

    while (jogos_simples_selecionados.length < this.numeroDeJogos) {
      const grupoSorteado = Math.floor(Math.random() * jogos_simples.length);
      jogos_simples_selecionados.push(jogos_simples[grupoSorteado].jogo);
      jogos_simples = jogos_simples.filter(
        (j) => j != jogos_simples[grupoSorteado]
      );
    }

    jogos_simples_selecionados.forEach((element) => {
      let jogo: number[] = [];
      let numerosRestante = element;
      while (jogo.length < 15) {
        const sorteado = Math.floor(Math.random() * numerosRestante.length);
        jogo.push(numerosRestante[sorteado]);
        numerosRestante = numerosRestante.filter(
          (n) => n != numerosRestante[sorteado]
        );
      }
      jogo.sort((a, b) => a - b);
      this.jogos.push(jogo);
    });
    toastr.options.progressBar = true;
    let msg = '';
    msg =
      this.numeroDeJogos === 1
        ? 'jogo gerado com sucesso!'
        : 'Jogos gerados com sucesso!';
    toastr.success(`${this.numeroDeJogos} ${msg}`, '', { timeOut: 8000 });
  }

  gerarJogos8_14() {
    const jogos22_14 = env.combinacoes22_14;
    jogos22_14.forEach((element) => {
      let jogo: number[] = [];
      let numerosRestante = element.jogo;
      while (jogo.length < 15) {
        const sorteado = Math.floor(Math.random() * numerosRestante.length);
        jogo.push(numerosRestante[sorteado]);
        numerosRestante = numerosRestante.filter(
          (n) => n != numerosRestante[sorteado]
        );
      }
      jogo.sort((a, b) => a - b);
      this.jogos.push(jogo);
    });
    toastr.options.progressBar = true;
    toastr.success('8 Jogos gerados com sucesso', '', { timeOut: 8000 });
  }

  gerarJogos23_15() {
    const jogos23_15 = env.combinacoes23_15;
    jogos23_15.forEach((element) => {
      let jogo: number[] = [];
      let numerosRestante = element.jogo;
      while (jogo.length < 15) {
        const sorteado = Math.floor(Math.random() * numerosRestante.length);
        jogo.push(numerosRestante[sorteado]);
        numerosRestante = numerosRestante.filter(
          (n) => n != numerosRestante[sorteado]
        );
      }
      jogo.sort((a, b) => a - b);
      this.jogos.push(jogo);
    });
    toastr.options.progressBar = true;
    toastr.success('23 Jogos gerados com sucesso', '', { timeOut: 8000 });
  }

  ocultarDetalhes(): void {
    this.mostrarDetalhes = false;
  }

  limparJogos() {
    this.jogos = [];
    toastr.options.progressBar = true;
    toastr.info('Zerado os jogos salvos', '', { timeOut: 8000 });
  }

  mostrarDetalhesTipoJogo(numero: number): void {
    switch (numero) {
      case 0:
        this.detalhes.titulo = 'Combinações aleatórias';
        this.detalhes.descricao =
          'Junção dos tipos Simples 22 para 14 e Simples 23 para 15 gerando a quantidade de jogos desejadas de acordo com a quantidade informada.';
        this.mostrarDetalhes = true;
        break;
      case 1:
        this.detalhes.titulo = '8 combinações de 22 números';
        this.detalhes.descricao =
          'As 8 combinações de 22 números que acertam no mínimo os 14 pontos em todos os concurso da Lotofácil';
        this.mostrarDetalhes = true;
        break;
      case 2:
        this.detalhes.titulo = '23 combinações de 23 números';
        this.detalhes.descricao =
          'As 23 combinações de 23 números que acertam os 15 pontos em todos os concurso da Lotofácil';
        this.mostrarDetalhes = true;
        break;
      default:
        break;
    }
  }
}
