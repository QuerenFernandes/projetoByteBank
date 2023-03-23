const graficoDolar = document.getElementById('graficoDolar');

const graficoParaDolar = new Chart(graficoDolar, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Dólar',
        data: [],
        borderWidth: 1
      }]
    },
  });

//define o intervalo para algo acontecer.
setInterval(() => conectaAPI(), 5000);

  async function conectaAPI(){
    const conecta = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
    const conectaConvertido = await conecta.json();
    let tempo = geraHorario();
    let valor = conectaConvertido.USDBRL.ask;
    adicionarDados(graficoParaDolar, tempo, valor);
  }

  function geraHorario(){
    let data = new Date();
    let horario = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
    console.log(horario);
    return horario;
  }


  function adicionarDados(grafico, legenda, dados){
    grafico.data.labels.push(legenda);
    grafico.data.datasets.forEach((dataset) => {
        dataset.data.push(dados);
    })
    grafico.update();
  }
  