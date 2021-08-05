
const App = {
    data() {
        return {
            title : 'Список заметок',
            placeholderString : 'Введите название заметки',
            inputValue: '',
            notes: ['first'],
        }
    },
    methods: {
        addNewNote(){
            if(this.inputValue.length !== 0){
                this.notes.push(this.inputValue)
                this.inputValue=''
            }
        },
        toUpper(item){
           return item.toUpperCase()
        },
        deleteNote(index){
            this.notes.splice(index,1)
        }
    },
    computed: {
        doubleCountComputed(){
            return this.notes.length * 2
        }
    },
    watch:{
        inputValue(value){
            console.log(value)
        }
    }

}




Vue.createApp(App).mount('#app')