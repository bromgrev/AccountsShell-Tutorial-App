var postSignUp = function(userId, info) {
    // server-side event handler
    // we could carry out email and other server-side things
    console.log(userId);
    console.log(info.profile.profession);
    console.log(info);

    //Roles.addUsersToRoles(userId, ['view-secrets'], 'example.com');
    Roles.addUsersToRoles(userId, ['normal-user', info.profile.profession]);
};

AccountsTemplates.configure({
    postSignUpHook: postSignUp
});
