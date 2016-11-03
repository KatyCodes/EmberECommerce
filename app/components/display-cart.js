import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    remove(item) {
    this.get('shoppingCart').remove(item);
    this.get('shoppingCart').removeFromTotal(item.data.price);
    }
  }
});
