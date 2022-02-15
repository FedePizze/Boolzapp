const app = new Vue({

    el: '#app',

    data: {
        user: [
            {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            message: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
                },
                {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
                }
            ],
            },
        
            {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            message: [
                {
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
                },
                {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
                },
                {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
                }
            ],
            },
        
            {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            message: [
                {
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received'
                },
                {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
                },
                {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
                }
            ],
            },
        
            {
            name: 'Luisa',
            avatar: '_4',
            visible: true,
            message: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
                }
            ],
            },
        
            ],

        nome: '',
        src: '',
        num: '0',

        active: 0,

        textMessage: '',

        search: null,
    },

    methods: {

        select(index) {

            this.nome = '',
            this.src = '',
            this.num = index,

            this.nome = this.user[index].name
            console.log(this.nome)

            this.src = this.user[index].avatar
            console.log(this.src)

            
        },

        message(index) {

            if (this.textMessage != '') {
                
                index = this.num
                console.log(index)
                
                const obj = {
                    date: '10/01/2020 15:30:55',
                    text: this.textMessage ,
                    status: 'sent'
                }

                this.user[this.num].message.push(obj)
                this.textMessage = ''
            }
        },
    },

    computed: {

        filtraNomi(){
            
            if(this.search){

                return this.user.filter((elemento)=>{
                return this.search.toLowerCase().split(' ').every(x => elemento.name.toLowerCase().includes(x))
            })
            
            }else{

                return this.user;
            }
        }
    }

})

