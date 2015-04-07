app.factory('FlashCardsFactory', function ($http) {

    return {

        getFlashCards: function (category) {

            var queryParams = {};

            if (category) {
                queryParams.category = category;
            }

            return $http.get('/cards', {
                params: queryParams
            }).then(function (response) {
                return response.data;
            });

        },

        // addCard: function (card) {
        //     console.log("Adding card in FlashCardsFactory");

        //     return $http.post('/cards', {
        //         data: card
        //     }).then(function(response) {
        //         return response.data;
        //     });
        // }

        addCard: function (card) {
            var answers = [];
            if (angular.isDefined(card)){
                console.log("Adding card in FlashCardsFactory");

                console.log('card', card);
                
                var cardAnswers = card.answers;
                var correctAnswerArr = Object.keys(card.correct);
                var correctAnswer = correctAnswerArr[0];
                console.log('test correct answer', correctAnswer);
                for (var key in cardAnswers) {
                    if (key == correctAnswer){
                        console.log('correct answer', key);
                        answers.push({text: cardAnswers[key], correct: true});
                        delete card['correct'];
                    }
                    else{
                        answers.push({text: cardAnswers[key], correct: false});

                    }

                }

                card['answers'] = answers;
                console.log('new card', card);
                
                //$scope.flashCardForm.$setPristine();
                
            }
            return $http.post('/cards', {
                    data: card
                }).then(function(response) {
                    //card = null; //wanted to reset card but don't know how
                    return response.data;
                });
        }

    };

});
