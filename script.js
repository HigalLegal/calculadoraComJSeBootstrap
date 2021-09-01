function calcular(tipo, valor){
	//o tipo pode ser um valor (numérico) ou uma ação. E o valor é referente ao botão (1,2,3,+,c,x, etc)
	if(tipo === "acao"){//em caso de uma ação
		if(valor === 'c'){//botão C (de limpeza)
			document.getElementById("resultado").value = ""/*simplesmente limpa a caixa de texto, atribuindo
			nenhum valor nas aspas, deixando elas vazias*/
		}

		if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){/*caso for
			alguma operação ou o ponto(.)*/
			document.getElementById("resultado").value += valor/*simplesmente concatena na caixa de texto,
			utilizando o operador +=*/
		}

		if(valor === '='){
			var valorCampo = eval(document.getElementById("resultado").value)/*aqui ele pega o valor que foi
			digitado no campo de texto, e com a função eval() ele força a dá o resultado da operação.*/

			document.getElementById("resultado").value = valorCampo /*exibe no campo o resultado da operação
			pegando a variável valorCampo*/
		}

	} else if (tipo === "valor") {//em caso de valor (numérico)
		document.getElementById("resultado").value += valor;//concatena o número que foi digitado pelo botão

	}
}