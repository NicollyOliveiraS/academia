(function() {
    const displayElement = document.getElementById('cpfDisplay');
    const notificacao = document.getElementById("notificacao");

    let cpfNumerico = "";
    
    const API_BASE_URL = "https://academia-limpo.vercel.app"; 

    function formatarCPF(valor) {
        let digitos = valor.replace(/\D/g, "");
        if (digitos.length === 0) return "000.000.000-00";
        return digitos
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
            .substring(0, 14);
    }

    function atualizarDisplay() {
        displayElement.innerText = cpfNumerico.length === 0 ? "000.000.000-00" : formatarCPF(cpfNumerico);
        displayElement.style.color = cpfNumerico.length === 11 ? "#b9f6b9" : "#afcaaf";
    }

    function mostrarNotificacao(msg, tipo = "aviso") {
        notificacao.textContent = msg;
        notificacao.className = `notificacao show ${tipo}`;

        setTimeout(() => {
            notificacao.className = "notificacao";
        }, 3000);
    }

    async function enviarDados() {
    if (cpfNumerico.length !== 11) {
        mostrarNotificacao("Digite os 11 números do CPF.", "aviso");
        return;
    }

    try {
        displayElement.style.opacity = "0.5";
        
        const response = await fetch(`${API_BASE_URL}/consulta/${cpfNumerico}`);
        const data = await response.json();

        console.log("STATUS:", response.status);
        console.log("DATA:", data);

        console.log("RESPOSTA API:", data); // 👈 debug

        if (response.status === 200) {
            // ✅ acesso liberado
            const nome = data.nome 

            displayElement.style.backgroundColor = "#1a2c1a";

            mostrarNotificacao(`Acesso liberado! Bem-vindo(a), ${nome}!`, "sucesso");

            cpfNumerico = "";

        } else if (response.status === 403) {
            // ❌ acesso negado (status != Ativo)
            displayElement.style.backgroundColor = "#2e1a1a";

            mostrarNotificacao(data.erro || "Acesso negado.", "erro");

            cpfNumerico = "";

        } else if (response.status === 404) {
            // ❌ não encontrado
            displayElement.style.backgroundColor = "#2e1a1a";

            mostrarNotificacao("CPF não cadastrado.", "erro");

            cpfNumerico = "";
        }

    } catch (error) {
        console.error(error);

        mostrarNotificacao("Erro de conexão com o servidor.", "erro");

        cpfNumerico = "";
    } finally {
        displayElement.style.opacity = "1";

        setTimeout(() => {
            displayElement.style.backgroundColor = "";
            atualizarDisplay();
        }, 1000);
    }
}

    // Teclado Dinâmico
    const teclado = document.getElementById('tecladoDinamico');
    const botoes = ["1","2","3","4","5","6","7","8","9","←","0","OK"];

    botoes.forEach(label => {
        const btn = document.createElement("button");
        btn.textContent = label;

        btn.onclick = () => {
            if (label === "←") {
                cpfNumerico = cpfNumerico.slice(0, -1);
            } 
            else if (label === "OK") {
                enviarDados();
            } 
            else if (cpfNumerico.length < 11) {
                cpfNumerico += label;
            }

            atualizarDisplay();
        };

        teclado.appendChild(btn);
    });

})();