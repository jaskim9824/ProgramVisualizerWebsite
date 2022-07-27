var app = angular.module("main", []);
app.controller("main", function($scope) { 
$scope.selectedPlan = "TraditionalPlan";
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
this.highlightElement = function(element, category) {
        if (element.classList.contains(category + "-highlighted")) {
            return;
        }
        element.classList.remove(category);
        element.classList.add(category + "-highlighted");
    };
this.unHighlightElement = function(element, category) {
        if (!element.classList.contains(category + "-highlighted")) {
            return;
        }
        element.classList.remove(category + "-highlighted");
        element.classList.add(category);
    };
this.TraditionalPlanList = [];
this.TraditionalPlanClicked = [];
this.TraditionalPlanLegendBtns = [];
this.TraditionalPlanLegendBtnsClicked = [];
this.TraditionalPlanClickedMap = new Map();
this.TraditionalPlanTerms = 8;
this.TraditionalPlanMaxCourses = 7;
this.CoopPlanList = [];
this.CoopPlanClicked = [];
this.CoopPlanLegendBtns = [];
this.CoopPlanLegendBtnsClicked = [];
this.CoopPlanClickedMap = new Map();
this.CoopPlanTerms = 13;
this.CoopPlanMaxCourses = 7;
this.previousPlan = $scope.selectedPlan
this.setDefaults = function(plan) { 
  switch(plan) { 
      case "TraditionalPlan": 
          $scope.$apply();
          break;
      case "CoopPlan": 
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
  case "TraditionalPlan": 
    for (let i = 0; i < this.TraditionalPlanList.length; i++) {
        this.TraditionalPlanList[i][0].hide(true);
    }
    break; 
  case "CoopPlan": 
    for (let i = 0; i < this.CoopPlanList.length; i++) {
        this.CoopPlanList[i][0].hide(true);
    }
    break; 
    default:
    console.log("shouldn't be here");
    }
};
  var currbtn = document.getElementById("NaturalSciences");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringProfession");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("Other");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("Math");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringDesign");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringSciences");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("ITS");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("COMP");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("PROG");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
this.enable = function(plan) {
  switch(plan) {
    case "TraditionalPlan": 
      for (let i = 0; i < this.TraditionalPlanList.length; i++) {
          this.TraditionalPlanList[i][0].show(true);
      }
      width = this.TraditionalPlanTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlanMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlanClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlanClicked[i][0]);
          this.highlightElement(element, this.TraditionalPlanClicked[i][1]);
      }
      for (let i = 0; i < this.TraditionalPlanLegendBtns.length; i++) {
          var found = false;
          for (let j = 0; j < this.TraditionalPlanLegendBtnsClicked.length; j++) {
              if (this.TraditionalPlanLegendBtnsClicked[j] == this.TraditionalPlanLegendBtns[i]) {
                  found = true;
              }
          }
          if (found == false) {
            if (this.TraditionalPlanLegendBtns[i].classList.contains("legendbutton-pressed")) {
              this.TraditionalPlanLegendBtns[i].classList.remove("legendbutton-pressed");
            }
              this.TraditionalPlanLegendBtns[i].classList.add("legendbutton");
          }
          if (found == true) {
            if (this.TraditionalPlanLegendBtns[i].classList.contains("legendbutton")) {
              this.TraditionalPlanLegendBtns[i].classList.remove("legendbutton");
            }
              this.TraditionalPlanLegendBtns[i].classList.add("legendbutton-pressed");
          }
      }
      break; 
    case "CoopPlan": 
      for (let i = 0; i < this.CoopPlanList.length; i++) {
          this.CoopPlanList[i][0].show(true);
      }
      width = this.CoopPlanTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlanMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlanClicked.length; i++) {
          var element = document.getElementById(this.CoopPlanClicked[i][0]);
          this.highlightElement(element, this.CoopPlanClicked[i][1]);
      }
      for (let i = 0; i < this.CoopPlanLegendBtns.length; i++) {
          var found = false;
          for (let j = 0; j < this.CoopPlanLegendBtnsClicked.length; j++) {
              if (this.CoopPlanLegendBtnsClicked[j] == this.CoopPlanLegendBtns[i]) {
                  found = true;
              }
          }
          if (found == false) {
            if (this.CoopPlanLegendBtns[i].classList.contains("legendbutton-pressed")) {
              this.CoopPlanLegendBtns[i].classList.remove("legendbutton-pressed");
            }
              this.CoopPlanLegendBtns[i].classList.add("legendbutton");
          }
          if (found == true) {
            if (this.CoopPlanLegendBtns[i].classList.contains("legendbutton")) {
              this.CoopPlanLegendBtns[i].classList.remove("legendbutton");
            }
              this.CoopPlanLegendBtns[i].classList.add("legendbutton-pressed");
          }
      }
      break; 
    default:
    console.log("shouldn't be here");
    }
};
this.addLine = function(line) {
switch($scope.selectedPlan) { 
 case "TraditionalPlan":
    var index = this.TraditionalPlanList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.TraditionalPlanList.push([line, 1])
    }
    else {
        this.TraditionalPlanList[index][1]++;
    }
    break;
 case "CoopPlan":
    var index = this.CoopPlanList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.CoopPlanList.push([line, 1])
    }
    else {
        this.CoopPlanList[index][1]++;
    }
    break;
    default:
    console.log("shouldn't be here");
    }
};
this.removeLine = function(line) {
switch($scope.selectedPlan) { 
 case "TraditionalPlan":
    var index = this.TraditionalPlanList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.TraditionalPlanList[index][1]--
        if (this.TraditionalPlanList[index][1] <= 0) {
            line.hide(false);
            this.TraditionalPlanList.splice(index, 1);
        }
    }
    break; case "CoopPlan":
    var index = this.CoopPlanList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlanList[index][1]--
        if (this.CoopPlanList[index][1] <= 0) {
            line.hide(false);
            this.CoopPlanList.splice(index, 1);
        }
    }
    break;    default:
    console.log("shouldn't be here");
    }
};
this.addToClicked = function(element, category) {
switch($scope.selectedPlan) { 
 case "TraditionalPlan":
    var index = this.TraditionalPlanClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.TraditionalPlanClicked.push([element, category, 1]);
    }
    else {
        this.TraditionalPlanClicked[index][1] = category;
        this.TraditionalPlanClicked[index][2]++;
    }
    this.TraditionalPlanClickedMap.get(element).push(category);
    break; case "CoopPlan":
    var index = this.CoopPlanClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.CoopPlanClicked.push([element, category, 1]);
    }
    else {
        this.CoopPlanClicked[index][1] = category;
        this.CoopPlanClicked[index][2]++;
    }
    this.CoopPlanClickedMap.get(element).push(category);
    break;    default:
    console.log("shouldn't be here");
    }
};
this.removeFromClicked = function(element, category) {
switch($scope.selectedPlan) { 
 case "TraditionalPlan":
    var index = this.TraditionalPlanClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.TraditionalPlanClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.TraditionalPlanClickedMap.get(element).splice(indexMap, 1);
        }
        this.TraditionalPlanClicked[index][2]--;
        if (this.TraditionalPlanClicked[index][2] <= 0) {
            this.TraditionalPlanClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.TraditionalPlanClickedMap.get(element).length - 1
        return this.TraditionalPlanClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "CoopPlan":
    var index = this.CoopPlanClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.CoopPlanClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.CoopPlanClickedMap.get(element).splice(indexMap, 1);
        }
        this.CoopPlanClicked[index][2]--;
        if (this.CoopPlanClicked[index][2] <= 0) {
            this.CoopPlanClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.CoopPlanClickedMap.get(element).length - 1
        return this.CoopPlanClickedMap.get(element)[maxIndex];
    }
    return "";
    break;    default:
    console.log("shouldn't be here");
    }
};
var NaturalSciencesTraditionalPlanflag = false;
var NaturalSciencesCoopPlanflag = false;
var EngineeringProfessionTraditionalPlanflag = false;
var EngineeringProfessionCoopPlanflag = false;
var OtherTraditionalPlanflag = false;
var OtherCoopPlanflag = false;
var MathTraditionalPlanflag = false;
var MathCoopPlanflag = false;
var EngineeringDesignTraditionalPlanflag = false;
var EngineeringDesignCoopPlanflag = false;
var EngineeringSciencesTraditionalPlanflag = false;
var EngineeringSciencesCoopPlanflag = false;
var ITSTraditionalPlanflag = false;
var ITSCoopPlanflag = false;
var COMPTraditionalPlanflag = false;
var COMPCoopPlanflag = false;
var PROGTraditionalPlanflag = false;
var PROGCoopPlanflag = false;
$scope.NaturalSciencesclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("NaturalSciences");
    var checkFlag = "!NaturalSciences" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("NaturalSciences", planName);
        if (pressedbtn.classList.contains("legendbutton")) {
            pressedbtn.classList.remove("legendbutton");
        }
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "NaturalSciences" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("NaturalSciences", planName);
        if (pressedbtn.classList.contains("legendbutton-pressed")) {
            pressedbtn.classList.remove("legendbutton-pressed");
        }
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
        if (pressedbtn.classList.contains("legendbutton")) {
            pressedbtn.classList.remove("legendbutton");
        }
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "EngineeringProfession" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("EngineeringProfession", planName);
        if (pressedbtn.classList.contains("legendbutton-pressed")) {
            pressedbtn.classList.remove("legendbutton-pressed");
        }
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "EngineeringProfession" + planName + "flag";
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
        if (pressedbtn.classList.contains("legendbutton")) {
            pressedbtn.classList.remove("legendbutton");
        }
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "Other" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("Other", planName);
        if (pressedbtn.classList.contains("legendbutton-pressed")) {
            pressedbtn.classList.remove("legendbutton-pressed");
        }
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "Other" + planName + "flag";
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
        if (pressedbtn.classList.contains("legendbutton")) {
            pressedbtn.classList.remove("legendbutton");
        }
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "Math" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("Math", planName);
        if (pressedbtn.classList.contains("legendbutton-pressed")) {
            pressedbtn.classList.remove("legendbutton-pressed");
        }
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "Math" + planName + "flag";
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
        if (pressedbtn.classList.contains("legendbutton")) {
            pressedbtn.classList.remove("legendbutton");
        }
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "EngineeringDesign" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("EngineeringDesign", planName);
        if (pressedbtn.classList.contains("legendbutton-pressed")) {
            pressedbtn.classList.remove("legendbutton-pressed");
        }
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "EngineeringDesign" + planName + "flag";
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
        if (pressedbtn.classList.contains("legendbutton")) {
            pressedbtn.classList.remove("legendbutton");
        }
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "EngineeringSciences" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("EngineeringSciences", planName);
        if (pressedbtn.classList.contains("legendbutton-pressed")) {
            pressedbtn.classList.remove("legendbutton-pressed");
        }
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "EngineeringSciences" + planName + "flag";
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
        if (pressedbtn.classList.contains("legendbutton")) {
            pressedbtn.classList.remove("legendbutton");
        }
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "ITS" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("ITS", planName);
        if (pressedbtn.classList.contains("legendbutton-pressed")) {
            pressedbtn.classList.remove("legendbutton-pressed");
        }
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "ITS" + planName + "flag";
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
        if (pressedbtn.classList.contains("legendbutton")) {
            pressedbtn.classList.remove("legendbutton");
        }
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "COMP" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("COMP", planName);
        if (pressedbtn.classList.contains("legendbutton-pressed")) {
            pressedbtn.classList.remove("legendbutton-pressed");
        }
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "COMP" + planName + "flag";
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
        if (pressedbtn.classList.contains("legendbutton")) {
            pressedbtn.classList.remove("legendbutton");
        }
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "PROG" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("PROG", planName);
        if (pressedbtn.classList.contains("legendbutton-pressed")) {
            pressedbtn.classList.remove("legendbutton-pressed");
        }
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
      case "TraditionalPlan":
 var element = document.getElementById("CHEM103TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CHEM103TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CHEM103TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CHEM103TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM103TraditionalPlan", categoryName);
 var element = document.getElementById("ENGG130TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ENGG130TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ENGG130TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ENGG130TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG130TraditionalPlan", categoryName);
 var element = document.getElementById("PHYS130TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PHYS130TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PHYS130TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PHYS130TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS130TraditionalPlan", categoryName);
 var element = document.getElementById("CHEM105TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CHEM105TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CHEM105TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CHEM105TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM105TraditionalPlan", categoryName);
 var element = document.getElementById("ENCMP100TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ENCMP100TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ENCMP100TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ENCMP100TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENCMP100TraditionalPlan", categoryName);
 var element = document.getElementById("ENPH131TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ENPH131TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ENPH131TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ENPH131TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENPH131TraditionalPlan", categoryName);
 var element = document.getElementById("CHEM261TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CHEM261TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CHEM261TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CHEM261TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM261TraditionalPlan", categoryName);
       break;
      case "CoopPlan":
 var element = document.getElementById("CHEM103CoopPlan");
                            if (this.CoopPlanClickedMap.get("CHEM103CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CHEM103CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CHEM103CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM103CoopPlan", categoryName);
 var element = document.getElementById("ENGG130CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENGG130CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENGG130CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENGG130CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG130CoopPlan", categoryName);
 var element = document.getElementById("PHYS130CoopPlan");
                            if (this.CoopPlanClickedMap.get("PHYS130CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PHYS130CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PHYS130CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS130CoopPlan", categoryName);
 var element = document.getElementById("CHEM105CoopPlan");
                            if (this.CoopPlanClickedMap.get("CHEM105CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CHEM105CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CHEM105CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM105CoopPlan", categoryName);
 var element = document.getElementById("ENCMP100CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENCMP100CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENCMP100CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENCMP100CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENCMP100CoopPlan", categoryName);
 var element = document.getElementById("ENPH131CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENPH131CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENPH131CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENPH131CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENPH131CoopPlan", categoryName);
 var element = document.getElementById("CHEM261CoopPlan");
                            if (this.CoopPlanClickedMap.get("CHEM261CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CHEM261CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CHEM261CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM261CoopPlan", categoryName);
       break;
       }
      break;
  case "EngineeringProfession":
    switch(planName) {
      case "TraditionalPlan":
 var element = document.getElementById("ENGG100TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ENGG100TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ENGG100TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ENGG100TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG100TraditionalPlan", categoryName);
 var element = document.getElementById("CME200TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CME200TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CME200TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CME200TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CME200TraditionalPlan", categoryName);
 var element = document.getElementById("CME481TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CME481TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CME481TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CME481TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CME481TraditionalPlan", categoryName);
 var element = document.getElementById("ENGG404TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ENGG404TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ENGG404TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ENGG404TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG404TraditionalPlan", categoryName);
 var element = document.getElementById("ENGG400TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ENGG400TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ENGG400TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ENGG400TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG400TraditionalPlan", categoryName);
       break;
      case "CoopPlan":
 var element = document.getElementById("ENGG100CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENGG100CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENGG100CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENGG100CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG100CoopPlan", categoryName);
 var element = document.getElementById("CME200CoopPlan");
                            if (this.CoopPlanClickedMap.get("CME200CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CME200CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CME200CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CME200CoopPlan", categoryName);
 var element = document.getElementById("ENGG299CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENGG299CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENGG299CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENGG299CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG299CoopPlan", categoryName);
 var element = document.getElementById("WKEXP901CoopPlan");
                            if (this.CoopPlanClickedMap.get("WKEXP901CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("WKEXP901CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("WKEXP901CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP901CoopPlan", categoryName);
 var element = document.getElementById("WKEXP902CoopPlan");
                            if (this.CoopPlanClickedMap.get("WKEXP902CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("WKEXP902CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("WKEXP902CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP902CoopPlan", categoryName);
 var element = document.getElementById("WKEXP903CoopPlan");
                            if (this.CoopPlanClickedMap.get("WKEXP903CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("WKEXP903CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("WKEXP903CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP903CoopPlan", categoryName);
 var element = document.getElementById("ENGG404CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENGG404CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENGG404CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENGG404CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG404CoopPlan", categoryName);
 var element = document.getElementById("CME481CoopPlan");
                            if (this.CoopPlanClickedMap.get("CME481CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CME481CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CME481CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CME481CoopPlan", categoryName);
 var element = document.getElementById("WKEXP904CoopPlan");
                            if (this.CoopPlanClickedMap.get("WKEXP904CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("WKEXP904CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("WKEXP904CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP904CoopPlan", categoryName);
 var element = document.getElementById("WKEXP905CoopPlan");
                            if (this.CoopPlanClickedMap.get("WKEXP905CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("WKEXP905CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("WKEXP905CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP905CoopPlan", categoryName);
 var element = document.getElementById("ENGG400CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENGG400CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENGG400CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENGG400CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG400CoopPlan", categoryName);
       break;
       }
      break;
  case "Other":
    switch(planName) {
      case "TraditionalPlan":
 var element = document.getElementById("ENGL199TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ENGL199TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ENGL199TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ENGL199TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGL199TraditionalPlan", categoryName);
 var element = document.getElementById("ENGM310TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ENGM310TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ENGM310TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ENGM310TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM310TraditionalPlan", categoryName);
 var element = document.getElementById("ENGM401TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ENGM401TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ENGM401TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ENGM401TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM401TraditionalPlan", categoryName);
       break;
      case "CoopPlan":
 var element = document.getElementById("ENGL199CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENGL199CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENGL199CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENGL199CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGL199CoopPlan", categoryName);
 var element = document.getElementById("ENGM310CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENGM310CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENGM310CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENGM310CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM310CoopPlan", categoryName);
 var element = document.getElementById("ENGM401CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENGM401CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENGM401CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENGM401CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM401CoopPlan", categoryName);
       break;
       }
      break;
  case "Math":
    switch(planName) {
      case "TraditionalPlan":
 var element = document.getElementById("MATH100TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATH100TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATH100TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATH100TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH100TraditionalPlan", categoryName);
 var element = document.getElementById("MATH101TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATH101TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATH101TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATH101TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH101TraditionalPlan", categoryName);
 var element = document.getElementById("MATH102TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATH102TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATH102TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATH102TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH102TraditionalPlan", categoryName);
 var element = document.getElementById("MATH209TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATH209TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATH209TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATH209TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH209TraditionalPlan", categoryName);
 var element = document.getElementById("STAT235TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("STAT235TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("STAT235TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("STAT235TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("STAT235TraditionalPlan", categoryName);
 var element = document.getElementById("MATH201TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATH201TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATH201TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATH201TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH201TraditionalPlan", categoryName);
       break;
      case "CoopPlan":
 var element = document.getElementById("MATH100CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATH100CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATH100CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATH100CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH100CoopPlan", categoryName);
 var element = document.getElementById("MATH101CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATH101CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATH101CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATH101CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH101CoopPlan", categoryName);
 var element = document.getElementById("MATH102CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATH102CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATH102CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATH102CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH102CoopPlan", categoryName);
 var element = document.getElementById("MATH209CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATH209CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATH209CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATH209CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH209CoopPlan", categoryName);
 var element = document.getElementById("STAT235CoopPlan");
                            if (this.CoopPlanClickedMap.get("STAT235CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("STAT235CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("STAT235CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("STAT235CoopPlan", categoryName);
 var element = document.getElementById("MATH201CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATH201CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATH201CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATH201CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH201CoopPlan", categoryName);
       break;
       }
      break;
  case "EngineeringDesign":
    switch(planName) {
      case "TraditionalPlan":
 var element = document.getElementById("ENGG160TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ENGG160TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ENGG160TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ENGG160TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG160TraditionalPlan", categoryName);
 var element = document.getElementById("MATE464TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATE464TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATE464TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATE464TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE464TraditionalPlan", categoryName);
 var element = document.getElementById("MATE465TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATE465TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATE465TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATE465TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE465TraditionalPlan", categoryName);
       break;
      case "CoopPlan":
 var element = document.getElementById("ENGG160CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENGG160CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENGG160CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENGG160CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG160CoopPlan", categoryName);
 var element = document.getElementById("MATE464CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATE464CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATE464CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATE464CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE464CoopPlan", categoryName);
 var element = document.getElementById("MATE465CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATE465CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATE465CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATE465CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE465CoopPlan", categoryName);
       break;
       }
      break;
  case "EngineeringSciences":
    switch(planName) {
      case "TraditionalPlan":
 var element = document.getElementById("CHE243TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CHE243TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CHE243TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CHE243TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE243TraditionalPlan", categoryName);
 var element = document.getElementById("MATE202TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATE202TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATE202TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATE202TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE202TraditionalPlan", categoryName);
 var element = document.getElementById("CHE312TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CHE312TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CHE312TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CHE312TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE312TraditionalPlan", categoryName);
 var element = document.getElementById("CIVE270TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE270TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE270TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE270TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE270TraditionalPlan", categoryName);
 var element = document.getElementById("CME265TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CME265TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CME265TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CME265TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CME265TraditionalPlan", categoryName);
 var element = document.getElementById("MATE204TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATE204TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATE204TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATE204TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE204TraditionalPlan", categoryName);
 var element = document.getElementById("MATE211TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATE211TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATE211TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATE211TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE211TraditionalPlan", categoryName);
 var element = document.getElementById("CHE314TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CHE314TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CHE314TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CHE314TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE314TraditionalPlan", categoryName);
 var element = document.getElementById("CHE374TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CHE374TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CHE374TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CHE374TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE374TraditionalPlan", categoryName);
 var element = document.getElementById("MATE335TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATE335TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATE335TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATE335TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE335TraditionalPlan", categoryName);
 var element = document.getElementById("MATE341TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATE341TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATE341TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATE341TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE341TraditionalPlan", categoryName);
 var element = document.getElementById("MATE361TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATE361TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATE361TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATE361TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE361TraditionalPlan", categoryName);
 var element = document.getElementById("MATE336TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATE336TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATE336TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATE336TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE336TraditionalPlan", categoryName);
 var element = document.getElementById("MATE345TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATE345TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATE345TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATE345TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE345TraditionalPlan", categoryName);
 var element = document.getElementById("MATE351TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATE351TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATE351TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATE351TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE351TraditionalPlan", categoryName);
 var element = document.getElementById("MATE362TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATE362TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATE362TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATE362TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE362TraditionalPlan", categoryName);
 var element = document.getElementById("MATE473TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATE473TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATE473TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATE473TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE473TraditionalPlan", categoryName);
 var element = document.getElementById("MATE461TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATE461TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATE461TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATE461TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE461TraditionalPlan", categoryName);
 var element = document.getElementById("MATE474TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATE474TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATE474TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATE474TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE474TraditionalPlan", categoryName);
       break;
      case "CoopPlan":
 var element = document.getElementById("CHE243CoopPlan");
                            if (this.CoopPlanClickedMap.get("CHE243CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CHE243CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CHE243CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE243CoopPlan", categoryName);
 var element = document.getElementById("MATE202CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATE202CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATE202CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATE202CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE202CoopPlan", categoryName);
 var element = document.getElementById("CIVE270CoopPlan");
                            if (this.CoopPlanClickedMap.get("CIVE270CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CIVE270CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CIVE270CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE270CoopPlan", categoryName);
 var element = document.getElementById("CHE312CoopPlan");
                            if (this.CoopPlanClickedMap.get("CHE312CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CHE312CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CHE312CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE312CoopPlan", categoryName);
 var element = document.getElementById("CME265CoopPlan");
                            if (this.CoopPlanClickedMap.get("CME265CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CME265CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CME265CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CME265CoopPlan", categoryName);
 var element = document.getElementById("MATE204CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATE204CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATE204CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATE204CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE204CoopPlan", categoryName);
 var element = document.getElementById("MATE211CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATE211CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATE211CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATE211CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE211CoopPlan", categoryName);
 var element = document.getElementById("CHE314CoopPlan");
                            if (this.CoopPlanClickedMap.get("CHE314CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CHE314CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CHE314CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE314CoopPlan", categoryName);
 var element = document.getElementById("CHE374CoopPlan");
                            if (this.CoopPlanClickedMap.get("CHE374CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CHE374CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CHE374CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE374CoopPlan", categoryName);
 var element = document.getElementById("MATE335CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATE335CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATE335CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATE335CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE335CoopPlan", categoryName);
 var element = document.getElementById("MATE341CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATE341CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATE341CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATE341CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE341CoopPlan", categoryName);
 var element = document.getElementById("MATE361CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATE361CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATE361CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATE361CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE361CoopPlan", categoryName);
 var element = document.getElementById("MATE345CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATE345CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATE345CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATE345CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE345CoopPlan", categoryName);
 var element = document.getElementById("MATE336CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATE336CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATE336CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATE336CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE336CoopPlan", categoryName);
 var element = document.getElementById("MATE351CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATE351CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATE351CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATE351CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE351CoopPlan", categoryName);
 var element = document.getElementById("MATE362CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATE362CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATE362CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATE362CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE362CoopPlan", categoryName);
 var element = document.getElementById("MATE473CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATE473CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATE473CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATE473CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE473CoopPlan", categoryName);
 var element = document.getElementById("MATE461CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATE461CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATE461CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATE461CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE461CoopPlan", categoryName);
 var element = document.getElementById("MATE474CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATE474CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATE474CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATE474CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE474CoopPlan", categoryName);
       break;
       }
      break;
  case "ITS":
    switch(planName) {
      case "TraditionalPlan":
        var ITSelements = document.getElementsByClassName("ITS");
        var i = 0;
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          if (this.TraditionalPlanClickedMap.get("ITSElectiveTraditionalPlan" + i).length > 0) {
                var mapLen = this.TraditionalPlanClickedMap.get("ITSElectiveTraditionalPlan" + i).length - 1
                var prevCate = this.TraditionalPlanClickedMap.get("ITSElectiveTraditionalPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ITSElectiveTraditionalPlan" + i, categoryName);
          i = i + 1;
        }
       break;
      case "CoopPlan":
        var ITSelements = document.getElementsByClassName("ITS");
        var i = 0;
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          if (this.CoopPlanClickedMap.get("ITSElectiveCoopPlan" + i).length > 0) {
                var mapLen = this.CoopPlanClickedMap.get("ITSElectiveCoopPlan" + i).length - 1
                var prevCate = this.CoopPlanClickedMap.get("ITSElectiveCoopPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ITSElectiveCoopPlan" + i, categoryName);
          i = i + 1;
        }
       break;
       }
      break;
  case "COMP":
  case "ComplementaryElective":
    switch(planName) {
      case "TraditionalPlan":
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan" + i).length > 0) {
                var mapLen = this.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan" + i).length - 1
                var prevCate = this.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveTraditionalPlan" + i, categoryName);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan" + i).length > 0) {
                var mapLen = this.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan" + i).length - 1
                var prevCate = this.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveTraditionalPlan" + i, categoryName);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan" + i).length > 0) {
                var mapLen = this.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan" + i).length - 1
                var prevCate = this.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveTraditionalPlan" + i, categoryName);
          i = i + 1;
        }
       break;
      case "CoopPlan":
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan" + i).length > 0) {
                var mapLen = this.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan" + i).length - 1
                var prevCate = this.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveCoopPlan" + i, categoryName);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan" + i).length > 0) {
                var mapLen = this.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan" + i).length - 1
                var prevCate = this.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveCoopPlan" + i, categoryName);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan" + i).length > 0) {
                var mapLen = this.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan" + i).length - 1
                var prevCate = this.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveCoopPlan" + i, categoryName);
          i = i + 1;
        }
       break;
       }
      break;
  case "PROG":
  case "ProgramTechnicalElective":
    switch(planName) {
      case "TraditionalPlan":
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan" + i).length > 0) {
                var mapLen = this.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan" + i).length - 1
                var prevCate = this.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveTraditionalPlan" + i, categoryName);
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan" + i).length > 0) {
                var mapLen = this.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan" + i).length - 1
                var prevCate = this.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveTraditionalPlan" + i, categoryName);
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan" + i).length > 0) {
                var mapLen = this.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan" + i).length - 1
                var prevCate = this.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveTraditionalPlan" + i, categoryName);
          i = i + 1;
        }
       break;
      case "CoopPlan":
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan" + i).length > 0) {
                var mapLen = this.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan" + i).length - 1
                var prevCate = this.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveCoopPlan" + i, categoryName);
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan" + i).length > 0) {
                var mapLen = this.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan" + i).length - 1
                var prevCate = this.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveCoopPlan" + i, categoryName);
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan" + i).length > 0) {
                var mapLen = this.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan" + i).length - 1
                var prevCate = this.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveCoopPlan" + i, categoryName);
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
      case "TraditionalPlan":
     var element = document.getElementById("CHEM103TraditionalPlan");
                            var prevCate = this.removeFromClicked("CHEM103TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG130TraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGG130TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS130TraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS130TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHEM105TraditionalPlan");
                            var prevCate = this.removeFromClicked("CHEM105TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENCMP100TraditionalPlan");
                            var prevCate = this.removeFromClicked("ENCMP100TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENPH131TraditionalPlan");
                            var prevCate = this.removeFromClicked("ENPH131TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHEM261TraditionalPlan");
                            var prevCate = this.removeFromClicked("CHEM261TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan":
     var element = document.getElementById("CHEM103CoopPlan");
                            var prevCate = this.removeFromClicked("CHEM103CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG130CoopPlan");
                            var prevCate = this.removeFromClicked("ENGG130CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS130CoopPlan");
                            var prevCate = this.removeFromClicked("PHYS130CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHEM105CoopPlan");
                            var prevCate = this.removeFromClicked("CHEM105CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENCMP100CoopPlan");
                            var prevCate = this.removeFromClicked("ENCMP100CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENPH131CoopPlan");
                            var prevCate = this.removeFromClicked("ENPH131CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHEM261CoopPlan");
                            var prevCate = this.removeFromClicked("CHEM261CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
       }
      break;
  case "EngineeringProfession":
    switch(planName) {
      case "TraditionalPlan":
     var element = document.getElementById("ENGG100TraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGG100TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CME200TraditionalPlan");
                            var prevCate = this.removeFromClicked("CME200TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CME481TraditionalPlan");
                            var prevCate = this.removeFromClicked("CME481TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG404TraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGG404TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG400TraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGG400TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan":
     var element = document.getElementById("ENGG100CoopPlan");
                            var prevCate = this.removeFromClicked("ENGG100CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CME200CoopPlan");
                            var prevCate = this.removeFromClicked("CME200CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG299CoopPlan");
                            var prevCate = this.removeFromClicked("ENGG299CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP901CoopPlan");
                            var prevCate = this.removeFromClicked("WKEXP901CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP902CoopPlan");
                            var prevCate = this.removeFromClicked("WKEXP902CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP903CoopPlan");
                            var prevCate = this.removeFromClicked("WKEXP903CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG404CoopPlan");
                            var prevCate = this.removeFromClicked("ENGG404CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CME481CoopPlan");
                            var prevCate = this.removeFromClicked("CME481CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP904CoopPlan");
                            var prevCate = this.removeFromClicked("WKEXP904CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP905CoopPlan");
                            var prevCate = this.removeFromClicked("WKEXP905CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG400CoopPlan");
                            var prevCate = this.removeFromClicked("ENGG400CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
       }
      break;
  case "Other":
    switch(planName) {
      case "TraditionalPlan":
     var element = document.getElementById("ENGL199TraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGL199TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM310TraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGM310TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM401TraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGM401TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan":
     var element = document.getElementById("ENGL199CoopPlan");
                            var prevCate = this.removeFromClicked("ENGL199CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM310CoopPlan");
                            var prevCate = this.removeFromClicked("ENGM310CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM401CoopPlan");
                            var prevCate = this.removeFromClicked("ENGM401CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
       }
      break;
  case "Math":
    switch(planName) {
      case "TraditionalPlan":
     var element = document.getElementById("MATH100TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATH100TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH101TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATH101TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH102TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATH102TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH209TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATH209TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("STAT235TraditionalPlan");
                            var prevCate = this.removeFromClicked("STAT235TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH201TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATH201TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan":
     var element = document.getElementById("MATH100CoopPlan");
                            var prevCate = this.removeFromClicked("MATH100CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH101CoopPlan");
                            var prevCate = this.removeFromClicked("MATH101CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH102CoopPlan");
                            var prevCate = this.removeFromClicked("MATH102CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH209CoopPlan");
                            var prevCate = this.removeFromClicked("MATH209CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("STAT235CoopPlan");
                            var prevCate = this.removeFromClicked("STAT235CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH201CoopPlan");
                            var prevCate = this.removeFromClicked("MATH201CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
       }
      break;
  case "EngineeringDesign":
    switch(planName) {
      case "TraditionalPlan":
     var element = document.getElementById("ENGG160TraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGG160TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE464TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATE464TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE465TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATE465TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan":
     var element = document.getElementById("ENGG160CoopPlan");
                            var prevCate = this.removeFromClicked("ENGG160CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE464CoopPlan");
                            var prevCate = this.removeFromClicked("MATE464CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE465CoopPlan");
                            var prevCate = this.removeFromClicked("MATE465CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
       }
      break;
  case "EngineeringSciences":
    switch(planName) {
      case "TraditionalPlan":
     var element = document.getElementById("CHE243TraditionalPlan");
                            var prevCate = this.removeFromClicked("CHE243TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE202TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATE202TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE312TraditionalPlan");
                            var prevCate = this.removeFromClicked("CHE312TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE270TraditionalPlan");
                            var prevCate = this.removeFromClicked("CIVE270TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CME265TraditionalPlan");
                            var prevCate = this.removeFromClicked("CME265TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE204TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATE204TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE211TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATE211TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE314TraditionalPlan");
                            var prevCate = this.removeFromClicked("CHE314TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE374TraditionalPlan");
                            var prevCate = this.removeFromClicked("CHE374TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE335TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATE335TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE341TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATE341TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE361TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATE361TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE336TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATE336TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE345TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATE345TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE351TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATE351TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE362TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATE362TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE473TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATE473TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE461TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATE461TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE474TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATE474TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan":
     var element = document.getElementById("CHE243CoopPlan");
                            var prevCate = this.removeFromClicked("CHE243CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE202CoopPlan");
                            var prevCate = this.removeFromClicked("MATE202CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE270CoopPlan");
                            var prevCate = this.removeFromClicked("CIVE270CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE312CoopPlan");
                            var prevCate = this.removeFromClicked("CHE312CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CME265CoopPlan");
                            var prevCate = this.removeFromClicked("CME265CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE204CoopPlan");
                            var prevCate = this.removeFromClicked("MATE204CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE211CoopPlan");
                            var prevCate = this.removeFromClicked("MATE211CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE314CoopPlan");
                            var prevCate = this.removeFromClicked("CHE314CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE374CoopPlan");
                            var prevCate = this.removeFromClicked("CHE374CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE335CoopPlan");
                            var prevCate = this.removeFromClicked("MATE335CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE341CoopPlan");
                            var prevCate = this.removeFromClicked("MATE341CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE361CoopPlan");
                            var prevCate = this.removeFromClicked("MATE361CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE345CoopPlan");
                            var prevCate = this.removeFromClicked("MATE345CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE336CoopPlan");
                            var prevCate = this.removeFromClicked("MATE336CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE351CoopPlan");
                            var prevCate = this.removeFromClicked("MATE351CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE362CoopPlan");
                            var prevCate = this.removeFromClicked("MATE362CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE473CoopPlan");
                            var prevCate = this.removeFromClicked("MATE473CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE461CoopPlan");
                            var prevCate = this.removeFromClicked("MATE461CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE474CoopPlan");
                            var prevCate = this.removeFromClicked("MATE474CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
       }
      break;
  case "ITS":
    switch(planName) {
      case "TraditionalPlan":
        var ITSelements = document.getElementsByClassName("ITS-highlighted");
        var i = 0;        
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          var prevCate = this.removeFromClicked("ITSElectiveTraditionalPlan" + i, "ITS");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
       break;
      case "CoopPlan":
        var ITSelements = document.getElementsByClassName("ITS-highlighted");
        var i = 0;        
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          var prevCate = this.removeFromClicked("ITSElectiveCoopPlan" + i, "ITS");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
       break;
       }
      break;
  case "COMP":
  case "ComplementaryElective":
    switch(planName) {
      case "TraditionalPlan":
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveTraditionalPlan" + i, "COMP");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveTraditionalPlan" + i, "COMP");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveTraditionalPlan" + i, "COMP");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
       break;
      case "CoopPlan":
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveCoopPlan" + i, "COMP");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveCoopPlan" + i, "COMP");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveCoopPlan" + i, "COMP");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
       break;
       }
      break;
  case "PROG":
  case "ProgramTechnicalElective":
    switch(planName) {
      case "TraditionalPlan":
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan" + i, "PROG");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan" + i, "PROG");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan" + i, "PROG");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
       break;
      case "CoopPlan":
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveCoopPlan" + i, "PROG");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveCoopPlan" + i, "PROG");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveCoopPlan" + i, "PROG");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
       break;
       }
      break;
break;   default:
    console.log("shouldn't be here");
    }
};
  var CHEM103TraditionalPlanflag = false;
  var CHEM103TraditionalPlanrflag = false;
 var CHEM103TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CHEM103TraditionalPlan", []);
  var ENGG100TraditionalPlanflag = false;
  var ENGG100TraditionalPlanrflag = false;
 var ENGG100TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGG100TraditionalPlan", []);
  var ENGG130TraditionalPlanflag = false;
  var ENGG130TraditionalPlanrflag = false;
 var ENGG130TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGG130TraditionalPlan", []);
  var ENGL199TraditionalPlanflag = false;
  var ENGL199TraditionalPlanrflag = false;
 var ENGL199TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGL199TraditionalPlan", []);
  var MATH100TraditionalPlanflag = false;
  var MATH100TraditionalPlanrflag = false;
 var MATH100TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATH100TraditionalPlan", []);
  var PHYS130TraditionalPlanflag = false;
  var PHYS130TraditionalPlanrflag = false;
 var PHYS130TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PHYS130TraditionalPlan", []);
  var CHEM105TraditionalPlanflag = false;
  var CHEM105TraditionalPlanrflag = false;
 var CHEM105TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CHEM105TraditionalPlan", []);
  var ENCMP100TraditionalPlanflag = false;
  var ENCMP100TraditionalPlanrflag = false;
 var ENCMP100TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENCMP100TraditionalPlan", []);
  var ENGG160TraditionalPlanflag = false;
  var ENGG160TraditionalPlanrflag = false;
 var ENGG160TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGG160TraditionalPlan", []);
  var ENPH131TraditionalPlanflag = false;
  var ENPH131TraditionalPlanrflag = false;
 var ENPH131TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENPH131TraditionalPlan", []);
  var MATH101TraditionalPlanflag = false;
  var MATH101TraditionalPlanrflag = false;
 var MATH101TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATH101TraditionalPlan", []);
  var MATH102TraditionalPlanflag = false;
  var MATH102TraditionalPlanrflag = false;
 var MATH102TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATH102TraditionalPlan", []);
  var CHE243TraditionalPlanflag = false;
  var CHE243TraditionalPlanrflag = false;
 var CHE243TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CHE243TraditionalPlan", []);
  var CHEM261TraditionalPlanflag = false;
  var CHEM261TraditionalPlanrflag = false;
 var CHEM261TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CHEM261TraditionalPlan", []);
  var CME200TraditionalPlanflag = false;
  var CME200TraditionalPlanrflag = false;
 var CME200TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CME200TraditionalPlan", []);
  var MATE202TraditionalPlanflag = false;
  var MATE202TraditionalPlanrflag = false;
 var MATE202TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATE202TraditionalPlan", []);
  var MATH209TraditionalPlanflag = false;
  var MATH209TraditionalPlanrflag = false;
 var MATH209TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATH209TraditionalPlan", []);
  var STAT235TraditionalPlanflag = false;
  var STAT235TraditionalPlanrflag = false;
 var STAT235TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("STAT235TraditionalPlan", []);
  var ITSElectiveTraditionalPlan0flag = false;
  var ITSElectiveTraditionalPlan0rflag = false;
 var ITSElectiveTraditionalPlan0Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ITSElectiveTraditionalPlan0", []);
  var CHE312TraditionalPlanflag = false;
  var CHE312TraditionalPlanrflag = false;
 var CHE312TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CHE312TraditionalPlan", []);
  var CIVE270TraditionalPlanflag = false;
  var CIVE270TraditionalPlanrflag = false;
 var CIVE270TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE270TraditionalPlan", []);
  var CME265TraditionalPlanflag = false;
  var CME265TraditionalPlanrflag = false;
 var CME265TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CME265TraditionalPlan", []);
  var MATH201TraditionalPlanflag = false;
  var MATH201TraditionalPlanrflag = false;
 var MATH201TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATH201TraditionalPlan", []);
  var MATE204TraditionalPlanflag = false;
  var MATE204TraditionalPlanrflag = false;
 var MATE204TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATE204TraditionalPlan", []);
  var MATE211TraditionalPlanflag = false;
  var MATE211TraditionalPlanrflag = false;
 var MATE211TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATE211TraditionalPlan", []);
  var CHE314TraditionalPlanflag = false;
  var CHE314TraditionalPlanrflag = false;
 var CHE314TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CHE314TraditionalPlan", []);
  var CHE374TraditionalPlanflag = false;
  var CHE374TraditionalPlanrflag = false;
 var CHE374TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CHE374TraditionalPlan", []);
  var ComplementaryElectiveTraditionalPlan0flag = false;
  var ComplementaryElectiveTraditionalPlan0rflag = false;
 var ComplementaryElectiveTraditionalPlan0Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ComplementaryElectiveTraditionalPlan0", []);
  var MATE335TraditionalPlanflag = false;
  var MATE335TraditionalPlanrflag = false;
 var MATE335TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATE335TraditionalPlan", []);
  var MATE341TraditionalPlanflag = false;
  var MATE341TraditionalPlanrflag = false;
 var MATE341TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATE341TraditionalPlan", []);
  var MATE361TraditionalPlanflag = false;
  var MATE361TraditionalPlanrflag = false;
 var MATE361TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATE361TraditionalPlan", []);
  var MATE336TraditionalPlanflag = false;
  var MATE336TraditionalPlanrflag = false;
 var MATE336TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATE336TraditionalPlan", []);
  var MATE345TraditionalPlanflag = false;
  var MATE345TraditionalPlanrflag = false;
 var MATE345TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATE345TraditionalPlan", []);
  var MATE351TraditionalPlanflag = false;
  var MATE351TraditionalPlanrflag = false;
 var MATE351TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATE351TraditionalPlan", []);
  var MATE362TraditionalPlanflag = false;
  var MATE362TraditionalPlanrflag = false;
 var MATE362TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATE362TraditionalPlan", []);
  var MATE473TraditionalPlanflag = false;
  var MATE473TraditionalPlanrflag = false;
 var MATE473TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATE473TraditionalPlan", []);
  var ComplementaryElectiveTraditionalPlan1flag = false;
  var ComplementaryElectiveTraditionalPlan1rflag = false;
 var ComplementaryElectiveTraditionalPlan1Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ComplementaryElectiveTraditionalPlan1", []);
  var CME481TraditionalPlanflag = false;
  var CME481TraditionalPlanrflag = false;
 var CME481TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CME481TraditionalPlan", []);
  var ENGM310TraditionalPlanflag = false;
  var ENGM310TraditionalPlanrflag = false;
 var ENGM310TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGM310TraditionalPlan", []);
  var ENGM401TraditionalPlanflag = false;
  var ENGM401TraditionalPlanrflag = false;
 var ENGM401TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGM401TraditionalPlan", []);
  var ENGG404TraditionalPlanflag = false;
  var ENGG404TraditionalPlanrflag = false;
 var ENGG404TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGG404TraditionalPlan", []);
  var MATE464TraditionalPlanflag = false;
  var MATE464TraditionalPlanrflag = false;
 var MATE464TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATE464TraditionalPlan", []);
  var ProgramTechnicalElectiveTraditionalPlan0flag = false;
  var ProgramTechnicalElectiveTraditionalPlan0rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan0Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan0", []);
  var ComplementaryElectiveTraditionalPlan2flag = false;
  var ComplementaryElectiveTraditionalPlan2rflag = false;
 var ComplementaryElectiveTraditionalPlan2Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ComplementaryElectiveTraditionalPlan2", []);
  var ENGG400TraditionalPlanflag = false;
  var ENGG400TraditionalPlanrflag = false;
 var ENGG400TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGG400TraditionalPlan", []);
  var MATE461TraditionalPlanflag = false;
  var MATE461TraditionalPlanrflag = false;
 var MATE461TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATE461TraditionalPlan", []);
  var MATE465TraditionalPlanflag = false;
  var MATE465TraditionalPlanrflag = false;
 var MATE465TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATE465TraditionalPlan", []);
  var MATE474TraditionalPlanflag = false;
  var MATE474TraditionalPlanrflag = false;
 var MATE474TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATE474TraditionalPlan", []);
  var ProgramTechnicalElectiveTraditionalPlan1flag = false;
  var ProgramTechnicalElectiveTraditionalPlan1rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan1Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan1", []);
  var ProgramTechnicalElectiveTraditionalPlan2flag = false;
  var ProgramTechnicalElectiveTraditionalPlan2rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan2Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan2", []);
$scope.CHEM103TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103TraditionalPlanTime <= 200) { 
        CHEM103TraditionalPlanTime = currentTime;
        return;
    }
CHEM103TraditionalPlanTime = currentTime;
  var CHEM103TraditionalPlanelement = document.getElementById("CHEM103TraditionalPlan");
 if (!CHEM103TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CHEM103TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CHEM103TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CHEM103TraditionalPlan")[i];
        if (CHEM103TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM103TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine2());
     that.highlightElement(CHEM103TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("CHEM103TraditionalPlan", "NaturalSciences");
      CHEM103TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine2());
     that.unHighlightElement(CHEM103TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM103TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM103TraditionalPlanelement, category);
}
      CHEM103TraditionalPlanflag=false
  }
};
$scope.ENGG100TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG100TraditionalPlanTime <= 200) { 
        ENGG100TraditionalPlanTime = currentTime;
        return;
    }
ENGG100TraditionalPlanTime = currentTime;
  var ENGG100TraditionalPlanelement = document.getElementById("ENGG100TraditionalPlan");
 if (!ENGG100TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ENGG100TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ENGG100TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ENGG100TraditionalPlan")[i];
        if (ENGG100TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG100TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG100TraditionalPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG100TraditionalPlan", "EngineeringProfession");
      ENGG100TraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(ENGG100TraditionalPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG100TraditionalPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG100TraditionalPlanelement, category);
}
      ENGG100TraditionalPlanflag=false
  }
};
$scope.ENGG130TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG130TraditionalPlanTime <= 200) { 
        ENGG130TraditionalPlanTime = currentTime;
        return;
    }
ENGG130TraditionalPlanTime = currentTime;
  var ENGG130TraditionalPlanelement = document.getElementById("ENGG130TraditionalPlan");
 if (!ENGG130TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ENGG130TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ENGG130TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ENGG130TraditionalPlan")[i];
        if (ENGG130TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG130TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine0());
      that.addLine(getLine5());
      that.addLine(getLine19());
     that.highlightElement(ENGG130TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENGG130TraditionalPlan", "NaturalSciences");
      ENGG130TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine5());
      that.removeLine(getLine19());
     that.unHighlightElement(ENGG130TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("ENGG130TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENGG130TraditionalPlanelement, category);
}
      ENGG130TraditionalPlanflag=false
  }
};
$scope.ENGL199TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGL199TraditionalPlanTime <= 200) { 
        ENGL199TraditionalPlanTime = currentTime;
        return;
    }
ENGL199TraditionalPlanTime = currentTime;
  var ENGL199TraditionalPlanelement = document.getElementById("ENGL199TraditionalPlan");
 if (!ENGL199TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ENGL199TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ENGL199TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ENGL199TraditionalPlan")[i];
        if (ENGL199TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGL199TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine3());
     that.highlightElement(ENGL199TraditionalPlanelement, "Other");
     that.addToClicked("ENGL199TraditionalPlan", "Other");
      ENGL199TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine3());
     that.unHighlightElement(ENGL199TraditionalPlanelement, "Other");
     var category = that.removeFromClicked("ENGL199TraditionalPlan", "Other");
  if (category != "") { 
     that.highlightElement(ENGL199TraditionalPlanelement, category);
}
      ENGL199TraditionalPlanflag=false
  }
};
$scope.MATH100TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH100TraditionalPlanTime <= 200) { 
        MATH100TraditionalPlanTime = currentTime;
        return;
    }
MATH100TraditionalPlanTime = currentTime;
  var MATH100TraditionalPlanelement = document.getElementById("MATH100TraditionalPlan");
 if (!MATH100TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATH100TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATH100TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATH100TraditionalPlan")[i];
        if (MATH100TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH100TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine0());
      that.addLine(getLine1());
      that.addLine(getLine4());
      that.addLine(getLine7());
      that.addLine(getLine8());
      that.addLine(getLine13());
     that.highlightElement(MATH100TraditionalPlanelement, "Math");
     that.addToClicked("MATH100TraditionalPlan", "Math");
      MATH100TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine1());
      that.removeLine(getLine4());
      that.removeLine(getLine7());
      that.removeLine(getLine8());
      that.removeLine(getLine13());
     that.unHighlightElement(MATH100TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH100TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH100TraditionalPlanelement, category);
}
      MATH100TraditionalPlanflag=false
  }
};
$scope.PHYS130TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS130TraditionalPlanTime <= 200) { 
        PHYS130TraditionalPlanTime = currentTime;
        return;
    }
PHYS130TraditionalPlanTime = currentTime;
  var PHYS130TraditionalPlanelement = document.getElementById("PHYS130TraditionalPlan");
 if (!PHYS130TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("PHYS130TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PHYS130TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PHYS130TraditionalPlan")[i];
        if (PHYS130TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS130TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine1());
     that.highlightElement(PHYS130TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS130TraditionalPlan", "NaturalSciences");
      PHYS130TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine1());
     that.unHighlightElement(PHYS130TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS130TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS130TraditionalPlanelement, category);
}
      PHYS130TraditionalPlanflag=false
  }
};
$scope.CHEM105TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM105TraditionalPlanTime <= 200) { 
        CHEM105TraditionalPlanTime = currentTime;
        return;
    }
CHEM105TraditionalPlanTime = currentTime;
  var CHEM105TraditionalPlanelement = document.getElementById("CHEM105TraditionalPlan");
 if (!CHEM105TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CHEM105TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CHEM105TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CHEM105TraditionalPlan")[i];
        if (CHEM105TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM105TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine2());
      that.addLine(getLine10());
      that.addLine(getLine23());
     that.highlightElement(CHEM105TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("CHEM105TraditionalPlan", "NaturalSciences");
      CHEM105TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine2());
      that.removeLine(getLine10());
      that.removeLine(getLine23());
     that.unHighlightElement(CHEM105TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM105TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM105TraditionalPlanelement, category);
}
      CHEM105TraditionalPlanflag=false
  }
};
$scope.ENCMP100TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENCMP100TraditionalPlanTime <= 200) { 
        ENCMP100TraditionalPlanTime = currentTime;
        return;
    }
ENCMP100TraditionalPlanTime = currentTime;
  var ENCMP100TraditionalPlanelement = document.getElementById("ENCMP100TraditionalPlan");
 if (!ENCMP100TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ENCMP100TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ENCMP100TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ENCMP100TraditionalPlan")[i];
        if (ENCMP100TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENCMP100TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine21());
      that.addLine(getLine32());
     that.highlightElement(ENCMP100TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENCMP100TraditionalPlan", "NaturalSciences");
      ENCMP100TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine21());
      that.removeLine(getLine32());
     that.unHighlightElement(ENCMP100TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("ENCMP100TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENCMP100TraditionalPlanelement, category);
}
      ENCMP100TraditionalPlanflag=false
  }
};
$scope.ENGG160TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG160TraditionalPlanTime <= 200) { 
        ENGG160TraditionalPlanTime = currentTime;
        return;
    }
ENGG160TraditionalPlanTime = currentTime;
  var ENGG160TraditionalPlanelement = document.getElementById("ENGG160TraditionalPlan");
 if (!ENGG160TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ENGG160TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ENGG160TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ENGG160TraditionalPlan")[i];
        if (ENGG160TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG160TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine3());
     that.highlightElement(ENGG160TraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("ENGG160TraditionalPlan", "EngineeringDesign");
      ENGG160TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine3());
     that.unHighlightElement(ENGG160TraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ENGG160TraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ENGG160TraditionalPlanelement, category);
}
      ENGG160TraditionalPlanflag=false
  }
};
$scope.ENPH131TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENPH131TraditionalPlanTime <= 200) { 
        ENPH131TraditionalPlanTime = currentTime;
        return;
    }
ENPH131TraditionalPlanTime = currentTime;
  var ENPH131TraditionalPlanelement = document.getElementById("ENPH131TraditionalPlan");
 if (!ENPH131TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ENPH131TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ENPH131TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ENPH131TraditionalPlan")[i];
        if (ENPH131TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENPH131TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine4());
      that.addLine(getLine5());
      that.addLine(getLine6());
      that.addLine(getLine16());
     that.highlightElement(ENPH131TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENPH131TraditionalPlan", "NaturalSciences");
      ENPH131TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine4());
      that.removeLine(getLine5());
      that.removeLine(getLine6());
      that.removeLine(getLine16());
     that.unHighlightElement(ENPH131TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("ENPH131TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENPH131TraditionalPlanelement, category);
}
      ENPH131TraditionalPlanflag=false
  }
};
$scope.MATH101TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH101TraditionalPlanTime <= 200) { 
        MATH101TraditionalPlanTime = currentTime;
        return;
    }
MATH101TraditionalPlanTime = currentTime;
  var MATH101TraditionalPlanelement = document.getElementById("MATH101TraditionalPlan");
 if (!MATH101TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATH101TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATH101TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATH101TraditionalPlan")[i];
        if (MATH101TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH101TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine6());
      that.addLine(getLine7());
      that.addLine(getLine9());
      that.addLine(getLine11());
      that.addLine(getLine14());
      that.addLine(getLine20());
     that.highlightElement(MATH101TraditionalPlanelement, "Math");
     that.addToClicked("MATH101TraditionalPlan", "Math");
      MATH101TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine6());
      that.removeLine(getLine7());
      that.removeLine(getLine9());
      that.removeLine(getLine11());
      that.removeLine(getLine14());
      that.removeLine(getLine20());
     that.unHighlightElement(MATH101TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH101TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH101TraditionalPlanelement, category);
}
      MATH101TraditionalPlanflag=false
  }
};
$scope.MATH102TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH102TraditionalPlanTime <= 200) { 
        MATH102TraditionalPlanTime = currentTime;
        return;
    }
