var app = angular.module("main", []);
app.controller("main", function($scope) { 
$scope.selectedPlan = "OriginalPlan";
var that = this;
this.render = function(plan) {
            this.disable(this.previousPlan);
            this.enable(plan);
            this.previousPlan = plan;
};
var radios = document.querySelectorAll("input[type=radio][name=planselector]");
Array.prototype.forEach.call(radios, function (radio) {
    radio.addEventListener("change", function () { 
that.setDefaults($scope.selectedPlan);
that.render($scope.selectedPlan);
   });
});
this.OriginalPlanList = [];
this.OriginalPlanClicked = [];
this.OriginalPlanLegendBtns = [];
this.OriginalPlanLegendBtnsClicked = [];
this.OriginalPlanTerms = 8;
this.OriginalPlanMaxCourses = 7;
this.ProposedPlanJuly2021List = [];
this.ProposedPlanJuly2021Clicked = [];
this.ProposedPlanJuly2021LegendBtns = [];
this.ProposedPlanJuly2021LegendBtnsClicked = [];
this.ProposedPlanJuly2021Terms = 8;
this.ProposedPlanJuly2021MaxCourses = 7;
this.previousPlan = $scope.selectedPlan
this.setDefaults = function(plan) { 
  switch(plan) { 
      case "OriginalPlan": 
          $scope.$apply();
          break;
      case "ProposedPlanJuly2021": 
          $scope.$apply();
          break;
    default:
    console.log("shouldn't be here");
    }
};
$scope.globalSubGroupChange = function () { 
that.render($scope.selectedPlan);
};
this.disable = function(plan) {
    switch (plan) { 
  case "OriginalPlan": 
    for (let i = 0; i < this.OriginalPlanList.length; i++) {
        this.OriginalPlanList[i][0].hide(true);
    }
    break; 
  case "ProposedPlanJuly2021": 
    for (let i = 0; i < this.ProposedPlanJuly2021List.length; i++) {
        this.ProposedPlanJuly2021List[i][0].hide(true);
    }
    break; 
    default:
    console.log("shouldn't be here");
    }
};
  var currbtn = document.getElementById("NaturalSciences");
  that.OriginalPlanLegendBtns.push(currbtn);
  that.ProposedPlanJuly2021LegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringProfession");
  that.OriginalPlanLegendBtns.push(currbtn);
  that.ProposedPlanJuly2021LegendBtns.push(currbtn);
  var currbtn = document.getElementById("Math");
  that.OriginalPlanLegendBtns.push(currbtn);
  that.ProposedPlanJuly2021LegendBtns.push(currbtn);
  var currbtn = document.getElementById("COMP");
  that.OriginalPlanLegendBtns.push(currbtn);
  that.ProposedPlanJuly2021LegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringSciences");
  that.OriginalPlanLegendBtns.push(currbtn);
  that.ProposedPlanJuly2021LegendBtns.push(currbtn);
  var currbtn = document.getElementById("Mechatronics");
  that.OriginalPlanLegendBtns.push(currbtn);
  that.ProposedPlanJuly2021LegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringDesign");
  that.OriginalPlanLegendBtns.push(currbtn);
  that.ProposedPlanJuly2021LegendBtns.push(currbtn);
  var currbtn = document.getElementById("Other");
  that.OriginalPlanLegendBtns.push(currbtn);
  that.ProposedPlanJuly2021LegendBtns.push(currbtn);
  var currbtn = document.getElementById("ITS");
  that.OriginalPlanLegendBtns.push(currbtn);
  that.ProposedPlanJuly2021LegendBtns.push(currbtn);
  var currbtn = document.getElementById("PROG");
  that.OriginalPlanLegendBtns.push(currbtn);
  that.ProposedPlanJuly2021LegendBtns.push(currbtn);
this.enable = function(plan) {
  switch(plan) {
    case "OriginalPlan": 
      for (let i = 0; i < this.OriginalPlanList.length; i++) {
          this.OriginalPlanList[i][0].show(true);
      }
      width = this.OriginalPlanTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.OriginalPlanMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.OriginalPlanClicked.length; i++) {
          var element = document.getElementById(this.OriginalPlanClicked[i][0]);
          element.classList.remove(this.OriginalPlanClicked[i][1]);
          element.classList.add(this.OriginalPlanClicked[i][1]+"-highlighted");
      }
      for (let i = 0; i < this.OriginalPlanLegendBtns.length; i++) {
          var found = false;
          for (let j = 0; j < this.OriginalPlanLegendBtnsClicked.length; j++) {
              if (this.OriginalPlanLegendBtnsClicked[j] == this.OriginalPlanLegendBtns[i]) {
                  found = true;
              }
          }
          if (found == false) {
              this.OriginalPlanLegendBtns[i].classList.remove("legendbutton-pressed");
              this.OriginalPlanLegendBtns[i].classList.add("legendbutton");
          }
          if (found == true) {
              this.OriginalPlanLegendBtns[i].classList.remove("legendbutton");
              this.OriginalPlanLegendBtns[i].classList.add("legendbutton-pressed");
          }
      }
      break; 
    case "ProposedPlanJuly2021": 
      for (let i = 0; i < this.ProposedPlanJuly2021List.length; i++) {
          this.ProposedPlanJuly2021List[i][0].show(true);
      }
      width = this.ProposedPlanJuly2021Terms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.ProposedPlanJuly2021MaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.ProposedPlanJuly2021Clicked.length; i++) {
          var element = document.getElementById(this.ProposedPlanJuly2021Clicked[i][0]);
          element.classList.remove(this.ProposedPlanJuly2021Clicked[i][1]);
          element.classList.add(this.ProposedPlanJuly2021Clicked[i][1]+"-highlighted");
      }
      for (let i = 0; i < this.ProposedPlanJuly2021LegendBtns.length; i++) {
          var found = false;
          for (let j = 0; j < this.ProposedPlanJuly2021LegendBtnsClicked.length; j++) {
              if (this.ProposedPlanJuly2021LegendBtnsClicked[j] == this.ProposedPlanJuly2021LegendBtns[i]) {
                  found = true;
              }
          }
          if (found == false) {
              this.ProposedPlanJuly2021LegendBtns[i].classList.remove("legendbutton-pressed");
              this.ProposedPlanJuly2021LegendBtns[i].classList.add("legendbutton");
          }
          if (found == true) {
              this.ProposedPlanJuly2021LegendBtns[i].classList.remove("legendbutton");
              this.ProposedPlanJuly2021LegendBtns[i].classList.add("legendbutton-pressed");
          }
      }
      break; 
    default:
    console.log("shouldn't be here");
    }
};
this.addLine = function(line) {
switch($scope.selectedPlan) { 
 case "OriginalPlan":
    var index = this.OriginalPlanList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.OriginalPlanList.push([line, 1])
    }
    else {
        this.OriginalPlanList[index][1]++;
    }
    break;
 case "ProposedPlanJuly2021":
    var index = this.ProposedPlanJuly2021List.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.ProposedPlanJuly2021List.push([line, 1])
    }
    else {
        this.ProposedPlanJuly2021List[index][1]++;
    }
    break;
    default:
    console.log("shouldn't be here");
    }
};
this.removeLine = function(line) {
switch($scope.selectedPlan) { 
 case "OriginalPlan":
    var index = this.OriginalPlanList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.OriginalPlanList[index][1]--
        if (this.OriginalPlanList[index][1] <= 0) {
            line.hide(false);
            this.OriginalPlanList.splice(index, 1);
        }
    }
    break; case "ProposedPlanJuly2021":
    var index = this.ProposedPlanJuly2021List.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.ProposedPlanJuly2021List[index][1]--
        if (this.ProposedPlanJuly2021List[index][1] <= 0) {
            line.hide(false);
            this.ProposedPlanJuly2021List.splice(index, 1);
        }
    }
    break;    default:
    console.log("shouldn't be here");
    }
};
this.addToClicked = function(element) {
switch($scope.selectedPlan) { 
 case "OriginalPlan":
    var index = this.OriginalPlanClicked.findIndex((item) => item[0] == element[0]);
    if (index == -1) {
        this.OriginalPlanClicked.push(element);
    }
    break; case "ProposedPlanJuly2021":
    var index = this.ProposedPlanJuly2021Clicked.findIndex((item) => item[0] == element[0]);
    if (index == -1) {
        this.ProposedPlanJuly2021Clicked.push(element);
    }
    break;    default:
    console.log("shouldn't be here");
    }
};
this.removeFromClicked = function(element) {
switch($scope.selectedPlan) { 
 case "OriginalPlan":
    var index = this.OriginalPlanClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        this.OriginalPlanClicked.splice(index, 1);
    }
    break; case "ProposedPlanJuly2021":
    var index = this.ProposedPlanJuly2021Clicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        this.ProposedPlanJuly2021Clicked.splice(index, 1);
    }
    break;    default:
    console.log("shouldn't be here");
    }
};
var NaturalSciencesOriginalPlanflag = false;
var NaturalSciencesProposedPlanJuly2021flag = false;
var EngineeringProfessionOriginalPlanflag = false;
var EngineeringProfessionProposedPlanJuly2021flag = false;
var MathOriginalPlanflag = false;
var MathProposedPlanJuly2021flag = false;
var COMPOriginalPlanflag = false;
var COMPProposedPlanJuly2021flag = false;
var EngineeringSciencesOriginalPlanflag = false;
var EngineeringSciencesProposedPlanJuly2021flag = false;
var MechatronicsOriginalPlanflag = false;
var MechatronicsProposedPlanJuly2021flag = false;
var EngineeringDesignOriginalPlanflag = false;
var EngineeringDesignProposedPlanJuly2021flag = false;
var OtherOriginalPlanflag = false;
var OtherProposedPlanJuly2021flag = false;
var ITSOriginalPlanflag = false;
var ITSProposedPlanJuly2021flag = false;
var PROGOriginalPlanflag = false;
var PROGProposedPlanJuly2021flag = false;
$scope.NaturalSciencesclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("NaturalSciences");
    var checkFlag = "!NaturalSciences" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("NaturalSciences", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "NaturalSciences" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("NaturalSciences", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "NaturalSciences" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.EngineeringProfessionclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("EngineeringProfession");
    var checkFlag = "!EngineeringProfession" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("EngineeringProfession", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "EngineeringProfession" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("EngineeringProfession", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "EngineeringProfession" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.MathclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("Math");
    var checkFlag = "!Math" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("Math", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "Math" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("Math", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "Math" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.COMPclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("COMP");
    var checkFlag = "!COMP" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("COMP", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "COMP" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("COMP", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "COMP" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.EngineeringSciencesclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("EngineeringSciences");
    var checkFlag = "!EngineeringSciences" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("EngineeringSciences", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "EngineeringSciences" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("EngineeringSciences", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "EngineeringSciences" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.MechatronicsclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("Mechatronics");
    var checkFlag = "!Mechatronics" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("Mechatronics", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "Mechatronics" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("Mechatronics", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "Mechatronics" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.EngineeringDesignclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("EngineeringDesign");
    var checkFlag = "!EngineeringDesign" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("EngineeringDesign", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "EngineeringDesign" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("EngineeringDesign", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "EngineeringDesign" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.OtherclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("Other");
    var checkFlag = "!Other" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("Other", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "Other" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("Other", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "Other" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.ITSclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("ITS");
    var checkFlag = "!ITS" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("ITS", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "ITS" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("ITS", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "ITS" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.PROGclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("PROG");
    var checkFlag = "!PROG" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("PROG", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "PROG" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("PROG", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "PROG" + planName + "flag";
        eval(flagName + " = false");
    }
}
this.highlightCategory = function(categoryName, planName) {
switch(categoryName) { 
  case "NaturalSciences":
    switch(planName) {
      case "OriginalPlan":
       var CHEM103OriginalPlanelement = document.getElementById("CHEM103OriginalPlan");
       CHEM103OriginalPlanelement.classList.remove("NaturalSciences");
       CHEM103OriginalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHEM103OriginalPlan","NaturalSciences"]);
       var ENGG130OriginalPlanelement = document.getElementById("ENGG130OriginalPlan");
       ENGG130OriginalPlanelement.classList.remove("NaturalSciences");
       ENGG130OriginalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENGG130OriginalPlan","NaturalSciences"]);
       var PHYS130OriginalPlanelement = document.getElementById("PHYS130OriginalPlan");
       PHYS130OriginalPlanelement.classList.remove("NaturalSciences");
       PHYS130OriginalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["PHYS130OriginalPlan","NaturalSciences"]);
       var CHEM105OriginalPlanelement = document.getElementById("CHEM105OriginalPlan");
       CHEM105OriginalPlanelement.classList.remove("NaturalSciences");
       CHEM105OriginalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHEM105OriginalPlan","NaturalSciences"]);
       var ENCMP100OriginalPlanelement = document.getElementById("ENCMP100OriginalPlan");
       ENCMP100OriginalPlanelement.classList.remove("NaturalSciences");
       ENCMP100OriginalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENCMP100OriginalPlan","NaturalSciences"]);
       var ENPH131OriginalPlanelement = document.getElementById("ENPH131OriginalPlan");
       ENPH131OriginalPlanelement.classList.remove("NaturalSciences");
       ENPH131OriginalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENPH131OriginalPlan","NaturalSciences"]);
       var ECE202OriginalPlanelement = document.getElementById("ECE202OriginalPlan");
       ECE202OriginalPlanelement.classList.remove("NaturalSciences");
       ECE202OriginalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ECE202OriginalPlan","NaturalSciences"]);
       var MECE230OriginalPlanelement = document.getElementById("MECE230OriginalPlan");
       MECE230OriginalPlanelement.classList.remove("NaturalSciences");
       MECE230OriginalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["MECE230OriginalPlan","NaturalSciences"]);
       break;
      case "ProposedPlanJuly2021":
       var CHEM103ProposedPlanJuly2021element = document.getElementById("CHEM103ProposedPlanJuly2021");
       CHEM103ProposedPlanJuly2021element.classList.remove("NaturalSciences");
       CHEM103ProposedPlanJuly2021element.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHEM103ProposedPlanJuly2021","NaturalSciences"]);
       var ENGG130ProposedPlanJuly2021element = document.getElementById("ENGG130ProposedPlanJuly2021");
       ENGG130ProposedPlanJuly2021element.classList.remove("NaturalSciences");
       ENGG130ProposedPlanJuly2021element.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENGG130ProposedPlanJuly2021","NaturalSciences"]);
       var PHYS130ProposedPlanJuly2021element = document.getElementById("PHYS130ProposedPlanJuly2021");
       PHYS130ProposedPlanJuly2021element.classList.remove("NaturalSciences");
       PHYS130ProposedPlanJuly2021element.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["PHYS130ProposedPlanJuly2021","NaturalSciences"]);
       var CHEM105ProposedPlanJuly2021element = document.getElementById("CHEM105ProposedPlanJuly2021");
       CHEM105ProposedPlanJuly2021element.classList.remove("NaturalSciences");
       CHEM105ProposedPlanJuly2021element.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHEM105ProposedPlanJuly2021","NaturalSciences"]);
       var ENCMP100ProposedPlanJuly2021element = document.getElementById("ENCMP100ProposedPlanJuly2021");
       ENCMP100ProposedPlanJuly2021element.classList.remove("NaturalSciences");
       ENCMP100ProposedPlanJuly2021element.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENCMP100ProposedPlanJuly2021","NaturalSciences"]);
       var ENPH131ProposedPlanJuly2021element = document.getElementById("ENPH131ProposedPlanJuly2021");
       ENPH131ProposedPlanJuly2021element.classList.remove("NaturalSciences");
       ENPH131ProposedPlanJuly2021element.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENPH131ProposedPlanJuly2021","NaturalSciences"]);
       var MECE230ProposedPlanJuly2021element = document.getElementById("MECE230ProposedPlanJuly2021");
       MECE230ProposedPlanJuly2021element.classList.remove("NaturalSciences");
       MECE230ProposedPlanJuly2021element.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["MECE230ProposedPlanJuly2021","NaturalSciences"]);
       var MATE201ProposedPlanJuly2021element = document.getElementById("MATE201ProposedPlanJuly2021");
       MATE201ProposedPlanJuly2021element.classList.remove("NaturalSciences");
       MATE201ProposedPlanJuly2021element.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["MATE201ProposedPlanJuly2021","NaturalSciences"]);
       break;
       }
      break;
  case "EngineeringProfession":
    switch(planName) {
      case "OriginalPlan":
       var ENGG100OriginalPlanelement = document.getElementById("ENGG100OriginalPlan");
       ENGG100OriginalPlanelement.classList.remove("EngineeringProfession");
       ENGG100OriginalPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG100OriginalPlan","EngineeringProfession"]);
       var ENGG101OriginalPlanelement = document.getElementById("ENGG101OriginalPlan");
       ENGG101OriginalPlanelement.classList.remove("EngineeringProfession");
       ENGG101OriginalPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG101OriginalPlan","EngineeringProfession"]);
       var ENGG299OriginalPlanelement = document.getElementById("ENGG299OriginalPlan");
       ENGG299OriginalPlanelement.classList.remove("EngineeringProfession");
       ENGG299OriginalPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG299OriginalPlan","EngineeringProfession"]);
       var ENGG404OriginalPlanelement = document.getElementById("ENGG404OriginalPlan");
       ENGG404OriginalPlanelement.classList.remove("EngineeringProfession");
       ENGG404OriginalPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG404OriginalPlan","EngineeringProfession"]);
       var ENGG400OriginalPlanelement = document.getElementById("ENGG400OriginalPlan");
       ENGG400OriginalPlanelement.classList.remove("EngineeringProfession");
       ENGG400OriginalPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG400OriginalPlan","EngineeringProfession"]);
       break;
      case "ProposedPlanJuly2021":
       var ENGG100ProposedPlanJuly2021element = document.getElementById("ENGG100ProposedPlanJuly2021");
       ENGG100ProposedPlanJuly2021element.classList.remove("EngineeringProfession");
       ENGG100ProposedPlanJuly2021element.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG100ProposedPlanJuly2021","EngineeringProfession"]);
       var ENGG299ProposedPlanJuly2021element = document.getElementById("ENGG299ProposedPlanJuly2021");
       ENGG299ProposedPlanJuly2021element.classList.remove("EngineeringProfession");
       ENGG299ProposedPlanJuly2021element.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG299ProposedPlanJuly2021","EngineeringProfession"]);
       var ENGG404ProposedPlanJuly2021element = document.getElementById("ENGG404ProposedPlanJuly2021");
       ENGG404ProposedPlanJuly2021element.classList.remove("EngineeringProfession");
       ENGG404ProposedPlanJuly2021element.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG404ProposedPlanJuly2021","EngineeringProfession"]);
       var ENGG400ProposedPlanJuly2021element = document.getElementById("ENGG400ProposedPlanJuly2021");
       ENGG400ProposedPlanJuly2021element.classList.remove("EngineeringProfession");
       ENGG400ProposedPlanJuly2021element.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG400ProposedPlanJuly2021","EngineeringProfession"]);
       break;
       }
      break;
  case "Math":
    switch(planName) {
      case "OriginalPlan":
       var MATH100OriginalPlanelement = document.getElementById("MATH100OriginalPlan");
       MATH100OriginalPlanelement.classList.remove("Math");
       MATH100OriginalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH100OriginalPlan","Math"]);
       var MATH101OriginalPlanelement = document.getElementById("MATH101OriginalPlan");
       MATH101OriginalPlanelement.classList.remove("Math");
       MATH101OriginalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH101OriginalPlan","Math"]);
       var MATH102OriginalPlanelement = document.getElementById("MATH102OriginalPlan");
       MATH102OriginalPlanelement.classList.remove("Math");
       MATH102OriginalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH102OriginalPlan","Math"]);
       var MATH209OriginalPlanelement = document.getElementById("MATH209OriginalPlan");
       MATH209OriginalPlanelement.classList.remove("Math");
       MATH209OriginalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH209OriginalPlan","Math"]);
       var MATH201OriginalPlanelement = document.getElementById("MATH201OriginalPlan");
       MATH201OriginalPlanelement.classList.remove("Math");
       MATH201OriginalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH201OriginalPlan","Math"]);
       var MATH309OriginalPlanelement = document.getElementById("MATH309OriginalPlan");
       MATH309OriginalPlanelement.classList.remove("Math");
       MATH309OriginalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH309OriginalPlan","Math"]);
       var ECE342OriginalPlanelement = document.getElementById("ECE342OriginalPlan");
       ECE342OriginalPlanelement.classList.remove("Math");
       ECE342OriginalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["ECE342OriginalPlan","Math"]);
       var MATH300OriginalPlanelement = document.getElementById("MATH300OriginalPlan");
       MATH300OriginalPlanelement.classList.remove("Math");
       MATH300OriginalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH300OriginalPlan","Math"]);
       var MECE390OriginalPlanelement = document.getElementById("MECE390OriginalPlan");
       MECE390OriginalPlanelement.classList.remove("Math");
       MECE390OriginalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MECE390OriginalPlan","Math"]);
       break;
      case "ProposedPlanJuly2021":
       var MATH100ProposedPlanJuly2021element = document.getElementById("MATH100ProposedPlanJuly2021");
       MATH100ProposedPlanJuly2021element.classList.remove("Math");
       MATH100ProposedPlanJuly2021element.classList.add("Math-highlighted");
       that.addToClicked(["MATH100ProposedPlanJuly2021","Math"]);
       var MATH101ProposedPlanJuly2021element = document.getElementById("MATH101ProposedPlanJuly2021");
       MATH101ProposedPlanJuly2021element.classList.remove("Math");
       MATH101ProposedPlanJuly2021element.classList.add("Math-highlighted");
       that.addToClicked(["MATH101ProposedPlanJuly2021","Math"]);
       var MATH102ProposedPlanJuly2021element = document.getElementById("MATH102ProposedPlanJuly2021");
       MATH102ProposedPlanJuly2021element.classList.remove("Math");
       MATH102ProposedPlanJuly2021element.classList.add("Math-highlighted");
       that.addToClicked(["MATH102ProposedPlanJuly2021","Math"]);
       var MATH201ProposedPlanJuly2021element = document.getElementById("MATH201ProposedPlanJuly2021");
       MATH201ProposedPlanJuly2021element.classList.remove("Math");
       MATH201ProposedPlanJuly2021element.classList.add("Math-highlighted");
       that.addToClicked(["MATH201ProposedPlanJuly2021","Math"]);
       var MATH209ProposedPlanJuly2021element = document.getElementById("MATH209ProposedPlanJuly2021");
       MATH209ProposedPlanJuly2021element.classList.remove("Math");
       MATH209ProposedPlanJuly2021element.classList.add("Math-highlighted");
       that.addToClicked(["MATH209ProposedPlanJuly2021","Math"]);
       var ECE342ProposedPlanJuly2021element = document.getElementById("ECE342ProposedPlanJuly2021");
       ECE342ProposedPlanJuly2021element.classList.remove("Math");
       ECE342ProposedPlanJuly2021element.classList.add("Math-highlighted");
       that.addToClicked(["ECE342ProposedPlanJuly2021","Math"]);
       var MECE390ProposedPlanJuly2021element = document.getElementById("MECE390ProposedPlanJuly2021");
       MECE390ProposedPlanJuly2021element.classList.remove("Math");
       MECE390ProposedPlanJuly2021element.classList.add("Math-highlighted");
       that.addToClicked(["MECE390ProposedPlanJuly2021","Math"]);
       break;
       }
      break;
  case "COMP":
  case "ComplementaryElective":
    switch(planName) {
      case "OriginalPlan":
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP");
          currelement.classList.add("COMP-highlighted");
          that.addToClicked(["ComplementaryElectiveOriginalPlan" + i,"COMP"]);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP");
          currelement.classList.add("COMP-highlighted");
          that.addToClicked(["ComplementaryElectiveOriginalPlan" + i,"COMP"]);
          i = i + 1;
        }
       break;
      case "ProposedPlanJuly2021":
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP");
          currelement.classList.add("COMP-highlighted");
          that.addToClicked(["ComplementaryElectiveProposedPlanJuly2021" + i,"COMP"]);
          i = i + 1;
        }
       break;
       }
      break;
  case "EngineeringSciences":
    switch(planName) {
      case "OriginalPlan":
       var ECE210OriginalPlanelement = document.getElementById("ECE210OriginalPlan");
       ECE210OriginalPlanelement.classList.remove("EngineeringSciences");
       ECE210OriginalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["ECE210OriginalPlan","EngineeringSciences"]);
       var CIVE270OriginalPlanelement = document.getElementById("CIVE270OriginalPlan");
       CIVE270OriginalPlanelement.classList.remove("EngineeringSciences");
       CIVE270OriginalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["CIVE270OriginalPlan","EngineeringSciences"]);
       var CHE243OriginalPlanelement = document.getElementById("CHE243OriginalPlan");
       CHE243OriginalPlanelement.classList.remove("EngineeringSciences");
       CHE243OriginalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["CHE243OriginalPlan","EngineeringSciences"]);
       var ECE240OriginalPlanelement = document.getElementById("ECE240OriginalPlan");
       ECE240OriginalPlanelement.classList.remove("EngineeringSciences");
       ECE240OriginalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["ECE240OriginalPlan","EngineeringSciences"]);
       var MECE350OriginalPlanelement = document.getElementById("MECE350OriginalPlan");
       MECE350OriginalPlanelement.classList.remove("EngineeringSciences");
       MECE350OriginalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["MECE350OriginalPlan","EngineeringSciences"]);
       var ECE315OriginalPlanelement = document.getElementById("ECE315OriginalPlan");
       ECE315OriginalPlanelement.classList.remove("EngineeringSciences");
       ECE315OriginalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["ECE315OriginalPlan","EngineeringSciences"]);
       break;
      case "ProposedPlanJuly2021":
       var CIVE270ProposedPlanJuly2021element = document.getElementById("CIVE270ProposedPlanJuly2021");
       CIVE270ProposedPlanJuly2021element.classList.remove("EngineeringSciences");
       CIVE270ProposedPlanJuly2021element.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["CIVE270ProposedPlanJuly2021","EngineeringSciences"]);
       var ECE210ProposedPlanJuly2021element = document.getElementById("ECE210ProposedPlanJuly2021");
       ECE210ProposedPlanJuly2021element.classList.remove("EngineeringSciences");
       ECE210ProposedPlanJuly2021element.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["ECE210ProposedPlanJuly2021","EngineeringSciences"]);
       var ECE240ProposedPlanJuly2021element = document.getElementById("ECE240ProposedPlanJuly2021");
       ECE240ProposedPlanJuly2021element.classList.remove("EngineeringSciences");
       ECE240ProposedPlanJuly2021element.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["ECE240ProposedPlanJuly2021","EngineeringSciences"]);
       var CHE243ProposedPlanJuly2021element = document.getElementById("CHE243ProposedPlanJuly2021");
       CHE243ProposedPlanJuly2021element.classList.remove("EngineeringSciences");
       CHE243ProposedPlanJuly2021element.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["CHE243ProposedPlanJuly2021","EngineeringSciences"]);
       var MECE250ProposedPlanJuly2021element = document.getElementById("MECE250ProposedPlanJuly2021");
       MECE250ProposedPlanJuly2021element.classList.remove("EngineeringSciences");
       MECE250ProposedPlanJuly2021element.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["MECE250ProposedPlanJuly2021","EngineeringSciences"]);
       var ECE315ProposedPlanJuly2021element = document.getElementById("ECE315ProposedPlanJuly2021");
       ECE315ProposedPlanJuly2021element.classList.remove("EngineeringSciences");
       ECE315ProposedPlanJuly2021element.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["ECE315ProposedPlanJuly2021","EngineeringSciences"]);
       var MECE350ProposedPlanJuly2021element = document.getElementById("MECE350ProposedPlanJuly2021");
       MECE350ProposedPlanJuly2021element.classList.remove("EngineeringSciences");
       MECE350ProposedPlanJuly2021element.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["MECE350ProposedPlanJuly2021","EngineeringSciences"]);
       var MECE420ProposedPlanJuly2021element = document.getElementById("MECE420ProposedPlanJuly2021");
       MECE420ProposedPlanJuly2021element.classList.remove("EngineeringSciences");
       MECE420ProposedPlanJuly2021element.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["MECE420ProposedPlanJuly2021","EngineeringSciences"]);
       var MECE465ProposedPlanJuly2021element = document.getElementById("MECE465ProposedPlanJuly2021");
       MECE465ProposedPlanJuly2021element.classList.remove("EngineeringSciences");
       MECE465ProposedPlanJuly2021element.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["MECE465ProposedPlanJuly2021","EngineeringSciences"]);
       break;
       }
      break;
  case "Mechatronics":
    switch(planName) {
      case "OriginalPlan":
       var MCTR250OriginalPlanelement = document.getElementById("MCTR250OriginalPlan");
       MCTR250OriginalPlanelement.classList.remove("Mechatronics");
       MCTR250OriginalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR250OriginalPlan","Mechatronics"]);
       var MCTR274OriginalPlanelement = document.getElementById("MCTR274OriginalPlan");
       MCTR274OriginalPlanelement.classList.remove("Mechatronics");
       MCTR274OriginalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR274OriginalPlan","Mechatronics"]);
       var MCTR360OriginalPlanelement = document.getElementById("MCTR360OriginalPlan");
       MCTR360OriginalPlanelement.classList.remove("Mechatronics");
       MCTR360OriginalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR360OriginalPlan","Mechatronics"]);
       var MCTR275OriginalPlanelement = document.getElementById("MCTR275OriginalPlan");
       MCTR275OriginalPlanelement.classList.remove("Mechatronics");
       MCTR275OriginalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR275OriginalPlan","Mechatronics"]);
       var MCTR300OriginalPlanelement = document.getElementById("MCTR300OriginalPlan");
       MCTR300OriginalPlanelement.classList.remove("Mechatronics");
       MCTR300OriginalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR300OriginalPlan","Mechatronics"]);
       var MCTR365OriginalPlanelement = document.getElementById("MCTR365OriginalPlan");
       MCTR365OriginalPlanelement.classList.remove("Mechatronics");
       MCTR365OriginalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR365OriginalPlan","Mechatronics"]);
       var MCTR332OriginalPlanelement = document.getElementById("MCTR332OriginalPlan");
       MCTR332OriginalPlanelement.classList.remove("Mechatronics");
       MCTR332OriginalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR332OriginalPlan","Mechatronics"]);
       var MCTR490OriginalPlanelement = document.getElementById("MCTR490OriginalPlan");
       MCTR490OriginalPlanelement.classList.remove("Mechatronics");
       MCTR490OriginalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR490OriginalPlan","Mechatronics"]);
       var MCTR460OriginalPlanelement = document.getElementById("MCTR460OriginalPlan");
       MCTR460OriginalPlanelement.classList.remove("Mechatronics");
       MCTR460OriginalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR460OriginalPlan","Mechatronics"]);
       var MCTR491OriginalPlanelement = document.getElementById("MCTR491OriginalPlan");
       MCTR491OriginalPlanelement.classList.remove("Mechatronics");
       MCTR491OriginalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR491OriginalPlan","Mechatronics"]);
       var MCTR461OriginalPlanelement = document.getElementById("MCTR461OriginalPlan");
       MCTR461OriginalPlanelement.classList.remove("Mechatronics");
       MCTR461OriginalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR461OriginalPlan","Mechatronics"]);
       var MCTR465OriginalPlanelement = document.getElementById("MCTR465OriginalPlan");
       MCTR465OriginalPlanelement.classList.remove("Mechatronics");
       MCTR465OriginalPlanelement.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR465OriginalPlan","Mechatronics"]);
       break;
      case "ProposedPlanJuly2021":
       var MCTR202ProposedPlanJuly2021element = document.getElementById("MCTR202ProposedPlanJuly2021");
       MCTR202ProposedPlanJuly2021element.classList.remove("Mechatronics");
       MCTR202ProposedPlanJuly2021element.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR202ProposedPlanJuly2021","Mechatronics"]);
       var MCTR200ProposedPlanJuly2021element = document.getElementById("MCTR200ProposedPlanJuly2021");
       MCTR200ProposedPlanJuly2021element.classList.remove("Mechatronics");
       MCTR200ProposedPlanJuly2021element.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR200ProposedPlanJuly2021","Mechatronics"]);
       var MCTR274ProposedPlanJuly2021element = document.getElementById("MCTR274ProposedPlanJuly2021");
       MCTR274ProposedPlanJuly2021element.classList.remove("Mechatronics");
       MCTR274ProposedPlanJuly2021element.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR274ProposedPlanJuly2021","Mechatronics"]);
       var MCTR374ProposedPlanJuly2021element = document.getElementById("MCTR374ProposedPlanJuly2021");
       MCTR374ProposedPlanJuly2021element.classList.remove("Mechatronics");
       MCTR374ProposedPlanJuly2021element.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR374ProposedPlanJuly2021","Mechatronics"]);
       var MCTR300ProposedPlanJuly2021element = document.getElementById("MCTR300ProposedPlanJuly2021");
       MCTR300ProposedPlanJuly2021element.classList.remove("Mechatronics");
       MCTR300ProposedPlanJuly2021element.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR300ProposedPlanJuly2021","Mechatronics"]);
       var MCTR332ProposedPlanJuly2021element = document.getElementById("MCTR332ProposedPlanJuly2021");
       MCTR332ProposedPlanJuly2021element.classList.remove("Mechatronics");
       MCTR332ProposedPlanJuly2021element.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR332ProposedPlanJuly2021","Mechatronics"]);
       var MCTR365ProposedPlanJuly2021element = document.getElementById("MCTR365ProposedPlanJuly2021");
       MCTR365ProposedPlanJuly2021element.classList.remove("Mechatronics");
       MCTR365ProposedPlanJuly2021element.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR365ProposedPlanJuly2021","Mechatronics"]);
       var MCTR370ProposedPlanJuly2021element = document.getElementById("MCTR370ProposedPlanJuly2021");
       MCTR370ProposedPlanJuly2021element.classList.remove("Mechatronics");
       MCTR370ProposedPlanJuly2021element.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR370ProposedPlanJuly2021","Mechatronics"]);
       var MCTR460ProposedPlanJuly2021element = document.getElementById("MCTR460ProposedPlanJuly2021");
       MCTR460ProposedPlanJuly2021element.classList.remove("Mechatronics");
       MCTR460ProposedPlanJuly2021element.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR460ProposedPlanJuly2021","Mechatronics"]);
       var MCTR461ProposedPlanJuly2021element = document.getElementById("MCTR461ProposedPlanJuly2021");
       MCTR461ProposedPlanJuly2021element.classList.remove("Mechatronics");
       MCTR461ProposedPlanJuly2021element.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR461ProposedPlanJuly2021","Mechatronics"]);
       var MCTR465ProposedPlanJuly2021element = document.getElementById("MCTR465ProposedPlanJuly2021");
       MCTR465ProposedPlanJuly2021element.classList.remove("Mechatronics");
       MCTR465ProposedPlanJuly2021element.classList.add("Mechatronics-highlighted");
       that.addToClicked(["MCTR465ProposedPlanJuly2021","Mechatronics"]);
       break;
       }
      break;
  case "EngineeringDesign":
    switch(planName) {
      case "OriginalPlan":
       var MCTR260OriginalPlanelement = document.getElementById("MCTR260OriginalPlan");
       MCTR260OriginalPlanelement.classList.remove("EngineeringDesign");
       MCTR260OriginalPlanelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["MCTR260OriginalPlan","EngineeringDesign"]);
       var MCTR265OriginalPlanelement = document.getElementById("MCTR265OriginalPlan");
       MCTR265OriginalPlanelement.classList.remove("EngineeringDesign");
       MCTR265OriginalPlanelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["MCTR265OriginalPlan","EngineeringDesign"]);
       break;
      case "ProposedPlanJuly2021":
       var ENGG160ProposedPlanJuly2021element = document.getElementById("ENGG160ProposedPlanJuly2021");
       ENGG160ProposedPlanJuly2021element.classList.remove("EngineeringDesign");
       ENGG160ProposedPlanJuly2021element.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["ENGG160ProposedPlanJuly2021","EngineeringDesign"]);
       var MECE260ProposedPlanJuly2021element = document.getElementById("MECE260ProposedPlanJuly2021");
       MECE260ProposedPlanJuly2021element.classList.remove("EngineeringDesign");
       MECE260ProposedPlanJuly2021element.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["MECE260ProposedPlanJuly2021","EngineeringDesign"]);
       var MECE265ProposedPlanJuly2021element = document.getElementById("MECE265ProposedPlanJuly2021");
       MECE265ProposedPlanJuly2021element.classList.remove("EngineeringDesign");
       MECE265ProposedPlanJuly2021element.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["MECE265ProposedPlanJuly2021","EngineeringDesign"]);
       var MECE360ProposedPlanJuly2021element = document.getElementById("MECE360ProposedPlanJuly2021");
       MECE360ProposedPlanJuly2021element.classList.remove("EngineeringDesign");
       MECE360ProposedPlanJuly2021element.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["MECE360ProposedPlanJuly2021","EngineeringDesign"]);
       var MECE460ProposedPlanJuly2021element = document.getElementById("MECE460ProposedPlanJuly2021");
       MECE460ProposedPlanJuly2021element.classList.remove("EngineeringDesign");
       MECE460ProposedPlanJuly2021element.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["MECE460ProposedPlanJuly2021","EngineeringDesign"]);
       var MECE461ProposedPlanJuly2021element = document.getElementById("MECE461ProposedPlanJuly2021");
       MECE461ProposedPlanJuly2021element.classList.remove("EngineeringDesign");
       MECE461ProposedPlanJuly2021element.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["MECE461ProposedPlanJuly2021","EngineeringDesign"]);
       break;
       }
      break;
  case "Other":
    switch(planName) {
      case "OriginalPlan":
       var ENGL199OriginalPlanelement = document.getElementById("ENGL199OriginalPlan");
       ENGL199OriginalPlanelement.classList.remove("Other");
       ENGL199OriginalPlanelement.classList.add("Other-highlighted");
       that.addToClicked(["ENGL199OriginalPlan","Other"]);
       var ENGM310OriginalPlanelement = document.getElementById("ENGM310OriginalPlan");
       ENGM310OriginalPlanelement.classList.remove("Other");
       ENGM310OriginalPlanelement.classList.add("Other-highlighted");
       that.addToClicked(["ENGM310OriginalPlan","Other"]);
       break;
      case "ProposedPlanJuly2021":
       var ENGL199ProposedPlanJuly2021element = document.getElementById("ENGL199ProposedPlanJuly2021");
       ENGL199ProposedPlanJuly2021element.classList.remove("Other");
       ENGL199ProposedPlanJuly2021element.classList.add("Other-highlighted");
       that.addToClicked(["ENGL199ProposedPlanJuly2021","Other"]);
       var ENGM401ProposedPlanJuly2021element = document.getElementById("ENGM401ProposedPlanJuly2021");
       ENGM401ProposedPlanJuly2021element.classList.remove("Other");
       ENGM401ProposedPlanJuly2021element.classList.add("Other-highlighted");
       that.addToClicked(["ENGM401ProposedPlanJuly2021","Other"]);
       break;
       }
      break;
  case "ITS":
    switch(planName) {
      case "OriginalPlan":
        var ITSelements = document.getElementsByClassName("ITS");
        var i = 0;
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          currelement.classList.remove("ITS");
          currelement.classList.add("ITS-highlighted");
          that.addToClicked(["ITSElectiveOriginalPlan" + i,"ITS"]);
          i = i + 1;
        }
       break;
      case "ProposedPlanJuly2021":
        var ITSelements = document.getElementsByClassName("ITS");
        var i = 0;
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          currelement.classList.remove("ITS");
          currelement.classList.add("ITS-highlighted");
          that.addToClicked(["ITSElectiveProposedPlanJuly2021" + i,"ITS"]);
          i = i + 1;
        }
       break;
       }
      break;
  case "PROG":
  case "ProgramTechnicalElective":
    switch(planName) {
      case "OriginalPlan":
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          currelement.classList.remove("PROG");
          currelement.classList.add("PROG-highlighted");
          that.addToClicked(["ProgramTechnicalElectiveOriginalPlan" + i,"PROG"]);
          i = i + 1;
        }
       break;
      case "ProposedPlanJuly2021":
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          currelement.classList.remove("PROG");
          currelement.classList.add("PROG-highlighted");
          that.addToClicked(["ProgramTechnicalElectiveProposedPlanJuly2021" + i,"PROG"]);
          i = i + 1;
        }
       break;
       }
      break;
