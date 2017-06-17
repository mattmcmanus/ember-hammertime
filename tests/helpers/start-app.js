import Ember from 'ember';
import run from 'ember-runloop';
import Application from '../../app';
import config from '../../config/environment';
const { merge } = Ember;

export default function startApp(attrs) {
  let attributes = merge({}, config.APP);
  attributes = merge(attributes, attrs); // use defaults, but you can override;

  return run(() => {
    let application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
    return application;
  });
}