MATH102TraditionalPlanTime = currentTime;
  var MATH102TraditionalPlanelement = document.getElementById("MATH102TraditionalPlan");
 if (!MATH102TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATH102TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATH102TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATH102TraditionalPlan")[i];
        if (MATH102TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH102TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine8());
      that.addLine(getLine12());
      that.addLine(getLine22());
     that.highlightElement(MATH102TraditionalPlanelement, "Math");
     that.addToClicked("MATH102TraditionalPlan", "Math");
      MATH102TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine8());
      that.removeLine(getLine12());
      that.removeLine(getLine22());
     that.unHighlightElement(MATH102TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH102TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH102TraditionalPlanelement, category);
}
      MATH102TraditionalPlanflag=false
  }
};
$scope.CHE243TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE243TraditionalPlanTime <= 200) { 
        CHE243TraditionalPlanTime = currentTime;
        return;
    }
CHE243TraditionalPlanTime = currentTime;
  var CHE243TraditionalPlanelement = document.getElementById("CHE243TraditionalPlan");
 if (!CHE243TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CHE243TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CHE243TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CHE243TraditionalPlan")[i];
        if (CHE243TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE243TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine9());
      that.addLine(getLine15());
      that.addLine(getLine24());
      that.addLine(getLine27());
     that.highlightElement(CHE243TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CHE243TraditionalPlan", "EngineeringSciences");
      CHE243TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine9());
      that.removeLine(getLine15());
      that.removeLine(getLine24());
      that.removeLine(getLine27());
     that.unHighlightElement(CHE243TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE243TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE243TraditionalPlanelement, category);
}
      CHE243TraditionalPlanflag=false
  }
};
$scope.CHEM261TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM261TraditionalPlanTime <= 200) { 
        CHEM261TraditionalPlanTime = currentTime;
        return;
    }