break;   default:
    console.log("shouldn't be here");
    }
};
this.unhighlightCategory = function(categoryName, planName) {
switch(categoryName) { 
  case "NaturalSciences":
    switch(planName) {
      case "OriginalPlan":
if (!CHEM103OriginalPlanflag) { 
       var CHEM103OriginalPlanelement = document.getElementById("CHEM103OriginalPlan");
       CHEM103OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
       CHEM103OriginalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHEM103OriginalPlan");
 } 
if (!ENGG130OriginalPlanflag) { 
       var ENGG130OriginalPlanelement = document.getElementById("ENGG130OriginalPlan");
       ENGG130OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
       ENGG130OriginalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENGG130OriginalPlan");
 } 
if (!PHYS130OriginalPlanflag) { 
       var PHYS130OriginalPlanelement = document.getElementById("PHYS130OriginalPlan");
       PHYS130OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
       PHYS130OriginalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("PHYS130OriginalPlan");
 } 
if (!CHEM105OriginalPlanflag) { 
       var CHEM105OriginalPlanelement = document.getElementById("CHEM105OriginalPlan");
       CHEM105OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
       CHEM105OriginalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHEM105OriginalPlan");
 } 
if (!ENCMP100OriginalPlanflag) { 
       var ENCMP100OriginalPlanelement = document.getElementById("ENCMP100OriginalPlan");
       ENCMP100OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
       ENCMP100OriginalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENCMP100OriginalPlan");
 } 
if (!ENPH131OriginalPlanflag) { 
       var ENPH131OriginalPlanelement = document.getElementById("ENPH131OriginalPlan");
       ENPH131OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
       ENPH131OriginalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENPH131OriginalPlan");
 } 
if (!ECE202OriginalPlanflag) { 
       var ECE202OriginalPlanelement = document.getElementById("ECE202OriginalPlan");
       ECE202OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
       ECE202OriginalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("ECE202OriginalPlan");
 } 
if (!MECE230OriginalPlanflag) { 
       var MECE230OriginalPlanelement = document.getElementById("MECE230OriginalPlan");
       MECE230OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
       MECE230OriginalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("MECE230OriginalPlan");
 } 
       break;
      case "ProposedPlanJuly2021":
if (!CHEM103ProposedPlanJuly2021flag) { 
       var CHEM103ProposedPlanJuly2021element = document.getElementById("CHEM103ProposedPlanJuly2021");
       CHEM103ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
       CHEM103ProposedPlanJuly2021element.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHEM103ProposedPlanJuly2021");
 } 
if (!ENGG130ProposedPlanJuly2021flag) { 
       var ENGG130ProposedPlanJuly2021element = document.getElementById("ENGG130ProposedPlanJuly2021");
       ENGG130ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
       ENGG130ProposedPlanJuly2021element.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENGG130ProposedPlanJuly2021");
 } 
if (!PHYS130ProposedPlanJuly2021flag) { 
       var PHYS130ProposedPlanJuly2021element = document.getElementById("PHYS130ProposedPlanJuly2021");
       PHYS130ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
       PHYS130ProposedPlanJuly2021element.classList.add("NaturalSciences");
       
       that.removeFromClicked("PHYS130ProposedPlanJuly2021");
 } 
if (!CHEM105ProposedPlanJuly2021flag) { 
       var CHEM105ProposedPlanJuly2021element = document.getElementById("CHEM105ProposedPlanJuly2021");
       CHEM105ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
       CHEM105ProposedPlanJuly2021element.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHEM105ProposedPlanJuly2021");
 } 
if (!ENCMP100ProposedPlanJuly2021flag) { 
       var ENCMP100ProposedPlanJuly2021element = document.getElementById("ENCMP100ProposedPlanJuly2021");
       ENCMP100ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
       ENCMP100ProposedPlanJuly2021element.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENCMP100ProposedPlanJuly2021");
 } 
if (!ENPH131ProposedPlanJuly2021flag) { 
       var ENPH131ProposedPlanJuly2021element = document.getElementById("ENPH131ProposedPlanJuly2021");
       ENPH131ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
       ENPH131ProposedPlanJuly2021element.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENPH131ProposedPlanJuly2021");
 } 
if (!MECE230ProposedPlanJuly2021flag) { 
       var MECE230ProposedPlanJuly2021element = document.getElementById("MECE230ProposedPlanJuly2021");
       MECE230ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
       MECE230ProposedPlanJuly2021element.classList.add("NaturalSciences");
       
       that.removeFromClicked("MECE230ProposedPlanJuly2021");
 } 
if (!MATE201ProposedPlanJuly2021flag) { 
       var MATE201ProposedPlanJuly2021element = document.getElementById("MATE201ProposedPlanJuly2021");
       MATE201ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
       MATE201ProposedPlanJuly2021element.classList.add("NaturalSciences");
       
       that.removeFromClicked("MATE201ProposedPlanJuly2021");
 } 
       break;
       }
      break;
  case "EngineeringProfession":
    switch(planName) {
      case "OriginalPlan":
if (!ENGG100OriginalPlanflag) { 
       var ENGG100OriginalPlanelement = document.getElementById("ENGG100OriginalPlan");
       ENGG100OriginalPlanelement.classList.remove("EngineeringProfession-highlighted");
       ENGG100OriginalPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG100OriginalPlan");
 } 
if (!ENGG101OriginalPlanflag) { 
       var ENGG101OriginalPlanelement = document.getElementById("ENGG101OriginalPlan");
       ENGG101OriginalPlanelement.classList.remove("EngineeringProfession-highlighted");
       ENGG101OriginalPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG101OriginalPlan");
 } 
if (!ENGG299OriginalPlanflag) { 
       var ENGG299OriginalPlanelement = document.getElementById("ENGG299OriginalPlan");
       ENGG299OriginalPlanelement.classList.remove("EngineeringProfession-highlighted");
       ENGG299OriginalPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG299OriginalPlan");
 } 
if (!ENGG404OriginalPlanflag) { 
       var ENGG404OriginalPlanelement = document.getElementById("ENGG404OriginalPlan");
       ENGG404OriginalPlanelement.classList.remove("EngineeringProfession-highlighted");
       ENGG404OriginalPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG404OriginalPlan");
 } 
if (!ENGG400OriginalPlanflag) { 
       var ENGG400OriginalPlanelement = document.getElementById("ENGG400OriginalPlan");
       ENGG400OriginalPlanelement.classList.remove("EngineeringProfession-highlighted");
       ENGG400OriginalPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG400OriginalPlan");
 } 
       break;
      case "ProposedPlanJuly2021":
if (!ENGG100ProposedPlanJuly2021flag) { 
       var ENGG100ProposedPlanJuly2021element = document.getElementById("ENGG100ProposedPlanJuly2021");
       ENGG100ProposedPlanJuly2021element.classList.remove("EngineeringProfession-highlighted");
       ENGG100ProposedPlanJuly2021element.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG100ProposedPlanJuly2021");
 } 
if (!ENGG299ProposedPlanJuly2021flag) { 
       var ENGG299ProposedPlanJuly2021element = document.getElementById("ENGG299ProposedPlanJuly2021");
       ENGG299ProposedPlanJuly2021element.classList.remove("EngineeringProfession-highlighted");
       ENGG299ProposedPlanJuly2021element.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG299ProposedPlanJuly2021");
 } 
if (!ENGG404ProposedPlanJuly2021flag) { 
       var ENGG404ProposedPlanJuly2021element = document.getElementById("ENGG404ProposedPlanJuly2021");
       ENGG404ProposedPlanJuly2021element.classList.remove("EngineeringProfession-highlighted");
       ENGG404ProposedPlanJuly2021element.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG404ProposedPlanJuly2021");
 } 
if (!ENGG400ProposedPlanJuly2021flag) { 
       var ENGG400ProposedPlanJuly2021element = document.getElementById("ENGG400ProposedPlanJuly2021");
       ENGG400ProposedPlanJuly2021element.classList.remove("EngineeringProfession-highlighted");
       ENGG400ProposedPlanJuly2021element.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG400ProposedPlanJuly2021");
 } 
       break;
       }
      break;
  case "Math":
    switch(planName) {
      case "OriginalPlan":
if (!MATH100OriginalPlanflag) { 
       var MATH100OriginalPlanelement = document.getElementById("MATH100OriginalPlan");
       MATH100OriginalPlanelement.classList.remove("Math-highlighted");
       MATH100OriginalPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH100OriginalPlan");
 } 
if (!MATH101OriginalPlanflag) { 
       var MATH101OriginalPlanelement = document.getElementById("MATH101OriginalPlan");
       MATH101OriginalPlanelement.classList.remove("Math-highlighted");
       MATH101OriginalPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH101OriginalPlan");
 } 
if (!MATH102OriginalPlanflag) { 
       var MATH102OriginalPlanelement = document.getElementById("MATH102OriginalPlan");
       MATH102OriginalPlanelement.classList.remove("Math-highlighted");
       MATH102OriginalPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH102OriginalPlan");
 } 
if (!MATH209OriginalPlanflag) { 
       var MATH209OriginalPlanelement = document.getElementById("MATH209OriginalPlan");
       MATH209OriginalPlanelement.classList.remove("Math-highlighted");
       MATH209OriginalPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH209OriginalPlan");
 } 
if (!MATH201OriginalPlanflag) { 
       var MATH201OriginalPlanelement = document.getElementById("MATH201OriginalPlan");
       MATH201OriginalPlanelement.classList.remove("Math-highlighted");
       MATH201OriginalPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH201OriginalPlan");
 } 
if (!MATH309OriginalPlanflag) { 
       var MATH309OriginalPlanelement = document.getElementById("MATH309OriginalPlan");
       MATH309OriginalPlanelement.classList.remove("Math-highlighted");
       MATH309OriginalPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH309OriginalPlan");
 } 
if (!ECE342OriginalPlanflag) { 
       var ECE342OriginalPlanelement = document.getElementById("ECE342OriginalPlan");
       ECE342OriginalPlanelement.classList.remove("Math-highlighted");
       ECE342OriginalPlanelement.classList.add("Math");
       
       that.removeFromClicked("ECE342OriginalPlan");
 } 
if (!MATH300OriginalPlanflag) { 
       var MATH300OriginalPlanelement = document.getElementById("MATH300OriginalPlan");
       MATH300OriginalPlanelement.classList.remove("Math-highlighted");
       MATH300OriginalPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH300OriginalPlan");
 } 
if (!MECE390OriginalPlanflag) { 
       var MECE390OriginalPlanelement = document.getElementById("MECE390OriginalPlan");
       MECE390OriginalPlanelement.classList.remove("Math-highlighted");
       MECE390OriginalPlanelement.classList.add("Math");
       
       that.removeFromClicked("MECE390OriginalPlan");
 } 
       break;
      case "ProposedPlanJuly2021":
if (!MATH100ProposedPlanJuly2021flag) { 
       var MATH100ProposedPlanJuly2021element = document.getElementById("MATH100ProposedPlanJuly2021");
       MATH100ProposedPlanJuly2021element.classList.remove("Math-highlighted");
       MATH100ProposedPlanJuly2021element.classList.add("Math");
       
       that.removeFromClicked("MATH100ProposedPlanJuly2021");
 } 
if (!MATH101ProposedPlanJuly2021flag) { 
       var MATH101ProposedPlanJuly2021element = document.getElementById("MATH101ProposedPlanJuly2021");
       MATH101ProposedPlanJuly2021element.classList.remove("Math-highlighted");
       MATH101ProposedPlanJuly2021element.classList.add("Math");
       
       that.removeFromClicked("MATH101ProposedPlanJuly2021");
 } 
if (!MATH102ProposedPlanJuly2021flag) { 
       var MATH102ProposedPlanJuly2021element = document.getElementById("MATH102ProposedPlanJuly2021");
       MATH102ProposedPlanJuly2021element.classList.remove("Math-highlighted");
       MATH102ProposedPlanJuly2021element.classList.add("Math");
       
       that.removeFromClicked("MATH102ProposedPlanJuly2021");
 } 
if (!MATH201ProposedPlanJuly2021flag) { 
       var MATH201ProposedPlanJuly2021element = document.getElementById("MATH201ProposedPlanJuly2021");
       MATH201ProposedPlanJuly2021element.classList.remove("Math-highlighted");
       MATH201ProposedPlanJuly2021element.classList.add("Math");
       
       that.removeFromClicked("MATH201ProposedPlanJuly2021");
 } 
if (!MATH209ProposedPlanJuly2021flag) { 
       var MATH209ProposedPlanJuly2021element = document.getElementById("MATH209ProposedPlanJuly2021");
       MATH209ProposedPlanJuly2021element.classList.remove("Math-highlighted");
       MATH209ProposedPlanJuly2021element.classList.add("Math");
       
       that.removeFromClicked("MATH209ProposedPlanJuly2021");
 } 
if (!ECE342ProposedPlanJuly2021flag) { 
       var ECE342ProposedPlanJuly2021element = document.getElementById("ECE342ProposedPlanJuly2021");
       ECE342ProposedPlanJuly2021element.classList.remove("Math-highlighted");
       ECE342ProposedPlanJuly2021element.classList.add("Math");
       
       that.removeFromClicked("ECE342ProposedPlanJuly2021");
 } 
if (!MECE390ProposedPlanJuly2021flag) { 
       var MECE390ProposedPlanJuly2021element = document.getElementById("MECE390ProposedPlanJuly2021");
       MECE390ProposedPlanJuly2021element.classList.remove("Math-highlighted");
       MECE390ProposedPlanJuly2021element.classList.add("Math");
       
       that.removeFromClicked("MECE390ProposedPlanJuly2021");
 } 
       break;
       }
      break;
  case "COMP":
  case "ComplementaryElective":
    switch(planName) {
      case "OriginalPlan":
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP-highlighted");
          currelement.classList.add("COMP");
          that.removeFromClicked("ComplementaryElectiveOriginalPlan" + i);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP-highlighted");
          currelement.classList.add("COMP");
          that.removeFromClicked("ComplementaryElectiveOriginalPlan" + i);
          i = i + 1;
        }
       break;
      case "ProposedPlanJuly2021":
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP-highlighted");
          currelement.classList.add("COMP");
          that.removeFromClicked("ComplementaryElectiveProposedPlanJuly2021" + i);
          i = i + 1;
        }
       break;
       }
      break;
  case "EngineeringSciences":
    switch(planName) {
      case "OriginalPlan":
if (!ECE210OriginalPlanflag) { 
       var ECE210OriginalPlanelement = document.getElementById("ECE210OriginalPlan");
       ECE210OriginalPlanelement.classList.remove("EngineeringSciences-highlighted");
       ECE210OriginalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("ECE210OriginalPlan");
 } 
if (!CIVE270OriginalPlanflag) { 
       var CIVE270OriginalPlanelement = document.getElementById("CIVE270OriginalPlan");
       CIVE270OriginalPlanelement.classList.remove("EngineeringSciences-highlighted");
       CIVE270OriginalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("CIVE270OriginalPlan");
 } 
if (!CHE243OriginalPlanflag) { 
       var CHE243OriginalPlanelement = document.getElementById("CHE243OriginalPlan");
       CHE243OriginalPlanelement.classList.remove("EngineeringSciences-highlighted");
       CHE243OriginalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("CHE243OriginalPlan");
 } 
if (!ECE240OriginalPlanflag) { 
       var ECE240OriginalPlanelement = document.getElementById("ECE240OriginalPlan");
       ECE240OriginalPlanelement.classList.remove("EngineeringSciences-highlighted");
       ECE240OriginalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("ECE240OriginalPlan");
 } 
if (!MECE350OriginalPlanflag) { 
       var MECE350OriginalPlanelement = document.getElementById("MECE350OriginalPlan");
       MECE350OriginalPlanelement.classList.remove("EngineeringSciences-highlighted");
       MECE350OriginalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("MECE350OriginalPlan");
 } 
if (!ECE315OriginalPlanflag) { 
       var ECE315OriginalPlanelement = document.getElementById("ECE315OriginalPlan");
       ECE315OriginalPlanelement.classList.remove("EngineeringSciences-highlighted");
       ECE315OriginalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("ECE315OriginalPlan");
 } 
       break;
      case "ProposedPlanJuly2021":
if (!CIVE270ProposedPlanJuly2021flag) { 
       var CIVE270ProposedPlanJuly2021element = document.getElementById("CIVE270ProposedPlanJuly2021");
       CIVE270ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
       CIVE270ProposedPlanJuly2021element.classList.add("EngineeringSciences");
       
       that.removeFromClicked("CIVE270ProposedPlanJuly2021");
 } 
if (!ECE210ProposedPlanJuly2021flag) { 
       var ECE210ProposedPlanJuly2021element = document.getElementById("ECE210ProposedPlanJuly2021");
       ECE210ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
       ECE210ProposedPlanJuly2021element.classList.add("EngineeringSciences");
       
       that.removeFromClicked("ECE210ProposedPlanJuly2021");
 } 
if (!ECE240ProposedPlanJuly2021flag) { 
       var ECE240ProposedPlanJuly2021element = document.getElementById("ECE240ProposedPlanJuly2021");
       ECE240ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
       ECE240ProposedPlanJuly2021element.classList.add("EngineeringSciences");
       
       that.removeFromClicked("ECE240ProposedPlanJuly2021");
 } 
if (!CHE243ProposedPlanJuly2021flag) { 
       var CHE243ProposedPlanJuly2021element = document.getElementById("CHE243ProposedPlanJuly2021");
       CHE243ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
       CHE243ProposedPlanJuly2021element.classList.add("EngineeringSciences");
       
       that.removeFromClicked("CHE243ProposedPlanJuly2021");
 } 
if (!MECE250ProposedPlanJuly2021flag) { 
       var MECE250ProposedPlanJuly2021element = document.getElementById("MECE250ProposedPlanJuly2021");
       MECE250ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
       MECE250ProposedPlanJuly2021element.classList.add("EngineeringSciences");
       
       that.removeFromClicked("MECE250ProposedPlanJuly2021");
 } 
if (!ECE315ProposedPlanJuly2021flag) { 
       var ECE315ProposedPlanJuly2021element = document.getElementById("ECE315ProposedPlanJuly2021");
       ECE315ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
       ECE315ProposedPlanJuly2021element.classList.add("EngineeringSciences");
       
       that.removeFromClicked("ECE315ProposedPlanJuly2021");
 } 
if (!MECE350ProposedPlanJuly2021flag) { 
       var MECE350ProposedPlanJuly2021element = document.getElementById("MECE350ProposedPlanJuly2021");
       MECE350ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
       MECE350ProposedPlanJuly2021element.classList.add("EngineeringSciences");
       
       that.removeFromClicked("MECE350ProposedPlanJuly2021");
 } 
if (!MECE420ProposedPlanJuly2021flag) { 
       var MECE420ProposedPlanJuly2021element = document.getElementById("MECE420ProposedPlanJuly2021");
       MECE420ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
       MECE420ProposedPlanJuly2021element.classList.add("EngineeringSciences");
       
       that.removeFromClicked("MECE420ProposedPlanJuly2021");
 } 
if (!MECE465ProposedPlanJuly2021flag) { 
       var MECE465ProposedPlanJuly2021element = document.getElementById("MECE465ProposedPlanJuly2021");
       MECE465ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
       MECE465ProposedPlanJuly2021element.classList.add("EngineeringSciences");
       
       that.removeFromClicked("MECE465ProposedPlanJuly2021");
 } 
       break;
       }
      break;
  case "Mechatronics":
    switch(planName) {
      case "OriginalPlan":
if (!MCTR250OriginalPlanflag) { 
       var MCTR250OriginalPlanelement = document.getElementById("MCTR250OriginalPlan");
       MCTR250OriginalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR250OriginalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR250OriginalPlan");
 } 
if (!MCTR274OriginalPlanflag) { 
       var MCTR274OriginalPlanelement = document.getElementById("MCTR274OriginalPlan");
       MCTR274OriginalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR274OriginalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR274OriginalPlan");
 } 
if (!MCTR360OriginalPlanflag) { 
       var MCTR360OriginalPlanelement = document.getElementById("MCTR360OriginalPlan");
       MCTR360OriginalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR360OriginalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR360OriginalPlan");
 } 
if (!MCTR275OriginalPlanflag) { 
       var MCTR275OriginalPlanelement = document.getElementById("MCTR275OriginalPlan");
       MCTR275OriginalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR275OriginalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR275OriginalPlan");
 } 
if (!MCTR300OriginalPlanflag) { 
       var MCTR300OriginalPlanelement = document.getElementById("MCTR300OriginalPlan");
       MCTR300OriginalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR300OriginalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR300OriginalPlan");
 } 
if (!MCTR365OriginalPlanflag) { 
       var MCTR365OriginalPlanelement = document.getElementById("MCTR365OriginalPlan");
       MCTR365OriginalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR365OriginalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR365OriginalPlan");
 } 
if (!MCTR332OriginalPlanflag) { 
       var MCTR332OriginalPlanelement = document.getElementById("MCTR332OriginalPlan");
       MCTR332OriginalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR332OriginalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR332OriginalPlan");
 } 
if (!MCTR490OriginalPlanflag) { 
       var MCTR490OriginalPlanelement = document.getElementById("MCTR490OriginalPlan");
       MCTR490OriginalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR490OriginalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR490OriginalPlan");
 } 
if (!MCTR460OriginalPlanflag) { 
       var MCTR460OriginalPlanelement = document.getElementById("MCTR460OriginalPlan");
       MCTR460OriginalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR460OriginalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR460OriginalPlan");
 } 
if (!MCTR491OriginalPlanflag) { 
       var MCTR491OriginalPlanelement = document.getElementById("MCTR491OriginalPlan");
       MCTR491OriginalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR491OriginalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR491OriginalPlan");
 } 
if (!MCTR461OriginalPlanflag) { 
       var MCTR461OriginalPlanelement = document.getElementById("MCTR461OriginalPlan");
       MCTR461OriginalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR461OriginalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR461OriginalPlan");
 } 
if (!MCTR465OriginalPlanflag) { 
       var MCTR465OriginalPlanelement = document.getElementById("MCTR465OriginalPlan");
       MCTR465OriginalPlanelement.classList.remove("Mechatronics-highlighted");
       MCTR465OriginalPlanelement.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR465OriginalPlan");
 } 
       break;
      case "ProposedPlanJuly2021":
if (!MCTR202ProposedPlanJuly2021flag) { 
       var MCTR202ProposedPlanJuly2021element = document.getElementById("MCTR202ProposedPlanJuly2021");
       MCTR202ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
       MCTR202ProposedPlanJuly2021element.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR202ProposedPlanJuly2021");
 } 
if (!MCTR200ProposedPlanJuly2021flag) { 
       var MCTR200ProposedPlanJuly2021element = document.getElementById("MCTR200ProposedPlanJuly2021");
       MCTR200ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
       MCTR200ProposedPlanJuly2021element.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR200ProposedPlanJuly2021");
 } 
if (!MCTR274ProposedPlanJuly2021flag) { 
       var MCTR274ProposedPlanJuly2021element = document.getElementById("MCTR274ProposedPlanJuly2021");
       MCTR274ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
       MCTR274ProposedPlanJuly2021element.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR274ProposedPlanJuly2021");
 } 
if (!MCTR374ProposedPlanJuly2021flag) { 
       var MCTR374ProposedPlanJuly2021element = document.getElementById("MCTR374ProposedPlanJuly2021");
       MCTR374ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
       MCTR374ProposedPlanJuly2021element.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR374ProposedPlanJuly2021");
 } 
if (!MCTR300ProposedPlanJuly2021flag) { 
       var MCTR300ProposedPlanJuly2021element = document.getElementById("MCTR300ProposedPlanJuly2021");
       MCTR300ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
       MCTR300ProposedPlanJuly2021element.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR300ProposedPlanJuly2021");
 } 
if (!MCTR332ProposedPlanJuly2021flag) { 
       var MCTR332ProposedPlanJuly2021element = document.getElementById("MCTR332ProposedPlanJuly2021");
       MCTR332ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
       MCTR332ProposedPlanJuly2021element.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR332ProposedPlanJuly2021");
 } 
if (!MCTR365ProposedPlanJuly2021flag) { 
       var MCTR365ProposedPlanJuly2021element = document.getElementById("MCTR365ProposedPlanJuly2021");
       MCTR365ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
       MCTR365ProposedPlanJuly2021element.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR365ProposedPlanJuly2021");
 } 
if (!MCTR370ProposedPlanJuly2021flag) { 
       var MCTR370ProposedPlanJuly2021element = document.getElementById("MCTR370ProposedPlanJuly2021");
       MCTR370ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
       MCTR370ProposedPlanJuly2021element.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR370ProposedPlanJuly2021");
 } 
if (!MCTR460ProposedPlanJuly2021flag) { 
       var MCTR460ProposedPlanJuly2021element = document.getElementById("MCTR460ProposedPlanJuly2021");
       MCTR460ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
       MCTR460ProposedPlanJuly2021element.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR460ProposedPlanJuly2021");
 } 
if (!MCTR461ProposedPlanJuly2021flag) { 
       var MCTR461ProposedPlanJuly2021element = document.getElementById("MCTR461ProposedPlanJuly2021");
       MCTR461ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
       MCTR461ProposedPlanJuly2021element.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR461ProposedPlanJuly2021");
 } 
if (!MCTR465ProposedPlanJuly2021flag) { 
       var MCTR465ProposedPlanJuly2021element = document.getElementById("MCTR465ProposedPlanJuly2021");
       MCTR465ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
       MCTR465ProposedPlanJuly2021element.classList.add("Mechatronics");
       
       that.removeFromClicked("MCTR465ProposedPlanJuly2021");
 } 
       break;
       }
      break;
  case "EngineeringDesign":
    switch(planName) {
      case "OriginalPlan":
if (!MCTR260OriginalPlanflag) { 
       var MCTR260OriginalPlanelement = document.getElementById("MCTR260OriginalPlan");
       MCTR260OriginalPlanelement.classList.remove("EngineeringDesign-highlighted");
       MCTR260OriginalPlanelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("MCTR260OriginalPlan");
 } 
if (!MCTR265OriginalPlanflag) { 
       var MCTR265OriginalPlanelement = document.getElementById("MCTR265OriginalPlan");
       MCTR265OriginalPlanelement.classList.remove("EngineeringDesign-highlighted");
       MCTR265OriginalPlanelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("MCTR265OriginalPlan");
 } 
       break;
      case "ProposedPlanJuly2021":
if (!ENGG160ProposedPlanJuly2021flag) { 
       var ENGG160ProposedPlanJuly2021element = document.getElementById("ENGG160ProposedPlanJuly2021");
       ENGG160ProposedPlanJuly2021element.classList.remove("EngineeringDesign-highlighted");
       ENGG160ProposedPlanJuly2021element.classList.add("EngineeringDesign");
       
       that.removeFromClicked("ENGG160ProposedPlanJuly2021");
 } 
if (!MECE260ProposedPlanJuly2021flag) { 
       var MECE260ProposedPlanJuly2021element = document.getElementById("MECE260ProposedPlanJuly2021");
       MECE260ProposedPlanJuly2021element.classList.remove("EngineeringDesign-highlighted");
       MECE260ProposedPlanJuly2021element.classList.add("EngineeringDesign");
       
       that.removeFromClicked("MECE260ProposedPlanJuly2021");
 } 
if (!MECE265ProposedPlanJuly2021flag) { 
       var MECE265ProposedPlanJuly2021element = document.getElementById("MECE265ProposedPlanJuly2021");
       MECE265ProposedPlanJuly2021element.classList.remove("EngineeringDesign-highlighted");
       MECE265ProposedPlanJuly2021element.classList.add("EngineeringDesign");
       
       that.removeFromClicked("MECE265ProposedPlanJuly2021");
 } 
if (!MECE360ProposedPlanJuly2021flag) { 
       var MECE360ProposedPlanJuly2021element = document.getElementById("MECE360ProposedPlanJuly2021");
       MECE360ProposedPlanJuly2021element.classList.remove("EngineeringDesign-highlighted");
       MECE360ProposedPlanJuly2021element.classList.add("EngineeringDesign");
       
       that.removeFromClicked("MECE360ProposedPlanJuly2021");
 } 
if (!MECE460ProposedPlanJuly2021flag) { 
       var MECE460ProposedPlanJuly2021element = document.getElementById("MECE460ProposedPlanJuly2021");
       MECE460ProposedPlanJuly2021element.classList.remove("EngineeringDesign-highlighted");
       MECE460ProposedPlanJuly2021element.classList.add("EngineeringDesign");
       
       that.removeFromClicked("MECE460ProposedPlanJuly2021");
 } 
if (!MECE461ProposedPlanJuly2021flag) { 
       var MECE461ProposedPlanJuly2021element = document.getElementById("MECE461ProposedPlanJuly2021");
       MECE461ProposedPlanJuly2021element.classList.remove("EngineeringDesign-highlighted");
       MECE461ProposedPlanJuly2021element.classList.add("EngineeringDesign");
       
       that.removeFromClicked("MECE461ProposedPlanJuly2021");
 } 
       break;
       }
      break;
  case "Other":
    switch(planName) {
      case "OriginalPlan":
if (!ENGL199OriginalPlanflag) { 
       var ENGL199OriginalPlanelement = document.getElementById("ENGL199OriginalPlan");
       ENGL199OriginalPlanelement.classList.remove("Other-highlighted");
       ENGL199OriginalPlanelement.classList.add("Other");
       
       that.removeFromClicked("ENGL199OriginalPlan");
 } 
if (!ENGM310OriginalPlanflag) { 
       var ENGM310OriginalPlanelement = document.getElementById("ENGM310OriginalPlan");
       ENGM310OriginalPlanelement.classList.remove("Other-highlighted");
       ENGM310OriginalPlanelement.classList.add("Other");
       
       that.removeFromClicked("ENGM310OriginalPlan");
 } 
       break;
      case "ProposedPlanJuly2021":
if (!ENGL199ProposedPlanJuly2021flag) { 
       var ENGL199ProposedPlanJuly2021element = document.getElementById("ENGL199ProposedPlanJuly2021");
       ENGL199ProposedPlanJuly2021element.classList.remove("Other-highlighted");
       ENGL199ProposedPlanJuly2021element.classList.add("Other");
       
       that.removeFromClicked("ENGL199ProposedPlanJuly2021");
 } 
if (!ENGM401ProposedPlanJuly2021flag) { 
       var ENGM401ProposedPlanJuly2021element = document.getElementById("ENGM401ProposedPlanJuly2021");
       ENGM401ProposedPlanJuly2021element.classList.remove("Other-highlighted");
       ENGM401ProposedPlanJuly2021element.classList.add("Other");
       
       that.removeFromClicked("ENGM401ProposedPlanJuly2021");
 } 
       break;
       }
      break;
  case "ITS":
    switch(planName) {
      case "OriginalPlan":
        var ITSelements = document.getElementsByClassName("ITS-highlighted");
        var i = 0;        
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          currelement.classList.remove("ITS-highlighted");
          currelement.classList.add("ITS");
          that.removeFromClicked("ITSElectiveOriginalPlan" + i);
          i = i + 1;
        }
       break;
      case "ProposedPlanJuly2021":
        var ITSelements = document.getElementsByClassName("ITS-highlighted");
        var i = 0;        
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          currelement.classList.remove("ITS-highlighted");
          currelement.classList.add("ITS");
          that.removeFromClicked("ITSElectiveProposedPlanJuly2021" + i);
          i = i + 1;
        }
       break;
       }
      break;
  case "PROG":
  case "ProgramTechnicalElective":
    switch(planName) {
      case "OriginalPlan":
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          currelement.classList.remove("PROG-highlighted");
          currelement.classList.add("PROG");
          that.removeFromClicked("ProgramTechnicalElectiveOriginalPlan" + i);
          i = i + 1;
        }
       break;
      case "ProposedPlanJuly2021":
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          currelement.classList.remove("PROG-highlighted");
          currelement.classList.add("PROG");
          that.removeFromClicked("ProgramTechnicalElectiveProposedPlanJuly2021" + i);
          i = i + 1;
        }
       break;
       }
      break;
