Template.MainNav.events({
    'click .login-toggle': ()=> {
        console.log('show login modal');
        Session.set('nav-toggle', 'open');
    },
    'click .logout': ()=> {
        console.log('do logout');
        //Meteor.logout();
        AccountsTemplates.logout();
        //Session.set('nav-toggle', '');
    }
});