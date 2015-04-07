app.controller('MainController', function ($scope, $http, FlashCardsFactory) {

    $scope.flashCards = [];

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.loader = true;
    $scope.card = {};

    $scope.chosenCategory = 'All';

    $scope.getAllCards = function () {
        $scope.chosenCategory = 'All';
        $scope.loader = false;
        FlashCardsFactory.getFlashCards().then(function (cards) {
            $scope.loader = true;
            $scope.flashCards = cards;
        });
    };

    $scope.getCategoryCards = function (category) {
        $scope.chosenCategory = category;
        $scope.loader = false;
        FlashCardsFactory.getFlashCards(category).then(function (cards) {
            $scope.loader = true;
            $scope.flashCards = cards;
        });
    };

    $scope.getAllCards();
    $scope.addCard = FlashCardsFactory.addCard;
    $scope.addCard = function (card) {
        console.log("Adding card in MainController");
        // var answers = [];
        // answers.push({text: card.answers, correct:});
        // answers.push({});
        // answers.push({});

        FlashCardsFactory.addCard(card).then(function (card) {
            $scope.getAllCards();
            $scope.card = {};
        });
    };
    // $scope.addCard = function (card) {

    //     console.log("Adding card in MainController");

    //     var answers = [];
        // answers.push({text: card.answers, correct:});
        // answers.push({});
        // answers.push({});

        // if (angular.isDefined(card)){
        //     console.log("Adding card in FlashCardsFactory");

        //     console.log('card', card);
            
        //     var cardAnswers = card.answers;
        //     var correctAnswerArr = Object.keys(card.correct);
        //     var correctAnswer = correctAnswerArr[0];
        //     console.log('test correct answer', correctAnswer);
        //     for (var key in cardAnswers) {
        //         if (key == correctAnswer){
        //             console.log('correct answer', key);
        //             answers.push({text: cardAnswers[key], correct: true});
        //             delete card['correct'];
        //         }
        //         else{
        //             answers.push({text: cardAnswers[key], correct: false});

        //         }


        //     }

        //     card['answers'] = answers;
        //     console.log('new card', card);
        //     $http.post('/cards', {
        //         data: card
        //     }).then(function(response) {

        //         return response.data;
        //     });
        //     //$scope.flashCardForm.$setPristine();
        //     card = null;
        //     console.log('null', card);

        // }
    // };

});