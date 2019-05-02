import Controller from '@ember/controller';

export default Controller.extend({
	actions: {

        addBook: function(){

        var bookName = this.get('bookName');
        var author = this.get('author');
        var dept = this.get('dept');
        var pub = this.get('pub');
        var num = this.get('num');
        var bookid = this.get('bookid');

        
        var newBook = this.store.createRecord('book',{
        	bookid: bookid,
            bookName: bookName,
            author: author,
            dept: dept,
            pub: pub,
            numofcopies: num
        });
            
        newBook.save();
            
        this.setProperties({
        	bookid: '',
            bookName: '',
            author: '',
            dept: '',
            pub: '',
            num: ''
        });
        },

        delBook: function(){

        	var id = this.get('delbookid');
        	this.store.query('book',{orderBy:'bookid', equalTo:id}).then(function(book){
        		book.deleteRecord();
        		book.save();
        	});
        }

    }
});
