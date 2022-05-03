var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(),
            whatsapp: '31999999999',
            address: {
                postalcode: '32623110',
                street: 'Avenida Álvaro da Silveira',
                number: '971',
                details: 'Casa',
                district: 'Marimbá',
                city_state: 'Betim/MG'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }

}