CHEM261TraditionalPlanTime = currentTime;
  var CHEM261TraditionalPlanelement = document.getElementById("CHEM261TraditionalPlan");
 if (!CHEM261TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CHEM261TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CHEM261TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CHEM261TraditionalPlan")[i];
        if (CHEM261TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM261TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(CHEM261TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("CHEM261TraditionalPlan", "NaturalSciences");
      CHEM261TraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(CHEM261TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM261TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM261TraditionalPlanelement, category);
}
      CHEM261TraditionalPlanflag=false
  }
};
$scope.CME200TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CME200TraditionalPlanTime <= 200) { 
        CME200TraditionalPlanTime = currentTime;
        return;
    }
CME200TraditionalPlanTime = currentTime;
  var CME200TraditionalPlanelement = document.getElementById("CME200TraditionalPlan");
 if (!CME200TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CME200TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CME200TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CME200TraditionalPlan")[i];
        if (CME200TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CME200TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(CME200TraditionalPlanelement, "EngineeringProfession");
     that.addToClicked("CME200TraditionalPlan", "EngineeringProfession");
      CME200TraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(CME200TraditionalPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("CME200TraditionalPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(CME200TraditionalPlanelement, category);
}
      CME200TraditionalPlanflag=false
  }
};
$scope.MATE202TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE202TraditionalPlanTime <= 200) { 
        MATE202TraditionalPlanTime = currentTime;
        return;
    }
MATE202TraditionalPlanTime = currentTime;
  var MATE202TraditionalPlanelement = document.getElementById("MATE202TraditionalPlan");
 if (!MATE202TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATE202TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATE202TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATE202TraditionalPlan")[i];
        if (MATE202TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE202TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine10());
      that.addLine(getLine28());
      that.addLine(getLine39());
     that.highlightElement(MATE202TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MATE202TraditionalPlan", "EngineeringSciences");
      MATE202TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine10());
      that.removeLine(getLine28());
      that.removeLine(getLine39());
     that.unHighlightElement(MATE202TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE202TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE202TraditionalPlanelement, category);
}
      MATE202TraditionalPlanflag=false
  }
};
$scope.MATH209TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH209TraditionalPlanTime <= 200) { 
        MATH209TraditionalPlanTime = currentTime;
        return;
    }
MATH209TraditionalPlanTime = currentTime;
  var MATH209TraditionalPlanelement = document.getElementById("MATH209TraditionalPlan");
 if (!MATH209TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATH209TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATH209TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATH209TraditionalPlan")[i];
        if (MATH209TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH209TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine11());
      that.addLine(getLine12());
      that.addLine(getLine17());
      that.addLine(getLine25());
      that.addLine(getLine26());
     that.highlightElement(MATH209TraditionalPlanelement, "Math");
     that.addToClicked("MATH209TraditionalPlan", "Math");
      MATH209TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine11());
      that.removeLine(getLine12());
      that.removeLine(getLine17());
      that.removeLine(getLine25());
      that.removeLine(getLine26());
     that.unHighlightElement(MATH209TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH209TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH209TraditionalPlanelement, category);
}
      MATH209TraditionalPlanflag=false
  }
};
$scope.STAT235TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - STAT235TraditionalPlanTime <= 200) { 
        STAT235TraditionalPlanTime = currentTime;
        return;
    }
STAT235TraditionalPlanTime = currentTime;
  var STAT235TraditionalPlanelement = document.getElementById("STAT235TraditionalPlan");
 if (!STAT235TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("STAT235TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("STAT235TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("STAT235TraditionalPlan")[i];
        if (STAT235TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(STAT235TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine13());
      that.addLine(getLine14());
      that.addLine(getLine37());
     that.highlightElement(STAT235TraditionalPlanelement, "Math");
     that.addToClicked("STAT235TraditionalPlan", "Math");
      STAT235TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine13());
      that.removeLine(getLine14());
      that.removeLine(getLine37());
     that.unHighlightElement(STAT235TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("STAT235TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(STAT235TraditionalPlanelement, category);
}
      STAT235TraditionalPlanflag=false
  }
};
$scope.ITSElectiveTraditionalPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ITSElectiveTraditionalPlan0Time <= 200) { 
        ITSElectiveTraditionalPlan0Time = currentTime;
        return;
    }
ITSElectiveTraditionalPlan0Time = currentTime;
  var ITSElectiveTraditionalPlan0element = document.getElementById("ITSElectiveTraditionalPlan0");
 if (!ITSElectiveTraditionalPlan0flag) {
     if (that.TraditionalPlanClickedMap.get("ITSElectiveTraditionalPlan0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ITSElectiveTraditionalPlan0").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ITSElectiveTraditionalPlan0")[i];
        if (ITSElectiveTraditionalPlan0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ITSElectiveTraditionalPlan0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ITSElectiveTraditionalPlan0element, "ITS");
     that.addToClicked("ITSElectiveTraditionalPlan0", "ITS");
      ITSElectiveTraditionalPlan0flag=true
  }
 else {
     that.unHighlightElement(ITSElectiveTraditionalPlan0element, "ITS");
     var category = that.removeFromClicked("ITSElectiveTraditionalPlan0", "ITS");
  if (category != "") { 
     that.highlightElement(ITSElectiveTraditionalPlan0element, category);
}
      ITSElectiveTraditionalPlan0flag=false
  }
};
$scope.CHE312TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE312TraditionalPlanTime <= 200) { 
        CHE312TraditionalPlanTime = currentTime;
        return;
    }
CHE312TraditionalPlanTime = currentTime;
  var CHE312TraditionalPlanelement = document.getElementById("CHE312TraditionalPlan");
 if (!CHE312TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CHE312TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CHE312TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CHE312TraditionalPlan")[i];
        if (CHE312TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE312TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine15());
      that.addLine(getLine16());
      that.addLine(getLine17());
      that.addLine(getLine18());
      that.addLine(getLine30());
     that.highlightElement(CHE312TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CHE312TraditionalPlan", "EngineeringSciences");
      CHE312TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine15());
      that.removeLine(getLine16());
      that.removeLine(getLine17());
      that.removeLine(getLine18());
      that.removeLine(getLine30());
     that.unHighlightElement(CHE312TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE312TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE312TraditionalPlanelement, category);
}
      CHE312TraditionalPlanflag=false
  }
};
$scope.CIVE270TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE270TraditionalPlanTime <= 200) { 
        CIVE270TraditionalPlanTime = currentTime;
        return;
    }