break;   default:
    console.log("shouldn't be here");
    }
};
  var CHEM103OriginalPlanflag = false;
  var CHEM103OriginalPlanrflag = false;
 var CHEM103OriginalPlanTime = new Date().getTime();
  var ENGG100OriginalPlanflag = false;
  var ENGG100OriginalPlanrflag = false;
 var ENGG100OriginalPlanTime = new Date().getTime();
  var ENGG130OriginalPlanflag = false;
  var ENGG130OriginalPlanrflag = false;
 var ENGG130OriginalPlanTime = new Date().getTime();
  var MATH100OriginalPlanflag = false;
  var MATH100OriginalPlanrflag = false;
 var MATH100OriginalPlanTime = new Date().getTime();
  var PHYS130OriginalPlanflag = false;
  var PHYS130OriginalPlanrflag = false;
 var PHYS130OriginalPlanTime = new Date().getTime();
  var ComplementaryElectiveOriginalPlan0flag = false;
  var ComplementaryElectiveOriginalPlan0rflag = false;
 var ComplementaryElectiveOriginalPlan0Time = new Date().getTime();
  var CHEM105OriginalPlanflag = false;
  var CHEM105OriginalPlanrflag = false;
 var CHEM105OriginalPlanTime = new Date().getTime();
  var ENCMP100OriginalPlanflag = false;
  var ENCMP100OriginalPlanrflag = false;
 var ENCMP100OriginalPlanTime = new Date().getTime();
  var ENGG101OriginalPlanflag = false;
  var ENGG101OriginalPlanrflag = false;
 var ENGG101OriginalPlanTime = new Date().getTime();
  var ENPH131OriginalPlanflag = false;
  var ENPH131OriginalPlanrflag = false;
 var ENPH131OriginalPlanTime = new Date().getTime();
  var MATH101OriginalPlanflag = false;
  var MATH101OriginalPlanrflag = false;
 var MATH101OriginalPlanTime = new Date().getTime();
  var MATH102OriginalPlanflag = false;
  var MATH102OriginalPlanrflag = false;
 var MATH102OriginalPlanTime = new Date().getTime();
  var ECE202OriginalPlanflag = false;
  var ECE202OriginalPlanrflag = false;
 var ECE202OriginalPlanTime = new Date().getTime();
  var ECE210OriginalPlanflag = false;
  var ECE210OriginalPlanrflag = false;
 var ECE210OriginalPlanTime = new Date().getTime();
  var CIVE270OriginalPlanflag = false;
  var CIVE270OriginalPlanrflag = false;
 var CIVE270OriginalPlanTime = new Date().getTime();
  var MATH209OriginalPlanflag = false;
  var MATH209OriginalPlanrflag = false;
 var MATH209OriginalPlanTime = new Date().getTime();
  var MECE230OriginalPlanflag = false;
  var MECE230OriginalPlanrflag = false;
 var MECE230OriginalPlanTime = new Date().getTime();
  var CHE243OriginalPlanflag = false;
  var CHE243OriginalPlanrflag = false;
 var CHE243OriginalPlanTime = new Date().getTime();
  var ENGG299OriginalPlanflag = false;
  var ENGG299OriginalPlanrflag = false;
 var ENGG299OriginalPlanTime = new Date().getTime();
  var MCTR250OriginalPlanflag = false;
  var MCTR250OriginalPlanrflag = false;
 var MCTR250OriginalPlanTime = new Date().getTime();
  var MCTR274OriginalPlanflag = false;
  var MCTR274OriginalPlanrflag = false;
 var MCTR274OriginalPlanTime = new Date().getTime();
  var ECE240OriginalPlanflag = false;
  var ECE240OriginalPlanrflag = false;
 var ECE240OriginalPlanTime = new Date().getTime();
  var MATH201OriginalPlanflag = false;
  var MATH201OriginalPlanrflag = false;
 var MATH201OriginalPlanTime = new Date().getTime();
  var MCTR260OriginalPlanflag = false;
  var MCTR260OriginalPlanrflag = false;
 var MCTR260OriginalPlanTime = new Date().getTime();
  var MCTR265OriginalPlanflag = false;
  var MCTR265OriginalPlanrflag = false;
 var MCTR265OriginalPlanTime = new Date().getTime();
  var MECE350OriginalPlanflag = false;
  var MECE350OriginalPlanrflag = false;
 var MECE350OriginalPlanTime = new Date().getTime();
  var MCTR360OriginalPlanflag = false;
  var MCTR360OriginalPlanrflag = false;
 var MCTR360OriginalPlanTime = new Date().getTime();
  var MATH309OriginalPlanflag = false;
  var MATH309OriginalPlanrflag = false;
 var MATH309OriginalPlanTime = new Date().getTime();
  var ECE315OriginalPlanflag = false;
  var ECE315OriginalPlanrflag = false;
 var ECE315OriginalPlanTime = new Date().getTime();
  var ENGL199OriginalPlanflag = false;
  var ENGL199OriginalPlanrflag = false;
 var ENGL199OriginalPlanTime = new Date().getTime();
  var MCTR275OriginalPlanflag = false;
  var MCTR275OriginalPlanrflag = false;
 var MCTR275OriginalPlanTime = new Date().getTime();
  var MCTR300OriginalPlanflag = false;
  var MCTR300OriginalPlanrflag = false;
 var MCTR300OriginalPlanTime = new Date().getTime();
  var ECE342OriginalPlanflag = false;
  var ECE342OriginalPlanrflag = false;
 var ECE342OriginalPlanTime = new Date().getTime();
  var MCTR365OriginalPlanflag = false;
  var MCTR365OriginalPlanrflag = false;
 var MCTR365OriginalPlanTime = new Date().getTime();
  var ENGM310OriginalPlanflag = false;
  var ENGM310OriginalPlanrflag = false;
 var ENGM310OriginalPlanTime = new Date().getTime();
  var MCTR332OriginalPlanflag = false;
  var MCTR332OriginalPlanrflag = false;
 var MCTR332OriginalPlanTime = new Date().getTime();
  var ITSElectiveOriginalPlan0flag = false;
  var ITSElectiveOriginalPlan0rflag = false;
 var ITSElectiveOriginalPlan0Time = new Date().getTime();
  var MCTR490OriginalPlanflag = false;
  var MCTR490OriginalPlanrflag = false;
 var MCTR490OriginalPlanTime = new Date().getTime();
  var MCTR460OriginalPlanflag = false;
  var MCTR460OriginalPlanrflag = false;
 var MCTR460OriginalPlanTime = new Date().getTime();
  var MATH300OriginalPlanflag = false;
  var MATH300OriginalPlanrflag = false;
 var MATH300OriginalPlanTime = new Date().getTime();
  var ComplementaryElectiveOriginalPlan1flag = false;
  var ComplementaryElectiveOriginalPlan1rflag = false;
 var ComplementaryElectiveOriginalPlan1Time = new Date().getTime();
  var MECE390OriginalPlanflag = false;
  var MECE390OriginalPlanrflag = false;
 var MECE390OriginalPlanTime = new Date().getTime();
  var ProgramTechnicalElectiveOriginalPlan0flag = false;
  var ProgramTechnicalElectiveOriginalPlan0rflag = false;
 var ProgramTechnicalElectiveOriginalPlan0Time = new Date().getTime();
  var MCTR491OriginalPlanflag = false;
  var MCTR491OriginalPlanrflag = false;
 var MCTR491OriginalPlanTime = new Date().getTime();
  var MCTR461OriginalPlanflag = false;
  var MCTR461OriginalPlanrflag = false;
 var MCTR461OriginalPlanTime = new Date().getTime();
  var MCTR465OriginalPlanflag = false;
  var MCTR465OriginalPlanrflag = false;
 var MCTR465OriginalPlanTime = new Date().getTime();
  var ENGG404OriginalPlanflag = false;
  var ENGG404OriginalPlanrflag = false;
 var ENGG404OriginalPlanTime = new Date().getTime();
  var ENGG400OriginalPlanflag = false;
  var ENGG400OriginalPlanrflag = false;
 var ENGG400OriginalPlanTime = new Date().getTime();
  var ProgramTechnicalElectiveOriginalPlan1flag = false;
  var ProgramTechnicalElectiveOriginalPlan1rflag = false;
 var ProgramTechnicalElectiveOriginalPlan1Time = new Date().getTime();
  var ProgramTechnicalElectiveOriginalPlan2flag = false;
  var ProgramTechnicalElectiveOriginalPlan2rflag = false;
 var ProgramTechnicalElectiveOriginalPlan2Time = new Date().getTime();
$scope.CHEM103OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103OriginalPlanTime <= 200) { 
        CHEM103OriginalPlanTime = currentTime;
        return;
    }
CHEM103OriginalPlanTime = currentTime;
  var CHEM103OriginalPlanelement = document.getElementById("CHEM103OriginalPlan");
 if (!CHEM103OriginalPlanflag) {
     if (CHEM103OriginalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     CHEM103OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM103OriginalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine2());
     CHEM103OriginalPlanelement.classList.remove("NaturalSciences");
     CHEM103OriginalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHEM103OriginalPlan", "NaturalSciences"]);
      CHEM103OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine2());
     CHEM103OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM103OriginalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("CHEM103OriginalPlan");
      CHEM103OriginalPlanflag=false
  }
};
$scope.ENGG100OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG100OriginalPlanTime <= 200) { 
        ENGG100OriginalPlanTime = currentTime;
        return;
    }
ENGG100OriginalPlanTime = currentTime;
  var ENGG100OriginalPlanelement = document.getElementById("ENGG100OriginalPlan");
 if (!ENGG100OriginalPlanflag) {
     if (ENGG100OriginalPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG100OriginalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG100OriginalPlanelement.classList.add("EngineeringProfession");
      return;
}     ENGG100OriginalPlanelement.classList.remove("EngineeringProfession");
     ENGG100OriginalPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG100OriginalPlan", "EngineeringProfession"]);
      ENGG100OriginalPlanflag=true
  }
 else {
     ENGG100OriginalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG100OriginalPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG100OriginalPlan");
      ENGG100OriginalPlanflag=false
  }
};
$scope.ENGG130OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG130OriginalPlanTime <= 200) { 
        ENGG130OriginalPlanTime = currentTime;
        return;
    }
ENGG130OriginalPlanTime = currentTime;
  var ENGG130OriginalPlanelement = document.getElementById("ENGG130OriginalPlan");
 if (!ENGG130OriginalPlanflag) {
     if (ENGG130OriginalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     ENGG130OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
     ENGG130OriginalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine0());
      that.addLine(getLine4());
      that.addLine(getLine10());
     ENGG130OriginalPlanelement.classList.remove("NaturalSciences");
     ENGG130OriginalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENGG130OriginalPlan", "NaturalSciences"]);
      ENGG130OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine4());
      that.removeLine(getLine10());
     ENGG130OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
     ENGG130OriginalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("ENGG130OriginalPlan");
      ENGG130OriginalPlanflag=false
  }
};
$scope.MATH100OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH100OriginalPlanTime <= 200) { 
        MATH100OriginalPlanTime = currentTime;
        return;
    }
