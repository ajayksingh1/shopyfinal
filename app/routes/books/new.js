import Ember from 'ember';

export default Ember.Route.extend({
      	store: Ember.inject.service('store'),

  actions: {
    publishBook() {
      var newBook = this.get('store').createRecord('book', {
        pid: this.get('pid'),
        pName: this.get('pName'),
        pDescription: this.get('pDescription'),
        pPrice:this.get('pPrice'),
        pUrl:this.get('pUrl')
      });
      newBook.save();
      this.transitionTo('books');
    },
  },
});

