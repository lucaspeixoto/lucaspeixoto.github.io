$(function () {

	const $form = $('#chat-form');
	const $input = $('#message-input');
	const $messages = $('#messages');
	const $btnClear = $('#btn-clear');
	const $btnUndo = $('#btn-undo');

	let mensagensSalvas = JSON.parse(localStorage.getItem('chatMensagens')) || [];

	function adicionarMensagemNaTela(texto) {
			const $msg = $('<div></div>').addClass('message').text(texto);
			$messages.append($msg);
			$messages.scrollTop($messages[0].scrollHeight);
	}

	function salvarMensagem(texto) {
		mensagensSalvas.push(texto);
		localStorage.setItem('chatMensagens', JSON.stringify(mensagensSalvas));
	}

	function renderMensagens() {
			$messages.empty();
			mensagensSalvas.forEach(m => {
				const $msg = $('<div></div>')
					.addClass('message')
					.addClass(m.tipo === 'bot' ? 'bot' : '')
					.text(m.texto);
				$messages.append($msg);
			});
			$messages.scrollTop($messages[0].scrollHeight);
	}
			
	renderMensagens();

	$form.on('submit', function (e) {
		e.preventDefault();
		const texto = $input.val().trim();
		if (texto !== '') {
			adicionarMensagemNaTela(texto);
			salvarMensagem({ texto, tipo: 'user' });
			$input.val('');
		}
	});

	$btnClear.on('click', function () {
		if (confirm("Tem certeza que deseja apagar todas as mensagens?")) {
			mensagensSalvas = [];
			localStorage.removeItem('chatMensagens');
			renderMensagens();
		}
	});

	$btnUndo.on('click', function () {
			if (mensagensSalvas.length === 0) return;
			mensagensSalvas.pop();
			localStorage.setItem('chatMensagens', JSON.stringify(mensagensSalvas));
			$messages.children().last().remove();
		});

	// Mostrar ou ocultar menu flutuante
	$('#open-actions').on('click', function (e) {
			e.stopPropagation(); 
			$('#action-menu').toggleClass('hidden');
	});

	// Rolar dados ao clicar nas opções
	$('.action-option').on('click', function () {
			const action = $(this).data('action');
			let resultado = '';

			if (action === 'roll-1d6') {
			const roll = Math.floor(Math.random() * 6) + 1;
			resultado = `🎲: ${roll}`;
			} else if (action === 'roll-2d6') {
			const roll1 = Math.floor(Math.random() * 6) + 1;
			const roll2 = Math.floor(Math.random() * 6) + 1;
			resultado = `🎲: ${roll1} e ${roll2}`;
			}

			// Mostrar resultado como resposta no chat (lado esquerdo)
			const $msg = $('<div></div>').addClass('message bot').text(resultado);
			$('#messages').append($msg);
			$('#messages').scrollTop($('#messages')[0].scrollHeight);
			$('#action-menu').addClass('hidden');
			salvarMensagem({ texto: resultado, tipo: 'bot' });
	});

	// Toggle menu de configurações (engrenagem)
	$('#open-settings').on('click', function (e) {
			e.stopPropagation();
			$('#settings-menu').toggleClass('hidden');
	});
	
	// Fechar menu de configurações e de ação ao clicar fora
	$(document).on('click', function (e) {
			if (!$(e.target).closest('#settings-container').length) {
					$('#settings-menu').addClass('hidden');
			}
			if (!$(e.target).closest('#action-menu').length) {
					$('#action-menu').addClass('hidden');
			}
	});

	//Instalação do PWA
	let deferredPrompt;

	window.addEventListener("beforeinstallprompt", (e) => {
		e.preventDefault();
		deferredPrompt = e;
		$("#install-banner").show(); // Exibe o banner
	});

	$("#btn-install").on("click", async function () {
		if (deferredPrompt) {
			deferredPrompt.prompt();
			const { outcome } = await deferredPrompt.userChoice;
			if (outcome === "accepted") {
				$("#install-banner").hide();
			}
			deferredPrompt = null;
		}
	});

	$("#close-install-banner").on("click", function () {
		$("#install-banner").hide(); // Fecha o banner
	});

});