MATH100OriginalPlanTime = currentTime;
  var MATH100OriginalPlanelement = document.getElementById("MATH100OriginalPlan");
 if (!MATH100OriginalPlanflag) {
     if (MATH100OriginalPlanelement.classList.contains("Math-highlighted")) { 
     MATH100OriginalPlanelement.classList.remove("Math-highlighted");
     MATH100OriginalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine0());
      that.addLine(getLine1());
      that.addLine(getLine3());
      that.addLine(getLine6());
      that.addLine(getLine7());
     MATH100OriginalPlanelement.classList.remove("Math");
     MATH100OriginalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH100OriginalPlan", "Math"]);
      MATH100OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine1());
      that.removeLine(getLine3());
      that.removeLine(getLine6());
      that.removeLine(getLine7());
     MATH100OriginalPlanelement.classList.remove("Math-highlighted");
     MATH100OriginalPlanelement.classList.add("Math");
     that.removeFromClicked("MATH100OriginalPlan");
      MATH100OriginalPlanflag=false
  }
};
$scope.PHYS130OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS130OriginalPlanTime <= 200) { 
        PHYS130OriginalPlanTime = currentTime;
        return;
    }
PHYS130OriginalPlanTime = currentTime;
  var PHYS130OriginalPlanelement = document.getElementById("PHYS130OriginalPlan");
 if (!PHYS130OriginalPlanflag) {
     if (PHYS130OriginalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     PHYS130OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
     PHYS130OriginalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine1());
     PHYS130OriginalPlanelement.classList.remove("NaturalSciences");
     PHYS130OriginalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["PHYS130OriginalPlan", "NaturalSciences"]);
      PHYS130OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine1());
     PHYS130OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
     PHYS130OriginalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("PHYS130OriginalPlan");
      PHYS130OriginalPlanflag=false
  }
};
$scope.ComplementaryElectiveOriginalPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveOriginalPlan0Time <= 200) { 
        ComplementaryElectiveOriginalPlan0Time = currentTime;
        return;
    }
ComplementaryElectiveOriginalPlan0Time = currentTime;
  var ComplementaryElectiveOriginalPlan0element = document.getElementById("ComplementaryElectiveOriginalPlan0");
 if (!ComplementaryElectiveOriginalPlan0flag) {
     if (ComplementaryElectiveOriginalPlan0element.classList.contains("COMP-highlighted")) { 
     ComplementaryElectiveOriginalPlan0element.classList.remove("COMP-highlighted");
     ComplementaryElectiveOriginalPlan0element.classList.add("COMP");
      return;
}     ComplementaryElectiveOriginalPlan0element.classList.remove("COMP");
     ComplementaryElectiveOriginalPlan0element.classList.add("COMP-highlighted");
     that.addToClicked(["ComplementaryElectiveOriginalPlan0", "COMP"]);
      ComplementaryElectiveOriginalPlan0flag=true
  }
 else {
     ComplementaryElectiveOriginalPlan0element.classList.remove("COMP-highlighted");
     ComplementaryElectiveOriginalPlan0element.classList.add("COMP");
     that.removeFromClicked("ComplementaryElectiveOriginalPlan0");
      ComplementaryElectiveOriginalPlan0flag=false
  }
};
$scope.CHEM105OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM105OriginalPlanTime <= 200) { 
        CHEM105OriginalPlanTime = currentTime;
        return;
    }
CHEM105OriginalPlanTime = currentTime;
  var CHEM105OriginalPlanelement = document.getElementById("CHEM105OriginalPlan");
 if (!CHEM105OriginalPlanflag) {
     if (CHEM105OriginalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     CHEM105OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM105OriginalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine2());
     CHEM105OriginalPlanelement.classList.remove("NaturalSciences");
     CHEM105OriginalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHEM105OriginalPlan", "NaturalSciences"]);
      CHEM105OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine2());
     CHEM105OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM105OriginalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("CHEM105OriginalPlan");
      CHEM105OriginalPlanflag=false
  }
};
$scope.ENCMP100OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENCMP100OriginalPlanTime <= 200) { 
        ENCMP100OriginalPlanTime = currentTime;
        return;
    }
ENCMP100OriginalPlanTime = currentTime;
  var ENCMP100OriginalPlanelement = document.getElementById("ENCMP100OriginalPlan");
 if (!ENCMP100OriginalPlanflag) {
     if (ENCMP100OriginalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     ENCMP100OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
     ENCMP100OriginalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine19());
     ENCMP100OriginalPlanelement.classList.remove("NaturalSciences");
     ENCMP100OriginalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENCMP100OriginalPlan", "NaturalSciences"]);
      ENCMP100OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine19());
     ENCMP100OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
     ENCMP100OriginalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("ENCMP100OriginalPlan");
      ENCMP100OriginalPlanflag=false
  }
};
$scope.ENGG101OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG101OriginalPlanTime <= 200) { 
        ENGG101OriginalPlanTime = currentTime;
        return;
    }
ENGG101OriginalPlanTime = currentTime;
  var ENGG101OriginalPlanelement = document.getElementById("ENGG101OriginalPlan");
 if (!ENGG101OriginalPlanflag) {
     if (ENGG101OriginalPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG101OriginalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG101OriginalPlanelement.classList.add("EngineeringProfession");
      return;
}     ENGG101OriginalPlanelement.classList.remove("EngineeringProfession");
     ENGG101OriginalPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG101OriginalPlan", "EngineeringProfession"]);
      ENGG101OriginalPlanflag=true
  }
 else {
     ENGG101OriginalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG101OriginalPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG101OriginalPlan");
      ENGG101OriginalPlanflag=false
  }
};
$scope.ENPH131OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENPH131OriginalPlanTime <= 200) { 
        ENPH131OriginalPlanTime = currentTime;
        return;
    }
ENPH131OriginalPlanTime = currentTime;
  var ENPH131OriginalPlanelement = document.getElementById("ENPH131OriginalPlan");
 if (!ENPH131OriginalPlanflag) {
     if (ENPH131OriginalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     ENPH131OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
     ENPH131OriginalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine3());
      that.addLine(getLine4());
      that.addLine(getLine5());
      that.addLine(getLine15());
      that.addLine(getLine17());
     ENPH131OriginalPlanelement.classList.remove("NaturalSciences");
     ENPH131OriginalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENPH131OriginalPlan", "NaturalSciences"]);
      ENPH131OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine3());
      that.removeLine(getLine4());
      that.removeLine(getLine5());
      that.removeLine(getLine15());
      that.removeLine(getLine17());
     ENPH131OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
     ENPH131OriginalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("ENPH131OriginalPlan");
      ENPH131OriginalPlanflag=false
  }
};
$scope.MATH101OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH101OriginalPlanTime <= 200) { 
        MATH101OriginalPlanTime = currentTime;
        return;
    }
MATH101OriginalPlanTime = currentTime;
  var MATH101OriginalPlanelement = document.getElementById("MATH101OriginalPlan");
 if (!MATH101OriginalPlanflag) {
     if (MATH101OriginalPlanelement.classList.contains("Math-highlighted")) { 
     MATH101OriginalPlanelement.classList.remove("Math-highlighted");
     MATH101OriginalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine5());
      that.addLine(getLine6());
      that.addLine(getLine8());
      that.addLine(getLine11());
      that.addLine(getLine12());
      that.addLine(getLine14());
      that.addLine(getLine16());
      that.addLine(getLine18());
     MATH101OriginalPlanelement.classList.remove("Math");
     MATH101OriginalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH101OriginalPlan", "Math"]);
      MATH101OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine5());
      that.removeLine(getLine6());
      that.removeLine(getLine8());
      that.removeLine(getLine11());
      that.removeLine(getLine12());
      that.removeLine(getLine14());
      that.removeLine(getLine16());
      that.removeLine(getLine18());
     MATH101OriginalPlanelement.classList.remove("Math-highlighted");
     MATH101OriginalPlanelement.classList.add("Math");
     that.removeFromClicked("MATH101OriginalPlan");
      MATH101OriginalPlanflag=false
  }
};
$scope.MATH102OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH102OriginalPlanTime <= 200) { 
        MATH102OriginalPlanTime = currentTime;
        return;
    }
MATH102OriginalPlanTime = currentTime;
  var MATH102OriginalPlanelement = document.getElementById("MATH102OriginalPlan");
 if (!MATH102OriginalPlanflag) {
     if (MATH102OriginalPlanelement.classList.contains("Math-highlighted")) { 
     MATH102OriginalPlanelement.classList.remove("Math-highlighted");
     MATH102OriginalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine7());
      that.addLine(getLine9());
      that.addLine(getLine13());
      that.addLine(getLine31());
     MATH102OriginalPlanelement.classList.remove("Math");
     MATH102OriginalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH102OriginalPlan", "Math"]);
      MATH102OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine7());
      that.removeLine(getLine9());
      that.removeLine(getLine13());
      that.removeLine(getLine31());
     MATH102OriginalPlanelement.classList.remove("Math-highlighted");
     MATH102OriginalPlanelement.classList.add("Math");
     that.removeFromClicked("MATH102OriginalPlan");
      MATH102OriginalPlanflag=false
  }
};
$scope.ECE202OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE202OriginalPlanTime <= 200) { 
        ECE202OriginalPlanTime = currentTime;
        return;
    }
ECE202OriginalPlanTime = currentTime;
  var ECE202OriginalPlanelement = document.getElementById("ECE202OriginalPlan");
 if (!ECE202OriginalPlanflag) {
     if (ECE202OriginalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     ECE202OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
     ECE202OriginalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine8());
      that.addLine(getLine9());
      that.addLine(getLine20());
     ECE202OriginalPlanelement.classList.remove("NaturalSciences");
     ECE202OriginalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ECE202OriginalPlan", "NaturalSciences"]);
      ECE202OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine8());
      that.removeLine(getLine9());
      that.removeLine(getLine20());
     ECE202OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
     ECE202OriginalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("ECE202OriginalPlan");
      ECE202OriginalPlanflag=false
  }
};
$scope.ECE210OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE210OriginalPlanTime <= 200) { 
        ECE210OriginalPlanTime = currentTime;
        return;
    }
ECE210OriginalPlanTime = currentTime;
  var ECE210OriginalPlanelement = document.getElementById("ECE210OriginalPlan");
 if (!ECE210OriginalPlanflag) {
     if (ECE210OriginalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     ECE210OriginalPlanelement.classList.remove("EngineeringSciences-highlighted");
     ECE210OriginalPlanelement.classList.add("EngineeringSciences");
      return;
}     ECE210OriginalPlanelement.classList.remove("EngineeringSciences");
     ECE210OriginalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["ECE210OriginalPlan", "EngineeringSciences"]);
      ECE210OriginalPlanflag=true
  }
 else {
     ECE210OriginalPlanelement.classList.remove("EngineeringSciences-highlighted");
     ECE210OriginalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("ECE210OriginalPlan");
      ECE210OriginalPlanflag=false
  }
};
$scope.CIVE270OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE270OriginalPlanTime <= 200) { 
        CIVE270OriginalPlanTime = currentTime;
        return;
    }
CIVE270OriginalPlanTime = currentTime;
  var CIVE270OriginalPlanelement = document.getElementById("CIVE270OriginalPlan");
 if (!CIVE270OriginalPlanflag) {
     if (CIVE270OriginalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     CIVE270OriginalPlanelement.classList.remove("EngineeringSciences-highlighted");
     CIVE270OriginalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine10());
      that.addLine(getLine11());
      that.addLine(getLine23());
      that.addLine(getLine25());
     CIVE270OriginalPlanelement.classList.remove("EngineeringSciences");
     CIVE270OriginalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["CIVE270OriginalPlan", "EngineeringSciences"]);
      CIVE270OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine10());
      that.removeLine(getLine11());
      that.removeLine(getLine23());
      that.removeLine(getLine25());
     CIVE270OriginalPlanelement.classList.remove("EngineeringSciences-highlighted");
     CIVE270OriginalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("CIVE270OriginalPlan");
      CIVE270OriginalPlanflag=false
  }
};
$scope.MATH209OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH209OriginalPlanTime <= 200) { 
        MATH209OriginalPlanTime = currentTime;
        return;
    }
MATH209OriginalPlanTime = currentTime;
  var MATH209OriginalPlanelement = document.getElementById("MATH209OriginalPlan");
 if (!MATH209OriginalPlanflag) {
     if (MATH209OriginalPlanelement.classList.contains("Math-highlighted")) { 
     MATH209OriginalPlanelement.classList.remove("Math-highlighted");
     MATH209OriginalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine12());
      that.addLine(getLine13());
      that.addLine(getLine22());
      that.addLine(getLine24());
      that.addLine(getLine27());
      that.addLine(getLine30());
     MATH209OriginalPlanelement.classList.remove("Math");
     MATH209OriginalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH209OriginalPlan", "Math"]);
      MATH209OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine12());
      that.removeLine(getLine13());
      that.removeLine(getLine22());
      that.removeLine(getLine24());
      that.removeLine(getLine27());
      that.removeLine(getLine30());
     MATH209OriginalPlanelement.classList.remove("Math-highlighted");
     MATH209OriginalPlanelement.classList.add("Math");
     that.removeFromClicked("MATH209OriginalPlan");
      MATH209OriginalPlanflag=false
  }
};
$scope.MECE230OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE230OriginalPlanTime <= 200) { 
        MECE230OriginalPlanTime = currentTime;
        return;
    }
MECE230OriginalPlanTime = currentTime;
  var MECE230OriginalPlanelement = document.getElementById("MECE230OriginalPlan");
 if (!MECE230OriginalPlanflag) {
     if (MECE230OriginalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     MECE230OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
     MECE230OriginalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine14());
      that.addLine(getLine15());
     MECE230OriginalPlanelement.classList.remove("NaturalSciences");
     MECE230OriginalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["MECE230OriginalPlan", "NaturalSciences"]);
      MECE230OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine14());
      that.removeLine(getLine15());
     MECE230OriginalPlanelement.classList.remove("NaturalSciences-highlighted");
     MECE230OriginalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("MECE230OriginalPlan");
      MECE230OriginalPlanflag=false
  }
};
$scope.CHE243OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE243OriginalPlanTime <= 200) { 
        CHE243OriginalPlanTime = currentTime;
        return;
    }
CHE243OriginalPlanTime = currentTime;
  var CHE243OriginalPlanelement = document.getElementById("CHE243OriginalPlan");
 if (!CHE243OriginalPlanflag) {
     if (CHE243OriginalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     CHE243OriginalPlanelement.classList.remove("EngineeringSciences-highlighted");
     CHE243OriginalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine16());
     CHE243OriginalPlanelement.classList.remove("EngineeringSciences");
     CHE243OriginalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["CHE243OriginalPlan", "EngineeringSciences"]);
      CHE243OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine16());
     CHE243OriginalPlanelement.classList.remove("EngineeringSciences-highlighted");
     CHE243OriginalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("CHE243OriginalPlan");
      CHE243OriginalPlanflag=false
  }
};
$scope.ENGG299OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG299OriginalPlanTime <= 200) { 
        ENGG299OriginalPlanTime = currentTime;
        return;
    }
ENGG299OriginalPlanTime = currentTime;
  var ENGG299OriginalPlanelement = document.getElementById("ENGG299OriginalPlan");
 if (!ENGG299OriginalPlanflag) {
     if (ENGG299OriginalPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG299OriginalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG299OriginalPlanelement.classList.add("EngineeringProfession");
      return;
}     ENGG299OriginalPlanelement.classList.remove("EngineeringProfession");
     ENGG299OriginalPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG299OriginalPlan", "EngineeringProfession"]);
      ENGG299OriginalPlanflag=true
  }
 else {
     ENGG299OriginalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG299OriginalPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG299OriginalPlan");
      ENGG299OriginalPlanflag=false
  }
};
$scope.MCTR250OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR250OriginalPlanTime <= 200) { 
        MCTR250OriginalPlanTime = currentTime;
        return;
    }
MCTR250OriginalPlanTime = currentTime;
  var MCTR250OriginalPlanelement = document.getElementById("MCTR250OriginalPlan");
 if (!MCTR250OriginalPlanflag) {
     if (MCTR250OriginalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR250OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR250OriginalPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine17());
      that.addLine(getLine18());
     MCTR250OriginalPlanelement.classList.remove("Mechatronics");
     MCTR250OriginalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR250OriginalPlan", "Mechatronics"]);
      MCTR250OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine17());
      that.removeLine(getLine18());
     MCTR250OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR250OriginalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR250OriginalPlan");
      MCTR250OriginalPlanflag=false
  }
};
$scope.MCTR274OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR274OriginalPlanTime <= 200) { 
        MCTR274OriginalPlanTime = currentTime;
        return;
    }
MCTR274OriginalPlanTime = currentTime;
  var MCTR274OriginalPlanelement = document.getElementById("MCTR274OriginalPlan");
 if (!MCTR274OriginalPlanflag) {
     if (MCTR274OriginalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR274OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR274OriginalPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine19());
      that.addLine(getLine28());
     MCTR274OriginalPlanelement.classList.remove("Mechatronics");
     MCTR274OriginalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR274OriginalPlan", "Mechatronics"]);
      MCTR274OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine19());
      that.removeLine(getLine28());
     MCTR274OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR274OriginalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR274OriginalPlan");
      MCTR274OriginalPlanflag=false
  }
};
$scope.ECE240OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE240OriginalPlanTime <= 200) { 
        ECE240OriginalPlanTime = currentTime;
        return;
    }
ECE240OriginalPlanTime = currentTime;
  var ECE240OriginalPlanelement = document.getElementById("ECE240OriginalPlan");
 if (!ECE240OriginalPlanflag) {
     if (ECE240OriginalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     ECE240OriginalPlanelement.classList.remove("EngineeringSciences-highlighted");
     ECE240OriginalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine20());
      that.addLine(getLine21());
     ECE240OriginalPlanelement.classList.remove("EngineeringSciences");
     ECE240OriginalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["ECE240OriginalPlan", "EngineeringSciences"]);
      ECE240OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine20());
      that.removeLine(getLine21());
     ECE240OriginalPlanelement.classList.remove("EngineeringSciences-highlighted");
     ECE240OriginalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("ECE240OriginalPlan");
      ECE240OriginalPlanflag=false
  }
};
$scope.MATH201OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH201OriginalPlanTime <= 200) { 
        MATH201OriginalPlanTime = currentTime;
        return;
    }
MATH201OriginalPlanTime = currentTime;
  var MATH201OriginalPlanelement = document.getElementById("MATH201OriginalPlan");
 if (!MATH201OriginalPlanflag) {
     if (MATH201OriginalPlanelement.classList.contains("Math-highlighted")) { 
     MATH201OriginalPlanelement.classList.remove("Math-highlighted");
     MATH201OriginalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine21());
      that.addLine(getLine22());
      that.addLine(getLine29());
      that.addLine(getLine32());
     MATH201OriginalPlanelement.classList.remove("Math");
     MATH201OriginalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH201OriginalPlan", "Math"]);
      MATH201OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine21());
      that.removeLine(getLine22());
      that.removeLine(getLine29());
      that.removeLine(getLine32());
     MATH201OriginalPlanelement.classList.remove("Math-highlighted");
     MATH201OriginalPlanelement.classList.add("Math");
     that.removeFromClicked("MATH201OriginalPlan");
      MATH201OriginalPlanflag=false
  }
};
$scope.MCTR260OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR260OriginalPlanTime <= 200) { 
        MCTR260OriginalPlanTime = currentTime;
        return;
    }
MCTR260OriginalPlanTime = currentTime;
  var MCTR260OriginalPlanelement = document.getElementById("MCTR260OriginalPlan");
 if (!MCTR260OriginalPlanflag) {
     if (MCTR260OriginalPlanelement.classList.contains("EngineeringDesign-highlighted")) { 
     MCTR260OriginalPlanelement.classList.remove("EngineeringDesign-highlighted");
     MCTR260OriginalPlanelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine23());
     MCTR260OriginalPlanelement.classList.remove("EngineeringDesign");
     MCTR260OriginalPlanelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["MCTR260OriginalPlan", "EngineeringDesign"]);
      MCTR260OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine23());
     MCTR260OriginalPlanelement.classList.remove("EngineeringDesign-highlighted");
     MCTR260OriginalPlanelement.classList.add("EngineeringDesign");
     that.removeFromClicked("MCTR260OriginalPlan");
      MCTR260OriginalPlanflag=false
  }
};
$scope.MCTR265OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR265OriginalPlanTime <= 200) { 
        MCTR265OriginalPlanTime = currentTime;
        return;
    }
MCTR265OriginalPlanTime = currentTime;
  var MCTR265OriginalPlanelement = document.getElementById("MCTR265OriginalPlan");
 if (!MCTR265OriginalPlanflag) {
     if (MCTR265OriginalPlanelement.classList.contains("EngineeringDesign-highlighted")) { 
     MCTR265OriginalPlanelement.classList.remove("EngineeringDesign-highlighted");
     MCTR265OriginalPlanelement.classList.add("EngineeringDesign");
      return;
}     MCTR265OriginalPlanelement.classList.remove("EngineeringDesign");
     MCTR265OriginalPlanelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["MCTR265OriginalPlan", "EngineeringDesign"]);
      MCTR265OriginalPlanflag=true
  }
 else {
     MCTR265OriginalPlanelement.classList.remove("EngineeringDesign-highlighted");
     MCTR265OriginalPlanelement.classList.add("EngineeringDesign");
     that.removeFromClicked("MCTR265OriginalPlan");
      MCTR265OriginalPlanflag=false
  }
};
$scope.MECE350OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE350OriginalPlanTime <= 200) { 
        MECE350OriginalPlanTime = currentTime;
        return;
    }
MECE350OriginalPlanTime = currentTime;
  var MECE350OriginalPlanelement = document.getElementById("MECE350OriginalPlan");
 if (!MECE350OriginalPlanflag) {
     if (MECE350OriginalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     MECE350OriginalPlanelement.classList.remove("EngineeringSciences-highlighted");
     MECE350OriginalPlanelement.classList.add("EngineeringSciences");
      return;
}     MECE350OriginalPlanelement.classList.remove("EngineeringSciences");
     MECE350OriginalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["MECE350OriginalPlan", "EngineeringSciences"]);
      MECE350OriginalPlanflag=true
  }
 else {
     MECE350OriginalPlanelement.classList.remove("EngineeringSciences-highlighted");
     MECE350OriginalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("MECE350OriginalPlan");
      MECE350OriginalPlanflag=false
  }
};
$scope.MCTR360OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR360OriginalPlanTime <= 200) { 
        MCTR360OriginalPlanTime = currentTime;
        return;
    }
MCTR360OriginalPlanTime = currentTime;
  var MCTR360OriginalPlanelement = document.getElementById("MCTR360OriginalPlan");
 if (!MCTR360OriginalPlanflag) {
     if (MCTR360OriginalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR360OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR360OriginalPlanelement.classList.add("Mechatronics");
      return;
}     MCTR360OriginalPlanelement.classList.remove("Mechatronics");
     MCTR360OriginalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR360OriginalPlan", "Mechatronics"]);
      MCTR360OriginalPlanflag=true
  }
 else {
     MCTR360OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR360OriginalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR360OriginalPlan");
      MCTR360OriginalPlanflag=false
  }
};
$scope.MATH309OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH309OriginalPlanTime <= 200) { 
        MATH309OriginalPlanTime = currentTime;
        return;
    }
MATH309OriginalPlanTime = currentTime;
  var MATH309OriginalPlanelement = document.getElementById("MATH309OriginalPlan");
 if (!MATH309OriginalPlanflag) {
     if (MATH309OriginalPlanelement.classList.contains("Math-highlighted")) { 
     MATH309OriginalPlanelement.classList.remove("Math-highlighted");
     MATH309OriginalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine24());
     MATH309OriginalPlanelement.classList.remove("Math");
     MATH309OriginalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH309OriginalPlan", "Math"]);
      MATH309OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine24());
     MATH309OriginalPlanelement.classList.remove("Math-highlighted");
     MATH309OriginalPlanelement.classList.add("Math");
     that.removeFromClicked("MATH309OriginalPlan");
      MATH309OriginalPlanflag=false
  }
};
$scope.ECE315OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE315OriginalPlanTime <= 200) { 
        ECE315OriginalPlanTime = currentTime;
        return;
    }
ECE315OriginalPlanTime = currentTime;
  var ECE315OriginalPlanelement = document.getElementById("ECE315OriginalPlan");
 if (!ECE315OriginalPlanflag) {
     if (ECE315OriginalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     ECE315OriginalPlanelement.classList.remove("EngineeringSciences-highlighted");
     ECE315OriginalPlanelement.classList.add("EngineeringSciences");
      return;
}     ECE315OriginalPlanelement.classList.remove("EngineeringSciences");
     ECE315OriginalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["ECE315OriginalPlan", "EngineeringSciences"]);
      ECE315OriginalPlanflag=true
  }
 else {
     ECE315OriginalPlanelement.classList.remove("EngineeringSciences-highlighted");
     ECE315OriginalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("ECE315OriginalPlan");
      ECE315OriginalPlanflag=false
  }
};
$scope.ENGL199OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGL199OriginalPlanTime <= 200) { 
        ENGL199OriginalPlanTime = currentTime;
        return;
    }
ENGL199OriginalPlanTime = currentTime;
  var ENGL199OriginalPlanelement = document.getElementById("ENGL199OriginalPlan");
 if (!ENGL199OriginalPlanflag) {
     if (ENGL199OriginalPlanelement.classList.contains("Other-highlighted")) { 
     ENGL199OriginalPlanelement.classList.remove("Other-highlighted");
     ENGL199OriginalPlanelement.classList.add("Other");
      return;
}     ENGL199OriginalPlanelement.classList.remove("Other");
     ENGL199OriginalPlanelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGL199OriginalPlan", "Other"]);
      ENGL199OriginalPlanflag=true
  }
 else {
     ENGL199OriginalPlanelement.classList.remove("Other-highlighted");
     ENGL199OriginalPlanelement.classList.add("Other");
     that.removeFromClicked("ENGL199OriginalPlan");
      ENGL199OriginalPlanflag=false
  }
};
$scope.MCTR275OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR275OriginalPlanTime <= 200) { 
        MCTR275OriginalPlanTime = currentTime;
        return;
    }
MCTR275OriginalPlanTime = currentTime;
  var MCTR275OriginalPlanelement = document.getElementById("MCTR275OriginalPlan");
 if (!MCTR275OriginalPlanflag) {
     if (MCTR275OriginalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR275OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR275OriginalPlanelement.classList.add("Mechatronics");
      return;
}     MCTR275OriginalPlanelement.classList.remove("Mechatronics");
     MCTR275OriginalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR275OriginalPlan", "Mechatronics"]);
      MCTR275OriginalPlanflag=true
  }
 else {
     MCTR275OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR275OriginalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR275OriginalPlan");
      MCTR275OriginalPlanflag=false
  }
};
$scope.MCTR300OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR300OriginalPlanTime <= 200) { 
        MCTR300OriginalPlanTime = currentTime;
        return;
    }
MCTR300OriginalPlanTime = currentTime;
  var MCTR300OriginalPlanelement = document.getElementById("MCTR300OriginalPlan");
 if (!MCTR300OriginalPlanflag) {
     if (MCTR300OriginalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR300OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR300OriginalPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine25());
      that.addLine(getLine26());
     MCTR300OriginalPlanelement.classList.remove("Mechatronics");
     MCTR300OriginalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR300OriginalPlan", "Mechatronics"]);
      MCTR300OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine25());
      that.removeLine(getLine26());
     MCTR300OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR300OriginalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR300OriginalPlan");
      MCTR300OriginalPlanflag=false
  }
};
$scope.ECE342OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE342OriginalPlanTime <= 200) { 
        ECE342OriginalPlanTime = currentTime;
        return;
    }
ECE342OriginalPlanTime = currentTime;
  var ECE342OriginalPlanelement = document.getElementById("ECE342OriginalPlan");
 if (!ECE342OriginalPlanflag) {
     if (ECE342OriginalPlanelement.classList.contains("Math-highlighted")) { 
     ECE342OriginalPlanelement.classList.remove("Math-highlighted");
     ECE342OriginalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine26());
      that.addLine(getLine27());
     ECE342OriginalPlanelement.classList.remove("Math");
     ECE342OriginalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["ECE342OriginalPlan", "Math"]);
      ECE342OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine26());
      that.removeLine(getLine27());
     ECE342OriginalPlanelement.classList.remove("Math-highlighted");
     ECE342OriginalPlanelement.classList.add("Math");
     that.removeFromClicked("ECE342OriginalPlan");
      ECE342OriginalPlanflag=false
  }
};
$scope.MCTR365OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR365OriginalPlanTime <= 200) { 
        MCTR365OriginalPlanTime = currentTime;
        return;
    }
