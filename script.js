var web3 = new Web3(ethereum);
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
var LeilaoAbi = [
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
    "stateMutability": "payable",
    "type": "fallback",
    "payable": true
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
        "internalType": "address",
        "name": "_to",
        "type": "address"
      }
    ],
    "name": "createTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "dono",
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
    "inputs": [],
    "name": "iniciado",
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
    "name": "inicioContrato",
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
    "inputs": [],
    "name": "timeMaximo",
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
    "stateMutability": "payable",
    "type": "receive",
    "payable": true
  },
  {
    "inputs": [],
    "name": "tempoMaximo",
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
    "name": "_iniciado",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "lance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_time",
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
  },
  {
    "inputs": [],
    "name": "idade",
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
  }
];
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
var NFTEndereco ="0x0f72FB71345a7077A565D908c489C8bcFC6EbE2D";
let contratoNFT = new web3.eth.Contract(NFTAbi, NFTEndereco);
var LeilaoEndereco = "0xE60AC70D06E1359227184bE1716FB15f16B7D922";
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
var timeInput = document.getElementById("time_input");
var endereco_contrato = document.getElementById("endereco_contrato");
var setTimeBnt = document.getElementById("set_time");
endereco_contrato.innerHTML = `Endereço do Contrato: <br> ${NFTEndereco} <br> ${LeilaoEndereco}`
async function getIniciado(){
  return await contratoLeilao.methods._iniciado().call();
}
async function inicio(){
var iniciado = await contratoLeilao.methods._iniciado().call();
var settedTime = false;
var now = new Date;
console.log(iniciado);
if (!iniciado)
{   
    conectarBnt.style.backgroundColor = "red";
    document.getElementById("counter").innerHTML="Leilão não iniciado!";

    var hh =0;
    var mm =0;
    var ss =0;
}
if (iniciado)
{
    var inicioContrato = await contratoLeilao.methods.inicioContrato().call();
    var tempoMaximo = await contratoLeilao.methods.tempoMaximo().call();
    var fimContrato = Number(inicioContrato) + Number(tempoMaximo);
    var fimContrato = new Date(fimContrato * 1000);
    var tempoRestante = fimContrato.getTime() - now.getTime();
    
    if(tempoRestante>0){
        setTime(tempoRestante);
        start();
    }

    else{
        document.getElementById("counter").innerHTML="Tempo Esgotado!";
    }

}
}

window.onload = inicio();
async function setTime (_time) {
    var time = Number(_time);
        hh=Math.floor(time/hour);
        time = time - hh * hour;
        mm = Math.floor(time/minute);
        time = time - mm * minute;
        ss = Math.floor(time/second);
    var format = "Tempo Restante: " + (hh < 10 ? '0' + hh : hh) + ":" + (mm < 10 ? '0' + mm : mm) + ":" + (ss < 10 ? '0' + ss : ss)
    document.getElementById("counter").innerHTML=format;
    settedTime=true;
}


function start(){
    var cron = setInterval(() => {timer(); }, second);
}

function timer(){
    
    if(ss==0)
    {
        ss=60;
        mm--;
    }

    if(mm==0)
    {
        mm=60;
        hh--;
    }
    ss--;
    var format = "Tempo Restante: " + (hh < 10 ? '0' + hh : hh) + ":" + (mm < 10 ? '0' + mm : mm) + ":" + (ss < 10 ? '0' + ss : ss)
    document.getElementById("counter").innerHTML=format;
}
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

conectarBnt.addEventListener('click', () => {
    conectar().then((response) => {
    }).catch((err) => {
         console.log(err);
     });
    }
)

async function iniciarLeilao(_lanceInicial, _time) {
    if(ethereum) {
        try{
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            let lanceInicial = BigInt(_lanceInicial*10**18);
            let dono = await contratoNFT.methods.owner().call();
            dono = dono.toString().toLowerCase()
            iniciado = getIniciado();
            iniciado = true;
            if(account!=dono)
            {
                alert("Só o dono pode iniciar o leilão!")
            }else{
            let call = await contratoLeilao.methods.definirLanceMinimo(lanceInicial, _time).send({from:account});
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
setTimeBnt.addEventListener('click', () => {
    setTime(timeInput.value * minute);

})

iniciarLeilaoBnt.addEventListener('click', () => {
    if(settedTime){
    iniciarLeilao(lanceInicial.value, timeInput.value*60).then((response) => {
    start(); 
    }).catch((err) => {
         console.log(err);
     });
    }
    else{
        alert("Defina o tempo máximo do leilão!");
    }
})

async function mostrarMaiorLance() {
    if(ethereum){
      var iniciado = await getIniciado()
        try{
            if (iniciado)
            {
                let call = await contratoLeilao.methods.lanceMaximo().call();
                return call;
            }
            else {
                alert("Leilão não iniciado!");
            }

        } catch(err){
            alert('Error');
            console.log(err);
        }
    } else{
        alert('Por favor, instale a carteira');
    }

}
maiorLanceBnt.addEventListener('click', () => {
    mostrarMaiorLance().then(async (response) => {
      var iniciado = await getIniciado();
        if(iniciado)
        maiorLanceSpan.innerHTML = `O maior lance: ${response/10**18} ETH`
    }).catch((err) => {
        console.log(err);
    })
})

async function mostrarDonoMaiorLance() {
    if(ethereum){
        try{
          var iniciado = await getIniciado();
            if (iniciado){    
                let accounts = await ethereum.request({method:'eth_requestAccounts'});
                let account = accounts[0];
                let call = await contratoLeilao.methods.comprador().call();
                return call;
            }else {
                alert ("Leilão não iniciado!");
            }} catch(err){
                alert('Error');
                console.log(err);
            }
            
    } else{
        alert('Por favor, instale a carteira');
    }

}
donoDoMaiorLanceBnt.addEventListener('click', () => {
    mostrarDonoMaiorLance().then(async (response) => {
        var iniciado = await getIniciado();
        if(iniciado)
        donoDoMaiorLanceSpan.innerHTML = `O dono do maior lance: <br>${response}`
    }).catch((err) => {
        console.log(err);
    })
})

async function mostrarBalanco() {
    if(ethereum){
        try{
            var iniciado = await getIniciado();
            if(iniciado){
                let accounts = await ethereum.request({method:'eth_requestAccounts'});
                let account = accounts[0];
                let call = await contratoLeilao.methods.balance().call();
                return call;
            }else {
                alert("Leilão não iniciado!")
            }

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
        var iniciado = await getIniciado();
        if(iniciado)
        balancoDoContratoSpan.innerHTML = `Balanço do Contrato: ${response/10**18} ETH`
    }).catch((err) => {
        console.log(err);
    })
})

async function darLance(_lance) {
    if(ethereum) {
        try{
            var iniciado = await getIniciado();
            if (iniciado)
            {
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
            }else 
            {
                alert("Leilão não iniciado!")
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
            var iniciado = await getIniciado();
            if (iniciado)
            {
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
                    if (call)
                    {
                    }
                    return call;
                } 
            }else {
                alert("Leilão não iniciado!")
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
