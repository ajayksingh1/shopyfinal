import DS from 'ember-data';

export default DS.Model.extend({
         pid:DS.attr('number'),
         pName:DS.attr('string'),
         pDescription:DS.attr('string'),
         pUrl:DS.attr('string'),
         pPrice:DS.attr('string')

});
