import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		addAuthor: function(){

        var authorname = this.get('authorname');
        var authorid = this.get('authorid');
        var country = this.get('country');
        var books = this.get('books');
        
        
        var newAuthor = this.store.createRecord('author',{
        	authorid: authorid,
            authorname: authorname,
            country: country,
            books: books
        });
            
        newAuthor.save();
            
        this.setProperties({
        	authorid: '',
            authorname: '',
            country: '',
            books: ''
        });
        }
	}
	
});