MCTR365OriginalPlanTime = currentTime;
  var MCTR365OriginalPlanelement = document.getElementById("MCTR365OriginalPlan");
 if (!MCTR365OriginalPlanflag) {
     if (MCTR365OriginalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR365OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR365OriginalPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine28());
     MCTR365OriginalPlanelement.classList.remove("Mechatronics");
     MCTR365OriginalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR365OriginalPlan", "Mechatronics"]);
      MCTR365OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine28());
     MCTR365OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR365OriginalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR365OriginalPlan");
      MCTR365OriginalPlanflag=false
  }
};
$scope.ENGM310OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM310OriginalPlanTime <= 200) { 
        ENGM310OriginalPlanTime = currentTime;
        return;
    }
ENGM310OriginalPlanTime = currentTime;
  var ENGM310OriginalPlanelement = document.getElementById("ENGM310OriginalPlan");
 if (!ENGM310OriginalPlanflag) {
     if (ENGM310OriginalPlanelement.classList.contains("Other-highlighted")) { 
     ENGM310OriginalPlanelement.classList.remove("Other-highlighted");
     ENGM310OriginalPlanelement.classList.add("Other");
      return;
}     ENGM310OriginalPlanelement.classList.remove("Other");
     ENGM310OriginalPlanelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGM310OriginalPlan", "Other"]);
      ENGM310OriginalPlanflag=true
  }
 else {
     ENGM310OriginalPlanelement.classList.remove("Other-highlighted");
     ENGM310OriginalPlanelement.classList.add("Other");
     that.removeFromClicked("ENGM310OriginalPlan");
      ENGM310OriginalPlanflag=false
  }
};
$scope.MCTR332OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR332OriginalPlanTime <= 200) { 
        MCTR332OriginalPlanTime = currentTime;
        return;
    }
MCTR332OriginalPlanTime = currentTime;
  var MCTR332OriginalPlanelement = document.getElementById("MCTR332OriginalPlan");
 if (!MCTR332OriginalPlanflag) {
     if (MCTR332OriginalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR332OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR332OriginalPlanelement.classList.add("Mechatronics");
      return;
}     MCTR332OriginalPlanelement.classList.remove("Mechatronics");
     MCTR332OriginalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR332OriginalPlan", "Mechatronics"]);
      MCTR332OriginalPlanflag=true
  }
 else {
     MCTR332OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR332OriginalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR332OriginalPlan");
      MCTR332OriginalPlanflag=false
  }
};
$scope.ITSElectiveOriginalPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ITSElectiveOriginalPlan0Time <= 200) { 
        ITSElectiveOriginalPlan0Time = currentTime;
        return;
    }
ITSElectiveOriginalPlan0Time = currentTime;
  var ITSElectiveOriginalPlan0element = document.getElementById("ITSElectiveOriginalPlan0");
 if (!ITSElectiveOriginalPlan0flag) {
     if (ITSElectiveOriginalPlan0element.classList.contains("ITS-highlighted")) { 
     ITSElectiveOriginalPlan0element.classList.remove("ITS-highlighted");
     ITSElectiveOriginalPlan0element.classList.add("ITS");
      return;
}     ITSElectiveOriginalPlan0element.classList.remove("ITS");
     ITSElectiveOriginalPlan0element.classList.add("ITS-highlighted");
     that.addToClicked(["ITSElectiveOriginalPlan0", "ITS"]);
      ITSElectiveOriginalPlan0flag=true
  }
 else {
     ITSElectiveOriginalPlan0element.classList.remove("ITS-highlighted");
     ITSElectiveOriginalPlan0element.classList.add("ITS");
     that.removeFromClicked("ITSElectiveOriginalPlan0");
      ITSElectiveOriginalPlan0flag=false
  }
};
$scope.MCTR490OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR490OriginalPlanTime <= 200) { 
        MCTR490OriginalPlanTime = currentTime;
        return;
    }
MCTR490OriginalPlanTime = currentTime;
  var MCTR490OriginalPlanelement = document.getElementById("MCTR490OriginalPlan");
 if (!MCTR490OriginalPlanflag) {
     if (MCTR490OriginalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR490OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR490OriginalPlanelement.classList.add("Mechatronics");
      return;
}     MCTR490OriginalPlanelement.classList.remove("Mechatronics");
     MCTR490OriginalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR490OriginalPlan", "Mechatronics"]);
      MCTR490OriginalPlanflag=true
  }
 else {
     MCTR490OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR490OriginalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR490OriginalPlan");
      MCTR490OriginalPlanflag=false
  }
};
$scope.MCTR460OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR460OriginalPlanTime <= 200) { 
        MCTR460OriginalPlanTime = currentTime;
        return;
    }
MCTR460OriginalPlanTime = currentTime;
  var MCTR460OriginalPlanelement = document.getElementById("MCTR460OriginalPlan");
 if (!MCTR460OriginalPlanflag) {
     if (MCTR460OriginalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR460OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR460OriginalPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine33());
     MCTR460OriginalPlanelement.classList.remove("Mechatronics");
     MCTR460OriginalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR460OriginalPlan", "Mechatronics"]);
      MCTR460OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine33());
     MCTR460OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR460OriginalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR460OriginalPlan");
      MCTR460OriginalPlanflag=false
  }
};
$scope.MATH300OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH300OriginalPlanTime <= 200) { 
        MATH300OriginalPlanTime = currentTime;
        return;
    }
MATH300OriginalPlanTime = currentTime;
  var MATH300OriginalPlanelement = document.getElementById("MATH300OriginalPlan");
 if (!MATH300OriginalPlanflag) {
     if (MATH300OriginalPlanelement.classList.contains("Math-highlighted")) { 
     MATH300OriginalPlanelement.classList.remove("Math-highlighted");
     MATH300OriginalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine29());
      that.addLine(getLine30());
     MATH300OriginalPlanelement.classList.remove("Math");
     MATH300OriginalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH300OriginalPlan", "Math"]);
      MATH300OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine29());
      that.removeLine(getLine30());
     MATH300OriginalPlanelement.classList.remove("Math-highlighted");
     MATH300OriginalPlanelement.classList.add("Math");
     that.removeFromClicked("MATH300OriginalPlan");
      MATH300OriginalPlanflag=false
  }
};
$scope.ComplementaryElectiveOriginalPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveOriginalPlan1Time <= 200) { 
        ComplementaryElectiveOriginalPlan1Time = currentTime;
        return;
    }
ComplementaryElectiveOriginalPlan1Time = currentTime;
  var ComplementaryElectiveOriginalPlan1element = document.getElementById("ComplementaryElectiveOriginalPlan1");
 if (!ComplementaryElectiveOriginalPlan1flag) {
     if (ComplementaryElectiveOriginalPlan1element.classList.contains("COMP-highlighted")) { 
     ComplementaryElectiveOriginalPlan1element.classList.remove("COMP-highlighted");
     ComplementaryElectiveOriginalPlan1element.classList.add("COMP");
      return;
}     ComplementaryElectiveOriginalPlan1element.classList.remove("COMP");
     ComplementaryElectiveOriginalPlan1element.classList.add("COMP-highlighted");
     that.addToClicked(["ComplementaryElectiveOriginalPlan1", "COMP"]);
      ComplementaryElectiveOriginalPlan1flag=true
  }
 else {
     ComplementaryElectiveOriginalPlan1element.classList.remove("COMP-highlighted");
     ComplementaryElectiveOriginalPlan1element.classList.add("COMP");
     that.removeFromClicked("ComplementaryElectiveOriginalPlan1");
      ComplementaryElectiveOriginalPlan1flag=false
  }
};
$scope.MECE390OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE390OriginalPlanTime <= 200) { 
        MECE390OriginalPlanTime = currentTime;
        return;
    }
MECE390OriginalPlanTime = currentTime;
  var MECE390OriginalPlanelement = document.getElementById("MECE390OriginalPlan");
 if (!MECE390OriginalPlanflag) {
     if (MECE390OriginalPlanelement.classList.contains("Math-highlighted")) { 
     MECE390OriginalPlanelement.classList.remove("Math-highlighted");
     MECE390OriginalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine31());
      that.addLine(getLine32());
     MECE390OriginalPlanelement.classList.remove("Math");
     MECE390OriginalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MECE390OriginalPlan", "Math"]);
      MECE390OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine31());
      that.removeLine(getLine32());
     MECE390OriginalPlanelement.classList.remove("Math-highlighted");
     MECE390OriginalPlanelement.classList.add("Math");
     that.removeFromClicked("MECE390OriginalPlan");
      MECE390OriginalPlanflag=false
  }
};
$scope.ProgramTechnicalElectiveOriginalPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveOriginalPlan0Time <= 200) { 
        ProgramTechnicalElectiveOriginalPlan0Time = currentTime;
        return;
    }
ProgramTechnicalElectiveOriginalPlan0Time = currentTime;
  var ProgramTechnicalElectiveOriginalPlan0element = document.getElementById("ProgramTechnicalElectiveOriginalPlan0");
 if (!ProgramTechnicalElectiveOriginalPlan0flag) {
     if (ProgramTechnicalElectiveOriginalPlan0element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveOriginalPlan0element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveOriginalPlan0element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveOriginalPlan0element.classList.remove("PROG");
     ProgramTechnicalElectiveOriginalPlan0element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveOriginalPlan0", "PROG"]);
      ProgramTechnicalElectiveOriginalPlan0flag=true
  }
 else {
     ProgramTechnicalElectiveOriginalPlan0element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveOriginalPlan0element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveOriginalPlan0");
      ProgramTechnicalElectiveOriginalPlan0flag=false
  }
};
$scope.MCTR491OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR491OriginalPlanTime <= 200) { 
        MCTR491OriginalPlanTime = currentTime;
        return;
    }
MCTR491OriginalPlanTime = currentTime;
  var MCTR491OriginalPlanelement = document.getElementById("MCTR491OriginalPlan");
 if (!MCTR491OriginalPlanflag) {
     if (MCTR491OriginalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR491OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR491OriginalPlanelement.classList.add("Mechatronics");
      return;
}     MCTR491OriginalPlanelement.classList.remove("Mechatronics");
     MCTR491OriginalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR491OriginalPlan", "Mechatronics"]);
      MCTR491OriginalPlanflag=true
  }
 else {
     MCTR491OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR491OriginalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR491OriginalPlan");
      MCTR491OriginalPlanflag=false
  }
};
$scope.MCTR461OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR461OriginalPlanTime <= 200) { 
        MCTR461OriginalPlanTime = currentTime;
        return;
    }
MCTR461OriginalPlanTime = currentTime;
  var MCTR461OriginalPlanelement = document.getElementById("MCTR461OriginalPlan");
 if (!MCTR461OriginalPlanflag) {
     if (MCTR461OriginalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR461OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR461OriginalPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine33());
      that.addLine(getLine34());
     MCTR461OriginalPlanelement.classList.remove("Mechatronics");
     MCTR461OriginalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR461OriginalPlan", "Mechatronics"]);
      MCTR461OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine33());
      that.removeLine(getLine34());
     MCTR461OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR461OriginalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR461OriginalPlan");
      MCTR461OriginalPlanflag=false
  }
};
$scope.MCTR465OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR465OriginalPlanTime <= 200) { 
        MCTR465OriginalPlanTime = currentTime;
        return;
    }
MCTR465OriginalPlanTime = currentTime;
  var MCTR465OriginalPlanelement = document.getElementById("MCTR465OriginalPlan");
 if (!MCTR465OriginalPlanflag) {
     if (MCTR465OriginalPlanelement.classList.contains("Mechatronics-highlighted")) { 
     MCTR465OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR465OriginalPlanelement.classList.add("Mechatronics");
      return;
}      that.addLine(getLine34());
     MCTR465OriginalPlanelement.classList.remove("Mechatronics");
     MCTR465OriginalPlanelement.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR465OriginalPlan", "Mechatronics"]);
      MCTR465OriginalPlanflag=true
  }
 else {
      that.removeLine(getLine34());
     MCTR465OriginalPlanelement.classList.remove("Mechatronics-highlighted");
     MCTR465OriginalPlanelement.classList.add("Mechatronics");
     that.removeFromClicked("MCTR465OriginalPlan");
      MCTR465OriginalPlanflag=false
  }
};
$scope.ENGG404OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG404OriginalPlanTime <= 200) { 
        ENGG404OriginalPlanTime = currentTime;
        return;
    }
ENGG404OriginalPlanTime = currentTime;
  var ENGG404OriginalPlanelement = document.getElementById("ENGG404OriginalPlan");
 if (!ENGG404OriginalPlanflag) {
     if (ENGG404OriginalPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG404OriginalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG404OriginalPlanelement.classList.add("EngineeringProfession");
      return;
}     ENGG404OriginalPlanelement.classList.remove("EngineeringProfession");
     ENGG404OriginalPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG404OriginalPlan", "EngineeringProfession"]);
      ENGG404OriginalPlanflag=true
  }
 else {
     ENGG404OriginalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG404OriginalPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG404OriginalPlan");
      ENGG404OriginalPlanflag=false
  }
};
$scope.ENGG400OriginalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG400OriginalPlanTime <= 200) { 
        ENGG400OriginalPlanTime = currentTime;
        return;
    }
ENGG400OriginalPlanTime = currentTime;
  var ENGG400OriginalPlanelement = document.getElementById("ENGG400OriginalPlan");
 if (!ENGG400OriginalPlanflag) {
     if (ENGG400OriginalPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG400OriginalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG400OriginalPlanelement.classList.add("EngineeringProfession");
      return;
}     ENGG400OriginalPlanelement.classList.remove("EngineeringProfession");
     ENGG400OriginalPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG400OriginalPlan", "EngineeringProfession"]);
      ENGG400OriginalPlanflag=true
  }
 else {
     ENGG400OriginalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG400OriginalPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG400OriginalPlan");
      ENGG400OriginalPlanflag=false
  }
};
$scope.ProgramTechnicalElectiveOriginalPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveOriginalPlan1Time <= 200) { 
        ProgramTechnicalElectiveOriginalPlan1Time = currentTime;
        return;
    }
ProgramTechnicalElectiveOriginalPlan1Time = currentTime;
  var ProgramTechnicalElectiveOriginalPlan1element = document.getElementById("ProgramTechnicalElectiveOriginalPlan1");
 if (!ProgramTechnicalElectiveOriginalPlan1flag) {
     if (ProgramTechnicalElectiveOriginalPlan1element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveOriginalPlan1element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveOriginalPlan1element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveOriginalPlan1element.classList.remove("PROG");
     ProgramTechnicalElectiveOriginalPlan1element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveOriginalPlan1", "PROG"]);
      ProgramTechnicalElectiveOriginalPlan1flag=true
  }
 else {
     ProgramTechnicalElectiveOriginalPlan1element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveOriginalPlan1element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveOriginalPlan1");
      ProgramTechnicalElectiveOriginalPlan1flag=false
  }
};
$scope.ProgramTechnicalElectiveOriginalPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveOriginalPlan2Time <= 200) { 
        ProgramTechnicalElectiveOriginalPlan2Time = currentTime;
        return;
    }
ProgramTechnicalElectiveOriginalPlan2Time = currentTime;
  var ProgramTechnicalElectiveOriginalPlan2element = document.getElementById("ProgramTechnicalElectiveOriginalPlan2");
 if (!ProgramTechnicalElectiveOriginalPlan2flag) {
     if (ProgramTechnicalElectiveOriginalPlan2element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveOriginalPlan2element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveOriginalPlan2element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveOriginalPlan2element.classList.remove("PROG");
     ProgramTechnicalElectiveOriginalPlan2element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveOriginalPlan2", "PROG"]);
      ProgramTechnicalElectiveOriginalPlan2flag=true
  }
 else {
     ProgramTechnicalElectiveOriginalPlan2element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveOriginalPlan2element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveOriginalPlan2");
      ProgramTechnicalElectiveOriginalPlan2flag=false
  }
};
$scope.CHEM103OriginalPlanRCListener = function () {
  var element = document.getElementById("CHEM103OriginalPlandesc");
 if (!CHEM103OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM103OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM103OriginalPlanrflag=false
  }
};
$scope.ENGG100OriginalPlanRCListener = function () {
  var element = document.getElementById("ENGG100OriginalPlandesc");
 if (!ENGG100OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG100OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG100OriginalPlanrflag=false
  }
};
$scope.ENGG130OriginalPlanRCListener = function () {
  var element = document.getElementById("ENGG130OriginalPlandesc");
 if (!ENGG130OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG130OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG130OriginalPlanrflag=false
  }
};
$scope.MATH100OriginalPlanRCListener = function () {
  var element = document.getElementById("MATH100OriginalPlandesc");
 if (!MATH100OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH100OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH100OriginalPlanrflag=false
  }
};
$scope.PHYS130OriginalPlanRCListener = function () {
  var element = document.getElementById("PHYS130OriginalPlandesc");
 if (!PHYS130OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS130OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS130OriginalPlanrflag=false
  }
};
$scope.ComplementaryElectiveOriginalPlan0RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveOriginalPlan0desc");
 if (!ComplementaryElectiveOriginalPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveOriginalPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveOriginalPlan0rflag=false
  }
};
$scope.CHEM105OriginalPlanRCListener = function () {
  var element = document.getElementById("CHEM105OriginalPlandesc");
 if (!CHEM105OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM105OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM105OriginalPlanrflag=false
  }
};
$scope.ENCMP100OriginalPlanRCListener = function () {
  var element = document.getElementById("ENCMP100OriginalPlandesc");
 if (!ENCMP100OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENCMP100OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENCMP100OriginalPlanrflag=false
  }
};
$scope.ENGG101OriginalPlanRCListener = function () {
  var element = document.getElementById("ENGG101OriginalPlandesc");
 if (!ENGG101OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG101OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG101OriginalPlanrflag=false
  }
};
$scope.ENPH131OriginalPlanRCListener = function () {
  var element = document.getElementById("ENPH131OriginalPlandesc");
 if (!ENPH131OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENPH131OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENPH131OriginalPlanrflag=false
  }
};
$scope.MATH101OriginalPlanRCListener = function () {
  var element = document.getElementById("MATH101OriginalPlandesc");
 if (!MATH101OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH101OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH101OriginalPlanrflag=false
  }
};
$scope.MATH102OriginalPlanRCListener = function () {
  var element = document.getElementById("MATH102OriginalPlandesc");
 if (!MATH102OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH102OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH102OriginalPlanrflag=false
  }
};
$scope.ECE202OriginalPlanRCListener = function () {
  var element = document.getElementById("ECE202OriginalPlandesc");
 if (!ECE202OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE202OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE202OriginalPlanrflag=false
  }
};
$scope.ECE210OriginalPlanRCListener = function () {
  var element = document.getElementById("ECE210OriginalPlandesc");
 if (!ECE210OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE210OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE210OriginalPlanrflag=false
  }
};
$scope.CIVE270OriginalPlanRCListener = function () {
  var element = document.getElementById("CIVE270OriginalPlandesc");
 if (!CIVE270OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE270OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE270OriginalPlanrflag=false
  }
};
$scope.MATH209OriginalPlanRCListener = function () {
  var element = document.getElementById("MATH209OriginalPlandesc");
 if (!MATH209OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH209OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH209OriginalPlanrflag=false
  }
};
$scope.MECE230OriginalPlanRCListener = function () {
  var element = document.getElementById("MECE230OriginalPlandesc");
 if (!MECE230OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE230OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE230OriginalPlanrflag=false
  }
};
$scope.CHE243OriginalPlanRCListener = function () {
  var element = document.getElementById("CHE243OriginalPlandesc");
 if (!CHE243OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE243OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE243OriginalPlanrflag=false
  }
};
$scope.ENGG299OriginalPlanRCListener = function () {
  var element = document.getElementById("ENGG299OriginalPlandesc");
 if (!ENGG299OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG299OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG299OriginalPlanrflag=false
  }
};
$scope.MCTR250OriginalPlanRCListener = function () {
  var element = document.getElementById("MCTR250OriginalPlandesc");
 if (!MCTR250OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR250OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR250OriginalPlanrflag=false
  }
};
$scope.MCTR274OriginalPlanRCListener = function () {
  var element = document.getElementById("MCTR274OriginalPlandesc");
 if (!MCTR274OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR274OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR274OriginalPlanrflag=false
  }
};
$scope.ECE240OriginalPlanRCListener = function () {
  var element = document.getElementById("ECE240OriginalPlandesc");
 if (!ECE240OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE240OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE240OriginalPlanrflag=false
  }
};
$scope.MATH201OriginalPlanRCListener = function () {
  var element = document.getElementById("MATH201OriginalPlandesc");
 if (!MATH201OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH201OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH201OriginalPlanrflag=false
  }
};
$scope.MCTR260OriginalPlanRCListener = function () {
  var element = document.getElementById("MCTR260OriginalPlandesc");
 if (!MCTR260OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR260OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR260OriginalPlanrflag=false
  }
};
$scope.MCTR265OriginalPlanRCListener = function () {
  var element = document.getElementById("MCTR265OriginalPlandesc");
 if (!MCTR265OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR265OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR265OriginalPlanrflag=false
  }
};
$scope.MECE350OriginalPlanRCListener = function () {
  var element = document.getElementById("MECE350OriginalPlandesc");
 if (!MECE350OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE350OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE350OriginalPlanrflag=false
  }
};
$scope.MCTR360OriginalPlanRCListener = function () {
  var element = document.getElementById("MCTR360OriginalPlandesc");
 if (!MCTR360OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR360OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR360OriginalPlanrflag=false
  }
};
$scope.MATH309OriginalPlanRCListener = function () {
  var element = document.getElementById("MATH309OriginalPlandesc");
 if (!MATH309OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH309OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH309OriginalPlanrflag=false
  }
};
$scope.ECE315OriginalPlanRCListener = function () {
  var element = document.getElementById("ECE315OriginalPlandesc");
 if (!ECE315OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE315OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE315OriginalPlanrflag=false
  }
};
$scope.ENGL199OriginalPlanRCListener = function () {
  var element = document.getElementById("ENGL199OriginalPlandesc");
 if (!ENGL199OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGL199OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGL199OriginalPlanrflag=false
  }
};
$scope.MCTR275OriginalPlanRCListener = function () {
  var element = document.getElementById("MCTR275OriginalPlandesc");
 if (!MCTR275OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR275OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR275OriginalPlanrflag=false
  }
};
$scope.MCTR300OriginalPlanRCListener = function () {
  var element = document.getElementById("MCTR300OriginalPlandesc");
 if (!MCTR300OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR300OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR300OriginalPlanrflag=false
  }
};
$scope.ECE342OriginalPlanRCListener = function () {
  var element = document.getElementById("ECE342OriginalPlandesc");
 if (!ECE342OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE342OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE342OriginalPlanrflag=false
  }
};
$scope.MCTR365OriginalPlanRCListener = function () {
  var element = document.getElementById("MCTR365OriginalPlandesc");
 if (!MCTR365OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR365OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR365OriginalPlanrflag=false
  }
};
$scope.ENGM310OriginalPlanRCListener = function () {
  var element = document.getElementById("ENGM310OriginalPlandesc");
 if (!ENGM310OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM310OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM310OriginalPlanrflag=false
  }
};
$scope.MCTR332OriginalPlanRCListener = function () {
  var element = document.getElementById("MCTR332OriginalPlandesc");
 if (!MCTR332OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR332OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR332OriginalPlanrflag=false
  }
};
$scope.ITSElectiveOriginalPlan0RCListener = function () {
  var element = document.getElementById("ITSElectiveOriginalPlan0desc");
 if (!ITSElectiveOriginalPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ITSElectiveOriginalPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ITSElectiveOriginalPlan0rflag=false
  }
};
$scope.MCTR490OriginalPlanRCListener = function () {
  var element = document.getElementById("MCTR490OriginalPlandesc");
 if (!MCTR490OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR490OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR490OriginalPlanrflag=false
  }
};
$scope.MCTR460OriginalPlanRCListener = function () {
  var element = document.getElementById("MCTR460OriginalPlandesc");
 if (!MCTR460OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR460OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR460OriginalPlanrflag=false
  }
};
$scope.MATH300OriginalPlanRCListener = function () {
  var element = document.getElementById("MATH300OriginalPlandesc");
 if (!MATH300OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH300OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH300OriginalPlanrflag=false
  }
};
$scope.ComplementaryElectiveOriginalPlan1RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveOriginalPlan1desc");
 if (!ComplementaryElectiveOriginalPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveOriginalPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveOriginalPlan1rflag=false
  }
};
$scope.MECE390OriginalPlanRCListener = function () {
  var element = document.getElementById("MECE390OriginalPlandesc");
 if (!MECE390OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE390OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE390OriginalPlanrflag=false
  }
};
$scope.ProgramTechnicalElectiveOriginalPlan0RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveOriginalPlan0desc");
 if (!ProgramTechnicalElectiveOriginalPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveOriginalPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveOriginalPlan0rflag=false
  }
};
$scope.MCTR491OriginalPlanRCListener = function () {
  var element = document.getElementById("MCTR491OriginalPlandesc");
 if (!MCTR491OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR491OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR491OriginalPlanrflag=false
  }
};
$scope.MCTR461OriginalPlanRCListener = function () {
  var element = document.getElementById("MCTR461OriginalPlandesc");
 if (!MCTR461OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR461OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR461OriginalPlanrflag=false
  }
};
$scope.MCTR465OriginalPlanRCListener = function () {
  var element = document.getElementById("MCTR465OriginalPlandesc");
 if (!MCTR465OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR465OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR465OriginalPlanrflag=false
  }
};
$scope.ENGG404OriginalPlanRCListener = function () {
  var element = document.getElementById("ENGG404OriginalPlandesc");
 if (!ENGG404OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG404OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG404OriginalPlanrflag=false
  }
};
$scope.ENGG400OriginalPlanRCListener = function () {
  var element = document.getElementById("ENGG400OriginalPlandesc");
 if (!ENGG400OriginalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG400OriginalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG400OriginalPlanrflag=false
  }
};
$scope.ProgramTechnicalElectiveOriginalPlan1RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveOriginalPlan1desc");
 if (!ProgramTechnicalElectiveOriginalPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveOriginalPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveOriginalPlan1rflag=false
  }
};
$scope.ProgramTechnicalElectiveOriginalPlan2RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveOriginalPlan2desc");
 if (!ProgramTechnicalElectiveOriginalPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveOriginalPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveOriginalPlan2rflag=false
  }
};
  var CHEM103ProposedPlanJuly2021flag = false;
  var CHEM103ProposedPlanJuly2021rflag = false;
 var CHEM103ProposedPlanJuly2021Time = new Date().getTime();
  var ENGG100ProposedPlanJuly2021flag = false;
  var ENGG100ProposedPlanJuly2021rflag = false;
 var ENGG100ProposedPlanJuly2021Time = new Date().getTime();
  var ENGG130ProposedPlanJuly2021flag = false;
  var ENGG130ProposedPlanJuly2021rflag = false;
 var ENGG130ProposedPlanJuly2021Time = new Date().getTime();
  var ENGL199ProposedPlanJuly2021flag = false;
  var ENGL199ProposedPlanJuly2021rflag = false;
 var ENGL199ProposedPlanJuly2021Time = new Date().getTime();
  var MATH100ProposedPlanJuly2021flag = false;
  var MATH100ProposedPlanJuly2021rflag = false;
 var MATH100ProposedPlanJuly2021Time = new Date().getTime();
  var PHYS130ProposedPlanJuly2021flag = false;
  var PHYS130ProposedPlanJuly2021rflag = false;
 var PHYS130ProposedPlanJuly2021Time = new Date().getTime();
  var CHEM105ProposedPlanJuly2021flag = false;
  var CHEM105ProposedPlanJuly2021rflag = false;
 var CHEM105ProposedPlanJuly2021Time = new Date().getTime();
  var ENCMP100ProposedPlanJuly2021flag = false;
  var ENCMP100ProposedPlanJuly2021rflag = false;
 var ENCMP100ProposedPlanJuly2021Time = new Date().getTime();
  var ENGG160ProposedPlanJuly2021flag = false;
  var ENGG160ProposedPlanJuly2021rflag = false;
 var ENGG160ProposedPlanJuly2021Time = new Date().getTime();
  var ENPH131ProposedPlanJuly2021flag = false;
  var ENPH131ProposedPlanJuly2021rflag = false;
 var ENPH131ProposedPlanJuly2021Time = new Date().getTime();
  var MATH101ProposedPlanJuly2021flag = false;
  var MATH101ProposedPlanJuly2021rflag = false;
 var MATH101ProposedPlanJuly2021Time = new Date().getTime();
  var MATH102ProposedPlanJuly2021flag = false;
  var MATH102ProposedPlanJuly2021rflag = false;
 var MATH102ProposedPlanJuly2021Time = new Date().getTime();
  var CIVE270ProposedPlanJuly2021flag = false;
  var CIVE270ProposedPlanJuly2021rflag = false;
 var CIVE270ProposedPlanJuly2021Time = new Date().getTime();
  var ECE210ProposedPlanJuly2021flag = false;
  var ECE210ProposedPlanJuly2021rflag = false;
 var ECE210ProposedPlanJuly2021Time = new Date().getTime();
  var ECE240ProposedPlanJuly2021flag = false;
  var ECE240ProposedPlanJuly2021rflag = false;
 var ECE240ProposedPlanJuly2021Time = new Date().getTime();
  var MATH201ProposedPlanJuly2021flag = false;
  var MATH201ProposedPlanJuly2021rflag = false;
 var MATH201ProposedPlanJuly2021Time = new Date().getTime();
  var MATH209ProposedPlanJuly2021flag = false;
  var MATH209ProposedPlanJuly2021rflag = false;
 var MATH209ProposedPlanJuly2021Time = new Date().getTime();
  var MCTR202ProposedPlanJuly2021flag = false;
  var MCTR202ProposedPlanJuly2021rflag = false;
 var MCTR202ProposedPlanJuly2021Time = new Date().getTime();
  var ENGG299ProposedPlanJuly2021flag = false;
  var ENGG299ProposedPlanJuly2021rflag = false;
 var ENGG299ProposedPlanJuly2021Time = new Date().getTime();
  var CHE243ProposedPlanJuly2021flag = false;
  var CHE243ProposedPlanJuly2021rflag = false;
 var CHE243ProposedPlanJuly2021Time = new Date().getTime();
  var MCTR200ProposedPlanJuly2021flag = false;
  var MCTR200ProposedPlanJuly2021rflag = false;
 var MCTR200ProposedPlanJuly2021Time = new Date().getTime();
  var MCTR274ProposedPlanJuly2021flag = false;
  var MCTR274ProposedPlanJuly2021rflag = false;
 var MCTR274ProposedPlanJuly2021Time = new Date().getTime();
  var MECE230ProposedPlanJuly2021flag = false;
  var MECE230ProposedPlanJuly2021rflag = false;
 var MECE230ProposedPlanJuly2021Time = new Date().getTime();
  var MECE250ProposedPlanJuly2021flag = false;
  var MECE250ProposedPlanJuly2021rflag = false;
 var MECE250ProposedPlanJuly2021Time = new Date().getTime();
  var MECE260ProposedPlanJuly2021flag = false;
  var MECE260ProposedPlanJuly2021rflag = false;
 var MECE260ProposedPlanJuly2021Time = new Date().getTime();
  var MECE265ProposedPlanJuly2021flag = false;
  var MECE265ProposedPlanJuly2021rflag = false;
 var MECE265ProposedPlanJuly2021Time = new Date().getTime();
  var ECE315ProposedPlanJuly2021flag = false;
  var ECE315ProposedPlanJuly2021rflag = false;
 var ECE315ProposedPlanJuly2021Time = new Date().getTime();
  var ECE342ProposedPlanJuly2021flag = false;
  var ECE342ProposedPlanJuly2021rflag = false;
 var ECE342ProposedPlanJuly2021Time = new Date().getTime();
  var MCTR374ProposedPlanJuly2021flag = false;
  var MCTR374ProposedPlanJuly2021rflag = false;
 var MCTR374ProposedPlanJuly2021Time = new Date().getTime();
  var MECE350ProposedPlanJuly2021flag = false;
  var MECE350ProposedPlanJuly2021rflag = false;
 var MECE350ProposedPlanJuly2021Time = new Date().getTime();
  var MECE360ProposedPlanJuly2021flag = false;
  var MECE360ProposedPlanJuly2021rflag = false;
 var MECE360ProposedPlanJuly2021Time = new Date().getTime();
  var MECE390ProposedPlanJuly2021flag = false;
  var MECE390ProposedPlanJuly2021rflag = false;
 var MECE390ProposedPlanJuly2021Time = new Date().getTime();
  var ENGM401ProposedPlanJuly2021flag = false;
  var ENGM401ProposedPlanJuly2021rflag = false;
 var ENGM401ProposedPlanJuly2021Time = new Date().getTime();
  var MCTR300ProposedPlanJuly2021flag = false;
  var MCTR300ProposedPlanJuly2021rflag = false;
 var MCTR300ProposedPlanJuly2021Time = new Date().getTime();
  var MCTR332ProposedPlanJuly2021flag = false;
  var MCTR332ProposedPlanJuly2021rflag = false;
 var MCTR332ProposedPlanJuly2021Time = new Date().getTime();
  var MCTR365ProposedPlanJuly2021flag = false;
  var MCTR365ProposedPlanJuly2021rflag = false;
 var MCTR365ProposedPlanJuly2021Time = new Date().getTime();
  var MCTR370ProposedPlanJuly2021flag = false;
  var MCTR370ProposedPlanJuly2021rflag = false;
 var MCTR370ProposedPlanJuly2021Time = new Date().getTime();
  var MECE420ProposedPlanJuly2021flag = false;
  var MECE420ProposedPlanJuly2021rflag = false;
 var MECE420ProposedPlanJuly2021Time = new Date().getTime();
  var ComplementaryElectiveProposedPlanJuly20210flag = false;
  var ComplementaryElectiveProposedPlanJuly20210rflag = false;
 var ComplementaryElectiveProposedPlanJuly20210Time = new Date().getTime();
  var ENGG404ProposedPlanJuly2021flag = false;
  var ENGG404ProposedPlanJuly2021rflag = false;
 var ENGG404ProposedPlanJuly2021Time = new Date().getTime();
  var ITSElectiveProposedPlanJuly20210flag = false;
  var ITSElectiveProposedPlanJuly20210rflag = false;
 var ITSElectiveProposedPlanJuly20210Time = new Date().getTime();
  var MATE201ProposedPlanJuly2021flag = false;
  var MATE201ProposedPlanJuly2021rflag = false;
 var MATE201ProposedPlanJuly2021Time = new Date().getTime();
  var MCTR460ProposedPlanJuly2021flag = false;
  var MCTR460ProposedPlanJuly2021rflag = false;
 var MCTR460ProposedPlanJuly2021Time = new Date().getTime();
  var MECE460ProposedPlanJuly2021flag = false;
  var MECE460ProposedPlanJuly2021rflag = false;
 var MECE460ProposedPlanJuly2021Time = new Date().getTime();
  var ENGG400ProposedPlanJuly2021flag = false;
  var ENGG400ProposedPlanJuly2021rflag = false;
 var ENGG400ProposedPlanJuly2021Time = new Date().getTime();
  var MCTR461ProposedPlanJuly2021flag = false;
  var MCTR461ProposedPlanJuly2021rflag = false;
 var MCTR461ProposedPlanJuly2021Time = new Date().getTime();
  var MCTR465ProposedPlanJuly2021flag = false;
  var MCTR465ProposedPlanJuly2021rflag = false;
 var MCTR465ProposedPlanJuly2021Time = new Date().getTime();
  var MECE461ProposedPlanJuly2021flag = false;
  var MECE461ProposedPlanJuly2021rflag = false;
 var MECE461ProposedPlanJuly2021Time = new Date().getTime();
  var MECE465ProposedPlanJuly2021flag = false;
  var MECE465ProposedPlanJuly2021rflag = false;
 var MECE465ProposedPlanJuly2021Time = new Date().getTime();
  var ProgramTechnicalElectiveProposedPlanJuly20210flag = false;
  var ProgramTechnicalElectiveProposedPlanJuly20210rflag = false;
 var ProgramTechnicalElectiveProposedPlanJuly20210Time = new Date().getTime();
  var ProgramTechnicalElectiveProposedPlanJuly20211flag = false;
  var ProgramTechnicalElectiveProposedPlanJuly20211rflag = false;
 var ProgramTechnicalElectiveProposedPlanJuly20211Time = new Date().getTime();
