import { api } from '@/helpers/axios-instance'
import { _, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import {
  ADD_CATTLE,
  SET_ALL_CATTLE,
  GET_ALL_CATTLE,
  UPDATE_SELECTED_CATTLE,
  SET_ALL_CATTLE_UNDER_TREATMENT,
  GET_ALL_CATTLE_UNDER_TREATMENT,
  SET_SELECTED_CATTLE_UNDER_TREATMENT,
  GET_ALL_CATTLE_MORTALITIES,
  GET_ALL_HEIFER_CATTLE,
  SET_LOADING,
  SET_SELECTED_CATTLE,
  PUT_IN_TREATMENT,
  PUT_CALF_IN_TREATMENT,
  MARK_AS_MORTALITY,
  MARK_AS_CALF_MORTALITY,
  SET_ALL_BULLS,
  GET_ALL_BULLS,
  SET_SELECTED_BULL,

  SET_ALL_COWS,
  GET_ALL_COWS,
  GET_ALL_RAISED_COWS,
  GET_ALL_PREGNANT_COWS,
  GET_ALL_LACTATING_COWS,
  SET_SELECTED_COW,


  ADD_CALF,
  SET_ALL_CALVES,
  GET_ALL_CALVES,
  GET_ALL_PREGNANT_CALVES,
  GET_ALL_LACTATING_CALVES,
  SET_SELECTED_CALF,
  SET_SELECTED_CALF_COPY,
  UPDATE_SELECTED_CALF_COPY,

  SET_ALL_CALVES_UNDER_TREATMENT,
  GET_ALL_CALVES_UNDER_TREATMENT,
  SET_SELECTED_CALF_UNDER_TREATMENT,

  SET_ALL_NEW_CALVES,
  GET_ALL_NEW_CALVES,
  SET_SELECTED_NEW_CALF,


  SET_ALL_WEANERS,
  GET_ALL_WEANERS,
  SET_SELECTED_WEANER,


  SET_ALL_YEARLINGS,
  GET_ALL_YEARLINGS,
  SET_SELECTED_YEARLING,


  SET_ALL_BULLING_HEIFERS,
  GET_ALL_BULLING_HEIFERS,
  SET_SELECTED_BULLING_HEIFER,



  ADD_PURCHASED_CATTLE_DMR,
  ADD_RAISED_CATTLE_DMR,
  SET_ALL_DMRS,
  GET_ALL_PURCHASED_CATTLE_DMRS,
  GET_ALL_RAISED_CATTLE_DMRS,

  SET_SELECTED_PURCHASED_CATTLE_DMR,
  SET_SELECTED_RAISED_CATTLE_DMR,

  GET_TOTAL_PURCHASED_CATTLE_DMRS,
  GET_TOTAL_RAISED_CATTLE_DMRS,
  SET_SELECTED_RAISED_COW
} from '@/helpers/mutation-types'

export const state = () => ({

  loading: false,
  allCattle: [],
  allBulls: [],
  allCows: [],
  allRaisedCows:[],
  allCattleMorts: [],
  allPregnantCows: [],
  allLactatingCows: [],
  allLactatingCalves: [],
  allPregnantCalves: [],
  allCalves: [],
  allNewCalves: [],
  allCattleUnderTreatment: [],
  allCalvesUnderTreatment: [],
  allWeaners: [],
  allYearlings: [],
  allBullingHeifers: [],
  allPurchasedHeifers:[],
  allPurchasedCattleDMRs: [],
  allRaisedCattleDMRs: [],

  totalPurchasedDMRs: [],
  totalRaisedDMRs: [],

  options: [
    'Kondwani', 'Bob', 'Linda', 'Alison'
  ],

  selectedCattle: null,
  selectedCattleMort: null,
  selectedCattleUnderTreatment: null,
  selectedCalfUnderTreatment: null,
  selectedBull: null,
  selectedCow: null,
  selectedRaisedCow: null,
  selectedPregnantCow: null,
  selectedLactatingCow: null,
  selectedPregnantCalf: null,
  selectedLactatingCalf: null,
  selectedCalf: null,
  selectedCalfCopy: null,
  selectedNewCalf: null,
  selectWeaner: null,
  selectYearling: null,
  selectBullingHeifer: null,

  selectedPurchasedCattleDMR: null,
  selectedRaisedCattleDMR: null,

  cattleForm: {

    cattleBreed: null,
    cattleDateOfBirth: null,
    datePurchased: null,
    cattleSire: null,
    cattleDam: null,
    cattleSex: null,
    cattleProductionStage: null,
    cattleAge: null,
    cattlePrice: null,
    purchasedEarTagID: null,
    earTagColor: null,
    cattleColor: null,
    supplierName: null,
    cattleStatus: null,
    cattleRemarks: null,
    createdBy: null,
    totalDMR: null


  },



  calfForm: {

    calfBreed: null,
    calfDateOfBirth: null,
    sire: null,
    dam: null,
    raisedDam: null,
    calfSex: null,
    calfWeight: null,
    productionStage:null,
    raisedEarTagID: null,
    earTagColor: null,
    calfColor: null,
    calfStatus: null,
    calfRemarks: null,
    createdBy: null,
    age: null,
    stage: null

  },


  purchasedMilkingForm: {
    purchasedEarTagID: null,
    firstMilking: null,
    secondMilking: null,
    milkingDate: null,
    createdBy: null,
    purchasedMilkOwner: null,
    totalDMR: null
  },

  raisedMilkingForm: {
   
    raisedEarTagID: null,
    firstMilking: null,
    secondMilking: null,
    milkingDate: null,
    createdBy: null,
    raisedMilkOwner: null,
    totalDMR: null
  },



  milkingFormByDate: {

    milkingStartDate: null,
    milkingEndDate: null

  }
})




export const getters = {
  getField,

  loading(state) {
    return state.loading
  },
  selectedCattle(state) {
    return state.selectedCattle
  },

  selectedCattleMort(state) {
    return state.selectedCattleMort
  },

  selectedPregnantCow(state) {
    return state.selectedPregnantCow
  },


  selectedLactatingCow(state) {
    return state.selectedLactatingCow
  },

  selectedPregnantCalf(state) {
    return state.selectedPregnantCalf
  },


  selectedLactatingCalf(state) {
    return state.selectedLactatingCalf
  },




  selectedCattleUnderTreatment(state) {
    return state.selectedCattleUnderTreatment
  },

  selectedCalfUnderTreatment(state) {
    return state.selectedCalfUnderTreatment
  },

  selectedCow(state) {
    return state.selectedCow
  },

  selectedRaisedCow(state) {
    return state.selectedRaisedCow
  },

  selectedBull(state) {
    return state.selectedBull
  },

  earTagOptions(state) {
    return state.options
  },

  allCattle(state) {
    return state.allCattle
  },



  allCattleUnderTreatment(state) {
    return state.allCattleUnderTreatment
  },

  allCalvesUnderTreatment(state) {
    return state.allCalvesUnderTreatment
  },


  allCows(state) {
    return state.allCows
  },

  allRaisedCows(state) {
    return state.allRaisedCows
  },
  allPregnantCows(state) {
    return state.allPregnantCows
  },

  allLactatingCows(state) {
    return state.allLactatingCows
  },

  allPurchasedHeifers(state) {
    return state.allPurchasedHeifers
  },

  allPregnantCalves(state) {
    return state.allPregnantCalves
  },

  allLactatingCalves(state) {
    return state.allLactatingCalves
  },

  selectedPregnantCow(state) {
    return state.selectedPregnantCow
  },


  allCattleMorts(state) {
    return state.allCattleMorts
  },

  allBulls(state) {
    return state.allBulls
  },


  selectedCalf(state) {
    return state.selectedCalf
  },

  selectedCalfCopy(state) {
    return state.selectedCalfCopy
  },

  allCalves(state) {
    return state.allCalves
  },

  //------NEW CALVES-------------
  selectedNewCalf(state) {
    return state.selectedNewCalf
  },

  allNewCalves(state) {
    return state.allNewCalves
  },


  //------WEANERS-------------
  selectedWeaner(state) {
    return state.selectedWeaner
  },

  allWeaners(state) {
    return state.allWeaners
  },

  //------YEARLINGS---------------
  selectedYearling(state) {
    return state.selectedYearling
  },

  allYearlings(state) {
    return state.allYearlings
  },

  //---------BULLING HEIFERS--------
  selectedBullingHeifer(state) {
    return state.selectedBullingHeifer
  },

  allBullingHeifers(state) {
    return state.allBullingHeifers
  },


  selectedPurchasedCattleDMR(state) {
    return state.selectedPurchasedCattleDMR
  },


  selectedRaisedCattleDMR(state) {
    return state.selectedRaisedCattleDMR
  },

  allPurchasedCattleDMRs(state) {
    return state.allPurchasedCattleDMRs
  },

  allRaisedCattleDMRs(state) {
    return state.allRaisedCattleDMRs
  },


  totalDMRs(state) {
    return state.totalDMRs
  }


}


export const mutations = {

  updateField,

  [SET_LOADING](state, loading) {
    state.loading = loading
  },

  //MUTATIONS FOR ADDING, SETTING AND GETTING TASKS
  [ADD_CATTLE](state, newCattle) {
    state.allCattle.push(newCattle)
  },

  [SET_SELECTED_CATTLE](state, newCattle) {
    state.selectedCattle = newCattle
  },
  [SET_ALL_CATTLE](state, payload) {
    state.allCattle = payload
  },
  [GET_ALL_CATTLE](state, payload) {
    state.allCattle = payload
  },

  [GET_ALL_CATTLE_MORTALITIES](state, payload) {
    state.allCattleMorts = payload
  },

  [SET_SELECTED_CATTLE_UNDER_TREATMENT](state, newCattle) {
    state.selectedCattleUnderTreatment = newCattle
  },
  [SET_ALL_CATTLE_UNDER_TREATMENT](state, payload) {
    state.allCattleUnderTreatment = payload
  },
  [GET_ALL_CATTLE_UNDER_TREATMENT](state, payload) {
    state.allCattleUnderTreatment = payload
  },


  [SET_SELECTED_CALF_UNDER_TREATMENT](state, newCalf) {
    state.selectedCalfUnderTreatment = newCalf
  },
  [SET_ALL_CALVES_UNDER_TREATMENT](state, payload) {
    state.allCalvesUnderTreatment = payload
  },
  [GET_ALL_CALVES_UNDER_TREATMENT](state, payload) {
    state.allCalvesUnderTreatment = payload
  },


  [PUT_IN_TREATMENT](state, putResponse) {
    state.selectedCattle = putResponse
    state.selectedCattle.cattleStatus = "Under Treatment"
  }
  ,

  [PUT_CALF_IN_TREATMENT](state, putResponse) {
    state.selectedCalf = putResponse
    state.selectedCalf.calfStatus = "Under Treatment"
  }
  ,

  [MARK_AS_MORTALITY](state, putResponse) {
    state.selectedCattle = putResponse
    state.selectedCattle.cattleStatus = "Mortality"
  }
  ,

  [MARK_AS_CALF_MORTALITY](state, putResponse) {
    state.selectedCalf = putResponse
    state.selectedCalf.calfStatus = "Mortaltiy"
  }
  ,

  [SET_SELECTED_COW](state, newCattle) {
    state.selectedCow = newCattle
  },
  [SET_ALL_COWS](state, payload) {
    state.allCows = payload
  },


  [GET_ALL_COWS](state, payload) {
    state.allCows = payload
  },

  [GET_ALL_RAISED_COWS](state, payload) {
    state.allRaisedCows = payload
  },

  [SET_SELECTED_RAISED_COW](state, newCalf) {
    state.selectedRaisedCow = newCalf
  },


  [GET_ALL_PREGNANT_COWS](state, payload) {
    state.allPregnantCows = payload
  },


  [GET_ALL_LACTATING_COWS](state, payload) {
    state.allLactatingCows = payload
  },

  
  [GET_ALL_HEIFER_CATTLE](state, payload) {
    state.allPurchasedHeifers = payload
  },

  [GET_ALL_LACTATING_CALVES](state, payload) {
    state.allLactatingCalves = payload
  },

  [GET_ALL_PREGNANT_CALVES](state, payload) {
    state.allPregnantCalves = payload
  },

  [SET_SELECTED_BULL](state, newCattle) {
    state.selectedBull = newCattle
  },
  [SET_ALL_BULLS](state, payload) {
    state.allBulls = payload
  },
  [GET_ALL_BULLS](state, payload) {
    state.allBulls = payload
  },



  //MUTATIONS FOR ADDING, SETTING AND GETTING CALVES
  [ADD_CALF](state, newCalf) {
    state.allCalves.push(newCalf)
  },



  [SET_SELECTED_CALF](state, newCalf) {
    state.selectedCalf = newCalf
  },

  [SET_SELECTED_CALF_COPY](state, newCalfCopy) {
    state.selectedCalfCopy = newCalfCopy
  },

  [UPDATE_SELECTED_CALF_COPY](state, payload) {
    state.selectedCalfCopy = payload
  },

  [UPDATE_SELECTED_CATTLE](state, payload) {
    state.selectedCattle = payload
  },

  [SET_ALL_CALVES](state, payload) {
    state.allCalves = payload
  },
  [GET_ALL_CALVES](state, payload) {
    state.allCalves = payload
  },


  //MUTATIONS FOR SETTING AND GETTING WEANERS

  [SET_SELECTED_NEW_CALF](state, newCalf) {
    state.selectedNewCalf = newCalf
  },



  [SET_ALL_NEW_CALVES](state, payload) {
    state.allNewCalves = payload
  },
  [GET_ALL_NEW_CALVES](state, payload) {
    state.allNewCalves = payload
  },


  //MUTATIONS FOR SETTING AND GETTING WEANERS

  [SET_SELECTED_WEANER](state, newCalf) {
    state.selectedWeaner = newCalf
  },
  [SET_ALL_WEANERS](state, payload) {
    state.allWeaners = payload
  },
  [GET_ALL_WEANERS](state, payload) {
    state.allWeaners = payload
  },

  //MUTATIONS FOR SETTING AND GETTING YEARLINGS

  [SET_SELECTED_YEARLING](state, newCalf) {
    state.selectedYearling = newCalf
  },
  [SET_ALL_YEARLINGS](state, payload) {
    state.allYearlings = payload
  },
  [GET_ALL_YEARLINGS](state, payload) {
    state.allYearlings = payload
  },


  //MUTATIONS FOR SETTING AND GETTING BULLING HEIFERS

  [SET_SELECTED_BULLING_HEIFER](state, newCalf) {
    state.selectedBullingHeifer = newCalf
  },
  [SET_ALL_BULLING_HEIFERS](state, payload) {
    state.allBullingHeifers = payload
  },
  [GET_ALL_BULLING_HEIFERS](state, payload) {
    state.allBullingHeifers = payload
  },

  //MUTATIONS FOR ADDING, SETTING AND GETTING DMRs
  [ADD_PURCHASED_CATTLE_DMR](state, newPurchasedDMR) {
    state.allPurchasedCattleDMRs.push(newPurchasedDMR)
  },

  [ADD_RAISED_CATTLE_DMR](state, newRaisedDMR) {
    state.allRaisedCattleDMRs.push(newRaisedDMR)
  },

  [SET_SELECTED_PURCHASED_CATTLE_DMR](state, payload) {
    state.selectedPurchasedCattleDMR = payload
  },

  [SET_SELECTED_RAISED_CATTLE_DMR](state, newRaisedDMR) {
    state.selectedRaisedCattleDMR = newRaisedDMR
  },

  [SET_ALL_DMRS](state, payload) {
    state.allDMRs = payload
  },
  [GET_ALL_PURCHASED_CATTLE_DMRS](state, payload) {
    state.allPurchasedCattleDMRs = payload
  },

  [GET_ALL_RAISED_CATTLE_DMRS](state, payload) {
    state.allRaisedCattleDMRs = payload
  },

  [GET_TOTAL_PURCHASED_CATTLE_DMRS](state, payload) {
    state.totalPurchasedDMRs = payload
  },

  [GET_TOTAL_RAISED_CATTLE_DMRS](state, payload) {
    state.totalRaisedDMRs = payload
  },

}

export const actions = {

  async load({ commit }) {
    try {
      commit(SET_LOADING, true)
      const newCattleLoad = await api.get(`/cattle/AllCattle`)

      const newCalfLoad = await api.get(`/cattle/AllCalves`)

      const newDMRLoad = await api.get(`/cattle/AllDMRs`)

      // await dispatch('getInactivePolicies')
      commit(SET_ALL_CATTLE, newCattleLoad.data);

      commit(SET_ALL_CALVES, newCalfLoad.data);

      commit(SET_ALL_DMRS, newDMRLoad.data);
      //   ...getters.allPolicies,
      //   ...getters.inactivePolicies,
      commit(SET_LOADING, false);

    } catch (error) {
      commit(SET_LOADING, false);
      const msg = 'Potential Network Failure. Please check your network connection and retry.'
      this.$log.error(msg)
    }
  },
  //GET ALL CATTLE
  async getAllCattle({ state, commit, _, rootGetters }) {
    try {
      //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
      commit(SET_LOADING, true)

      let calves = rootGetters['cattleData/allCalves']



      //API REQUEST IS MADE AND RESULT IS STORED IN CONST
      const { data: allCattle } = await api.get(`/cattle/allCattle`)






      //   // console.log(allCattle.data[0]._id)


      const cattleLength = allCattle.data.length;



      //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
      const filteredCattle = allCattle.data.filter(c =>
        c.createdBy === this.$auth.user.email
      );





      //-----------------FOR LOOP TO CALCULATE THE CURRENT AGE OF EACH COW-------------//

      for (let i = 0; i < filteredCattle.length; i++) {


        // console.log(filteredCattle[i].cattleDateOfBirth)

        var userinput = filteredCattle[i].cattleDateOfBirth;
        var dob = new Date(userinput);

        //check user provide input or not
        // if(userinput==null || userinput==''){
        //  // console.log ("**Choose a date please!");  
        //  // return false; 
        // } 

        //extract the year, month, and date from user date input
        var dobYear = dob.getYear();
        // console.log(dobYear)
        var dobMonth = dob.getMonth();
        // console.log(dobMonth)
        var dobDate = dob.getDate();
        // console.log(dobDate)


        //get the current date from the system
        var now = new Date();
        //extract the year, month, and date from current date
        var currentYear = now.getYear();
        // console.log(currentYear)
        var currentMonth = now.getMonth();
        // console.log(currentMonth)
        var currentDate = now.getDate();
        // console.log(currentDate)

        //declare a variable to collect the age in year, month, and days
        var age = {};
        var ageString = "";
        var stage = "";
        // var stageString= "";
        //get years
        yearAge = currentYear - dobYear;

        //get months
        if (currentMonth >= dobMonth)
          //get months when current month is greater
          var monthAge = currentMonth - dobMonth;
        else {
          yearAge--;
          var monthAge = 12 + currentMonth - dobMonth;
        }


        //get days
        if (currentDate >= dobDate)
          //get days when the current date is greater
          var dateAge = currentDate - dobDate;
        else {
          monthAge--;
          var dateAge = 31 + currentDate - dobDate;

          if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
          }
        }
        //group the age in a single variable
        age = {
          years: yearAge,
          months: monthAge,
          days: dateAge
        };

        stage = {
          years: yearAge,
          months: monthAge,
          days: dateAge
        };

        if ((age.years > 0) && (age.months > 0) && (age.days > 0))
          ageString = age.years + " years, " + age.months + " months, and " + age.days + " days old. ";

        else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
          ageString = "Only " + age.days + " days old. ";
        //when current month and date is same as birth date and month
        else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
          ageString = age.years + " years old. Happy Birthday.";

        else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
          ageString = age.years + " years and " + age.months + " months old. ";


        else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
          ageString = age.months + " months and " + age.days + " days old.";


        else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
          ageString = age.months + " months and " + age.days + " days old.";

        else if ((age.years > 0) && (age.months == 0) && (age.days > 0))
          ageString = age.years + " years, and " + age.days + " days old. ";

        else if ((age.years == 0) && (age.months > 0) && (age.days == 0))
          ageString = age.months + " months old. ";
        //when current date is same as dob(date of birth)
        else ageString = "First day in the herd.";

        //display the calculated age
        // // console.log(ageString); 
        age = ageString

        filteredCattle[i].cattleAge = ageString;

      }

      const filteredCattleByCattleStatus = filteredCattle.filter(csc =>
        csc.cattleStatus === "Under Treatment"
      );

      const filteredMortCattle = filteredCattle.filter(cscm =>
        cscm.cattleStatus === "Mortality"
      );


      const filteredCattleByMale = filteredCattle.filter(mc =>
        mc.cattleSex === "Male" && mc.cattleStatus !== "Under Treatment"  && mc.cattleStatus !== "Mortality"
      );

      const filteredCattleByFemale = filteredCattle.filter(fc =>
        fc.cattleSex === "Female" && fc.cattleStatus !== "Under Treatment" && fc.cattleStatus !== "Mortality"
      );

      const filteredPreggoCattle = filteredCattle.filter(fpc =>
        fpc.cattleSex === "Female" && fpc.cattleProductionStage === "Pregnant"
      );

      const filteredLactatingCattle = filteredCattle.filter(flca =>
        flca.cattleSex === "Female" && flca.cattleProductionStage === "Calved & Lactating"
      );

      const filteredHeiferCattle = filteredCattle.filter(fh =>
        fh.cattleSex === "Female" && fh.cattleProductionStage === "Heifer"
      );


      // // console.log(filteredCattleByMale);
      // // console.log(filteredCattleByFemale);


      // console.log(filteredCattle.length);

      let totalCattleWeight = 0;


      for (let i = 0; i < filteredCattle.length; i++) {

        for (let i = 0; i < filteredCattle.length; i++) {

          totalCattleWeight += parseInt(filteredCattle[i].cattleWeight);
        }


      }

      // console.log(totalCattleWeight);  

      // console.log(filteredCattleByMale.length);

      // console.log(filteredCattleByFemale.length);




      //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
      commit(GET_ALL_CATTLE, filteredCattle);

      commit(GET_ALL_BULLS, filteredCattleByMale);

      commit(GET_ALL_COWS, filteredCattleByFemale);

      commit(GET_ALL_PREGNANT_COWS, filteredPreggoCattle);

      commit(GET_ALL_LACTATING_COWS, filteredLactatingCattle);

      commit(GET_ALL_HEIFER_CATTLE, filteredHeiferCattle);

      commit(GET_ALL_CATTLE_UNDER_TREATMENT, filteredCattleByCattleStatus);

      commit(GET_ALL_CATTLE_MORTALITIES, filteredMortCattle);


      //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
      commit(SET_LOADING, false);

    } catch (error) {
      commit(SET_LOADING, false);
      const msg = 'Potential Network Failure. Please check your network connection and retry.'
      this.$log.error(msg)
    }
  },

  //ADD NEW TASK TO ALL CATTLE
  async addNewCattle({ state, commit }) {
    try {
      commit(SET_LOADING, true);

      const newCattle = cloneDeep(state.cattleForm);




      newCattle.createdBy = this.$auth.user.email;





      newCattle.cattleDateOfBirth = newCattle.cattleDateOfBirth.toLocaleDateString();
      newCattle.datePurchased = newCattle.datePurchased.toLocaleDateString();

  

      const response = await api.post(`/cattle/addNewCattle`, newCattle);

      


      // console.log(response.data);
      // console.log(response2.data);

      commit(ADD_CATTLE, response.data);

      commit(SET_LOADING, false);

    } catch (error) {
      commit(SET_LOADING, false);
      const msg = 'Potential Network Failure. Please check your network connection and retry.'
      this.$log.error(msg)
    }
  },



  async selectCattle({ commit }, newCattle) {
    try {

      const cattleID = newCattle._id

      console.log(cattleID);

      const { data: allDMRs } = await api.get(`/cattle/purchased/allDMRs`)
      // // console.log(allDMRs);
      console.log(allDMRs)

       const specialfilteredDMRs = allDMRs.data.filter(dmr =>
         dmr.createdBy === this.$auth.user.email && dmr.purchasedEarTagID === newCattle.purchasedEarTagID
       );

       let sum = 0;

       for (let i = 0; i < specialfilteredDMRs.length; i++) {

         sum += specialfilteredDMRs[i].DailyMilkingYield;
       }





      // // // console.log(sum);
       newCattle.totalDMR = sum;

      commit(SET_SELECTED_CATTLE, newCattle)
      //// console.log(newCattle._id)
      //// console.log(newCattle.earTagID)
      //// console.log(newCattle)

    } catch (error) {
      commit(SET_LOADING, false);
      const msg = 'Potential Network Failure. Please check your network connection and retry.'
      this.$log.error(msg)
    }

  },


  //   ----------------------------C A L V E S-----------------------------------------

  async getAllCalves({ commit }) {
    try {
      //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
      commit(SET_LOADING, true)


      //API REQUEST IS MADE AND RESULT IS STORED IN CONST
      const { data: allCalves } = await api.get(`/cattle/allCalves`)




      // // console.log(allCalves.data[0]._id)




      //  const calvesLength = allCalves.data.length;

      //// console.log(calvesLength);

      //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
      const filteredCalves = allCalves.data.filter(c =>
        c.createdBy === this.$auth.user.email
      );

      //-----------------FOR LOOP TO CALCULATE THE CURRENT AGE OF EACH COW-------------//

      for (let i = 0; i < filteredCalves.length; i++) {


        // console.log(filteredCalves[i].calfDateOfBirth)

        var userinput = filteredCalves[i].calfDateOfBirth;
        var dob = new Date(userinput);

        //check user provide input or not
        // if(userinput==null || userinput==''){
        //  // console.log ("**Choose a date please!");  
        //  // return false; 
        // } 

        //extract the year, month, and date from user date input
        var dobYear = dob.getYear();
        // console.log(dobYear)
        var dobMonth = dob.getMonth();
        // console.log(dobMonth)
        var dobDate = dob.getDate();
        // console.log(dobDate)


        //get the current date from the system
        var now = new Date();
        //extract the year, month, and date from current date
        var currentYear = now.getYear();
        // console.log(currentYear)
        var currentMonth = now.getMonth();
        // console.log(currentMonth)
        var currentDate = now.getDate();
        // console.log(currentDate)

        //declare a variable to collect the age in year, month, and days
        var age = {};
        var ageString = "";
        var stage = "";
        var stageString = "";
        //get years
        yearAge = currentYear - dobYear;

        //get months
        if (currentMonth >= dobMonth)
          //get months when current month is greater
          var monthAge = currentMonth - dobMonth;
        else {
          yearAge--;
          var monthAge = 12 + currentMonth - dobMonth;
        }


        //get days
        if (currentDate >= dobDate)
          //get days when the current date is greater
          var dateAge = currentDate - dobDate;
        else {
          monthAge--;
          var dateAge = 31 + currentDate - dobDate;

          if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
          }
        }
        //group the age in a single variable
        age = {
          years: yearAge,
          months: monthAge,
          days: dateAge
        };

        stage = {
          years: yearAge,
          months: monthAge,
          days: dateAge
        };

        if ((age.years > 0) && (age.months > 0) && (age.days > 0))
          ageString = age.years + " years, " + age.months + " months, and " + age.days + " days old. ";

        else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
          ageString = "Only " + age.days + " days old. ";
        //when current month and date is same as birth date and month
        else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
          ageString = age.years + " years old. Happy Birthday.";

        else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
          ageString = age.years + " years and " + age.months + " months old. ";


        else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
          ageString = age.months + " months and " + age.days + " days old.";


        else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
          ageString = age.months + " months and " + age.days + " days old.";

        else if ((age.years > 0) && (age.months == 0) && (age.days > 0))
          ageString = age.years + " years, and " + age.days + " days old. ";

        else if ((age.years == 0) && (age.months > 0) && (age.days == 0))
          ageString = age.months + " months old. ";
        //when current date is same as dob(date of birth)
        else ageString = "First day in the herd.";

        //display the calculated age
        // // console.log(ageString); 
        age = ageString
        //----------------------------------------- P R O D U C T I O N  S T A G E-------------------------------------------------------//

        if ((stage.years > 0) && (stage.months > 0) && (stage.days > 0))
          stageString = "Bulling Heifer Stage";
        else if ((stage.years == 0) && (stage.months == 0) && (stage.days > 0))
          stageString = "Calf Stage";
        //when current month and date is same as birth date and month
        else if ((stage.years > 0) && (stage.months == 0) && (stage.days == 0))
          stageString = "Now a Bulling Heifer";
        else if ((stage.years > 0) && (stage.months > 0) && (stage.days == 0))
          stageString = "Bulling Heifer Stage";


        else if ((stage.years == 0) && (stage.months >= 0) && (stage.months <= 2) && (stage.days >= 0))
          stageString = "Calf Stage";

        else if ((stage.years == 0) && (stage.months >= 3) && (stage.months <= 6) && (stage.days >= 0))
          stageString = "Weaner Stage";

        else if ((stage.years == 0) && (stage.months >= 6) && (stage.months <= 13) && (stage.days >= 0))
          stageString = "Yearling Stage";

        else if ((stage.years == 0) && (stage.months >= 13) && (stage.days >= 0))
          stageString = "Bulling Heifer Stage";

        else if ((stage.years > 0) && (stage.months == 0) && (stage.days >= 0))
          stageString = "Bulling Heifer Stage";

        else if ((stage.years == 0) && (stage.months >= 0) && (stage.months <= 2) && (stage.days >= 0))
          stageString = "Calf Stage";
        //when current date is same as dob(date of birth)
        else stageString = "First day in the herd.";
        // // console.log(stageString); 

        //   // console.log(ageString);

        filteredCalves[i].age = ageString
        //  // console.log(filteredCalves[i].age);

        filteredCalves[i].stage = stageString
        //  // console.log(filteredCalves[i].stage);

      }


      const filteredCalvesByMale = allCalves.data.filter(mbc =>
        mbc.calfSex === "Male" && mbc.createdBy === this.$auth.user.email
      );

      const filteredCalvesByFemale = allCalves.data.filter(fbc =>
        fbc.calfSex === "Female" && fbc.createdBy === this.$auth.user.email
      );


      //    ------------------P R O D U C T I O N     S T A G E     F I L T E R S ----------------------------------//

      const filteredCalvesByCalfStage = filteredCalves.filter(fbs =>
        fbs.stage === "Calf Stage" && (fbs.calfSex === "Female" || fbs.calfSex === "Male") && fbs.calfStatus !== "Under Treatment"  && fbs.calfStatus !== "Mortality"
      );

      const filteredCalvesByWeanerStage = filteredCalves.filter(fbs =>
        fbs.stage === "Weaner Stage" && (fbs.calfSex === "Female" || fbs.calfSex === "Male") && fbs.calfStatus !== "Under Treatment"  && fbs.calfStatus !== "Mortality"
      );

      const filteredCalvesByYearlingStage = filteredCalves.filter(fbs =>
        fbs.stage === "Yearling Stage" && (fbs.calfSex === "Female" || fbs.calfSex === "Male") && fbs.calfStatus !== "Under Treatment"  && fbs.calfStatus !== "Mortality"
      );

      const filteredCalvesByBullingHeiferStage = filteredCalves.filter(fbs =>
        fbs.stage === "Bulling Heifer Stage" && (fbs.calfSex === "Female" || fbs.calfSex === "Male") && fbs.calfStatus !== "Under Treatment"  && fbs.calfStatus !== "Mortality" || fbs.productionStage ==='Heifer'
      );

      const filteredCalvesByCalfStatus = filteredCalves.filter(csc =>
        csc.calfStatus === "Under Treatment"
      );

      const filteredPreggoCalves = filteredCalves.filter(fpc =>
        fpc.calfSex === "Female" && fpc.productionStage === "Pregnant"
      );

      const filteredLactatingCalves = filteredCalves.filter(flc =>
        flc.calfSex === "Female" && flc.productionStage === "Calved & Lactating"
      );

      const filteredRaisedCows = filteredCalves.filter(flc =>
        flc.calfSex === "Female" && flc.productionStage === "Cow"
      );

      const filteredBullingHeifers = filteredCalves.filter(frc =>
         frc.productionStage === "Heifer"
      );

      // console.log(filteredCalvesByCalfStatus); 
      // console.log(filteredCalvesByCalfStage);
      // console.log(filteredCalvesByWeanerStage);
      // console.log(filteredCalvesByYearlingStage);
      // console.log(filteredCalvesByBullingHeiferStage);

      // console.log(filteredCalves.length);

      // console.log(filteredCalvesByMale.length);

      // console.log(filteredCalvesByFemale.length);




      //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
      commit(GET_ALL_CALVES, filteredCalves);

      commit(GET_ALL_CALVES_UNDER_TREATMENT, filteredCalvesByCalfStatus);

      commit(GET_ALL_NEW_CALVES, filteredCalvesByCalfStage);

      commit(GET_ALL_WEANERS, filteredCalvesByWeanerStage);

      commit(GET_ALL_PREGNANT_CALVES, filteredPreggoCalves);

      commit(GET_ALL_YEARLINGS, filteredCalvesByYearlingStage);

      commit(GET_ALL_BULLING_HEIFERS, filteredCalvesByBullingHeiferStage);

      commit(GET_ALL_RAISED_COWS, filteredRaisedCows);

    
      //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
      commit(SET_LOADING, false);

    } catch (error) {
      commit(SET_LOADING, false);
      this.$log.error(error.message)
    }
  },

  //ADD NEW TASK TO ALL CATTLE
  async addNewCalf({ state, commit }) {
    try {
      commit(SET_LOADING, true);

      const newCalf = cloneDeep(state.calfForm);
      newCalf.createdBy = this.$auth.user.email;

      newCalf.calfDateOfBirth = newCalf.calfDateOfBirth.toLocaleDateString();

      //    ----------------------------------------------------------------------------  //

      var userinput = newCalf.calfDateOfBirth;
      var dob = new Date(userinput);

      //check user provide input or not
      if (userinput == null || userinput == '') {
        // console.log ("**Choose a date please!");  
        // return false; 
      }

      //extract the year, month, and date from user date input
      var dobYear = dob.getYear();
      // console.log(dobYear)
      var dobMonth = dob.getMonth();
      // console.log(dobMonth)
      var dobDate = dob.getDate();
      // console.log(dobDate)


      //get the current date from the system
      var now = new Date();
      //extract the year, month, and date from current date
      var currentYear = now.getYear();
      // console.log(currentYear)
      var currentMonth = now.getMonth();
      // console.log(currentMonth)
      var currentDate = now.getDate();
      // console.log(currentDate)

      //declare a variable to collect the age in year, month, and days
      var age = {};
      var ageString = "";
      var stageString = "";
      //get years
      yearAge = currentYear - dobYear;

      //get months
      if (currentMonth >= dobMonth)
        //get months when current month is greater
        var monthAge = currentMonth - dobMonth;
      else {
        yearAge--;
        var monthAge = 12 + currentMonth - dobMonth;
      }


      //get days
      if (currentDate >= dobDate)
        //get days when the current date is greater
        var dateAge = currentDate - dobDate;
      else {
        monthAge--;
        var dateAge = 31 + currentDate - dobDate;

        if (monthAge < 0) {
          monthAge = 11;
          yearAge--;
        }
      }
      //group the age in a single variable
      age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
      };

      if ((age.years > 0) && (age.months > 0) && (age.days > 0))
        ageString = age.years + " years, " + age.months + " months, and " + age.days + " days old. ";

      else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
        ageString = "Only " + age.days + " days old. ";
      //when current month and date is same as birth date and month
      else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
        ageString = age.years + " years old. Happy Birthday.";

      else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
        ageString = age.years + " years and " + age.months + " months old. ";


      else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
        ageString = age.months + " months and " + age.days + " days old.";


      else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
        ageString = age.months + " months and " + age.days + " days old.";

      else if ((age.years > 0) && (age.months == 0) && (age.days > 0))
        ageString = age.years + " years, and " + age.days + " days old. ";

      else if ((age.years == 0) && (age.months > 0) && (age.days == 0))
        ageString = age.months + " months old. ";
      //when current date is same as dob(date of birth)
      else ageString = "Welcome to Earth! <br> It's first day on Earth.";

      //display the calculated age



      newCalf.age = ageString
      //----------------------------------------- P R O D U C T I O N  S T A G E-------------------------------------------------------//

      if ((age.years > 0) && (age.months > 0) && (age.days > 0))
        stageString = "Bulling Heifer Stage";
      else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
        stageString = "Still a Calf";
      //when current month and date is same as birth date and month
      else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
        stageString = "Now a Bulling Heifer";
      else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
        stageString = "Bulling Heifer Stage";


      else if ((age.years == 0) && (age.months >= 0) && (age.months <= 2) && (age.days >= 0))
        stageString = "Calf Stage";

      else if ((age.years == 0) && (age.months >= 2) && (age.months <= 6) && (age.days >= 0))
        stageString = "Weaner Stage";

      else if ((age.years == 0) && (age.months >= 6) && (age.months <= 13) && (age.days >= 0))
        stageString = "Yearling Stage";

      else if ((age.years == 0) && (age.months >= 13) && (age.days >= 0))
        stageString = "Bulling Heifer Stage";

      else if ((age.years > 0) && (age.months == 0) && (age.days >= 0))
        stageString = "Bulling Heifer Stage";

      else if ((age.years == 0) && (age.months >= 0) && (age.months <= 2) && (age.days == 0))
        stageString = "Calf Stage";
      //when current date is same as dob(date of birth)
      else stageString = "Welcome to Earth! <br> It's first day on Earth!";

      // console.log(newCalf.stage)
      newCalf.stage = stageString;


      // console.log(newCalf._id)
      // console.log(newCalf.calfDateOfBirth)
      // console.log(newCalf.age)


      //  ---------------------------------------------------------------------------------------------  //
      // console.log(newCalf);


      // console.log(newCalf.calfDateOfBirth);

      const response = await api.post(`/cattle/addNewCalf`, newCalf);

      // console.log(response.data);

      commit(ADD_CALF, response.data);

      commit(SET_LOADING, false);

    } catch (error) {
      commit(SET_LOADING, false);
      this.log.error(error.message);
    }
  },



  selectCalf({ state, commit }, newCalf) {
    try {
      //  const {data: allCalf} = await api.get(`/cattle/AllCalf`)

      const newCalfCopy = cloneDeep(newCalf);
      console.log(newCalfCopy);

      commit(SET_SELECTED_CALF_COPY, newCalfCopy)

      commit(SET_SELECTED_CALF, newCalf)



      var userinput = newCalf.calfDateOfBirth;
      var dob = new Date(userinput);

      //check user provide input or not
      if (userinput == null || userinput == '') {
        // console.log ("**Choose a date please!");  
        // return false; 
      }

      //extract the year, month, and date from user date input
      var dobYear = dob.getYear();
      // console.log(dobYear)
      var dobMonth = dob.getMonth();
      // console.log(dobMonth)
      var dobDate = dob.getDate();
      // console.log(dobDate)


      //get the current date from the system
      var now = new Date();
      // console.log(now)
      //extract the year, month, and date from current date
      var currentYear = now.getYear();
      // console.log(currentYear)
      var currentMonth = now.getMonth();
      // console.log(currentMonth)
      var currentDate = now.getDate();
      // console.log(currentDate)

      //declare a variable to collect the age in year, month, and days
      var age = {};
      var ageString = "";
      var stageString = "";
      //get years
      yearAge = currentYear - dobYear;

      //get months
      if (currentMonth >= dobMonth)
        //get months when current month is greater
        var monthAge = currentMonth - dobMonth;
      else {
        yearAge--;
        var monthAge = 12 + currentMonth - dobMonth;
      }


      //get days
      if (currentDate >= dobDate)
        //get days when the current date is greater
        var dateAge = currentDate - dobDate;
      else {
        monthAge--;
        var dateAge = 31 + currentDate - dobDate;

        if (monthAge < 0) {
          monthAge = 11;
          yearAge--;
        }
      }
      //group the age in a single variable
      age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
      };

      if ((age.years > 0) && (age.months > 0) && (age.days > 0))
        ageString = age.years + " years, " + age.months + " months, and " + age.days + " days old. ";
      else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
        ageString = "Only " + age.days + " days old. ";
      //when current month and date is same as birth date and month
      else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
        ageString = age.years + " years old. Happy Birthday.";

      else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
        ageString = age.years + " years and " + age.months + " months old. ";


      else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
        ageString = age.months + " months and " + age.days + " days old.";


      else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
        ageString = age.months + " months and " + age.days + " days old.";

      else if ((age.years > 0) && (age.months == 0) && (age.days > 0))
        ageString = age.years + " years, and " + age.days + " days old. ";

      else if ((age.years == 0) && (age.months > 0) && (age.days == 0))
        ageString = age.months + " months old. ";
      //when current date is same as dob(date of birth)
      else ageString = "Welcome to Earth! <br> It's first day on Earth!";

      //display the calculated age
      // console.log(ageString); 
      newCalf.age = ageString
      //----------------------------------------- P R O D U C T I O N  S T A G E-------------------------------------------------------//

      if ((age.years > 0) && (age.months > 0) && (age.days > 0))
        stageString = "Bulling Heifer Stage";
      else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
        stageString = "Still a Calf";
      //when current month and date is same as birth date and month
      else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
        stageString = "Now a Bulling Heifer";
      else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
        stageString = "Bulling Heifer Stage";


      else if ((age.years == 0) && (age.months >= 0) && (age.months <= 2) && (age.days > 0))
        stageString = "Calf Stage";

      else if ((age.years == 0) && (age.months >= 2) && (age.months <= 6) && (age.days > 0))
        stageString = "Weaner Stage";

      else if ((age.years == 0) && (age.months >= 6) && (age.months <= 13) && (age.days > 0))
        stageString = "Yearling Stage";

      else if ((age.years == 0) && (age.months >= 13) && (age.days > 0))
        stageString = "Bulling Heifer Stage";

      else if ((age.years > 0) && (age.months == 0) && (age.days > 0))
        stageString = "Bulling Heifer Stage";

      else if ((age.years == 0) && (age.months >= 0) && (age.months <= 2) && (age.days == 0))
        stageString = "Calf Stage";
      //when current date is same as dob(date of birth)
      else stageString = "Welcome to Earth! <br> It's first day on Earth!";

      // console.log(allCalves.data[i].calfDateOfBirth)

      // console.log(newCalf._id)
      // console.log(newCalf.calfDateOfBirth)
      // console.log(newCalf.age)
    } catch (error) {
      // console.log('Error')
    }

  },


  //GET ALL CATTLE
  async getAllPurchasedDMRs({ commit }) {
    try {
      //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
      commit(SET_LOADING, true)


      //API REQUEST IS MADE AND RESULT IS STORED IN CONST
      const { data: allDMRs } = await api.get(`/cattle/purchased/allDMRs`)


      let totalCount = 0;

     // console.log(allDMRs)

      //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
      const filteredPurchasedDMRs = allDMRs.data.filter(dmr =>
        dmr.createdBy === this.$auth.user.email

      );

     

      //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
      commit(GET_ALL_PURCHASED_CATTLE_DMRS, filteredPurchasedDMRs);


      //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
      commit(SET_LOADING, false);

    } catch (error) {
      commit(SET_LOADING, false);
      this.$log.error(error.message)
    }
  },


    //GET ALL CATTLE
    async getAllRaisedDMRs({ commit }) {
      try {
        //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
        commit(SET_LOADING, true)
  
  
        //API REQUEST IS MADE AND RESULT IS STORED IN CONST
        const { data: allDMRs } = await api.get(`/cattle/raised/allDMRs`)
  
  
        let totalCount = 0;
  
       // console.log(allDMRs)
  
        //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
        const filteredRaisedCattleDMRs = allDMRs.data.filter(dmr =>
          dmr.createdBy === this.$auth.user.email
  
        );
  
       
  
        //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
        commit(GET_ALL_RAISED_CATTLE_DMRS, filteredRaisedCattleDMRs);
  
  
        //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
        commit(SET_LOADING, false);
  
      } catch (error) {
        commit(SET_LOADING, false);
        this.$log.error(error.message)
      }
    },
  


  async addMilkingByDate({ state, commit }) {
    try {

      commit(SET_LOADING, true)

      const newFBD = state.milkingFormByDate;

      newFBD.milkingStartDate = newFBD.milkingStartDate;
      newFBD.milkingEndDate = newFBD.milkingEndDate;

      // console.log(newFBD.milkingStartDate);
      // console.log(newFBD.milkingEndDate);

      const { data: response } = await api.post(`/cattle/allDMRsByDate`, newFBD);

      // console.log(response.data);

      //      //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
      //      const filteredDMRs = allDMRs.data.filter( dmr => 
      //       dmr.createdBy === this.$auth.user.email 

      //      );

      //     //-----------------------------------CALCULATE TOTAL MILK YIELD BY DATE-----------------------------//
      //  const filteredDmrByDate = filteredDMRs.filter( t => 
      //   t.milkingDate > "7/15/2022" && t.milkingDate < "7/19/2022"
      //  );


      //  // console.log(filteredDmrByDate[0].DailyMilkingYield)

      //   let sum = 0;

      //   for (let i = 0; i < filteredDmrByDate.length; i++) {

      //       sum += filteredDmrByDate[i].DailyMilkingYield;
      //   }

      // // console.log(sum);

      //  const totalFilteredMilking = sum
      //----------------------------------------------------------------------------------------------------//

      //     //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
      commit(GET_TOTAL_DMRS, response.data);

      // // console.log(totalFilteredMilking);


      //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
      commit(SET_LOADING, false);

    } catch (error) {

    }
  },


  //GET TOTAL DMRs PER 
  async getTotalPurchasedCattleDMRs({ commit }) {
    try {
      //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
      commit(SET_LOADING, true)


      //API REQUEST IS MADE AND RESULT IS STORED IN CONST
      const { data: allDMRs } = await api.get(`/cattle/purchased/allDMRs`)


      var totalCount = 0;

      // console.log(allDMRs);

      // console.log(allDMRs.data[0].earTagID);

      for (let i = 0; i < allDMRs.length; ++i) {

        totalCount = totalCount + i;;


      }

      // console.log(totalCount);


      // console.log((allDMRs.data[0].firstMilking).toFixed(2));


      const dmrLength = allDMRs.data.length;

      // console.log(dmrLength);

      //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
      const filteredDMRs = allDMRs.data.filter(dmr =>
        dmr.createdBy === this.$auth.user.email

      );





      const specialfilteredDMRs = allDMRs.data.filter(dmr =>
        dmr.createdBy === this.$auth.user.email && dmr.earTagID === 'FG-1000-P'
      );




      let total = 0;



      for (let i = 0; i < specialfilteredDMRs.length; i++) {

        total += specialfilteredDMRs[i].DailyMilkingYield;

        // totalEarnings += specialfilteredDMRs[i].dailyEarnings;

      }

      let totalEarnings = 0;

      for (let i = 0; i < specialfilteredDMRs.length; i++) {
        if (allDMRs.data[i].earTagID === 'WP-3008-200-N') {

          totalEarnings += specialfilteredDMRs[i].dailyEarnings;

        }

      }

      // console.log(totalEarnings.toFixed(2));




      // console.log(specialfilteredDMRs); 

      // console.log(total.toFixed(1));









      //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
      commit(GET_ALL_PURCHASED_CATTLE_DMRS, filteredDMRs);


      //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
      commit(SET_LOADING, false);

    } catch (error) {
      commit(SET_LOADING, false);
      this.$log.error(error.message)
    }
  },


  async getTotalRaisedCattleDMRs({ commit }) {
    try {
      //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
      commit(SET_LOADING, true)


      //API REQUEST IS MADE AND RESULT IS STORED IN CONST
      const { data: allDMRs } = await api.get(`/cattle/raised/allDMRs`)


      var totalCount = 0;

      // console.log(allDMRs);

      // console.log(allDMRs.data[0].earTagID);

      for (let i = 0; i < allDMRs.length; ++i) {

        totalCount = totalCount + i;;


      }

      // console.log(totalCount);


      // console.log((allDMRs.data[0].firstMilking).toFixed(2));


      const dmrLength = allDMRs.data.length;

      // console.log(dmrLength);

      //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
      const filteredDMRs = allDMRs.data.filter(dmr =>
        dmr.createdBy === this.$auth.user.email

      );





      const specialfilteredDMRs = allDMRs.data.filter(dmr =>
        dmr.createdBy === this.$auth.user.email && dmr.earTagID === 'FG-1000-P'
      );




      let total = 0;



      for (let i = 0; i < specialfilteredDMRs.length; i++) {

        total += specialfilteredDMRs[i].DailyMilkingYield;

        // totalEarnings += specialfilteredDMRs[i].dailyEarnings;

      }

      let totalEarnings = 0;

      for (let i = 0; i < specialfilteredDMRs.length; i++) {
        if (allDMRs.data[i].earTagID === 'WP-3008-200-N') {

          totalEarnings += specialfilteredDMRs[i].dailyEarnings;

        }

      }

      // console.log(totalEarnings.toFixed(2));




      // console.log(specialfilteredDMRs); 

      // console.log(total.toFixed(1));









      //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
      commit(GET_ALL_RAISED_CATTLE_DMRS, filteredDMRs);


      //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
      commit(SET_LOADING, false);

    } catch (error) {
      commit(SET_LOADING, false);
      this.$log.error(error.message)
    }
  },





  //ADD NEW TASK TO ALL CATTLE
  async addNewPurchasedCattleDMR({ state, commit }) {
    try {
      commit(SET_LOADING, true);

      const newPurchasedDMR = cloneDeep(state.purchasedMilkingForm);

      newPurchasedDMR.createdBy = this.$auth.user.email;
      newPurchasedDMR.purchasedEarTagID = newPurchasedDMR.purchasedEarTagID;   
      newPurchasedDMR.purchasedMilkOwner = newPurchasedDMR.purchasedEarTagID;
      newPurchasedDMR.firstMilking = parseInt(newPurchasedDMR.firstMilking);
      newPurchasedDMR.secondMilking = parseInt(newPurchasedDMR.secondMilking);
      newPurchasedDMR.milkingDate = newPurchasedDMR.milkingDate.toLocaleDateString('en-US');
      newPurchasedDMR.totalDMR = 0;




      console.log(newPurchasedDMR);



      const response = await api.post(`/cattle/addNewPurchasedDMR`, newPurchasedDMR);

      console.log(response.data);

      commit(ADD_PURCHASED_CATTLE_DMR, response.data);

      commit(SET_LOADING, false);

    } catch (error) {
      commit(SET_LOADING, false);
      this.log.error(error.message);
    }
  },


  async addNewRaisedCattleDMR({ state, commit }) {
    try {
      commit(SET_LOADING, true);

      const newRaisedDMR = cloneDeep(state.raisedMilkingForm);

      newRaisedDMR.createdBy = this.$auth.user.email;

      newRaisedDMR.raisedEarTagID = newRaisedDMR.raisedEarTagID;
      newRaisedDMR.raisedMilkOwner = newRaisedDMR.raisedEarTagID;
      newRaisedDMR.firstMilking = parseInt(newRaisedDMR.firstMilking);
      newRaisedDMR.secondMilking = parseInt(newRaisedDMR.secondMilking);
      newRaisedDMR.milkingDate = newRaisedDMR.milkingDate.toLocaleDateString('en-US');
      newRaisedDMR.totalDMR = 0;




      console.log(newRaisedDMR);



      const response = await api.post(`/cattle/addNewRaisedDMR`, newRaisedDMR);

      console.log(response.data);

      commit(ADD_RAISED_CATTLE_DMR, response.data);

      commit(SET_LOADING, false);

    } catch (error) {
      commit(SET_LOADING, false);
      this.log.error(error.message);
    }
  },



  async selectPurchasedCattleDMR({ commit }, newPurchasedDMR) {
    try {

      let ID = newPurchasedDMR._id

      console.log(ID);
      
     


      commit(SET_SELECTED_PURCHASED_CATTLE_DMR, newPurchasedDMR)
      console.log(newPurchasedDMR);
       console.log(newPurchasedDMR._id);
       console.log(newPurchasedDMR.purchasedEarTagID);
       console.log(newPurchasedDMR.dailyEarnings)

       commit(SET_LOADING, false);


    } catch (error) {
      commit(SET_LOADING, false);
      this.log.error(error.message);
    }

  },

  async selectRaisedCattleDMR({ commit }, newRaisedDMR) {
    try {


      const { data: allDMRs } = await api.get(`/cattle/raised/allDMRs`)
      // console.log(allDMRs);

   
      const specialRaisedFilteredDMRs = allDMRs.data.filter(rdmr =>
        rdmr.createdBy === this.$auth.user.email && rdmr.raisedEarTagID === newRaisedDMR.raisedEarTagID,
        
      );
     
      console.log(specialRaisedFilteredDMRs)
      

      

      let sum = 0;

     
      
      for (let i = 0; i < specialRaisedFilteredDMRs.length; i++) {

        sum += specialRaisedFilteredDMRs[i].DailyMilkingYield;
      }





      // console.log(sum);
      newRaisedDMR.totalDMR = sum;

      commit(SET_SELECTED_RAISED_CATTLE_DMR, newRaisedDMR)
      // console.log(newDMR);
      // console.log(newDMR._id);
      // console.log(newDMR.earTagID);
      // console.log(newDMR.dailyEarnings)

      // console.log(specialfilteredDMRs)

    } catch (error) {
       console.log('Error')
    }

  },


  async getTotalMikingRecords({ commit }) {
    try {
      commit(SET_LOADING, true);

      const { data: cows } = await api.get(`/cattle/AllCattle`)



      // console.log(cows);


      const { data: allDMRs } = await api.get(`/cattle/AllDMRs`)


      // console.log(allDMRs);




      let total = cows.map((cow) => {
        return {
          cow: cow,
          milking: allDMRs.filter((milk) => milk.cowEarTag === cow.earTag),
        };
      });

      // console.log(total);



      commit(SET_LOADING, false);

    } catch (error) {

    }
  },
  async putInTreatment({ state, commit }, newTask) {
    try {
      commit(SET_LOADING, true)
      const newCattle = state.selectedCattle
      //  const newTask = rootGetters['finance/selectedPermitApplication'] 
      // console.log(newCattle._id)

      const { data: putResponse } = await api.put(`/cattle/putInTreatment/${newCattle._id}`, { newCattle, cattleStatus: "Under Treatment" })

      commit(PUT_IN_TREATMENT, putResponse)

      // console.log(putResponse.data);

      commit(SET_LOADING, false)
    } catch (error) {
      commit(SET_LOADING, false)
      throw error
    }
  },

  async markAsTreated({ state, commit }, newTask) {
    try {
      commit(SET_LOADING, true)
      const newCattle = state.selectedCattle
      //  const newTask = rootGetters['finance/selectedPermitApplication'] 
      // console.log(newCattle._id)

      const { data: putResponse } = await api.put(`/cattle/markAsTreated/${newCattle._id}`, { newCattle, cattleStatus: "Treated" })

      commit(PUT_IN_TREATMENT, putResponse)

      // console.log(putResponse.data);

      commit(SET_LOADING, false)
    } catch (error) {
      commit(SET_LOADING, false)
      throw error
    }
  },



  async markAsInCalf({ state, commit }, newTask) {
    try {
      commit(SET_LOADING, true)
      const newCattle = state.selectedCattle
      //  const newTask = rootGetters['finance/selectedPermitApplication'] 
      // console.log(newCattle._id)

      const { data: putResponse } = await api.put(`/cattle/markAsInCalf/${newCattle._id}`, { newCattle, cattleProductionStage: "Pregnant" })

      commit(PUT_IN_TREATMENT, putResponse)

      // console.log(putResponse.data);

      commit(SET_LOADING, false)
    } catch (error) {
      commit(SET_LOADING, false)
      throw error
    }
  },


  async markAsCalved({ state, commit }) {
    try {
      commit(SET_LOADING, true)
      const newCattle = state.selectedCattle
      //  const newTask = rootGetters['finance/selectedPermitApplication'] 
      // console.log(newCattle._id)

      const { data: putResponse } = await api.put(`/cattle/markAsInCalf/${newCattle._id}`, { newCattle, cattleProductionStage: "Calved & Lactating" })

      commit(PUT_IN_TREATMENT, putResponse)

      // console.log(putResponse.data);

      commit(SET_LOADING, false)
    } catch (error) {
      commit(SET_LOADING, false)
      throw error
    }
  },


  async markAsMortality({ state, commit }) {
    try {
      commit(SET_LOADING, true)
      const newCattle = state.selectedCattle
      //  const newTask = rootGetters['finance/selectedPermitApplication'] 
      // console.log(newCattle._id)

      const { data: putResponse } = await api.put(`/cattle/markAsMortality/${newCattle._id}`, { newCattle, cattleStatus: "Mortality", cattleProductionStage:"Mortality" })

      commit(MARK_AS_MORTALITY, putResponse)

      // console.log(putResponse.data);

      commit(SET_LOADING, false)
    } catch (error) {
      commit(SET_LOADING, false)
      throw error
    }
  },


  async putCalfInTreatment({ state, commit }, newTask) {
    try {
      commit(SET_LOADING, true)
      const newCalf = state.selectedCalf
      //  const newTask = rootGetters['finance/selectedPermitApplication'] 
      // console.log(newCalf._id)

      const { data: putResponse } = await api.put(`/cattle/putCalfInTreatment/${newCalf._id}`, { newCalf, calfStatus: "Under Treatment" })

      commit(PUT_CALF_IN_TREATMENT, putResponse)

      // console.log(putResponse.data);

      commit(SET_LOADING, false)
    } catch (error) {
      commit(SET_LOADING, false)
      throw error
    }
  },

  async markCalfAsTreated({ state, commit }, newTask) {
    try {
      commit(SET_LOADING, true)
      const newCalf = state.selectedCalf
      //  const newTask = rootGetters['finance/selectedPermitApplication'] 
      // console.log(newCalf._id)

      const { data: putResponse } = await api.put(`/cattle/markCalfAsTreated/${newCalf._id}`, { newCalf, calfStatus: "Treated" })

      commit(PUT_CALF_IN_TREATMENT, putResponse)

      // console.log(putResponse.data);

      commit(SET_LOADING, false)
    } catch (error) {
      commit(SET_LOADING, false)
      throw error
    }
  },

  async markCalfAsInCalf({ state, commit }) {
    try {
      commit(SET_LOADING, true)
      const newCalf = state.selectedCalf
      //  const newTask = rootGetters['finance/selectedPermitApplication'] 
      // console.log(newCattle._id)

      const { data: putResponse } = await api.put(`/cattle/markCalfAsInCalf/${newCalf._id}`, { newCalf, productionStage: "Pregnant" })

      commit(PUT_IN_TREATMENT, putResponse)

      // console.log(putResponse.data);

      commit(SET_LOADING, false)
    } catch (error) {
      commit(SET_LOADING, false)
      throw error
    }
  },



  async updateCalfDetails({ state, commit }) {
    try {
      commit(SET_LOADING, true)
      //const newCalf = state.selectedCalf.calfBreed


      const newCalfCopy = cloneDeep(state.selectedCalfCopy)
      let calfCopyBreed = newCalfCopy.calfBreed
      let calfCopyDate = newCalfCopy.calfDateOfBirth
      let calfCopySire = newCalfCopy.sire
      let calfCopyDam = newCalfCopy.dam
      let calfCopyRaisedDam = newCalfCopy.raisedDam
      let calfCopyProductionStage = newCalfCopy.productionStage
      let calfCopySex = newCalfCopy.calfSex
      let calfCopyWeight = newCalfCopy.calfWeight
      let calfCopyEarTagID = newCalfCopy.raisedEarTagID
      let calfCopyEarTagColor = newCalfCopy.earTagColor
      let calfCopyCalfColor = newCalfCopy.calfColor
      let calfCopyStatus = newCalfCopy.calfStatus
      let calfCopyRemarks = newCalfCopy.calfRemarks



      //  const newTask = rootGetters['finance/selectedPermitApplication'] 
      // console.log(newCalf._id)  
      console.log(calfCopyBreed)
      console.log(calfCopyDate)
      console.log(calfCopySire)
      console.log(calfCopyDam)
      console.log(calfCopyRaisedDam)
      console.log(calfCopySex)
      console.log(calfCopyWeight)
      console.log(calfCopyEarTagID)
      console.log(calfCopyEarTagColor)
      console.log(calfCopyCalfColor)
      console.log(calfCopyStatus)
      console.log(calfCopyRemarks)

      const { data: putResponse } = await api.put(`/cattle/updateCalf/${newCalfCopy._id}`, {
        newCalfCopy,
        calfBreed: `${calfCopyBreed}`,
        calfDateOfBirth: `${calfCopyDate}`,
        sire: `${calfCopySire}`,
        dam: `${calfCopyDam}`,
        raisedDam: `${calfCopyRaisedDam}`,
        productionStage: `${calfCopyProductionStage}`,
        calfSex: `${calfCopySex}`,
        calfWeight: `${calfCopyWeight}`,
        raisedEarTagID: `${calfCopyEarTagID}`,
        earTagColor: `${calfCopyEarTagColor}`,
        calfColor: `${calfCopyCalfColor}`,
        calfStatus: `${calfCopyStatus}`,
        calfRemarks: `${calfCopyRemarks}`

      })

      commit(UPDATE_SELECTED_CALF_COPY, putResponse)

      // console.log(putResponse.data);

      commit(SET_LOADING, false)
    } catch (error) {
      commit(SET_LOADING, false)
      throw error
    }
  },


  async updateCattleDetails({ state, commit }) {
    try {
      commit(SET_LOADING, true)
      //const newCalf = state.selectedCalf.calfBreed


      const newCattleCopy = cloneDeep(state.selectedCattle)
      let cattleCopyBreed = newCattleCopy.cattleBreed
      let cattleCopyDate = newCattleCopy.cattleDateOfBirth
      let cattleCopySire = newCattleCopy.cattleSire
      let cattleCopyDam = newCattleCopy.cattleDam
      let cattleCopySex = newCattleCopy.cattleSex
      let cattleCopyProductionStage = newCattleCopy.cattleProductionStage
      let cattleCopyWeight = newCattleCopy.cattleWeight
      let cattleCopyEarTagID = newCattleCopy.purchasedEarTagID
      let cattleCopyEarTagColor = newCattleCopy.earTagColor
      let cattleCopyColor = newCattleCopy.cattleColor
      let cattleCopyStatus = newCattleCopy.cattleStatus
      let cattleCopyRemarks = newCattleCopy.cattleRemarks



      //  const newTask = rootGetters['finance/selectedPermitApplication'] 
      // console.log(newCalf._id)  
      console.log(cattleCopyBreed)
      console.log(cattleCopyDate)
      console.log(cattleCopySire)
      console.log(cattleCopyDam)
      console.log(cattleCopySex)
      console.log(cattleCopyProductionStage)
      console.log(cattleCopyWeight)
      console.log(cattleCopyEarTagID)
      console.log(cattleCopyEarTagColor)
      console.log(cattleCopyColor)
      console.log(cattleCopyStatus)
      console.log(cattleCopyRemarks)

      const { data: putResponse } = await api.put(`/cattle/updateCattle/${newCattleCopy._id}`, {
        newCattleCopy,
        cattleBreed: `${cattleCopyBreed}`,
        cattleDateOfBirth: `${cattleCopyDate}`,
        sire: `${cattleCopySire}`,
        dam: `${cattleCopyDam}`,
        cattleSex: `${cattleCopySex}`,
        cattleProductionStage:`${cattleCopyProductionStage}`,
        cattleWeight: `${cattleCopyWeight}`,
        purchasedEarTagID: `${cattleCopyEarTagID}`,
        earTagColor: `${cattleCopyEarTagColor}`,
        cattleColor: `${cattleCopyColor}`,
        cattleStatus: `${cattleCopyStatus}`,
        cattleRemarks: `${cattleCopyRemarks}`

      })

      commit(UPDATE_SELECTED_CATTLE, putResponse)

      // console.log(putResponse.data);

      commit(SET_LOADING, false)
    } catch (error) {
      commit(SET_LOADING, false)
      throw error
    }
  },


  async deleteRaisedCattle({ state, commit }) {
    try {
      commit(SET_LOADING, true)
      const newCalf = state.selectedCalf
      //  const newTask = rootGetters['finance/selectedPermitApplication'] 
      // console.log(newCattle._id)

      const { data: putResponse } = await api.delete(`/cattle/raised/${newCalf._id}`, newCalf)

      commit(PUT_IN_TREATMENT, putResponse)

      // console.log(putResponse.data);

      commit(SET_LOADING, false)
    } catch (error) {
      commit(SET_LOADING, false)
      throw error
    }
  },



}







