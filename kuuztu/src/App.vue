<template>
  <div class="container-app">
    <div class="container-quiz">
      <div class="quiz-header">
        <h1>funny monkey gif</h1>
      </div>
      <div class="quiz-main">
        <div class="box-question">
          <h2>travis scott burger</h2>
          <p>{{ActiveQuestions[CurrentQuestion].question}}</p>
        </div>
        <div class="box-answers">
          <button v-on:click="PickAnswer(0)">{{ActiveQuestions[CurrentQuestion].answers[0].answer}}</button>
          <button v-on:click="PickAnswer(1)">{{ActiveQuestions[CurrentQuestion].answers[1].answer}}</button>
          <button v-on:click="PickAnswer(2)">{{ActiveQuestions[CurrentQuestion].answers[2].answer}}</button>
          <button v-on:click="PickAnswer(3)">{{ActiveQuestions[CurrentQuestion].answers[3].answer}}</button>
        </div>
      </div>
      <div class="quiz-footer">

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted: function() {
    this.PopulateQuestions();
  },
  data() {
    return {
      NumHouseQuestions: 2,
      NumTotalQuestions: 4,
      QuestionDatabase: [
        {
          question: 'What came in the mail today?',
          answers: [
            {
              answer: 'deez nuts',
              house: 'explorer',
              value: 1
            },
            {
              answer: 'mine own testicles',
              house: 'conqueror',
              value: 1
            },
            {
              answer: 'a package',
              house: 'visionary',
              value: 1
            },
            {
              answer: 'you tell me',
              house: 'visionary',
              value: 1.5
            }
          ]
        },
        {
          question: 'you lift bro?',
          answers: [
            {
              answer: 'sometimes',
              house: 'explorer',
              value: 1
            },
            {
              answer: 'yes',
              house: 'conqueror',
              value: 1
            },
            {
              answer: 'no',
              house: 'visionary',
              value: 1
            },
            {
              answer: 'no',
              house: 'visionary',
              value: 1.5
            }
          ]
        },
        {
          question: 'One day, you\'ll be _______',
          answers: [
            {
              answer: 'a paper airplane',
              house: 'explorer',
              value: 1
            },
            {
              answer: 'a paper airplane',
              house: 'conqueror',
              value: 1
            },
            {
              answer: 'a paper airplane',
              house: 'visionary',
              value: 1
            },
            {
              answer: 'a paper airplane',
              house: 'visionary',
              value: 1.5
            }
          ]
        },
        {
          question: 'One day, you\'ll be _______2',
          answers: [
            {
              answer: 'a paper airplane',
              house: 'explorer',
              value: 1
            },
            {
              answer: 'a paper airplane',
              house: 'conqueror',
              value: 1
            },
            {
              answer: 'a paper airplane',
              house: 'visionary',
              value: 1
            },
            {
              answer: 'a paper airplane',
              house: 'visionary',
              value: 1.5
            }
          ]
        },
        {
          question: 'What is your favorite memory?',
          answers: [
            {
              answer: 'a paper airplane',
              house: 'explorer',
              value: 1
            },
            {
              answer: 'a paper airplane',
              house: 'conqueror',
              value: 1
            },
            {
              answer: 'a paper airplane',
              house: 'visionary',
              value: 1
            },
            {
              answer: 'a paper airplane',
              house: 'visionary',
              value: 1.5
            }
          ]
        },
        {
          question: 'What is your favorite memory?2',
          answers: [
            {
              answer: 'a paper airplane',
              house: 'explorer',
              value: 1
            },
            {
              answer: 'a paper airplane',
              house: 'conqueror',
              value: 1
            },
            {
              answer: 'a paper airplane',
              house: 'visionary',
              value: 1
            },
            {
              answer: 'a paper airplane',
              house: 'visionary',
              value: 1.5
            }
          ]
        },
        {
          question: 'Has my package arrived?',
          answers: [
            {
              answer: 'a paper airplane',
              house: 'explorer',
              value: 1
            },
            {
              answer: 'a paper airplane',
              house: 'conqueror',
              value: 1
            },
            {
              answer: 'a paper airplane',
              house: 'visionary',
              value: 1
            },
            {
              answer: 'a paper airplane',
              house: 'visionary',
              value: 1.5
            }
          ]
        },
        {
          question: 'Has my package arrived?2',
          answers: [
            {
              answer: 'a paper airplane',
              house: 'explorer',
              value: 1
            },
            {
              answer: 'a paper airplane',
              house: 'conqueror',
              value: 1
            },
            {
              answer: 'a paper airplane',
              house: 'visionary',
              value: 1
            },
            {
              answer: 'a paper airplane',
              house: 'visionary',
              value: 1.5
            }
          ]
        }
      ],
      ActiveQuestions: [],
      CurrentQuestion: 0,
      UserData: {
        'explorer': 0,
        'conqueror': 0,
        'visionary': 0
      }
    }
  },
  components: {
    
  },
  methods: {
    PopulateQuestions: function() {
      var vm = this;

      for(var i = 0; i < vm.NumTotalQuestions * vm.NumHouseQuestions; i += vm.NumHouseQuestions) {
        vm.ActiveQuestions.push(vm.QuestionDatabase[Math.floor(Math.random() * ((i + (vm.NumHouseQuestions - 1)) - i + 1) + i)]);
        console.log("HI");
      }
    },
    PickAnswer: function(selectedAnswer) {
      var vm = this;
      var answer = vm.QuestionDatabase[vm.CurrentQuestion].answers[selectedAnswer];

      vm.UserData[answer.house] += answer.value;

      vm.CurrentQuestion++;
    }
  }

}
</script>

