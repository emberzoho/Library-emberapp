import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
	authorid: DS.attr('string'),
	authorname: DS.attr('string'),
    country: DS.attr('string'),
    books: DS.attr('string')
});
