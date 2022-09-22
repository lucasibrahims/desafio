var web3 = new Web3(ethereum);;
var NFTAbi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "maximum",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "amountMinted",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "amountLeft",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        }
      ],
      "name": "createTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
var NFTEndereco = "0xB67e65A8380d450bB15ec8862879a6A1ECbea004";
let contratoNFT = new web3.eth.Contract(NFTAbi, NFTEndereco);
var LeilaoAbi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "balance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "lanceMinimo",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "lanceMaximo",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "comprador",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "_owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "lance",
          "type": "uint256"
        }
      ],
      "name": "definirLanceMinimo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "_darLance",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [],
      "name": "encerrarLeilao",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
var LeilaoEndereco = "0xB273B60a1ce49314D207F7f85A17060405e73394";
let contratoLeilao = new web3.eth.Contract(LeilaoAbi, LeilaoEndereco);

var enderecoContrato = document.getElementById("endereco_contrato");
var conectarBnt = document.getElementById("conectar");
var balancoDoContratoBnt = document.getElementById("ether_in_contract");
var balancoDoContratoSpan = document.getElementById("ether_span");
var donoDoMaiorLanceBnt = document.getElementById("dono_maior_lance");
var donoDoMaiorLanceSpan = document.getElementById("dono_maior_lance_span");
var maiorLanceBnt = document.getElementById("maior_lance");
var maiorLanceSpan = document.getElementById("maior_lance_span");
var lanceInicial = document.getElementById("lance_minimo");
var iniciarLeilaoBnt = document.getElementById("iniciar_leilao");
var encerrarLeilaoBnt = document.getElementById("encerrar_leilao");
var darLanceBnt = document.getElementById("dar_lance");
var lanceInput = document.getElementById("lance_input");
var endereco_contrato = document.getElementById("endereco_contrato");
endereco_contrato.innerHTML = `Endereço do Contrato: <br> ${NFTEndereco}`

async function conectar(){
    if(ethereum){
        try{
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            alert ("Conectado!");
            console.log(account);
            return account;
        } catch(err){
            alert('Error');
            console.log(err);
        }
    } else{
        alert('Por favor, instale a carteira');
    }
}

conectarBnt.addEventListener('click', ()=>{
    conectar().then((response)=>{
    }).catch((err)=>{
        console.log(err);
    });
});

async function iniciarLeilao(_lanceInicial) {
    if(ethereum) {
        try{
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            let lanceInicial = BigInt(_lanceInicial*10**18);
            console.log(lanceInicial);
            let call = await contratoLeilao.methods.definirLanceMinimo(lanceInicial).send({from:account});
            if(call)
            iniciado = true;
            return call;
        } catch(err){
            alert("Error!")
            console.log(err);
        }
    }else {
        alert ("Carteira não instalada.")
    }

}
iniciarLeilaoBnt.addEventListener('click', () => {
    iniciarLeilao(lanceInicial.value).then((response) => {
    }).catch((err) => {
        console.log(err);
    });
})

async function mostrarMaiorLance() {
    if(ethereum){
        try{
                let accounts = await ethereum.request({method:'eth_requestAccounts'});
                let account = accounts[0];
                let call = await contratoLeilao.methods.lanceMaximo().call();
                return call;
          }
            catch(err){
            alert('Error');
            console.log(err);
        }
    } else{
        alert('Por favor, instale a carteira');
    }

}
maiorLanceBnt.addEventListener('click', () => {
    mostrarMaiorLance().then((response) => {
        maiorLanceSpan.innerHTML = `O maior lance: ${response/10**18} ETH`
    }).catch((err) => {
        console.log(err);
    })
})

async function mostrarDonoMaiorLance() {
    if(ethereum){
        try{  
                let accounts = await ethereum.request({method:'eth_requestAccounts'});
                let account = accounts[0];
                let call = await contratoLeilao.methods.comprador().call();
                return call;
            } catch(err){
                alert('Error');
                console.log(err);
            }
            
    } else{
        alert('Por favor, instale a carteira');
    }

}
donoDoMaiorLanceBnt.addEventListener('click', () => {
    mostrarDonoMaiorLance().then((response) => {
        donoDoMaiorLanceSpan.innerHTML = `O dono do maior lance: <br>${response}`
    }).catch((err) => {
        console.log(err);
    })
})

async function mostrarBalanco() {
    if(ethereum){
        try{
                let accounts = await ethereum.request({method:'eth_requestAccounts'});
                let account = accounts[0];
                let call = await contratoLeilao.methods.balance().call();
                return call;


        } catch(err){
            alert('Error');
            console.log(err);
        }
    } else{
        alert('Por favor, instale a carteira');
    }

}
balancoDoContratoBnt.addEventListener('click', async () => {
    mostrarBalanco().then(async (response) => {
        balancoDoContratoSpan.innerHTML = `Balanço do Contrato: ${response/10**18} ETH`
        let addressNFT = await contratoNFT.a();
        console.log(addressNFT);
    }).catch((err) => {
        console.log(err);
    })
})

async function darLance(_lance) {
    if(ethereum) {
        try{
                let accounts = await ethereum.request({method:'eth_requestAccounts'});
                let account = accounts[0];
                let lance = _lance*10**18;
                let maiorLance = await mostrarMaiorLance();
                if(lance<=maiorLance)
                {
                    console.log(maiorLance/10**18);
                    alert("É necessário dar um lance maior que o anterior.");
                }
                else{
                    let call = await contratoLeilao.methods._darLance().send({from:account, value:lance});
                    return call;
                } 
        } catch(err){
            alert("Error!")
            console.log(err);
        }
    }else {
        alert ("Carteira não instalada.")
    }

}
darLanceBnt.addEventListener('click', () => {
    darLance(lanceInput.value).then((response) => {
    }).catch((err) => {
        console.log(err);
    });
})

async function encerrarLeilao () {
    if(ethereum) {
        try{
                let accounts = await ethereum.request({method:'eth_requestAccounts'});
                let account = accounts[0].toString().toLowerCase();
                let owner = await contratoLeilao.methods.owner().call();
                owner = owner.toString().toLowerCase();
                let comprador = await contratoLeilao.methods.comprador().call();
                console.log(comprador);
                if(owner != account)
                {
                    alert("Só o dono do leilão pode fazer isso!")
                }else {
                    let call = await contratoLeilao.methods.encerrarLeilao().send({from:account});
                    if(call)
                    {
                        let nft = await contratoNFT.methods.createTokens(comprador).send({from:account});
                        iniciado = false;
                    }
                    return call;
                } 
      
        } catch(err){
            alert("Error!")
            console.log(err);
        }
    }else {
        alert ("Carteira não instalada.")
    }

}

encerrarLeilaoBnt.addEventListener('click', () => {
    encerrarLeilao().then((response) => {
    }).catch((err) => {
        console.log(err);
    });
})
