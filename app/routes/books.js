import Ember from 'ember';

export default Ember.Route.extend({
  	store: Ember.inject.service('store'),

  model(){
  	 return this.get('store').queryRecord('product-info', {
      orderBy: 'pid',
    });
  }
});