$scope.CHEM103ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103ProposedPlanJuly2021Time <= 200) { 
        CHEM103ProposedPlanJuly2021Time = currentTime;
        return;
    }
CHEM103ProposedPlanJuly2021Time = currentTime;
  var CHEM103ProposedPlanJuly2021element = document.getElementById("CHEM103ProposedPlanJuly2021");
 if (!CHEM103ProposedPlanJuly2021flag) {
     if (CHEM103ProposedPlanJuly2021element.classList.contains("NaturalSciences-highlighted")) { 
     CHEM103ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
     CHEM103ProposedPlanJuly2021element.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine37());
     CHEM103ProposedPlanJuly2021element.classList.remove("NaturalSciences");
     CHEM103ProposedPlanJuly2021element.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHEM103ProposedPlanJuly2021", "NaturalSciences"]);
      CHEM103ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine37());
     CHEM103ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
     CHEM103ProposedPlanJuly2021element.classList.add("NaturalSciences");
     that.removeFromClicked("CHEM103ProposedPlanJuly2021");
      CHEM103ProposedPlanJuly2021flag=false
  }
};
$scope.ENGG100ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG100ProposedPlanJuly2021Time <= 200) { 
        ENGG100ProposedPlanJuly2021Time = currentTime;
        return;
    }
ENGG100ProposedPlanJuly2021Time = currentTime;
  var ENGG100ProposedPlanJuly2021element = document.getElementById("ENGG100ProposedPlanJuly2021");
 if (!ENGG100ProposedPlanJuly2021flag) {
     if (ENGG100ProposedPlanJuly2021element.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG100ProposedPlanJuly2021element.classList.remove("EngineeringProfession-highlighted");
     ENGG100ProposedPlanJuly2021element.classList.add("EngineeringProfession");
      return;
}     ENGG100ProposedPlanJuly2021element.classList.remove("EngineeringProfession");
     ENGG100ProposedPlanJuly2021element.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG100ProposedPlanJuly2021", "EngineeringProfession"]);
      ENGG100ProposedPlanJuly2021flag=true
  }
 else {
     ENGG100ProposedPlanJuly2021element.classList.remove("EngineeringProfession-highlighted");
     ENGG100ProposedPlanJuly2021element.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG100ProposedPlanJuly2021");
      ENGG100ProposedPlanJuly2021flag=false
  }
};
$scope.ENGG130ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG130ProposedPlanJuly2021Time <= 200) { 
        ENGG130ProposedPlanJuly2021Time = currentTime;
        return;
    }
ENGG130ProposedPlanJuly2021Time = currentTime;
  var ENGG130ProposedPlanJuly2021element = document.getElementById("ENGG130ProposedPlanJuly2021");
 if (!ENGG130ProposedPlanJuly2021flag) {
     if (ENGG130ProposedPlanJuly2021element.classList.contains("NaturalSciences-highlighted")) { 
     ENGG130ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
     ENGG130ProposedPlanJuly2021element.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine35());
      that.addLine(getLine40());
      that.addLine(getLine44());
      that.addLine(getLine58());
     ENGG130ProposedPlanJuly2021element.classList.remove("NaturalSciences");
     ENGG130ProposedPlanJuly2021element.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENGG130ProposedPlanJuly2021", "NaturalSciences"]);
      ENGG130ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine35());
      that.removeLine(getLine40());
      that.removeLine(getLine44());
      that.removeLine(getLine58());
     ENGG130ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
     ENGG130ProposedPlanJuly2021element.classList.add("NaturalSciences");
     that.removeFromClicked("ENGG130ProposedPlanJuly2021");
      ENGG130ProposedPlanJuly2021flag=false
  }
};
$scope.ENGL199ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGL199ProposedPlanJuly2021Time <= 200) { 
        ENGL199ProposedPlanJuly2021Time = currentTime;
        return;
    }
ENGL199ProposedPlanJuly2021Time = currentTime;
  var ENGL199ProposedPlanJuly2021element = document.getElementById("ENGL199ProposedPlanJuly2021");
 if (!ENGL199ProposedPlanJuly2021flag) {
     if (ENGL199ProposedPlanJuly2021element.classList.contains("Other-highlighted")) { 
     ENGL199ProposedPlanJuly2021element.classList.remove("Other-highlighted");
     ENGL199ProposedPlanJuly2021element.classList.add("Other");
      return;
}      that.addLine(getLine38());
     ENGL199ProposedPlanJuly2021element.classList.remove("Other");
     ENGL199ProposedPlanJuly2021element.classList.add("Other-highlighted");
     that.addToClicked(["ENGL199ProposedPlanJuly2021", "Other"]);
      ENGL199ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine38());
     ENGL199ProposedPlanJuly2021element.classList.remove("Other-highlighted");
     ENGL199ProposedPlanJuly2021element.classList.add("Other");
     that.removeFromClicked("ENGL199ProposedPlanJuly2021");
      ENGL199ProposedPlanJuly2021flag=false
  }
};
$scope.MATH100ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH100ProposedPlanJuly2021Time <= 200) { 
        MATH100ProposedPlanJuly2021Time = currentTime;
        return;
    }
MATH100ProposedPlanJuly2021Time = currentTime;
  var MATH100ProposedPlanJuly2021element = document.getElementById("MATH100ProposedPlanJuly2021");
 if (!MATH100ProposedPlanJuly2021flag) {
     if (MATH100ProposedPlanJuly2021element.classList.contains("Math-highlighted")) { 
     MATH100ProposedPlanJuly2021element.classList.remove("Math-highlighted");
     MATH100ProposedPlanJuly2021element.classList.add("Math");
      return;
}      that.addLine(getLine35());
      that.addLine(getLine36());
      that.addLine(getLine39());
      that.addLine(getLine42());
      that.addLine(getLine43());
     MATH100ProposedPlanJuly2021element.classList.remove("Math");
     MATH100ProposedPlanJuly2021element.classList.add("Math-highlighted");
     that.addToClicked(["MATH100ProposedPlanJuly2021", "Math"]);
      MATH100ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine35());
      that.removeLine(getLine36());
      that.removeLine(getLine39());
      that.removeLine(getLine42());
      that.removeLine(getLine43());
     MATH100ProposedPlanJuly2021element.classList.remove("Math-highlighted");
     MATH100ProposedPlanJuly2021element.classList.add("Math");
     that.removeFromClicked("MATH100ProposedPlanJuly2021");
      MATH100ProposedPlanJuly2021flag=false
  }
};
$scope.PHYS130ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS130ProposedPlanJuly2021Time <= 200) { 
        PHYS130ProposedPlanJuly2021Time = currentTime;
        return;
    }
PHYS130ProposedPlanJuly2021Time = currentTime;
  var PHYS130ProposedPlanJuly2021element = document.getElementById("PHYS130ProposedPlanJuly2021");
 if (!PHYS130ProposedPlanJuly2021flag) {
     if (PHYS130ProposedPlanJuly2021element.classList.contains("NaturalSciences-highlighted")) { 
     PHYS130ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
     PHYS130ProposedPlanJuly2021element.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine36());
     PHYS130ProposedPlanJuly2021element.classList.remove("NaturalSciences");
     PHYS130ProposedPlanJuly2021element.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["PHYS130ProposedPlanJuly2021", "NaturalSciences"]);
      PHYS130ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine36());
     PHYS130ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
     PHYS130ProposedPlanJuly2021element.classList.add("NaturalSciences");
     that.removeFromClicked("PHYS130ProposedPlanJuly2021");
      PHYS130ProposedPlanJuly2021flag=false
  }
};
$scope.CHEM105ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM105ProposedPlanJuly2021Time <= 200) { 
        CHEM105ProposedPlanJuly2021Time = currentTime;
        return;
    }
CHEM105ProposedPlanJuly2021Time = currentTime;
  var CHEM105ProposedPlanJuly2021element = document.getElementById("CHEM105ProposedPlanJuly2021");
 if (!CHEM105ProposedPlanJuly2021flag) {
     if (CHEM105ProposedPlanJuly2021element.classList.contains("NaturalSciences-highlighted")) { 
     CHEM105ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
     CHEM105ProposedPlanJuly2021element.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine37());
      that.addLine(getLine85());
     CHEM105ProposedPlanJuly2021element.classList.remove("NaturalSciences");
     CHEM105ProposedPlanJuly2021element.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHEM105ProposedPlanJuly2021", "NaturalSciences"]);
      CHEM105ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine37());
      that.removeLine(getLine85());
     CHEM105ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
     CHEM105ProposedPlanJuly2021element.classList.add("NaturalSciences");
     that.removeFromClicked("CHEM105ProposedPlanJuly2021");
      CHEM105ProposedPlanJuly2021flag=false
  }
};
$scope.ENCMP100ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENCMP100ProposedPlanJuly2021Time <= 200) { 
        ENCMP100ProposedPlanJuly2021Time = currentTime;
        return;
    }
ENCMP100ProposedPlanJuly2021Time = currentTime;
  var ENCMP100ProposedPlanJuly2021element = document.getElementById("ENCMP100ProposedPlanJuly2021");
 if (!ENCMP100ProposedPlanJuly2021flag) {
     if (ENCMP100ProposedPlanJuly2021element.classList.contains("NaturalSciences-highlighted")) { 
     ENCMP100ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
     ENCMP100ProposedPlanJuly2021element.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine55());
     ENCMP100ProposedPlanJuly2021element.classList.remove("NaturalSciences");
     ENCMP100ProposedPlanJuly2021element.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENCMP100ProposedPlanJuly2021", "NaturalSciences"]);
      ENCMP100ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine55());
     ENCMP100ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
     ENCMP100ProposedPlanJuly2021element.classList.add("NaturalSciences");
     that.removeFromClicked("ENCMP100ProposedPlanJuly2021");
      ENCMP100ProposedPlanJuly2021flag=false
  }
};
$scope.ENGG160ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG160ProposedPlanJuly2021Time <= 200) { 
        ENGG160ProposedPlanJuly2021Time = currentTime;
        return;
    }
ENGG160ProposedPlanJuly2021Time = currentTime;
  var ENGG160ProposedPlanJuly2021element = document.getElementById("ENGG160ProposedPlanJuly2021");
 if (!ENGG160ProposedPlanJuly2021flag) {
     if (ENGG160ProposedPlanJuly2021element.classList.contains("EngineeringDesign-highlighted")) { 
     ENGG160ProposedPlanJuly2021element.classList.remove("EngineeringDesign-highlighted");
     ENGG160ProposedPlanJuly2021element.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine38());
      that.addLine(getLine61());
     ENGG160ProposedPlanJuly2021element.classList.remove("EngineeringDesign");
     ENGG160ProposedPlanJuly2021element.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["ENGG160ProposedPlanJuly2021", "EngineeringDesign"]);
      ENGG160ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine38());
      that.removeLine(getLine61());
     ENGG160ProposedPlanJuly2021element.classList.remove("EngineeringDesign-highlighted");
     ENGG160ProposedPlanJuly2021element.classList.add("EngineeringDesign");
     that.removeFromClicked("ENGG160ProposedPlanJuly2021");
      ENGG160ProposedPlanJuly2021flag=false
  }
};
$scope.ENPH131ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENPH131ProposedPlanJuly2021Time <= 200) { 
        ENPH131ProposedPlanJuly2021Time = currentTime;
        return;
    }
ENPH131ProposedPlanJuly2021Time = currentTime;
  var ENPH131ProposedPlanJuly2021element = document.getElementById("ENPH131ProposedPlanJuly2021");
 if (!ENPH131ProposedPlanJuly2021flag) {
     if (ENPH131ProposedPlanJuly2021element.classList.contains("NaturalSciences-highlighted")) { 
     ENPH131ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
     ENPH131ProposedPlanJuly2021element.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine39());
      that.addLine(getLine40());
      that.addLine(getLine41());
      that.addLine(getLine57());
      that.addLine(getLine59());
     ENPH131ProposedPlanJuly2021element.classList.remove("NaturalSciences");
     ENPH131ProposedPlanJuly2021element.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENPH131ProposedPlanJuly2021", "NaturalSciences"]);
      ENPH131ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine39());
      that.removeLine(getLine40());
      that.removeLine(getLine41());
      that.removeLine(getLine57());
      that.removeLine(getLine59());
     ENPH131ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
     ENPH131ProposedPlanJuly2021element.classList.add("NaturalSciences");
     that.removeFromClicked("ENPH131ProposedPlanJuly2021");
      ENPH131ProposedPlanJuly2021flag=false
  }
};
$scope.MATH101ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH101ProposedPlanJuly2021Time <= 200) { 
        MATH101ProposedPlanJuly2021Time = currentTime;
        return;
    }
MATH101ProposedPlanJuly2021Time = currentTime;
  var MATH101ProposedPlanJuly2021element = document.getElementById("MATH101ProposedPlanJuly2021");
 if (!MATH101ProposedPlanJuly2021flag) {
     if (MATH101ProposedPlanJuly2021element.classList.contains("Math-highlighted")) { 
     MATH101ProposedPlanJuly2021element.classList.remove("Math-highlighted");
     MATH101ProposedPlanJuly2021element.classList.add("Math");
      return;
}      that.addLine(getLine41());
      that.addLine(getLine42());
      that.addLine(getLine45());
      that.addLine(getLine49());
      that.addLine(getLine51());
      that.addLine(getLine54());
      that.addLine(getLine56());
      that.addLine(getLine60());
     MATH101ProposedPlanJuly2021element.classList.remove("Math");
     MATH101ProposedPlanJuly2021element.classList.add("Math-highlighted");
     that.addToClicked(["MATH101ProposedPlanJuly2021", "Math"]);
      MATH101ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine41());
      that.removeLine(getLine42());
      that.removeLine(getLine45());
      that.removeLine(getLine49());
      that.removeLine(getLine51());
      that.removeLine(getLine54());
      that.removeLine(getLine56());
      that.removeLine(getLine60());
     MATH101ProposedPlanJuly2021element.classList.remove("Math-highlighted");
     MATH101ProposedPlanJuly2021element.classList.add("Math");
     that.removeFromClicked("MATH101ProposedPlanJuly2021");
      MATH101ProposedPlanJuly2021flag=false
  }
};
$scope.MATH102ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH102ProposedPlanJuly2021Time <= 200) { 
        MATH102ProposedPlanJuly2021Time = currentTime;
        return;
    }
MATH102ProposedPlanJuly2021Time = currentTime;
  var MATH102ProposedPlanJuly2021element = document.getElementById("MATH102ProposedPlanJuly2021");
 if (!MATH102ProposedPlanJuly2021flag) {
     if (MATH102ProposedPlanJuly2021element.classList.contains("Math-highlighted")) { 
     MATH102ProposedPlanJuly2021element.classList.remove("Math-highlighted");
     MATH102ProposedPlanJuly2021element.classList.add("Math");
      return;
}      that.addLine(getLine43());
      that.addLine(getLine50());
      that.addLine(getLine52());
      that.addLine(getLine73());
     MATH102ProposedPlanJuly2021element.classList.remove("Math");
     MATH102ProposedPlanJuly2021element.classList.add("Math-highlighted");
     that.addToClicked(["MATH102ProposedPlanJuly2021", "Math"]);
      MATH102ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine43());
      that.removeLine(getLine50());
      that.removeLine(getLine52());
      that.removeLine(getLine73());
     MATH102ProposedPlanJuly2021element.classList.remove("Math-highlighted");
     MATH102ProposedPlanJuly2021element.classList.add("Math");
     that.removeFromClicked("MATH102ProposedPlanJuly2021");
      MATH102ProposedPlanJuly2021flag=false
  }
};
$scope.CIVE270ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE270ProposedPlanJuly2021Time <= 200) { 
        CIVE270ProposedPlanJuly2021Time = currentTime;
        return;
    }
CIVE270ProposedPlanJuly2021Time = currentTime;
  var CIVE270ProposedPlanJuly2021element = document.getElementById("CIVE270ProposedPlanJuly2021");
 if (!CIVE270ProposedPlanJuly2021flag) {
     if (CIVE270ProposedPlanJuly2021element.classList.contains("EngineeringSciences-highlighted")) { 
     CIVE270ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
     CIVE270ProposedPlanJuly2021element.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine44());
      that.addLine(getLine45());
      that.addLine(getLine63());
      that.addLine(getLine71());
      that.addLine(getLine75());
     CIVE270ProposedPlanJuly2021element.classList.remove("EngineeringSciences");
     CIVE270ProposedPlanJuly2021element.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["CIVE270ProposedPlanJuly2021", "EngineeringSciences"]);
      CIVE270ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine44());
      that.removeLine(getLine45());
      that.removeLine(getLine63());
      that.removeLine(getLine71());
      that.removeLine(getLine75());
     CIVE270ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
     CIVE270ProposedPlanJuly2021element.classList.add("EngineeringSciences");
     that.removeFromClicked("CIVE270ProposedPlanJuly2021");
      CIVE270ProposedPlanJuly2021flag=false
  }
};
$scope.ECE210ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE210ProposedPlanJuly2021Time <= 200) { 
        ECE210ProposedPlanJuly2021Time = currentTime;
        return;
    }
ECE210ProposedPlanJuly2021Time = currentTime;
  var ECE210ProposedPlanJuly2021element = document.getElementById("ECE210ProposedPlanJuly2021");
 if (!ECE210ProposedPlanJuly2021flag) {
     if (ECE210ProposedPlanJuly2021element.classList.contains("EngineeringSciences-highlighted")) { 
     ECE210ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
     ECE210ProposedPlanJuly2021element.classList.add("EngineeringSciences");
      return;
}     ECE210ProposedPlanJuly2021element.classList.remove("EngineeringSciences");
     ECE210ProposedPlanJuly2021element.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["ECE210ProposedPlanJuly2021", "EngineeringSciences"]);
      ECE210ProposedPlanJuly2021flag=true
  }
 else {
     ECE210ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
     ECE210ProposedPlanJuly2021element.classList.add("EngineeringSciences");
     that.removeFromClicked("ECE210ProposedPlanJuly2021");
      ECE210ProposedPlanJuly2021flag=false
  }
};
$scope.ECE240ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE240ProposedPlanJuly2021Time <= 200) { 
        ECE240ProposedPlanJuly2021Time = currentTime;
        return;
    }
ECE240ProposedPlanJuly2021Time = currentTime;
  var ECE240ProposedPlanJuly2021element = document.getElementById("ECE240ProposedPlanJuly2021");
 if (!ECE240ProposedPlanJuly2021flag) {
     if (ECE240ProposedPlanJuly2021element.classList.contains("EngineeringSciences-highlighted")) { 
     ECE240ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
     ECE240ProposedPlanJuly2021element.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine46());
      that.addLine(getLine47());
      that.addLine(getLine53());
     ECE240ProposedPlanJuly2021element.classList.remove("EngineeringSciences");
     ECE240ProposedPlanJuly2021element.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["ECE240ProposedPlanJuly2021", "EngineeringSciences"]);
      ECE240ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine46());
      that.removeLine(getLine47());
      that.removeLine(getLine53());
     ECE240ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
     ECE240ProposedPlanJuly2021element.classList.add("EngineeringSciences");
     that.removeFromClicked("ECE240ProposedPlanJuly2021");
      ECE240ProposedPlanJuly2021flag=false
  }
};
$scope.MATH201ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH201ProposedPlanJuly2021Time <= 200) { 
        MATH201ProposedPlanJuly2021Time = currentTime;
        return;
    }