CIVE270TraditionalPlanTime = currentTime;
  var CIVE270TraditionalPlanelement = document.getElementById("CIVE270TraditionalPlan");
 if (!CIVE270TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CIVE270TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CIVE270TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CIVE270TraditionalPlan")[i];
        if (CIVE270TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE270TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine19());
      that.addLine(getLine20());
      that.addLine(getLine41());
     that.highlightElement(CIVE270TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE270TraditionalPlan", "EngineeringSciences");
      CIVE270TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine19());
      that.removeLine(getLine20());
      that.removeLine(getLine41());
     that.unHighlightElement(CIVE270TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE270TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE270TraditionalPlanelement, category);
}
      CIVE270TraditionalPlanflag=false
  }
};
$scope.CME265TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CME265TraditionalPlanTime <= 200) { 
        CME265TraditionalPlanTime = currentTime;
        return;
    }
CME265TraditionalPlanTime = currentTime;
  var CME265TraditionalPlanelement = document.getElementById("CME265TraditionalPlan");
 if (!CME265TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CME265TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CME265TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CME265TraditionalPlan")[i];
        if (CME265TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CME265TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine21());
      that.addLine(getLine22());
      that.addLine(getLine23());
      that.addLine(getLine24());
      that.addLine(getLine25());
      that.addLine(getLine48());
     that.highlightElement(CME265TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CME265TraditionalPlan", "EngineeringSciences");
      CME265TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine21());
      that.removeLine(getLine22());
      that.removeLine(getLine23());
      that.removeLine(getLine24());
      that.removeLine(getLine25());
      that.removeLine(getLine48());
     that.unHighlightElement(CME265TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CME265TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CME265TraditionalPlanelement, category);
}
      CME265TraditionalPlanflag=false
  }
};
$scope.MATH201TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH201TraditionalPlanTime <= 200) { 
        MATH201TraditionalPlanTime = currentTime;
        return;
    }
MATH201TraditionalPlanTime = currentTime;
  var MATH201TraditionalPlanelement = document.getElementById("MATH201TraditionalPlan");
 if (!MATH201TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATH201TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATH201TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATH201TraditionalPlan")[i];
        if (MATH201TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH201TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine18());
      that.addLine(getLine26());
      that.addLine(getLine29());
     that.highlightElement(MATH201TraditionalPlanelement, "Math");
     that.addToClicked("MATH201TraditionalPlan", "Math");
      MATH201TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine18());
      that.removeLine(getLine26());
      that.removeLine(getLine29());
     that.unHighlightElement(MATH201TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH201TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH201TraditionalPlanelement, category);
}
      MATH201TraditionalPlanflag=false
  }
};
$scope.MATE204TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE204TraditionalPlanTime <= 200) { 
        MATE204TraditionalPlanTime = currentTime;
        return;
    }
MATE204TraditionalPlanTime = currentTime;
  var MATE204TraditionalPlanelement = document.getElementById("MATE204TraditionalPlan");
 if (!MATE204TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATE204TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATE204TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATE204TraditionalPlan")[i];
        if (MATE204TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE204TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine27());
      that.addLine(getLine34());
      that.addLine(getLine35());
      that.addLine(getLine49());
     that.highlightElement(MATE204TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MATE204TraditionalPlan", "EngineeringSciences");
      MATE204TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine27());
      that.removeLine(getLine34());
      that.removeLine(getLine35());
      that.removeLine(getLine49());
     that.unHighlightElement(MATE204TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE204TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE204TraditionalPlanelement, category);
}
      MATE204TraditionalPlanflag=false
  }
};
$scope.MATE211TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE211TraditionalPlanTime <= 200) { 
        MATE211TraditionalPlanTime = currentTime;
        return;
    }
MATE211TraditionalPlanTime = currentTime;
  var MATE211TraditionalPlanelement = document.getElementById("MATE211TraditionalPlan");
 if (!MATE211TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATE211TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATE211TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATE211TraditionalPlan")[i];
        if (MATE211TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE211TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine28());
      that.addLine(getLine33());
      that.addLine(getLine36());
      that.addLine(getLine42());
     that.highlightElement(MATE211TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MATE211TraditionalPlan", "EngineeringSciences");
      MATE211TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine28());
      that.removeLine(getLine33());
      that.removeLine(getLine36());
      that.removeLine(getLine42());
     that.unHighlightElement(MATE211TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE211TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE211TraditionalPlanelement, category);
}
      MATE211TraditionalPlanflag=false
  }
};
$scope.CHE314TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE314TraditionalPlanTime <= 200) { 
        CHE314TraditionalPlanTime = currentTime;
        return;
    }
CHE314TraditionalPlanTime = currentTime;
  var CHE314TraditionalPlanelement = document.getElementById("CHE314TraditionalPlan");
 if (!CHE314TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CHE314TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CHE314TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CHE314TraditionalPlan")[i];
        if (CHE314TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE314TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine29());
      that.addLine(getLine30());
      that.addLine(getLine31());
      that.addLine(getLine45());
      that.addLine(getLine50());
     that.highlightElement(CHE314TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CHE314TraditionalPlan", "EngineeringSciences");
      CHE314TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine29());
      that.removeLine(getLine30());
      that.removeLine(getLine31());
      that.removeLine(getLine45());
      that.removeLine(getLine50());
     that.unHighlightElement(CHE314TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE314TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE314TraditionalPlanelement, category);
}
      CHE314TraditionalPlanflag=false
  }
};
$scope.CHE374TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE374TraditionalPlanTime <= 200) { 
        CHE374TraditionalPlanTime = currentTime;
        return;
    }
CHE374TraditionalPlanTime = currentTime;
  var CHE374TraditionalPlanelement = document.getElementById("CHE374TraditionalPlan");
 if (!CHE374TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CHE374TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CHE374TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CHE374TraditionalPlan")[i];
        if (CHE374TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE374TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine31());
      that.addLine(getLine32());
     that.highlightElement(CHE374TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CHE374TraditionalPlan", "EngineeringSciences");
      CHE374TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine31());
      that.removeLine(getLine32());
     that.unHighlightElement(CHE374TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE374TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE374TraditionalPlanelement, category);
}
      CHE374TraditionalPlanflag=false
  }
};
$scope.ComplementaryElectiveTraditionalPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveTraditionalPlan0Time <= 200) { 
        ComplementaryElectiveTraditionalPlan0Time = currentTime;
        return;
    }
ComplementaryElectiveTraditionalPlan0Time = currentTime;
  var ComplementaryElectiveTraditionalPlan0element = document.getElementById("ComplementaryElectiveTraditionalPlan0");
 if (!ComplementaryElectiveTraditionalPlan0flag) {
     if (that.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan0").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan0")[i];
        if (ComplementaryElectiveTraditionalPlan0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveTraditionalPlan0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveTraditionalPlan0element, "COMP");
     that.addToClicked("ComplementaryElectiveTraditionalPlan0", "COMP");
      ComplementaryElectiveTraditionalPlan0flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveTraditionalPlan0element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveTraditionalPlan0", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveTraditionalPlan0element, category);
}
      ComplementaryElectiveTraditionalPlan0flag=false
  }
};
$scope.MATE335TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE335TraditionalPlanTime <= 200) { 
        MATE335TraditionalPlanTime = currentTime;
        return;
    }
MATE335TraditionalPlanTime = currentTime;
  var MATE335TraditionalPlanelement = document.getElementById("MATE335TraditionalPlan");
 if (!MATE335TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATE335TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATE335TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATE335TraditionalPlan")[i];
        if (MATE335TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE335TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine33());
      that.addLine(getLine34());
      that.addLine(getLine38());
      that.addLine(getLine43());
     that.highlightElement(MATE335TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MATE335TraditionalPlan", "EngineeringSciences");
      MATE335TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine33());
      that.removeLine(getLine34());
      that.removeLine(getLine38());
      that.removeLine(getLine43());
     that.unHighlightElement(MATE335TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE335TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE335TraditionalPlanelement, category);
}
      MATE335TraditionalPlanflag=false
  }
};
$scope.MATE341TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE341TraditionalPlanTime <= 200) { 
        MATE341TraditionalPlanTime = currentTime;
        return;
    }
MATE341TraditionalPlanTime = currentTime;
  var MATE341TraditionalPlanelement = document.getElementById("MATE341TraditionalPlan");
 if (!MATE341TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATE341TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATE341TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATE341TraditionalPlan")[i];
        if (MATE341TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE341TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine35());
      that.addLine(getLine40());
     that.highlightElement(MATE341TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MATE341TraditionalPlan", "EngineeringSciences");
      MATE341TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine35());
      that.removeLine(getLine40());
     that.unHighlightElement(MATE341TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE341TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE341TraditionalPlanelement, category);
}
      MATE341TraditionalPlanflag=false
  }
};
$scope.MATE361TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE361TraditionalPlanTime <= 200) { 
        MATE361TraditionalPlanTime = currentTime;
        return;
    }
MATE361TraditionalPlanTime = currentTime;
  var MATE361TraditionalPlanelement = document.getElementById("MATE361TraditionalPlan");
 if (!MATE361TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATE361TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATE361TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATE361TraditionalPlan")[i];
        if (MATE361TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE361TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine36());
      that.addLine(getLine37());
      that.addLine(getLine44());
     that.highlightElement(MATE361TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MATE361TraditionalPlan", "EngineeringSciences");
      MATE361TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine36());
      that.removeLine(getLine37());
      that.removeLine(getLine44());
     that.unHighlightElement(MATE361TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE361TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE361TraditionalPlanelement, category);
}
      MATE361TraditionalPlanflag=false
  }
};
$scope.MATE336TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE336TraditionalPlanTime <= 200) { 
        MATE336TraditionalPlanTime = currentTime;
        return;
    }
MATE336TraditionalPlanTime = currentTime;
  var MATE336TraditionalPlanelement = document.getElementById("MATE336TraditionalPlan");
 if (!MATE336TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATE336TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATE336TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATE336TraditionalPlan")[i];
        if (MATE336TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE336TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine38());
      that.addLine(getLine46());
      that.addLine(getLine56());
      that.addLine(getLine60());
     that.highlightElement(MATE336TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MATE336TraditionalPlan", "EngineeringSciences");
      MATE336TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine38());
      that.removeLine(getLine46());
      that.removeLine(getLine56());
      that.removeLine(getLine60());
     that.unHighlightElement(MATE336TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE336TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE336TraditionalPlanelement, category);
}
      MATE336TraditionalPlanflag=false
  }
};
$scope.MATE345TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE345TraditionalPlanTime <= 200) { 
        MATE345TraditionalPlanTime = currentTime;
        return;
    }
MATE345TraditionalPlanTime = currentTime;
  var MATE345TraditionalPlanelement = document.getElementById("MATE345TraditionalPlan");
 if (!MATE345TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATE345TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATE345TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATE345TraditionalPlan")[i];
        if (MATE345TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE345TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine39());
      that.addLine(getLine40());
      that.addLine(getLine57());
      that.addLine(getLine61());
     that.highlightElement(MATE345TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MATE345TraditionalPlan", "EngineeringSciences");
      MATE345TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine39());
      that.removeLine(getLine40());
      that.removeLine(getLine57());
      that.removeLine(getLine61());
     that.unHighlightElement(MATE345TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE345TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE345TraditionalPlanelement, category);
}
      MATE345TraditionalPlanflag=false
  }
};
$scope.MATE351TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE351TraditionalPlanTime <= 200) { 
        MATE351TraditionalPlanTime = currentTime;
        return;
    }
MATE351TraditionalPlanTime = currentTime;
  var MATE351TraditionalPlanelement = document.getElementById("MATE351TraditionalPlan");
 if (!MATE351TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATE351TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATE351TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATE351TraditionalPlan")[i];
        if (MATE351TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE351TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine41());
      that.addLine(getLine42());
      that.addLine(getLine43());
      that.addLine(getLine47());
      that.addLine(getLine58());
     that.highlightElement(MATE351TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MATE351TraditionalPlan", "EngineeringSciences");
      MATE351TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine41());
      that.removeLine(getLine42());
      that.removeLine(getLine43());
      that.removeLine(getLine47());
      that.removeLine(getLine58());
     that.unHighlightElement(MATE351TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE351TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE351TraditionalPlanelement, category);
}
      MATE351TraditionalPlanflag=false
  }
};
$scope.MATE362TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE362TraditionalPlanTime <= 200) { 
        MATE362TraditionalPlanTime = currentTime;
        return;
    }
MATE362TraditionalPlanTime = currentTime;
  var MATE362TraditionalPlanelement = document.getElementById("MATE362TraditionalPlan");
 if (!MATE362TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATE362TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATE362TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATE362TraditionalPlan")[i];
        if (MATE362TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE362TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine44());
      that.addLine(getLine54());
     that.highlightElement(MATE362TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MATE362TraditionalPlan", "EngineeringSciences");
      MATE362TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine44());
      that.removeLine(getLine54());
     that.unHighlightElement(MATE362TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE362TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE362TraditionalPlanelement, category);
}
      MATE362TraditionalPlanflag=false
  }
};
$scope.MATE473TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE473TraditionalPlanTime <= 200) { 
        MATE473TraditionalPlanTime = currentTime;
        return;
    }
MATE473TraditionalPlanTime = currentTime;
  var MATE473TraditionalPlanelement = document.getElementById("MATE473TraditionalPlan");
 if (!MATE473TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATE473TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATE473TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATE473TraditionalPlan")[i];
        if (MATE473TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE473TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine45());
      that.addLine(getLine46());
      that.addLine(getLine47());
     that.highlightElement(MATE473TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MATE473TraditionalPlan", "EngineeringSciences");
      MATE473TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine45());
      that.removeLine(getLine46());
      that.removeLine(getLine47());
     that.unHighlightElement(MATE473TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE473TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE473TraditionalPlanelement, category);
}
      MATE473TraditionalPlanflag=false
  }
};
$scope.ComplementaryElectiveTraditionalPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveTraditionalPlan1Time <= 200) { 
        ComplementaryElectiveTraditionalPlan1Time = currentTime;
        return;
    }
ComplementaryElectiveTraditionalPlan1Time = currentTime;
  var ComplementaryElectiveTraditionalPlan1element = document.getElementById("ComplementaryElectiveTraditionalPlan1");
 if (!ComplementaryElectiveTraditionalPlan1flag) {
     if (that.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan1").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan1")[i];
        if (ComplementaryElectiveTraditionalPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveTraditionalPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveTraditionalPlan1element, "COMP");
     that.addToClicked("ComplementaryElectiveTraditionalPlan1", "COMP");
      ComplementaryElectiveTraditionalPlan1flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveTraditionalPlan1element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveTraditionalPlan1", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveTraditionalPlan1element, category);
}
      ComplementaryElectiveTraditionalPlan1flag=false
  }
};
$scope.CME481TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CME481TraditionalPlanTime <= 200) { 
        CME481TraditionalPlanTime = currentTime;
        return;
    }
CME481TraditionalPlanTime = currentTime;
  var CME481TraditionalPlanelement = document.getElementById("CME481TraditionalPlan");
 if (!CME481TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CME481TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CME481TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CME481TraditionalPlan")[i];
        if (CME481TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CME481TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(CME481TraditionalPlanelement, "EngineeringProfession");
     that.addToClicked("CME481TraditionalPlan", "EngineeringProfession");
      CME481TraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(CME481TraditionalPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("CME481TraditionalPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(CME481TraditionalPlanelement, category);
}
      CME481TraditionalPlanflag=false
  }
};
$scope.ENGM310TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM310TraditionalPlanTime <= 200) { 
        ENGM310TraditionalPlanTime = currentTime;
        return;
    }
ENGM310TraditionalPlanTime = currentTime;
  var ENGM310TraditionalPlanelement = document.getElementById("ENGM310TraditionalPlan");
 if (!ENGM310TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ENGM310TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ENGM310TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ENGM310TraditionalPlan")[i];
        if (ENGM310TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM310TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine51());
     that.highlightElement(ENGM310TraditionalPlanelement, "Other");
     that.addToClicked("ENGM310TraditionalPlan", "Other");
      ENGM310TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine51());
     that.unHighlightElement(ENGM310TraditionalPlanelement, "Other");
     var category = that.removeFromClicked("ENGM310TraditionalPlan", "Other");
  if (category != "") { 
     that.highlightElement(ENGM310TraditionalPlanelement, category);
}
      ENGM310TraditionalPlanflag=false
  }
};
$scope.ENGM401TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM401TraditionalPlanTime <= 200) { 
        ENGM401TraditionalPlanTime = currentTime;
        return;
    }
ENGM401TraditionalPlanTime = currentTime;
  var ENGM401TraditionalPlanelement = document.getElementById("ENGM401TraditionalPlan");
 if (!ENGM401TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ENGM401TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ENGM401TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ENGM401TraditionalPlan")[i];
        if (ENGM401TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM401TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine52());
     that.highlightElement(ENGM401TraditionalPlanelement, "Other");
     that.addToClicked("ENGM401TraditionalPlan", "Other");
      ENGM401TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine52());
     that.unHighlightElement(ENGM401TraditionalPlanelement, "Other");
     var category = that.removeFromClicked("ENGM401TraditionalPlan", "Other");
  if (category != "") { 
     that.highlightElement(ENGM401TraditionalPlanelement, category);
}
      ENGM401TraditionalPlanflag=false
  }
};
$scope.ENGG404TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG404TraditionalPlanTime <= 200) { 
        ENGG404TraditionalPlanTime = currentTime;
        return;
    }
ENGG404TraditionalPlanTime = currentTime;
  var ENGG404TraditionalPlanelement = document.getElementById("ENGG404TraditionalPlan");
 if (!ENGG404TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ENGG404TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ENGG404TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ENGG404TraditionalPlan")[i];
        if (ENGG404TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG404TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine53());
      that.addLine(getLine55());
     that.highlightElement(ENGG404TraditionalPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG404TraditionalPlan", "EngineeringProfession");
      ENGG404TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine53());
      that.removeLine(getLine55());
     that.unHighlightElement(ENGG404TraditionalPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG404TraditionalPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG404TraditionalPlanelement, category);
}
      ENGG404TraditionalPlanflag=false
  }
};
$scope.MATE464TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE464TraditionalPlanTime <= 200) { 
        MATE464TraditionalPlanTime = currentTime;
        return;
    }
MATE464TraditionalPlanTime = currentTime;
  var MATE464TraditionalPlanelement = document.getElementById("MATE464TraditionalPlan");
 if (!MATE464TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATE464TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATE464TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATE464TraditionalPlan")[i];
        if (MATE464TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE464TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine48());
      that.addLine(getLine49());
      that.addLine(getLine50());
      that.addLine(getLine51());
      that.addLine(getLine52());
      that.addLine(getLine53());
      that.addLine(getLine59());
     that.highlightElement(MATE464TraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("MATE464TraditionalPlan", "EngineeringDesign");
      MATE464TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine48());
      that.removeLine(getLine49());
      that.removeLine(getLine50());
      that.removeLine(getLine51());
      that.removeLine(getLine52());
      that.removeLine(getLine53());
      that.removeLine(getLine59());
     that.unHighlightElement(MATE464TraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("MATE464TraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MATE464TraditionalPlanelement, category);
}
      MATE464TraditionalPlanflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveTraditionalPlan0Time <= 200) { 
        ProgramTechnicalElectiveTraditionalPlan0Time = currentTime;
        return;
    }
ProgramTechnicalElectiveTraditionalPlan0Time = currentTime;
  var ProgramTechnicalElectiveTraditionalPlan0element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan0");
 if (!ProgramTechnicalElectiveTraditionalPlan0flag) {
     if (that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan0").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan0")[i];
        if (ProgramTechnicalElectiveTraditionalPlan0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlan0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlan0element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveTraditionalPlan0", "PROG");
      ProgramTechnicalElectiveTraditionalPlan0flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlan0element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan0", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlan0element, category);
}
      ProgramTechnicalElectiveTraditionalPlan0flag=false
  }
};
$scope.ComplementaryElectiveTraditionalPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveTraditionalPlan2Time <= 200) { 
        ComplementaryElectiveTraditionalPlan2Time = currentTime;
        return;
    }
