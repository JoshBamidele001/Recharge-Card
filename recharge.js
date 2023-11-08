let network = document.getElementById("network")
let amount = document.getElementById("amount")
let dispPin = document.getElementById("dispPin")


function getPin(){
    let Pin = Math.floor(Math.random()*10000000000000000)
    dispPin.innerHTML = Pin
    alert(`You have successfully purchase ${network.value} of ${amount.value}`)
    setTimeout(()=>{
        document.getElementById("alertMsg").style.display = "block"
    }, 2000)
     
}

// function loadMTN(){
//     let Pin = document.getElementById("dispPin").innerHTML
//     if (!loadMTN.value.startsWith("*311*") || !loadMTN.value.endsWith("#") || !loadMTN.value.includes(Pin)) {
//         alert ("Invalid Code")
//     }else if (network.value !== "MTN"){
//         alert ("Invalid Network provider")
//     } else {
//         alert (`You have successful recharged ${network.value} of ${amount.value}`)
//     }

// }

function loadMTNCard(){
    let pin = document.getElementById("dispPin").innerHTML
    if(!loadMTN.value.startsWith("*555") || !loadMTN.value.endsWith("#") || !loadMTN.value.includes(pin)) {
    alert("Invalide Code")
    }else if (network.value !== "MTN"){
        alert ("Invalid network provider")

    }else {
        alert(`You have recharged ${network.value} of ${amount.value}`)
    }
}

function loadGLOCard(){
    let Gpin = document.getElementById("dispPin").innerHTML
    if (!loadGLO.value.startsWith("*123*") || !loadGLO.value.endsWith("#") || !loadGLO.value.includes(Gpin)){
        alert("Invalide Code")
    }else if (network.value !== "GLO"){
        alert ("invalid Network Provider")
    } else {
        alert (`You have recharged ${network.value} of ${amount.value}`)
    }
    
}

