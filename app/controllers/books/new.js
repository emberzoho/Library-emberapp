import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
        addBook: function(){
        var bookName = this.get('bookName');
        var author = this.get('author');
        var dept = this.get('dept');
        var pub = this.get('pub');
        var num = this.get('num');
        
        var newBook = this.store.createRecord('book',{
            bookName: bookName,
            author: author,
            dept: dept,
            pub: pub,
            numofcopies: num
        });
            
        newBook.save();
            
        this.setProperties({
            bookName: '',
            author: '',
            dept: '',
            pub: '',
            num: ''
        });
        }
    }
});