ComplementaryElectiveTraditionalPlan2Time = currentTime;
  var ComplementaryElectiveTraditionalPlan2element = document.getElementById("ComplementaryElectiveTraditionalPlan2");
 if (!ComplementaryElectiveTraditionalPlan2flag) {
     if (that.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan2").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan2")[i];
        if (ComplementaryElectiveTraditionalPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveTraditionalPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveTraditionalPlan2element, "COMP");
     that.addToClicked("ComplementaryElectiveTraditionalPlan2", "COMP");
      ComplementaryElectiveTraditionalPlan2flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveTraditionalPlan2element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveTraditionalPlan2", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveTraditionalPlan2element, category);
}
      ComplementaryElectiveTraditionalPlan2flag=false
  }
};
$scope.ENGG400TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG400TraditionalPlanTime <= 200) { 
        ENGG400TraditionalPlanTime = currentTime;
        return;
    }
ENGG400TraditionalPlanTime = currentTime;
  var ENGG400TraditionalPlanelement = document.getElementById("ENGG400TraditionalPlan");
 if (!ENGG400TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ENGG400TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ENGG400TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ENGG400TraditionalPlan")[i];
        if (ENGG400TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG400TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG400TraditionalPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG400TraditionalPlan", "EngineeringProfession");
      ENGG400TraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(ENGG400TraditionalPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG400TraditionalPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG400TraditionalPlanelement, category);
}
      ENGG400TraditionalPlanflag=false
  }
};
$scope.MATE461TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE461TraditionalPlanTime <= 200) { 
        MATE461TraditionalPlanTime = currentTime;
        return;
    }
MATE461TraditionalPlanTime = currentTime;
  var MATE461TraditionalPlanelement = document.getElementById("MATE461TraditionalPlan");
 if (!MATE461TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATE461TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATE461TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATE461TraditionalPlan")[i];
        if (MATE461TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE461TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine54());
     that.highlightElement(MATE461TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MATE461TraditionalPlan", "EngineeringSciences");
      MATE461TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine54());
     that.unHighlightElement(MATE461TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE461TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE461TraditionalPlanelement, category);
}
      MATE461TraditionalPlanflag=false
  }
};
$scope.MATE465TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE465TraditionalPlanTime <= 200) { 
        MATE465TraditionalPlanTime = currentTime;
        return;
    }
MATE465TraditionalPlanTime = currentTime;
  var MATE465TraditionalPlanelement = document.getElementById("MATE465TraditionalPlan");
 if (!MATE465TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATE465TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATE465TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATE465TraditionalPlan")[i];
        if (MATE465TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE465TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine55());
      that.addLine(getLine56());
      that.addLine(getLine57());
      that.addLine(getLine58());
      that.addLine(getLine59());
     that.highlightElement(MATE465TraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("MATE465TraditionalPlan", "EngineeringDesign");
      MATE465TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine55());
      that.removeLine(getLine56());
      that.removeLine(getLine57());
      that.removeLine(getLine58());
      that.removeLine(getLine59());
     that.unHighlightElement(MATE465TraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("MATE465TraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MATE465TraditionalPlanelement, category);
}
      MATE465TraditionalPlanflag=false
  }
};
$scope.MATE474TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE474TraditionalPlanTime <= 200) { 
        MATE474TraditionalPlanTime = currentTime;
        return;
    }
MATE474TraditionalPlanTime = currentTime;
  var MATE474TraditionalPlanelement = document.getElementById("MATE474TraditionalPlan");
 if (!MATE474TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATE474TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATE474TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATE474TraditionalPlan")[i];
        if (MATE474TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE474TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine60());
      that.addLine(getLine61());
     that.highlightElement(MATE474TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MATE474TraditionalPlan", "EngineeringSciences");
      MATE474TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine60());
      that.removeLine(getLine61());
     that.unHighlightElement(MATE474TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE474TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE474TraditionalPlanelement, category);
}
      MATE474TraditionalPlanflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveTraditionalPlan1Time <= 200) { 
        ProgramTechnicalElectiveTraditionalPlan1Time = currentTime;
        return;
    }
ProgramTechnicalElectiveTraditionalPlan1Time = currentTime;
  var ProgramTechnicalElectiveTraditionalPlan1element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan1");
 if (!ProgramTechnicalElectiveTraditionalPlan1flag) {
     if (that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan1").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan1")[i];
        if (ProgramTechnicalElectiveTraditionalPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlan1element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveTraditionalPlan1", "PROG");
      ProgramTechnicalElectiveTraditionalPlan1flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlan1element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan1", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlan1element, category);
}
      ProgramTechnicalElectiveTraditionalPlan1flag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveTraditionalPlan2Time <= 200) { 
        ProgramTechnicalElectiveTraditionalPlan2Time = currentTime;
        return;
    }
ProgramTechnicalElectiveTraditionalPlan2Time = currentTime;
  var ProgramTechnicalElectiveTraditionalPlan2element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan2");
 if (!ProgramTechnicalElectiveTraditionalPlan2flag) {
     if (that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan2").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan2")[i];
        if (ProgramTechnicalElectiveTraditionalPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlan2element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveTraditionalPlan2", "PROG");
      ProgramTechnicalElectiveTraditionalPlan2flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlan2element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan2", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlan2element, category);
}
      ProgramTechnicalElectiveTraditionalPlan2flag=false
  }
};
$scope.CHEM103TraditionalPlanRCListener = function () {
  var element = document.getElementById("CHEM103TraditionalPlandesc");
 if (!CHEM103TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM103TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM103TraditionalPlanrflag=false
  }
};
$scope.ENGG100TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGG100TraditionalPlandesc");
 if (!ENGG100TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG100TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG100TraditionalPlanrflag=false
  }
};
$scope.ENGG130TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGG130TraditionalPlandesc");
 if (!ENGG130TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG130TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG130TraditionalPlanrflag=false
  }
};
$scope.ENGL199TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGL199TraditionalPlandesc");
 if (!ENGL199TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGL199TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGL199TraditionalPlanrflag=false
  }
};
$scope.MATH100TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH100TraditionalPlandesc");
 if (!MATH100TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH100TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH100TraditionalPlanrflag=false
  }
};
$scope.PHYS130TraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS130TraditionalPlandesc");
 if (!PHYS130TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS130TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS130TraditionalPlanrflag=false
  }
};
$scope.CHEM105TraditionalPlanRCListener = function () {
  var element = document.getElementById("CHEM105TraditionalPlandesc");
 if (!CHEM105TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM105TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM105TraditionalPlanrflag=false
  }
};
$scope.ENCMP100TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENCMP100TraditionalPlandesc");
 if (!ENCMP100TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENCMP100TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENCMP100TraditionalPlanrflag=false
  }
};
$scope.ENGG160TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGG160TraditionalPlandesc");
 if (!ENGG160TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG160TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG160TraditionalPlanrflag=false
  }
};
$scope.ENPH131TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENPH131TraditionalPlandesc");
 if (!ENPH131TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENPH131TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENPH131TraditionalPlanrflag=false
  }
};
$scope.MATH101TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH101TraditionalPlandesc");
 if (!MATH101TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH101TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH101TraditionalPlanrflag=false
  }
};
$scope.MATH102TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH102TraditionalPlandesc");
 if (!MATH102TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH102TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH102TraditionalPlanrflag=false
  }
};
$scope.CHE243TraditionalPlanRCListener = function () {
  var element = document.getElementById("CHE243TraditionalPlandesc");
 if (!CHE243TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE243TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE243TraditionalPlanrflag=false
  }
};
$scope.CHEM261TraditionalPlanRCListener = function () {
  var element = document.getElementById("CHEM261TraditionalPlandesc");
 if (!CHEM261TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM261TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM261TraditionalPlanrflag=false
  }
};
$scope.CME200TraditionalPlanRCListener = function () {
  var element = document.getElementById("CME200TraditionalPlandesc");
 if (!CME200TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CME200TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CME200TraditionalPlanrflag=false
  }
};
$scope.MATE202TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATE202TraditionalPlandesc");
 if (!MATE202TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE202TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE202TraditionalPlanrflag=false
  }
};
$scope.MATH209TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH209TraditionalPlandesc");
 if (!MATH209TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH209TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH209TraditionalPlanrflag=false
  }
};
$scope.STAT235TraditionalPlanRCListener = function () {
  var element = document.getElementById("STAT235TraditionalPlandesc");
 if (!STAT235TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      STAT235TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      STAT235TraditionalPlanrflag=false
  }
};
$scope.ITSElectiveTraditionalPlan0RCListener = function () {
  var element = document.getElementById("ITSElectiveTraditionalPlan0desc");
 if (!ITSElectiveTraditionalPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ITSElectiveTraditionalPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ITSElectiveTraditionalPlan0rflag=false
  }
};
$scope.CHE312TraditionalPlanRCListener = function () {
  var element = document.getElementById("CHE312TraditionalPlandesc");
 if (!CHE312TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE312TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE312TraditionalPlanrflag=false
  }
};
$scope.CIVE270TraditionalPlanRCListener = function () {
  var element = document.getElementById("CIVE270TraditionalPlandesc");
 if (!CIVE270TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE270TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE270TraditionalPlanrflag=false
  }
};
$scope.CME265TraditionalPlanRCListener = function () {
  var element = document.getElementById("CME265TraditionalPlandesc");
 if (!CME265TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CME265TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CME265TraditionalPlanrflag=false
  }
};
$scope.MATH201TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH201TraditionalPlandesc");
 if (!MATH201TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH201TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH201TraditionalPlanrflag=false
  }
};
$scope.MATE204TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATE204TraditionalPlandesc");
 if (!MATE204TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE204TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE204TraditionalPlanrflag=false
  }
};
$scope.MATE211TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATE211TraditionalPlandesc");
 if (!MATE211TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE211TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE211TraditionalPlanrflag=false
  }
};
$scope.CHE314TraditionalPlanRCListener = function () {
  var element = document.getElementById("CHE314TraditionalPlandesc");
 if (!CHE314TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE314TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE314TraditionalPlanrflag=false
  }
};
$scope.CHE374TraditionalPlanRCListener = function () {
  var element = document.getElementById("CHE374TraditionalPlandesc");
 if (!CHE374TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE374TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE374TraditionalPlanrflag=false
  }
};
$scope.ComplementaryElectiveTraditionalPlan0RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveTraditionalPlan0desc");
 if (!ComplementaryElectiveTraditionalPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveTraditionalPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveTraditionalPlan0rflag=false
  }
};
$scope.MATE335TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATE335TraditionalPlandesc");
 if (!MATE335TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE335TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE335TraditionalPlanrflag=false
  }
};
$scope.MATE341TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATE341TraditionalPlandesc");
 if (!MATE341TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE341TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE341TraditionalPlanrflag=false
  }
};
$scope.MATE361TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATE361TraditionalPlandesc");
 if (!MATE361TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE361TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE361TraditionalPlanrflag=false
  }
};
$scope.MATE336TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATE336TraditionalPlandesc");
 if (!MATE336TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE336TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE336TraditionalPlanrflag=false
  }
};
$scope.MATE345TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATE345TraditionalPlandesc");
 if (!MATE345TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE345TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE345TraditionalPlanrflag=false
  }
};
$scope.MATE351TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATE351TraditionalPlandesc");
 if (!MATE351TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE351TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE351TraditionalPlanrflag=false
  }
};
$scope.MATE362TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATE362TraditionalPlandesc");
 if (!MATE362TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE362TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE362TraditionalPlanrflag=false
  }
};
$scope.MATE473TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATE473TraditionalPlandesc");
 if (!MATE473TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE473TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE473TraditionalPlanrflag=false
  }
};
$scope.ComplementaryElectiveTraditionalPlan1RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveTraditionalPlan1desc");
 if (!ComplementaryElectiveTraditionalPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveTraditionalPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveTraditionalPlan1rflag=false
  }
};
$scope.CME481TraditionalPlanRCListener = function () {
  var element = document.getElementById("CME481TraditionalPlandesc");
 if (!CME481TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CME481TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CME481TraditionalPlanrflag=false
  }
};
$scope.ENGM310TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGM310TraditionalPlandesc");
 if (!ENGM310TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM310TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM310TraditionalPlanrflag=false
  }
};
$scope.ENGM401TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGM401TraditionalPlandesc");
 if (!ENGM401TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM401TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM401TraditionalPlanrflag=false
  }
};
$scope.ENGG404TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGG404TraditionalPlandesc");
 if (!ENGG404TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG404TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG404TraditionalPlanrflag=false
  }
};
$scope.MATE464TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATE464TraditionalPlandesc");
 if (!MATE464TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE464TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE464TraditionalPlanrflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan0RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan0desc");
 if (!ProgramTechnicalElectiveTraditionalPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveTraditionalPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveTraditionalPlan0rflag=false
  }
};
$scope.ComplementaryElectiveTraditionalPlan2RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveTraditionalPlan2desc");
 if (!ComplementaryElectiveTraditionalPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveTraditionalPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveTraditionalPlan2rflag=false
  }
};
$scope.ENGG400TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGG400TraditionalPlandesc");
 if (!ENGG400TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG400TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG400TraditionalPlanrflag=false
  }
};
$scope.MATE461TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATE461TraditionalPlandesc");
 if (!MATE461TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE461TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE461TraditionalPlanrflag=false
  }
};
$scope.MATE465TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATE465TraditionalPlandesc");
 if (!MATE465TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE465TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE465TraditionalPlanrflag=false
  }
};
$scope.MATE474TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATE474TraditionalPlandesc");
 if (!MATE474TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE474TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE474TraditionalPlanrflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan1RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan1desc");
 if (!ProgramTechnicalElectiveTraditionalPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveTraditionalPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveTraditionalPlan1rflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan2RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan2desc");
 if (!ProgramTechnicalElectiveTraditionalPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveTraditionalPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveTraditionalPlan2rflag=false
  }
};
  var CHEM103CoopPlanflag = false;
  var CHEM103CoopPlanrflag = false;
 var CHEM103CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CHEM103CoopPlan", []);
  var ENGG100CoopPlanflag = false;
  var ENGG100CoopPlanrflag = false;
 var ENGG100CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGG100CoopPlan", []);
  var ENGG130CoopPlanflag = false;
  var ENGG130CoopPlanrflag = false;
 var ENGG130CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGG130CoopPlan", []);
  var ENGL199CoopPlanflag = false;
  var ENGL199CoopPlanrflag = false;
 var ENGL199CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGL199CoopPlan", []);
  var MATH100CoopPlanflag = false;
  var MATH100CoopPlanrflag = false;
 var MATH100CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATH100CoopPlan", []);
  var PHYS130CoopPlanflag = false;
  var PHYS130CoopPlanrflag = false;
 var PHYS130CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PHYS130CoopPlan", []);
  var CHEM105CoopPlanflag = false;
  var CHEM105CoopPlanrflag = false;
 var CHEM105CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CHEM105CoopPlan", []);
  var ENCMP100CoopPlanflag = false;
  var ENCMP100CoopPlanrflag = false;
 var ENCMP100CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENCMP100CoopPlan", []);
  var ENGG160CoopPlanflag = false;
  var ENGG160CoopPlanrflag = false;
 var ENGG160CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGG160CoopPlan", []);
  var ENPH131CoopPlanflag = false;
  var ENPH131CoopPlanrflag = false;
 var ENPH131CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENPH131CoopPlan", []);
  var MATH101CoopPlanflag = false;
  var MATH101CoopPlanrflag = false;
 var MATH101CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATH101CoopPlan", []);
  var MATH102CoopPlanflag = false;
  var MATH102CoopPlanrflag = false;
 var MATH102CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATH102CoopPlan", []);
  var CHE243CoopPlanflag = false;
  var CHE243CoopPlanrflag = false;
 var CHE243CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CHE243CoopPlan", []);
  var CHEM261CoopPlanflag = false;
  var CHEM261CoopPlanrflag = false;
 var CHEM261CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CHEM261CoopPlan", []);
  var CME200CoopPlanflag = false;
  var CME200CoopPlanrflag = false;
 var CME200CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CME200CoopPlan", []);
  var ENGG299CoopPlanflag = false;
  var ENGG299CoopPlanrflag = false;
 var ENGG299CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGG299CoopPlan", []);
  var MATE202CoopPlanflag = false;
  var MATE202CoopPlanrflag = false;
 var MATE202CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATE202CoopPlan", []);
  var MATH209CoopPlanflag = false;
  var MATH209CoopPlanrflag = false;
 var MATH209CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATH209CoopPlan", []);
  var STAT235CoopPlanflag = false;
  var STAT235CoopPlanrflag = false;
 var STAT235CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("STAT235CoopPlan", []);
  var CIVE270CoopPlanflag = false;
  var CIVE270CoopPlanrflag = false;
 var CIVE270CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CIVE270CoopPlan", []);
  var CHE312CoopPlanflag = false;
  var CHE312CoopPlanrflag = false;
 var CHE312CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CHE312CoopPlan", []);
  var CME265CoopPlanflag = false;
  var CME265CoopPlanrflag = false;
 var CME265CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CME265CoopPlan", []);
  var MATH201CoopPlanflag = false;
  var MATH201CoopPlanrflag = false;
 var MATH201CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATH201CoopPlan", []);
  var MATE204CoopPlanflag = false;
  var MATE204CoopPlanrflag = false;
 var MATE204CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATE204CoopPlan", []);
  var MATE211CoopPlanflag = false;
  var MATE211CoopPlanrflag = false;
 var MATE211CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATE211CoopPlan", []);
  var WKEXP901CoopPlanflag = false;
  var WKEXP901CoopPlanrflag = false;
 var WKEXP901CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("WKEXP901CoopPlan", []);
  var ComplementaryElectiveCoopPlan0flag = false;
  var ComplementaryElectiveCoopPlan0rflag = false;
 var ComplementaryElectiveCoopPlan0Time = new Date().getTime();
this.CoopPlanClickedMap.set("ComplementaryElectiveCoopPlan0", []);
  var CHE314CoopPlanflag = false;
  var CHE314CoopPlanrflag = false;
 var CHE314CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CHE314CoopPlan", []);
  var CHE374CoopPlanflag = false;
  var CHE374CoopPlanrflag = false;
 var CHE374CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CHE374CoopPlan", []);
  var MATE335CoopPlanflag = false;
  var MATE335CoopPlanrflag = false;
 var MATE335CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATE335CoopPlan", []);
  var MATE341CoopPlanflag = false;
  var MATE341CoopPlanrflag = false;
 var MATE341CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATE341CoopPlan", []);
  var MATE361CoopPlanflag = false;
  var MATE361CoopPlanrflag = false;
 var MATE361CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATE361CoopPlan", []);
  var WKEXP902CoopPlanflag = false;
  var WKEXP902CoopPlanrflag = false;
 var WKEXP902CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("WKEXP902CoopPlan", []);
  var WKEXP903CoopPlanflag = false;
  var WKEXP903CoopPlanrflag = false;
 var WKEXP903CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("WKEXP903CoopPlan", []);
  var ENGM310CoopPlanflag = false;
  var ENGM310CoopPlanrflag = false;
 var ENGM310CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGM310CoopPlan", []);
  var ENGM401CoopPlanflag = false;
  var ENGM401CoopPlanrflag = false;
 var ENGM401CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGM401CoopPlan", []);
  var ENGG404CoopPlanflag = false;
  var ENGG404CoopPlanrflag = false;
 var ENGG404CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGG404CoopPlan", []);
  var MATE464CoopPlanflag = false;
  var MATE464CoopPlanrflag = false;
 var MATE464CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATE464CoopPlan", []);
  var ITSElectiveCoopPlan0flag = false;
  var ITSElectiveCoopPlan0rflag = false;
 var ITSElectiveCoopPlan0Time = new Date().getTime();
this.CoopPlanClickedMap.set("ITSElectiveCoopPlan0", []);
  var ProgramTechnicalElectiveCoopPlan0flag = false;
  var ProgramTechnicalElectiveCoopPlan0rflag = false;
 var ProgramTechnicalElectiveCoopPlan0Time = new Date().getTime();
this.CoopPlanClickedMap.set("ProgramTechnicalElectiveCoopPlan0", []);
  var ComplementaryElectiveCoopPlan1flag = false;
  var ComplementaryElectiveCoopPlan1rflag = false;
 var ComplementaryElectiveCoopPlan1Time = new Date().getTime();
this.CoopPlanClickedMap.set("ComplementaryElectiveCoopPlan1", []);
  var CME481CoopPlanflag = false;
  var CME481CoopPlanrflag = false;
 var CME481CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CME481CoopPlan", []);
  var MATE345CoopPlanflag = false;
  var MATE345CoopPlanrflag = false;
 var MATE345CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATE345CoopPlan", []);
  var MATE336CoopPlanflag = false;
  var MATE336CoopPlanrflag = false;
 var MATE336CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATE336CoopPlan", []);
  var MATE351CoopPlanflag = false;
  var MATE351CoopPlanrflag = false;
 var MATE351CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATE351CoopPlan", []);
  var MATE362CoopPlanflag = false;
  var MATE362CoopPlanrflag = false;
 var MATE362CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATE362CoopPlan", []);
  var MATE473CoopPlanflag = false;
  var MATE473CoopPlanrflag = false;
 var MATE473CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATE473CoopPlan", []);
  var ComplementaryElectiveCoopPlan2flag = false;
  var ComplementaryElectiveCoopPlan2rflag = false;
 var ComplementaryElectiveCoopPlan2Time = new Date().getTime();
this.CoopPlanClickedMap.set("ComplementaryElectiveCoopPlan2", []);
  var WKEXP904CoopPlanflag = false;
  var WKEXP904CoopPlanrflag = false;
 var WKEXP904CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("WKEXP904CoopPlan", []);
  var WKEXP905CoopPlanflag = false;
  var WKEXP905CoopPlanrflag = false;
 var WKEXP905CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("WKEXP905CoopPlan", []);
  var ENGG400CoopPlanflag = false;
  var ENGG400CoopPlanrflag = false;
 var ENGG400CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGG400CoopPlan", []);
  var MATE461CoopPlanflag = false;
  var MATE461CoopPlanrflag = false;
 var MATE461CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATE461CoopPlan", []);
  var MATE465CoopPlanflag = false;
  var MATE465CoopPlanrflag = false;
 var MATE465CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATE465CoopPlan", []);
  var MATE474CoopPlanflag = false;
  var MATE474CoopPlanrflag = false;
 var MATE474CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATE474CoopPlan", []);
  var ProgramTechnicalElectiveCoopPlan1flag = false;
  var ProgramTechnicalElectiveCoopPlan1rflag = false;
 var ProgramTechnicalElectiveCoopPlan1Time = new Date().getTime();
this.CoopPlanClickedMap.set("ProgramTechnicalElectiveCoopPlan1", []);
  var ProgramTechnicalElectiveCoopPlan2flag = false;
  var ProgramTechnicalElectiveCoopPlan2rflag = false;
 var ProgramTechnicalElectiveCoopPlan2Time = new Date().getTime();
this.CoopPlanClickedMap.set("ProgramTechnicalElectiveCoopPlan2", []);
$scope.CHEM103CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103CoopPlanTime <= 200) { 
        CHEM103CoopPlanTime = currentTime;
        return;
    }