MATH201ProposedPlanJuly2021Time = currentTime;
  var MATH201ProposedPlanJuly2021element = document.getElementById("MATH201ProposedPlanJuly2021");
 if (!MATH201ProposedPlanJuly2021flag) {
     if (MATH201ProposedPlanJuly2021element.classList.contains("Math-highlighted")) { 
     MATH201ProposedPlanJuly2021element.classList.remove("Math-highlighted");
     MATH201ProposedPlanJuly2021element.classList.add("Math");
      return;
}      that.addLine(getLine47());
      that.addLine(getLine48());
      that.addLine(getLine74());
     MATH201ProposedPlanJuly2021element.classList.remove("Math");
     MATH201ProposedPlanJuly2021element.classList.add("Math-highlighted");
     that.addToClicked(["MATH201ProposedPlanJuly2021", "Math"]);
      MATH201ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine47());
      that.removeLine(getLine48());
      that.removeLine(getLine74());
     MATH201ProposedPlanJuly2021element.classList.remove("Math-highlighted");
     MATH201ProposedPlanJuly2021element.classList.add("Math");
     that.removeFromClicked("MATH201ProposedPlanJuly2021");
      MATH201ProposedPlanJuly2021flag=false
  }
};
$scope.MATH209ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH209ProposedPlanJuly2021Time <= 200) { 
        MATH209ProposedPlanJuly2021Time = currentTime;
        return;
    }
MATH209ProposedPlanJuly2021Time = currentTime;
  var MATH209ProposedPlanJuly2021element = document.getElementById("MATH209ProposedPlanJuly2021");
 if (!MATH209ProposedPlanJuly2021flag) {
     if (MATH209ProposedPlanJuly2021element.classList.contains("Math-highlighted")) { 
     MATH209ProposedPlanJuly2021element.classList.remove("Math-highlighted");
     MATH209ProposedPlanJuly2021element.classList.add("Math");
      return;
}      that.addLine(getLine48());
      that.addLine(getLine49());
      that.addLine(getLine50());
      that.addLine(getLine66());
     MATH209ProposedPlanJuly2021element.classList.remove("Math");
     MATH209ProposedPlanJuly2021element.classList.add("Math-highlighted");
     that.addToClicked(["MATH209ProposedPlanJuly2021", "Math"]);
      MATH209ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine48());
      that.removeLine(getLine49());
      that.removeLine(getLine50());
      that.removeLine(getLine66());
     MATH209ProposedPlanJuly2021element.classList.remove("Math-highlighted");
     MATH209ProposedPlanJuly2021element.classList.add("Math");
     that.removeFromClicked("MATH209ProposedPlanJuly2021");
      MATH209ProposedPlanJuly2021flag=false
  }
};
$scope.MCTR202ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR202ProposedPlanJuly2021Time <= 200) { 
        MCTR202ProposedPlanJuly2021Time = currentTime;
        return;
    }
MCTR202ProposedPlanJuly2021Time = currentTime;
  var MCTR202ProposedPlanJuly2021element = document.getElementById("MCTR202ProposedPlanJuly2021");
 if (!MCTR202ProposedPlanJuly2021flag) {
     if (MCTR202ProposedPlanJuly2021element.classList.contains("Mechatronics-highlighted")) { 
     MCTR202ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
     MCTR202ProposedPlanJuly2021element.classList.add("Mechatronics");
      return;
}      that.addLine(getLine46());
      that.addLine(getLine51());
      that.addLine(getLine52());
      that.addLine(getLine53());
      that.addLine(getLine64());
      that.addLine(getLine76());
      that.addLine(getLine78());
     MCTR202ProposedPlanJuly2021element.classList.remove("Mechatronics");
     MCTR202ProposedPlanJuly2021element.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR202ProposedPlanJuly2021", "Mechatronics"]);
      MCTR202ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine46());
      that.removeLine(getLine51());
      that.removeLine(getLine52());
      that.removeLine(getLine53());
      that.removeLine(getLine64());
      that.removeLine(getLine76());
      that.removeLine(getLine78());
     MCTR202ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
     MCTR202ProposedPlanJuly2021element.classList.add("Mechatronics");
     that.removeFromClicked("MCTR202ProposedPlanJuly2021");
      MCTR202ProposedPlanJuly2021flag=false
  }
};
$scope.ENGG299ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG299ProposedPlanJuly2021Time <= 200) { 
        ENGG299ProposedPlanJuly2021Time = currentTime;
        return;
    }
ENGG299ProposedPlanJuly2021Time = currentTime;
  var ENGG299ProposedPlanJuly2021element = document.getElementById("ENGG299ProposedPlanJuly2021");
 if (!ENGG299ProposedPlanJuly2021flag) {
     if (ENGG299ProposedPlanJuly2021element.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG299ProposedPlanJuly2021element.classList.remove("EngineeringProfession-highlighted");
     ENGG299ProposedPlanJuly2021element.classList.add("EngineeringProfession");
      return;
}     ENGG299ProposedPlanJuly2021element.classList.remove("EngineeringProfession");
     ENGG299ProposedPlanJuly2021element.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG299ProposedPlanJuly2021", "EngineeringProfession"]);
      ENGG299ProposedPlanJuly2021flag=true
  }
 else {
     ENGG299ProposedPlanJuly2021element.classList.remove("EngineeringProfession-highlighted");
     ENGG299ProposedPlanJuly2021element.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG299ProposedPlanJuly2021");
      ENGG299ProposedPlanJuly2021flag=false
  }
};
$scope.CHE243ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE243ProposedPlanJuly2021Time <= 200) { 
        CHE243ProposedPlanJuly2021Time = currentTime;
        return;
    }
CHE243ProposedPlanJuly2021Time = currentTime;
  var CHE243ProposedPlanJuly2021element = document.getElementById("CHE243ProposedPlanJuly2021");
 if (!CHE243ProposedPlanJuly2021flag) {
     if (CHE243ProposedPlanJuly2021element.classList.contains("EngineeringSciences-highlighted")) { 
     CHE243ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
     CHE243ProposedPlanJuly2021element.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine54());
     CHE243ProposedPlanJuly2021element.classList.remove("EngineeringSciences");
     CHE243ProposedPlanJuly2021element.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["CHE243ProposedPlanJuly2021", "EngineeringSciences"]);
      CHE243ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine54());
     CHE243ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
     CHE243ProposedPlanJuly2021element.classList.add("EngineeringSciences");
     that.removeFromClicked("CHE243ProposedPlanJuly2021");
      CHE243ProposedPlanJuly2021flag=false
  }
};
$scope.MCTR200ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR200ProposedPlanJuly2021Time <= 200) { 
        MCTR200ProposedPlanJuly2021Time = currentTime;
        return;
    }
MCTR200ProposedPlanJuly2021Time = currentTime;
  var MCTR200ProposedPlanJuly2021element = document.getElementById("MCTR200ProposedPlanJuly2021");
 if (!MCTR200ProposedPlanJuly2021flag) {
     if (MCTR200ProposedPlanJuly2021element.classList.contains("Mechatronics-highlighted")) { 
     MCTR200ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
     MCTR200ProposedPlanJuly2021element.classList.add("Mechatronics");
      return;
}     MCTR200ProposedPlanJuly2021element.classList.remove("Mechatronics");
     MCTR200ProposedPlanJuly2021element.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR200ProposedPlanJuly2021", "Mechatronics"]);
      MCTR200ProposedPlanJuly2021flag=true
  }
 else {
     MCTR200ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
     MCTR200ProposedPlanJuly2021element.classList.add("Mechatronics");
     that.removeFromClicked("MCTR200ProposedPlanJuly2021");
      MCTR200ProposedPlanJuly2021flag=false
  }
};
$scope.MCTR274ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR274ProposedPlanJuly2021Time <= 200) { 
        MCTR274ProposedPlanJuly2021Time = currentTime;
        return;
    }
MCTR274ProposedPlanJuly2021Time = currentTime;
  var MCTR274ProposedPlanJuly2021element = document.getElementById("MCTR274ProposedPlanJuly2021");
 if (!MCTR274ProposedPlanJuly2021flag) {
     if (MCTR274ProposedPlanJuly2021element.classList.contains("Mechatronics-highlighted")) { 
     MCTR274ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
     MCTR274ProposedPlanJuly2021element.classList.add("Mechatronics");
      return;
}      that.addLine(getLine55());
      that.addLine(getLine67());
      that.addLine(getLine80());
     MCTR274ProposedPlanJuly2021element.classList.remove("Mechatronics");
     MCTR274ProposedPlanJuly2021element.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR274ProposedPlanJuly2021", "Mechatronics"]);
      MCTR274ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine55());
      that.removeLine(getLine67());
      that.removeLine(getLine80());
     MCTR274ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
     MCTR274ProposedPlanJuly2021element.classList.add("Mechatronics");
     that.removeFromClicked("MCTR274ProposedPlanJuly2021");
      MCTR274ProposedPlanJuly2021flag=false
  }
};
$scope.MECE230ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE230ProposedPlanJuly2021Time <= 200) { 
        MECE230ProposedPlanJuly2021Time = currentTime;
        return;
    }
MECE230ProposedPlanJuly2021Time = currentTime;
  var MECE230ProposedPlanJuly2021element = document.getElementById("MECE230ProposedPlanJuly2021");
 if (!MECE230ProposedPlanJuly2021flag) {
     if (MECE230ProposedPlanJuly2021element.classList.contains("NaturalSciences-highlighted")) { 
     MECE230ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
     MECE230ProposedPlanJuly2021element.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine56());
      that.addLine(getLine57());
     MECE230ProposedPlanJuly2021element.classList.remove("NaturalSciences");
     MECE230ProposedPlanJuly2021element.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["MECE230ProposedPlanJuly2021", "NaturalSciences"]);
      MECE230ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine56());
      that.removeLine(getLine57());
     MECE230ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
     MECE230ProposedPlanJuly2021element.classList.add("NaturalSciences");
     that.removeFromClicked("MECE230ProposedPlanJuly2021");
      MECE230ProposedPlanJuly2021flag=false
  }
};
$scope.MECE250ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE250ProposedPlanJuly2021Time <= 200) { 
        MECE250ProposedPlanJuly2021Time = currentTime;
        return;
    }
MECE250ProposedPlanJuly2021Time = currentTime;
  var MECE250ProposedPlanJuly2021element = document.getElementById("MECE250ProposedPlanJuly2021");
 if (!MECE250ProposedPlanJuly2021flag) {
     if (MECE250ProposedPlanJuly2021element.classList.contains("EngineeringSciences-highlighted")) { 
     MECE250ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
     MECE250ProposedPlanJuly2021element.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine58());
      that.addLine(getLine59());
      that.addLine(getLine60());
      that.addLine(getLine68());
     MECE250ProposedPlanJuly2021element.classList.remove("EngineeringSciences");
     MECE250ProposedPlanJuly2021element.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["MECE250ProposedPlanJuly2021", "EngineeringSciences"]);
      MECE250ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine58());
      that.removeLine(getLine59());
      that.removeLine(getLine60());
      that.removeLine(getLine68());
     MECE250ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
     MECE250ProposedPlanJuly2021element.classList.add("EngineeringSciences");
     that.removeFromClicked("MECE250ProposedPlanJuly2021");
      MECE250ProposedPlanJuly2021flag=false
  }
};
$scope.MECE260ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE260ProposedPlanJuly2021Time <= 200) { 
        MECE260ProposedPlanJuly2021Time = currentTime;
        return;
    }
MECE260ProposedPlanJuly2021Time = currentTime;
  var MECE260ProposedPlanJuly2021element = document.getElementById("MECE260ProposedPlanJuly2021");
 if (!MECE260ProposedPlanJuly2021flag) {
     if (MECE260ProposedPlanJuly2021element.classList.contains("EngineeringDesign-highlighted")) { 
     MECE260ProposedPlanJuly2021element.classList.remove("EngineeringDesign-highlighted");
     MECE260ProposedPlanJuly2021element.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine61());
      that.addLine(getLine62());
      that.addLine(getLine63());
      that.addLine(getLine69());
     MECE260ProposedPlanJuly2021element.classList.remove("EngineeringDesign");
     MECE260ProposedPlanJuly2021element.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["MECE260ProposedPlanJuly2021", "EngineeringDesign"]);
      MECE260ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine61());
      that.removeLine(getLine62());
      that.removeLine(getLine63());
      that.removeLine(getLine69());
     MECE260ProposedPlanJuly2021element.classList.remove("EngineeringDesign-highlighted");
     MECE260ProposedPlanJuly2021element.classList.add("EngineeringDesign");
     that.removeFromClicked("MECE260ProposedPlanJuly2021");
      MECE260ProposedPlanJuly2021flag=false
  }
};
$scope.MECE265ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE265ProposedPlanJuly2021Time <= 200) { 
        MECE265ProposedPlanJuly2021Time = currentTime;
        return;
    }
MECE265ProposedPlanJuly2021Time = currentTime;
  var MECE265ProposedPlanJuly2021element = document.getElementById("MECE265ProposedPlanJuly2021");
 if (!MECE265ProposedPlanJuly2021flag) {
     if (MECE265ProposedPlanJuly2021element.classList.contains("EngineeringDesign-highlighted")) { 
     MECE265ProposedPlanJuly2021element.classList.remove("EngineeringDesign-highlighted");
     MECE265ProposedPlanJuly2021element.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine62());
      that.addLine(getLine70());
     MECE265ProposedPlanJuly2021element.classList.remove("EngineeringDesign");
     MECE265ProposedPlanJuly2021element.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["MECE265ProposedPlanJuly2021", "EngineeringDesign"]);
      MECE265ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine62());
      that.removeLine(getLine70());
     MECE265ProposedPlanJuly2021element.classList.remove("EngineeringDesign-highlighted");
     MECE265ProposedPlanJuly2021element.classList.add("EngineeringDesign");
     that.removeFromClicked("MECE265ProposedPlanJuly2021");
      MECE265ProposedPlanJuly2021flag=false
  }
};
$scope.ECE315ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE315ProposedPlanJuly2021Time <= 200) { 
        ECE315ProposedPlanJuly2021Time = currentTime;
        return;
    }
ECE315ProposedPlanJuly2021Time = currentTime;
  var ECE315ProposedPlanJuly2021element = document.getElementById("ECE315ProposedPlanJuly2021");
 if (!ECE315ProposedPlanJuly2021flag) {
     if (ECE315ProposedPlanJuly2021element.classList.contains("EngineeringSciences-highlighted")) { 
     ECE315ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
     ECE315ProposedPlanJuly2021element.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine64());
      that.addLine(getLine65());
     ECE315ProposedPlanJuly2021element.classList.remove("EngineeringSciences");
     ECE315ProposedPlanJuly2021element.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["ECE315ProposedPlanJuly2021", "EngineeringSciences"]);
      ECE315ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine64());
      that.removeLine(getLine65());
     ECE315ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
     ECE315ProposedPlanJuly2021element.classList.add("EngineeringSciences");
     that.removeFromClicked("ECE315ProposedPlanJuly2021");
      ECE315ProposedPlanJuly2021flag=false
  }
};
$scope.ECE342ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE342ProposedPlanJuly2021Time <= 200) { 
        ECE342ProposedPlanJuly2021Time = currentTime;
        return;
    }
ECE342ProposedPlanJuly2021Time = currentTime;
  var ECE342ProposedPlanJuly2021element = document.getElementById("ECE342ProposedPlanJuly2021");
 if (!ECE342ProposedPlanJuly2021flag) {
     if (ECE342ProposedPlanJuly2021element.classList.contains("Math-highlighted")) { 
     ECE342ProposedPlanJuly2021element.classList.remove("Math-highlighted");
     ECE342ProposedPlanJuly2021element.classList.add("Math");
      return;
}      that.addLine(getLine66());
      that.addLine(getLine77());
      that.addLine(getLine82());
     ECE342ProposedPlanJuly2021element.classList.remove("Math");
     ECE342ProposedPlanJuly2021element.classList.add("Math-highlighted");
     that.addToClicked(["ECE342ProposedPlanJuly2021", "Math"]);
      ECE342ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine66());
      that.removeLine(getLine77());
      that.removeLine(getLine82());
     ECE342ProposedPlanJuly2021element.classList.remove("Math-highlighted");
     ECE342ProposedPlanJuly2021element.classList.add("Math");
     that.removeFromClicked("ECE342ProposedPlanJuly2021");
      ECE342ProposedPlanJuly2021flag=false
  }
};
$scope.MCTR374ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR374ProposedPlanJuly2021Time <= 200) { 
        MCTR374ProposedPlanJuly2021Time = currentTime;
        return;
    }
MCTR374ProposedPlanJuly2021Time = currentTime;
  var MCTR374ProposedPlanJuly2021element = document.getElementById("MCTR374ProposedPlanJuly2021");
 if (!MCTR374ProposedPlanJuly2021flag) {
     if (MCTR374ProposedPlanJuly2021element.classList.contains("Mechatronics-highlighted")) { 
     MCTR374ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
     MCTR374ProposedPlanJuly2021element.classList.add("Mechatronics");
      return;
}      that.addLine(getLine65());
      that.addLine(getLine67());
      that.addLine(getLine92());
     MCTR374ProposedPlanJuly2021element.classList.remove("Mechatronics");
     MCTR374ProposedPlanJuly2021element.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR374ProposedPlanJuly2021", "Mechatronics"]);
      MCTR374ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine65());
      that.removeLine(getLine67());
      that.removeLine(getLine92());
     MCTR374ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
     MCTR374ProposedPlanJuly2021element.classList.add("Mechatronics");
     that.removeFromClicked("MCTR374ProposedPlanJuly2021");
      MCTR374ProposedPlanJuly2021flag=false
  }
};
$scope.MECE350ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE350ProposedPlanJuly2021Time <= 200) { 
        MECE350ProposedPlanJuly2021Time = currentTime;
        return;
    }
MECE350ProposedPlanJuly2021Time = currentTime;
  var MECE350ProposedPlanJuly2021element = document.getElementById("MECE350ProposedPlanJuly2021");
 if (!MECE350ProposedPlanJuly2021flag) {
     if (MECE350ProposedPlanJuly2021element.classList.contains("EngineeringSciences-highlighted")) { 
     MECE350ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
     MECE350ProposedPlanJuly2021element.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine68());
      that.addLine(getLine72());
     MECE350ProposedPlanJuly2021element.classList.remove("EngineeringSciences");
     MECE350ProposedPlanJuly2021element.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["MECE350ProposedPlanJuly2021", "EngineeringSciences"]);
      MECE350ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine68());
      that.removeLine(getLine72());
     MECE350ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
     MECE350ProposedPlanJuly2021element.classList.add("EngineeringSciences");
     that.removeFromClicked("MECE350ProposedPlanJuly2021");
      MECE350ProposedPlanJuly2021flag=false
  }
};
$scope.MECE360ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE360ProposedPlanJuly2021Time <= 200) { 
        MECE360ProposedPlanJuly2021Time = currentTime;
        return;
    }
MECE360ProposedPlanJuly2021Time = currentTime;
  var MECE360ProposedPlanJuly2021element = document.getElementById("MECE360ProposedPlanJuly2021");
 if (!MECE360ProposedPlanJuly2021flag) {
     if (MECE360ProposedPlanJuly2021element.classList.contains("EngineeringDesign-highlighted")) { 
     MECE360ProposedPlanJuly2021element.classList.remove("EngineeringDesign-highlighted");
     MECE360ProposedPlanJuly2021element.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine69());
      that.addLine(getLine70());
      that.addLine(getLine71());
      that.addLine(getLine72());
      that.addLine(getLine79());
      that.addLine(getLine87());
      that.addLine(getLine96());
     MECE360ProposedPlanJuly2021element.classList.remove("EngineeringDesign");
     MECE360ProposedPlanJuly2021element.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["MECE360ProposedPlanJuly2021", "EngineeringDesign"]);
      MECE360ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine69());
      that.removeLine(getLine70());
      that.removeLine(getLine71());
      that.removeLine(getLine72());
      that.removeLine(getLine79());
      that.removeLine(getLine87());
      that.removeLine(getLine96());
     MECE360ProposedPlanJuly2021element.classList.remove("EngineeringDesign-highlighted");
     MECE360ProposedPlanJuly2021element.classList.add("EngineeringDesign");
     that.removeFromClicked("MECE360ProposedPlanJuly2021");
      MECE360ProposedPlanJuly2021flag=false
  }
};
$scope.MECE390ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE390ProposedPlanJuly2021Time <= 200) { 
        MECE390ProposedPlanJuly2021Time = currentTime;
        return;
    }
MECE390ProposedPlanJuly2021Time = currentTime;
  var MECE390ProposedPlanJuly2021element = document.getElementById("MECE390ProposedPlanJuly2021");
 if (!MECE390ProposedPlanJuly2021flag) {
     if (MECE390ProposedPlanJuly2021element.classList.contains("Math-highlighted")) { 
     MECE390ProposedPlanJuly2021element.classList.remove("Math-highlighted");
     MECE390ProposedPlanJuly2021element.classList.add("Math");
      return;
}      that.addLine(getLine73());
      that.addLine(getLine74());
      that.addLine(getLine83());
      that.addLine(getLine84());
      that.addLine(getLine97());
     MECE390ProposedPlanJuly2021element.classList.remove("Math");
     MECE390ProposedPlanJuly2021element.classList.add("Math-highlighted");
     that.addToClicked(["MECE390ProposedPlanJuly2021", "Math"]);
      MECE390ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine73());
      that.removeLine(getLine74());
      that.removeLine(getLine83());
      that.removeLine(getLine84());
      that.removeLine(getLine97());
     MECE390ProposedPlanJuly2021element.classList.remove("Math-highlighted");
     MECE390ProposedPlanJuly2021element.classList.add("Math");
     that.removeFromClicked("MECE390ProposedPlanJuly2021");
      MECE390ProposedPlanJuly2021flag=false
  }
};
$scope.ENGM401ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM401ProposedPlanJuly2021Time <= 200) { 
        ENGM401ProposedPlanJuly2021Time = currentTime;
        return;
    }
ENGM401ProposedPlanJuly2021Time = currentTime;
  var ENGM401ProposedPlanJuly2021element = document.getElementById("ENGM401ProposedPlanJuly2021");
 if (!ENGM401ProposedPlanJuly2021flag) {
     if (ENGM401ProposedPlanJuly2021element.classList.contains("Other-highlighted")) { 
     ENGM401ProposedPlanJuly2021element.classList.remove("Other-highlighted");
     ENGM401ProposedPlanJuly2021element.classList.add("Other");
      return;
}      that.addLine(getLine89());
     ENGM401ProposedPlanJuly2021element.classList.remove("Other");
     ENGM401ProposedPlanJuly2021element.classList.add("Other-highlighted");
     that.addToClicked(["ENGM401ProposedPlanJuly2021", "Other"]);
      ENGM401ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine89());
     ENGM401ProposedPlanJuly2021element.classList.remove("Other-highlighted");
     ENGM401ProposedPlanJuly2021element.classList.add("Other");
     that.removeFromClicked("ENGM401ProposedPlanJuly2021");
      ENGM401ProposedPlanJuly2021flag=false
  }
};
$scope.MCTR300ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR300ProposedPlanJuly2021Time <= 200) { 
        MCTR300ProposedPlanJuly2021Time = currentTime;
        return;
    }
MCTR300ProposedPlanJuly2021Time = currentTime;
  var MCTR300ProposedPlanJuly2021element = document.getElementById("MCTR300ProposedPlanJuly2021");
 if (!MCTR300ProposedPlanJuly2021flag) {
     if (MCTR300ProposedPlanJuly2021element.classList.contains("Mechatronics-highlighted")) { 
     MCTR300ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
     MCTR300ProposedPlanJuly2021element.classList.add("Mechatronics");
      return;
}      that.addLine(getLine75());
      that.addLine(getLine76());
      that.addLine(getLine77());
      that.addLine(getLine98());
     MCTR300ProposedPlanJuly2021element.classList.remove("Mechatronics");
     MCTR300ProposedPlanJuly2021element.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR300ProposedPlanJuly2021", "Mechatronics"]);
      MCTR300ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine75());
      that.removeLine(getLine76());
      that.removeLine(getLine77());
      that.removeLine(getLine98());
     MCTR300ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
     MCTR300ProposedPlanJuly2021element.classList.add("Mechatronics");
     that.removeFromClicked("MCTR300ProposedPlanJuly2021");
      MCTR300ProposedPlanJuly2021flag=false
  }
};
$scope.MCTR332ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR332ProposedPlanJuly2021Time <= 200) { 
        MCTR332ProposedPlanJuly2021Time = currentTime;
        return;
    }
MCTR332ProposedPlanJuly2021Time = currentTime;
  var MCTR332ProposedPlanJuly2021element = document.getElementById("MCTR332ProposedPlanJuly2021");
 if (!MCTR332ProposedPlanJuly2021flag) {
     if (MCTR332ProposedPlanJuly2021element.classList.contains("Mechatronics-highlighted")) { 
     MCTR332ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
     MCTR332ProposedPlanJuly2021element.classList.add("Mechatronics");
      return;
}      that.addLine(getLine78());
     MCTR332ProposedPlanJuly2021element.classList.remove("Mechatronics");
     MCTR332ProposedPlanJuly2021element.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR332ProposedPlanJuly2021", "Mechatronics"]);
      MCTR332ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine78());
     MCTR332ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
     MCTR332ProposedPlanJuly2021element.classList.add("Mechatronics");
     that.removeFromClicked("MCTR332ProposedPlanJuly2021");
      MCTR332ProposedPlanJuly2021flag=false
  }
};
$scope.MCTR365ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR365ProposedPlanJuly2021Time <= 200) { 
        MCTR365ProposedPlanJuly2021Time = currentTime;
        return;
    }
MCTR365ProposedPlanJuly2021Time = currentTime;
  var MCTR365ProposedPlanJuly2021element = document.getElementById("MCTR365ProposedPlanJuly2021");
 if (!MCTR365ProposedPlanJuly2021flag) {
     if (MCTR365ProposedPlanJuly2021element.classList.contains("Mechatronics-highlighted")) { 
     MCTR365ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
     MCTR365ProposedPlanJuly2021element.classList.add("Mechatronics");
      return;
}      that.addLine(getLine79());
      that.addLine(getLine80());
      that.addLine(getLine81());
      that.addLine(getLine88());
     MCTR365ProposedPlanJuly2021element.classList.remove("Mechatronics");
     MCTR365ProposedPlanJuly2021element.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR365ProposedPlanJuly2021", "Mechatronics"]);
      MCTR365ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine79());
      that.removeLine(getLine80());
      that.removeLine(getLine81());
      that.removeLine(getLine88());
     MCTR365ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
     MCTR365ProposedPlanJuly2021element.classList.add("Mechatronics");
     that.removeFromClicked("MCTR365ProposedPlanJuly2021");
      MCTR365ProposedPlanJuly2021flag=false
  }
};
$scope.MCTR370ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR370ProposedPlanJuly2021Time <= 200) { 
        MCTR370ProposedPlanJuly2021Time = currentTime;
        return;
    }
