class GuideMatchesController {
  /** @ngInject */
  constructor($http, $scope) {
    this.$http = $http;
    this.$scope = $scope;
    this.guide = this.$scope.guide;

    this.matches = [ {newcomer: {fullName: 'Rania Ali', country: 'Syria'}, interest: {id: 'food_shopping', name: 'Food shopping', selected: false}},
                     {newcomer: {fullName: 'Adanna Ayo', country: 'Egypt'}, interest: {id: 'familyclothes_shopping', name: 'Clothing shopping for my family', selected: false}},
                     {newcomer: {fullName: 'Lenka Jean', country: 'France'}, interest: {id: 'prof_mentor', name: 'Professional mentorship', selected: false}},
                  /* {id: 'familyclothes_shopping', name: 'Clothing shopping for my family', selected: false},
                   {id: 'furniture_shopping', name: 'Furniture and home goods shopping', selected: false},
                   {id: 'beauty', name: 'Makeup, nails, hair and beauty', selected: false},
                   {id: 'rental_search', name: 'Finding a place to rent', selected: false},
                   {id: 'buying_search', name: 'Finding a place to buy', selected: false},
                   {id: 'gettingaround_public', name: 'Getting around by public transport', selected: false},
                   {id: 'gettingaround_car', name: 'Getting around by car', selected: false},
                   {id: 'gettingaround_bike', name: 'Getting around by bike', selected: false},
                   {id: 'gettingtoknow_nbhd', name: 'Getting to know a new neighbourhood', selected: false},
                   {id: 'drivers_license', name: 'Getting a drivers license', selected: false},
                   {id: 'prof_mentor', name: 'Professional mentorship', selected: false},
                   {id: 'english', name: 'English language practice', selected: false},
                   {id: 'australianisms', name: 'What is vegemite and are drop bears dangerous?', selected: false}*/
                 ];

    this.selection = [];
    this.selectedNeeds = {};






    //$http
    //  .post('app/newcomers/newcomerData.json', this.newcomer)
    //  .then(response => {
    //    this.techs = response.data;
    //  });
  }

   toggleSelection(needsName) {
     console.log('needsName', needsName);
     var idx = this.selection.indexOf(needsName);

     // is currently selected
     if (idx > -1) {
       this.selection.splice(idx, 1);
     } else {
       this.selection.push(needsName);
     }
   }

    submitForm($http) {
        console.log("controller -> submitForm()");
        console.log(this.$scope.newcomerDetailsForm.fullName.$modelValue);
        var newcomer = {
          id: this.id
        };
        console.log('selected', this);

        this.needsArray = [];
        console.log('this.selection', this.selection);

  }

}

export const guideMatches = {
  templateUrl: 'app/guideMatches/guideMatches.html',
  controller: GuideMatchesController
};
