document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('calendar');
  const modal = document.getElementById('modal');
  const modalDetails = document.getElementById('modalDetails');

  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'pt-br',
    selectable: true,
    buttonText: {
      today: 'Hoje'
    },
    events: 'api/carregar.php',
    eventClick: function(info) {
      const props = info.event.extendedProps;
      modalDetails.innerHTML = `
        <h3>${info.event.title}</h3>
        <p><b>Especialidade:</b> ${props.especialidade}</p>
        <p><b>Horário:</b> ${props.horario}</p>
        <p><b>Preço:</b> R$ ${props.preco}</p>
        <button onclick="excluir('${info.event.id}')">🗑️ Excluir</button>
      `;
      modal.style.display = 'block';
    },
    dateClick: function(info) {
      const nome = prompt("Nome do Especialista:");
      if (!nome) return;
      const especialidade = prompt("Especialidade:");
      const horario = prompt("Horário de Atendimento:");
      const preco = prompt("Preço da Consulta:");
      const id = Date.now().toString();
      const cor = '#' + Math.floor(Math.random()*16777215).toString(16);

      const evento = {
        id: id,
        title: `${nome} - ${especialidade}`,
        start: info.dateStr,
        color: cor,
        extendedProps: { especialidade, horario, preco }
      };

      fetch('api/salvar.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(evento)
      }).then(() => calendar.refetchEvents());
    }
  });

  calendar.render();

  window.excluir = function(id) {
    const senha = prompt("Digite a senha:");
    fetch('api/excluir.php', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ id, senha })
    }).then(res => res.json())
      .then(data => {
        if (data.status === 'ok') {
          calendar.refetchEvents();
          modal.style.display = 'none';
        } else {
          alert("Erro: " + data.mensagem);
        }
      });
  };

  document.getElementById('closeModal').onclick = () => modal.style.display = 'none';
});
