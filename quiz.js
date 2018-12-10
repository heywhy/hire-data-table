let fernet = require('fernet')
let secret = new fernet.Secret('TluxwB3fV_GWuLkR1_BzGs1Zk90TYAuhNMZP_0q4WyM=')
// Oh no! The code is going over the edge! What are you going to do?
let message = 'gAAAAABcDpiGIBIqnu-kz4MEmp8k3NYaYpl8BV36x48UpLpu6dc3o0foFM32VMdISz1MDBjqc27TDI7gDR39WTzQVWmCW92jghZtljJMa1XQ6-QKsQqhggqwRd3vhHqcaXQ8v269aChAOz5dxvvdYtzk_Y6fIH_8IknR0QgTxhpnJdLo7eiWLfgcmqefYRQRVnjWKwoCBYJM'
let token = new fernet.Token({secret, token: message, ttl:0})
console.log(token.decode(message))
