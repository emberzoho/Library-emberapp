import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
	bookid: DS.attr('string'),
	bookName: DS.attr('string'),
    author: DS.attr('string'),
    dept: DS.attr('string'),
    pub: DS.attr('string'),
    numofcopies: DS.attr('number')
});
