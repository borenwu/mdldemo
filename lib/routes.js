import { Meteor } from 'meteor/meteor';



FlowRouter.route('/', {
    name: 'main',
    action() {
        BlazeLayout.render('MainLayout',{ main: 'ItemList' });
    }
});