MCTR370ProposedPlanJuly2021Time = currentTime;
  var MCTR370ProposedPlanJuly2021element = document.getElementById("MCTR370ProposedPlanJuly2021");
 if (!MCTR370ProposedPlanJuly2021flag) {
     if (MCTR370ProposedPlanJuly2021element.classList.contains("Mechatronics-highlighted")) { 
     MCTR370ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
     MCTR370ProposedPlanJuly2021element.classList.add("Mechatronics");
      return;
}      that.addLine(getLine82());
      that.addLine(getLine83());
     MCTR370ProposedPlanJuly2021element.classList.remove("Mechatronics");
     MCTR370ProposedPlanJuly2021element.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR370ProposedPlanJuly2021", "Mechatronics"]);
      MCTR370ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine82());
      that.removeLine(getLine83());
     MCTR370ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
     MCTR370ProposedPlanJuly2021element.classList.add("Mechatronics");
     that.removeFromClicked("MCTR370ProposedPlanJuly2021");
      MCTR370ProposedPlanJuly2021flag=false
  }
};
$scope.MECE420ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE420ProposedPlanJuly2021Time <= 200) { 
        MECE420ProposedPlanJuly2021Time = currentTime;
        return;
    }
MECE420ProposedPlanJuly2021Time = currentTime;
  var MECE420ProposedPlanJuly2021element = document.getElementById("MECE420ProposedPlanJuly2021");
 if (!MECE420ProposedPlanJuly2021flag) {
     if (MECE420ProposedPlanJuly2021element.classList.contains("EngineeringSciences-highlighted")) { 
     MECE420ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
     MECE420ProposedPlanJuly2021element.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine81());
      that.addLine(getLine84());
      that.addLine(getLine86());
      that.addLine(getLine90());
      that.addLine(getLine93());
     MECE420ProposedPlanJuly2021element.classList.remove("EngineeringSciences");
     MECE420ProposedPlanJuly2021element.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["MECE420ProposedPlanJuly2021", "EngineeringSciences"]);
      MECE420ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine81());
      that.removeLine(getLine84());
      that.removeLine(getLine86());
      that.removeLine(getLine90());
      that.removeLine(getLine93());
     MECE420ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
     MECE420ProposedPlanJuly2021element.classList.add("EngineeringSciences");
     that.removeFromClicked("MECE420ProposedPlanJuly2021");
      MECE420ProposedPlanJuly2021flag=false
  }
};
$scope.ComplementaryElectiveProposedPlanJuly20210Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveProposedPlanJuly20210Time <= 200) { 
        ComplementaryElectiveProposedPlanJuly20210Time = currentTime;
        return;
    }
ComplementaryElectiveProposedPlanJuly20210Time = currentTime;
  var ComplementaryElectiveProposedPlanJuly20210element = document.getElementById("ComplementaryElectiveProposedPlanJuly20210");
 if (!ComplementaryElectiveProposedPlanJuly20210flag) {
     if (ComplementaryElectiveProposedPlanJuly20210element.classList.contains("COMP-highlighted")) { 
     ComplementaryElectiveProposedPlanJuly20210element.classList.remove("COMP-highlighted");
     ComplementaryElectiveProposedPlanJuly20210element.classList.add("COMP");
      return;
}     ComplementaryElectiveProposedPlanJuly20210element.classList.remove("COMP");
     ComplementaryElectiveProposedPlanJuly20210element.classList.add("COMP-highlighted");
     that.addToClicked(["ComplementaryElectiveProposedPlanJuly20210", "COMP"]);
      ComplementaryElectiveProposedPlanJuly20210flag=true
  }
 else {
     ComplementaryElectiveProposedPlanJuly20210element.classList.remove("COMP-highlighted");
     ComplementaryElectiveProposedPlanJuly20210element.classList.add("COMP");
     that.removeFromClicked("ComplementaryElectiveProposedPlanJuly20210");
      ComplementaryElectiveProposedPlanJuly20210flag=false
  }
};
$scope.ENGG404ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG404ProposedPlanJuly2021Time <= 200) { 
        ENGG404ProposedPlanJuly2021Time = currentTime;
        return;
    }
ENGG404ProposedPlanJuly2021Time = currentTime;
  var ENGG404ProposedPlanJuly2021element = document.getElementById("ENGG404ProposedPlanJuly2021");
 if (!ENGG404ProposedPlanJuly2021flag) {
     if (ENGG404ProposedPlanJuly2021element.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG404ProposedPlanJuly2021element.classList.remove("EngineeringProfession-highlighted");
     ENGG404ProposedPlanJuly2021element.classList.add("EngineeringProfession");
      return;
}     ENGG404ProposedPlanJuly2021element.classList.remove("EngineeringProfession");
     ENGG404ProposedPlanJuly2021element.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG404ProposedPlanJuly2021", "EngineeringProfession"]);
      ENGG404ProposedPlanJuly2021flag=true
  }
 else {
     ENGG404ProposedPlanJuly2021element.classList.remove("EngineeringProfession-highlighted");
     ENGG404ProposedPlanJuly2021element.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG404ProposedPlanJuly2021");
      ENGG404ProposedPlanJuly2021flag=false
  }
};
$scope.ITSElectiveProposedPlanJuly20210Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ITSElectiveProposedPlanJuly20210Time <= 200) { 
        ITSElectiveProposedPlanJuly20210Time = currentTime;
        return;
    }
ITSElectiveProposedPlanJuly20210Time = currentTime;
  var ITSElectiveProposedPlanJuly20210element = document.getElementById("ITSElectiveProposedPlanJuly20210");
 if (!ITSElectiveProposedPlanJuly20210flag) {
     if (ITSElectiveProposedPlanJuly20210element.classList.contains("ITS-highlighted")) { 
     ITSElectiveProposedPlanJuly20210element.classList.remove("ITS-highlighted");
     ITSElectiveProposedPlanJuly20210element.classList.add("ITS");
      return;
}     ITSElectiveProposedPlanJuly20210element.classList.remove("ITS");
     ITSElectiveProposedPlanJuly20210element.classList.add("ITS-highlighted");
     that.addToClicked(["ITSElectiveProposedPlanJuly20210", "ITS"]);
      ITSElectiveProposedPlanJuly20210flag=true
  }
 else {
     ITSElectiveProposedPlanJuly20210element.classList.remove("ITS-highlighted");
     ITSElectiveProposedPlanJuly20210element.classList.add("ITS");
     that.removeFromClicked("ITSElectiveProposedPlanJuly20210");
      ITSElectiveProposedPlanJuly20210flag=false
  }
};
$scope.MATE201ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE201ProposedPlanJuly2021Time <= 200) { 
        MATE201ProposedPlanJuly2021Time = currentTime;
        return;
    }
MATE201ProposedPlanJuly2021Time = currentTime;
  var MATE201ProposedPlanJuly2021element = document.getElementById("MATE201ProposedPlanJuly2021");
 if (!MATE201ProposedPlanJuly2021flag) {
     if (MATE201ProposedPlanJuly2021element.classList.contains("NaturalSciences-highlighted")) { 
     MATE201ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
     MATE201ProposedPlanJuly2021element.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine85());
     MATE201ProposedPlanJuly2021element.classList.remove("NaturalSciences");
     MATE201ProposedPlanJuly2021element.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["MATE201ProposedPlanJuly2021", "NaturalSciences"]);
      MATE201ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine85());
     MATE201ProposedPlanJuly2021element.classList.remove("NaturalSciences-highlighted");
     MATE201ProposedPlanJuly2021element.classList.add("NaturalSciences");
     that.removeFromClicked("MATE201ProposedPlanJuly2021");
      MATE201ProposedPlanJuly2021flag=false
  }
};
$scope.MCTR460ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR460ProposedPlanJuly2021Time <= 200) { 
        MCTR460ProposedPlanJuly2021Time = currentTime;
        return;
    }
MCTR460ProposedPlanJuly2021Time = currentTime;
  var MCTR460ProposedPlanJuly2021element = document.getElementById("MCTR460ProposedPlanJuly2021");
 if (!MCTR460ProposedPlanJuly2021flag) {
     if (MCTR460ProposedPlanJuly2021element.classList.contains("Mechatronics-highlighted")) { 
     MCTR460ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
     MCTR460ProposedPlanJuly2021element.classList.add("Mechatronics");
      return;
}      that.addLine(getLine86());
      that.addLine(getLine91());
     MCTR460ProposedPlanJuly2021element.classList.remove("Mechatronics");
     MCTR460ProposedPlanJuly2021element.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR460ProposedPlanJuly2021", "Mechatronics"]);
      MCTR460ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine86());
      that.removeLine(getLine91());
     MCTR460ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
     MCTR460ProposedPlanJuly2021element.classList.add("Mechatronics");
     that.removeFromClicked("MCTR460ProposedPlanJuly2021");
      MCTR460ProposedPlanJuly2021flag=false
  }
};
$scope.MECE460ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE460ProposedPlanJuly2021Time <= 200) { 
        MECE460ProposedPlanJuly2021Time = currentTime;
        return;
    }
MECE460ProposedPlanJuly2021Time = currentTime;
  var MECE460ProposedPlanJuly2021element = document.getElementById("MECE460ProposedPlanJuly2021");
 if (!MECE460ProposedPlanJuly2021flag) {
     if (MECE460ProposedPlanJuly2021element.classList.contains("EngineeringDesign-highlighted")) { 
     MECE460ProposedPlanJuly2021element.classList.remove("EngineeringDesign-highlighted");
     MECE460ProposedPlanJuly2021element.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine87());
      that.addLine(getLine88());
      that.addLine(getLine89());
      that.addLine(getLine95());
     MECE460ProposedPlanJuly2021element.classList.remove("EngineeringDesign");
     MECE460ProposedPlanJuly2021element.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["MECE460ProposedPlanJuly2021", "EngineeringDesign"]);
      MECE460ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine87());
      that.removeLine(getLine88());
      that.removeLine(getLine89());
      that.removeLine(getLine95());
     MECE460ProposedPlanJuly2021element.classList.remove("EngineeringDesign-highlighted");
     MECE460ProposedPlanJuly2021element.classList.add("EngineeringDesign");
     that.removeFromClicked("MECE460ProposedPlanJuly2021");
      MECE460ProposedPlanJuly2021flag=false
  }
};
$scope.ENGG400ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG400ProposedPlanJuly2021Time <= 200) { 
        ENGG400ProposedPlanJuly2021Time = currentTime;
        return;
    }
ENGG400ProposedPlanJuly2021Time = currentTime;
  var ENGG400ProposedPlanJuly2021element = document.getElementById("ENGG400ProposedPlanJuly2021");
 if (!ENGG400ProposedPlanJuly2021flag) {
     if (ENGG400ProposedPlanJuly2021element.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG400ProposedPlanJuly2021element.classList.remove("EngineeringProfession-highlighted");
     ENGG400ProposedPlanJuly2021element.classList.add("EngineeringProfession");
      return;
}     ENGG400ProposedPlanJuly2021element.classList.remove("EngineeringProfession");
     ENGG400ProposedPlanJuly2021element.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG400ProposedPlanJuly2021", "EngineeringProfession"]);
      ENGG400ProposedPlanJuly2021flag=true
  }
 else {
     ENGG400ProposedPlanJuly2021element.classList.remove("EngineeringProfession-highlighted");
     ENGG400ProposedPlanJuly2021element.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG400ProposedPlanJuly2021");
      ENGG400ProposedPlanJuly2021flag=false
  }
};
$scope.MCTR461ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR461ProposedPlanJuly2021Time <= 200) { 
        MCTR461ProposedPlanJuly2021Time = currentTime;
        return;
    }
MCTR461ProposedPlanJuly2021Time = currentTime;
  var MCTR461ProposedPlanJuly2021element = document.getElementById("MCTR461ProposedPlanJuly2021");
 if (!MCTR461ProposedPlanJuly2021flag) {
     if (MCTR461ProposedPlanJuly2021element.classList.contains("Mechatronics-highlighted")) { 
     MCTR461ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
     MCTR461ProposedPlanJuly2021element.classList.add("Mechatronics");
      return;
}      that.addLine(getLine90());
      that.addLine(getLine91());
      that.addLine(getLine94());
     MCTR461ProposedPlanJuly2021element.classList.remove("Mechatronics");
     MCTR461ProposedPlanJuly2021element.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR461ProposedPlanJuly2021", "Mechatronics"]);
      MCTR461ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine90());
      that.removeLine(getLine91());
      that.removeLine(getLine94());
     MCTR461ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
     MCTR461ProposedPlanJuly2021element.classList.add("Mechatronics");
     that.removeFromClicked("MCTR461ProposedPlanJuly2021");
      MCTR461ProposedPlanJuly2021flag=false
  }
};
$scope.MCTR465ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR465ProposedPlanJuly2021Time <= 200) { 
        MCTR465ProposedPlanJuly2021Time = currentTime;
        return;
    }
MCTR465ProposedPlanJuly2021Time = currentTime;
  var MCTR465ProposedPlanJuly2021element = document.getElementById("MCTR465ProposedPlanJuly2021");
 if (!MCTR465ProposedPlanJuly2021flag) {
     if (MCTR465ProposedPlanJuly2021element.classList.contains("Mechatronics-highlighted")) { 
     MCTR465ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
     MCTR465ProposedPlanJuly2021element.classList.add("Mechatronics");
      return;
}      that.addLine(getLine92());
      that.addLine(getLine93());
      that.addLine(getLine94());
     MCTR465ProposedPlanJuly2021element.classList.remove("Mechatronics");
     MCTR465ProposedPlanJuly2021element.classList.add("Mechatronics-highlighted");
     that.addToClicked(["MCTR465ProposedPlanJuly2021", "Mechatronics"]);
      MCTR465ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine92());
      that.removeLine(getLine93());
      that.removeLine(getLine94());
     MCTR465ProposedPlanJuly2021element.classList.remove("Mechatronics-highlighted");
     MCTR465ProposedPlanJuly2021element.classList.add("Mechatronics");
     that.removeFromClicked("MCTR465ProposedPlanJuly2021");
      MCTR465ProposedPlanJuly2021flag=false
  }
};
$scope.MECE461ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE461ProposedPlanJuly2021Time <= 200) { 
        MECE461ProposedPlanJuly2021Time = currentTime;
        return;
    }
MECE461ProposedPlanJuly2021Time = currentTime;
  var MECE461ProposedPlanJuly2021element = document.getElementById("MECE461ProposedPlanJuly2021");
 if (!MECE461ProposedPlanJuly2021flag) {
     if (MECE461ProposedPlanJuly2021element.classList.contains("EngineeringDesign-highlighted")) { 
     MECE461ProposedPlanJuly2021element.classList.remove("EngineeringDesign-highlighted");
     MECE461ProposedPlanJuly2021element.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine95());
     MECE461ProposedPlanJuly2021element.classList.remove("EngineeringDesign");
     MECE461ProposedPlanJuly2021element.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["MECE461ProposedPlanJuly2021", "EngineeringDesign"]);
      MECE461ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine95());
     MECE461ProposedPlanJuly2021element.classList.remove("EngineeringDesign-highlighted");
     MECE461ProposedPlanJuly2021element.classList.add("EngineeringDesign");
     that.removeFromClicked("MECE461ProposedPlanJuly2021");
      MECE461ProposedPlanJuly2021flag=false
  }
};
$scope.MECE465ProposedPlanJuly2021Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE465ProposedPlanJuly2021Time <= 200) { 
        MECE465ProposedPlanJuly2021Time = currentTime;
        return;
    }
MECE465ProposedPlanJuly2021Time = currentTime;
  var MECE465ProposedPlanJuly2021element = document.getElementById("MECE465ProposedPlanJuly2021");
 if (!MECE465ProposedPlanJuly2021flag) {
     if (MECE465ProposedPlanJuly2021element.classList.contains("EngineeringSciences-highlighted")) { 
     MECE465ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
     MECE465ProposedPlanJuly2021element.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine96());
      that.addLine(getLine97());
      that.addLine(getLine98());
     MECE465ProposedPlanJuly2021element.classList.remove("EngineeringSciences");
     MECE465ProposedPlanJuly2021element.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["MECE465ProposedPlanJuly2021", "EngineeringSciences"]);
      MECE465ProposedPlanJuly2021flag=true
  }
 else {
      that.removeLine(getLine96());
      that.removeLine(getLine97());
      that.removeLine(getLine98());
     MECE465ProposedPlanJuly2021element.classList.remove("EngineeringSciences-highlighted");
     MECE465ProposedPlanJuly2021element.classList.add("EngineeringSciences");
     that.removeFromClicked("MECE465ProposedPlanJuly2021");
      MECE465ProposedPlanJuly2021flag=false
  }
};
$scope.ProgramTechnicalElectiveProposedPlanJuly20210Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveProposedPlanJuly20210Time <= 200) { 
        ProgramTechnicalElectiveProposedPlanJuly20210Time = currentTime;
        return;
    }
ProgramTechnicalElectiveProposedPlanJuly20210Time = currentTime;
  var ProgramTechnicalElectiveProposedPlanJuly20210element = document.getElementById("ProgramTechnicalElectiveProposedPlanJuly20210");
 if (!ProgramTechnicalElectiveProposedPlanJuly20210flag) {
     if (ProgramTechnicalElectiveProposedPlanJuly20210element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveProposedPlanJuly20210element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveProposedPlanJuly20210element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveProposedPlanJuly20210element.classList.remove("PROG");
     ProgramTechnicalElectiveProposedPlanJuly20210element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveProposedPlanJuly20210", "PROG"]);
      ProgramTechnicalElectiveProposedPlanJuly20210flag=true
  }
 else {
     ProgramTechnicalElectiveProposedPlanJuly20210element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveProposedPlanJuly20210element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveProposedPlanJuly20210");
      ProgramTechnicalElectiveProposedPlanJuly20210flag=false
  }
};
$scope.ProgramTechnicalElectiveProposedPlanJuly20211Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveProposedPlanJuly20211Time <= 200) { 
        ProgramTechnicalElectiveProposedPlanJuly20211Time = currentTime;
        return;
    }
ProgramTechnicalElectiveProposedPlanJuly20211Time = currentTime;
  var ProgramTechnicalElectiveProposedPlanJuly20211element = document.getElementById("ProgramTechnicalElectiveProposedPlanJuly20211");
 if (!ProgramTechnicalElectiveProposedPlanJuly20211flag) {
     if (ProgramTechnicalElectiveProposedPlanJuly20211element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveProposedPlanJuly20211element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveProposedPlanJuly20211element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveProposedPlanJuly20211element.classList.remove("PROG");
     ProgramTechnicalElectiveProposedPlanJuly20211element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveProposedPlanJuly20211", "PROG"]);
      ProgramTechnicalElectiveProposedPlanJuly20211flag=true
  }
 else {
     ProgramTechnicalElectiveProposedPlanJuly20211element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveProposedPlanJuly20211element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveProposedPlanJuly20211");
      ProgramTechnicalElectiveProposedPlanJuly20211flag=false
  }
};
$scope.CHEM103ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("CHEM103ProposedPlanJuly2021desc");
 if (!CHEM103ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM103ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM103ProposedPlanJuly2021rflag=false
  }
};
$scope.ENGG100ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("ENGG100ProposedPlanJuly2021desc");
 if (!ENGG100ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG100ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG100ProposedPlanJuly2021rflag=false
  }
};
$scope.ENGG130ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("ENGG130ProposedPlanJuly2021desc");
 if (!ENGG130ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG130ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG130ProposedPlanJuly2021rflag=false
  }
};
$scope.ENGL199ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("ENGL199ProposedPlanJuly2021desc");
 if (!ENGL199ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGL199ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGL199ProposedPlanJuly2021rflag=false
  }
};
$scope.MATH100ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MATH100ProposedPlanJuly2021desc");
 if (!MATH100ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH100ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH100ProposedPlanJuly2021rflag=false
  }
};
$scope.PHYS130ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("PHYS130ProposedPlanJuly2021desc");
 if (!PHYS130ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS130ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS130ProposedPlanJuly2021rflag=false
  }
};
$scope.CHEM105ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("CHEM105ProposedPlanJuly2021desc");
 if (!CHEM105ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM105ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM105ProposedPlanJuly2021rflag=false
  }
};
$scope.ENCMP100ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("ENCMP100ProposedPlanJuly2021desc");
 if (!ENCMP100ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENCMP100ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENCMP100ProposedPlanJuly2021rflag=false
  }
};
$scope.ENGG160ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("ENGG160ProposedPlanJuly2021desc");
 if (!ENGG160ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG160ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG160ProposedPlanJuly2021rflag=false
  }
};
$scope.ENPH131ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("ENPH131ProposedPlanJuly2021desc");
 if (!ENPH131ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENPH131ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENPH131ProposedPlanJuly2021rflag=false
  }
};
$scope.MATH101ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MATH101ProposedPlanJuly2021desc");
 if (!MATH101ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH101ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH101ProposedPlanJuly2021rflag=false
  }
};
$scope.MATH102ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MATH102ProposedPlanJuly2021desc");
 if (!MATH102ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH102ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH102ProposedPlanJuly2021rflag=false
  }
};
$scope.CIVE270ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("CIVE270ProposedPlanJuly2021desc");
 if (!CIVE270ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE270ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE270ProposedPlanJuly2021rflag=false
  }
};
$scope.ECE210ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("ECE210ProposedPlanJuly2021desc");
 if (!ECE210ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE210ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE210ProposedPlanJuly2021rflag=false
  }
};
$scope.ECE240ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("ECE240ProposedPlanJuly2021desc");
 if (!ECE240ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE240ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE240ProposedPlanJuly2021rflag=false
  }
};
$scope.MATH201ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MATH201ProposedPlanJuly2021desc");
 if (!MATH201ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH201ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH201ProposedPlanJuly2021rflag=false
  }
};
$scope.MATH209ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MATH209ProposedPlanJuly2021desc");
 if (!MATH209ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH209ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH209ProposedPlanJuly2021rflag=false
  }
};
$scope.MCTR202ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MCTR202ProposedPlanJuly2021desc");
 if (!MCTR202ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR202ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR202ProposedPlanJuly2021rflag=false
  }
};
$scope.ENGG299ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("ENGG299ProposedPlanJuly2021desc");
 if (!ENGG299ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG299ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG299ProposedPlanJuly2021rflag=false
  }
};
$scope.CHE243ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("CHE243ProposedPlanJuly2021desc");
 if (!CHE243ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE243ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE243ProposedPlanJuly2021rflag=false
  }
};
$scope.MCTR200ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MCTR200ProposedPlanJuly2021desc");
 if (!MCTR200ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR200ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR200ProposedPlanJuly2021rflag=false
  }
};
$scope.MCTR274ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MCTR274ProposedPlanJuly2021desc");
 if (!MCTR274ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR274ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR274ProposedPlanJuly2021rflag=false
  }
};
$scope.MECE230ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MECE230ProposedPlanJuly2021desc");
 if (!MECE230ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE230ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE230ProposedPlanJuly2021rflag=false
  }
};
$scope.MECE250ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MECE250ProposedPlanJuly2021desc");
 if (!MECE250ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE250ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE250ProposedPlanJuly2021rflag=false
  }
};
$scope.MECE260ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MECE260ProposedPlanJuly2021desc");
 if (!MECE260ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE260ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE260ProposedPlanJuly2021rflag=false
  }
};
$scope.MECE265ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MECE265ProposedPlanJuly2021desc");
 if (!MECE265ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE265ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE265ProposedPlanJuly2021rflag=false
  }
};
$scope.ECE315ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("ECE315ProposedPlanJuly2021desc");
 if (!ECE315ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE315ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE315ProposedPlanJuly2021rflag=false
  }
};
$scope.ECE342ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("ECE342ProposedPlanJuly2021desc");
 if (!ECE342ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE342ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE342ProposedPlanJuly2021rflag=false
  }
};
$scope.MCTR374ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MCTR374ProposedPlanJuly2021desc");
 if (!MCTR374ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR374ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR374ProposedPlanJuly2021rflag=false
  }
};
$scope.MECE350ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MECE350ProposedPlanJuly2021desc");
 if (!MECE350ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE350ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE350ProposedPlanJuly2021rflag=false
  }
};
$scope.MECE360ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MECE360ProposedPlanJuly2021desc");
 if (!MECE360ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE360ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE360ProposedPlanJuly2021rflag=false
  }
};
$scope.MECE390ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MECE390ProposedPlanJuly2021desc");
 if (!MECE390ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE390ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE390ProposedPlanJuly2021rflag=false
  }
};
$scope.ENGM401ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("ENGM401ProposedPlanJuly2021desc");
 if (!ENGM401ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM401ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM401ProposedPlanJuly2021rflag=false
  }
};
$scope.MCTR300ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MCTR300ProposedPlanJuly2021desc");
 if (!MCTR300ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR300ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR300ProposedPlanJuly2021rflag=false
  }
};
$scope.MCTR332ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MCTR332ProposedPlanJuly2021desc");
 if (!MCTR332ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR332ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR332ProposedPlanJuly2021rflag=false
  }
};
$scope.MCTR365ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MCTR365ProposedPlanJuly2021desc");
 if (!MCTR365ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR365ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR365ProposedPlanJuly2021rflag=false
  }
};
$scope.MCTR370ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MCTR370ProposedPlanJuly2021desc");
 if (!MCTR370ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR370ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR370ProposedPlanJuly2021rflag=false
  }
};
$scope.MECE420ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MECE420ProposedPlanJuly2021desc");
 if (!MECE420ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE420ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE420ProposedPlanJuly2021rflag=false
  }
};
$scope.ComplementaryElectiveProposedPlanJuly20210RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveProposedPlanJuly20210desc");
 if (!ComplementaryElectiveProposedPlanJuly20210rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveProposedPlanJuly20210rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveProposedPlanJuly20210rflag=false
  }
};
$scope.ENGG404ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("ENGG404ProposedPlanJuly2021desc");
 if (!ENGG404ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG404ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG404ProposedPlanJuly2021rflag=false
  }
};
$scope.ITSElectiveProposedPlanJuly20210RCListener = function () {
  var element = document.getElementById("ITSElectiveProposedPlanJuly20210desc");
 if (!ITSElectiveProposedPlanJuly20210rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ITSElectiveProposedPlanJuly20210rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ITSElectiveProposedPlanJuly20210rflag=false
  }
};
$scope.MATE201ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MATE201ProposedPlanJuly2021desc");
 if (!MATE201ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE201ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE201ProposedPlanJuly2021rflag=false
  }
};
$scope.MCTR460ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MCTR460ProposedPlanJuly2021desc");
 if (!MCTR460ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR460ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR460ProposedPlanJuly2021rflag=false
  }
};
$scope.MECE460ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MECE460ProposedPlanJuly2021desc");
 if (!MECE460ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE460ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE460ProposedPlanJuly2021rflag=false
  }
};
$scope.ENGG400ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("ENGG400ProposedPlanJuly2021desc");
 if (!ENGG400ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG400ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG400ProposedPlanJuly2021rflag=false
  }
};
$scope.MCTR461ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MCTR461ProposedPlanJuly2021desc");
 if (!MCTR461ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR461ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR461ProposedPlanJuly2021rflag=false
  }
};
$scope.MCTR465ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MCTR465ProposedPlanJuly2021desc");
 if (!MCTR465ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR465ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR465ProposedPlanJuly2021rflag=false
  }
};
$scope.MECE461ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MECE461ProposedPlanJuly2021desc");
 if (!MECE461ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE461ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE461ProposedPlanJuly2021rflag=false
  }
};
$scope.MECE465ProposedPlanJuly2021RCListener = function () {
  var element = document.getElementById("MECE465ProposedPlanJuly2021desc");
 if (!MECE465ProposedPlanJuly2021rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE465ProposedPlanJuly2021rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE465ProposedPlanJuly2021rflag=false
  }
};
$scope.ProgramTechnicalElectiveProposedPlanJuly20210RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveProposedPlanJuly20210desc");
 if (!ProgramTechnicalElectiveProposedPlanJuly20210rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveProposedPlanJuly20210rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveProposedPlanJuly20210rflag=false
  }
};
$scope.ProgramTechnicalElectiveProposedPlanJuly20211RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveProposedPlanJuly20211desc");
 if (!ProgramTechnicalElectiveProposedPlanJuly20211rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveProposedPlanJuly20211rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveProposedPlanJuly20211rflag=false
  }
};
});
app.directive('ngRightClick', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
    });app.directive('ngChangeRadio', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngChangeRadio);
        element.bind('change', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
    });