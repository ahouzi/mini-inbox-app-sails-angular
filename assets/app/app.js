angular.module('mailApp', [])
.controller( 'LoginCtrl', function ( $scope, auth) {

  $scope.auth = auth;

})
.controller('EmailController', EmailController);


function LoginCtrl($scope, auth) {
	
	
}

function EmailController($scope) {
    $scope.viewPopup = false;
    $scope.viewSendPopup = false;
    $scope.sendingEmail = {};
    $scope.activeTab = "inbox";
    $scope.sentEmails = [];
    
    $scope.Forwarding = function() {
        $scope.viewPopup = false;
        $scope.sendingEmail = {};
        angular.copy($scope.selectedEmail, $scope.sendingEmail);

        $scope.sendingEmail.body = 
            "\n------Forwarded message-------\n" 
            + "from: " + $scope.sendingEmail.from + "\n"
            + "Date: " + $scope.sendingEmail.date + "\n"
			+ "subject: " + $scope.sendingEmail.subject + "\n"
            + "to: " + $scope.sendingEmail.to + "\n"
            + $scope.sendingEmail.body;

        $scope.sendingEmail.subject = "Forwarded: " + $scope.sendingEmail.subject;
        $scope.sendingEmail.to = "";
        $scope.sendingEmail.from = "ME";
        $scope.viewSendPopup = true;
    };
    
    $scope.reply = function() {
        
        $scope.viewPopup = false;
        
        
        $scope.sendingEmail = {};
        
        
        angular.copy($scope.selectedEmail, $scope.sendingEmail);
        
        
		
        // original email information
        $scope.sendingEmail.body = 
            "\n-------------------------------\n" 
            + "from: " + $scope.sendingEmail.from + "\n"
            + "sent: " + $scope.sendingEmail.date + "\n"
            + "to: " + $scope.sendingEmail.to + "\n"
            + "subject: " + $scope.sendingEmail.subject + "\n"
            + $scope.sendingEmail.body;
        
        
        $scope.sendingEmail.subject = "RE: " + $scope.sendingEmail.subject;
        
        
        $scope.sendingEmail.to = $scope.sendingEmail.from;
        
        
        $scope.sendingEmail.from = "ME";
        
        
        $scope.viewSendPopup = true;
    };
    
    $scope.sendEmail = function() {
        $scope.viewSendPopup = false;
        $scope.sendingEmail.from = "ME";
        $scope.sendingEmail.date = new Date();        
        $scope.sentEmails.splice(0,0,$scope.sendingEmail);
    };
    
    $scope.showComposePopup = function() {
        $scope.sendingEmail = {};
        $scope.viewSendPopup = true;
    };
    
    $scope.closeComposePopup = function() {
        $scope.viewSendPopup = false;
    };
    
    $scope.showPopup = function(email) {
        $scope.viewPopup = true;
        $scope.selectedEmail = email;
    };
    
    $scope.closePopup = function() {
        $scope.viewPopup = false;
    };
    
    $scope.emails = [
        { 
            from: 'mr.ahouzi@gmail.com',
            to: 'Moi',
            subject: 'Je suis Adnan', 
            date: '22/05/2015', 
            body: 'Bonjour!' 
        },
        { 
            from: 'adnan.ahouzi@gmail.com', 
            to: 'Moi',
            subject: 'Je deteste les spaguettis', 
            date: '22/06/2015', 
            body: 'Je prefere les fruits' 
        },
        { 
            from: 'yassei@hotmail.com', 
            to: 'Moi',
            subject: 'PI', 
            date: '31/12/2015', 
            body: 'How are u today' 
        }
    ];
}