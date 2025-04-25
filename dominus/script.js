$(function () {

	const $form = $('#chat-form');
	const $input = $('#message-input');
	const $messages = $('#messages');
	const $btnClear = $('#btn-clear');
	const $btnUndo = $('#btn-undo');

	let mensagensSalvas = JSON.parse(localStorage.getItem('chatMensagens')) || [];

	function adicionarMensagemNaTela(texto) {
			const $msg = $('<div></div>').addClass('message').html(texto);
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
					.html(m.texto);
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

			if (action === 'roll-1d6') 
				
				{
					const roll = Math.floor(Math.random() * 6) + 1;
					resultado = `🎲 ${roll}`;
				} 
			
			else if (action === 'roll-2d6') 
				
				{
					const roll1 = Math.floor(Math.random() * 6) + 1;
					const roll2 = Math.floor(Math.random() * 6) + 1;
					resultado = `🎲🎲 ${roll1} e ${roll2}`;
				} 
			
			if (action === 'ask-oracle') 

				{
					const oracleResponses = [
						"Sim", "Sim e...", "Sim, mas...",
						"Não", "Não, mas...", "Não e..."
					];
					const answer = oracleResponses[Math.floor(Math.random() * oracleResponses.length)];
					resultado = `🔮 ${answer}`
				}
				
			else if (action === 'plot') 
				
				{
					const selectedScenarios = JSON.parse(localStorage.getItem("selectedScenarios")) || [];

					const hasValidPlot = selectedScenarios.some(cenario => {
						return plotEntries[cenario] &&
							plotEntries[cenario]["Something happened"]?.length &&
							plotEntries[cenario]["You need"]?.length &&
							plotEntries[cenario]["Otherwise"]?.length;
					});
				
					if (hasValidPlot) {
						const plot = getRandomPlot(selectedScenarios);
				
						resultado = `
							📜 <strong>Trama</strong><br>
							<strong>Algo aconteceu:</strong> ${plot["Something happened"]}<br>
							<strong>Você precisa:</strong> ${plot["You need"]}<br>
							<strong>Senão:</strong> ${plot["Otherwise"]}
						`;
					} else {
						resultado = `⚠️ Selecione pelo menos um cenário!`;
					}
				} 
			
			else if (action === 'archetype') 
				
				{
					const selectedScenarios = JSON.parse(localStorage.getItem("selectedScenarios")) || [];
					const retorno = getRandomArchetypeFromSingleScenario(selectedScenarios);
				
					if (retorno) {
						let formatted = `🧙 <strong>Personagem</strong><br>`;
						for (const [coluna, valor] of Object.entries(retorno.resultado)) {
							formatted += `<strong>${coluna}:</strong> ${valor}<br>`;
						}
						resultado = formatted;
				} else {
					resultado = `⚠️ Selecione pelo menos um cenário!`;
				}
				
			} 

			else if (action === 'scene') 
				
				{
					const selectedScenarios = JSON.parse(localStorage.getItem("selectedScenarios")) || [];
				
					const hasValidScene = selectedScenarios.some(cenario => {
						return sceneEntries[cenario] &&
							sceneEntries[cenario]["Place"]?.length &&
							sceneEntries[cenario]["Character"]?.length &&
							sceneEntries[cenario]["Event"]?.length;
					});
				
					if (hasValidScene) {
						const scene = getRandomScene(selectedScenarios);
						resultado = `
							🎬 <strong>Cena</strong><br>
							<strong>Lugar:</strong> ${scene["Place"]}<br>
							<strong>Personagem:</strong> ${scene["Character"]}<br>
							<strong>Evento:</strong> ${scene["Event"]}
						`;
					} else {
						resultado = `⚠️ Selecione pelo menos um cenário!`;
					}
				}

			else if (action === 'idea-bank') 
				
				{
					const selectedScenarios = JSON.parse(localStorage.getItem("selectedScenarios")) || [];
				
					const hasValidIdeaBank = selectedScenarios.some(cenario => {
						return ideaBankEntries[cenario] &&
							ideaBankEntries[cenario]["Subject"]?.length &&
							ideaBankEntries[cenario]["Action"]?.length &&
							ideaBankEntries[cenario]["Thing"]?.length &&
							ideaBankEntries[cenario]["Quality"]?.length;
					});
				
					if (hasValidIdeaBank) {
						const idea = getRandomIdeaBank(selectedScenarios);
						resultado = `
							💡 <strong>Ideias</strong><br>
							<strong>Assunto:</strong> ${idea["Subject"]}<br>
							<strong>Ação:</strong> ${idea["Action"]}<br>
							<strong>Coisa:</strong> ${idea["Thing"]}<br>
							<strong>Qualidade:</strong> ${idea["Quality"]}
						`;
					} else {
						resultado = `⚠️ Selecione pelo menos um cenário!`;
					}
				}

			else if (action === 'extras') 
				
				{
					const selectedScenarios = JSON.parse(localStorage.getItem("selectedScenarios")) || [];
				
					const hasValidExtras = selectedScenarios.some(cenario => {
						return extrasEntries[cenario] && Object.keys(extrasEntries[cenario]).length;
					});
				
					if (hasValidExtras) {
						const extras = getRandomExtras(selectedScenarios);
						let formatted = "✨ <strong>Extras</strong><br>";
						for (const [coluna, valor] of Object.entries(extras)) {
							formatted += `<strong>${coluna}:</strong> ${valor}<br>`;
						}
						resultado = formatted;
					} else {
						resultado = `⚠️ Selecione pelo menos um cenário!`;
					}
				}

			// Mostrar resultado como resposta no chat (lado esquerdo)
			const $msg = $('<div></div>').addClass('message bot').html(resultado);
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

	const scenarioList = [
		"Pré-História", "Era do Gelo", "Mitologias", "Espada e Feitiçaria", "Contos de Fadas",
		"Piratas", "Velho Oeste", "Horror Gótico", "Horror Cósmico", "Máfia", "Investigação",
		"Guerra", "Comédia Romântica", "Artes Marciais", "Fantasia Urbana", "Super-Heróis",
		"Tokusatsu", "Cartoons", "Zumbis", "Steampunk", "Cyberpunk", "Dieselpunk", "Solarpunk",
		"Hopepunk", "Ficção Científica", "Fantasia Científica", "Exploração Espacial", "Viagem no Tempo"
	];

	function loadScenarios() {
		const selected = JSON.parse(localStorage.getItem("selectedScenarios")) || [];
		const $container = $(".scenario-list");
		$container.empty();
	
		scenarioList.forEach(name => {
			const id = `scenario-${name}`;
			const checked = selected.includes(name) ? "checked" : "";
			const $item = $(`
				<label class="scenario-item">
					<input type="checkbox" id="${id}" value="${name}" ${checked}>
					${name}
				</label>
			`);
			$container.append($item);
		});
	}

	// Aplica a lógica de limite de 3
	updateCheckboxLimits();

	// A cada clique, atualiza o controle
	$(".scenario-list").on("change", "input[type='checkbox']", function() {
		console.log("Checkbox changed:", this.checked, this.value);
		saveScenarios();
		updateCheckboxLimits();
	});

	function saveScenarios() {
		const selected = $(".scenario-list input[type='checkbox']:checked")
			.map(function() {
				return $(this).val();
			})
			.get();
		localStorage.setItem("selectedScenarios", JSON.stringify(selected));
	}

	function updateCheckboxLimits() {
		const $checkboxes = $(".scenario-list input[type='checkbox']");
		const checkedCount = $checkboxes.filter(":checked").length;
	
		if (checkedCount >= 3) {
			$checkboxes.not(":checked").prop("disabled", true);
		} else {
			$checkboxes.prop("disabled", false);
		}
	}

	// Abrir modal de cenários
	$("#btn-scenarios").on("click", function() {
		loadScenarios();
		updateCheckboxLimits();
    	$("#modal-scenarios").removeClass("hidden");
  	});

	// Fechar modal de cenários
  	$("#close-scenarios-modal").on("click", function() {
	    $("#modal-scenarios").addClass("hidden");
  	});

	// Abrir modal de regras
	$("#btn-rules").on("click", function () {
		$("#modal-rules").removeClass("hidden");
	});
	
	// Fechar modal de regras
	$("#close-rules-modal").on("click", function () {
		$("#modal-rules").addClass("hidden");
	});
  
	// Abrir modal de about
	$("#btn-about").on("click", function () {
		$("#modal-about").removeClass("hidden");
	});
	
	// Fechar modal de about
	$("#close-about-modal").on("click", function () {
		$("#modal-about").addClass("hidden");
	});

	$(".modal").on("click", function (e) {
		if ($(e.target).hasClass("modal")) {
		  	$(this).addClass("hidden");
		}
	});

	function getScenariosText() {
		const selectedScenarios = JSON.parse(localStorage.getItem("selectedScenarios")) || [];
		return selectedScenarios.length > 0 
		  ? `Cenários: ${selectedScenarios.join(", ")}\n\n`
		  : "Cenários: Nenhum\n\n";
	}

	$("#btn-export-pdf").on("click", function () {
		const element = document.getElementById("messages");
		const scenariosText = getScenariosText(); // Obtém os cenários selecionados
	  
		// Clona o elemento original para preservar o layout e os estilos
		const clonedElement = element.cloneNode(true);
	  
		// Cria um contêiner para os cenários e adiciona ao topo do clone
		const scenariosContainer = document.createElement("div");
		scenariosContainer.style.fontWeight = "bold";
		scenariosContainer.style.color = "black";
		scenariosContainer.innerHTML = scenariosText.replace(/\n/g, "<br>");
		clonedElement.prepend(scenariosContainer);
	  
		const opt = {
		  margin: 0.5,
		  filename: 'dominus-chat.pdf',
		  image: { type: 'jpeg', quality: 0.98 },
		  html2canvas: { scale: 2 },
		  jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
		};
	  
		// Gera o PDF com o conteúdo atualizado
		html2pdf().set(opt).from(clonedElement).save();
	});
	  
	$("#btn-export-txt").on("click", function () {
		const element = document.getElementById("messages");
		const scenariosText = getScenariosText(); 
	  
		const text = scenariosText + (element.innerText || element.textContent);
	  
		const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
		const link = document.createElement("a");
		link.href = URL.createObjectURL(blob);
		link.download = "dominus-chat.txt";
	  
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	});

	// Verifica se o PWA já está instalado
	function isPWAInstalled() {
		return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
	}
	
	// Instalação do PWA
	let deferredPrompt;
	
	window.addEventListener("beforeinstallprompt", (e) => {
		// Impede o comportamento padrão
		e.preventDefault();
	
		// Só exibe o banner se o PWA não estiver instalado
		if (!isPWAInstalled()) {
			deferredPrompt = e; // Armazena o evento para uso posterior
			$("#install-banner").show(); // Exibe o banner
			hideInstallBannerAfterDelay(); // Faz o banner desaparecer após 5 segundos
		}
	});
	
	$("#btn-install").on("click", async function () {
		if (deferredPrompt) {
			deferredPrompt.prompt();
			const { outcome } = await deferredPrompt.userChoice;
			if (outcome === "accepted") {
				$("#install-banner").hide(); // Oculta o banner após a instalação
			}
			deferredPrompt = null;
		}
	});
	
	$("#close-install-banner").on("click", function () {
		$("#install-banner").hide(); // Fecha o banner
	});
	
	// Oculta o banner se o PWA já estiver instalado ao carregar a página
	document.addEventListener("DOMContentLoaded", () => {
		if (isPWAInstalled()) {
			$("#install-banner").hide();
		}
	}); 

	function hideInstallBannerAfterDelay() {
		setTimeout(() => {
		  $("#install-banner").fadeOut(500, function () {
			$(this).hide(); // Garante que o banner seja ocultado após o fade out
		  });
		}, 10000); // 10 segundos de atraso
	  }
	
	/*
	// Verifica se o PWA já está instalado
	function isPWAInstalled() {
		return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
 	}
  
	// Instalação do PWA
	let deferredPrompt;
	
	window.addEventListener("beforeinstallprompt", (e) => {
		// Impede o comportamento padrão
		e.preventDefault();
		deferredPrompt = e;
	
		// Só exibe o banner se o PWA não estiver instalado
		if (!isPWAInstalled()) {
		$("#install-banner").show(); // Exibe o banner
		}
	});
	
	$("#btn-install").on("click", async function () {
		if (deferredPrompt) {
		deferredPrompt.prompt();
		const { outcome } = await deferredPrompt.userChoice;
		if (outcome === "accepted") {
			$("#install-banner").hide(); // Oculta o banner após a instalação
		}
		deferredPrompt = null;
		}
	});
	
	$("#close-install-banner").on("click", function () {
		$("#install-banner").hide(); // Fecha o banner
	});
	
	// Oculta o banner se o PWA já estiver instalado ao carregar a página
	document.addEventListener("DOMContentLoaded", () => {
		if (isPWAInstalled()) {
		$("#install-banner").hide();
		}
	});
*/
});