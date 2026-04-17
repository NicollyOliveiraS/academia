(function() {
    const displayElement = document.getElementById('cpfDisplay');
    let cpfNumerico = "";
    
    // Altere para a URL da sua API (ex: no Vercel ou localhost)
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

    async function enviarDados() {
        if (cpfNumerico.length !== 11) {
            alert("⚠️ Digite os 11 números do CPF.");
            return;
        }

        try {
            displayElement.style.opacity = "0.5";
            
            // Faz a chamada GET para a API
            const response = await fetch(`${API_BASE_URL}/consulta/${cpfNumerico}`);
            const data = await response.json();

            if (response.ok) {
                // Sucesso: Status 200
                displayElement.style.backgroundColor = "#1a2c1a";
                alert(`✅ ACESSO LIBERADO!\nBem-vindo(a), ${data.nome}!`);
                cpfNumerico = ""; 
            } else {
                // Erro: Status 404 ou outros
                displayElement.style.backgroundColor = "#2e1a1a";
                alert(`❌ ACESSO NEGADO!\n${data.erro || "CPF não cadastrado."}`);
            }
        } catch (error) {
            alert("⚠️ Erro de conexão com o servidor.");
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
    
    // mensagem de timeout/ problema de rede sem travamento infinito
    let timeoutId;
    flashTimeout = () => {
        clearTimeout(timeoutId);
        displayElement.style.backgroundColor = "#2e1a1a";
    };


    botoes.forEach(label => {
        const btn = document.createElement("button");
        btn.textContent = label;
        btn.onclick = () => {
            if (label === "←") cpfNumerico = cpfNumerico.slice(0, -1);
            else if (label === "OK") enviarDados();
            else if (cpfNumerico.length < 11) cpfNumerico += label;
            atualizarDisplay();
        };
        teclado.appendChild(btn);
    });
})();