CHEM103CoopPlanTime = currentTime;
  var CHEM103CoopPlanelement = document.getElementById("CHEM103CoopPlan");
 if (!CHEM103CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CHEM103CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CHEM103CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CHEM103CoopPlan")[i];
        if (CHEM103CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM103CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine64());
     that.highlightElement(CHEM103CoopPlanelement, "NaturalSciences");
     that.addToClicked("CHEM103CoopPlan", "NaturalSciences");
      CHEM103CoopPlanflag=true
  }
 else {
      that.removeLine(getLine64());
     that.unHighlightElement(CHEM103CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM103CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM103CoopPlanelement, category);
}
      CHEM103CoopPlanflag=false
  }
};
$scope.ENGG100CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG100CoopPlanTime <= 200) { 
        ENGG100CoopPlanTime = currentTime;
        return;
    }
ENGG100CoopPlanTime = currentTime;
  var ENGG100CoopPlanelement = document.getElementById("ENGG100CoopPlan");
 if (!ENGG100CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ENGG100CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENGG100CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENGG100CoopPlan")[i];
        if (ENGG100CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG100CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG100CoopPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG100CoopPlan", "EngineeringProfession");
      ENGG100CoopPlanflag=true
  }
 else {
     that.unHighlightElement(ENGG100CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG100CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG100CoopPlanelement, category);
}
      ENGG100CoopPlanflag=false
  }
};
$scope.ENGG130CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG130CoopPlanTime <= 200) { 
        ENGG130CoopPlanTime = currentTime;
        return;
    }
ENGG130CoopPlanTime = currentTime;
  var ENGG130CoopPlanelement = document.getElementById("ENGG130CoopPlan");
 if (!ENGG130CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ENGG130CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENGG130CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENGG130CoopPlan")[i];
        if (ENGG130CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG130CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine62());
      that.addLine(getLine67());
      that.addLine(getLine77());
     that.highlightElement(ENGG130CoopPlanelement, "NaturalSciences");
     that.addToClicked("ENGG130CoopPlan", "NaturalSciences");
      ENGG130CoopPlanflag=true
  }
 else {
      that.removeLine(getLine62());
      that.removeLine(getLine67());
      that.removeLine(getLine77());
     that.unHighlightElement(ENGG130CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("ENGG130CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENGG130CoopPlanelement, category);
}
      ENGG130CoopPlanflag=false
  }
};
$scope.ENGL199CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGL199CoopPlanTime <= 200) { 
        ENGL199CoopPlanTime = currentTime;
        return;
    }
ENGL199CoopPlanTime = currentTime;
  var ENGL199CoopPlanelement = document.getElementById("ENGL199CoopPlan");
 if (!ENGL199CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ENGL199CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENGL199CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENGL199CoopPlan")[i];
        if (ENGL199CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGL199CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine65());
     that.highlightElement(ENGL199CoopPlanelement, "Other");
     that.addToClicked("ENGL199CoopPlan", "Other");
      ENGL199CoopPlanflag=true
  }
 else {
      that.removeLine(getLine65());
     that.unHighlightElement(ENGL199CoopPlanelement, "Other");
     var category = that.removeFromClicked("ENGL199CoopPlan", "Other");
  if (category != "") { 
     that.highlightElement(ENGL199CoopPlanelement, category);
}
      ENGL199CoopPlanflag=false
  }
};
$scope.MATH100CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH100CoopPlanTime <= 200) { 
        MATH100CoopPlanTime = currentTime;
        return;
    }
MATH100CoopPlanTime = currentTime;
  var MATH100CoopPlanelement = document.getElementById("MATH100CoopPlan");
 if (!MATH100CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MATH100CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATH100CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATH100CoopPlan")[i];
        if (MATH100CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH100CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine62());
      that.addLine(getLine63());
      that.addLine(getLine66());
      that.addLine(getLine69());
      that.addLine(getLine70());
      that.addLine(getLine75());
     that.highlightElement(MATH100CoopPlanelement, "Math");
     that.addToClicked("MATH100CoopPlan", "Math");
      MATH100CoopPlanflag=true
  }
 else {
      that.removeLine(getLine62());
      that.removeLine(getLine63());
      that.removeLine(getLine66());
      that.removeLine(getLine69());
      that.removeLine(getLine70());
      that.removeLine(getLine75());
     that.unHighlightElement(MATH100CoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH100CoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH100CoopPlanelement, category);
}
      MATH100CoopPlanflag=false
  }
};
$scope.PHYS130CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS130CoopPlanTime <= 200) { 
        PHYS130CoopPlanTime = currentTime;
        return;
    }
PHYS130CoopPlanTime = currentTime;
  var PHYS130CoopPlanelement = document.getElementById("PHYS130CoopPlan");
 if (!PHYS130CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("PHYS130CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PHYS130CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PHYS130CoopPlan")[i];
        if (PHYS130CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS130CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine63());
     that.highlightElement(PHYS130CoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS130CoopPlan", "NaturalSciences");
      PHYS130CoopPlanflag=true
  }
 else {
      that.removeLine(getLine63());
     that.unHighlightElement(PHYS130CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS130CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS130CoopPlanelement, category);
}
      PHYS130CoopPlanflag=false
  }
};
$scope.CHEM105CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM105CoopPlanTime <= 200) { 
        CHEM105CoopPlanTime = currentTime;
        return;
    }
CHEM105CoopPlanTime = currentTime;
  var CHEM105CoopPlanelement = document.getElementById("CHEM105CoopPlan");
 if (!CHEM105CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CHEM105CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CHEM105CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CHEM105CoopPlan")[i];
        if (CHEM105CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM105CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine64());
      that.addLine(getLine72());
      that.addLine(getLine85());
     that.highlightElement(CHEM105CoopPlanelement, "NaturalSciences");
     that.addToClicked("CHEM105CoopPlan", "NaturalSciences");
      CHEM105CoopPlanflag=true
  }
 else {
      that.removeLine(getLine64());
      that.removeLine(getLine72());
      that.removeLine(getLine85());
     that.unHighlightElement(CHEM105CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM105CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM105CoopPlanelement, category);
}
      CHEM105CoopPlanflag=false
  }
};
$scope.ENCMP100CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENCMP100CoopPlanTime <= 200) { 
        ENCMP100CoopPlanTime = currentTime;
        return;
    }
ENCMP100CoopPlanTime = currentTime;
  var ENCMP100CoopPlanelement = document.getElementById("ENCMP100CoopPlan");
 if (!ENCMP100CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ENCMP100CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENCMP100CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENCMP100CoopPlan")[i];
        if (ENCMP100CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENCMP100CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine83());
      that.addLine(getLine95());
     that.highlightElement(ENCMP100CoopPlanelement, "NaturalSciences");
     that.addToClicked("ENCMP100CoopPlan", "NaturalSciences");
      ENCMP100CoopPlanflag=true
  }
 else {
      that.removeLine(getLine83());
      that.removeLine(getLine95());
     that.unHighlightElement(ENCMP100CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("ENCMP100CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENCMP100CoopPlanelement, category);
}
      ENCMP100CoopPlanflag=false
  }
};
$scope.ENGG160CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG160CoopPlanTime <= 200) { 
        ENGG160CoopPlanTime = currentTime;
        return;
    }
ENGG160CoopPlanTime = currentTime;
  var ENGG160CoopPlanelement = document.getElementById("ENGG160CoopPlan");
 if (!ENGG160CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ENGG160CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENGG160CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENGG160CoopPlan")[i];
        if (ENGG160CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG160CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine65());
     that.highlightElement(ENGG160CoopPlanelement, "EngineeringDesign");
     that.addToClicked("ENGG160CoopPlan", "EngineeringDesign");
      ENGG160CoopPlanflag=true
  }
 else {
      that.removeLine(getLine65());
     that.unHighlightElement(ENGG160CoopPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ENGG160CoopPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ENGG160CoopPlanelement, category);
}
      ENGG160CoopPlanflag=false
  }
};
$scope.ENPH131CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENPH131CoopPlanTime <= 200) { 
        ENPH131CoopPlanTime = currentTime;
        return;
    }
ENPH131CoopPlanTime = currentTime;
  var ENPH131CoopPlanelement = document.getElementById("ENPH131CoopPlan");
 if (!ENPH131CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ENPH131CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENPH131CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENPH131CoopPlan")[i];
        if (ENPH131CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENPH131CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine66());
      that.addLine(getLine67());
      that.addLine(getLine68());
      that.addLine(getLine80());
     that.highlightElement(ENPH131CoopPlanelement, "NaturalSciences");
     that.addToClicked("ENPH131CoopPlan", "NaturalSciences");
      ENPH131CoopPlanflag=true
  }
 else {
      that.removeLine(getLine66());
      that.removeLine(getLine67());
      that.removeLine(getLine68());
      that.removeLine(getLine80());
     that.unHighlightElement(ENPH131CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("ENPH131CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENPH131CoopPlanelement, category);
}
      ENPH131CoopPlanflag=false
  }
};
$scope.MATH101CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH101CoopPlanTime <= 200) { 
        MATH101CoopPlanTime = currentTime;
        return;
    }
MATH101CoopPlanTime = currentTime;
  var MATH101CoopPlanelement = document.getElementById("MATH101CoopPlan");
 if (!MATH101CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MATH101CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATH101CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATH101CoopPlan")[i];
        if (MATH101CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH101CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine68());
      that.addLine(getLine69());
      that.addLine(getLine71());
      that.addLine(getLine73());
      that.addLine(getLine76());
      that.addLine(getLine78());
     that.highlightElement(MATH101CoopPlanelement, "Math");
     that.addToClicked("MATH101CoopPlan", "Math");
      MATH101CoopPlanflag=true
  }
 else {
      that.removeLine(getLine68());
      that.removeLine(getLine69());
      that.removeLine(getLine71());
      that.removeLine(getLine73());
      that.removeLine(getLine76());
      that.removeLine(getLine78());
     that.unHighlightElement(MATH101CoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH101CoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH101CoopPlanelement, category);
}
      MATH101CoopPlanflag=false
  }
};
$scope.MATH102CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH102CoopPlanTime <= 200) { 
        MATH102CoopPlanTime = currentTime;
        return;
    }
MATH102CoopPlanTime = currentTime;
  var MATH102CoopPlanelement = document.getElementById("MATH102CoopPlan");
 if (!MATH102CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MATH102CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATH102CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATH102CoopPlan")[i];
        if (MATH102CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH102CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine70());
      that.addLine(getLine74());
      that.addLine(getLine84());
     that.highlightElement(MATH102CoopPlanelement, "Math");
     that.addToClicked("MATH102CoopPlan", "Math");
      MATH102CoopPlanflag=true
  }
 else {
      that.removeLine(getLine70());
      that.removeLine(getLine74());
      that.removeLine(getLine84());
     that.unHighlightElement(MATH102CoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH102CoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH102CoopPlanelement, category);
}
      MATH102CoopPlanflag=false
  }
};
$scope.CHE243CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE243CoopPlanTime <= 200) { 
        CHE243CoopPlanTime = currentTime;
        return;
    }
CHE243CoopPlanTime = currentTime;
  var CHE243CoopPlanelement = document.getElementById("CHE243CoopPlan");
 if (!CHE243CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CHE243CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CHE243CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CHE243CoopPlan")[i];
        if (CHE243CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE243CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine71());
      that.addLine(getLine79());
      that.addLine(getLine86());
      that.addLine(getLine89());
     that.highlightElement(CHE243CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CHE243CoopPlan", "EngineeringSciences");
      CHE243CoopPlanflag=true
  }
 else {
      that.removeLine(getLine71());
      that.removeLine(getLine79());
      that.removeLine(getLine86());
      that.removeLine(getLine89());
     that.unHighlightElement(CHE243CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE243CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE243CoopPlanelement, category);
}
      CHE243CoopPlanflag=false
  }
};
$scope.CHEM261CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM261CoopPlanTime <= 200) { 
        CHEM261CoopPlanTime = currentTime;
        return;
    }
CHEM261CoopPlanTime = currentTime;
  var CHEM261CoopPlanelement = document.getElementById("CHEM261CoopPlan");
 if (!CHEM261CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CHEM261CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CHEM261CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CHEM261CoopPlan")[i];
        if (CHEM261CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM261CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(CHEM261CoopPlanelement, "NaturalSciences");
     that.addToClicked("CHEM261CoopPlan", "NaturalSciences");
      CHEM261CoopPlanflag=true
  }
 else {
     that.unHighlightElement(CHEM261CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM261CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM261CoopPlanelement, category);
}
      CHEM261CoopPlanflag=false
  }
};
$scope.CME200CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CME200CoopPlanTime <= 200) { 
        CME200CoopPlanTime = currentTime;
        return;
    }
CME200CoopPlanTime = currentTime;
  var CME200CoopPlanelement = document.getElementById("CME200CoopPlan");
 if (!CME200CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CME200CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CME200CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CME200CoopPlan")[i];
        if (CME200CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CME200CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(CME200CoopPlanelement, "EngineeringProfession");
     that.addToClicked("CME200CoopPlan", "EngineeringProfession");
      CME200CoopPlanflag=true
  }
 else {
     that.unHighlightElement(CME200CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("CME200CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(CME200CoopPlanelement, category);
}
      CME200CoopPlanflag=false
  }
};
$scope.ENGG299CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG299CoopPlanTime <= 200) { 
        ENGG299CoopPlanTime = currentTime;
        return;
    }
ENGG299CoopPlanTime = currentTime;
  var ENGG299CoopPlanelement = document.getElementById("ENGG299CoopPlan");
 if (!ENGG299CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ENGG299CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENGG299CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENGG299CoopPlan")[i];
        if (ENGG299CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG299CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine91());
     that.highlightElement(ENGG299CoopPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG299CoopPlan", "EngineeringProfession");
      ENGG299CoopPlanflag=true
  }
 else {
      that.removeLine(getLine91());
     that.unHighlightElement(ENGG299CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG299CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG299CoopPlanelement, category);
}
      ENGG299CoopPlanflag=false
  }
};
$scope.MATE202CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE202CoopPlanTime <= 200) { 
        MATE202CoopPlanTime = currentTime;
        return;
    }
MATE202CoopPlanTime = currentTime;
  var MATE202CoopPlanelement = document.getElementById("MATE202CoopPlan");
 if (!MATE202CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MATE202CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATE202CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATE202CoopPlan")[i];
        if (MATE202CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE202CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine72());
      that.addLine(getLine90());
      that.addLine(getLine109());
     that.highlightElement(MATE202CoopPlanelement, "EngineeringSciences");
     that.addToClicked("MATE202CoopPlan", "EngineeringSciences");
      MATE202CoopPlanflag=true
  }
 else {
      that.removeLine(getLine72());
      that.removeLine(getLine90());
      that.removeLine(getLine109());
     that.unHighlightElement(MATE202CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE202CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE202CoopPlanelement, category);
}
      MATE202CoopPlanflag=false
  }
};
$scope.MATH209CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH209CoopPlanTime <= 200) { 
        MATH209CoopPlanTime = currentTime;
        return;
    }
MATH209CoopPlanTime = currentTime;
  var MATH209CoopPlanelement = document.getElementById("MATH209CoopPlan");
 if (!MATH209CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MATH209CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATH209CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATH209CoopPlan")[i];
        if (MATH209CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH209CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine73());
      that.addLine(getLine74());
      that.addLine(getLine81());
      that.addLine(getLine87());
      that.addLine(getLine88());
     that.highlightElement(MATH209CoopPlanelement, "Math");
     that.addToClicked("MATH209CoopPlan", "Math");
      MATH209CoopPlanflag=true
  }
 else {
      that.removeLine(getLine73());
      that.removeLine(getLine74());
      that.removeLine(getLine81());
      that.removeLine(getLine87());
      that.removeLine(getLine88());
     that.unHighlightElement(MATH209CoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH209CoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH209CoopPlanelement, category);
}
      MATH209CoopPlanflag=false
  }
};
$scope.STAT235CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - STAT235CoopPlanTime <= 200) { 
        STAT235CoopPlanTime = currentTime;
        return;
    }
STAT235CoopPlanTime = currentTime;
  var STAT235CoopPlanelement = document.getElementById("STAT235CoopPlan");
 if (!STAT235CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("STAT235CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("STAT235CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("STAT235CoopPlan")[i];
        if (STAT235CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(STAT235CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine75());
      that.addLine(getLine76());
      that.addLine(getLine100());
     that.highlightElement(STAT235CoopPlanelement, "Math");
     that.addToClicked("STAT235CoopPlan", "Math");
      STAT235CoopPlanflag=true
  }
 else {
      that.removeLine(getLine75());
      that.removeLine(getLine76());
      that.removeLine(getLine100());
     that.unHighlightElement(STAT235CoopPlanelement, "Math");
     var category = that.removeFromClicked("STAT235CoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(STAT235CoopPlanelement, category);
}
      STAT235CoopPlanflag=false
  }
};
$scope.CIVE270CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE270CoopPlanTime <= 200) { 
        CIVE270CoopPlanTime = currentTime;
        return;
    }
CIVE270CoopPlanTime = currentTime;
  var CIVE270CoopPlanelement = document.getElementById("CIVE270CoopPlan");
 if (!CIVE270CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CIVE270CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CIVE270CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CIVE270CoopPlan")[i];
        if (CIVE270CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE270CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine77());
      that.addLine(getLine78());
      that.addLine(getLine112());
     that.highlightElement(CIVE270CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE270CoopPlan", "EngineeringSciences");
      CIVE270CoopPlanflag=true
  }
 else {
      that.removeLine(getLine77());
      that.removeLine(getLine78());
      that.removeLine(getLine112());
     that.unHighlightElement(CIVE270CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE270CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE270CoopPlanelement, category);
}
      CIVE270CoopPlanflag=false
  }
};
$scope.CHE312CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE312CoopPlanTime <= 200) { 
        CHE312CoopPlanTime = currentTime;
        return;
    }
CHE312CoopPlanTime = currentTime;
  var CHE312CoopPlanelement = document.getElementById("CHE312CoopPlan");
 if (!CHE312CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CHE312CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CHE312CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CHE312CoopPlan")[i];
        if (CHE312CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE312CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine79());
      that.addLine(getLine80());
      that.addLine(getLine81());
      that.addLine(getLine82());
      that.addLine(getLine93());
     that.highlightElement(CHE312CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CHE312CoopPlan", "EngineeringSciences");
      CHE312CoopPlanflag=true
  }
 else {
      that.removeLine(getLine79());
      that.removeLine(getLine80());
      that.removeLine(getLine81());
      that.removeLine(getLine82());
      that.removeLine(getLine93());
     that.unHighlightElement(CHE312CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE312CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE312CoopPlanelement, category);
}
      CHE312CoopPlanflag=false
  }
};
$scope.CME265CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CME265CoopPlanTime <= 200) { 
        CME265CoopPlanTime = currentTime;
        return;
    }
