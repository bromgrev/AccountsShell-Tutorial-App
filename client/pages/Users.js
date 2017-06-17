import moment from 'moment';

Template.Users.onCreated(function(){
    this.autorun(() => {
        this.subscribe('allUsers');
    });
});

Template.Users.helpers({
    users: function() {
        return Meteor.users.find();
    },
    userEmail: function() {
        return this.emails[0].address;
    },
    isAdmin: function() {
        return Roles.userIsInRole(this._id, 'admin') ? 'admin' : '';
    },
    dateFormat: function() {
        return moment(this.createdAt).format('MMMM D YYYY hh');
    },
    editMode: function() {
        return Session.get('currentUser') ? 'edit-mode' : '';
    },
    currentEdit: function() {
        let user = Session.get('currentUser');
        return (user) && (user._id === this._id);
    }
});

Template.Users.events({
    'click .user_id': function() {
        console.log(this);
        Session.set('currentUser', this);
    },
    'click .toggle-admin': function() {
        Meteor.call('toggleAdmin', this._id);
        // if (Roles.userIsInRole(this._id, 'admin')) {
        //     Roles.removeUsersFromRoles(this._id, 'admin');
        // } else {
        //     Roles.addUsersToRoles(this._id, 'admin');
        // }
    },
    'click .close-edit-mode': function() {
        Session.set('currentUser', null);        
    }
});

