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
					"Não", "Não, mas...", "Não e...",
					"Sim","Sim","Sim","Sim","Sim",
					"Não","Não","Não","Não","Não"
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
		"Artes Marciais","Cartoons","Comédia Romântica","Contos de Fadas","Cyberpunk",
		"Dieselpunk","Era do Gelo","Espada e Feitiçaria","Exploração Espacial",
		"Fantasia Científica","Fantasia Urbana","Ficção Científica","Guerra","Hopepunk",
		"Horror Cósmico","Horror Gótico","Investigação","Máfia","Mitologias","Piratas",
		"Pré-História","Solarpunk","Steampunk","Super-Heróis","Tokusatsu","Velho Oeste",
		"Viagem no Tempo","Zumbis"
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

	// Abrir modal de settings
	$("#btn-settings").on("click", function () {
		$("#modal-settings").removeClass("hidden");
	});
	
	// Fechar modal de settings
	$("#close-settings-modal").on("click", function () {
		$("#modal-settings").addClass("hidden");
	});

	// Exportar backup
	$("#btn-export-backup").on("click", function () {
		const backupData = JSON.stringify(localStorage);
		const blob = new Blob([backupData], { type: "application/json" });
		const link = document.createElement("a");
		link.href = URL.createObjectURL(blob);
		link.download = "codex-dominus-backup.bkp";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		alert("Backup exportado com sucesso!");
	});
  
	// Importar backup
	$("#import-backup").on("change", function (e) {
		const file = e.target.files[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = function (event) {
		try {
			const backupData = JSON.parse(event.target.result);
			if (typeof backupData === "object") {
			Object.keys(backupData).forEach((key) => {
				localStorage.setItem(key, backupData[key]);
			});
			alert("Backup importado com sucesso!");
			location.reload(); // Recarrega a página para aplicar os dados importados
			} else {
			alert("Arquivo de backup inválido.");
			}
		} catch (error) {
			alert("Erro ao importar o backup. Certifique-se de que o arquivo é válido.");
		}
		};
		reader.readAsText(file);
	});

	// Atualiza a barra de progresso do armazenamento
	function updateStorageUsage() {
		const totalBytes = new Blob(Object.values(localStorage)).size; // Calcula o tamanho total em bytes
		const totalKB = (totalBytes / 1024).toFixed(2); // Converte para KB
		const maxKB = 5120; // Limite de 5 MB em KB
		const percentage = Math.min((totalKB / maxKB) * 100, 100); // Calcula a porcentagem usada
	
		// Atualiza a barra de progresso e o texto
		$("#storage-progress").css("width", `${percentage}%`);
		$("#storage-text").text(`${totalKB} KB de ${maxKB} KB usados`);
	}
	
	// Atualiza o uso do armazenamento ao abrir o modal de configurações
	$("#btn-settings").on("click", function () {
		$("#modal-settings").removeClass("hidden");
		updateStorageUsage();
	});

	// Fechar modal ao clicar fora dele
	$(".modal").on("click", function (e) {
		if ($(e.target).hasClass("modal")) {
		  const modalId = $(this).attr("id");
	  
		  // Salva os dados se for o modal de perfil
		  if (modalId === "modal-profile") {
			saveProfileData();
		  }
	  
		  $(this).addClass("hidden");
		}
	});

	// Abrir modal de perfil
	$("#btn-profile").on("click", function () {
		$("#modal-profile").removeClass("hidden");
		loadProfileData();
	});
	
	// Fechar modal de perfil
	$("#close-profile-modal").on("click", function () {
		$("#modal-profile").addClass("hidden");
		saveProfileData();
	});
	
	// Alternar abas
	$(".tab-btn").on("click", function () {
		const tab = $(this).data("tab");
	
		// Ativar aba selecionada
		$(".tab-btn").removeClass("active");
		$(this).addClass("active");
	
		// Mostrar conteúdo da aba correspondente
		$(".tab-pane").removeClass("active");
		$("#" + tab).addClass("active");
	});
	
	// Salvar dados no LocalStorage
	function saveProfileData() {
		["perfil", "inventario", "historico", "anotacoes"].forEach((id) => {
		const value = $("#" + id + " textarea").val();
		localStorage.setItem(id, value);
		});
	}
	
	// Carregar dados do LocalStorage
	function loadProfileData() {
		["perfil", "inventario", "historico", "anotacoes"].forEach((id) => {
		const value = localStorage.getItem(id) || "";
		$("#" + id + " textarea").val(value);
		});
	
		// Ativar aba "perfil" ao abrir
		$(".tab-btn").removeClass("active");
		$(".tab-pane").removeClass("active");
		$("[data-tab='perfil']").addClass("active");
		$("#perfil").addClass("active");
	}

	function getScenariosText() {
		const selectedScenarios = JSON.parse(localStorage.getItem("selectedScenarios")) || [];
		const scenariosText = selectedScenarios.length > 0 
		  ? `Cenários: ${selectedScenarios.join(", ")}\n\n`
		  : "Cenários: Nenhum\n\n";
	  
		// Carregar os conteúdos dos textareas do modal de perfil
		const profileSections = {
		  perfil: "Perfil",
		  inventario: "Inventário",
		  historico: "Histórico",
		  anotacoes: "Anotações"
		};
	  
		let profileText = "";
	  
		Object.keys(profileSections).forEach((section) => {
		  const value = localStorage.getItem(section) || "";
		  if (value.trim() !== "") {
			profileText += `${profileSections[section]}:\n${value}\n\n`;
		  }
		});
	  
		return scenariosText + profileText;
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

	// Verificar se o chat está vazio
    if ($messages.children().length === 0) {
        // Mensagem de boas-vindas
        const mensagemBoasVindas = `
		👋 <strong>Bem-vindo ao Codex Dominus App!</strong><br>
		Aqui você encontrará ferramentas para gerar elementos aleatórios e criar histórias incríveis no RPG solo!<br><br>
		<strong>Como usar:</strong><br>
		🎲 Use o <strong>menu de ações</strong> para acessar os geradores principais:<br><br>
		- <strong>Cenários</strong> (🌍) Selecione até 3 cenários para personalizar sua experiência.<br>
		- <strong>Trama</strong> (📜): Crie a história principal.<br>
		- <strong>Arquétipo</strong> (🧙): Crie seu personagem.<br>
		- <strong>Cena</strong> (🎬): Descubra o lugar, personagem e evento.<br>
		- <strong>Banco de Ideias</strong> (💡): Obtenha inspiração para enriquecer sua história.<br>
		- <strong>Extras</strong> (✨): Gere elementos adicionais baseados nos cenários escolhidos.<br><br>
		🔮 Use o <strong>Oráculo</strong> para resolver dilemas e tomar decisões.<br><br>
		🎲 Role os dados (1d6 ou 2d6) para enfrentar desafios e avançar na história.<br><br>
		📝 Todas as suas ações e decisões serão registradas no chat para que você possa acompanhar sua jornada.<br><br>
		✍️ Você também pode enviar suas próprias mensagens no chat para fazer anotações importantes.<br><br>
    	👤 Clique no botão flutuante no canto superior direito para acessar e preencher a ficha do seu personagem.<br><br>
		Divirta-se e crie uma história única!
        `;

        // Exibir a mensagem no chat
        const $msg = $('<div></div>').addClass('message bot').html(mensagemBoasVindas);
        $messages.append($msg);
        $messages.scrollTop($messages[0].scrollHeight);
    }

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

});