CME265CoopPlanTime = currentTime;
  var CME265CoopPlanelement = document.getElementById("CME265CoopPlan");
 if (!CME265CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CME265CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CME265CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CME265CoopPlan")[i];
        if (CME265CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CME265CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine83());
      that.addLine(getLine84());
      that.addLine(getLine85());
      that.addLine(getLine86());
      that.addLine(getLine87());
      that.addLine(getLine103());
     that.highlightElement(CME265CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CME265CoopPlan", "EngineeringSciences");
      CME265CoopPlanflag=true
  }
 else {
      that.removeLine(getLine83());
      that.removeLine(getLine84());
      that.removeLine(getLine85());
      that.removeLine(getLine86());
      that.removeLine(getLine87());
      that.removeLine(getLine103());
     that.unHighlightElement(CME265CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CME265CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CME265CoopPlanelement, category);
}
      CME265CoopPlanflag=false
  }
};
$scope.MATH201CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH201CoopPlanTime <= 200) { 
        MATH201CoopPlanTime = currentTime;
        return;
    }
MATH201CoopPlanTime = currentTime;
  var MATH201CoopPlanelement = document.getElementById("MATH201CoopPlan");
 if (!MATH201CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MATH201CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATH201CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATH201CoopPlan")[i];
        if (MATH201CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH201CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine82());
      that.addLine(getLine88());
      that.addLine(getLine92());
     that.highlightElement(MATH201CoopPlanelement, "Math");
     that.addToClicked("MATH201CoopPlan", "Math");
      MATH201CoopPlanflag=true
  }
 else {
      that.removeLine(getLine82());
      that.removeLine(getLine88());
      that.removeLine(getLine92());
     that.unHighlightElement(MATH201CoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH201CoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH201CoopPlanelement, category);
}
      MATH201CoopPlanflag=false
  }
};
$scope.MATE204CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE204CoopPlanTime <= 200) { 
        MATE204CoopPlanTime = currentTime;
        return;
    }
MATE204CoopPlanTime = currentTime;
  var MATE204CoopPlanelement = document.getElementById("MATE204CoopPlan");
 if (!MATE204CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MATE204CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATE204CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATE204CoopPlan")[i];
        if (MATE204CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE204CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine89());
      that.addLine(getLine97());
      that.addLine(getLine98());
      that.addLine(getLine104());
     that.highlightElement(MATE204CoopPlanelement, "EngineeringSciences");
     that.addToClicked("MATE204CoopPlan", "EngineeringSciences");
      MATE204CoopPlanflag=true
  }
 else {
      that.removeLine(getLine89());
      that.removeLine(getLine97());
      that.removeLine(getLine98());
      that.removeLine(getLine104());
     that.unHighlightElement(MATE204CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE204CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE204CoopPlanelement, category);
}
      MATE204CoopPlanflag=false
  }
};
$scope.MATE211CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE211CoopPlanTime <= 200) { 
        MATE211CoopPlanTime = currentTime;
        return;
    }
MATE211CoopPlanTime = currentTime;
  var MATE211CoopPlanelement = document.getElementById("MATE211CoopPlan");
 if (!MATE211CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MATE211CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATE211CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATE211CoopPlan")[i];
        if (MATE211CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE211CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine90());
      that.addLine(getLine96());
      that.addLine(getLine99());
      that.addLine(getLine113());
     that.highlightElement(MATE211CoopPlanelement, "EngineeringSciences");
     that.addToClicked("MATE211CoopPlan", "EngineeringSciences");
      MATE211CoopPlanflag=true
  }
 else {
      that.removeLine(getLine90());
      that.removeLine(getLine96());
      that.removeLine(getLine99());
      that.removeLine(getLine113());
     that.unHighlightElement(MATE211CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE211CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE211CoopPlanelement, category);
}
      MATE211CoopPlanflag=false
  }
};
$scope.WKEXP901CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP901CoopPlanTime <= 200) { 
        WKEXP901CoopPlanTime = currentTime;
        return;
    }
WKEXP901CoopPlanTime = currentTime;
  var WKEXP901CoopPlanelement = document.getElementById("WKEXP901CoopPlan");
 if (!WKEXP901CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("WKEXP901CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("WKEXP901CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("WKEXP901CoopPlan")[i];
        if (WKEXP901CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP901CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine91());
      that.addLine(getLine101());
     that.highlightElement(WKEXP901CoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP901CoopPlan", "EngineeringProfession");
      WKEXP901CoopPlanflag=true
  }
 else {
      that.removeLine(getLine91());
      that.removeLine(getLine101());
     that.unHighlightElement(WKEXP901CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP901CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP901CoopPlanelement, category);
}
      WKEXP901CoopPlanflag=false
  }
};
$scope.ComplementaryElectiveCoopPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveCoopPlan0Time <= 200) { 
        ComplementaryElectiveCoopPlan0Time = currentTime;
        return;
    }
ComplementaryElectiveCoopPlan0Time = currentTime;
  var ComplementaryElectiveCoopPlan0element = document.getElementById("ComplementaryElectiveCoopPlan0");
 if (!ComplementaryElectiveCoopPlan0flag) {
     if (that.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan0").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan0")[i];
        if (ComplementaryElectiveCoopPlan0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveCoopPlan0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveCoopPlan0element, "COMP");
     that.addToClicked("ComplementaryElectiveCoopPlan0", "COMP");
      ComplementaryElectiveCoopPlan0flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveCoopPlan0element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveCoopPlan0", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveCoopPlan0element, category);
}
      ComplementaryElectiveCoopPlan0flag=false
  }
};
$scope.CHE314CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE314CoopPlanTime <= 200) { 
        CHE314CoopPlanTime = currentTime;
        return;
    }
CHE314CoopPlanTime = currentTime;
  var CHE314CoopPlanelement = document.getElementById("CHE314CoopPlan");
 if (!CHE314CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CHE314CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CHE314CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CHE314CoopPlan")[i];
        if (CHE314CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE314CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine92());
      that.addLine(getLine93());
      that.addLine(getLine94());
      that.addLine(getLine105());
      that.addLine(getLine116());
     that.highlightElement(CHE314CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CHE314CoopPlan", "EngineeringSciences");
      CHE314CoopPlanflag=true
  }
 else {
      that.removeLine(getLine92());
      that.removeLine(getLine93());
      that.removeLine(getLine94());
      that.removeLine(getLine105());
      that.removeLine(getLine116());
     that.unHighlightElement(CHE314CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE314CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE314CoopPlanelement, category);
}
      CHE314CoopPlanflag=false
  }
};
$scope.CHE374CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE374CoopPlanTime <= 200) { 
        CHE374CoopPlanTime = currentTime;
        return;
    }
CHE374CoopPlanTime = currentTime;
  var CHE374CoopPlanelement = document.getElementById("CHE374CoopPlan");
 if (!CHE374CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CHE374CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CHE374CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CHE374CoopPlan")[i];
        if (CHE374CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE374CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine94());
      that.addLine(getLine95());
     that.highlightElement(CHE374CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CHE374CoopPlan", "EngineeringSciences");
      CHE374CoopPlanflag=true
  }
 else {
      that.removeLine(getLine94());
      that.removeLine(getLine95());
     that.unHighlightElement(CHE374CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE374CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE374CoopPlanelement, category);
}
      CHE374CoopPlanflag=false
  }
};
$scope.MATE335CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE335CoopPlanTime <= 200) { 
        MATE335CoopPlanTime = currentTime;
        return;
    }
MATE335CoopPlanTime = currentTime;
  var MATE335CoopPlanelement = document.getElementById("MATE335CoopPlan");
 if (!MATE335CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MATE335CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATE335CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATE335CoopPlan")[i];
        if (MATE335CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE335CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine96());
      that.addLine(getLine97());
      that.addLine(getLine111());
      that.addLine(getLine114());
     that.highlightElement(MATE335CoopPlanelement, "EngineeringSciences");
     that.addToClicked("MATE335CoopPlan", "EngineeringSciences");
      MATE335CoopPlanflag=true
  }
 else {
      that.removeLine(getLine96());
      that.removeLine(getLine97());
      that.removeLine(getLine111());
      that.removeLine(getLine114());
     that.unHighlightElement(MATE335CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE335CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE335CoopPlanelement, category);
}
      MATE335CoopPlanflag=false
  }
};
$scope.MATE341CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE341CoopPlanTime <= 200) { 
        MATE341CoopPlanTime = currentTime;
        return;
    }
MATE341CoopPlanTime = currentTime;
  var MATE341CoopPlanelement = document.getElementById("MATE341CoopPlan");
 if (!MATE341CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MATE341CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATE341CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATE341CoopPlan")[i];
        if (MATE341CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE341CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine98());
      that.addLine(getLine110());
     that.highlightElement(MATE341CoopPlanelement, "EngineeringSciences");
     that.addToClicked("MATE341CoopPlan", "EngineeringSciences");
      MATE341CoopPlanflag=true
  }
 else {
      that.removeLine(getLine98());
      that.removeLine(getLine110());
     that.unHighlightElement(MATE341CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE341CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE341CoopPlanelement, category);
}
      MATE341CoopPlanflag=false
  }
};
$scope.MATE361CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE361CoopPlanTime <= 200) { 
        MATE361CoopPlanTime = currentTime;
        return;
    }
MATE361CoopPlanTime = currentTime;
  var MATE361CoopPlanelement = document.getElementById("MATE361CoopPlan");
 if (!MATE361CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MATE361CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATE361CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATE361CoopPlan")[i];
        if (MATE361CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE361CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine99());
      that.addLine(getLine100());
      that.addLine(getLine115());
     that.highlightElement(MATE361CoopPlanelement, "EngineeringSciences");
     that.addToClicked("MATE361CoopPlan", "EngineeringSciences");
      MATE361CoopPlanflag=true
  }
 else {
      that.removeLine(getLine99());
      that.removeLine(getLine100());
      that.removeLine(getLine115());
     that.unHighlightElement(MATE361CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE361CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE361CoopPlanelement, category);
}
      MATE361CoopPlanflag=false
  }
};
$scope.WKEXP902CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP902CoopPlanTime <= 200) { 
        WKEXP902CoopPlanTime = currentTime;
        return;
    }
WKEXP902CoopPlanTime = currentTime;
  var WKEXP902CoopPlanelement = document.getElementById("WKEXP902CoopPlan");
 if (!WKEXP902CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("WKEXP902CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("WKEXP902CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("WKEXP902CoopPlan")[i];
        if (WKEXP902CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP902CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine101());
      that.addLine(getLine102());
     that.highlightElement(WKEXP902CoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP902CoopPlan", "EngineeringProfession");
      WKEXP902CoopPlanflag=true
  }
 else {
      that.removeLine(getLine101());
      that.removeLine(getLine102());
     that.unHighlightElement(WKEXP902CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP902CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP902CoopPlanelement, category);
}
      WKEXP902CoopPlanflag=false
  }
};
$scope.WKEXP903CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP903CoopPlanTime <= 200) { 
        WKEXP903CoopPlanTime = currentTime;
        return;
    }
WKEXP903CoopPlanTime = currentTime;
  var WKEXP903CoopPlanelement = document.getElementById("WKEXP903CoopPlan");
 if (!WKEXP903CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("WKEXP903CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("WKEXP903CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("WKEXP903CoopPlan")[i];
        if (WKEXP903CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP903CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine102());
      that.addLine(getLine119());
     that.highlightElement(WKEXP903CoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP903CoopPlan", "EngineeringProfession");
      WKEXP903CoopPlanflag=true
  }
 else {
      that.removeLine(getLine102());
      that.removeLine(getLine119());
     that.unHighlightElement(WKEXP903CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP903CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP903CoopPlanelement, category);
}
      WKEXP903CoopPlanflag=false
  }
};
$scope.ENGM310CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM310CoopPlanTime <= 200) { 
        ENGM310CoopPlanTime = currentTime;
        return;
    }
ENGM310CoopPlanTime = currentTime;
  var ENGM310CoopPlanelement = document.getElementById("ENGM310CoopPlan");
 if (!ENGM310CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ENGM310CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENGM310CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENGM310CoopPlan")[i];
        if (ENGM310CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM310CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine106());
     that.highlightElement(ENGM310CoopPlanelement, "Other");
     that.addToClicked("ENGM310CoopPlan", "Other");
      ENGM310CoopPlanflag=true
  }
 else {
      that.removeLine(getLine106());
     that.unHighlightElement(ENGM310CoopPlanelement, "Other");
     var category = that.removeFromClicked("ENGM310CoopPlan", "Other");
  if (category != "") { 
     that.highlightElement(ENGM310CoopPlanelement, category);
}
      ENGM310CoopPlanflag=false
  }
};
$scope.ENGM401CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM401CoopPlanTime <= 200) { 
        ENGM401CoopPlanTime = currentTime;
        return;
    }
ENGM401CoopPlanTime = currentTime;
  var ENGM401CoopPlanelement = document.getElementById("ENGM401CoopPlan");
 if (!ENGM401CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ENGM401CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENGM401CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENGM401CoopPlan")[i];
        if (ENGM401CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM401CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine107());
     that.highlightElement(ENGM401CoopPlanelement, "Other");
     that.addToClicked("ENGM401CoopPlan", "Other");
      ENGM401CoopPlanflag=true
  }
 else {
      that.removeLine(getLine107());
     that.unHighlightElement(ENGM401CoopPlanelement, "Other");
     var category = that.removeFromClicked("ENGM401CoopPlan", "Other");
  if (category != "") { 
     that.highlightElement(ENGM401CoopPlanelement, category);
}
      ENGM401CoopPlanflag=false
  }
};
$scope.ENGG404CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG404CoopPlanTime <= 200) { 
        ENGG404CoopPlanTime = currentTime;
        return;
    }
ENGG404CoopPlanTime = currentTime;
  var ENGG404CoopPlanelement = document.getElementById("ENGG404CoopPlan");
 if (!ENGG404CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ENGG404CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENGG404CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENGG404CoopPlan")[i];
        if (ENGG404CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG404CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine108());
      that.addLine(getLine122());
     that.highlightElement(ENGG404CoopPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG404CoopPlan", "EngineeringProfession");
      ENGG404CoopPlanflag=true
  }
 else {
      that.removeLine(getLine108());
      that.removeLine(getLine122());
     that.unHighlightElement(ENGG404CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG404CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG404CoopPlanelement, category);
}
      ENGG404CoopPlanflag=false
  }
};
$scope.MATE464CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE464CoopPlanTime <= 200) { 
        MATE464CoopPlanTime = currentTime;
        return;
    }
MATE464CoopPlanTime = currentTime;
  var MATE464CoopPlanelement = document.getElementById("MATE464CoopPlan");
 if (!MATE464CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MATE464CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATE464CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATE464CoopPlan")[i];
        if (MATE464CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE464CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine103());
      that.addLine(getLine104());
      that.addLine(getLine105());
      that.addLine(getLine106());
      that.addLine(getLine107());
      that.addLine(getLine108());
      that.addLine(getLine126());
     that.highlightElement(MATE464CoopPlanelement, "EngineeringDesign");
     that.addToClicked("MATE464CoopPlan", "EngineeringDesign");
      MATE464CoopPlanflag=true
  }
 else {
      that.removeLine(getLine103());
      that.removeLine(getLine104());
      that.removeLine(getLine105());
      that.removeLine(getLine106());
      that.removeLine(getLine107());
      that.removeLine(getLine108());
      that.removeLine(getLine126());
     that.unHighlightElement(MATE464CoopPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("MATE464CoopPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MATE464CoopPlanelement, category);
}
      MATE464CoopPlanflag=false
  }
};
$scope.ITSElectiveCoopPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ITSElectiveCoopPlan0Time <= 200) { 
        ITSElectiveCoopPlan0Time = currentTime;
        return;
    }
ITSElectiveCoopPlan0Time = currentTime;
  var ITSElectiveCoopPlan0element = document.getElementById("ITSElectiveCoopPlan0");
 if (!ITSElectiveCoopPlan0flag) {
     if (that.CoopPlanClickedMap.get("ITSElectiveCoopPlan0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ITSElectiveCoopPlan0").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ITSElectiveCoopPlan0")[i];
        if (ITSElectiveCoopPlan0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ITSElectiveCoopPlan0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ITSElectiveCoopPlan0element, "ITS");
     that.addToClicked("ITSElectiveCoopPlan0", "ITS");
      ITSElectiveCoopPlan0flag=true
  }
 else {
     that.unHighlightElement(ITSElectiveCoopPlan0element, "ITS");
     var category = that.removeFromClicked("ITSElectiveCoopPlan0", "ITS");
  if (category != "") { 
     that.highlightElement(ITSElectiveCoopPlan0element, category);
}
      ITSElectiveCoopPlan0flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveCoopPlan0Time <= 200) { 
        ProgramTechnicalElectiveCoopPlan0Time = currentTime;
        return;
    }
ProgramTechnicalElectiveCoopPlan0Time = currentTime;
  var ProgramTechnicalElectiveCoopPlan0element = document.getElementById("ProgramTechnicalElectiveCoopPlan0");
 if (!ProgramTechnicalElectiveCoopPlan0flag) {
     if (that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan0").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan0")[i];
        if (ProgramTechnicalElectiveCoopPlan0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveCoopPlan0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveCoopPlan0element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveCoopPlan0", "PROG");
      ProgramTechnicalElectiveCoopPlan0flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveCoopPlan0element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveCoopPlan0", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveCoopPlan0element, category);
}
      ProgramTechnicalElectiveCoopPlan0flag=false
  }
};
$scope.ComplementaryElectiveCoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveCoopPlan1Time <= 200) { 
        ComplementaryElectiveCoopPlan1Time = currentTime;
        return;
    }
ComplementaryElectiveCoopPlan1Time = currentTime;
  var ComplementaryElectiveCoopPlan1element = document.getElementById("ComplementaryElectiveCoopPlan1");
 if (!ComplementaryElectiveCoopPlan1flag) {
     if (that.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan1").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan1")[i];
        if (ComplementaryElectiveCoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveCoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveCoopPlan1element, "COMP");
     that.addToClicked("ComplementaryElectiveCoopPlan1", "COMP");
      ComplementaryElectiveCoopPlan1flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveCoopPlan1element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveCoopPlan1", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveCoopPlan1element, category);
}
      ComplementaryElectiveCoopPlan1flag=false
  }
};
$scope.CME481CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CME481CoopPlanTime <= 200) { 
        CME481CoopPlanTime = currentTime;
        return;
    }
CME481CoopPlanTime = currentTime;
  var CME481CoopPlanelement = document.getElementById("CME481CoopPlan");
 if (!CME481CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CME481CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CME481CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CME481CoopPlan")[i];
        if (CME481CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CME481CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(CME481CoopPlanelement, "EngineeringProfession");
     that.addToClicked("CME481CoopPlan", "EngineeringProfession");
      CME481CoopPlanflag=true
  }
 else {
     that.unHighlightElement(CME481CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("CME481CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(CME481CoopPlanelement, category);
}
      CME481CoopPlanflag=false
  }
};
$scope.MATE345CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE345CoopPlanTime <= 200) { 
        MATE345CoopPlanTime = currentTime;
        return;
    }
MATE345CoopPlanTime = currentTime;
  var MATE345CoopPlanelement = document.getElementById("MATE345CoopPlan");
 if (!MATE345CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MATE345CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATE345CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATE345CoopPlan")[i];
        if (MATE345CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE345CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine109());
      that.addLine(getLine110());
      that.addLine(getLine124());
      that.addLine(getLine128());
     that.highlightElement(MATE345CoopPlanelement, "EngineeringSciences");
     that.addToClicked("MATE345CoopPlan", "EngineeringSciences");
      MATE345CoopPlanflag=true
  }
 else {
      that.removeLine(getLine109());
      that.removeLine(getLine110());
      that.removeLine(getLine124());
      that.removeLine(getLine128());
     that.unHighlightElement(MATE345CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE345CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE345CoopPlanelement, category);
}
      MATE345CoopPlanflag=false
  }
};
$scope.MATE336CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE336CoopPlanTime <= 200) { 
        MATE336CoopPlanTime = currentTime;
        return;
    }
MATE336CoopPlanTime = currentTime;
  var MATE336CoopPlanelement = document.getElementById("MATE336CoopPlan");
 if (!MATE336CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MATE336CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATE336CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATE336CoopPlan")[i];
        if (MATE336CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE336CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine111());
      that.addLine(getLine117());
      that.addLine(getLine123());
      that.addLine(getLine127());
     that.highlightElement(MATE336CoopPlanelement, "EngineeringSciences");
     that.addToClicked("MATE336CoopPlan", "EngineeringSciences");
      MATE336CoopPlanflag=true
  }
 else {
      that.removeLine(getLine111());
      that.removeLine(getLine117());
      that.removeLine(getLine123());
      that.removeLine(getLine127());
     that.unHighlightElement(MATE336CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE336CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE336CoopPlanelement, category);
}
      MATE336CoopPlanflag=false
  }
};
$scope.MATE351CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE351CoopPlanTime <= 200) { 
        MATE351CoopPlanTime = currentTime;
        return;
    }
