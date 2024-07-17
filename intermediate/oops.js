 class Student{
    
    constructor(first_name, last_name, contact, batch_code, tech){
        this.first_name = first_name,
        this.last_name = last_name,
        this.contact = contact,
        this.batch_code = batch_code,
        this.tech = tech
    }
    updateContact(contact){
        this.contact = contact
    }
    updateTech(tech){
        this.tech.push(tech)
    }
 }

 const ted = new Student('Ted', 'Mosby', '4345345', 'TP_RP_06', ['HTML', 'CSS', 'JS'])
 const barney = new Student('Barney', 'Steinson', '453543453', 'TP_RP_06', ['HTML', 'CSS', 'JS'])

 console.log(ted)
 console.log(barney)
 console.log('----------- After update')
 
 ted.updateContact('123456')
 barney.updateTech('communication')

 console.log(ted)
 console.log(barney)