MATE351CoopPlanTime = currentTime;
  var MATE351CoopPlanelement = document.getElementById("MATE351CoopPlan");
 if (!MATE351CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MATE351CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATE351CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATE351CoopPlan")[i];
        if (MATE351CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE351CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine112());
      that.addLine(getLine113());
      that.addLine(getLine114());
      that.addLine(getLine118());
      that.addLine(getLine125());
     that.highlightElement(MATE351CoopPlanelement, "EngineeringSciences");
     that.addToClicked("MATE351CoopPlan", "EngineeringSciences");
      MATE351CoopPlanflag=true
  }
 else {
      that.removeLine(getLine112());
      that.removeLine(getLine113());
      that.removeLine(getLine114());
      that.removeLine(getLine118());
      that.removeLine(getLine125());
     that.unHighlightElement(MATE351CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE351CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE351CoopPlanelement, category);
}
      MATE351CoopPlanflag=false
  }
};
$scope.MATE362CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE362CoopPlanTime <= 200) { 
        MATE362CoopPlanTime = currentTime;
        return;
    }
MATE362CoopPlanTime = currentTime;
  var MATE362CoopPlanelement = document.getElementById("MATE362CoopPlan");
 if (!MATE362CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MATE362CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATE362CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATE362CoopPlan")[i];
        if (MATE362CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE362CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine115());
      that.addLine(getLine121());
     that.highlightElement(MATE362CoopPlanelement, "EngineeringSciences");
     that.addToClicked("MATE362CoopPlan", "EngineeringSciences");
      MATE362CoopPlanflag=true
  }
 else {
      that.removeLine(getLine115());
      that.removeLine(getLine121());
     that.unHighlightElement(MATE362CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE362CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE362CoopPlanelement, category);
}
      MATE362CoopPlanflag=false
  }
};
$scope.MATE473CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE473CoopPlanTime <= 200) { 
        MATE473CoopPlanTime = currentTime;
        return;
    }
MATE473CoopPlanTime = currentTime;
  var MATE473CoopPlanelement = document.getElementById("MATE473CoopPlan");
 if (!MATE473CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MATE473CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATE473CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATE473CoopPlan")[i];
        if (MATE473CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE473CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine116());
      that.addLine(getLine117());
      that.addLine(getLine118());
     that.highlightElement(MATE473CoopPlanelement, "EngineeringSciences");
     that.addToClicked("MATE473CoopPlan", "EngineeringSciences");
      MATE473CoopPlanflag=true
  }
 else {
      that.removeLine(getLine116());
      that.removeLine(getLine117());
      that.removeLine(getLine118());
     that.unHighlightElement(MATE473CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE473CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE473CoopPlanelement, category);
}
      MATE473CoopPlanflag=false
  }
};
$scope.ComplementaryElectiveCoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveCoopPlan2Time <= 200) { 
        ComplementaryElectiveCoopPlan2Time = currentTime;
        return;
    }
ComplementaryElectiveCoopPlan2Time = currentTime;
  var ComplementaryElectiveCoopPlan2element = document.getElementById("ComplementaryElectiveCoopPlan2");
 if (!ComplementaryElectiveCoopPlan2flag) {
     if (that.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan2").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan2")[i];
        if (ComplementaryElectiveCoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveCoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveCoopPlan2element, "COMP");
     that.addToClicked("ComplementaryElectiveCoopPlan2", "COMP");
      ComplementaryElectiveCoopPlan2flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveCoopPlan2element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveCoopPlan2", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveCoopPlan2element, category);
}
      ComplementaryElectiveCoopPlan2flag=false
  }
};
$scope.WKEXP904CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP904CoopPlanTime <= 200) { 
        WKEXP904CoopPlanTime = currentTime;
        return;
    }
WKEXP904CoopPlanTime = currentTime;
  var WKEXP904CoopPlanelement = document.getElementById("WKEXP904CoopPlan");
 if (!WKEXP904CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("WKEXP904CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("WKEXP904CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("WKEXP904CoopPlan")[i];
        if (WKEXP904CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP904CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine119());
      that.addLine(getLine120());
     that.highlightElement(WKEXP904CoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP904CoopPlan", "EngineeringProfession");
      WKEXP904CoopPlanflag=true
  }
 else {
      that.removeLine(getLine119());
      that.removeLine(getLine120());
     that.unHighlightElement(WKEXP904CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP904CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP904CoopPlanelement, category);
}
      WKEXP904CoopPlanflag=false
  }
};
$scope.WKEXP905CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP905CoopPlanTime <= 200) { 
        WKEXP905CoopPlanTime = currentTime;
        return;
    }
WKEXP905CoopPlanTime = currentTime;
  var WKEXP905CoopPlanelement = document.getElementById("WKEXP905CoopPlan");
 if (!WKEXP905CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("WKEXP905CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("WKEXP905CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("WKEXP905CoopPlan")[i];
        if (WKEXP905CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP905CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine120());
     that.highlightElement(WKEXP905CoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP905CoopPlan", "EngineeringProfession");
      WKEXP905CoopPlanflag=true
  }
 else {
      that.removeLine(getLine120());
     that.unHighlightElement(WKEXP905CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP905CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP905CoopPlanelement, category);
}
      WKEXP905CoopPlanflag=false
  }
};
$scope.ENGG400CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG400CoopPlanTime <= 200) { 
        ENGG400CoopPlanTime = currentTime;
        return;
    }
ENGG400CoopPlanTime = currentTime;
  var ENGG400CoopPlanelement = document.getElementById("ENGG400CoopPlan");
 if (!ENGG400CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ENGG400CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENGG400CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENGG400CoopPlan")[i];
        if (ENGG400CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG400CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG400CoopPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG400CoopPlan", "EngineeringProfession");
      ENGG400CoopPlanflag=true
  }
 else {
     that.unHighlightElement(ENGG400CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG400CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG400CoopPlanelement, category);
}
      ENGG400CoopPlanflag=false
  }
};
$scope.MATE461CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE461CoopPlanTime <= 200) { 
        MATE461CoopPlanTime = currentTime;
        return;
    }
MATE461CoopPlanTime = currentTime;
  var MATE461CoopPlanelement = document.getElementById("MATE461CoopPlan");
 if (!MATE461CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MATE461CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATE461CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATE461CoopPlan")[i];
        if (MATE461CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE461CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine121());
     that.highlightElement(MATE461CoopPlanelement, "EngineeringSciences");
     that.addToClicked("MATE461CoopPlan", "EngineeringSciences");
      MATE461CoopPlanflag=true
  }
 else {
      that.removeLine(getLine121());
     that.unHighlightElement(MATE461CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE461CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE461CoopPlanelement, category);
}
      MATE461CoopPlanflag=false
  }
};
$scope.MATE465CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE465CoopPlanTime <= 200) { 
        MATE465CoopPlanTime = currentTime;
        return;
    }
MATE465CoopPlanTime = currentTime;
  var MATE465CoopPlanelement = document.getElementById("MATE465CoopPlan");
 if (!MATE465CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MATE465CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATE465CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATE465CoopPlan")[i];
        if (MATE465CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE465CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine122());
      that.addLine(getLine123());
      that.addLine(getLine124());
      that.addLine(getLine125());
      that.addLine(getLine126());
     that.highlightElement(MATE465CoopPlanelement, "EngineeringDesign");
     that.addToClicked("MATE465CoopPlan", "EngineeringDesign");
      MATE465CoopPlanflag=true
  }
 else {
      that.removeLine(getLine122());
      that.removeLine(getLine123());
      that.removeLine(getLine124());
      that.removeLine(getLine125());
      that.removeLine(getLine126());
     that.unHighlightElement(MATE465CoopPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("MATE465CoopPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MATE465CoopPlanelement, category);
}
      MATE465CoopPlanflag=false
  }
};
$scope.MATE474CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE474CoopPlanTime <= 200) { 
        MATE474CoopPlanTime = currentTime;
        return;
    }
MATE474CoopPlanTime = currentTime;
  var MATE474CoopPlanelement = document.getElementById("MATE474CoopPlan");
 if (!MATE474CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MATE474CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATE474CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATE474CoopPlan")[i];
        if (MATE474CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE474CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine127());
      that.addLine(getLine128());
     that.highlightElement(MATE474CoopPlanelement, "EngineeringSciences");
     that.addToClicked("MATE474CoopPlan", "EngineeringSciences");
      MATE474CoopPlanflag=true
  }
 else {
      that.removeLine(getLine127());
      that.removeLine(getLine128());
     that.unHighlightElement(MATE474CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE474CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE474CoopPlanelement, category);
}
      MATE474CoopPlanflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveCoopPlan1Time <= 200) { 
        ProgramTechnicalElectiveCoopPlan1Time = currentTime;
        return;
    }
ProgramTechnicalElectiveCoopPlan1Time = currentTime;
  var ProgramTechnicalElectiveCoopPlan1element = document.getElementById("ProgramTechnicalElectiveCoopPlan1");
 if (!ProgramTechnicalElectiveCoopPlan1flag) {
     if (that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan1").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan1")[i];
        if (ProgramTechnicalElectiveCoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveCoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveCoopPlan1element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveCoopPlan1", "PROG");
      ProgramTechnicalElectiveCoopPlan1flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveCoopPlan1element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveCoopPlan1", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveCoopPlan1element, category);
}
      ProgramTechnicalElectiveCoopPlan1flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveCoopPlan2Time <= 200) { 
        ProgramTechnicalElectiveCoopPlan2Time = currentTime;
        return;
    }
ProgramTechnicalElectiveCoopPlan2Time = currentTime;
  var ProgramTechnicalElectiveCoopPlan2element = document.getElementById("ProgramTechnicalElectiveCoopPlan2");
 if (!ProgramTechnicalElectiveCoopPlan2flag) {
     if (that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan2").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan2")[i];
        if (ProgramTechnicalElectiveCoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveCoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveCoopPlan2element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveCoopPlan2", "PROG");
      ProgramTechnicalElectiveCoopPlan2flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveCoopPlan2element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveCoopPlan2", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveCoopPlan2element, category);
}
      ProgramTechnicalElectiveCoopPlan2flag=false
  }
};
$scope.CHEM103CoopPlanRCListener = function () {
  var element = document.getElementById("CHEM103CoopPlandesc");
 if (!CHEM103CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM103CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM103CoopPlanrflag=false
  }
};
$scope.ENGG100CoopPlanRCListener = function () {
  var element = document.getElementById("ENGG100CoopPlandesc");
 if (!ENGG100CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG100CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG100CoopPlanrflag=false
  }
};
$scope.ENGG130CoopPlanRCListener = function () {
  var element = document.getElementById("ENGG130CoopPlandesc");
 if (!ENGG130CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG130CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG130CoopPlanrflag=false
  }
};
$scope.ENGL199CoopPlanRCListener = function () {
  var element = document.getElementById("ENGL199CoopPlandesc");
 if (!ENGL199CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGL199CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGL199CoopPlanrflag=false
  }
};
$scope.MATH100CoopPlanRCListener = function () {
  var element = document.getElementById("MATH100CoopPlandesc");
 if (!MATH100CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH100CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH100CoopPlanrflag=false
  }
};
$scope.PHYS130CoopPlanRCListener = function () {
  var element = document.getElementById("PHYS130CoopPlandesc");
 if (!PHYS130CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS130CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS130CoopPlanrflag=false
  }
};
$scope.CHEM105CoopPlanRCListener = function () {
  var element = document.getElementById("CHEM105CoopPlandesc");
 if (!CHEM105CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM105CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM105CoopPlanrflag=false
  }
};
$scope.ENCMP100CoopPlanRCListener = function () {
  var element = document.getElementById("ENCMP100CoopPlandesc");
 if (!ENCMP100CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENCMP100CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENCMP100CoopPlanrflag=false
  }
};
$scope.ENGG160CoopPlanRCListener = function () {
  var element = document.getElementById("ENGG160CoopPlandesc");
 if (!ENGG160CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG160CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG160CoopPlanrflag=false
  }
};
$scope.ENPH131CoopPlanRCListener = function () {
  var element = document.getElementById("ENPH131CoopPlandesc");
 if (!ENPH131CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENPH131CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENPH131CoopPlanrflag=false
  }
};
$scope.MATH101CoopPlanRCListener = function () {
  var element = document.getElementById("MATH101CoopPlandesc");
 if (!MATH101CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH101CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH101CoopPlanrflag=false
  }
};
$scope.MATH102CoopPlanRCListener = function () {
  var element = document.getElementById("MATH102CoopPlandesc");
 if (!MATH102CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH102CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH102CoopPlanrflag=false
  }
};
$scope.CHE243CoopPlanRCListener = function () {
  var element = document.getElementById("CHE243CoopPlandesc");
 if (!CHE243CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE243CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE243CoopPlanrflag=false
  }
};
$scope.CHEM261CoopPlanRCListener = function () {
  var element = document.getElementById("CHEM261CoopPlandesc");
 if (!CHEM261CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM261CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM261CoopPlanrflag=false
  }
};
$scope.CME200CoopPlanRCListener = function () {
  var element = document.getElementById("CME200CoopPlandesc");
 if (!CME200CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CME200CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CME200CoopPlanrflag=false
  }
};
$scope.ENGG299CoopPlanRCListener = function () {
  var element = document.getElementById("ENGG299CoopPlandesc");
 if (!ENGG299CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG299CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG299CoopPlanrflag=false
  }
};
$scope.MATE202CoopPlanRCListener = function () {
  var element = document.getElementById("MATE202CoopPlandesc");
 if (!MATE202CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE202CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE202CoopPlanrflag=false
  }
};
$scope.MATH209CoopPlanRCListener = function () {
  var element = document.getElementById("MATH209CoopPlandesc");
 if (!MATH209CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH209CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH209CoopPlanrflag=false
  }
};
$scope.STAT235CoopPlanRCListener = function () {
  var element = document.getElementById("STAT235CoopPlandesc");
 if (!STAT235CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      STAT235CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      STAT235CoopPlanrflag=false
  }
};
$scope.CIVE270CoopPlanRCListener = function () {
  var element = document.getElementById("CIVE270CoopPlandesc");
 if (!CIVE270CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE270CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE270CoopPlanrflag=false
  }
};
$scope.CHE312CoopPlanRCListener = function () {
  var element = document.getElementById("CHE312CoopPlandesc");
 if (!CHE312CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE312CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE312CoopPlanrflag=false
  }
};
$scope.CME265CoopPlanRCListener = function () {
  var element = document.getElementById("CME265CoopPlandesc");
 if (!CME265CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CME265CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CME265CoopPlanrflag=false
  }
};
$scope.MATH201CoopPlanRCListener = function () {
  var element = document.getElementById("MATH201CoopPlandesc");
 if (!MATH201CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH201CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH201CoopPlanrflag=false
  }
};
$scope.MATE204CoopPlanRCListener = function () {
  var element = document.getElementById("MATE204CoopPlandesc");
 if (!MATE204CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE204CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE204CoopPlanrflag=false
  }
};
$scope.MATE211CoopPlanRCListener = function () {
  var element = document.getElementById("MATE211CoopPlandesc");
 if (!MATE211CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE211CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE211CoopPlanrflag=false
  }
};
$scope.WKEXP901CoopPlanRCListener = function () {
  var element = document.getElementById("WKEXP901CoopPlandesc");
 if (!WKEXP901CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP901CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP901CoopPlanrflag=false
  }
};
$scope.ComplementaryElectiveCoopPlan0RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveCoopPlan0desc");
 if (!ComplementaryElectiveCoopPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveCoopPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveCoopPlan0rflag=false
  }
};
$scope.CHE314CoopPlanRCListener = function () {
  var element = document.getElementById("CHE314CoopPlandesc");
 if (!CHE314CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE314CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE314CoopPlanrflag=false
  }
};
$scope.CHE374CoopPlanRCListener = function () {
  var element = document.getElementById("CHE374CoopPlandesc");
 if (!CHE374CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE374CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE374CoopPlanrflag=false
  }
};
$scope.MATE335CoopPlanRCListener = function () {
  var element = document.getElementById("MATE335CoopPlandesc");
 if (!MATE335CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE335CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE335CoopPlanrflag=false
  }
};
$scope.MATE341CoopPlanRCListener = function () {
  var element = document.getElementById("MATE341CoopPlandesc");
 if (!MATE341CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE341CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE341CoopPlanrflag=false
  }
};
$scope.MATE361CoopPlanRCListener = function () {
  var element = document.getElementById("MATE361CoopPlandesc");
 if (!MATE361CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE361CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE361CoopPlanrflag=false
  }
};
$scope.WKEXP902CoopPlanRCListener = function () {
  var element = document.getElementById("WKEXP902CoopPlandesc");
 if (!WKEXP902CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP902CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP902CoopPlanrflag=false
  }
};
$scope.WKEXP903CoopPlanRCListener = function () {
  var element = document.getElementById("WKEXP903CoopPlandesc");
 if (!WKEXP903CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP903CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP903CoopPlanrflag=false
  }
};
$scope.ENGM310CoopPlanRCListener = function () {
  var element = document.getElementById("ENGM310CoopPlandesc");
 if (!ENGM310CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM310CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM310CoopPlanrflag=false
  }
};
$scope.ENGM401CoopPlanRCListener = function () {
  var element = document.getElementById("ENGM401CoopPlandesc");
 if (!ENGM401CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM401CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM401CoopPlanrflag=false
  }
};
$scope.ENGG404CoopPlanRCListener = function () {
  var element = document.getElementById("ENGG404CoopPlandesc");
 if (!ENGG404CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG404CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG404CoopPlanrflag=false
  }
};
$scope.MATE464CoopPlanRCListener = function () {
  var element = document.getElementById("MATE464CoopPlandesc");
 if (!MATE464CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE464CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE464CoopPlanrflag=false
  }
};
$scope.ITSElectiveCoopPlan0RCListener = function () {
  var element = document.getElementById("ITSElectiveCoopPlan0desc");
 if (!ITSElectiveCoopPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ITSElectiveCoopPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ITSElectiveCoopPlan0rflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan0RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveCoopPlan0desc");
 if (!ProgramTechnicalElectiveCoopPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveCoopPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveCoopPlan0rflag=false
  }
};
$scope.ComplementaryElectiveCoopPlan1RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveCoopPlan1desc");
 if (!ComplementaryElectiveCoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveCoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveCoopPlan1rflag=false
  }
};
$scope.CME481CoopPlanRCListener = function () {
  var element = document.getElementById("CME481CoopPlandesc");
 if (!CME481CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CME481CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CME481CoopPlanrflag=false
  }
};
$scope.MATE345CoopPlanRCListener = function () {
  var element = document.getElementById("MATE345CoopPlandesc");
 if (!MATE345CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE345CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE345CoopPlanrflag=false
  }
};
$scope.MATE336CoopPlanRCListener = function () {
  var element = document.getElementById("MATE336CoopPlandesc");
 if (!MATE336CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE336CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE336CoopPlanrflag=false
  }
};
$scope.MATE351CoopPlanRCListener = function () {
  var element = document.getElementById("MATE351CoopPlandesc");
 if (!MATE351CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE351CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE351CoopPlanrflag=false
  }
};
$scope.MATE362CoopPlanRCListener = function () {
  var element = document.getElementById("MATE362CoopPlandesc");
 if (!MATE362CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE362CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE362CoopPlanrflag=false
  }
};
$scope.MATE473CoopPlanRCListener = function () {
  var element = document.getElementById("MATE473CoopPlandesc");
 if (!MATE473CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE473CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE473CoopPlanrflag=false
  }
};
$scope.ComplementaryElectiveCoopPlan2RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveCoopPlan2desc");
 if (!ComplementaryElectiveCoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveCoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveCoopPlan2rflag=false
  }
};
$scope.WKEXP904CoopPlanRCListener = function () {
  var element = document.getElementById("WKEXP904CoopPlandesc");
 if (!WKEXP904CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP904CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP904CoopPlanrflag=false
  }
};
$scope.WKEXP905CoopPlanRCListener = function () {
  var element = document.getElementById("WKEXP905CoopPlandesc");
 if (!WKEXP905CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP905CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP905CoopPlanrflag=false
  }
};
$scope.ENGG400CoopPlanRCListener = function () {
  var element = document.getElementById("ENGG400CoopPlandesc");
 if (!ENGG400CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG400CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG400CoopPlanrflag=false
  }
};
$scope.MATE461CoopPlanRCListener = function () {
  var element = document.getElementById("MATE461CoopPlandesc");
 if (!MATE461CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE461CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE461CoopPlanrflag=false
  }
};
$scope.MATE465CoopPlanRCListener = function () {
  var element = document.getElementById("MATE465CoopPlandesc");
 if (!MATE465CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE465CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE465CoopPlanrflag=false
  }
};
$scope.MATE474CoopPlanRCListener = function () {
  var element = document.getElementById("MATE474CoopPlandesc");
 if (!MATE474CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE474CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE474CoopPlanrflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan1RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveCoopPlan1desc");
 if (!ProgramTechnicalElectiveCoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveCoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveCoopPlan1rflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan2RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveCoopPlan2desc");
 if (!ProgramTechnicalElectiveCoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveCoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveCoopPlan2rflag=false
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