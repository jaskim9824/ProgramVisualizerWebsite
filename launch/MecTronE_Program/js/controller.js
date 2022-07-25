var app = angular.module("main", []);
app.controller("main", function($scope) { 
$scope.selectedPlan = "MCTRV1Dept";
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
this.MCTRV1DeptList = [];
this.MCTRV1DeptClicked = [];
this.MCTRV1DeptLegendBtns = [];
this.MCTRV1DeptLegendBtnsClicked = [];
this.MCTRV1DeptClickedMap = new Map();
this.MCTRV1DeptTerms = 8;
this.MCTRV1DeptMaxCourses = 7;
this.MCTRV2FacultyList = [];
this.MCTRV2FacultyClicked = [];
this.MCTRV2FacultyLegendBtns = [];
this.MCTRV2FacultyLegendBtnsClicked = [];
this.MCTRV2FacultyClickedMap = new Map();
this.MCTRV2FacultyTerms = 8;
this.MCTRV2FacultyMaxCourses = 7;
this.MCTRV3DSNList = [];
this.MCTRV3DSNClicked = [];
this.MCTRV3DSNLegendBtns = [];
this.MCTRV3DSNLegendBtnsClicked = [];
this.MCTRV3DSNClickedMap = new Map();
this.MCTRV3DSNTerms = 8;
this.MCTRV3DSNMaxCourses = 7;
this.previousPlan = $scope.selectedPlan
this.setDefaults = function(plan) { 
  switch(plan) { 
      case "MCTRV1Dept": 
          $scope.$apply();
          break;
      case "MCTRV2Faculty": 
          $scope.$apply();
          break;
      case "MCTRV3DSN": 
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
  case "MCTRV1Dept": 
    for (let i = 0; i < this.MCTRV1DeptList.length; i++) {
        this.MCTRV1DeptList[i][0].hide(true);
    }
    break; 
  case "MCTRV2Faculty": 
    for (let i = 0; i < this.MCTRV2FacultyList.length; i++) {
        this.MCTRV2FacultyList[i][0].hide(true);
    }
    break; 
  case "MCTRV3DSN": 
    for (let i = 0; i < this.MCTRV3DSNList.length; i++) {
        this.MCTRV3DSNList[i][0].hide(true);
    }
    break; 
    default:
    console.log("shouldn't be here");
    }
};
  var currbtn = document.getElementById("NaturalSciences");
  that.MCTRV1DeptLegendBtns.push(currbtn);
  that.MCTRV2FacultyLegendBtns.push(currbtn);
  that.MCTRV3DSNLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringProfession");
  that.MCTRV1DeptLegendBtns.push(currbtn);
  that.MCTRV2FacultyLegendBtns.push(currbtn);
  that.MCTRV3DSNLegendBtns.push(currbtn);
  var currbtn = document.getElementById("Math");
  that.MCTRV1DeptLegendBtns.push(currbtn);
  that.MCTRV2FacultyLegendBtns.push(currbtn);
  that.MCTRV3DSNLegendBtns.push(currbtn);
  var currbtn = document.getElementById("Other");
  that.MCTRV1DeptLegendBtns.push(currbtn);
  that.MCTRV2FacultyLegendBtns.push(currbtn);
  that.MCTRV3DSNLegendBtns.push(currbtn);
  var currbtn = document.getElementById("Mechatronics");
  that.MCTRV1DeptLegendBtns.push(currbtn);
  that.MCTRV2FacultyLegendBtns.push(currbtn);
  that.MCTRV3DSNLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringSciences");
  that.MCTRV1DeptLegendBtns.push(currbtn);
  that.MCTRV2FacultyLegendBtns.push(currbtn);
  that.MCTRV3DSNLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringDesign");
  that.MCTRV1DeptLegendBtns.push(currbtn);
  that.MCTRV2FacultyLegendBtns.push(currbtn);
  that.MCTRV3DSNLegendBtns.push(currbtn);
  var currbtn = document.getElementById("ITS");
  that.MCTRV1DeptLegendBtns.push(currbtn);
  that.MCTRV2FacultyLegendBtns.push(currbtn);
  that.MCTRV3DSNLegendBtns.push(currbtn);
  var currbtn = document.getElementById("COMP");
  that.MCTRV1DeptLegendBtns.push(currbtn);
  that.MCTRV2FacultyLegendBtns.push(currbtn);
  that.MCTRV3DSNLegendBtns.push(currbtn);
  var currbtn = document.getElementById("PROG");
  that.MCTRV1DeptLegendBtns.push(currbtn);
  that.MCTRV2FacultyLegendBtns.push(currbtn);
  that.MCTRV3DSNLegendBtns.push(currbtn);
this.enable = function(plan) {
  switch(plan) {
    case "MCTRV1Dept": 
      for (let i = 0; i < this.MCTRV1DeptList.length; i++) {
          this.MCTRV1DeptList[i][0].show(true);
      }
      width = this.MCTRV1DeptTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.MCTRV1DeptMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.MCTRV1DeptClicked.length; i++) {
          var element = document.getElementById(this.MCTRV1DeptClicked[i][0]);
          this.highlightElement(element, this.MCTRV1DeptClicked[i][1]);
      }
      for (let i = 0; i < this.MCTRV1DeptLegendBtns.length; i++) {
          var found = false;
          for (let j = 0; j < this.MCTRV1DeptLegendBtnsClicked.length; j++) {
              if (this.MCTRV1DeptLegendBtnsClicked[j] == this.MCTRV1DeptLegendBtns[i]) {
                  found = true;
              }
          }
          if (found == false) {
              this.MCTRV1DeptLegendBtns[i].classList.remove("legendbutton-pressed");
              this.MCTRV1DeptLegendBtns[i].classList.add("legendbutton");
          }
          if (found == true) {
              this.MCTRV1DeptLegendBtns[i].classList.remove("legendbutton");
              this.MCTRV1DeptLegendBtns[i].classList.add("legendbutton-pressed");
          }
      }
      break; 
    case "MCTRV2Faculty": 
      for (let i = 0; i < this.MCTRV2FacultyList.length; i++) {
          this.MCTRV2FacultyList[i][0].show(true);
      }
      width = this.MCTRV2FacultyTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.MCTRV2FacultyMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.MCTRV2FacultyClicked.length; i++) {
          var element = document.getElementById(this.MCTRV2FacultyClicked[i][0]);
          this.highlightElement(element, this.MCTRV2FacultyClicked[i][1]);
      }
      for (let i = 0; i < this.MCTRV2FacultyLegendBtns.length; i++) {
          var found = false;
          for (let j = 0; j < this.MCTRV2FacultyLegendBtnsClicked.length; j++) {
              if (this.MCTRV2FacultyLegendBtnsClicked[j] == this.MCTRV2FacultyLegendBtns[i]) {
                  found = true;
              }
          }
          if (found == false) {
              this.MCTRV2FacultyLegendBtns[i].classList.remove("legendbutton-pressed");
              this.MCTRV2FacultyLegendBtns[i].classList.add("legendbutton");
          }
          if (found == true) {
              this.MCTRV2FacultyLegendBtns[i].classList.remove("legendbutton");
              this.MCTRV2FacultyLegendBtns[i].classList.add("legendbutton-pressed");
          }
      }
      break; 
    case "MCTRV3DSN": 
      for (let i = 0; i < this.MCTRV3DSNList.length; i++) {
          this.MCTRV3DSNList[i][0].show(true);
      }
      width = this.MCTRV3DSNTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.MCTRV3DSNMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.MCTRV3DSNClicked.length; i++) {
          var element = document.getElementById(this.MCTRV3DSNClicked[i][0]);
          this.highlightElement(element, this.MCTRV3DSNClicked[i][1]);
      }
      for (let i = 0; i < this.MCTRV3DSNLegendBtns.length; i++) {
          var found = false;
          for (let j = 0; j < this.MCTRV3DSNLegendBtnsClicked.length; j++) {
              if (this.MCTRV3DSNLegendBtnsClicked[j] == this.MCTRV3DSNLegendBtns[i]) {
                  found = true;
              }
          }
          if (found == false) {
              this.MCTRV3DSNLegendBtns[i].classList.remove("legendbutton-pressed");
              this.MCTRV3DSNLegendBtns[i].classList.add("legendbutton");
          }
          if (found == true) {
              this.MCTRV3DSNLegendBtns[i].classList.remove("legendbutton");
              this.MCTRV3DSNLegendBtns[i].classList.add("legendbutton-pressed");
          }
      }
      break; 
    default:
    console.log("shouldn't be here");
    }
};
this.addLine = function(line) {
switch($scope.selectedPlan) { 
 case "MCTRV1Dept":
    var index = this.MCTRV1DeptList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.MCTRV1DeptList.push([line, 1])
    }
    else {
        this.MCTRV1DeptList[index][1]++;
    }
    break;
 case "MCTRV2Faculty":
    var index = this.MCTRV2FacultyList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.MCTRV2FacultyList.push([line, 1])
    }
    else {
        this.MCTRV2FacultyList[index][1]++;
    }
    break;
 case "MCTRV3DSN":
    var index = this.MCTRV3DSNList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.MCTRV3DSNList.push([line, 1])
    }
    else {
        this.MCTRV3DSNList[index][1]++;
    }
    break;
    default:
    console.log("shouldn't be here");
    }
};
this.removeLine = function(line) {
switch($scope.selectedPlan) { 
 case "MCTRV1Dept":
    var index = this.MCTRV1DeptList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.MCTRV1DeptList[index][1]--
        if (this.MCTRV1DeptList[index][1] <= 0) {
            line.hide(false);
            this.MCTRV1DeptList.splice(index, 1);
        }
    }
    break; case "MCTRV2Faculty":
    var index = this.MCTRV2FacultyList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.MCTRV2FacultyList[index][1]--
        if (this.MCTRV2FacultyList[index][1] <= 0) {
            line.hide(false);
            this.MCTRV2FacultyList.splice(index, 1);
        }
    }
    break; case "MCTRV3DSN":
    var index = this.MCTRV3DSNList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.MCTRV3DSNList[index][1]--
        if (this.MCTRV3DSNList[index][1] <= 0) {
            line.hide(false);
            this.MCTRV3DSNList.splice(index, 1);
        }
    }
    break;    default:
    console.log("shouldn't be here");
    }
};
this.addToClicked = function(element, category) {
switch($scope.selectedPlan) { 
 case "MCTRV1Dept":
    var index = this.MCTRV1DeptClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.MCTRV1DeptClicked.push([element, category, 1]);
    }
    else {
        this.MCTRV1DeptClicked[index][1] = category;
        this.MCTRV1DeptClicked[index][2]++;
    }
    this.MCTRV1DeptClickedMap.get(element).push(category);
    break; case "MCTRV2Faculty":
    var index = this.MCTRV2FacultyClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.MCTRV2FacultyClicked.push([element, category, 1]);
    }
    else {
        this.MCTRV2FacultyClicked[index][1] = category;
        this.MCTRV2FacultyClicked[index][2]++;
    }
    this.MCTRV2FacultyClickedMap.get(element).push(category);
    break; case "MCTRV3DSN":
    var index = this.MCTRV3DSNClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.MCTRV3DSNClicked.push([element, category, 1]);
    }
    else {
        this.MCTRV3DSNClicked[index][1] = category;
        this.MCTRV3DSNClicked[index][2]++;
    }
    this.MCTRV3DSNClickedMap.get(element).push(category);
    break;    default:
    console.log("shouldn't be here");
    }
};
this.removeFromClicked = function(element, category) {
switch($scope.selectedPlan) { 
 case "MCTRV1Dept":
    var index = this.MCTRV1DeptClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.MCTRV1DeptClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.MCTRV1DeptClickedMap.get(element).splice(indexMap, 1);
        }
        this.MCTRV1DeptClicked[index][2]--;
        if (this.MCTRV1DeptClicked[index][2] <= 0) {
            this.MCTRV1DeptClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.MCTRV1DeptClickedMap.get(element).length - 1
        return this.MCTRV1DeptClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "MCTRV2Faculty":
    var index = this.MCTRV2FacultyClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.MCTRV2FacultyClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.MCTRV2FacultyClickedMap.get(element).splice(indexMap, 1);
        }
        this.MCTRV2FacultyClicked[index][2]--;
        if (this.MCTRV2FacultyClicked[index][2] <= 0) {
            this.MCTRV2FacultyClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.MCTRV2FacultyClickedMap.get(element).length - 1
        return this.MCTRV2FacultyClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "MCTRV3DSN":
    var index = this.MCTRV3DSNClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.MCTRV3DSNClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.MCTRV3DSNClickedMap.get(element).splice(indexMap, 1);
        }
        this.MCTRV3DSNClicked[index][2]--;
        if (this.MCTRV3DSNClicked[index][2] <= 0) {
            this.MCTRV3DSNClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.MCTRV3DSNClickedMap.get(element).length - 1
        return this.MCTRV3DSNClickedMap.get(element)[maxIndex];
    }
    return "";
    break;    default:
    console.log("shouldn't be here");
    }
};
var NaturalSciencesMCTRV1Deptflag = false;
var NaturalSciencesMCTRV2Facultyflag = false;
var NaturalSciencesMCTRV3DSNflag = false;
var EngineeringProfessionMCTRV1Deptflag = false;
var EngineeringProfessionMCTRV2Facultyflag = false;
var EngineeringProfessionMCTRV3DSNflag = false;
var MathMCTRV1Deptflag = false;
var MathMCTRV2Facultyflag = false;
var MathMCTRV3DSNflag = false;
var OtherMCTRV1Deptflag = false;
var OtherMCTRV2Facultyflag = false;
var OtherMCTRV3DSNflag = false;
var MechatronicsMCTRV1Deptflag = false;
var MechatronicsMCTRV2Facultyflag = false;
var MechatronicsMCTRV3DSNflag = false;
var EngineeringSciencesMCTRV1Deptflag = false;
var EngineeringSciencesMCTRV2Facultyflag = false;
var EngineeringSciencesMCTRV3DSNflag = false;
var EngineeringDesignMCTRV1Deptflag = false;
var EngineeringDesignMCTRV2Facultyflag = false;
var EngineeringDesignMCTRV3DSNflag = false;
var ITSMCTRV1Deptflag = false;
var ITSMCTRV2Facultyflag = false;
var ITSMCTRV3DSNflag = false;
var COMPMCTRV1Deptflag = false;
var COMPMCTRV2Facultyflag = false;
var COMPMCTRV3DSNflag = false;
var PROGMCTRV1Deptflag = false;
var PROGMCTRV2Facultyflag = false;
var PROGMCTRV3DSNflag = false;
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
      case "MCTRV1Dept":
 var element = document.getElementById("CHEM103MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("CHEM103MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("CHEM103MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("CHEM103MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM103MCTRV1Dept", categoryName);
 var element = document.getElementById("ENGG130MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("ENGG130MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("ENGG130MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("ENGG130MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG130MCTRV1Dept", categoryName);
 var element = document.getElementById("PHYS130MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("PHYS130MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("PHYS130MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("PHYS130MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS130MCTRV1Dept", categoryName);
 var element = document.getElementById("CHEM105MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("CHEM105MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("CHEM105MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("CHEM105MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM105MCTRV1Dept", categoryName);
 var element = document.getElementById("ENCMP100MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("ENCMP100MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("ENCMP100MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("ENCMP100MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENCMP100MCTRV1Dept", categoryName);
 var element = document.getElementById("ENPH131MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("ENPH131MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("ENPH131MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("ENPH131MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENPH131MCTRV1Dept", categoryName);
 var element = document.getElementById("MECE230MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MECE230MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MECE230MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MECE230MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE230MCTRV1Dept", categoryName);
       break;
      case "MCTRV2Faculty":
 var element = document.getElementById("CHEM103MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("CHEM103MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("CHEM103MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("CHEM103MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM103MCTRV2Faculty", categoryName);
 var element = document.getElementById("ENGG130MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("ENGG130MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("ENGG130MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("ENGG130MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG130MCTRV2Faculty", categoryName);
 var element = document.getElementById("PHYS130MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("PHYS130MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("PHYS130MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("PHYS130MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS130MCTRV2Faculty", categoryName);
 var element = document.getElementById("CHEM105MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("CHEM105MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("CHEM105MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("CHEM105MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM105MCTRV2Faculty", categoryName);
 var element = document.getElementById("ENCMP100MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("ENCMP100MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("ENCMP100MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("ENCMP100MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENCMP100MCTRV2Faculty", categoryName);
 var element = document.getElementById("ENPH131MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("ENPH131MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("ENPH131MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("ENPH131MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENPH131MCTRV2Faculty", categoryName);
 var element = document.getElementById("MECE230MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MECE230MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MECE230MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MECE230MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE230MCTRV2Faculty", categoryName);
 var element = document.getElementById("MATE201MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MATE201MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MATE201MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MATE201MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE201MCTRV2Faculty", categoryName);
       break;
      case "MCTRV3DSN":
 var element = document.getElementById("CHEM103MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("CHEM103MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("CHEM103MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("CHEM103MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM103MCTRV3DSN", categoryName);
 var element = document.getElementById("ENGG130MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("ENGG130MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("ENGG130MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("ENGG130MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG130MCTRV3DSN", categoryName);
 var element = document.getElementById("PHYS130MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("PHYS130MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("PHYS130MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("PHYS130MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS130MCTRV3DSN", categoryName);
 var element = document.getElementById("CHEM105MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("CHEM105MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("CHEM105MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("CHEM105MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM105MCTRV3DSN", categoryName);
 var element = document.getElementById("ENCMP100MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("ENCMP100MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("ENCMP100MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("ENCMP100MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENCMP100MCTRV3DSN", categoryName);
 var element = document.getElementById("ENPH131MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("ENPH131MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("ENPH131MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("ENPH131MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENPH131MCTRV3DSN", categoryName);
 var element = document.getElementById("MECE230MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MECE230MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MECE230MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MECE230MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE230MCTRV3DSN", categoryName);
 var element = document.getElementById("MATE201MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MATE201MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MATE201MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MATE201MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE201MCTRV3DSN", categoryName);
       break;
       }
      break;
  case "EngineeringProfession":
    switch(planName) {
      case "MCTRV1Dept":
 var element = document.getElementById("ENGG100MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("ENGG100MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("ENGG100MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("ENGG100MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG100MCTRV1Dept", categoryName);
 var element = document.getElementById("ENGG101MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("ENGG101MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("ENGG101MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("ENGG101MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG101MCTRV1Dept", categoryName);
 var element = document.getElementById("ENGG299MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("ENGG299MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("ENGG299MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("ENGG299MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG299MCTRV1Dept", categoryName);
 var element = document.getElementById("ENGG404MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("ENGG404MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("ENGG404MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("ENGG404MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG404MCTRV1Dept", categoryName);
 var element = document.getElementById("ENGG400MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("ENGG400MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("ENGG400MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("ENGG400MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG400MCTRV1Dept", categoryName);
       break;
      case "MCTRV2Faculty":
 var element = document.getElementById("ENGG100MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("ENGG100MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("ENGG100MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("ENGG100MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG100MCTRV2Faculty", categoryName);
 var element = document.getElementById("ENGG299MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("ENGG299MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("ENGG299MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("ENGG299MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG299MCTRV2Faculty", categoryName);
 var element = document.getElementById("ENGG404MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("ENGG404MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("ENGG404MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("ENGG404MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG404MCTRV2Faculty", categoryName);
 var element = document.getElementById("ENGG400MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("ENGG400MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("ENGG400MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("ENGG400MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG400MCTRV2Faculty", categoryName);
       break;
      case "MCTRV3DSN":
 var element = document.getElementById("ENGG100MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("ENGG100MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("ENGG100MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("ENGG100MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG100MCTRV3DSN", categoryName);
 var element = document.getElementById("ENGG404MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("ENGG404MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("ENGG404MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("ENGG404MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG404MCTRV3DSN", categoryName);
 var element = document.getElementById("ENGG400MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("ENGG400MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("ENGG400MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("ENGG400MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG400MCTRV3DSN", categoryName);
       break;
       }
      break;
  case "Math":
    switch(planName) {
      case "MCTRV1Dept":
 var element = document.getElementById("MATH100MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MATH100MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MATH100MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MATH100MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH100MCTRV1Dept", categoryName);
 var element = document.getElementById("MATH101MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MATH101MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MATH101MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MATH101MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH101MCTRV1Dept", categoryName);
 var element = document.getElementById("MATH102MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MATH102MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MATH102MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MATH102MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH102MCTRV1Dept", categoryName);
 var element = document.getElementById("MATH209MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MATH209MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MATH209MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MATH209MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH209MCTRV1Dept", categoryName);
 var element = document.getElementById("MATH201MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MATH201MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MATH201MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MATH201MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH201MCTRV1Dept", categoryName);
 var element = document.getElementById("MATH309MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MATH309MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MATH309MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MATH309MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH309MCTRV1Dept", categoryName);
 var element = document.getElementById("ECE342MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("ECE342MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("ECE342MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("ECE342MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE342MCTRV1Dept", categoryName);
 var element = document.getElementById("MATH300MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MATH300MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MATH300MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MATH300MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH300MCTRV1Dept", categoryName);
 var element = document.getElementById("MECE390MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MECE390MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MECE390MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MECE390MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE390MCTRV1Dept", categoryName);
       break;
      case "MCTRV2Faculty":
 var element = document.getElementById("MATH100MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MATH100MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MATH100MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MATH100MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH100MCTRV2Faculty", categoryName);
 var element = document.getElementById("MATH101MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MATH101MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MATH101MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MATH101MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH101MCTRV2Faculty", categoryName);
 var element = document.getElementById("MATH102MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MATH102MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MATH102MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MATH102MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH102MCTRV2Faculty", categoryName);
 var element = document.getElementById("MATH201MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MATH201MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MATH201MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MATH201MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH201MCTRV2Faculty", categoryName);
 var element = document.getElementById("MATH209MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MATH209MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MATH209MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MATH209MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH209MCTRV2Faculty", categoryName);
 var element = document.getElementById("ECE342MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("ECE342MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("ECE342MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("ECE342MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE342MCTRV2Faculty", categoryName);
 var element = document.getElementById("MECE390MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MECE390MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MECE390MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MECE390MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE390MCTRV2Faculty", categoryName);
       break;
      case "MCTRV3DSN":
 var element = document.getElementById("MATH100MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MATH100MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MATH100MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MATH100MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH100MCTRV3DSN", categoryName);
 var element = document.getElementById("MATH101MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MATH101MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MATH101MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MATH101MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH101MCTRV3DSN", categoryName);
 var element = document.getElementById("MATH102MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MATH102MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MATH102MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MATH102MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH102MCTRV3DSN", categoryName);
 var element = document.getElementById("MATH201MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MATH201MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MATH201MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MATH201MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH201MCTRV3DSN", categoryName);
 var element = document.getElementById("MATH209MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MATH209MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MATH209MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MATH209MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH209MCTRV3DSN", categoryName);
 var element = document.getElementById("ECE342MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("ECE342MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("ECE342MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("ECE342MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE342MCTRV3DSN", categoryName);
 var element = document.getElementById("MECE390MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MECE390MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MECE390MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MECE390MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE390MCTRV3DSN", categoryName);
       break;
       }
      break;
  case "Other":
    switch(planName) {
      case "MCTRV1Dept":
 var element = document.getElementById("ENGL199MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("ENGL199MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("ENGL199MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("ENGL199MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGL199MCTRV1Dept", categoryName);
 var element = document.getElementById("ENGL199MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("ENGL199MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("ENGL199MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("ENGL199MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGL199MCTRV1Dept", categoryName);
 var element = document.getElementById("ENGM401MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("ENGM401MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("ENGM401MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("ENGM401MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM401MCTRV1Dept", categoryName);
       break;
      case "MCTRV2Faculty":
 var element = document.getElementById("ENGL199MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("ENGL199MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("ENGL199MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("ENGL199MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGL199MCTRV2Faculty", categoryName);
 var element = document.getElementById("ENGM401MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("ENGM401MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("ENGM401MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("ENGM401MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM401MCTRV2Faculty", categoryName);
       break;
      case "MCTRV3DSN":
 var element = document.getElementById("ENGL199MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("ENGL199MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("ENGL199MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("ENGL199MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGL199MCTRV3DSN", categoryName);
 var element = document.getElementById("ENGM401MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("ENGM401MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("ENGM401MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("ENGM401MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM401MCTRV3DSN", categoryName);
       break;
       }
      break;
  case "Mechatronics":
    switch(planName) {
      case "MCTRV1Dept":
 var element = document.getElementById("MCTR202MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MCTR202MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MCTR202MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MCTR202MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR202MCTRV1Dept", categoryName);
 var element = document.getElementById("MCTR274MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MCTR274MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MCTR274MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MCTR274MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR274MCTRV1Dept", categoryName);
 var element = document.getElementById("MCTR275MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MCTR275MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MCTR275MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MCTR275MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR275MCTRV1Dept", categoryName);
 var element = document.getElementById("MCTR300MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MCTR300MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MCTR300MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MCTR300MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR300MCTRV1Dept", categoryName);
 var element = document.getElementById("MCTR365MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MCTR365MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MCTR365MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MCTR365MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR365MCTRV1Dept", categoryName);
 var element = document.getElementById("MCTR332MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MCTR332MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MCTR332MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MCTR332MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR332MCTRV1Dept", categoryName);
 var element = document.getElementById("MCTR460MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MCTR460MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MCTR460MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MCTR460MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR460MCTRV1Dept", categoryName);
 var element = document.getElementById("MCTR461MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MCTR461MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MCTR461MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MCTR461MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR461MCTRV1Dept", categoryName);
 var element = document.getElementById("MCTR465MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MCTR465MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MCTR465MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MCTR465MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR465MCTRV1Dept", categoryName);
       break;
      case "MCTRV2Faculty":
 var element = document.getElementById("MCTR202MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MCTR202MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MCTR202MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MCTR202MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR202MCTRV2Faculty", categoryName);
 var element = document.getElementById("MCTR200MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MCTR200MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MCTR200MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MCTR200MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR200MCTRV2Faculty", categoryName);
 var element = document.getElementById("MCTR274MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MCTR274MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MCTR274MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MCTR274MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR274MCTRV2Faculty", categoryName);
 var element = document.getElementById("MCTR374MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MCTR374MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MCTR374MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MCTR374MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR374MCTRV2Faculty", categoryName);
 var element = document.getElementById("MCTR300MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MCTR300MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MCTR300MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MCTR300MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR300MCTRV2Faculty", categoryName);
 var element = document.getElementById("MCTR332MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MCTR332MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MCTR332MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MCTR332MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR332MCTRV2Faculty", categoryName);
 var element = document.getElementById("MCTR365MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MCTR365MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MCTR365MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MCTR365MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR365MCTRV2Faculty", categoryName);
 var element = document.getElementById("MCTR370MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MCTR370MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MCTR370MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MCTR370MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR370MCTRV2Faculty", categoryName);
 var element = document.getElementById("MCTR460MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MCTR460MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MCTR460MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MCTR460MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR460MCTRV2Faculty", categoryName);
 var element = document.getElementById("MCTR461MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MCTR461MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MCTR461MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MCTR461MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR461MCTRV2Faculty", categoryName);
 var element = document.getElementById("MCTR465MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MCTR465MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MCTR465MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MCTR465MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR465MCTRV2Faculty", categoryName);
       break;
      case "MCTRV3DSN":
 var element = document.getElementById("MCTR202MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MCTR202MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MCTR202MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MCTR202MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR202MCTRV3DSN", categoryName);
 var element = document.getElementById("MCTR200MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MCTR200MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MCTR200MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MCTR200MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR200MCTRV3DSN", categoryName);
 var element = document.getElementById("MCTR274MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MCTR274MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MCTR274MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MCTR274MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR274MCTRV3DSN", categoryName);
 var element = document.getElementById("MCTR374MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MCTR374MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MCTR374MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MCTR374MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR374MCTRV3DSN", categoryName);
 var element = document.getElementById("MCTR300MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MCTR300MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MCTR300MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MCTR300MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR300MCTRV3DSN", categoryName);
 var element = document.getElementById("MCTR332MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MCTR332MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MCTR332MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MCTR332MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR332MCTRV3DSN", categoryName);
 var element = document.getElementById("MCTR365MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MCTR365MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MCTR365MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MCTR365MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR365MCTRV3DSN", categoryName);
 var element = document.getElementById("MCTR370MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MCTR370MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MCTR370MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MCTR370MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR370MCTRV3DSN", categoryName);
 var element = document.getElementById("MCTR460MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MCTR460MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MCTR460MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MCTR460MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR460MCTRV3DSN", categoryName);
 var element = document.getElementById("MCTR461MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MCTR461MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MCTR461MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MCTR461MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR461MCTRV3DSN", categoryName);
 var element = document.getElementById("MCTR465MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MCTR465MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MCTR465MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MCTR465MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MCTR465MCTRV3DSN", categoryName);
       break;
       }
      break;
  case "EngineeringSciences":
    switch(planName) {
      case "MCTRV1Dept":
 var element = document.getElementById("ECE210MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("ECE210MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("ECE210MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("ECE210MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE210MCTRV1Dept", categoryName);
 var element = document.getElementById("CIVE270MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("CIVE270MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("CIVE270MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("CIVE270MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE270MCTRV1Dept", categoryName);
 var element = document.getElementById("CHE243MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("CHE243MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("CHE243MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("CHE243MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE243MCTRV1Dept", categoryName);
 var element = document.getElementById("MECE250MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MECE250MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MECE250MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MECE250MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE250MCTRV1Dept", categoryName);
 var element = document.getElementById("ECE240MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("ECE240MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("ECE240MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("ECE240MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE240MCTRV1Dept", categoryName);
 var element = document.getElementById("MECE350MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MECE350MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MECE350MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MECE350MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE350MCTRV1Dept", categoryName);
 var element = document.getElementById("MECE420MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MECE420MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MECE420MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MECE420MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE420MCTRV1Dept", categoryName);
 var element = document.getElementById("ECE315MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("ECE315MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("ECE315MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("ECE315MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE315MCTRV1Dept", categoryName);
       break;
      case "MCTRV2Faculty":
 var element = document.getElementById("CIVE270MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("CIVE270MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("CIVE270MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("CIVE270MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE270MCTRV2Faculty", categoryName);
 var element = document.getElementById("ECE210MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("ECE210MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("ECE210MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("ECE210MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE210MCTRV2Faculty", categoryName);
 var element = document.getElementById("ECE240MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("ECE240MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("ECE240MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("ECE240MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE240MCTRV2Faculty", categoryName);
 var element = document.getElementById("CHE243MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("CHE243MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("CHE243MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("CHE243MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE243MCTRV2Faculty", categoryName);
 var element = document.getElementById("MECE250MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MECE250MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MECE250MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MECE250MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE250MCTRV2Faculty", categoryName);
 var element = document.getElementById("ECE315MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("ECE315MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("ECE315MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("ECE315MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE315MCTRV2Faculty", categoryName);
 var element = document.getElementById("MECE350MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MECE350MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MECE350MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MECE350MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE350MCTRV2Faculty", categoryName);
 var element = document.getElementById("MECE420MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MECE420MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MECE420MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MECE420MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE420MCTRV2Faculty", categoryName);
 var element = document.getElementById("MECE465MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MECE465MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MECE465MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MECE465MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE465MCTRV2Faculty", categoryName);
       break;
      case "MCTRV3DSN":
 var element = document.getElementById("CIVE270MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("CIVE270MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("CIVE270MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("CIVE270MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE270MCTRV3DSN", categoryName);
 var element = document.getElementById("ECE210MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("ECE210MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("ECE210MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("ECE210MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE210MCTRV3DSN", categoryName);
 var element = document.getElementById("ECE240MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("ECE240MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("ECE240MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("ECE240MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE240MCTRV3DSN", categoryName);
 var element = document.getElementById("MECE250MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MECE250MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MECE250MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MECE250MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE250MCTRV3DSN", categoryName);
 var element = document.getElementById("ECE315MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("ECE315MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("ECE315MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("ECE315MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE315MCTRV3DSN", categoryName);
 var element = document.getElementById("MECE350MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MECE350MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MECE350MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MECE350MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE350MCTRV3DSN", categoryName);
 var element = document.getElementById("MECE420MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MECE420MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MECE420MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MECE420MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE420MCTRV3DSN", categoryName);
 var element = document.getElementById("MECE465MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MECE465MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MECE465MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MECE465MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE465MCTRV3DSN", categoryName);
       break;
       }
      break;
  case "EngineeringDesign":
    switch(planName) {
      case "MCTRV1Dept":
 var element = document.getElementById("MECE260MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MECE260MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MECE260MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MECE260MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE260MCTRV1Dept", categoryName);
 var element = document.getElementById("MECE265MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MECE265MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MECE265MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MECE265MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE265MCTRV1Dept", categoryName);
 var element = document.getElementById("MECE460MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MECE460MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MECE460MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MECE460MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE460MCTRV1Dept", categoryName);
 var element = document.getElementById("MECE461MCTRV1Dept");
                            if (this.MCTRV1DeptClickedMap.get("MECE461MCTRV1Dept").length > 0) {
                                var mapLen = this.MCTRV1DeptClickedMap.get("MECE461MCTRV1Dept").length - 1
                                var prevCate = this.MCTRV1DeptClickedMap.get("MECE461MCTRV1Dept")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE461MCTRV1Dept", categoryName);
       break;
      case "MCTRV2Faculty":
 var element = document.getElementById("ENGG160MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("ENGG160MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("ENGG160MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("ENGG160MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG160MCTRV2Faculty", categoryName);
 var element = document.getElementById("MECE260MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MECE260MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MECE260MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MECE260MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE260MCTRV2Faculty", categoryName);
 var element = document.getElementById("MECE265MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MECE265MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MECE265MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MECE265MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE265MCTRV2Faculty", categoryName);
 var element = document.getElementById("MECE360MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MECE360MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MECE360MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MECE360MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE360MCTRV2Faculty", categoryName);
 var element = document.getElementById("MECE460MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MECE460MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MECE460MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MECE460MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE460MCTRV2Faculty", categoryName);
 var element = document.getElementById("MECE461MCTRV2Faculty");
                            if (this.MCTRV2FacultyClickedMap.get("MECE461MCTRV2Faculty").length > 0) {
                                var mapLen = this.MCTRV2FacultyClickedMap.get("MECE461MCTRV2Faculty").length - 1
                                var prevCate = this.MCTRV2FacultyClickedMap.get("MECE461MCTRV2Faculty")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE461MCTRV2Faculty", categoryName);
       break;
      case "MCTRV3DSN":
 var element = document.getElementById("ENGG160MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("ENGG160MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("ENGG160MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("ENGG160MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG160MCTRV3DSN", categoryName);
 var element = document.getElementById("MECE260MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MECE260MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MECE260MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MECE260MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE260MCTRV3DSN", categoryName);
 var element = document.getElementById("MECE265MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MECE265MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MECE265MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MECE265MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE265MCTRV3DSN", categoryName);
 var element = document.getElementById("MECE360MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MECE360MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MECE360MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MECE360MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE360MCTRV3DSN", categoryName);
 var element = document.getElementById("MECE460MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MECE460MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MECE460MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MECE460MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE460MCTRV3DSN", categoryName);
 var element = document.getElementById("MECE461MCTRV3DSN");
                            if (this.MCTRV3DSNClickedMap.get("MECE461MCTRV3DSN").length > 0) {
                                var mapLen = this.MCTRV3DSNClickedMap.get("MECE461MCTRV3DSN").length - 1
                                var prevCate = this.MCTRV3DSNClickedMap.get("MECE461MCTRV3DSN")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE461MCTRV3DSN", categoryName);
       break;
       }
      break;
  case "ITS":
    switch(planName) {
      case "MCTRV1Dept":
        var ITSelements = document.getElementsByClassName("ITS");
        var i = 0;
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          if (this.MCTRV1DeptClickedMap.get("ITSElectiveMCTRV1Dept" + i).length > 0) {
                var mapLen = this.MCTRV1DeptClickedMap.get("ITSElectiveMCTRV1Dept" + i).length - 1
                var prevCate = this.MCTRV1DeptClickedMap.get("ITSElectiveMCTRV1Dept" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ITSElectiveMCTRV1Dept" + i, categoryName);
          i = i + 1;
        }
       break;
      case "MCTRV2Faculty":
        var ITSelements = document.getElementsByClassName("ITS");
        var i = 0;
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          if (this.MCTRV2FacultyClickedMap.get("ITSElectiveMCTRV2Faculty" + i).length > 0) {
                var mapLen = this.MCTRV2FacultyClickedMap.get("ITSElectiveMCTRV2Faculty" + i).length - 1
                var prevCate = this.MCTRV2FacultyClickedMap.get("ITSElectiveMCTRV2Faculty" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ITSElectiveMCTRV2Faculty" + i, categoryName);
          i = i + 1;
        }
       break;
      case "MCTRV3DSN":
        var ITSelements = document.getElementsByClassName("ITS");
        var i = 0;
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          if (this.MCTRV3DSNClickedMap.get("ITSElectiveMCTRV3DSN" + i).length > 0) {
                var mapLen = this.MCTRV3DSNClickedMap.get("ITSElectiveMCTRV3DSN" + i).length - 1
                var prevCate = this.MCTRV3DSNClickedMap.get("ITSElectiveMCTRV3DSN" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ITSElectiveMCTRV3DSN" + i, categoryName);
          i = i + 1;
        }
       break;
       }
      break;
  case "COMP":
  case "ComplementaryElective":
    switch(planName) {
      case "MCTRV1Dept":
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.MCTRV1DeptClickedMap.get("ComplementaryElectiveMCTRV1Dept" + i).length > 0) {
                var mapLen = this.MCTRV1DeptClickedMap.get("ComplementaryElectiveMCTRV1Dept" + i).length - 1
                var prevCate = this.MCTRV1DeptClickedMap.get("ComplementaryElectiveMCTRV1Dept" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveMCTRV1Dept" + i, categoryName);
          i = i + 1;
        }
       break;
      case "MCTRV2Faculty":
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.MCTRV2FacultyClickedMap.get("ComplementaryElectiveMCTRV2Faculty" + i).length > 0) {
                var mapLen = this.MCTRV2FacultyClickedMap.get("ComplementaryElectiveMCTRV2Faculty" + i).length - 1
                var prevCate = this.MCTRV2FacultyClickedMap.get("ComplementaryElectiveMCTRV2Faculty" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveMCTRV2Faculty" + i, categoryName);
          i = i + 1;
        }
       break;
      case "MCTRV3DSN":
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.MCTRV3DSNClickedMap.get("ComplementaryElectiveMCTRV3DSN" + i).length > 0) {
                var mapLen = this.MCTRV3DSNClickedMap.get("ComplementaryElectiveMCTRV3DSN" + i).length - 1
                var prevCate = this.MCTRV3DSNClickedMap.get("ComplementaryElectiveMCTRV3DSN" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveMCTRV3DSN" + i, categoryName);
          i = i + 1;
        }
       break;
       }
      break;
  case "PROG":
  case "ProgramTechnicalElective":
    switch(planName) {
      case "MCTRV1Dept":
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.MCTRV1DeptClickedMap.get("ProgramTechnicalElectiveMCTRV1Dept" + i).length > 0) {
                var mapLen = this.MCTRV1DeptClickedMap.get("ProgramTechnicalElectiveMCTRV1Dept" + i).length - 1
                var prevCate = this.MCTRV1DeptClickedMap.get("ProgramTechnicalElectiveMCTRV1Dept" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveMCTRV1Dept" + i, categoryName);
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.MCTRV1DeptClickedMap.get("ProgramTechnicalElectiveMCTRV1Dept" + i).length > 0) {
                var mapLen = this.MCTRV1DeptClickedMap.get("ProgramTechnicalElectiveMCTRV1Dept" + i).length - 1
                var prevCate = this.MCTRV1DeptClickedMap.get("ProgramTechnicalElectiveMCTRV1Dept" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveMCTRV1Dept" + i, categoryName);
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.MCTRV1DeptClickedMap.get("ProgramTechnicalElectiveMCTRV1Dept" + i).length > 0) {
                var mapLen = this.MCTRV1DeptClickedMap.get("ProgramTechnicalElectiveMCTRV1Dept" + i).length - 1
                var prevCate = this.MCTRV1DeptClickedMap.get("ProgramTechnicalElectiveMCTRV1Dept" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveMCTRV1Dept" + i, categoryName);
          i = i + 1;
        }
       break;
      case "MCTRV2Faculty":
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.MCTRV2FacultyClickedMap.get("ProgramTechnicalElectiveMCTRV2Faculty" + i).length > 0) {
                var mapLen = this.MCTRV2FacultyClickedMap.get("ProgramTechnicalElectiveMCTRV2Faculty" + i).length - 1
                var prevCate = this.MCTRV2FacultyClickedMap.get("ProgramTechnicalElectiveMCTRV2Faculty" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveMCTRV2Faculty" + i, categoryName);
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.MCTRV2FacultyClickedMap.get("ProgramTechnicalElectiveMCTRV2Faculty" + i).length > 0) {
                var mapLen = this.MCTRV2FacultyClickedMap.get("ProgramTechnicalElectiveMCTRV2Faculty" + i).length - 1
                var prevCate = this.MCTRV2FacultyClickedMap.get("ProgramTechnicalElectiveMCTRV2Faculty" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveMCTRV2Faculty" + i, categoryName);
          i = i + 1;
        }
       break;
      case "MCTRV3DSN":
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.MCTRV3DSNClickedMap.get("ProgramTechnicalElectiveMCTRV3DSN" + i).length > 0) {
                var mapLen = this.MCTRV3DSNClickedMap.get("ProgramTechnicalElectiveMCTRV3DSN" + i).length - 1
                var prevCate = this.MCTRV3DSNClickedMap.get("ProgramTechnicalElectiveMCTRV3DSN" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveMCTRV3DSN" + i, categoryName);
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.MCTRV3DSNClickedMap.get("ProgramTechnicalElectiveMCTRV3DSN" + i).length > 0) {
                var mapLen = this.MCTRV3DSNClickedMap.get("ProgramTechnicalElectiveMCTRV3DSN" + i).length - 1
                var prevCate = this.MCTRV3DSNClickedMap.get("ProgramTechnicalElectiveMCTRV3DSN" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveMCTRV3DSN" + i, categoryName);
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
      case "MCTRV1Dept":
     var element = document.getElementById("CHEM103MCTRV1Dept");
                            var prevCate = this.removeFromClicked("CHEM103MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG130MCTRV1Dept");
                            var prevCate = this.removeFromClicked("ENGG130MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS130MCTRV1Dept");
                            var prevCate = this.removeFromClicked("PHYS130MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHEM105MCTRV1Dept");
                            var prevCate = this.removeFromClicked("CHEM105MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENCMP100MCTRV1Dept");
                            var prevCate = this.removeFromClicked("ENCMP100MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENPH131MCTRV1Dept");
                            var prevCate = this.removeFromClicked("ENPH131MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE230MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MECE230MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "MCTRV2Faculty":
     var element = document.getElementById("CHEM103MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("CHEM103MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG130MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("ENGG130MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS130MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("PHYS130MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHEM105MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("CHEM105MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENCMP100MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("ENCMP100MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENPH131MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("ENPH131MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE230MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MECE230MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE201MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MATE201MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "MCTRV3DSN":
     var element = document.getElementById("CHEM103MCTRV3DSN");
                            var prevCate = this.removeFromClicked("CHEM103MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG130MCTRV3DSN");
                            var prevCate = this.removeFromClicked("ENGG130MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS130MCTRV3DSN");
                            var prevCate = this.removeFromClicked("PHYS130MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHEM105MCTRV3DSN");
                            var prevCate = this.removeFromClicked("CHEM105MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENCMP100MCTRV3DSN");
                            var prevCate = this.removeFromClicked("ENCMP100MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENPH131MCTRV3DSN");
                            var prevCate = this.removeFromClicked("ENPH131MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE230MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MECE230MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE201MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MATE201MCTRV3DSN", categoryName);
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
      case "MCTRV1Dept":
     var element = document.getElementById("ENGG100MCTRV1Dept");
                            var prevCate = this.removeFromClicked("ENGG100MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG101MCTRV1Dept");
                            var prevCate = this.removeFromClicked("ENGG101MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG299MCTRV1Dept");
                            var prevCate = this.removeFromClicked("ENGG299MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG404MCTRV1Dept");
                            var prevCate = this.removeFromClicked("ENGG404MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG400MCTRV1Dept");
                            var prevCate = this.removeFromClicked("ENGG400MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "MCTRV2Faculty":
     var element = document.getElementById("ENGG100MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("ENGG100MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG299MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("ENGG299MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG404MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("ENGG404MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG400MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("ENGG400MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "MCTRV3DSN":
     var element = document.getElementById("ENGG100MCTRV3DSN");
                            var prevCate = this.removeFromClicked("ENGG100MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG404MCTRV3DSN");
                            var prevCate = this.removeFromClicked("ENGG404MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG400MCTRV3DSN");
                            var prevCate = this.removeFromClicked("ENGG400MCTRV3DSN", categoryName);
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
      case "MCTRV1Dept":
     var element = document.getElementById("MATH100MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MATH100MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH101MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MATH101MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH102MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MATH102MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH209MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MATH209MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH201MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MATH201MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH309MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MATH309MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE342MCTRV1Dept");
                            var prevCate = this.removeFromClicked("ECE342MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH300MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MATH300MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE390MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MECE390MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "MCTRV2Faculty":
     var element = document.getElementById("MATH100MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MATH100MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH101MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MATH101MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH102MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MATH102MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH201MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MATH201MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH209MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MATH209MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE342MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("ECE342MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE390MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MECE390MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "MCTRV3DSN":
     var element = document.getElementById("MATH100MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MATH100MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH101MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MATH101MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH102MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MATH102MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH201MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MATH201MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH209MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MATH209MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE342MCTRV3DSN");
                            var prevCate = this.removeFromClicked("ECE342MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE390MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MECE390MCTRV3DSN", categoryName);
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
      case "MCTRV1Dept":
     var element = document.getElementById("ENGL199MCTRV1Dept");
                            var prevCate = this.removeFromClicked("ENGL199MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGL199MCTRV1Dept");
                            var prevCate = this.removeFromClicked("ENGL199MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM401MCTRV1Dept");
                            var prevCate = this.removeFromClicked("ENGM401MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "MCTRV2Faculty":
     var element = document.getElementById("ENGL199MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("ENGL199MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM401MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("ENGM401MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "MCTRV3DSN":
     var element = document.getElementById("ENGL199MCTRV3DSN");
                            var prevCate = this.removeFromClicked("ENGL199MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM401MCTRV3DSN");
                            var prevCate = this.removeFromClicked("ENGM401MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
       }
      break;
  case "Mechatronics":
    switch(planName) {
      case "MCTRV1Dept":
     var element = document.getElementById("MCTR202MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MCTR202MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR274MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MCTR274MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR275MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MCTR275MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR300MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MCTR300MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR365MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MCTR365MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR332MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MCTR332MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR460MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MCTR460MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR461MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MCTR461MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR465MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MCTR465MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "MCTRV2Faculty":
     var element = document.getElementById("MCTR202MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MCTR202MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR200MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MCTR200MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR274MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MCTR274MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR374MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MCTR374MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR300MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MCTR300MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR332MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MCTR332MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR365MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MCTR365MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR370MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MCTR370MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR460MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MCTR460MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR461MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MCTR461MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR465MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MCTR465MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "MCTRV3DSN":
     var element = document.getElementById("MCTR202MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MCTR202MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR200MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MCTR200MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR274MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MCTR274MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR374MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MCTR374MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR300MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MCTR300MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR332MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MCTR332MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR365MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MCTR365MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR370MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MCTR370MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR460MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MCTR460MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR461MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MCTR461MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MCTR465MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MCTR465MCTRV3DSN", categoryName);
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
      case "MCTRV1Dept":
     var element = document.getElementById("ECE210MCTRV1Dept");
                            var prevCate = this.removeFromClicked("ECE210MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE270MCTRV1Dept");
                            var prevCate = this.removeFromClicked("CIVE270MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE243MCTRV1Dept");
                            var prevCate = this.removeFromClicked("CHE243MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE250MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MECE250MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE240MCTRV1Dept");
                            var prevCate = this.removeFromClicked("ECE240MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE350MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MECE350MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE420MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MECE420MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE315MCTRV1Dept");
                            var prevCate = this.removeFromClicked("ECE315MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "MCTRV2Faculty":
     var element = document.getElementById("CIVE270MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("CIVE270MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE210MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("ECE210MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE240MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("ECE240MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE243MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("CHE243MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE250MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MECE250MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE315MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("ECE315MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE350MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MECE350MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE420MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MECE420MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE465MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MECE465MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "MCTRV3DSN":
     var element = document.getElementById("CIVE270MCTRV3DSN");
                            var prevCate = this.removeFromClicked("CIVE270MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE210MCTRV3DSN");
                            var prevCate = this.removeFromClicked("ECE210MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE240MCTRV3DSN");
                            var prevCate = this.removeFromClicked("ECE240MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE250MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MECE250MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE315MCTRV3DSN");
                            var prevCate = this.removeFromClicked("ECE315MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE350MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MECE350MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE420MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MECE420MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE465MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MECE465MCTRV3DSN", categoryName);
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
      case "MCTRV1Dept":
     var element = document.getElementById("MECE260MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MECE260MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE265MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MECE265MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE460MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MECE460MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE461MCTRV1Dept");
                            var prevCate = this.removeFromClicked("MECE461MCTRV1Dept", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "MCTRV2Faculty":
     var element = document.getElementById("ENGG160MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("ENGG160MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE260MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MECE260MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE265MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MECE265MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE360MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MECE360MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE460MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MECE460MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE461MCTRV2Faculty");
                            var prevCate = this.removeFromClicked("MECE461MCTRV2Faculty", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "MCTRV3DSN":
     var element = document.getElementById("ENGG160MCTRV3DSN");
                            var prevCate = this.removeFromClicked("ENGG160MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE260MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MECE260MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE265MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MECE265MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE360MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MECE360MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE460MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MECE460MCTRV3DSN", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE461MCTRV3DSN");
                            var prevCate = this.removeFromClicked("MECE461MCTRV3DSN", categoryName);
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
      case "MCTRV1Dept":
        var ITSelements = document.getElementsByClassName("ITS-highlighted");
        var i = 0;        
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          var prevCate = this.removeFromClicked("ITSElectiveMCTRV1Dept" + i, "ITS");
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
      case "MCTRV2Faculty":
        var ITSelements = document.getElementsByClassName("ITS-highlighted");
        var i = 0;        
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          var prevCate = this.removeFromClicked("ITSElectiveMCTRV2Faculty" + i, "ITS");
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
      case "MCTRV3DSN":
        var ITSelements = document.getElementsByClassName("ITS-highlighted");
        var i = 0;        
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          var prevCate = this.removeFromClicked("ITSElectiveMCTRV3DSN" + i, "ITS");
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
      case "MCTRV1Dept":
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveMCTRV1Dept" + i, "COMP");
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
      case "MCTRV2Faculty":
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveMCTRV2Faculty" + i, "COMP");
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
      case "MCTRV3DSN":
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveMCTRV3DSN" + i, "COMP");
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
      case "MCTRV1Dept":
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveMCTRV1Dept" + i, "PROG");
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
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveMCTRV1Dept" + i, "PROG");
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
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveMCTRV1Dept" + i, "PROG");
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
      case "MCTRV2Faculty":
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveMCTRV2Faculty" + i, "PROG");
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
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveMCTRV2Faculty" + i, "PROG");
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
      case "MCTRV3DSN":
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveMCTRV3DSN" + i, "PROG");
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
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveMCTRV3DSN" + i, "PROG");
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
  var CHEM103MCTRV1Deptflag = false;
  var CHEM103MCTRV1Deptrflag = false;
 var CHEM103MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("CHEM103MCTRV1Dept", []);
  var ENGG100MCTRV1Deptflag = false;
  var ENGG100MCTRV1Deptrflag = false;
 var ENGG100MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("ENGG100MCTRV1Dept", []);
  var ENGG130MCTRV1Deptflag = false;
  var ENGG130MCTRV1Deptrflag = false;
 var ENGG130MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("ENGG130MCTRV1Dept", []);
  var MATH100MCTRV1Deptflag = false;
  var MATH100MCTRV1Deptrflag = false;
 var MATH100MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MATH100MCTRV1Dept", []);
  var PHYS130MCTRV1Deptflag = false;
  var PHYS130MCTRV1Deptrflag = false;
 var PHYS130MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("PHYS130MCTRV1Dept", []);
  var ENGL199MCTRV1Deptflag = false;
  var ENGL199MCTRV1Deptrflag = false;
 var ENGL199MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("ENGL199MCTRV1Dept", []);
  var CHEM105MCTRV1Deptflag = false;
  var CHEM105MCTRV1Deptrflag = false;
 var CHEM105MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("CHEM105MCTRV1Dept", []);
  var ENCMP100MCTRV1Deptflag = false;
  var ENCMP100MCTRV1Deptrflag = false;
 var ENCMP100MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("ENCMP100MCTRV1Dept", []);
  var ENGG101MCTRV1Deptflag = false;
  var ENGG101MCTRV1Deptrflag = false;
 var ENGG101MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("ENGG101MCTRV1Dept", []);
  var ENPH131MCTRV1Deptflag = false;
  var ENPH131MCTRV1Deptrflag = false;
 var ENPH131MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("ENPH131MCTRV1Dept", []);
  var MATH101MCTRV1Deptflag = false;
  var MATH101MCTRV1Deptrflag = false;
 var MATH101MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MATH101MCTRV1Dept", []);
  var MATH102MCTRV1Deptflag = false;
  var MATH102MCTRV1Deptrflag = false;
 var MATH102MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MATH102MCTRV1Dept", []);
  var MCTR202MCTRV1Deptflag = false;
  var MCTR202MCTRV1Deptrflag = false;
 var MCTR202MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MCTR202MCTRV1Dept", []);
  var ECE210MCTRV1Deptflag = false;
  var ECE210MCTRV1Deptrflag = false;
 var ECE210MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("ECE210MCTRV1Dept", []);
  var CIVE270MCTRV1Deptflag = false;
  var CIVE270MCTRV1Deptrflag = false;
 var CIVE270MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("CIVE270MCTRV1Dept", []);
  var MATH209MCTRV1Deptflag = false;
  var MATH209MCTRV1Deptrflag = false;
 var MATH209MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MATH209MCTRV1Dept", []);
  var MECE230MCTRV1Deptflag = false;
  var MECE230MCTRV1Deptrflag = false;
 var MECE230MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MECE230MCTRV1Dept", []);
  var CHE243MCTRV1Deptflag = false;
  var CHE243MCTRV1Deptrflag = false;
 var CHE243MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("CHE243MCTRV1Dept", []);
  var ENGG299MCTRV1Deptflag = false;
  var ENGG299MCTRV1Deptrflag = false;
 var ENGG299MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("ENGG299MCTRV1Dept", []);
  var MECE250MCTRV1Deptflag = false;
  var MECE250MCTRV1Deptrflag = false;
 var MECE250MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MECE250MCTRV1Dept", []);
  var MCTR274MCTRV1Deptflag = false;
  var MCTR274MCTRV1Deptrflag = false;
 var MCTR274MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MCTR274MCTRV1Dept", []);
  var ECE240MCTRV1Deptflag = false;
  var ECE240MCTRV1Deptrflag = false;
 var ECE240MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("ECE240MCTRV1Dept", []);
  var MATH201MCTRV1Deptflag = false;
  var MATH201MCTRV1Deptrflag = false;
 var MATH201MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MATH201MCTRV1Dept", []);
  var MECE260MCTRV1Deptflag = false;
  var MECE260MCTRV1Deptrflag = false;
 var MECE260MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MECE260MCTRV1Dept", []);
  var MECE265MCTRV1Deptflag = false;
  var MECE265MCTRV1Deptrflag = false;
 var MECE265MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MECE265MCTRV1Dept", []);
  var MECE350MCTRV1Deptflag = false;
  var MECE350MCTRV1Deptrflag = false;
 var MECE350MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MECE350MCTRV1Dept", []);
  var MECE420MCTRV1Deptflag = false;
  var MECE420MCTRV1Deptrflag = false;
 var MECE420MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MECE420MCTRV1Dept", []);
  var ECE360MCTRV1Deptflag = false;
  var ECE360MCTRV1Deptrflag = false;
 var ECE360MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("ECE360MCTRV1Dept", []);
  var MATH309MCTRV1Deptflag = false;
  var MATH309MCTRV1Deptrflag = false;
 var MATH309MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MATH309MCTRV1Dept", []);
  var ECE315MCTRV1Deptflag = false;
  var ECE315MCTRV1Deptrflag = false;
 var ECE315MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("ECE315MCTRV1Dept", []);
  var ENGL199MCTRV1Deptflag = false;
  var ENGL199MCTRV1Deptrflag = false;
 var ENGL199MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("ENGL199MCTRV1Dept", []);
  var MCTR275MCTRV1Deptflag = false;
  var MCTR275MCTRV1Deptrflag = false;
 var MCTR275MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MCTR275MCTRV1Dept", []);
  var MCTR300MCTRV1Deptflag = false;
  var MCTR300MCTRV1Deptrflag = false;
 var MCTR300MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MCTR300MCTRV1Dept", []);
  var ECE342MCTRV1Deptflag = false;
  var ECE342MCTRV1Deptrflag = false;
 var ECE342MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("ECE342MCTRV1Dept", []);
  var MCTR365MCTRV1Deptflag = false;
  var MCTR365MCTRV1Deptrflag = false;
 var MCTR365MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MCTR365MCTRV1Dept", []);
  var ENGM401MCTRV1Deptflag = false;
  var ENGM401MCTRV1Deptrflag = false;
 var ENGM401MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("ENGM401MCTRV1Dept", []);
  var MCTR332MCTRV1Deptflag = false;
  var MCTR332MCTRV1Deptrflag = false;
 var MCTR332MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MCTR332MCTRV1Dept", []);
  var ITSElectiveMCTRV1Dept0flag = false;
  var ITSElectiveMCTRV1Dept0rflag = false;
 var ITSElectiveMCTRV1Dept0Time = new Date().getTime();
this.MCTRV1DeptClickedMap.set("ITSElectiveMCTRV1Dept0", []);
  var MECE460MCTRV1Deptflag = false;
  var MECE460MCTRV1Deptrflag = false;
 var MECE460MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MECE460MCTRV1Dept", []);
  var MCTR460MCTRV1Deptflag = false;
  var MCTR460MCTRV1Deptrflag = false;
 var MCTR460MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MCTR460MCTRV1Dept", []);
  var MATH300MCTRV1Deptflag = false;
  var MATH300MCTRV1Deptrflag = false;
 var MATH300MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MATH300MCTRV1Dept", []);
  var ComplementaryElectiveMCTRV1Dept0flag = false;
  var ComplementaryElectiveMCTRV1Dept0rflag = false;
 var ComplementaryElectiveMCTRV1Dept0Time = new Date().getTime();
this.MCTRV1DeptClickedMap.set("ComplementaryElectiveMCTRV1Dept0", []);
  var MECE390MCTRV1Deptflag = false;
  var MECE390MCTRV1Deptrflag = false;
 var MECE390MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MECE390MCTRV1Dept", []);
  var ProgramTechnicalElectiveMCTRV1Dept0flag = false;
  var ProgramTechnicalElectiveMCTRV1Dept0rflag = false;
 var ProgramTechnicalElectiveMCTRV1Dept0Time = new Date().getTime();
this.MCTRV1DeptClickedMap.set("ProgramTechnicalElectiveMCTRV1Dept0", []);
  var MECE461MCTRV1Deptflag = false;
  var MECE461MCTRV1Deptrflag = false;
 var MECE461MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MECE461MCTRV1Dept", []);
  var MCTR461MCTRV1Deptflag = false;
  var MCTR461MCTRV1Deptrflag = false;
 var MCTR461MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MCTR461MCTRV1Dept", []);
  var MCTR465MCTRV1Deptflag = false;
  var MCTR465MCTRV1Deptrflag = false;
 var MCTR465MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("MCTR465MCTRV1Dept", []);
  var ENGG404MCTRV1Deptflag = false;
  var ENGG404MCTRV1Deptrflag = false;
 var ENGG404MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("ENGG404MCTRV1Dept", []);
  var ENGG400MCTRV1Deptflag = false;
  var ENGG400MCTRV1Deptrflag = false;
 var ENGG400MCTRV1DeptTime = new Date().getTime();
this.MCTRV1DeptClickedMap.set("ENGG400MCTRV1Dept", []);
  var ProgramTechnicalElectiveMCTRV1Dept1flag = false;
  var ProgramTechnicalElectiveMCTRV1Dept1rflag = false;
 var ProgramTechnicalElectiveMCTRV1Dept1Time = new Date().getTime();
this.MCTRV1DeptClickedMap.set("ProgramTechnicalElectiveMCTRV1Dept1", []);
  var ProgramTechnicalElectiveMCTRV1Dept2flag = false;
  var ProgramTechnicalElectiveMCTRV1Dept2rflag = false;
 var ProgramTechnicalElectiveMCTRV1Dept2Time = new Date().getTime();
this.MCTRV1DeptClickedMap.set("ProgramTechnicalElectiveMCTRV1Dept2", []);
$scope.CHEM103MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103MCTRV1DeptTime <= 200) { 
        CHEM103MCTRV1DeptTime = currentTime;
        return;
    }
CHEM103MCTRV1DeptTime = currentTime;
  var CHEM103MCTRV1Deptelement = document.getElementById("CHEM103MCTRV1Dept");
 if (!CHEM103MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("CHEM103MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("CHEM103MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("CHEM103MCTRV1Dept")[i];
        if (CHEM103MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM103MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine2());
     that.highlightElement(CHEM103MCTRV1Deptelement, "NaturalSciences");
     that.addToClicked("CHEM103MCTRV1Dept", "NaturalSciences");
      CHEM103MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine2());
     that.unHighlightElement(CHEM103MCTRV1Deptelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM103MCTRV1Dept", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM103MCTRV1Deptelement, category);
}
      CHEM103MCTRV1Deptflag=false
  }
};
$scope.ENGG100MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG100MCTRV1DeptTime <= 200) { 
        ENGG100MCTRV1DeptTime = currentTime;
        return;
    }
ENGG100MCTRV1DeptTime = currentTime;
  var ENGG100MCTRV1Deptelement = document.getElementById("ENGG100MCTRV1Dept");
 if (!ENGG100MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("ENGG100MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("ENGG100MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("ENGG100MCTRV1Dept")[i];
        if (ENGG100MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG100MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG100MCTRV1Deptelement, "EngineeringProfession");
     that.addToClicked("ENGG100MCTRV1Dept", "EngineeringProfession");
      ENGG100MCTRV1Deptflag=true
  }
 else {
     that.unHighlightElement(ENGG100MCTRV1Deptelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG100MCTRV1Dept", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG100MCTRV1Deptelement, category);
}
      ENGG100MCTRV1Deptflag=false
  }
};
$scope.ENGG130MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG130MCTRV1DeptTime <= 200) { 
        ENGG130MCTRV1DeptTime = currentTime;
        return;
    }
ENGG130MCTRV1DeptTime = currentTime;
  var ENGG130MCTRV1Deptelement = document.getElementById("ENGG130MCTRV1Dept");
 if (!ENGG130MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("ENGG130MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("ENGG130MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("ENGG130MCTRV1Dept")[i];
        if (ENGG130MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG130MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine0());
      that.addLine(getLine4());
      that.addLine(getLine11());
      that.addLine(getLine18());
     that.highlightElement(ENGG130MCTRV1Deptelement, "NaturalSciences");
     that.addToClicked("ENGG130MCTRV1Dept", "NaturalSciences");
      ENGG130MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine4());
      that.removeLine(getLine11());
      that.removeLine(getLine18());
     that.unHighlightElement(ENGG130MCTRV1Deptelement, "NaturalSciences");
     var category = that.removeFromClicked("ENGG130MCTRV1Dept", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENGG130MCTRV1Deptelement, category);
}
      ENGG130MCTRV1Deptflag=false
  }
};
$scope.MATH100MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH100MCTRV1DeptTime <= 200) { 
        MATH100MCTRV1DeptTime = currentTime;
        return;
    }
MATH100MCTRV1DeptTime = currentTime;
  var MATH100MCTRV1Deptelement = document.getElementById("MATH100MCTRV1Dept");
 if (!MATH100MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MATH100MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MATH100MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MATH100MCTRV1Dept")[i];
        if (MATH100MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH100MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine0());
      that.addLine(getLine1());
      that.addLine(getLine3());
      that.addLine(getLine6());
      that.addLine(getLine7());
     that.highlightElement(MATH100MCTRV1Deptelement, "Math");
     that.addToClicked("MATH100MCTRV1Dept", "Math");
      MATH100MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine1());
      that.removeLine(getLine3());
      that.removeLine(getLine6());
      that.removeLine(getLine7());
     that.unHighlightElement(MATH100MCTRV1Deptelement, "Math");
     var category = that.removeFromClicked("MATH100MCTRV1Dept", "Math");
  if (category != "") { 
     that.highlightElement(MATH100MCTRV1Deptelement, category);
}
      MATH100MCTRV1Deptflag=false
  }
};
$scope.PHYS130MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS130MCTRV1DeptTime <= 200) { 
        PHYS130MCTRV1DeptTime = currentTime;
        return;
    }
PHYS130MCTRV1DeptTime = currentTime;
  var PHYS130MCTRV1Deptelement = document.getElementById("PHYS130MCTRV1Dept");
 if (!PHYS130MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("PHYS130MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("PHYS130MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("PHYS130MCTRV1Dept")[i];
        if (PHYS130MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS130MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine1());
     that.highlightElement(PHYS130MCTRV1Deptelement, "NaturalSciences");
     that.addToClicked("PHYS130MCTRV1Dept", "NaturalSciences");
      PHYS130MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine1());
     that.unHighlightElement(PHYS130MCTRV1Deptelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS130MCTRV1Dept", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS130MCTRV1Deptelement, category);
}
      PHYS130MCTRV1Deptflag=false
  }
};
$scope.ENGL199MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGL199MCTRV1DeptTime <= 200) { 
        ENGL199MCTRV1DeptTime = currentTime;
        return;
    }
ENGL199MCTRV1DeptTime = currentTime;
  var ENGL199MCTRV1Deptelement = document.getElementById("ENGL199MCTRV1Dept");
 if (!ENGL199MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("ENGL199MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("ENGL199MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("ENGL199MCTRV1Dept")[i];
        if (ENGL199MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGL199MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGL199MCTRV1Deptelement, "Other");
     that.addToClicked("ENGL199MCTRV1Dept", "Other");
      ENGL199MCTRV1Deptflag=true
  }
 else {
     that.unHighlightElement(ENGL199MCTRV1Deptelement, "Other");
     var category = that.removeFromClicked("ENGL199MCTRV1Dept", "Other");
  if (category != "") { 
     that.highlightElement(ENGL199MCTRV1Deptelement, category);
}
      ENGL199MCTRV1Deptflag=false
  }
};
$scope.CHEM105MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM105MCTRV1DeptTime <= 200) { 
        CHEM105MCTRV1DeptTime = currentTime;
        return;
    }
CHEM105MCTRV1DeptTime = currentTime;
  var CHEM105MCTRV1Deptelement = document.getElementById("CHEM105MCTRV1Dept");
 if (!CHEM105MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("CHEM105MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("CHEM105MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("CHEM105MCTRV1Dept")[i];
        if (CHEM105MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM105MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine2());
     that.highlightElement(CHEM105MCTRV1Deptelement, "NaturalSciences");
     that.addToClicked("CHEM105MCTRV1Dept", "NaturalSciences");
      CHEM105MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine2());
     that.unHighlightElement(CHEM105MCTRV1Deptelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM105MCTRV1Dept", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM105MCTRV1Deptelement, category);
}
      CHEM105MCTRV1Deptflag=false
  }
};
$scope.ENCMP100MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENCMP100MCTRV1DeptTime <= 200) { 
        ENCMP100MCTRV1DeptTime = currentTime;
        return;
    }
ENCMP100MCTRV1DeptTime = currentTime;
  var ENCMP100MCTRV1Deptelement = document.getElementById("ENCMP100MCTRV1Dept");
 if (!ENCMP100MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("ENCMP100MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("ENCMP100MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("ENCMP100MCTRV1Dept")[i];
        if (ENCMP100MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENCMP100MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine21());
     that.highlightElement(ENCMP100MCTRV1Deptelement, "NaturalSciences");
     that.addToClicked("ENCMP100MCTRV1Dept", "NaturalSciences");
      ENCMP100MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine21());
     that.unHighlightElement(ENCMP100MCTRV1Deptelement, "NaturalSciences");
     var category = that.removeFromClicked("ENCMP100MCTRV1Dept", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENCMP100MCTRV1Deptelement, category);
}
      ENCMP100MCTRV1Deptflag=false
  }
};
$scope.ENGG101MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG101MCTRV1DeptTime <= 200) { 
        ENGG101MCTRV1DeptTime = currentTime;
        return;
    }
ENGG101MCTRV1DeptTime = currentTime;
  var ENGG101MCTRV1Deptelement = document.getElementById("ENGG101MCTRV1Dept");
 if (!ENGG101MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("ENGG101MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("ENGG101MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("ENGG101MCTRV1Dept")[i];
        if (ENGG101MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG101MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG101MCTRV1Deptelement, "EngineeringProfession");
     that.addToClicked("ENGG101MCTRV1Dept", "EngineeringProfession");
      ENGG101MCTRV1Deptflag=true
  }
 else {
     that.unHighlightElement(ENGG101MCTRV1Deptelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG101MCTRV1Dept", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG101MCTRV1Deptelement, category);
}
      ENGG101MCTRV1Deptflag=false
  }
};
$scope.ENPH131MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENPH131MCTRV1DeptTime <= 200) { 
        ENPH131MCTRV1DeptTime = currentTime;
        return;
    }
ENPH131MCTRV1DeptTime = currentTime;
  var ENPH131MCTRV1Deptelement = document.getElementById("ENPH131MCTRV1Dept");
 if (!ENPH131MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("ENPH131MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("ENPH131MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("ENPH131MCTRV1Dept")[i];
        if (ENPH131MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENPH131MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine3());
      that.addLine(getLine4());
      that.addLine(getLine5());
      that.addLine(getLine16());
      that.addLine(getLine19());
     that.highlightElement(ENPH131MCTRV1Deptelement, "NaturalSciences");
     that.addToClicked("ENPH131MCTRV1Dept", "NaturalSciences");
      ENPH131MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine3());
      that.removeLine(getLine4());
      that.removeLine(getLine5());
      that.removeLine(getLine16());
      that.removeLine(getLine19());
     that.unHighlightElement(ENPH131MCTRV1Deptelement, "NaturalSciences");
     var category = that.removeFromClicked("ENPH131MCTRV1Dept", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENPH131MCTRV1Deptelement, category);
}
      ENPH131MCTRV1Deptflag=false
  }
};
$scope.MATH101MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH101MCTRV1DeptTime <= 200) { 
        MATH101MCTRV1DeptTime = currentTime;
        return;
    }
MATH101MCTRV1DeptTime = currentTime;
  var MATH101MCTRV1Deptelement = document.getElementById("MATH101MCTRV1Dept");
 if (!MATH101MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MATH101MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MATH101MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MATH101MCTRV1Dept")[i];
        if (MATH101MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH101MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine5());
      that.addLine(getLine6());
      that.addLine(getLine8());
      that.addLine(getLine12());
      that.addLine(getLine13());
      that.addLine(getLine15());
      that.addLine(getLine17());
      that.addLine(getLine20());
     that.highlightElement(MATH101MCTRV1Deptelement, "Math");
     that.addToClicked("MATH101MCTRV1Dept", "Math");
      MATH101MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine5());
      that.removeLine(getLine6());
      that.removeLine(getLine8());
      that.removeLine(getLine12());
      that.removeLine(getLine13());
      that.removeLine(getLine15());
      that.removeLine(getLine17());
      that.removeLine(getLine20());
     that.unHighlightElement(MATH101MCTRV1Deptelement, "Math");
     var category = that.removeFromClicked("MATH101MCTRV1Dept", "Math");
  if (category != "") { 
     that.highlightElement(MATH101MCTRV1Deptelement, category);
}
      MATH101MCTRV1Deptflag=false
  }
};
$scope.MATH102MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH102MCTRV1DeptTime <= 200) { 
        MATH102MCTRV1DeptTime = currentTime;
        return;
    }
MATH102MCTRV1DeptTime = currentTime;
  var MATH102MCTRV1Deptelement = document.getElementById("MATH102MCTRV1Dept");
 if (!MATH102MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MATH102MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MATH102MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MATH102MCTRV1Dept")[i];
        if (MATH102MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH102MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine7());
      that.addLine(getLine9());
      that.addLine(getLine14());
      that.addLine(getLine44());
     that.highlightElement(MATH102MCTRV1Deptelement, "Math");
     that.addToClicked("MATH102MCTRV1Dept", "Math");
      MATH102MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine7());
      that.removeLine(getLine9());
      that.removeLine(getLine14());
      that.removeLine(getLine44());
     that.unHighlightElement(MATH102MCTRV1Deptelement, "Math");
     var category = that.removeFromClicked("MATH102MCTRV1Dept", "Math");
  if (category != "") { 
     that.highlightElement(MATH102MCTRV1Deptelement, category);
}
      MATH102MCTRV1Deptflag=false
  }
};
$scope.MCTR202MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR202MCTRV1DeptTime <= 200) { 
        MCTR202MCTRV1DeptTime = currentTime;
        return;
    }
MCTR202MCTRV1DeptTime = currentTime;
  var MCTR202MCTRV1Deptelement = document.getElementById("MCTR202MCTRV1Dept");
 if (!MCTR202MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MCTR202MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MCTR202MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MCTR202MCTRV1Dept")[i];
        if (MCTR202MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR202MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine8());
      that.addLine(getLine9());
      that.addLine(getLine10());
      that.addLine(getLine22());
      that.addLine(getLine31());
      that.addLine(getLine33());
      that.addLine(getLine38());
     that.highlightElement(MCTR202MCTRV1Deptelement, "Mechatronics");
     that.addToClicked("MCTR202MCTRV1Dept", "Mechatronics");
      MCTR202MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine8());
      that.removeLine(getLine9());
      that.removeLine(getLine10());
      that.removeLine(getLine22());
      that.removeLine(getLine31());
      that.removeLine(getLine33());
      that.removeLine(getLine38());
     that.unHighlightElement(MCTR202MCTRV1Deptelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR202MCTRV1Dept", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR202MCTRV1Deptelement, category);
}
      MCTR202MCTRV1Deptflag=false
  }
};
$scope.ECE210MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE210MCTRV1DeptTime <= 200) { 
        ECE210MCTRV1DeptTime = currentTime;
        return;
    }
ECE210MCTRV1DeptTime = currentTime;
  var ECE210MCTRV1Deptelement = document.getElementById("ECE210MCTRV1Dept");
 if (!ECE210MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("ECE210MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("ECE210MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("ECE210MCTRV1Dept")[i];
        if (ECE210MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE210MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ECE210MCTRV1Deptelement, "EngineeringSciences");
     that.addToClicked("ECE210MCTRV1Dept", "EngineeringSciences");
      ECE210MCTRV1Deptflag=true
  }
 else {
     that.unHighlightElement(ECE210MCTRV1Deptelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE210MCTRV1Dept", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE210MCTRV1Deptelement, category);
}
      ECE210MCTRV1Deptflag=false
  }
};
$scope.CIVE270MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE270MCTRV1DeptTime <= 200) { 
        CIVE270MCTRV1DeptTime = currentTime;
        return;
    }
CIVE270MCTRV1DeptTime = currentTime;
  var CIVE270MCTRV1Deptelement = document.getElementById("CIVE270MCTRV1Dept");
 if (!CIVE270MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("CIVE270MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("CIVE270MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("CIVE270MCTRV1Dept")[i];
        if (CIVE270MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE270MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine11());
      that.addLine(getLine12());
      that.addLine(getLine26());
      that.addLine(getLine32());
     that.highlightElement(CIVE270MCTRV1Deptelement, "EngineeringSciences");
     that.addToClicked("CIVE270MCTRV1Dept", "EngineeringSciences");
      CIVE270MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine11());
      that.removeLine(getLine12());
      that.removeLine(getLine26());
      that.removeLine(getLine32());
     that.unHighlightElement(CIVE270MCTRV1Deptelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE270MCTRV1Dept", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE270MCTRV1Deptelement, category);
}
      CIVE270MCTRV1Deptflag=false
  }
};
$scope.MATH209MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH209MCTRV1DeptTime <= 200) { 
        MATH209MCTRV1DeptTime = currentTime;
        return;
    }
MATH209MCTRV1DeptTime = currentTime;
  var MATH209MCTRV1Deptelement = document.getElementById("MATH209MCTRV1Dept");
 if (!MATH209MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MATH209MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MATH209MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MATH209MCTRV1Dept")[i];
        if (MATH209MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH209MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine13());
      that.addLine(getLine14());
      that.addLine(getLine24());
      that.addLine(getLine30());
      that.addLine(getLine35());
      that.addLine(getLine43());
     that.highlightElement(MATH209MCTRV1Deptelement, "Math");
     that.addToClicked("MATH209MCTRV1Dept", "Math");
      MATH209MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine13());
      that.removeLine(getLine14());
      that.removeLine(getLine24());
      that.removeLine(getLine30());
      that.removeLine(getLine35());
      that.removeLine(getLine43());
     that.unHighlightElement(MATH209MCTRV1Deptelement, "Math");
     var category = that.removeFromClicked("MATH209MCTRV1Dept", "Math");
  if (category != "") { 
     that.highlightElement(MATH209MCTRV1Deptelement, category);
}
      MATH209MCTRV1Deptflag=false
  }
};
$scope.MECE230MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE230MCTRV1DeptTime <= 200) { 
        MECE230MCTRV1DeptTime = currentTime;
        return;
    }
MECE230MCTRV1DeptTime = currentTime;
  var MECE230MCTRV1Deptelement = document.getElementById("MECE230MCTRV1Dept");
 if (!MECE230MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MECE230MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MECE230MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MECE230MCTRV1Dept")[i];
        if (MECE230MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE230MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine15());
      that.addLine(getLine16());
     that.highlightElement(MECE230MCTRV1Deptelement, "NaturalSciences");
     that.addToClicked("MECE230MCTRV1Dept", "NaturalSciences");
      MECE230MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine15());
      that.removeLine(getLine16());
     that.unHighlightElement(MECE230MCTRV1Deptelement, "NaturalSciences");
     var category = that.removeFromClicked("MECE230MCTRV1Dept", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(MECE230MCTRV1Deptelement, category);
}
      MECE230MCTRV1Deptflag=false
  }
};
$scope.CHE243MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE243MCTRV1DeptTime <= 200) { 
        CHE243MCTRV1DeptTime = currentTime;
        return;
    }
CHE243MCTRV1DeptTime = currentTime;
  var CHE243MCTRV1Deptelement = document.getElementById("CHE243MCTRV1Dept");
 if (!CHE243MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("CHE243MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("CHE243MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("CHE243MCTRV1Dept")[i];
        if (CHE243MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE243MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine17());
     that.highlightElement(CHE243MCTRV1Deptelement, "EngineeringSciences");
     that.addToClicked("CHE243MCTRV1Dept", "EngineeringSciences");
      CHE243MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine17());
     that.unHighlightElement(CHE243MCTRV1Deptelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE243MCTRV1Dept", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE243MCTRV1Deptelement, category);
}
      CHE243MCTRV1Deptflag=false
  }
};
$scope.ENGG299MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG299MCTRV1DeptTime <= 200) { 
        ENGG299MCTRV1DeptTime = currentTime;
        return;
    }
ENGG299MCTRV1DeptTime = currentTime;
  var ENGG299MCTRV1Deptelement = document.getElementById("ENGG299MCTRV1Dept");
 if (!ENGG299MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("ENGG299MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("ENGG299MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("ENGG299MCTRV1Dept")[i];
        if (ENGG299MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG299MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG299MCTRV1Deptelement, "EngineeringProfession");
     that.addToClicked("ENGG299MCTRV1Dept", "EngineeringProfession");
      ENGG299MCTRV1Deptflag=true
  }
 else {
     that.unHighlightElement(ENGG299MCTRV1Deptelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG299MCTRV1Dept", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG299MCTRV1Deptelement, category);
}
      ENGG299MCTRV1Deptflag=false
  }
};
$scope.MECE250MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE250MCTRV1DeptTime <= 200) { 
        MECE250MCTRV1DeptTime = currentTime;
        return;
    }
MECE250MCTRV1DeptTime = currentTime;
  var MECE250MCTRV1Deptelement = document.getElementById("MECE250MCTRV1Dept");
 if (!MECE250MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MECE250MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MECE250MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MECE250MCTRV1Dept")[i];
        if (MECE250MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE250MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine18());
      that.addLine(getLine19());
      that.addLine(getLine20());
      that.addLine(getLine27());
     that.highlightElement(MECE250MCTRV1Deptelement, "EngineeringSciences");
     that.addToClicked("MECE250MCTRV1Dept", "EngineeringSciences");
      MECE250MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine18());
      that.removeLine(getLine19());
      that.removeLine(getLine20());
      that.removeLine(getLine27());
     that.unHighlightElement(MECE250MCTRV1Deptelement, "EngineeringSciences");
     var category = that.removeFromClicked("MECE250MCTRV1Dept", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MECE250MCTRV1Deptelement, category);
}
      MECE250MCTRV1Deptflag=false
  }
};
$scope.MCTR274MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR274MCTRV1DeptTime <= 200) { 
        MCTR274MCTRV1DeptTime = currentTime;
        return;
    }
MCTR274MCTRV1DeptTime = currentTime;
  var MCTR274MCTRV1Deptelement = document.getElementById("MCTR274MCTRV1Dept");
 if (!MCTR274MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MCTR274MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MCTR274MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MCTR274MCTRV1Dept")[i];
        if (MCTR274MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR274MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine21());
      that.addLine(getLine36());
     that.highlightElement(MCTR274MCTRV1Deptelement, "Mechatronics");
     that.addToClicked("MCTR274MCTRV1Dept", "Mechatronics");
      MCTR274MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine21());
      that.removeLine(getLine36());
     that.unHighlightElement(MCTR274MCTRV1Deptelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR274MCTRV1Dept", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR274MCTRV1Deptelement, category);
}
      MCTR274MCTRV1Deptflag=false
  }
};
$scope.ECE240MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE240MCTRV1DeptTime <= 200) { 
        ECE240MCTRV1DeptTime = currentTime;
        return;
    }
ECE240MCTRV1DeptTime = currentTime;
  var ECE240MCTRV1Deptelement = document.getElementById("ECE240MCTRV1Dept");
 if (!ECE240MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("ECE240MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("ECE240MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("ECE240MCTRV1Dept")[i];
        if (ECE240MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE240MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine10());
      that.addLine(getLine22());
      that.addLine(getLine23());
      that.addLine(getLine29());
     that.highlightElement(ECE240MCTRV1Deptelement, "EngineeringSciences");
     that.addToClicked("ECE240MCTRV1Dept", "EngineeringSciences");
      ECE240MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine10());
      that.removeLine(getLine22());
      that.removeLine(getLine23());
      that.removeLine(getLine29());
     that.unHighlightElement(ECE240MCTRV1Deptelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE240MCTRV1Dept", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE240MCTRV1Deptelement, category);
}
      ECE240MCTRV1Deptflag=false
  }
};
$scope.MATH201MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH201MCTRV1DeptTime <= 200) { 
        MATH201MCTRV1DeptTime = currentTime;
        return;
    }
MATH201MCTRV1DeptTime = currentTime;
  var MATH201MCTRV1Deptelement = document.getElementById("MATH201MCTRV1Dept");
 if (!MATH201MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MATH201MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MATH201MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MATH201MCTRV1Dept")[i];
        if (MATH201MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH201MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine23());
      that.addLine(getLine24());
      that.addLine(getLine42());
      that.addLine(getLine45());
     that.highlightElement(MATH201MCTRV1Deptelement, "Math");
     that.addToClicked("MATH201MCTRV1Dept", "Math");
      MATH201MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine23());
      that.removeLine(getLine24());
      that.removeLine(getLine42());
      that.removeLine(getLine45());
     that.unHighlightElement(MATH201MCTRV1Deptelement, "Math");
     var category = that.removeFromClicked("MATH201MCTRV1Dept", "Math");
  if (category != "") { 
     that.highlightElement(MATH201MCTRV1Deptelement, category);
}
      MATH201MCTRV1Deptflag=false
  }
};
$scope.MECE260MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE260MCTRV1DeptTime <= 200) { 
        MECE260MCTRV1DeptTime = currentTime;
        return;
    }
MECE260MCTRV1DeptTime = currentTime;
  var MECE260MCTRV1Deptelement = document.getElementById("MECE260MCTRV1Dept");
 if (!MECE260MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MECE260MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MECE260MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MECE260MCTRV1Dept")[i];
        if (MECE260MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE260MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine25());
      that.addLine(getLine26());
     that.highlightElement(MECE260MCTRV1Deptelement, "EngineeringDesign");
     that.addToClicked("MECE260MCTRV1Dept", "EngineeringDesign");
      MECE260MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine25());
      that.removeLine(getLine26());
     that.unHighlightElement(MECE260MCTRV1Deptelement, "EngineeringDesign");
     var category = that.removeFromClicked("MECE260MCTRV1Dept", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MECE260MCTRV1Deptelement, category);
}
      MECE260MCTRV1Deptflag=false
  }
};
$scope.MECE265MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE265MCTRV1DeptTime <= 200) { 
        MECE265MCTRV1DeptTime = currentTime;
        return;
    }
MECE265MCTRV1DeptTime = currentTime;
  var MECE265MCTRV1Deptelement = document.getElementById("MECE265MCTRV1Dept");
 if (!MECE265MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MECE265MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MECE265MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MECE265MCTRV1Dept")[i];
        if (MECE265MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE265MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine25());
     that.highlightElement(MECE265MCTRV1Deptelement, "EngineeringDesign");
     that.addToClicked("MECE265MCTRV1Dept", "EngineeringDesign");
      MECE265MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine25());
     that.unHighlightElement(MECE265MCTRV1Deptelement, "EngineeringDesign");
     var category = that.removeFromClicked("MECE265MCTRV1Dept", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MECE265MCTRV1Deptelement, category);
}
      MECE265MCTRV1Deptflag=false
  }
};
$scope.MECE350MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE350MCTRV1DeptTime <= 200) { 
        MECE350MCTRV1DeptTime = currentTime;
        return;
    }
MECE350MCTRV1DeptTime = currentTime;
  var MECE350MCTRV1Deptelement = document.getElementById("MECE350MCTRV1Dept");
 if (!MECE350MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MECE350MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MECE350MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MECE350MCTRV1Dept")[i];
        if (MECE350MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE350MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine27());
     that.highlightElement(MECE350MCTRV1Deptelement, "EngineeringSciences");
     that.addToClicked("MECE350MCTRV1Dept", "EngineeringSciences");
      MECE350MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine27());
     that.unHighlightElement(MECE350MCTRV1Deptelement, "EngineeringSciences");
     var category = that.removeFromClicked("MECE350MCTRV1Dept", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MECE350MCTRV1Deptelement, category);
}
      MECE350MCTRV1Deptflag=false
  }
};
$scope.MECE420MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE420MCTRV1DeptTime <= 200) { 
        MECE420MCTRV1DeptTime = currentTime;
        return;
    }
MECE420MCTRV1DeptTime = currentTime;
  var MECE420MCTRV1Deptelement = document.getElementById("MECE420MCTRV1Dept");
 if (!MECE420MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MECE420MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MECE420MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MECE420MCTRV1Dept")[i];
        if (MECE420MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE420MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine28());
      that.addLine(getLine37());
      that.addLine(getLine41());
      that.addLine(getLine47());
      that.addLine(getLine49());
     that.highlightElement(MECE420MCTRV1Deptelement, "EngineeringSciences");
     that.addToClicked("MECE420MCTRV1Dept", "EngineeringSciences");
      MECE420MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine28());
      that.removeLine(getLine37());
      that.removeLine(getLine41());
      that.removeLine(getLine47());
      that.removeLine(getLine49());
     that.unHighlightElement(MECE420MCTRV1Deptelement, "EngineeringSciences");
     var category = that.removeFromClicked("MECE420MCTRV1Dept", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MECE420MCTRV1Deptelement, category);
}
      MECE420MCTRV1Deptflag=false
  }
};
$scope.ECE360MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE360MCTRV1DeptTime <= 200) { 
        ECE360MCTRV1DeptTime = currentTime;
        return;
    }
ECE360MCTRV1DeptTime = currentTime;
  var ECE360MCTRV1Deptelement = document.getElementById("ECE360MCTRV1Dept");
 if (!ECE360MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("ECE360MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("ECE360MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("ECE360MCTRV1Dept")[i];
        if (ECE360MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE360MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine29());
     that.highlightElement(ECE360MCTRV1Deptelement, "course");
     that.addToClicked("ECE360MCTRV1Dept", "course");
      ECE360MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine29());
     that.unHighlightElement(ECE360MCTRV1Deptelement, "course");
     var category = that.removeFromClicked("ECE360MCTRV1Dept", "course");
  if (category != "") { 
     that.highlightElement(ECE360MCTRV1Deptelement, category);
}
      ECE360MCTRV1Deptflag=false
  }
};
$scope.MATH309MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH309MCTRV1DeptTime <= 200) { 
        MATH309MCTRV1DeptTime = currentTime;
        return;
    }
MATH309MCTRV1DeptTime = currentTime;
  var MATH309MCTRV1Deptelement = document.getElementById("MATH309MCTRV1Dept");
 if (!MATH309MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MATH309MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MATH309MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MATH309MCTRV1Dept")[i];
        if (MATH309MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH309MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine30());
     that.highlightElement(MATH309MCTRV1Deptelement, "Math");
     that.addToClicked("MATH309MCTRV1Dept", "Math");
      MATH309MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine30());
     that.unHighlightElement(MATH309MCTRV1Deptelement, "Math");
     var category = that.removeFromClicked("MATH309MCTRV1Dept", "Math");
  if (category != "") { 
     that.highlightElement(MATH309MCTRV1Deptelement, category);
}
      MATH309MCTRV1Deptflag=false
  }
};
$scope.ECE315MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE315MCTRV1DeptTime <= 200) { 
        ECE315MCTRV1DeptTime = currentTime;
        return;
    }
ECE315MCTRV1DeptTime = currentTime;
  var ECE315MCTRV1Deptelement = document.getElementById("ECE315MCTRV1Dept");
 if (!ECE315MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("ECE315MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("ECE315MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("ECE315MCTRV1Dept")[i];
        if (ECE315MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE315MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine31());
     that.highlightElement(ECE315MCTRV1Deptelement, "EngineeringSciences");
     that.addToClicked("ECE315MCTRV1Dept", "EngineeringSciences");
      ECE315MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine31());
     that.unHighlightElement(ECE315MCTRV1Deptelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE315MCTRV1Dept", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE315MCTRV1Deptelement, category);
}
      ECE315MCTRV1Deptflag=false
  }
};
$scope.ENGL199MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGL199MCTRV1DeptTime <= 200) { 
        ENGL199MCTRV1DeptTime = currentTime;
        return;
    }
ENGL199MCTRV1DeptTime = currentTime;
  var ENGL199MCTRV1Deptelement = document.getElementById("ENGL199MCTRV1Dept");
 if (!ENGL199MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("ENGL199MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("ENGL199MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("ENGL199MCTRV1Dept")[i];
        if (ENGL199MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGL199MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGL199MCTRV1Deptelement, "Other");
     that.addToClicked("ENGL199MCTRV1Dept", "Other");
      ENGL199MCTRV1Deptflag=true
  }
 else {
     that.unHighlightElement(ENGL199MCTRV1Deptelement, "Other");
     var category = that.removeFromClicked("ENGL199MCTRV1Dept", "Other");
  if (category != "") { 
     that.highlightElement(ENGL199MCTRV1Deptelement, category);
}
      ENGL199MCTRV1Deptflag=false
  }
};
$scope.MCTR275MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR275MCTRV1DeptTime <= 200) { 
        MCTR275MCTRV1DeptTime = currentTime;
        return;
    }
MCTR275MCTRV1DeptTime = currentTime;
  var MCTR275MCTRV1Deptelement = document.getElementById("MCTR275MCTRV1Dept");
 if (!MCTR275MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MCTR275MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MCTR275MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MCTR275MCTRV1Dept")[i];
        if (MCTR275MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR275MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(MCTR275MCTRV1Deptelement, "Mechatronics");
     that.addToClicked("MCTR275MCTRV1Dept", "Mechatronics");
      MCTR275MCTRV1Deptflag=true
  }
 else {
     that.unHighlightElement(MCTR275MCTRV1Deptelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR275MCTRV1Dept", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR275MCTRV1Deptelement, category);
}
      MCTR275MCTRV1Deptflag=false
  }
};
$scope.MCTR300MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR300MCTRV1DeptTime <= 200) { 
        MCTR300MCTRV1DeptTime = currentTime;
        return;
    }
MCTR300MCTRV1DeptTime = currentTime;
  var MCTR300MCTRV1Deptelement = document.getElementById("MCTR300MCTRV1Dept");
 if (!MCTR300MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MCTR300MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MCTR300MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MCTR300MCTRV1Dept")[i];
        if (MCTR300MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR300MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine32());
      that.addLine(getLine33());
      that.addLine(getLine34());
     that.highlightElement(MCTR300MCTRV1Deptelement, "Mechatronics");
     that.addToClicked("MCTR300MCTRV1Dept", "Mechatronics");
      MCTR300MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine32());
      that.removeLine(getLine33());
      that.removeLine(getLine34());
     that.unHighlightElement(MCTR300MCTRV1Deptelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR300MCTRV1Dept", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR300MCTRV1Deptelement, category);
}
      MCTR300MCTRV1Deptflag=false
  }
};
$scope.ECE342MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE342MCTRV1DeptTime <= 200) { 
        ECE342MCTRV1DeptTime = currentTime;
        return;
    }
ECE342MCTRV1DeptTime = currentTime;
  var ECE342MCTRV1Deptelement = document.getElementById("ECE342MCTRV1Dept");
 if (!ECE342MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("ECE342MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("ECE342MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("ECE342MCTRV1Dept")[i];
        if (ECE342MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE342MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine34());
      that.addLine(getLine35());
     that.highlightElement(ECE342MCTRV1Deptelement, "Math");
     that.addToClicked("ECE342MCTRV1Dept", "Math");
      ECE342MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine34());
      that.removeLine(getLine35());
     that.unHighlightElement(ECE342MCTRV1Deptelement, "Math");
     var category = that.removeFromClicked("ECE342MCTRV1Dept", "Math");
  if (category != "") { 
     that.highlightElement(ECE342MCTRV1Deptelement, category);
}
      ECE342MCTRV1Deptflag=false
  }
};
$scope.MCTR365MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR365MCTRV1DeptTime <= 200) { 
        MCTR365MCTRV1DeptTime = currentTime;
        return;
    }
MCTR365MCTRV1DeptTime = currentTime;
  var MCTR365MCTRV1Deptelement = document.getElementById("MCTR365MCTRV1Dept");
 if (!MCTR365MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MCTR365MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MCTR365MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MCTR365MCTRV1Dept")[i];
        if (MCTR365MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR365MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine36());
      that.addLine(getLine37());
      that.addLine(getLine39());
     that.highlightElement(MCTR365MCTRV1Deptelement, "Mechatronics");
     that.addToClicked("MCTR365MCTRV1Dept", "Mechatronics");
      MCTR365MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine36());
      that.removeLine(getLine37());
      that.removeLine(getLine39());
     that.unHighlightElement(MCTR365MCTRV1Deptelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR365MCTRV1Dept", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR365MCTRV1Deptelement, category);
}
      MCTR365MCTRV1Deptflag=false
  }
};
$scope.ENGM401MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM401MCTRV1DeptTime <= 200) { 
        ENGM401MCTRV1DeptTime = currentTime;
        return;
    }
ENGM401MCTRV1DeptTime = currentTime;
  var ENGM401MCTRV1Deptelement = document.getElementById("ENGM401MCTRV1Dept");
 if (!ENGM401MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("ENGM401MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("ENGM401MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("ENGM401MCTRV1Dept")[i];
        if (ENGM401MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM401MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine40());
     that.highlightElement(ENGM401MCTRV1Deptelement, "Other");
     that.addToClicked("ENGM401MCTRV1Dept", "Other");
      ENGM401MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine40());
     that.unHighlightElement(ENGM401MCTRV1Deptelement, "Other");
     var category = that.removeFromClicked("ENGM401MCTRV1Dept", "Other");
  if (category != "") { 
     that.highlightElement(ENGM401MCTRV1Deptelement, category);
}
      ENGM401MCTRV1Deptflag=false
  }
};
$scope.MCTR332MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR332MCTRV1DeptTime <= 200) { 
        MCTR332MCTRV1DeptTime = currentTime;
        return;
    }
MCTR332MCTRV1DeptTime = currentTime;
  var MCTR332MCTRV1Deptelement = document.getElementById("MCTR332MCTRV1Dept");
 if (!MCTR332MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MCTR332MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MCTR332MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MCTR332MCTRV1Dept")[i];
        if (MCTR332MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR332MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine38());
     that.highlightElement(MCTR332MCTRV1Deptelement, "Mechatronics");
     that.addToClicked("MCTR332MCTRV1Dept", "Mechatronics");
      MCTR332MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine38());
     that.unHighlightElement(MCTR332MCTRV1Deptelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR332MCTRV1Dept", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR332MCTRV1Deptelement, category);
}
      MCTR332MCTRV1Deptflag=false
  }
};
$scope.ITSElectiveMCTRV1Dept0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ITSElectiveMCTRV1Dept0Time <= 200) { 
        ITSElectiveMCTRV1Dept0Time = currentTime;
        return;
    }
ITSElectiveMCTRV1Dept0Time = currentTime;
  var ITSElectiveMCTRV1Dept0element = document.getElementById("ITSElectiveMCTRV1Dept0");
 if (!ITSElectiveMCTRV1Dept0flag) {
     if (that.MCTRV1DeptClickedMap.get("ITSElectiveMCTRV1Dept0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("ITSElectiveMCTRV1Dept0").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("ITSElectiveMCTRV1Dept0")[i];
        if (ITSElectiveMCTRV1Dept0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ITSElectiveMCTRV1Dept0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ITSElectiveMCTRV1Dept0element, "ITS");
     that.addToClicked("ITSElectiveMCTRV1Dept0", "ITS");
      ITSElectiveMCTRV1Dept0flag=true
  }
 else {
     that.unHighlightElement(ITSElectiveMCTRV1Dept0element, "ITS");
     var category = that.removeFromClicked("ITSElectiveMCTRV1Dept0", "ITS");
  if (category != "") { 
     that.highlightElement(ITSElectiveMCTRV1Dept0element, category);
}
      ITSElectiveMCTRV1Dept0flag=false
  }
};
$scope.MECE460MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE460MCTRV1DeptTime <= 200) { 
        MECE460MCTRV1DeptTime = currentTime;
        return;
    }
MECE460MCTRV1DeptTime = currentTime;
  var MECE460MCTRV1Deptelement = document.getElementById("MECE460MCTRV1Dept");
 if (!MECE460MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MECE460MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MECE460MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MECE460MCTRV1Dept")[i];
        if (MECE460MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE460MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine39());
      that.addLine(getLine40());
      that.addLine(getLine46());
     that.highlightElement(MECE460MCTRV1Deptelement, "EngineeringDesign");
     that.addToClicked("MECE460MCTRV1Dept", "EngineeringDesign");
      MECE460MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine39());
      that.removeLine(getLine40());
      that.removeLine(getLine46());
     that.unHighlightElement(MECE460MCTRV1Deptelement, "EngineeringDesign");
     var category = that.removeFromClicked("MECE460MCTRV1Dept", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MECE460MCTRV1Deptelement, category);
}
      MECE460MCTRV1Deptflag=false
  }
};
$scope.MCTR460MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR460MCTRV1DeptTime <= 200) { 
        MCTR460MCTRV1DeptTime = currentTime;
        return;
    }
MCTR460MCTRV1DeptTime = currentTime;
  var MCTR460MCTRV1Deptelement = document.getElementById("MCTR460MCTRV1Dept");
 if (!MCTR460MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MCTR460MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MCTR460MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MCTR460MCTRV1Dept")[i];
        if (MCTR460MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR460MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine41());
      that.addLine(getLine48());
     that.highlightElement(MCTR460MCTRV1Deptelement, "Mechatronics");
     that.addToClicked("MCTR460MCTRV1Dept", "Mechatronics");
      MCTR460MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine41());
      that.removeLine(getLine48());
     that.unHighlightElement(MCTR460MCTRV1Deptelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR460MCTRV1Dept", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR460MCTRV1Deptelement, category);
}
      MCTR460MCTRV1Deptflag=false
  }
};
$scope.MATH300MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH300MCTRV1DeptTime <= 200) { 
        MATH300MCTRV1DeptTime = currentTime;
        return;
    }
MATH300MCTRV1DeptTime = currentTime;
  var MATH300MCTRV1Deptelement = document.getElementById("MATH300MCTRV1Dept");
 if (!MATH300MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MATH300MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MATH300MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MATH300MCTRV1Dept")[i];
        if (MATH300MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH300MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine42());
      that.addLine(getLine43());
     that.highlightElement(MATH300MCTRV1Deptelement, "Math");
     that.addToClicked("MATH300MCTRV1Dept", "Math");
      MATH300MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine42());
      that.removeLine(getLine43());
     that.unHighlightElement(MATH300MCTRV1Deptelement, "Math");
     var category = that.removeFromClicked("MATH300MCTRV1Dept", "Math");
  if (category != "") { 
     that.highlightElement(MATH300MCTRV1Deptelement, category);
}
      MATH300MCTRV1Deptflag=false
  }
};
$scope.ComplementaryElectiveMCTRV1Dept0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveMCTRV1Dept0Time <= 200) { 
        ComplementaryElectiveMCTRV1Dept0Time = currentTime;
        return;
    }
ComplementaryElectiveMCTRV1Dept0Time = currentTime;
  var ComplementaryElectiveMCTRV1Dept0element = document.getElementById("ComplementaryElectiveMCTRV1Dept0");
 if (!ComplementaryElectiveMCTRV1Dept0flag) {
     if (that.MCTRV1DeptClickedMap.get("ComplementaryElectiveMCTRV1Dept0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("ComplementaryElectiveMCTRV1Dept0").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("ComplementaryElectiveMCTRV1Dept0")[i];
        if (ComplementaryElectiveMCTRV1Dept0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveMCTRV1Dept0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveMCTRV1Dept0element, "COMP");
     that.addToClicked("ComplementaryElectiveMCTRV1Dept0", "COMP");
      ComplementaryElectiveMCTRV1Dept0flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveMCTRV1Dept0element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveMCTRV1Dept0", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveMCTRV1Dept0element, category);
}
      ComplementaryElectiveMCTRV1Dept0flag=false
  }
};
$scope.MECE390MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE390MCTRV1DeptTime <= 200) { 
        MECE390MCTRV1DeptTime = currentTime;
        return;
    }
MECE390MCTRV1DeptTime = currentTime;
  var MECE390MCTRV1Deptelement = document.getElementById("MECE390MCTRV1Dept");
 if (!MECE390MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MECE390MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MECE390MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MECE390MCTRV1Dept")[i];
        if (MECE390MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE390MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine28());
      that.addLine(getLine44());
      that.addLine(getLine45());
     that.highlightElement(MECE390MCTRV1Deptelement, "Math");
     that.addToClicked("MECE390MCTRV1Dept", "Math");
      MECE390MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine28());
      that.removeLine(getLine44());
      that.removeLine(getLine45());
     that.unHighlightElement(MECE390MCTRV1Deptelement, "Math");
     var category = that.removeFromClicked("MECE390MCTRV1Dept", "Math");
  if (category != "") { 
     that.highlightElement(MECE390MCTRV1Deptelement, category);
}
      MECE390MCTRV1Deptflag=false
  }
};
$scope.ProgramTechnicalElectiveMCTRV1Dept0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveMCTRV1Dept0Time <= 200) { 
        ProgramTechnicalElectiveMCTRV1Dept0Time = currentTime;
        return;
    }
ProgramTechnicalElectiveMCTRV1Dept0Time = currentTime;
  var ProgramTechnicalElectiveMCTRV1Dept0element = document.getElementById("ProgramTechnicalElectiveMCTRV1Dept0");
 if (!ProgramTechnicalElectiveMCTRV1Dept0flag) {
     if (that.MCTRV1DeptClickedMap.get("ProgramTechnicalElectiveMCTRV1Dept0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("ProgramTechnicalElectiveMCTRV1Dept0").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("ProgramTechnicalElectiveMCTRV1Dept0")[i];
        if (ProgramTechnicalElectiveMCTRV1Dept0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveMCTRV1Dept0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveMCTRV1Dept0element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveMCTRV1Dept0", "PROG");
      ProgramTechnicalElectiveMCTRV1Dept0flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveMCTRV1Dept0element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveMCTRV1Dept0", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveMCTRV1Dept0element, category);
}
      ProgramTechnicalElectiveMCTRV1Dept0flag=false
  }
};
$scope.MECE461MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE461MCTRV1DeptTime <= 200) { 
        MECE461MCTRV1DeptTime = currentTime;
        return;
    }
MECE461MCTRV1DeptTime = currentTime;
  var MECE461MCTRV1Deptelement = document.getElementById("MECE461MCTRV1Dept");
 if (!MECE461MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MECE461MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MECE461MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MECE461MCTRV1Dept")[i];
        if (MECE461MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE461MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine46());
     that.highlightElement(MECE461MCTRV1Deptelement, "EngineeringDesign");
     that.addToClicked("MECE461MCTRV1Dept", "EngineeringDesign");
      MECE461MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine46());
     that.unHighlightElement(MECE461MCTRV1Deptelement, "EngineeringDesign");
     var category = that.removeFromClicked("MECE461MCTRV1Dept", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MECE461MCTRV1Deptelement, category);
}
      MECE461MCTRV1Deptflag=false
  }
};
$scope.MCTR461MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR461MCTRV1DeptTime <= 200) { 
        MCTR461MCTRV1DeptTime = currentTime;
        return;
    }
MCTR461MCTRV1DeptTime = currentTime;
  var MCTR461MCTRV1Deptelement = document.getElementById("MCTR461MCTRV1Dept");
 if (!MCTR461MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MCTR461MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MCTR461MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MCTR461MCTRV1Dept")[i];
        if (MCTR461MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR461MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine47());
      that.addLine(getLine48());
      that.addLine(getLine50());
     that.highlightElement(MCTR461MCTRV1Deptelement, "Mechatronics");
     that.addToClicked("MCTR461MCTRV1Dept", "Mechatronics");
      MCTR461MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine47());
      that.removeLine(getLine48());
      that.removeLine(getLine50());
     that.unHighlightElement(MCTR461MCTRV1Deptelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR461MCTRV1Dept", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR461MCTRV1Deptelement, category);
}
      MCTR461MCTRV1Deptflag=false
  }
};
$scope.MCTR465MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR465MCTRV1DeptTime <= 200) { 
        MCTR465MCTRV1DeptTime = currentTime;
        return;
    }
MCTR465MCTRV1DeptTime = currentTime;
  var MCTR465MCTRV1Deptelement = document.getElementById("MCTR465MCTRV1Dept");
 if (!MCTR465MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("MCTR465MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("MCTR465MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("MCTR465MCTRV1Dept")[i];
        if (MCTR465MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR465MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine49());
      that.addLine(getLine50());
     that.highlightElement(MCTR465MCTRV1Deptelement, "Mechatronics");
     that.addToClicked("MCTR465MCTRV1Dept", "Mechatronics");
      MCTR465MCTRV1Deptflag=true
  }
 else {
      that.removeLine(getLine49());
      that.removeLine(getLine50());
     that.unHighlightElement(MCTR465MCTRV1Deptelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR465MCTRV1Dept", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR465MCTRV1Deptelement, category);
}
      MCTR465MCTRV1Deptflag=false
  }
};
$scope.ENGG404MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG404MCTRV1DeptTime <= 200) { 
        ENGG404MCTRV1DeptTime = currentTime;
        return;
    }
ENGG404MCTRV1DeptTime = currentTime;
  var ENGG404MCTRV1Deptelement = document.getElementById("ENGG404MCTRV1Dept");
 if (!ENGG404MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("ENGG404MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("ENGG404MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("ENGG404MCTRV1Dept")[i];
        if (ENGG404MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG404MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG404MCTRV1Deptelement, "EngineeringProfession");
     that.addToClicked("ENGG404MCTRV1Dept", "EngineeringProfession");
      ENGG404MCTRV1Deptflag=true
  }
 else {
     that.unHighlightElement(ENGG404MCTRV1Deptelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG404MCTRV1Dept", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG404MCTRV1Deptelement, category);
}
      ENGG404MCTRV1Deptflag=false
  }
};
$scope.ENGG400MCTRV1DeptListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG400MCTRV1DeptTime <= 200) { 
        ENGG400MCTRV1DeptTime = currentTime;
        return;
    }
ENGG400MCTRV1DeptTime = currentTime;
  var ENGG400MCTRV1Deptelement = document.getElementById("ENGG400MCTRV1Dept");
 if (!ENGG400MCTRV1Deptflag) {
     if (that.MCTRV1DeptClickedMap.get("ENGG400MCTRV1Dept").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("ENGG400MCTRV1Dept").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("ENGG400MCTRV1Dept")[i];
        if (ENGG400MCTRV1Deptelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG400MCTRV1Deptelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG400MCTRV1Deptelement, "EngineeringProfession");
     that.addToClicked("ENGG400MCTRV1Dept", "EngineeringProfession");
      ENGG400MCTRV1Deptflag=true
  }
 else {
     that.unHighlightElement(ENGG400MCTRV1Deptelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG400MCTRV1Dept", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG400MCTRV1Deptelement, category);
}
      ENGG400MCTRV1Deptflag=false
  }
};
$scope.ProgramTechnicalElectiveMCTRV1Dept1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveMCTRV1Dept1Time <= 200) { 
        ProgramTechnicalElectiveMCTRV1Dept1Time = currentTime;
        return;
    }
ProgramTechnicalElectiveMCTRV1Dept1Time = currentTime;
  var ProgramTechnicalElectiveMCTRV1Dept1element = document.getElementById("ProgramTechnicalElectiveMCTRV1Dept1");
 if (!ProgramTechnicalElectiveMCTRV1Dept1flag) {
     if (that.MCTRV1DeptClickedMap.get("ProgramTechnicalElectiveMCTRV1Dept1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("ProgramTechnicalElectiveMCTRV1Dept1").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("ProgramTechnicalElectiveMCTRV1Dept1")[i];
        if (ProgramTechnicalElectiveMCTRV1Dept1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveMCTRV1Dept1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveMCTRV1Dept1element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveMCTRV1Dept1", "PROG");
      ProgramTechnicalElectiveMCTRV1Dept1flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveMCTRV1Dept1element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveMCTRV1Dept1", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveMCTRV1Dept1element, category);
}
      ProgramTechnicalElectiveMCTRV1Dept1flag=false
  }
};
$scope.ProgramTechnicalElectiveMCTRV1Dept2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveMCTRV1Dept2Time <= 200) { 
        ProgramTechnicalElectiveMCTRV1Dept2Time = currentTime;
        return;
    }
ProgramTechnicalElectiveMCTRV1Dept2Time = currentTime;
  var ProgramTechnicalElectiveMCTRV1Dept2element = document.getElementById("ProgramTechnicalElectiveMCTRV1Dept2");
 if (!ProgramTechnicalElectiveMCTRV1Dept2flag) {
     if (that.MCTRV1DeptClickedMap.get("ProgramTechnicalElectiveMCTRV1Dept2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV1DeptClickedMap.get("ProgramTechnicalElectiveMCTRV1Dept2").length; i++) { 
        var cate = that.MCTRV1DeptClickedMap.get("ProgramTechnicalElectiveMCTRV1Dept2")[i];
        if (ProgramTechnicalElectiveMCTRV1Dept2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveMCTRV1Dept2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveMCTRV1Dept2element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveMCTRV1Dept2", "PROG");
      ProgramTechnicalElectiveMCTRV1Dept2flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveMCTRV1Dept2element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveMCTRV1Dept2", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveMCTRV1Dept2element, category);
}
      ProgramTechnicalElectiveMCTRV1Dept2flag=false
  }
};
$scope.CHEM103MCTRV1DeptRCListener = function () {
  var element = document.getElementById("CHEM103MCTRV1Deptdesc");
 if (!CHEM103MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM103MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM103MCTRV1Deptrflag=false
  }
};
$scope.ENGG100MCTRV1DeptRCListener = function () {
  var element = document.getElementById("ENGG100MCTRV1Deptdesc");
 if (!ENGG100MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG100MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG100MCTRV1Deptrflag=false
  }
};
$scope.ENGG130MCTRV1DeptRCListener = function () {
  var element = document.getElementById("ENGG130MCTRV1Deptdesc");
 if (!ENGG130MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG130MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG130MCTRV1Deptrflag=false
  }
};
$scope.MATH100MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MATH100MCTRV1Deptdesc");
 if (!MATH100MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH100MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH100MCTRV1Deptrflag=false
  }
};
$scope.PHYS130MCTRV1DeptRCListener = function () {
  var element = document.getElementById("PHYS130MCTRV1Deptdesc");
 if (!PHYS130MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS130MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS130MCTRV1Deptrflag=false
  }
};
$scope.ENGL199MCTRV1DeptRCListener = function () {
  var element = document.getElementById("ENGL199MCTRV1Deptdesc");
 if (!ENGL199MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGL199MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGL199MCTRV1Deptrflag=false
  }
};
$scope.CHEM105MCTRV1DeptRCListener = function () {
  var element = document.getElementById("CHEM105MCTRV1Deptdesc");
 if (!CHEM105MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM105MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM105MCTRV1Deptrflag=false
  }
};
$scope.ENCMP100MCTRV1DeptRCListener = function () {
  var element = document.getElementById("ENCMP100MCTRV1Deptdesc");
 if (!ENCMP100MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENCMP100MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENCMP100MCTRV1Deptrflag=false
  }
};
$scope.ENGG101MCTRV1DeptRCListener = function () {
  var element = document.getElementById("ENGG101MCTRV1Deptdesc");
 if (!ENGG101MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG101MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG101MCTRV1Deptrflag=false
  }
};
$scope.ENPH131MCTRV1DeptRCListener = function () {
  var element = document.getElementById("ENPH131MCTRV1Deptdesc");
 if (!ENPH131MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENPH131MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENPH131MCTRV1Deptrflag=false
  }
};
$scope.MATH101MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MATH101MCTRV1Deptdesc");
 if (!MATH101MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH101MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH101MCTRV1Deptrflag=false
  }
};
$scope.MATH102MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MATH102MCTRV1Deptdesc");
 if (!MATH102MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH102MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH102MCTRV1Deptrflag=false
  }
};
$scope.MCTR202MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MCTR202MCTRV1Deptdesc");
 if (!MCTR202MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR202MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR202MCTRV1Deptrflag=false
  }
};
$scope.ECE210MCTRV1DeptRCListener = function () {
  var element = document.getElementById("ECE210MCTRV1Deptdesc");
 if (!ECE210MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE210MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE210MCTRV1Deptrflag=false
  }
};
$scope.CIVE270MCTRV1DeptRCListener = function () {
  var element = document.getElementById("CIVE270MCTRV1Deptdesc");
 if (!CIVE270MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE270MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE270MCTRV1Deptrflag=false
  }
};
$scope.MATH209MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MATH209MCTRV1Deptdesc");
 if (!MATH209MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH209MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH209MCTRV1Deptrflag=false
  }
};
$scope.MECE230MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MECE230MCTRV1Deptdesc");
 if (!MECE230MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE230MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE230MCTRV1Deptrflag=false
  }
};
$scope.CHE243MCTRV1DeptRCListener = function () {
  var element = document.getElementById("CHE243MCTRV1Deptdesc");
 if (!CHE243MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE243MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE243MCTRV1Deptrflag=false
  }
};
$scope.ENGG299MCTRV1DeptRCListener = function () {
  var element = document.getElementById("ENGG299MCTRV1Deptdesc");
 if (!ENGG299MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG299MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG299MCTRV1Deptrflag=false
  }
};
$scope.MECE250MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MECE250MCTRV1Deptdesc");
 if (!MECE250MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE250MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE250MCTRV1Deptrflag=false
  }
};
$scope.MCTR274MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MCTR274MCTRV1Deptdesc");
 if (!MCTR274MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR274MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR274MCTRV1Deptrflag=false
  }
};
$scope.ECE240MCTRV1DeptRCListener = function () {
  var element = document.getElementById("ECE240MCTRV1Deptdesc");
 if (!ECE240MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE240MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE240MCTRV1Deptrflag=false
  }
};
$scope.MATH201MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MATH201MCTRV1Deptdesc");
 if (!MATH201MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH201MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH201MCTRV1Deptrflag=false
  }
};
$scope.MECE260MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MECE260MCTRV1Deptdesc");
 if (!MECE260MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE260MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE260MCTRV1Deptrflag=false
  }
};
$scope.MECE265MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MECE265MCTRV1Deptdesc");
 if (!MECE265MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE265MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE265MCTRV1Deptrflag=false
  }
};
$scope.MECE350MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MECE350MCTRV1Deptdesc");
 if (!MECE350MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE350MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE350MCTRV1Deptrflag=false
  }
};
$scope.MECE420MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MECE420MCTRV1Deptdesc");
 if (!MECE420MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE420MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE420MCTRV1Deptrflag=false
  }
};
$scope.ECE360MCTRV1DeptRCListener = function () {
  var element = document.getElementById("ECE360MCTRV1Deptdesc");
 if (!ECE360MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE360MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE360MCTRV1Deptrflag=false
  }
};
$scope.MATH309MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MATH309MCTRV1Deptdesc");
 if (!MATH309MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH309MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH309MCTRV1Deptrflag=false
  }
};
$scope.ECE315MCTRV1DeptRCListener = function () {
  var element = document.getElementById("ECE315MCTRV1Deptdesc");
 if (!ECE315MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE315MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE315MCTRV1Deptrflag=false
  }
};
$scope.ENGL199MCTRV1DeptRCListener = function () {
  var element = document.getElementById("ENGL199MCTRV1Deptdesc");
 if (!ENGL199MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGL199MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGL199MCTRV1Deptrflag=false
  }
};
$scope.MCTR275MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MCTR275MCTRV1Deptdesc");
 if (!MCTR275MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR275MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR275MCTRV1Deptrflag=false
  }
};
$scope.MCTR300MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MCTR300MCTRV1Deptdesc");
 if (!MCTR300MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR300MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR300MCTRV1Deptrflag=false
  }
};
$scope.ECE342MCTRV1DeptRCListener = function () {
  var element = document.getElementById("ECE342MCTRV1Deptdesc");
 if (!ECE342MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE342MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE342MCTRV1Deptrflag=false
  }
};
$scope.MCTR365MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MCTR365MCTRV1Deptdesc");
 if (!MCTR365MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR365MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR365MCTRV1Deptrflag=false
  }
};
$scope.ENGM401MCTRV1DeptRCListener = function () {
  var element = document.getElementById("ENGM401MCTRV1Deptdesc");
 if (!ENGM401MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM401MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM401MCTRV1Deptrflag=false
  }
};
$scope.MCTR332MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MCTR332MCTRV1Deptdesc");
 if (!MCTR332MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR332MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR332MCTRV1Deptrflag=false
  }
};
$scope.ITSElectiveMCTRV1Dept0RCListener = function () {
  var element = document.getElementById("ITSElectiveMCTRV1Dept0desc");
 if (!ITSElectiveMCTRV1Dept0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ITSElectiveMCTRV1Dept0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ITSElectiveMCTRV1Dept0rflag=false
  }
};
$scope.MECE460MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MECE460MCTRV1Deptdesc");
 if (!MECE460MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE460MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE460MCTRV1Deptrflag=false
  }
};
$scope.MCTR460MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MCTR460MCTRV1Deptdesc");
 if (!MCTR460MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR460MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR460MCTRV1Deptrflag=false
  }
};
$scope.MATH300MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MATH300MCTRV1Deptdesc");
 if (!MATH300MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH300MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH300MCTRV1Deptrflag=false
  }
};
$scope.ComplementaryElectiveMCTRV1Dept0RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveMCTRV1Dept0desc");
 if (!ComplementaryElectiveMCTRV1Dept0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveMCTRV1Dept0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveMCTRV1Dept0rflag=false
  }
};
$scope.MECE390MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MECE390MCTRV1Deptdesc");
 if (!MECE390MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE390MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE390MCTRV1Deptrflag=false
  }
};
$scope.ProgramTechnicalElectiveMCTRV1Dept0RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveMCTRV1Dept0desc");
 if (!ProgramTechnicalElectiveMCTRV1Dept0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveMCTRV1Dept0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveMCTRV1Dept0rflag=false
  }
};
$scope.MECE461MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MECE461MCTRV1Deptdesc");
 if (!MECE461MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE461MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE461MCTRV1Deptrflag=false
  }
};
$scope.MCTR461MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MCTR461MCTRV1Deptdesc");
 if (!MCTR461MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR461MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR461MCTRV1Deptrflag=false
  }
};
$scope.MCTR465MCTRV1DeptRCListener = function () {
  var element = document.getElementById("MCTR465MCTRV1Deptdesc");
 if (!MCTR465MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR465MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR465MCTRV1Deptrflag=false
  }
};
$scope.ENGG404MCTRV1DeptRCListener = function () {
  var element = document.getElementById("ENGG404MCTRV1Deptdesc");
 if (!ENGG404MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG404MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG404MCTRV1Deptrflag=false
  }
};
$scope.ENGG400MCTRV1DeptRCListener = function () {
  var element = document.getElementById("ENGG400MCTRV1Deptdesc");
 if (!ENGG400MCTRV1Deptrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG400MCTRV1Deptrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG400MCTRV1Deptrflag=false
  }
};
$scope.ProgramTechnicalElectiveMCTRV1Dept1RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveMCTRV1Dept1desc");
 if (!ProgramTechnicalElectiveMCTRV1Dept1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveMCTRV1Dept1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveMCTRV1Dept1rflag=false
  }
};
$scope.ProgramTechnicalElectiveMCTRV1Dept2RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveMCTRV1Dept2desc");
 if (!ProgramTechnicalElectiveMCTRV1Dept2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveMCTRV1Dept2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveMCTRV1Dept2rflag=false
  }
};
  var CHEM103MCTRV2Facultyflag = false;
  var CHEM103MCTRV2Facultyrflag = false;
 var CHEM103MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("CHEM103MCTRV2Faculty", []);
  var ENGG100MCTRV2Facultyflag = false;
  var ENGG100MCTRV2Facultyrflag = false;
 var ENGG100MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("ENGG100MCTRV2Faculty", []);
  var ENGG130MCTRV2Facultyflag = false;
  var ENGG130MCTRV2Facultyrflag = false;
 var ENGG130MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("ENGG130MCTRV2Faculty", []);
  var ENGL199MCTRV2Facultyflag = false;
  var ENGL199MCTRV2Facultyrflag = false;
 var ENGL199MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("ENGL199MCTRV2Faculty", []);
  var MATH100MCTRV2Facultyflag = false;
  var MATH100MCTRV2Facultyrflag = false;
 var MATH100MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MATH100MCTRV2Faculty", []);
  var PHYS130MCTRV2Facultyflag = false;
  var PHYS130MCTRV2Facultyrflag = false;
 var PHYS130MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("PHYS130MCTRV2Faculty", []);
  var CHEM105MCTRV2Facultyflag = false;
  var CHEM105MCTRV2Facultyrflag = false;
 var CHEM105MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("CHEM105MCTRV2Faculty", []);
  var ENCMP100MCTRV2Facultyflag = false;
  var ENCMP100MCTRV2Facultyrflag = false;
 var ENCMP100MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("ENCMP100MCTRV2Faculty", []);
  var ENGG160MCTRV2Facultyflag = false;
  var ENGG160MCTRV2Facultyrflag = false;
 var ENGG160MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("ENGG160MCTRV2Faculty", []);
  var ENPH131MCTRV2Facultyflag = false;
  var ENPH131MCTRV2Facultyrflag = false;
 var ENPH131MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("ENPH131MCTRV2Faculty", []);
  var MATH101MCTRV2Facultyflag = false;
  var MATH101MCTRV2Facultyrflag = false;
 var MATH101MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MATH101MCTRV2Faculty", []);
  var MATH102MCTRV2Facultyflag = false;
  var MATH102MCTRV2Facultyrflag = false;
 var MATH102MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MATH102MCTRV2Faculty", []);
  var CIVE270MCTRV2Facultyflag = false;
  var CIVE270MCTRV2Facultyrflag = false;
 var CIVE270MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("CIVE270MCTRV2Faculty", []);
  var ECE210MCTRV2Facultyflag = false;
  var ECE210MCTRV2Facultyrflag = false;
 var ECE210MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("ECE210MCTRV2Faculty", []);
  var ECE240MCTRV2Facultyflag = false;
  var ECE240MCTRV2Facultyrflag = false;
 var ECE240MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("ECE240MCTRV2Faculty", []);
  var MATH201MCTRV2Facultyflag = false;
  var MATH201MCTRV2Facultyrflag = false;
 var MATH201MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MATH201MCTRV2Faculty", []);
  var MATH209MCTRV2Facultyflag = false;
  var MATH209MCTRV2Facultyrflag = false;
 var MATH209MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MATH209MCTRV2Faculty", []);
  var MCTR202MCTRV2Facultyflag = false;
  var MCTR202MCTRV2Facultyrflag = false;
 var MCTR202MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MCTR202MCTRV2Faculty", []);
  var ENGG299MCTRV2Facultyflag = false;
  var ENGG299MCTRV2Facultyrflag = false;
 var ENGG299MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("ENGG299MCTRV2Faculty", []);
  var CHE243MCTRV2Facultyflag = false;
  var CHE243MCTRV2Facultyrflag = false;
 var CHE243MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("CHE243MCTRV2Faculty", []);
  var MCTR200MCTRV2Facultyflag = false;
  var MCTR200MCTRV2Facultyrflag = false;
 var MCTR200MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MCTR200MCTRV2Faculty", []);
  var MCTR274MCTRV2Facultyflag = false;
  var MCTR274MCTRV2Facultyrflag = false;
 var MCTR274MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MCTR274MCTRV2Faculty", []);
  var MECE230MCTRV2Facultyflag = false;
  var MECE230MCTRV2Facultyrflag = false;
 var MECE230MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MECE230MCTRV2Faculty", []);
  var MECE250MCTRV2Facultyflag = false;
  var MECE250MCTRV2Facultyrflag = false;
 var MECE250MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MECE250MCTRV2Faculty", []);
  var MECE260MCTRV2Facultyflag = false;
  var MECE260MCTRV2Facultyrflag = false;
 var MECE260MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MECE260MCTRV2Faculty", []);
  var MECE265MCTRV2Facultyflag = false;
  var MECE265MCTRV2Facultyrflag = false;
 var MECE265MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MECE265MCTRV2Faculty", []);
  var ECE315MCTRV2Facultyflag = false;
  var ECE315MCTRV2Facultyrflag = false;
 var ECE315MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("ECE315MCTRV2Faculty", []);
  var ECE342MCTRV2Facultyflag = false;
  var ECE342MCTRV2Facultyrflag = false;
 var ECE342MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("ECE342MCTRV2Faculty", []);
  var MCTR374MCTRV2Facultyflag = false;
  var MCTR374MCTRV2Facultyrflag = false;
 var MCTR374MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MCTR374MCTRV2Faculty", []);
  var MECE350MCTRV2Facultyflag = false;
  var MECE350MCTRV2Facultyrflag = false;
 var MECE350MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MECE350MCTRV2Faculty", []);
  var MECE360MCTRV2Facultyflag = false;
  var MECE360MCTRV2Facultyrflag = false;
 var MECE360MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MECE360MCTRV2Faculty", []);
  var MECE390MCTRV2Facultyflag = false;
  var MECE390MCTRV2Facultyrflag = false;
 var MECE390MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MECE390MCTRV2Faculty", []);
  var ENGM401MCTRV2Facultyflag = false;
  var ENGM401MCTRV2Facultyrflag = false;
 var ENGM401MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("ENGM401MCTRV2Faculty", []);
  var MCTR300MCTRV2Facultyflag = false;
  var MCTR300MCTRV2Facultyrflag = false;
 var MCTR300MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MCTR300MCTRV2Faculty", []);
  var MCTR332MCTRV2Facultyflag = false;
  var MCTR332MCTRV2Facultyrflag = false;
 var MCTR332MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MCTR332MCTRV2Faculty", []);
  var MCTR365MCTRV2Facultyflag = false;
  var MCTR365MCTRV2Facultyrflag = false;
 var MCTR365MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MCTR365MCTRV2Faculty", []);
  var MCTR370MCTRV2Facultyflag = false;
  var MCTR370MCTRV2Facultyrflag = false;
 var MCTR370MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MCTR370MCTRV2Faculty", []);
  var MECE420MCTRV2Facultyflag = false;
  var MECE420MCTRV2Facultyrflag = false;
 var MECE420MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MECE420MCTRV2Faculty", []);
  var ComplementaryElectiveMCTRV2Faculty0flag = false;
  var ComplementaryElectiveMCTRV2Faculty0rflag = false;
 var ComplementaryElectiveMCTRV2Faculty0Time = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("ComplementaryElectiveMCTRV2Faculty0", []);
  var ENGG404MCTRV2Facultyflag = false;
  var ENGG404MCTRV2Facultyrflag = false;
 var ENGG404MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("ENGG404MCTRV2Faculty", []);
  var ITSElectiveMCTRV2Faculty0flag = false;
  var ITSElectiveMCTRV2Faculty0rflag = false;
 var ITSElectiveMCTRV2Faculty0Time = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("ITSElectiveMCTRV2Faculty0", []);
  var MATE201MCTRV2Facultyflag = false;
  var MATE201MCTRV2Facultyrflag = false;
 var MATE201MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MATE201MCTRV2Faculty", []);
  var MCTR460MCTRV2Facultyflag = false;
  var MCTR460MCTRV2Facultyrflag = false;
 var MCTR460MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MCTR460MCTRV2Faculty", []);
  var MECE460MCTRV2Facultyflag = false;
  var MECE460MCTRV2Facultyrflag = false;
 var MECE460MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MECE460MCTRV2Faculty", []);
  var ENGG400MCTRV2Facultyflag = false;
  var ENGG400MCTRV2Facultyrflag = false;
 var ENGG400MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("ENGG400MCTRV2Faculty", []);
  var MCTR461MCTRV2Facultyflag = false;
  var MCTR461MCTRV2Facultyrflag = false;
 var MCTR461MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MCTR461MCTRV2Faculty", []);
  var MCTR465MCTRV2Facultyflag = false;
  var MCTR465MCTRV2Facultyrflag = false;
 var MCTR465MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MCTR465MCTRV2Faculty", []);
  var MECE461MCTRV2Facultyflag = false;
  var MECE461MCTRV2Facultyrflag = false;
 var MECE461MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MECE461MCTRV2Faculty", []);
  var MECE465MCTRV2Facultyflag = false;
  var MECE465MCTRV2Facultyrflag = false;
 var MECE465MCTRV2FacultyTime = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("MECE465MCTRV2Faculty", []);
  var ProgramTechnicalElectiveMCTRV2Faculty0flag = false;
  var ProgramTechnicalElectiveMCTRV2Faculty0rflag = false;
 var ProgramTechnicalElectiveMCTRV2Faculty0Time = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("ProgramTechnicalElectiveMCTRV2Faculty0", []);
  var ProgramTechnicalElectiveMCTRV2Faculty1flag = false;
  var ProgramTechnicalElectiveMCTRV2Faculty1rflag = false;
 var ProgramTechnicalElectiveMCTRV2Faculty1Time = new Date().getTime();
this.MCTRV2FacultyClickedMap.set("ProgramTechnicalElectiveMCTRV2Faculty1", []);
$scope.CHEM103MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103MCTRV2FacultyTime <= 200) { 
        CHEM103MCTRV2FacultyTime = currentTime;
        return;
    }
CHEM103MCTRV2FacultyTime = currentTime;
  var CHEM103MCTRV2Facultyelement = document.getElementById("CHEM103MCTRV2Faculty");
 if (!CHEM103MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("CHEM103MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("CHEM103MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("CHEM103MCTRV2Faculty")[i];
        if (CHEM103MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM103MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine53());
     that.highlightElement(CHEM103MCTRV2Facultyelement, "NaturalSciences");
     that.addToClicked("CHEM103MCTRV2Faculty", "NaturalSciences");
      CHEM103MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine53());
     that.unHighlightElement(CHEM103MCTRV2Facultyelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM103MCTRV2Faculty", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM103MCTRV2Facultyelement, category);
}
      CHEM103MCTRV2Facultyflag=false
  }
};
$scope.ENGG100MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG100MCTRV2FacultyTime <= 200) { 
        ENGG100MCTRV2FacultyTime = currentTime;
        return;
    }
ENGG100MCTRV2FacultyTime = currentTime;
  var ENGG100MCTRV2Facultyelement = document.getElementById("ENGG100MCTRV2Faculty");
 if (!ENGG100MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("ENGG100MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("ENGG100MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("ENGG100MCTRV2Faculty")[i];
        if (ENGG100MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG100MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG100MCTRV2Facultyelement, "EngineeringProfession");
     that.addToClicked("ENGG100MCTRV2Faculty", "EngineeringProfession");
      ENGG100MCTRV2Facultyflag=true
  }
 else {
     that.unHighlightElement(ENGG100MCTRV2Facultyelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG100MCTRV2Faculty", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG100MCTRV2Facultyelement, category);
}
      ENGG100MCTRV2Facultyflag=false
  }
};
$scope.ENGG130MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG130MCTRV2FacultyTime <= 200) { 
        ENGG130MCTRV2FacultyTime = currentTime;
        return;
    }
ENGG130MCTRV2FacultyTime = currentTime;
  var ENGG130MCTRV2Facultyelement = document.getElementById("ENGG130MCTRV2Faculty");
 if (!ENGG130MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("ENGG130MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("ENGG130MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("ENGG130MCTRV2Faculty")[i];
        if (ENGG130MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG130MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine51());
      that.addLine(getLine56());
      that.addLine(getLine60());
      that.addLine(getLine74());
     that.highlightElement(ENGG130MCTRV2Facultyelement, "NaturalSciences");
     that.addToClicked("ENGG130MCTRV2Faculty", "NaturalSciences");
      ENGG130MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine51());
      that.removeLine(getLine56());
      that.removeLine(getLine60());
      that.removeLine(getLine74());
     that.unHighlightElement(ENGG130MCTRV2Facultyelement, "NaturalSciences");
     var category = that.removeFromClicked("ENGG130MCTRV2Faculty", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENGG130MCTRV2Facultyelement, category);
}
      ENGG130MCTRV2Facultyflag=false
  }
};
$scope.ENGL199MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGL199MCTRV2FacultyTime <= 200) { 
        ENGL199MCTRV2FacultyTime = currentTime;
        return;
    }
ENGL199MCTRV2FacultyTime = currentTime;
  var ENGL199MCTRV2Facultyelement = document.getElementById("ENGL199MCTRV2Faculty");
 if (!ENGL199MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("ENGL199MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("ENGL199MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("ENGL199MCTRV2Faculty")[i];
        if (ENGL199MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGL199MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine54());
     that.highlightElement(ENGL199MCTRV2Facultyelement, "Other");
     that.addToClicked("ENGL199MCTRV2Faculty", "Other");
      ENGL199MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine54());
     that.unHighlightElement(ENGL199MCTRV2Facultyelement, "Other");
     var category = that.removeFromClicked("ENGL199MCTRV2Faculty", "Other");
  if (category != "") { 
     that.highlightElement(ENGL199MCTRV2Facultyelement, category);
}
      ENGL199MCTRV2Facultyflag=false
  }
};
$scope.MATH100MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH100MCTRV2FacultyTime <= 200) { 
        MATH100MCTRV2FacultyTime = currentTime;
        return;
    }
MATH100MCTRV2FacultyTime = currentTime;
  var MATH100MCTRV2Facultyelement = document.getElementById("MATH100MCTRV2Faculty");
 if (!MATH100MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MATH100MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MATH100MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MATH100MCTRV2Faculty")[i];
        if (MATH100MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH100MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine51());
      that.addLine(getLine52());
      that.addLine(getLine55());
      that.addLine(getLine58());
      that.addLine(getLine59());
     that.highlightElement(MATH100MCTRV2Facultyelement, "Math");
     that.addToClicked("MATH100MCTRV2Faculty", "Math");
      MATH100MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine51());
      that.removeLine(getLine52());
      that.removeLine(getLine55());
      that.removeLine(getLine58());
      that.removeLine(getLine59());
     that.unHighlightElement(MATH100MCTRV2Facultyelement, "Math");
     var category = that.removeFromClicked("MATH100MCTRV2Faculty", "Math");
  if (category != "") { 
     that.highlightElement(MATH100MCTRV2Facultyelement, category);
}
      MATH100MCTRV2Facultyflag=false
  }
};
$scope.PHYS130MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS130MCTRV2FacultyTime <= 200) { 
        PHYS130MCTRV2FacultyTime = currentTime;
        return;
    }
PHYS130MCTRV2FacultyTime = currentTime;
  var PHYS130MCTRV2Facultyelement = document.getElementById("PHYS130MCTRV2Faculty");
 if (!PHYS130MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("PHYS130MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("PHYS130MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("PHYS130MCTRV2Faculty")[i];
        if (PHYS130MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS130MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine52());
     that.highlightElement(PHYS130MCTRV2Facultyelement, "NaturalSciences");
     that.addToClicked("PHYS130MCTRV2Faculty", "NaturalSciences");
      PHYS130MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine52());
     that.unHighlightElement(PHYS130MCTRV2Facultyelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS130MCTRV2Faculty", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS130MCTRV2Facultyelement, category);
}
      PHYS130MCTRV2Facultyflag=false
  }
};
$scope.CHEM105MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM105MCTRV2FacultyTime <= 200) { 
        CHEM105MCTRV2FacultyTime = currentTime;
        return;
    }
CHEM105MCTRV2FacultyTime = currentTime;
  var CHEM105MCTRV2Facultyelement = document.getElementById("CHEM105MCTRV2Faculty");
 if (!CHEM105MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("CHEM105MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("CHEM105MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("CHEM105MCTRV2Faculty")[i];
        if (CHEM105MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM105MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine53());
      that.addLine(getLine101());
     that.highlightElement(CHEM105MCTRV2Facultyelement, "NaturalSciences");
     that.addToClicked("CHEM105MCTRV2Faculty", "NaturalSciences");
      CHEM105MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine53());
      that.removeLine(getLine101());
     that.unHighlightElement(CHEM105MCTRV2Facultyelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM105MCTRV2Faculty", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM105MCTRV2Facultyelement, category);
}
      CHEM105MCTRV2Facultyflag=false
  }
};
$scope.ENCMP100MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENCMP100MCTRV2FacultyTime <= 200) { 
        ENCMP100MCTRV2FacultyTime = currentTime;
        return;
    }
ENCMP100MCTRV2FacultyTime = currentTime;
  var ENCMP100MCTRV2Facultyelement = document.getElementById("ENCMP100MCTRV2Faculty");
 if (!ENCMP100MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("ENCMP100MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("ENCMP100MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("ENCMP100MCTRV2Faculty")[i];
        if (ENCMP100MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENCMP100MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine71());
     that.highlightElement(ENCMP100MCTRV2Facultyelement, "NaturalSciences");
     that.addToClicked("ENCMP100MCTRV2Faculty", "NaturalSciences");
      ENCMP100MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine71());
     that.unHighlightElement(ENCMP100MCTRV2Facultyelement, "NaturalSciences");
     var category = that.removeFromClicked("ENCMP100MCTRV2Faculty", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENCMP100MCTRV2Facultyelement, category);
}
      ENCMP100MCTRV2Facultyflag=false
  }
};
$scope.ENGG160MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG160MCTRV2FacultyTime <= 200) { 
        ENGG160MCTRV2FacultyTime = currentTime;
        return;
    }
ENGG160MCTRV2FacultyTime = currentTime;
  var ENGG160MCTRV2Facultyelement = document.getElementById("ENGG160MCTRV2Faculty");
 if (!ENGG160MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("ENGG160MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("ENGG160MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("ENGG160MCTRV2Faculty")[i];
        if (ENGG160MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG160MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine54());
      that.addLine(getLine77());
     that.highlightElement(ENGG160MCTRV2Facultyelement, "EngineeringDesign");
     that.addToClicked("ENGG160MCTRV2Faculty", "EngineeringDesign");
      ENGG160MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine54());
      that.removeLine(getLine77());
     that.unHighlightElement(ENGG160MCTRV2Facultyelement, "EngineeringDesign");
     var category = that.removeFromClicked("ENGG160MCTRV2Faculty", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ENGG160MCTRV2Facultyelement, category);
}
      ENGG160MCTRV2Facultyflag=false
  }
};
$scope.ENPH131MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENPH131MCTRV2FacultyTime <= 200) { 
        ENPH131MCTRV2FacultyTime = currentTime;
        return;
    }
ENPH131MCTRV2FacultyTime = currentTime;
  var ENPH131MCTRV2Facultyelement = document.getElementById("ENPH131MCTRV2Faculty");
 if (!ENPH131MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("ENPH131MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("ENPH131MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("ENPH131MCTRV2Faculty")[i];
        if (ENPH131MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENPH131MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine55());
      that.addLine(getLine56());
      that.addLine(getLine57());
      that.addLine(getLine73());
      that.addLine(getLine75());
     that.highlightElement(ENPH131MCTRV2Facultyelement, "NaturalSciences");
     that.addToClicked("ENPH131MCTRV2Faculty", "NaturalSciences");
      ENPH131MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine55());
      that.removeLine(getLine56());
      that.removeLine(getLine57());
      that.removeLine(getLine73());
      that.removeLine(getLine75());
     that.unHighlightElement(ENPH131MCTRV2Facultyelement, "NaturalSciences");
     var category = that.removeFromClicked("ENPH131MCTRV2Faculty", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENPH131MCTRV2Facultyelement, category);
}
      ENPH131MCTRV2Facultyflag=false
  }
};
$scope.MATH101MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH101MCTRV2FacultyTime <= 200) { 
        MATH101MCTRV2FacultyTime = currentTime;
        return;
    }
MATH101MCTRV2FacultyTime = currentTime;
  var MATH101MCTRV2Facultyelement = document.getElementById("MATH101MCTRV2Faculty");
 if (!MATH101MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MATH101MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MATH101MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MATH101MCTRV2Faculty")[i];
        if (MATH101MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH101MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine57());
      that.addLine(getLine58());
      that.addLine(getLine61());
      that.addLine(getLine65());
      that.addLine(getLine67());
      that.addLine(getLine70());
      that.addLine(getLine72());
      that.addLine(getLine76());
     that.highlightElement(MATH101MCTRV2Facultyelement, "Math");
     that.addToClicked("MATH101MCTRV2Faculty", "Math");
      MATH101MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine57());
      that.removeLine(getLine58());
      that.removeLine(getLine61());
      that.removeLine(getLine65());
      that.removeLine(getLine67());
      that.removeLine(getLine70());
      that.removeLine(getLine72());
      that.removeLine(getLine76());
     that.unHighlightElement(MATH101MCTRV2Facultyelement, "Math");
     var category = that.removeFromClicked("MATH101MCTRV2Faculty", "Math");
  if (category != "") { 
     that.highlightElement(MATH101MCTRV2Facultyelement, category);
}
      MATH101MCTRV2Facultyflag=false
  }
};
$scope.MATH102MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH102MCTRV2FacultyTime <= 200) { 
        MATH102MCTRV2FacultyTime = currentTime;
        return;
    }
MATH102MCTRV2FacultyTime = currentTime;
  var MATH102MCTRV2Facultyelement = document.getElementById("MATH102MCTRV2Faculty");
 if (!MATH102MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MATH102MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MATH102MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MATH102MCTRV2Faculty")[i];
        if (MATH102MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH102MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine59());
      that.addLine(getLine66());
      that.addLine(getLine68());
      that.addLine(getLine89());
     that.highlightElement(MATH102MCTRV2Facultyelement, "Math");
     that.addToClicked("MATH102MCTRV2Faculty", "Math");
      MATH102MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine59());
      that.removeLine(getLine66());
      that.removeLine(getLine68());
      that.removeLine(getLine89());
     that.unHighlightElement(MATH102MCTRV2Facultyelement, "Math");
     var category = that.removeFromClicked("MATH102MCTRV2Faculty", "Math");
  if (category != "") { 
     that.highlightElement(MATH102MCTRV2Facultyelement, category);
}
      MATH102MCTRV2Facultyflag=false
  }
};
$scope.CIVE270MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE270MCTRV2FacultyTime <= 200) { 
        CIVE270MCTRV2FacultyTime = currentTime;
        return;
    }
CIVE270MCTRV2FacultyTime = currentTime;
  var CIVE270MCTRV2Facultyelement = document.getElementById("CIVE270MCTRV2Faculty");
 if (!CIVE270MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("CIVE270MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("CIVE270MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("CIVE270MCTRV2Faculty")[i];
        if (CIVE270MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE270MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine60());
      that.addLine(getLine61());
      that.addLine(getLine79());
      that.addLine(getLine87());
      that.addLine(getLine91());
     that.highlightElement(CIVE270MCTRV2Facultyelement, "EngineeringSciences");
     that.addToClicked("CIVE270MCTRV2Faculty", "EngineeringSciences");
      CIVE270MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine60());
      that.removeLine(getLine61());
      that.removeLine(getLine79());
      that.removeLine(getLine87());
      that.removeLine(getLine91());
     that.unHighlightElement(CIVE270MCTRV2Facultyelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE270MCTRV2Faculty", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE270MCTRV2Facultyelement, category);
}
      CIVE270MCTRV2Facultyflag=false
  }
};
$scope.ECE210MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE210MCTRV2FacultyTime <= 200) { 
        ECE210MCTRV2FacultyTime = currentTime;
        return;
    }
ECE210MCTRV2FacultyTime = currentTime;
  var ECE210MCTRV2Facultyelement = document.getElementById("ECE210MCTRV2Faculty");
 if (!ECE210MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("ECE210MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("ECE210MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("ECE210MCTRV2Faculty")[i];
        if (ECE210MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE210MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ECE210MCTRV2Facultyelement, "EngineeringSciences");
     that.addToClicked("ECE210MCTRV2Faculty", "EngineeringSciences");
      ECE210MCTRV2Facultyflag=true
  }
 else {
     that.unHighlightElement(ECE210MCTRV2Facultyelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE210MCTRV2Faculty", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE210MCTRV2Facultyelement, category);
}
      ECE210MCTRV2Facultyflag=false
  }
};
$scope.ECE240MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE240MCTRV2FacultyTime <= 200) { 
        ECE240MCTRV2FacultyTime = currentTime;
        return;
    }
ECE240MCTRV2FacultyTime = currentTime;
  var ECE240MCTRV2Facultyelement = document.getElementById("ECE240MCTRV2Faculty");
 if (!ECE240MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("ECE240MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("ECE240MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("ECE240MCTRV2Faculty")[i];
        if (ECE240MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE240MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine62());
      that.addLine(getLine63());
      that.addLine(getLine69());
     that.highlightElement(ECE240MCTRV2Facultyelement, "EngineeringSciences");
     that.addToClicked("ECE240MCTRV2Faculty", "EngineeringSciences");
      ECE240MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine62());
      that.removeLine(getLine63());
      that.removeLine(getLine69());
     that.unHighlightElement(ECE240MCTRV2Facultyelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE240MCTRV2Faculty", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE240MCTRV2Facultyelement, category);
}
      ECE240MCTRV2Facultyflag=false
  }
};
$scope.MATH201MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH201MCTRV2FacultyTime <= 200) { 
        MATH201MCTRV2FacultyTime = currentTime;
        return;
    }
MATH201MCTRV2FacultyTime = currentTime;
  var MATH201MCTRV2Facultyelement = document.getElementById("MATH201MCTRV2Faculty");
 if (!MATH201MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MATH201MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MATH201MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MATH201MCTRV2Faculty")[i];
        if (MATH201MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH201MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine63());
      that.addLine(getLine64());
      that.addLine(getLine90());
     that.highlightElement(MATH201MCTRV2Facultyelement, "Math");
     that.addToClicked("MATH201MCTRV2Faculty", "Math");
      MATH201MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine63());
      that.removeLine(getLine64());
      that.removeLine(getLine90());
     that.unHighlightElement(MATH201MCTRV2Facultyelement, "Math");
     var category = that.removeFromClicked("MATH201MCTRV2Faculty", "Math");
  if (category != "") { 
     that.highlightElement(MATH201MCTRV2Facultyelement, category);
}
      MATH201MCTRV2Facultyflag=false
  }
};
$scope.MATH209MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH209MCTRV2FacultyTime <= 200) { 
        MATH209MCTRV2FacultyTime = currentTime;
        return;
    }
MATH209MCTRV2FacultyTime = currentTime;
  var MATH209MCTRV2Facultyelement = document.getElementById("MATH209MCTRV2Faculty");
 if (!MATH209MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MATH209MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MATH209MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MATH209MCTRV2Faculty")[i];
        if (MATH209MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH209MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine64());
      that.addLine(getLine65());
      that.addLine(getLine66());
      that.addLine(getLine82());
     that.highlightElement(MATH209MCTRV2Facultyelement, "Math");
     that.addToClicked("MATH209MCTRV2Faculty", "Math");
      MATH209MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine64());
      that.removeLine(getLine65());
      that.removeLine(getLine66());
      that.removeLine(getLine82());
     that.unHighlightElement(MATH209MCTRV2Facultyelement, "Math");
     var category = that.removeFromClicked("MATH209MCTRV2Faculty", "Math");
  if (category != "") { 
     that.highlightElement(MATH209MCTRV2Facultyelement, category);
}
      MATH209MCTRV2Facultyflag=false
  }
};
$scope.MCTR202MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR202MCTRV2FacultyTime <= 200) { 
        MCTR202MCTRV2FacultyTime = currentTime;
        return;
    }
MCTR202MCTRV2FacultyTime = currentTime;
  var MCTR202MCTRV2Facultyelement = document.getElementById("MCTR202MCTRV2Faculty");
 if (!MCTR202MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MCTR202MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MCTR202MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MCTR202MCTRV2Faculty")[i];
        if (MCTR202MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR202MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine62());
      that.addLine(getLine67());
      that.addLine(getLine68());
      that.addLine(getLine69());
      that.addLine(getLine80());
      that.addLine(getLine92());
      that.addLine(getLine94());
     that.highlightElement(MCTR202MCTRV2Facultyelement, "Mechatronics");
     that.addToClicked("MCTR202MCTRV2Faculty", "Mechatronics");
      MCTR202MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine62());
      that.removeLine(getLine67());
      that.removeLine(getLine68());
      that.removeLine(getLine69());
      that.removeLine(getLine80());
      that.removeLine(getLine92());
      that.removeLine(getLine94());
     that.unHighlightElement(MCTR202MCTRV2Facultyelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR202MCTRV2Faculty", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR202MCTRV2Facultyelement, category);
}
      MCTR202MCTRV2Facultyflag=false
  }
};
$scope.ENGG299MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG299MCTRV2FacultyTime <= 200) { 
        ENGG299MCTRV2FacultyTime = currentTime;
        return;
    }
ENGG299MCTRV2FacultyTime = currentTime;
  var ENGG299MCTRV2Facultyelement = document.getElementById("ENGG299MCTRV2Faculty");
 if (!ENGG299MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("ENGG299MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("ENGG299MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("ENGG299MCTRV2Faculty")[i];
        if (ENGG299MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG299MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG299MCTRV2Facultyelement, "EngineeringProfession");
     that.addToClicked("ENGG299MCTRV2Faculty", "EngineeringProfession");
      ENGG299MCTRV2Facultyflag=true
  }
 else {
     that.unHighlightElement(ENGG299MCTRV2Facultyelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG299MCTRV2Faculty", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG299MCTRV2Facultyelement, category);
}
      ENGG299MCTRV2Facultyflag=false
  }
};
$scope.CHE243MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE243MCTRV2FacultyTime <= 200) { 
        CHE243MCTRV2FacultyTime = currentTime;
        return;
    }
CHE243MCTRV2FacultyTime = currentTime;
  var CHE243MCTRV2Facultyelement = document.getElementById("CHE243MCTRV2Faculty");
 if (!CHE243MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("CHE243MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("CHE243MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("CHE243MCTRV2Faculty")[i];
        if (CHE243MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE243MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine70());
     that.highlightElement(CHE243MCTRV2Facultyelement, "EngineeringSciences");
     that.addToClicked("CHE243MCTRV2Faculty", "EngineeringSciences");
      CHE243MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine70());
     that.unHighlightElement(CHE243MCTRV2Facultyelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE243MCTRV2Faculty", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE243MCTRV2Facultyelement, category);
}
      CHE243MCTRV2Facultyflag=false
  }
};
$scope.MCTR200MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR200MCTRV2FacultyTime <= 200) { 
        MCTR200MCTRV2FacultyTime = currentTime;
        return;
    }
MCTR200MCTRV2FacultyTime = currentTime;
  var MCTR200MCTRV2Facultyelement = document.getElementById("MCTR200MCTRV2Faculty");
 if (!MCTR200MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MCTR200MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MCTR200MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MCTR200MCTRV2Faculty")[i];
        if (MCTR200MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR200MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(MCTR200MCTRV2Facultyelement, "Mechatronics");
     that.addToClicked("MCTR200MCTRV2Faculty", "Mechatronics");
      MCTR200MCTRV2Facultyflag=true
  }
 else {
     that.unHighlightElement(MCTR200MCTRV2Facultyelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR200MCTRV2Faculty", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR200MCTRV2Facultyelement, category);
}
      MCTR200MCTRV2Facultyflag=false
  }
};
$scope.MCTR274MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR274MCTRV2FacultyTime <= 200) { 
        MCTR274MCTRV2FacultyTime = currentTime;
        return;
    }
MCTR274MCTRV2FacultyTime = currentTime;
  var MCTR274MCTRV2Facultyelement = document.getElementById("MCTR274MCTRV2Faculty");
 if (!MCTR274MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MCTR274MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MCTR274MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MCTR274MCTRV2Faculty")[i];
        if (MCTR274MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR274MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine71());
      that.addLine(getLine83());
      that.addLine(getLine96());
     that.highlightElement(MCTR274MCTRV2Facultyelement, "Mechatronics");
     that.addToClicked("MCTR274MCTRV2Faculty", "Mechatronics");
      MCTR274MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine71());
      that.removeLine(getLine83());
      that.removeLine(getLine96());
     that.unHighlightElement(MCTR274MCTRV2Facultyelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR274MCTRV2Faculty", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR274MCTRV2Facultyelement, category);
}
      MCTR274MCTRV2Facultyflag=false
  }
};
$scope.MECE230MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE230MCTRV2FacultyTime <= 200) { 
        MECE230MCTRV2FacultyTime = currentTime;
        return;
    }
MECE230MCTRV2FacultyTime = currentTime;
  var MECE230MCTRV2Facultyelement = document.getElementById("MECE230MCTRV2Faculty");
 if (!MECE230MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MECE230MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MECE230MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MECE230MCTRV2Faculty")[i];
        if (MECE230MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE230MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine72());
      that.addLine(getLine73());
     that.highlightElement(MECE230MCTRV2Facultyelement, "NaturalSciences");
     that.addToClicked("MECE230MCTRV2Faculty", "NaturalSciences");
      MECE230MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine72());
      that.removeLine(getLine73());
     that.unHighlightElement(MECE230MCTRV2Facultyelement, "NaturalSciences");
     var category = that.removeFromClicked("MECE230MCTRV2Faculty", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(MECE230MCTRV2Facultyelement, category);
}
      MECE230MCTRV2Facultyflag=false
  }
};
$scope.MECE250MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE250MCTRV2FacultyTime <= 200) { 
        MECE250MCTRV2FacultyTime = currentTime;
        return;
    }
MECE250MCTRV2FacultyTime = currentTime;
  var MECE250MCTRV2Facultyelement = document.getElementById("MECE250MCTRV2Faculty");
 if (!MECE250MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MECE250MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MECE250MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MECE250MCTRV2Faculty")[i];
        if (MECE250MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE250MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine74());
      that.addLine(getLine75());
      that.addLine(getLine76());
      that.addLine(getLine84());
     that.highlightElement(MECE250MCTRV2Facultyelement, "EngineeringSciences");
     that.addToClicked("MECE250MCTRV2Faculty", "EngineeringSciences");
      MECE250MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine74());
      that.removeLine(getLine75());
      that.removeLine(getLine76());
      that.removeLine(getLine84());
     that.unHighlightElement(MECE250MCTRV2Facultyelement, "EngineeringSciences");
     var category = that.removeFromClicked("MECE250MCTRV2Faculty", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MECE250MCTRV2Facultyelement, category);
}
      MECE250MCTRV2Facultyflag=false
  }
};
$scope.MECE260MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE260MCTRV2FacultyTime <= 200) { 
        MECE260MCTRV2FacultyTime = currentTime;
        return;
    }
MECE260MCTRV2FacultyTime = currentTime;
  var MECE260MCTRV2Facultyelement = document.getElementById("MECE260MCTRV2Faculty");
 if (!MECE260MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MECE260MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MECE260MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MECE260MCTRV2Faculty")[i];
        if (MECE260MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE260MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine77());
      that.addLine(getLine78());
      that.addLine(getLine79());
      that.addLine(getLine85());
     that.highlightElement(MECE260MCTRV2Facultyelement, "EngineeringDesign");
     that.addToClicked("MECE260MCTRV2Faculty", "EngineeringDesign");
      MECE260MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine77());
      that.removeLine(getLine78());
      that.removeLine(getLine79());
      that.removeLine(getLine85());
     that.unHighlightElement(MECE260MCTRV2Facultyelement, "EngineeringDesign");
     var category = that.removeFromClicked("MECE260MCTRV2Faculty", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MECE260MCTRV2Facultyelement, category);
}
      MECE260MCTRV2Facultyflag=false
  }
};
$scope.MECE265MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE265MCTRV2FacultyTime <= 200) { 
        MECE265MCTRV2FacultyTime = currentTime;
        return;
    }
MECE265MCTRV2FacultyTime = currentTime;
  var MECE265MCTRV2Facultyelement = document.getElementById("MECE265MCTRV2Faculty");
 if (!MECE265MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MECE265MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MECE265MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MECE265MCTRV2Faculty")[i];
        if (MECE265MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE265MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine78());
      that.addLine(getLine86());
     that.highlightElement(MECE265MCTRV2Facultyelement, "EngineeringDesign");
     that.addToClicked("MECE265MCTRV2Faculty", "EngineeringDesign");
      MECE265MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine78());
      that.removeLine(getLine86());
     that.unHighlightElement(MECE265MCTRV2Facultyelement, "EngineeringDesign");
     var category = that.removeFromClicked("MECE265MCTRV2Faculty", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MECE265MCTRV2Facultyelement, category);
}
      MECE265MCTRV2Facultyflag=false
  }
};
$scope.ECE315MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE315MCTRV2FacultyTime <= 200) { 
        ECE315MCTRV2FacultyTime = currentTime;
        return;
    }
ECE315MCTRV2FacultyTime = currentTime;
  var ECE315MCTRV2Facultyelement = document.getElementById("ECE315MCTRV2Faculty");
 if (!ECE315MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("ECE315MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("ECE315MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("ECE315MCTRV2Faculty")[i];
        if (ECE315MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE315MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine80());
      that.addLine(getLine81());
     that.highlightElement(ECE315MCTRV2Facultyelement, "EngineeringSciences");
     that.addToClicked("ECE315MCTRV2Faculty", "EngineeringSciences");
      ECE315MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine80());
      that.removeLine(getLine81());
     that.unHighlightElement(ECE315MCTRV2Facultyelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE315MCTRV2Faculty", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE315MCTRV2Facultyelement, category);
}
      ECE315MCTRV2Facultyflag=false
  }
};
$scope.ECE342MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE342MCTRV2FacultyTime <= 200) { 
        ECE342MCTRV2FacultyTime = currentTime;
        return;
    }
ECE342MCTRV2FacultyTime = currentTime;
  var ECE342MCTRV2Facultyelement = document.getElementById("ECE342MCTRV2Faculty");
 if (!ECE342MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("ECE342MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("ECE342MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("ECE342MCTRV2Faculty")[i];
        if (ECE342MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE342MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine82());
      that.addLine(getLine93());
      that.addLine(getLine98());
     that.highlightElement(ECE342MCTRV2Facultyelement, "Math");
     that.addToClicked("ECE342MCTRV2Faculty", "Math");
      ECE342MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine82());
      that.removeLine(getLine93());
      that.removeLine(getLine98());
     that.unHighlightElement(ECE342MCTRV2Facultyelement, "Math");
     var category = that.removeFromClicked("ECE342MCTRV2Faculty", "Math");
  if (category != "") { 
     that.highlightElement(ECE342MCTRV2Facultyelement, category);
}
      ECE342MCTRV2Facultyflag=false
  }
};
$scope.MCTR374MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR374MCTRV2FacultyTime <= 200) { 
        MCTR374MCTRV2FacultyTime = currentTime;
        return;
    }
MCTR374MCTRV2FacultyTime = currentTime;
  var MCTR374MCTRV2Facultyelement = document.getElementById("MCTR374MCTRV2Faculty");
 if (!MCTR374MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MCTR374MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MCTR374MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MCTR374MCTRV2Faculty")[i];
        if (MCTR374MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR374MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine81());
      that.addLine(getLine83());
      that.addLine(getLine108());
     that.highlightElement(MCTR374MCTRV2Facultyelement, "Mechatronics");
     that.addToClicked("MCTR374MCTRV2Faculty", "Mechatronics");
      MCTR374MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine81());
      that.removeLine(getLine83());
      that.removeLine(getLine108());
     that.unHighlightElement(MCTR374MCTRV2Facultyelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR374MCTRV2Faculty", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR374MCTRV2Facultyelement, category);
}
      MCTR374MCTRV2Facultyflag=false
  }
};
$scope.MECE350MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE350MCTRV2FacultyTime <= 200) { 
        MECE350MCTRV2FacultyTime = currentTime;
        return;
    }
MECE350MCTRV2FacultyTime = currentTime;
  var MECE350MCTRV2Facultyelement = document.getElementById("MECE350MCTRV2Faculty");
 if (!MECE350MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MECE350MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MECE350MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MECE350MCTRV2Faculty")[i];
        if (MECE350MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE350MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine84());
      that.addLine(getLine88());
     that.highlightElement(MECE350MCTRV2Facultyelement, "EngineeringSciences");
     that.addToClicked("MECE350MCTRV2Faculty", "EngineeringSciences");
      MECE350MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine84());
      that.removeLine(getLine88());
     that.unHighlightElement(MECE350MCTRV2Facultyelement, "EngineeringSciences");
     var category = that.removeFromClicked("MECE350MCTRV2Faculty", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MECE350MCTRV2Facultyelement, category);
}
      MECE350MCTRV2Facultyflag=false
  }
};
$scope.MECE360MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE360MCTRV2FacultyTime <= 200) { 
        MECE360MCTRV2FacultyTime = currentTime;
        return;
    }
MECE360MCTRV2FacultyTime = currentTime;
  var MECE360MCTRV2Facultyelement = document.getElementById("MECE360MCTRV2Faculty");
 if (!MECE360MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MECE360MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MECE360MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MECE360MCTRV2Faculty")[i];
        if (MECE360MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE360MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine85());
      that.addLine(getLine86());
      that.addLine(getLine87());
      that.addLine(getLine88());
      that.addLine(getLine95());
      that.addLine(getLine103());
      that.addLine(getLine112());
     that.highlightElement(MECE360MCTRV2Facultyelement, "EngineeringDesign");
     that.addToClicked("MECE360MCTRV2Faculty", "EngineeringDesign");
      MECE360MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine85());
      that.removeLine(getLine86());
      that.removeLine(getLine87());
      that.removeLine(getLine88());
      that.removeLine(getLine95());
      that.removeLine(getLine103());
      that.removeLine(getLine112());
     that.unHighlightElement(MECE360MCTRV2Facultyelement, "EngineeringDesign");
     var category = that.removeFromClicked("MECE360MCTRV2Faculty", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MECE360MCTRV2Facultyelement, category);
}
      MECE360MCTRV2Facultyflag=false
  }
};
$scope.MECE390MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE390MCTRV2FacultyTime <= 200) { 
        MECE390MCTRV2FacultyTime = currentTime;
        return;
    }
MECE390MCTRV2FacultyTime = currentTime;
  var MECE390MCTRV2Facultyelement = document.getElementById("MECE390MCTRV2Faculty");
 if (!MECE390MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MECE390MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MECE390MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MECE390MCTRV2Faculty")[i];
        if (MECE390MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE390MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine89());
      that.addLine(getLine90());
      that.addLine(getLine99());
      that.addLine(getLine100());
      that.addLine(getLine113());
     that.highlightElement(MECE390MCTRV2Facultyelement, "Math");
     that.addToClicked("MECE390MCTRV2Faculty", "Math");
      MECE390MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine89());
      that.removeLine(getLine90());
      that.removeLine(getLine99());
      that.removeLine(getLine100());
      that.removeLine(getLine113());
     that.unHighlightElement(MECE390MCTRV2Facultyelement, "Math");
     var category = that.removeFromClicked("MECE390MCTRV2Faculty", "Math");
  if (category != "") { 
     that.highlightElement(MECE390MCTRV2Facultyelement, category);
}
      MECE390MCTRV2Facultyflag=false
  }
};
$scope.ENGM401MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM401MCTRV2FacultyTime <= 200) { 
        ENGM401MCTRV2FacultyTime = currentTime;
        return;
    }
ENGM401MCTRV2FacultyTime = currentTime;
  var ENGM401MCTRV2Facultyelement = document.getElementById("ENGM401MCTRV2Faculty");
 if (!ENGM401MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("ENGM401MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("ENGM401MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("ENGM401MCTRV2Faculty")[i];
        if (ENGM401MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM401MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine105());
     that.highlightElement(ENGM401MCTRV2Facultyelement, "Other");
     that.addToClicked("ENGM401MCTRV2Faculty", "Other");
      ENGM401MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine105());
     that.unHighlightElement(ENGM401MCTRV2Facultyelement, "Other");
     var category = that.removeFromClicked("ENGM401MCTRV2Faculty", "Other");
  if (category != "") { 
     that.highlightElement(ENGM401MCTRV2Facultyelement, category);
}
      ENGM401MCTRV2Facultyflag=false
  }
};
$scope.MCTR300MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR300MCTRV2FacultyTime <= 200) { 
        MCTR300MCTRV2FacultyTime = currentTime;
        return;
    }
MCTR300MCTRV2FacultyTime = currentTime;
  var MCTR300MCTRV2Facultyelement = document.getElementById("MCTR300MCTRV2Faculty");
 if (!MCTR300MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MCTR300MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MCTR300MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MCTR300MCTRV2Faculty")[i];
        if (MCTR300MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR300MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine91());
      that.addLine(getLine92());
      that.addLine(getLine93());
      that.addLine(getLine114());
     that.highlightElement(MCTR300MCTRV2Facultyelement, "Mechatronics");
     that.addToClicked("MCTR300MCTRV2Faculty", "Mechatronics");
      MCTR300MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine91());
      that.removeLine(getLine92());
      that.removeLine(getLine93());
      that.removeLine(getLine114());
     that.unHighlightElement(MCTR300MCTRV2Facultyelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR300MCTRV2Faculty", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR300MCTRV2Facultyelement, category);
}
      MCTR300MCTRV2Facultyflag=false
  }
};
$scope.MCTR332MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR332MCTRV2FacultyTime <= 200) { 
        MCTR332MCTRV2FacultyTime = currentTime;
        return;
    }
MCTR332MCTRV2FacultyTime = currentTime;
  var MCTR332MCTRV2Facultyelement = document.getElementById("MCTR332MCTRV2Faculty");
 if (!MCTR332MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MCTR332MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MCTR332MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MCTR332MCTRV2Faculty")[i];
        if (MCTR332MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR332MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine94());
     that.highlightElement(MCTR332MCTRV2Facultyelement, "Mechatronics");
     that.addToClicked("MCTR332MCTRV2Faculty", "Mechatronics");
      MCTR332MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine94());
     that.unHighlightElement(MCTR332MCTRV2Facultyelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR332MCTRV2Faculty", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR332MCTRV2Facultyelement, category);
}
      MCTR332MCTRV2Facultyflag=false
  }
};
$scope.MCTR365MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR365MCTRV2FacultyTime <= 200) { 
        MCTR365MCTRV2FacultyTime = currentTime;
        return;
    }
MCTR365MCTRV2FacultyTime = currentTime;
  var MCTR365MCTRV2Facultyelement = document.getElementById("MCTR365MCTRV2Faculty");
 if (!MCTR365MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MCTR365MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MCTR365MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MCTR365MCTRV2Faculty")[i];
        if (MCTR365MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR365MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine95());
      that.addLine(getLine96());
      that.addLine(getLine97());
      that.addLine(getLine104());
     that.highlightElement(MCTR365MCTRV2Facultyelement, "Mechatronics");
     that.addToClicked("MCTR365MCTRV2Faculty", "Mechatronics");
      MCTR365MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine95());
      that.removeLine(getLine96());
      that.removeLine(getLine97());
      that.removeLine(getLine104());
     that.unHighlightElement(MCTR365MCTRV2Facultyelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR365MCTRV2Faculty", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR365MCTRV2Facultyelement, category);
}
      MCTR365MCTRV2Facultyflag=false
  }
};
$scope.MCTR370MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR370MCTRV2FacultyTime <= 200) { 
        MCTR370MCTRV2FacultyTime = currentTime;
        return;
    }
MCTR370MCTRV2FacultyTime = currentTime;
  var MCTR370MCTRV2Facultyelement = document.getElementById("MCTR370MCTRV2Faculty");
 if (!MCTR370MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MCTR370MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MCTR370MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MCTR370MCTRV2Faculty")[i];
        if (MCTR370MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR370MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine98());
      that.addLine(getLine99());
     that.highlightElement(MCTR370MCTRV2Facultyelement, "Mechatronics");
     that.addToClicked("MCTR370MCTRV2Faculty", "Mechatronics");
      MCTR370MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine98());
      that.removeLine(getLine99());
     that.unHighlightElement(MCTR370MCTRV2Facultyelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR370MCTRV2Faculty", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR370MCTRV2Facultyelement, category);
}
      MCTR370MCTRV2Facultyflag=false
  }
};
$scope.MECE420MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE420MCTRV2FacultyTime <= 200) { 
        MECE420MCTRV2FacultyTime = currentTime;
        return;
    }
MECE420MCTRV2FacultyTime = currentTime;
  var MECE420MCTRV2Facultyelement = document.getElementById("MECE420MCTRV2Faculty");
 if (!MECE420MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MECE420MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MECE420MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MECE420MCTRV2Faculty")[i];
        if (MECE420MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE420MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine97());
      that.addLine(getLine100());
      that.addLine(getLine102());
      that.addLine(getLine106());
      that.addLine(getLine109());
     that.highlightElement(MECE420MCTRV2Facultyelement, "EngineeringSciences");
     that.addToClicked("MECE420MCTRV2Faculty", "EngineeringSciences");
      MECE420MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine97());
      that.removeLine(getLine100());
      that.removeLine(getLine102());
      that.removeLine(getLine106());
      that.removeLine(getLine109());
     that.unHighlightElement(MECE420MCTRV2Facultyelement, "EngineeringSciences");
     var category = that.removeFromClicked("MECE420MCTRV2Faculty", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MECE420MCTRV2Facultyelement, category);
}
      MECE420MCTRV2Facultyflag=false
  }
};
$scope.ComplementaryElectiveMCTRV2Faculty0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveMCTRV2Faculty0Time <= 200) { 
        ComplementaryElectiveMCTRV2Faculty0Time = currentTime;
        return;
    }
ComplementaryElectiveMCTRV2Faculty0Time = currentTime;
  var ComplementaryElectiveMCTRV2Faculty0element = document.getElementById("ComplementaryElectiveMCTRV2Faculty0");
 if (!ComplementaryElectiveMCTRV2Faculty0flag) {
     if (that.MCTRV2FacultyClickedMap.get("ComplementaryElectiveMCTRV2Faculty0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("ComplementaryElectiveMCTRV2Faculty0").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("ComplementaryElectiveMCTRV2Faculty0")[i];
        if (ComplementaryElectiveMCTRV2Faculty0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveMCTRV2Faculty0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveMCTRV2Faculty0element, "COMP");
     that.addToClicked("ComplementaryElectiveMCTRV2Faculty0", "COMP");
      ComplementaryElectiveMCTRV2Faculty0flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveMCTRV2Faculty0element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveMCTRV2Faculty0", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveMCTRV2Faculty0element, category);
}
      ComplementaryElectiveMCTRV2Faculty0flag=false
  }
};
$scope.ENGG404MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG404MCTRV2FacultyTime <= 200) { 
        ENGG404MCTRV2FacultyTime = currentTime;
        return;
    }
ENGG404MCTRV2FacultyTime = currentTime;
  var ENGG404MCTRV2Facultyelement = document.getElementById("ENGG404MCTRV2Faculty");
 if (!ENGG404MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("ENGG404MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("ENGG404MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("ENGG404MCTRV2Faculty")[i];
        if (ENGG404MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG404MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG404MCTRV2Facultyelement, "EngineeringProfession");
     that.addToClicked("ENGG404MCTRV2Faculty", "EngineeringProfession");
      ENGG404MCTRV2Facultyflag=true
  }
 else {
     that.unHighlightElement(ENGG404MCTRV2Facultyelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG404MCTRV2Faculty", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG404MCTRV2Facultyelement, category);
}
      ENGG404MCTRV2Facultyflag=false
  }
};
$scope.ITSElectiveMCTRV2Faculty0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ITSElectiveMCTRV2Faculty0Time <= 200) { 
        ITSElectiveMCTRV2Faculty0Time = currentTime;
        return;
    }
ITSElectiveMCTRV2Faculty0Time = currentTime;
  var ITSElectiveMCTRV2Faculty0element = document.getElementById("ITSElectiveMCTRV2Faculty0");
 if (!ITSElectiveMCTRV2Faculty0flag) {
     if (that.MCTRV2FacultyClickedMap.get("ITSElectiveMCTRV2Faculty0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("ITSElectiveMCTRV2Faculty0").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("ITSElectiveMCTRV2Faculty0")[i];
        if (ITSElectiveMCTRV2Faculty0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ITSElectiveMCTRV2Faculty0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ITSElectiveMCTRV2Faculty0element, "ITS");
     that.addToClicked("ITSElectiveMCTRV2Faculty0", "ITS");
      ITSElectiveMCTRV2Faculty0flag=true
  }
 else {
     that.unHighlightElement(ITSElectiveMCTRV2Faculty0element, "ITS");
     var category = that.removeFromClicked("ITSElectiveMCTRV2Faculty0", "ITS");
  if (category != "") { 
     that.highlightElement(ITSElectiveMCTRV2Faculty0element, category);
}
      ITSElectiveMCTRV2Faculty0flag=false
  }
};
$scope.MATE201MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE201MCTRV2FacultyTime <= 200) { 
        MATE201MCTRV2FacultyTime = currentTime;
        return;
    }
MATE201MCTRV2FacultyTime = currentTime;
  var MATE201MCTRV2Facultyelement = document.getElementById("MATE201MCTRV2Faculty");
 if (!MATE201MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MATE201MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MATE201MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MATE201MCTRV2Faculty")[i];
        if (MATE201MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE201MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine101());
     that.highlightElement(MATE201MCTRV2Facultyelement, "NaturalSciences");
     that.addToClicked("MATE201MCTRV2Faculty", "NaturalSciences");
      MATE201MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine101());
     that.unHighlightElement(MATE201MCTRV2Facultyelement, "NaturalSciences");
     var category = that.removeFromClicked("MATE201MCTRV2Faculty", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(MATE201MCTRV2Facultyelement, category);
}
      MATE201MCTRV2Facultyflag=false
  }
};
$scope.MCTR460MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR460MCTRV2FacultyTime <= 200) { 
        MCTR460MCTRV2FacultyTime = currentTime;
        return;
    }
MCTR460MCTRV2FacultyTime = currentTime;
  var MCTR460MCTRV2Facultyelement = document.getElementById("MCTR460MCTRV2Faculty");
 if (!MCTR460MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MCTR460MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MCTR460MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MCTR460MCTRV2Faculty")[i];
        if (MCTR460MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR460MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine102());
      that.addLine(getLine107());
     that.highlightElement(MCTR460MCTRV2Facultyelement, "Mechatronics");
     that.addToClicked("MCTR460MCTRV2Faculty", "Mechatronics");
      MCTR460MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine102());
      that.removeLine(getLine107());
     that.unHighlightElement(MCTR460MCTRV2Facultyelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR460MCTRV2Faculty", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR460MCTRV2Facultyelement, category);
}
      MCTR460MCTRV2Facultyflag=false
  }
};
$scope.MECE460MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE460MCTRV2FacultyTime <= 200) { 
        MECE460MCTRV2FacultyTime = currentTime;
        return;
    }
MECE460MCTRV2FacultyTime = currentTime;
  var MECE460MCTRV2Facultyelement = document.getElementById("MECE460MCTRV2Faculty");
 if (!MECE460MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MECE460MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MECE460MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MECE460MCTRV2Faculty")[i];
        if (MECE460MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE460MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine103());
      that.addLine(getLine104());
      that.addLine(getLine105());
      that.addLine(getLine111());
     that.highlightElement(MECE460MCTRV2Facultyelement, "EngineeringDesign");
     that.addToClicked("MECE460MCTRV2Faculty", "EngineeringDesign");
      MECE460MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine103());
      that.removeLine(getLine104());
      that.removeLine(getLine105());
      that.removeLine(getLine111());
     that.unHighlightElement(MECE460MCTRV2Facultyelement, "EngineeringDesign");
     var category = that.removeFromClicked("MECE460MCTRV2Faculty", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MECE460MCTRV2Facultyelement, category);
}
      MECE460MCTRV2Facultyflag=false
  }
};
$scope.ENGG400MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG400MCTRV2FacultyTime <= 200) { 
        ENGG400MCTRV2FacultyTime = currentTime;
        return;
    }
ENGG400MCTRV2FacultyTime = currentTime;
  var ENGG400MCTRV2Facultyelement = document.getElementById("ENGG400MCTRV2Faculty");
 if (!ENGG400MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("ENGG400MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("ENGG400MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("ENGG400MCTRV2Faculty")[i];
        if (ENGG400MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG400MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG400MCTRV2Facultyelement, "EngineeringProfession");
     that.addToClicked("ENGG400MCTRV2Faculty", "EngineeringProfession");
      ENGG400MCTRV2Facultyflag=true
  }
 else {
     that.unHighlightElement(ENGG400MCTRV2Facultyelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG400MCTRV2Faculty", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG400MCTRV2Facultyelement, category);
}
      ENGG400MCTRV2Facultyflag=false
  }
};
$scope.MCTR461MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR461MCTRV2FacultyTime <= 200) { 
        MCTR461MCTRV2FacultyTime = currentTime;
        return;
    }
MCTR461MCTRV2FacultyTime = currentTime;
  var MCTR461MCTRV2Facultyelement = document.getElementById("MCTR461MCTRV2Faculty");
 if (!MCTR461MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MCTR461MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MCTR461MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MCTR461MCTRV2Faculty")[i];
        if (MCTR461MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR461MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine106());
      that.addLine(getLine107());
      that.addLine(getLine110());
     that.highlightElement(MCTR461MCTRV2Facultyelement, "Mechatronics");
     that.addToClicked("MCTR461MCTRV2Faculty", "Mechatronics");
      MCTR461MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine106());
      that.removeLine(getLine107());
      that.removeLine(getLine110());
     that.unHighlightElement(MCTR461MCTRV2Facultyelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR461MCTRV2Faculty", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR461MCTRV2Facultyelement, category);
}
      MCTR461MCTRV2Facultyflag=false
  }
};
$scope.MCTR465MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR465MCTRV2FacultyTime <= 200) { 
        MCTR465MCTRV2FacultyTime = currentTime;
        return;
    }
MCTR465MCTRV2FacultyTime = currentTime;
  var MCTR465MCTRV2Facultyelement = document.getElementById("MCTR465MCTRV2Faculty");
 if (!MCTR465MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MCTR465MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MCTR465MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MCTR465MCTRV2Faculty")[i];
        if (MCTR465MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR465MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine108());
      that.addLine(getLine109());
      that.addLine(getLine110());
     that.highlightElement(MCTR465MCTRV2Facultyelement, "Mechatronics");
     that.addToClicked("MCTR465MCTRV2Faculty", "Mechatronics");
      MCTR465MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine108());
      that.removeLine(getLine109());
      that.removeLine(getLine110());
     that.unHighlightElement(MCTR465MCTRV2Facultyelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR465MCTRV2Faculty", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR465MCTRV2Facultyelement, category);
}
      MCTR465MCTRV2Facultyflag=false
  }
};
$scope.MECE461MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE461MCTRV2FacultyTime <= 200) { 
        MECE461MCTRV2FacultyTime = currentTime;
        return;
    }
MECE461MCTRV2FacultyTime = currentTime;
  var MECE461MCTRV2Facultyelement = document.getElementById("MECE461MCTRV2Faculty");
 if (!MECE461MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MECE461MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MECE461MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MECE461MCTRV2Faculty")[i];
        if (MECE461MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE461MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine111());
     that.highlightElement(MECE461MCTRV2Facultyelement, "EngineeringDesign");
     that.addToClicked("MECE461MCTRV2Faculty", "EngineeringDesign");
      MECE461MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine111());
     that.unHighlightElement(MECE461MCTRV2Facultyelement, "EngineeringDesign");
     var category = that.removeFromClicked("MECE461MCTRV2Faculty", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MECE461MCTRV2Facultyelement, category);
}
      MECE461MCTRV2Facultyflag=false
  }
};
$scope.MECE465MCTRV2FacultyListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE465MCTRV2FacultyTime <= 200) { 
        MECE465MCTRV2FacultyTime = currentTime;
        return;
    }
MECE465MCTRV2FacultyTime = currentTime;
  var MECE465MCTRV2Facultyelement = document.getElementById("MECE465MCTRV2Faculty");
 if (!MECE465MCTRV2Facultyflag) {
     if (that.MCTRV2FacultyClickedMap.get("MECE465MCTRV2Faculty").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("MECE465MCTRV2Faculty").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("MECE465MCTRV2Faculty")[i];
        if (MECE465MCTRV2Facultyelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE465MCTRV2Facultyelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine112());
      that.addLine(getLine113());
      that.addLine(getLine114());
     that.highlightElement(MECE465MCTRV2Facultyelement, "EngineeringSciences");
     that.addToClicked("MECE465MCTRV2Faculty", "EngineeringSciences");
      MECE465MCTRV2Facultyflag=true
  }
 else {
      that.removeLine(getLine112());
      that.removeLine(getLine113());
      that.removeLine(getLine114());
     that.unHighlightElement(MECE465MCTRV2Facultyelement, "EngineeringSciences");
     var category = that.removeFromClicked("MECE465MCTRV2Faculty", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MECE465MCTRV2Facultyelement, category);
}
      MECE465MCTRV2Facultyflag=false
  }
};
$scope.ProgramTechnicalElectiveMCTRV2Faculty0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveMCTRV2Faculty0Time <= 200) { 
        ProgramTechnicalElectiveMCTRV2Faculty0Time = currentTime;
        return;
    }
ProgramTechnicalElectiveMCTRV2Faculty0Time = currentTime;
  var ProgramTechnicalElectiveMCTRV2Faculty0element = document.getElementById("ProgramTechnicalElectiveMCTRV2Faculty0");
 if (!ProgramTechnicalElectiveMCTRV2Faculty0flag) {
     if (that.MCTRV2FacultyClickedMap.get("ProgramTechnicalElectiveMCTRV2Faculty0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("ProgramTechnicalElectiveMCTRV2Faculty0").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("ProgramTechnicalElectiveMCTRV2Faculty0")[i];
        if (ProgramTechnicalElectiveMCTRV2Faculty0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveMCTRV2Faculty0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveMCTRV2Faculty0element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveMCTRV2Faculty0", "PROG");
      ProgramTechnicalElectiveMCTRV2Faculty0flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveMCTRV2Faculty0element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveMCTRV2Faculty0", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveMCTRV2Faculty0element, category);
}
      ProgramTechnicalElectiveMCTRV2Faculty0flag=false
  }
};
$scope.ProgramTechnicalElectiveMCTRV2Faculty1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveMCTRV2Faculty1Time <= 200) { 
        ProgramTechnicalElectiveMCTRV2Faculty1Time = currentTime;
        return;
    }
ProgramTechnicalElectiveMCTRV2Faculty1Time = currentTime;
  var ProgramTechnicalElectiveMCTRV2Faculty1element = document.getElementById("ProgramTechnicalElectiveMCTRV2Faculty1");
 if (!ProgramTechnicalElectiveMCTRV2Faculty1flag) {
     if (that.MCTRV2FacultyClickedMap.get("ProgramTechnicalElectiveMCTRV2Faculty1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV2FacultyClickedMap.get("ProgramTechnicalElectiveMCTRV2Faculty1").length; i++) { 
        var cate = that.MCTRV2FacultyClickedMap.get("ProgramTechnicalElectiveMCTRV2Faculty1")[i];
        if (ProgramTechnicalElectiveMCTRV2Faculty1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveMCTRV2Faculty1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveMCTRV2Faculty1element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveMCTRV2Faculty1", "PROG");
      ProgramTechnicalElectiveMCTRV2Faculty1flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveMCTRV2Faculty1element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveMCTRV2Faculty1", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveMCTRV2Faculty1element, category);
}
      ProgramTechnicalElectiveMCTRV2Faculty1flag=false
  }
};
$scope.CHEM103MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("CHEM103MCTRV2Facultydesc");
 if (!CHEM103MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM103MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM103MCTRV2Facultyrflag=false
  }
};
$scope.ENGG100MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("ENGG100MCTRV2Facultydesc");
 if (!ENGG100MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG100MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG100MCTRV2Facultyrflag=false
  }
};
$scope.ENGG130MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("ENGG130MCTRV2Facultydesc");
 if (!ENGG130MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG130MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG130MCTRV2Facultyrflag=false
  }
};
$scope.ENGL199MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("ENGL199MCTRV2Facultydesc");
 if (!ENGL199MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGL199MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGL199MCTRV2Facultyrflag=false
  }
};
$scope.MATH100MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MATH100MCTRV2Facultydesc");
 if (!MATH100MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH100MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH100MCTRV2Facultyrflag=false
  }
};
$scope.PHYS130MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("PHYS130MCTRV2Facultydesc");
 if (!PHYS130MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS130MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS130MCTRV2Facultyrflag=false
  }
};
$scope.CHEM105MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("CHEM105MCTRV2Facultydesc");
 if (!CHEM105MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM105MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM105MCTRV2Facultyrflag=false
  }
};
$scope.ENCMP100MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("ENCMP100MCTRV2Facultydesc");
 if (!ENCMP100MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENCMP100MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENCMP100MCTRV2Facultyrflag=false
  }
};
$scope.ENGG160MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("ENGG160MCTRV2Facultydesc");
 if (!ENGG160MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG160MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG160MCTRV2Facultyrflag=false
  }
};
$scope.ENPH131MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("ENPH131MCTRV2Facultydesc");
 if (!ENPH131MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENPH131MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENPH131MCTRV2Facultyrflag=false
  }
};
$scope.MATH101MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MATH101MCTRV2Facultydesc");
 if (!MATH101MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH101MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH101MCTRV2Facultyrflag=false
  }
};
$scope.MATH102MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MATH102MCTRV2Facultydesc");
 if (!MATH102MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH102MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH102MCTRV2Facultyrflag=false
  }
};
$scope.CIVE270MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("CIVE270MCTRV2Facultydesc");
 if (!CIVE270MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE270MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE270MCTRV2Facultyrflag=false
  }
};
$scope.ECE210MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("ECE210MCTRV2Facultydesc");
 if (!ECE210MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE210MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE210MCTRV2Facultyrflag=false
  }
};
$scope.ECE240MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("ECE240MCTRV2Facultydesc");
 if (!ECE240MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE240MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE240MCTRV2Facultyrflag=false
  }
};
$scope.MATH201MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MATH201MCTRV2Facultydesc");
 if (!MATH201MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH201MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH201MCTRV2Facultyrflag=false
  }
};
$scope.MATH209MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MATH209MCTRV2Facultydesc");
 if (!MATH209MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH209MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH209MCTRV2Facultyrflag=false
  }
};
$scope.MCTR202MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MCTR202MCTRV2Facultydesc");
 if (!MCTR202MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR202MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR202MCTRV2Facultyrflag=false
  }
};
$scope.ENGG299MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("ENGG299MCTRV2Facultydesc");
 if (!ENGG299MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG299MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG299MCTRV2Facultyrflag=false
  }
};
$scope.CHE243MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("CHE243MCTRV2Facultydesc");
 if (!CHE243MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE243MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE243MCTRV2Facultyrflag=false
  }
};
$scope.MCTR200MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MCTR200MCTRV2Facultydesc");
 if (!MCTR200MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR200MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR200MCTRV2Facultyrflag=false
  }
};
$scope.MCTR274MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MCTR274MCTRV2Facultydesc");
 if (!MCTR274MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR274MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR274MCTRV2Facultyrflag=false
  }
};
$scope.MECE230MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MECE230MCTRV2Facultydesc");
 if (!MECE230MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE230MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE230MCTRV2Facultyrflag=false
  }
};
$scope.MECE250MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MECE250MCTRV2Facultydesc");
 if (!MECE250MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE250MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE250MCTRV2Facultyrflag=false
  }
};
$scope.MECE260MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MECE260MCTRV2Facultydesc");
 if (!MECE260MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE260MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE260MCTRV2Facultyrflag=false
  }
};
$scope.MECE265MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MECE265MCTRV2Facultydesc");
 if (!MECE265MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE265MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE265MCTRV2Facultyrflag=false
  }
};
$scope.ECE315MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("ECE315MCTRV2Facultydesc");
 if (!ECE315MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE315MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE315MCTRV2Facultyrflag=false
  }
};
$scope.ECE342MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("ECE342MCTRV2Facultydesc");
 if (!ECE342MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE342MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE342MCTRV2Facultyrflag=false
  }
};
$scope.MCTR374MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MCTR374MCTRV2Facultydesc");
 if (!MCTR374MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR374MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR374MCTRV2Facultyrflag=false
  }
};
$scope.MECE350MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MECE350MCTRV2Facultydesc");
 if (!MECE350MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE350MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE350MCTRV2Facultyrflag=false
  }
};
$scope.MECE360MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MECE360MCTRV2Facultydesc");
 if (!MECE360MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE360MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE360MCTRV2Facultyrflag=false
  }
};
$scope.MECE390MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MECE390MCTRV2Facultydesc");
 if (!MECE390MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE390MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE390MCTRV2Facultyrflag=false
  }
};
$scope.ENGM401MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("ENGM401MCTRV2Facultydesc");
 if (!ENGM401MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM401MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM401MCTRV2Facultyrflag=false
  }
};
$scope.MCTR300MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MCTR300MCTRV2Facultydesc");
 if (!MCTR300MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR300MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR300MCTRV2Facultyrflag=false
  }
};
$scope.MCTR332MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MCTR332MCTRV2Facultydesc");
 if (!MCTR332MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR332MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR332MCTRV2Facultyrflag=false
  }
};
$scope.MCTR365MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MCTR365MCTRV2Facultydesc");
 if (!MCTR365MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR365MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR365MCTRV2Facultyrflag=false
  }
};
$scope.MCTR370MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MCTR370MCTRV2Facultydesc");
 if (!MCTR370MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR370MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR370MCTRV2Facultyrflag=false
  }
};
$scope.MECE420MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MECE420MCTRV2Facultydesc");
 if (!MECE420MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE420MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE420MCTRV2Facultyrflag=false
  }
};
$scope.ComplementaryElectiveMCTRV2Faculty0RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveMCTRV2Faculty0desc");
 if (!ComplementaryElectiveMCTRV2Faculty0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveMCTRV2Faculty0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveMCTRV2Faculty0rflag=false
  }
};
$scope.ENGG404MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("ENGG404MCTRV2Facultydesc");
 if (!ENGG404MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG404MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG404MCTRV2Facultyrflag=false
  }
};
$scope.ITSElectiveMCTRV2Faculty0RCListener = function () {
  var element = document.getElementById("ITSElectiveMCTRV2Faculty0desc");
 if (!ITSElectiveMCTRV2Faculty0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ITSElectiveMCTRV2Faculty0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ITSElectiveMCTRV2Faculty0rflag=false
  }
};
$scope.MATE201MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MATE201MCTRV2Facultydesc");
 if (!MATE201MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE201MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE201MCTRV2Facultyrflag=false
  }
};
$scope.MCTR460MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MCTR460MCTRV2Facultydesc");
 if (!MCTR460MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR460MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR460MCTRV2Facultyrflag=false
  }
};
$scope.MECE460MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MECE460MCTRV2Facultydesc");
 if (!MECE460MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE460MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE460MCTRV2Facultyrflag=false
  }
};
$scope.ENGG400MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("ENGG400MCTRV2Facultydesc");
 if (!ENGG400MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG400MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG400MCTRV2Facultyrflag=false
  }
};
$scope.MCTR461MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MCTR461MCTRV2Facultydesc");
 if (!MCTR461MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR461MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR461MCTRV2Facultyrflag=false
  }
};
$scope.MCTR465MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MCTR465MCTRV2Facultydesc");
 if (!MCTR465MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR465MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR465MCTRV2Facultyrflag=false
  }
};
$scope.MECE461MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MECE461MCTRV2Facultydesc");
 if (!MECE461MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE461MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE461MCTRV2Facultyrflag=false
  }
};
$scope.MECE465MCTRV2FacultyRCListener = function () {
  var element = document.getElementById("MECE465MCTRV2Facultydesc");
 if (!MECE465MCTRV2Facultyrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE465MCTRV2Facultyrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE465MCTRV2Facultyrflag=false
  }
};
$scope.ProgramTechnicalElectiveMCTRV2Faculty0RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveMCTRV2Faculty0desc");
 if (!ProgramTechnicalElectiveMCTRV2Faculty0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveMCTRV2Faculty0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveMCTRV2Faculty0rflag=false
  }
};
$scope.ProgramTechnicalElectiveMCTRV2Faculty1RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveMCTRV2Faculty1desc");
 if (!ProgramTechnicalElectiveMCTRV2Faculty1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveMCTRV2Faculty1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveMCTRV2Faculty1rflag=false
  }
};
  var CHEM103MCTRV3DSNflag = false;
  var CHEM103MCTRV3DSNrflag = false;
 var CHEM103MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("CHEM103MCTRV3DSN", []);
  var ENGG100MCTRV3DSNflag = false;
  var ENGG100MCTRV3DSNrflag = false;
 var ENGG100MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("ENGG100MCTRV3DSN", []);
  var ENGG130MCTRV3DSNflag = false;
  var ENGG130MCTRV3DSNrflag = false;
 var ENGG130MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("ENGG130MCTRV3DSN", []);
  var ENGL199MCTRV3DSNflag = false;
  var ENGL199MCTRV3DSNrflag = false;
 var ENGL199MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("ENGL199MCTRV3DSN", []);
  var MATH100MCTRV3DSNflag = false;
  var MATH100MCTRV3DSNrflag = false;
 var MATH100MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MATH100MCTRV3DSN", []);
  var PHYS130MCTRV3DSNflag = false;
  var PHYS130MCTRV3DSNrflag = false;
 var PHYS130MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("PHYS130MCTRV3DSN", []);
  var CHEM105MCTRV3DSNflag = false;
  var CHEM105MCTRV3DSNrflag = false;
 var CHEM105MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("CHEM105MCTRV3DSN", []);
  var ENCMP100MCTRV3DSNflag = false;
  var ENCMP100MCTRV3DSNrflag = false;
 var ENCMP100MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("ENCMP100MCTRV3DSN", []);
  var ENGG160MCTRV3DSNflag = false;
  var ENGG160MCTRV3DSNrflag = false;
 var ENGG160MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("ENGG160MCTRV3DSN", []);
  var ENPH131MCTRV3DSNflag = false;
  var ENPH131MCTRV3DSNrflag = false;
 var ENPH131MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("ENPH131MCTRV3DSN", []);
  var MATH101MCTRV3DSNflag = false;
  var MATH101MCTRV3DSNrflag = false;
 var MATH101MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MATH101MCTRV3DSN", []);
  var MATH102MCTRV3DSNflag = false;
  var MATH102MCTRV3DSNrflag = false;
 var MATH102MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MATH102MCTRV3DSN", []);
  var CIVE270MCTRV3DSNflag = false;
  var CIVE270MCTRV3DSNrflag = false;
 var CIVE270MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("CIVE270MCTRV3DSN", []);
  var ECE210MCTRV3DSNflag = false;
  var ECE210MCTRV3DSNrflag = false;
 var ECE210MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("ECE210MCTRV3DSN", []);
  var ECE240MCTRV3DSNflag = false;
  var ECE240MCTRV3DSNrflag = false;
 var ECE240MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("ECE240MCTRV3DSN", []);
  var MATH201MCTRV3DSNflag = false;
  var MATH201MCTRV3DSNrflag = false;
 var MATH201MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MATH201MCTRV3DSN", []);
  var MATH209MCTRV3DSNflag = false;
  var MATH209MCTRV3DSNrflag = false;
 var MATH209MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MATH209MCTRV3DSN", []);
  var MCTR202MCTRV3DSNflag = false;
  var MCTR202MCTRV3DSNrflag = false;
 var MCTR202MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MCTR202MCTRV3DSN", []);
  var MCTR200MCTRV3DSNflag = false;
  var MCTR200MCTRV3DSNrflag = false;
 var MCTR200MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MCTR200MCTRV3DSN", []);
  var MCTR274MCTRV3DSNflag = false;
  var MCTR274MCTRV3DSNrflag = false;
 var MCTR274MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MCTR274MCTRV3DSN", []);
  var MECE230MCTRV3DSNflag = false;
  var MECE230MCTRV3DSNrflag = false;
 var MECE230MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MECE230MCTRV3DSN", []);
  var MECE250MCTRV3DSNflag = false;
  var MECE250MCTRV3DSNrflag = false;
 var MECE250MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MECE250MCTRV3DSN", []);
  var MECE260MCTRV3DSNflag = false;
  var MECE260MCTRV3DSNrflag = false;
 var MECE260MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MECE260MCTRV3DSN", []);
  var MECE265MCTRV3DSNflag = false;
  var MECE265MCTRV3DSNrflag = false;
 var MECE265MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MECE265MCTRV3DSN", []);
  var ECE315MCTRV3DSNflag = false;
  var ECE315MCTRV3DSNrflag = false;
 var ECE315MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("ECE315MCTRV3DSN", []);
  var ECE342MCTRV3DSNflag = false;
  var ECE342MCTRV3DSNrflag = false;
 var ECE342MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("ECE342MCTRV3DSN", []);
  var MCTR374MCTRV3DSNflag = false;
  var MCTR374MCTRV3DSNrflag = false;
 var MCTR374MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MCTR374MCTRV3DSN", []);
  var MECE350MCTRV3DSNflag = false;
  var MECE350MCTRV3DSNrflag = false;
 var MECE350MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MECE350MCTRV3DSN", []);
  var MECE360MCTRV3DSNflag = false;
  var MECE360MCTRV3DSNrflag = false;
 var MECE360MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MECE360MCTRV3DSN", []);
  var MECE390MCTRV3DSNflag = false;
  var MECE390MCTRV3DSNrflag = false;
 var MECE390MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MECE390MCTRV3DSN", []);
  var ENGM401MCTRV3DSNflag = false;
  var ENGM401MCTRV3DSNrflag = false;
 var ENGM401MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("ENGM401MCTRV3DSN", []);
  var MCTR300MCTRV3DSNflag = false;
  var MCTR300MCTRV3DSNrflag = false;
 var MCTR300MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MCTR300MCTRV3DSN", []);
  var MCTR332MCTRV3DSNflag = false;
  var MCTR332MCTRV3DSNrflag = false;
 var MCTR332MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MCTR332MCTRV3DSN", []);
  var MCTR365MCTRV3DSNflag = false;
  var MCTR365MCTRV3DSNrflag = false;
 var MCTR365MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MCTR365MCTRV3DSN", []);
  var MCTR370MCTRV3DSNflag = false;
  var MCTR370MCTRV3DSNrflag = false;
 var MCTR370MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MCTR370MCTRV3DSN", []);
  var MECE420MCTRV3DSNflag = false;
  var MECE420MCTRV3DSNrflag = false;
 var MECE420MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MECE420MCTRV3DSN", []);
  var ComplementaryElectiveMCTRV3DSN0flag = false;
  var ComplementaryElectiveMCTRV3DSN0rflag = false;
 var ComplementaryElectiveMCTRV3DSN0Time = new Date().getTime();
this.MCTRV3DSNClickedMap.set("ComplementaryElectiveMCTRV3DSN0", []);
  var ENGG404MCTRV3DSNflag = false;
  var ENGG404MCTRV3DSNrflag = false;
 var ENGG404MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("ENGG404MCTRV3DSN", []);
  var ITSElectiveMCTRV3DSN0flag = false;
  var ITSElectiveMCTRV3DSN0rflag = false;
 var ITSElectiveMCTRV3DSN0Time = new Date().getTime();
this.MCTRV3DSNClickedMap.set("ITSElectiveMCTRV3DSN0", []);
  var MATE201MCTRV3DSNflag = false;
  var MATE201MCTRV3DSNrflag = false;
 var MATE201MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MATE201MCTRV3DSN", []);
  var MCTR460MCTRV3DSNflag = false;
  var MCTR460MCTRV3DSNrflag = false;
 var MCTR460MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MCTR460MCTRV3DSN", []);
  var MECE460MCTRV3DSNflag = false;
  var MECE460MCTRV3DSNrflag = false;
 var MECE460MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MECE460MCTRV3DSN", []);
  var ENGG400MCTRV3DSNflag = false;
  var ENGG400MCTRV3DSNrflag = false;
 var ENGG400MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("ENGG400MCTRV3DSN", []);
  var MCTR461MCTRV3DSNflag = false;
  var MCTR461MCTRV3DSNrflag = false;
 var MCTR461MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MCTR461MCTRV3DSN", []);
  var MCTR465MCTRV3DSNflag = false;
  var MCTR465MCTRV3DSNrflag = false;
 var MCTR465MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MCTR465MCTRV3DSN", []);
  var MECE461MCTRV3DSNflag = false;
  var MECE461MCTRV3DSNrflag = false;
 var MECE461MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MECE461MCTRV3DSN", []);
  var MECE465MCTRV3DSNflag = false;
  var MECE465MCTRV3DSNrflag = false;
 var MECE465MCTRV3DSNTime = new Date().getTime();
this.MCTRV3DSNClickedMap.set("MECE465MCTRV3DSN", []);
  var ProgramTechnicalElectiveMCTRV3DSN0flag = false;
  var ProgramTechnicalElectiveMCTRV3DSN0rflag = false;
 var ProgramTechnicalElectiveMCTRV3DSN0Time = new Date().getTime();
this.MCTRV3DSNClickedMap.set("ProgramTechnicalElectiveMCTRV3DSN0", []);
  var ProgramTechnicalElectiveMCTRV3DSN1flag = false;
  var ProgramTechnicalElectiveMCTRV3DSN1rflag = false;
 var ProgramTechnicalElectiveMCTRV3DSN1Time = new Date().getTime();
this.MCTRV3DSNClickedMap.set("ProgramTechnicalElectiveMCTRV3DSN1", []);
$scope.CHEM103MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103MCTRV3DSNTime <= 200) { 
        CHEM103MCTRV3DSNTime = currentTime;
        return;
    }
CHEM103MCTRV3DSNTime = currentTime;
  var CHEM103MCTRV3DSNelement = document.getElementById("CHEM103MCTRV3DSN");
 if (!CHEM103MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("CHEM103MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("CHEM103MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("CHEM103MCTRV3DSN")[i];
        if (CHEM103MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM103MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine117());
     that.highlightElement(CHEM103MCTRV3DSNelement, "NaturalSciences");
     that.addToClicked("CHEM103MCTRV3DSN", "NaturalSciences");
      CHEM103MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine117());
     that.unHighlightElement(CHEM103MCTRV3DSNelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM103MCTRV3DSN", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM103MCTRV3DSNelement, category);
}
      CHEM103MCTRV3DSNflag=false
  }
};
$scope.ENGG100MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG100MCTRV3DSNTime <= 200) { 
        ENGG100MCTRV3DSNTime = currentTime;
        return;
    }
ENGG100MCTRV3DSNTime = currentTime;
  var ENGG100MCTRV3DSNelement = document.getElementById("ENGG100MCTRV3DSN");
 if (!ENGG100MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("ENGG100MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("ENGG100MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("ENGG100MCTRV3DSN")[i];
        if (ENGG100MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG100MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG100MCTRV3DSNelement, "EngineeringProfession");
     that.addToClicked("ENGG100MCTRV3DSN", "EngineeringProfession");
      ENGG100MCTRV3DSNflag=true
  }
 else {
     that.unHighlightElement(ENGG100MCTRV3DSNelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG100MCTRV3DSN", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG100MCTRV3DSNelement, category);
}
      ENGG100MCTRV3DSNflag=false
  }
};
$scope.ENGG130MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG130MCTRV3DSNTime <= 200) { 
        ENGG130MCTRV3DSNTime = currentTime;
        return;
    }
ENGG130MCTRV3DSNTime = currentTime;
  var ENGG130MCTRV3DSNelement = document.getElementById("ENGG130MCTRV3DSN");
 if (!ENGG130MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("ENGG130MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("ENGG130MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("ENGG130MCTRV3DSN")[i];
        if (ENGG130MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG130MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine115());
      that.addLine(getLine120());
      that.addLine(getLine124());
      that.addLine(getLine137());
     that.highlightElement(ENGG130MCTRV3DSNelement, "NaturalSciences");
     that.addToClicked("ENGG130MCTRV3DSN", "NaturalSciences");
      ENGG130MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine115());
      that.removeLine(getLine120());
      that.removeLine(getLine124());
      that.removeLine(getLine137());
     that.unHighlightElement(ENGG130MCTRV3DSNelement, "NaturalSciences");
     var category = that.removeFromClicked("ENGG130MCTRV3DSN", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENGG130MCTRV3DSNelement, category);
}
      ENGG130MCTRV3DSNflag=false
  }
};
$scope.ENGL199MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGL199MCTRV3DSNTime <= 200) { 
        ENGL199MCTRV3DSNTime = currentTime;
        return;
    }
ENGL199MCTRV3DSNTime = currentTime;
  var ENGL199MCTRV3DSNelement = document.getElementById("ENGL199MCTRV3DSN");
 if (!ENGL199MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("ENGL199MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("ENGL199MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("ENGL199MCTRV3DSN")[i];
        if (ENGL199MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGL199MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine118());
     that.highlightElement(ENGL199MCTRV3DSNelement, "Other");
     that.addToClicked("ENGL199MCTRV3DSN", "Other");
      ENGL199MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine118());
     that.unHighlightElement(ENGL199MCTRV3DSNelement, "Other");
     var category = that.removeFromClicked("ENGL199MCTRV3DSN", "Other");
  if (category != "") { 
     that.highlightElement(ENGL199MCTRV3DSNelement, category);
}
      ENGL199MCTRV3DSNflag=false
  }
};
$scope.MATH100MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH100MCTRV3DSNTime <= 200) { 
        MATH100MCTRV3DSNTime = currentTime;
        return;
    }
MATH100MCTRV3DSNTime = currentTime;
  var MATH100MCTRV3DSNelement = document.getElementById("MATH100MCTRV3DSN");
 if (!MATH100MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MATH100MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MATH100MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MATH100MCTRV3DSN")[i];
        if (MATH100MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH100MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine115());
      that.addLine(getLine116());
      that.addLine(getLine119());
      that.addLine(getLine122());
      that.addLine(getLine123());
     that.highlightElement(MATH100MCTRV3DSNelement, "Math");
     that.addToClicked("MATH100MCTRV3DSN", "Math");
      MATH100MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine115());
      that.removeLine(getLine116());
      that.removeLine(getLine119());
      that.removeLine(getLine122());
      that.removeLine(getLine123());
     that.unHighlightElement(MATH100MCTRV3DSNelement, "Math");
     var category = that.removeFromClicked("MATH100MCTRV3DSN", "Math");
  if (category != "") { 
     that.highlightElement(MATH100MCTRV3DSNelement, category);
}
      MATH100MCTRV3DSNflag=false
  }
};
$scope.PHYS130MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS130MCTRV3DSNTime <= 200) { 
        PHYS130MCTRV3DSNTime = currentTime;
        return;
    }
PHYS130MCTRV3DSNTime = currentTime;
  var PHYS130MCTRV3DSNelement = document.getElementById("PHYS130MCTRV3DSN");
 if (!PHYS130MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("PHYS130MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("PHYS130MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("PHYS130MCTRV3DSN")[i];
        if (PHYS130MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS130MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine116());
     that.highlightElement(PHYS130MCTRV3DSNelement, "NaturalSciences");
     that.addToClicked("PHYS130MCTRV3DSN", "NaturalSciences");
      PHYS130MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine116());
     that.unHighlightElement(PHYS130MCTRV3DSNelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS130MCTRV3DSN", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS130MCTRV3DSNelement, category);
}
      PHYS130MCTRV3DSNflag=false
  }
};
$scope.CHEM105MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM105MCTRV3DSNTime <= 200) { 
        CHEM105MCTRV3DSNTime = currentTime;
        return;
    }
CHEM105MCTRV3DSNTime = currentTime;
  var CHEM105MCTRV3DSNelement = document.getElementById("CHEM105MCTRV3DSN");
 if (!CHEM105MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("CHEM105MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("CHEM105MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("CHEM105MCTRV3DSN")[i];
        if (CHEM105MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM105MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine117());
      that.addLine(getLine164());
     that.highlightElement(CHEM105MCTRV3DSNelement, "NaturalSciences");
     that.addToClicked("CHEM105MCTRV3DSN", "NaturalSciences");
      CHEM105MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine117());
      that.removeLine(getLine164());
     that.unHighlightElement(CHEM105MCTRV3DSNelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM105MCTRV3DSN", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM105MCTRV3DSNelement, category);
}
      CHEM105MCTRV3DSNflag=false
  }
};
$scope.ENCMP100MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENCMP100MCTRV3DSNTime <= 200) { 
        ENCMP100MCTRV3DSNTime = currentTime;
        return;
    }
ENCMP100MCTRV3DSNTime = currentTime;
  var ENCMP100MCTRV3DSNelement = document.getElementById("ENCMP100MCTRV3DSN");
 if (!ENCMP100MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("ENCMP100MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("ENCMP100MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("ENCMP100MCTRV3DSN")[i];
        if (ENCMP100MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENCMP100MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine134());
     that.highlightElement(ENCMP100MCTRV3DSNelement, "NaturalSciences");
     that.addToClicked("ENCMP100MCTRV3DSN", "NaturalSciences");
      ENCMP100MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine134());
     that.unHighlightElement(ENCMP100MCTRV3DSNelement, "NaturalSciences");
     var category = that.removeFromClicked("ENCMP100MCTRV3DSN", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENCMP100MCTRV3DSNelement, category);
}
      ENCMP100MCTRV3DSNflag=false
  }
};
$scope.ENGG160MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG160MCTRV3DSNTime <= 200) { 
        ENGG160MCTRV3DSNTime = currentTime;
        return;
    }
ENGG160MCTRV3DSNTime = currentTime;
  var ENGG160MCTRV3DSNelement = document.getElementById("ENGG160MCTRV3DSN");
 if (!ENGG160MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("ENGG160MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("ENGG160MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("ENGG160MCTRV3DSN")[i];
        if (ENGG160MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG160MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine118());
      that.addLine(getLine140());
     that.highlightElement(ENGG160MCTRV3DSNelement, "EngineeringDesign");
     that.addToClicked("ENGG160MCTRV3DSN", "EngineeringDesign");
      ENGG160MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine118());
      that.removeLine(getLine140());
     that.unHighlightElement(ENGG160MCTRV3DSNelement, "EngineeringDesign");
     var category = that.removeFromClicked("ENGG160MCTRV3DSN", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ENGG160MCTRV3DSNelement, category);
}
      ENGG160MCTRV3DSNflag=false
  }
};
$scope.ENPH131MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENPH131MCTRV3DSNTime <= 200) { 
        ENPH131MCTRV3DSNTime = currentTime;
        return;
    }
ENPH131MCTRV3DSNTime = currentTime;
  var ENPH131MCTRV3DSNelement = document.getElementById("ENPH131MCTRV3DSN");
 if (!ENPH131MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("ENPH131MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("ENPH131MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("ENPH131MCTRV3DSN")[i];
        if (ENPH131MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENPH131MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine119());
      that.addLine(getLine120());
      that.addLine(getLine121());
      that.addLine(getLine136());
      that.addLine(getLine138());
     that.highlightElement(ENPH131MCTRV3DSNelement, "NaturalSciences");
     that.addToClicked("ENPH131MCTRV3DSN", "NaturalSciences");
      ENPH131MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine119());
      that.removeLine(getLine120());
      that.removeLine(getLine121());
      that.removeLine(getLine136());
      that.removeLine(getLine138());
     that.unHighlightElement(ENPH131MCTRV3DSNelement, "NaturalSciences");
     var category = that.removeFromClicked("ENPH131MCTRV3DSN", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENPH131MCTRV3DSNelement, category);
}
      ENPH131MCTRV3DSNflag=false
  }
};
$scope.MATH101MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH101MCTRV3DSNTime <= 200) { 
        MATH101MCTRV3DSNTime = currentTime;
        return;
    }
MATH101MCTRV3DSNTime = currentTime;
  var MATH101MCTRV3DSNelement = document.getElementById("MATH101MCTRV3DSN");
 if (!MATH101MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MATH101MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MATH101MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MATH101MCTRV3DSN")[i];
        if (MATH101MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH101MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine121());
      that.addLine(getLine122());
      that.addLine(getLine125());
      that.addLine(getLine129());
      that.addLine(getLine131());
      that.addLine(getLine135());
      that.addLine(getLine139());
     that.highlightElement(MATH101MCTRV3DSNelement, "Math");
     that.addToClicked("MATH101MCTRV3DSN", "Math");
      MATH101MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine121());
      that.removeLine(getLine122());
      that.removeLine(getLine125());
      that.removeLine(getLine129());
      that.removeLine(getLine131());
      that.removeLine(getLine135());
      that.removeLine(getLine139());
     that.unHighlightElement(MATH101MCTRV3DSNelement, "Math");
     var category = that.removeFromClicked("MATH101MCTRV3DSN", "Math");
  if (category != "") { 
     that.highlightElement(MATH101MCTRV3DSNelement, category);
}
      MATH101MCTRV3DSNflag=false
  }
};
$scope.MATH102MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH102MCTRV3DSNTime <= 200) { 
        MATH102MCTRV3DSNTime = currentTime;
        return;
    }
MATH102MCTRV3DSNTime = currentTime;
  var MATH102MCTRV3DSNelement = document.getElementById("MATH102MCTRV3DSN");
 if (!MATH102MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MATH102MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MATH102MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MATH102MCTRV3DSN")[i];
        if (MATH102MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH102MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine123());
      that.addLine(getLine130());
      that.addLine(getLine132());
      that.addLine(getLine152());
     that.highlightElement(MATH102MCTRV3DSNelement, "Math");
     that.addToClicked("MATH102MCTRV3DSN", "Math");
      MATH102MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine123());
      that.removeLine(getLine130());
      that.removeLine(getLine132());
      that.removeLine(getLine152());
     that.unHighlightElement(MATH102MCTRV3DSNelement, "Math");
     var category = that.removeFromClicked("MATH102MCTRV3DSN", "Math");
  if (category != "") { 
     that.highlightElement(MATH102MCTRV3DSNelement, category);
}
      MATH102MCTRV3DSNflag=false
  }
};
$scope.CIVE270MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE270MCTRV3DSNTime <= 200) { 
        CIVE270MCTRV3DSNTime = currentTime;
        return;
    }
CIVE270MCTRV3DSNTime = currentTime;
  var CIVE270MCTRV3DSNelement = document.getElementById("CIVE270MCTRV3DSN");
 if (!CIVE270MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("CIVE270MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("CIVE270MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("CIVE270MCTRV3DSN")[i];
        if (CIVE270MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE270MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine124());
      that.addLine(getLine125());
      that.addLine(getLine142());
      that.addLine(getLine150());
      that.addLine(getLine154());
     that.highlightElement(CIVE270MCTRV3DSNelement, "EngineeringSciences");
     that.addToClicked("CIVE270MCTRV3DSN", "EngineeringSciences");
      CIVE270MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine124());
      that.removeLine(getLine125());
      that.removeLine(getLine142());
      that.removeLine(getLine150());
      that.removeLine(getLine154());
     that.unHighlightElement(CIVE270MCTRV3DSNelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE270MCTRV3DSN", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE270MCTRV3DSNelement, category);
}
      CIVE270MCTRV3DSNflag=false
  }
};
$scope.ECE210MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE210MCTRV3DSNTime <= 200) { 
        ECE210MCTRV3DSNTime = currentTime;
        return;
    }
ECE210MCTRV3DSNTime = currentTime;
  var ECE210MCTRV3DSNelement = document.getElementById("ECE210MCTRV3DSN");
 if (!ECE210MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("ECE210MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("ECE210MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("ECE210MCTRV3DSN")[i];
        if (ECE210MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE210MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ECE210MCTRV3DSNelement, "EngineeringSciences");
     that.addToClicked("ECE210MCTRV3DSN", "EngineeringSciences");
      ECE210MCTRV3DSNflag=true
  }
 else {
     that.unHighlightElement(ECE210MCTRV3DSNelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE210MCTRV3DSN", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE210MCTRV3DSNelement, category);
}
      ECE210MCTRV3DSNflag=false
  }
};
$scope.ECE240MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE240MCTRV3DSNTime <= 200) { 
        ECE240MCTRV3DSNTime = currentTime;
        return;
    }
ECE240MCTRV3DSNTime = currentTime;
  var ECE240MCTRV3DSNelement = document.getElementById("ECE240MCTRV3DSN");
 if (!ECE240MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("ECE240MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("ECE240MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("ECE240MCTRV3DSN")[i];
        if (ECE240MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE240MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine126());
      that.addLine(getLine127());
      that.addLine(getLine133());
     that.highlightElement(ECE240MCTRV3DSNelement, "EngineeringSciences");
     that.addToClicked("ECE240MCTRV3DSN", "EngineeringSciences");
      ECE240MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine126());
      that.removeLine(getLine127());
      that.removeLine(getLine133());
     that.unHighlightElement(ECE240MCTRV3DSNelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE240MCTRV3DSN", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE240MCTRV3DSNelement, category);
}
      ECE240MCTRV3DSNflag=false
  }
};
$scope.MATH201MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH201MCTRV3DSNTime <= 200) { 
        MATH201MCTRV3DSNTime = currentTime;
        return;
    }
MATH201MCTRV3DSNTime = currentTime;
  var MATH201MCTRV3DSNelement = document.getElementById("MATH201MCTRV3DSN");
 if (!MATH201MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MATH201MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MATH201MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MATH201MCTRV3DSN")[i];
        if (MATH201MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH201MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine127());
      that.addLine(getLine128());
      that.addLine(getLine153());
     that.highlightElement(MATH201MCTRV3DSNelement, "Math");
     that.addToClicked("MATH201MCTRV3DSN", "Math");
      MATH201MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine127());
      that.removeLine(getLine128());
      that.removeLine(getLine153());
     that.unHighlightElement(MATH201MCTRV3DSNelement, "Math");
     var category = that.removeFromClicked("MATH201MCTRV3DSN", "Math");
  if (category != "") { 
     that.highlightElement(MATH201MCTRV3DSNelement, category);
}
      MATH201MCTRV3DSNflag=false
  }
};
$scope.MATH209MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH209MCTRV3DSNTime <= 200) { 
        MATH209MCTRV3DSNTime = currentTime;
        return;
    }
MATH209MCTRV3DSNTime = currentTime;
  var MATH209MCTRV3DSNelement = document.getElementById("MATH209MCTRV3DSN");
 if (!MATH209MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MATH209MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MATH209MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MATH209MCTRV3DSN")[i];
        if (MATH209MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH209MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine128());
      that.addLine(getLine129());
      that.addLine(getLine130());
      that.addLine(getLine145());
     that.highlightElement(MATH209MCTRV3DSNelement, "Math");
     that.addToClicked("MATH209MCTRV3DSN", "Math");
      MATH209MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine128());
      that.removeLine(getLine129());
      that.removeLine(getLine130());
      that.removeLine(getLine145());
     that.unHighlightElement(MATH209MCTRV3DSNelement, "Math");
     var category = that.removeFromClicked("MATH209MCTRV3DSN", "Math");
  if (category != "") { 
     that.highlightElement(MATH209MCTRV3DSNelement, category);
}
      MATH209MCTRV3DSNflag=false
  }
};
$scope.MCTR202MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR202MCTRV3DSNTime <= 200) { 
        MCTR202MCTRV3DSNTime = currentTime;
        return;
    }
MCTR202MCTRV3DSNTime = currentTime;
  var MCTR202MCTRV3DSNelement = document.getElementById("MCTR202MCTRV3DSN");
 if (!MCTR202MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MCTR202MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MCTR202MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MCTR202MCTRV3DSN")[i];
        if (MCTR202MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR202MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine126());
      that.addLine(getLine131());
      that.addLine(getLine132());
      that.addLine(getLine133());
      that.addLine(getLine143());
      that.addLine(getLine155());
      that.addLine(getLine157());
     that.highlightElement(MCTR202MCTRV3DSNelement, "Mechatronics");
     that.addToClicked("MCTR202MCTRV3DSN", "Mechatronics");
      MCTR202MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine126());
      that.removeLine(getLine131());
      that.removeLine(getLine132());
      that.removeLine(getLine133());
      that.removeLine(getLine143());
      that.removeLine(getLine155());
      that.removeLine(getLine157());
     that.unHighlightElement(MCTR202MCTRV3DSNelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR202MCTRV3DSN", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR202MCTRV3DSNelement, category);
}
      MCTR202MCTRV3DSNflag=false
  }
};
$scope.MCTR200MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR200MCTRV3DSNTime <= 200) { 
        MCTR200MCTRV3DSNTime = currentTime;
        return;
    }
MCTR200MCTRV3DSNTime = currentTime;
  var MCTR200MCTRV3DSNelement = document.getElementById("MCTR200MCTRV3DSN");
 if (!MCTR200MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MCTR200MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MCTR200MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MCTR200MCTRV3DSN")[i];
        if (MCTR200MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR200MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(MCTR200MCTRV3DSNelement, "Mechatronics");
     that.addToClicked("MCTR200MCTRV3DSN", "Mechatronics");
      MCTR200MCTRV3DSNflag=true
  }
 else {
     that.unHighlightElement(MCTR200MCTRV3DSNelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR200MCTRV3DSN", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR200MCTRV3DSNelement, category);
}
      MCTR200MCTRV3DSNflag=false
  }
};
$scope.MCTR274MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR274MCTRV3DSNTime <= 200) { 
        MCTR274MCTRV3DSNTime = currentTime;
        return;
    }
MCTR274MCTRV3DSNTime = currentTime;
  var MCTR274MCTRV3DSNelement = document.getElementById("MCTR274MCTRV3DSN");
 if (!MCTR274MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MCTR274MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MCTR274MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MCTR274MCTRV3DSN")[i];
        if (MCTR274MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR274MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine134());
      that.addLine(getLine146());
      that.addLine(getLine159());
     that.highlightElement(MCTR274MCTRV3DSNelement, "Mechatronics");
     that.addToClicked("MCTR274MCTRV3DSN", "Mechatronics");
      MCTR274MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine134());
      that.removeLine(getLine146());
      that.removeLine(getLine159());
     that.unHighlightElement(MCTR274MCTRV3DSNelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR274MCTRV3DSN", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR274MCTRV3DSNelement, category);
}
      MCTR274MCTRV3DSNflag=false
  }
};
$scope.MECE230MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE230MCTRV3DSNTime <= 200) { 
        MECE230MCTRV3DSNTime = currentTime;
        return;
    }
MECE230MCTRV3DSNTime = currentTime;
  var MECE230MCTRV3DSNelement = document.getElementById("MECE230MCTRV3DSN");
 if (!MECE230MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MECE230MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MECE230MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MECE230MCTRV3DSN")[i];
        if (MECE230MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE230MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine135());
      that.addLine(getLine136());
     that.highlightElement(MECE230MCTRV3DSNelement, "NaturalSciences");
     that.addToClicked("MECE230MCTRV3DSN", "NaturalSciences");
      MECE230MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine135());
      that.removeLine(getLine136());
     that.unHighlightElement(MECE230MCTRV3DSNelement, "NaturalSciences");
     var category = that.removeFromClicked("MECE230MCTRV3DSN", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(MECE230MCTRV3DSNelement, category);
}
      MECE230MCTRV3DSNflag=false
  }
};
$scope.MECE250MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE250MCTRV3DSNTime <= 200) { 
        MECE250MCTRV3DSNTime = currentTime;
        return;
    }
MECE250MCTRV3DSNTime = currentTime;
  var MECE250MCTRV3DSNelement = document.getElementById("MECE250MCTRV3DSN");
 if (!MECE250MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MECE250MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MECE250MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MECE250MCTRV3DSN")[i];
        if (MECE250MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE250MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine137());
      that.addLine(getLine138());
      that.addLine(getLine139());
      that.addLine(getLine147());
     that.highlightElement(MECE250MCTRV3DSNelement, "EngineeringSciences");
     that.addToClicked("MECE250MCTRV3DSN", "EngineeringSciences");
      MECE250MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine137());
      that.removeLine(getLine138());
      that.removeLine(getLine139());
      that.removeLine(getLine147());
     that.unHighlightElement(MECE250MCTRV3DSNelement, "EngineeringSciences");
     var category = that.removeFromClicked("MECE250MCTRV3DSN", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MECE250MCTRV3DSNelement, category);
}
      MECE250MCTRV3DSNflag=false
  }
};
$scope.MECE260MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE260MCTRV3DSNTime <= 200) { 
        MECE260MCTRV3DSNTime = currentTime;
        return;
    }
MECE260MCTRV3DSNTime = currentTime;
  var MECE260MCTRV3DSNelement = document.getElementById("MECE260MCTRV3DSN");
 if (!MECE260MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MECE260MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MECE260MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MECE260MCTRV3DSN")[i];
        if (MECE260MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE260MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine140());
      that.addLine(getLine141());
      that.addLine(getLine142());
      that.addLine(getLine148());
     that.highlightElement(MECE260MCTRV3DSNelement, "EngineeringDesign");
     that.addToClicked("MECE260MCTRV3DSN", "EngineeringDesign");
      MECE260MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine140());
      that.removeLine(getLine141());
      that.removeLine(getLine142());
      that.removeLine(getLine148());
     that.unHighlightElement(MECE260MCTRV3DSNelement, "EngineeringDesign");
     var category = that.removeFromClicked("MECE260MCTRV3DSN", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MECE260MCTRV3DSNelement, category);
}
      MECE260MCTRV3DSNflag=false
  }
};
$scope.MECE265MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE265MCTRV3DSNTime <= 200) { 
        MECE265MCTRV3DSNTime = currentTime;
        return;
    }
MECE265MCTRV3DSNTime = currentTime;
  var MECE265MCTRV3DSNelement = document.getElementById("MECE265MCTRV3DSN");
 if (!MECE265MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MECE265MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MECE265MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MECE265MCTRV3DSN")[i];
        if (MECE265MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE265MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine141());
      that.addLine(getLine149());
     that.highlightElement(MECE265MCTRV3DSNelement, "EngineeringDesign");
     that.addToClicked("MECE265MCTRV3DSN", "EngineeringDesign");
      MECE265MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine141());
      that.removeLine(getLine149());
     that.unHighlightElement(MECE265MCTRV3DSNelement, "EngineeringDesign");
     var category = that.removeFromClicked("MECE265MCTRV3DSN", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MECE265MCTRV3DSNelement, category);
}
      MECE265MCTRV3DSNflag=false
  }
};
$scope.ECE315MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE315MCTRV3DSNTime <= 200) { 
        ECE315MCTRV3DSNTime = currentTime;
        return;
    }
ECE315MCTRV3DSNTime = currentTime;
  var ECE315MCTRV3DSNelement = document.getElementById("ECE315MCTRV3DSN");
 if (!ECE315MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("ECE315MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("ECE315MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("ECE315MCTRV3DSN")[i];
        if (ECE315MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE315MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine143());
      that.addLine(getLine144());
     that.highlightElement(ECE315MCTRV3DSNelement, "EngineeringSciences");
     that.addToClicked("ECE315MCTRV3DSN", "EngineeringSciences");
      ECE315MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine143());
      that.removeLine(getLine144());
     that.unHighlightElement(ECE315MCTRV3DSNelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE315MCTRV3DSN", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE315MCTRV3DSNelement, category);
}
      ECE315MCTRV3DSNflag=false
  }
};
$scope.ECE342MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE342MCTRV3DSNTime <= 200) { 
        ECE342MCTRV3DSNTime = currentTime;
        return;
    }
ECE342MCTRV3DSNTime = currentTime;
  var ECE342MCTRV3DSNelement = document.getElementById("ECE342MCTRV3DSN");
 if (!ECE342MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("ECE342MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("ECE342MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("ECE342MCTRV3DSN")[i];
        if (ECE342MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE342MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine145());
      that.addLine(getLine156());
      that.addLine(getLine161());
     that.highlightElement(ECE342MCTRV3DSNelement, "Math");
     that.addToClicked("ECE342MCTRV3DSN", "Math");
      ECE342MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine145());
      that.removeLine(getLine156());
      that.removeLine(getLine161());
     that.unHighlightElement(ECE342MCTRV3DSNelement, "Math");
     var category = that.removeFromClicked("ECE342MCTRV3DSN", "Math");
  if (category != "") { 
     that.highlightElement(ECE342MCTRV3DSNelement, category);
}
      ECE342MCTRV3DSNflag=false
  }
};
$scope.MCTR374MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR374MCTRV3DSNTime <= 200) { 
        MCTR374MCTRV3DSNTime = currentTime;
        return;
    }
MCTR374MCTRV3DSNTime = currentTime;
  var MCTR374MCTRV3DSNelement = document.getElementById("MCTR374MCTRV3DSN");
 if (!MCTR374MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MCTR374MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MCTR374MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MCTR374MCTRV3DSN")[i];
        if (MCTR374MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR374MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine144());
      that.addLine(getLine146());
      that.addLine(getLine171());
     that.highlightElement(MCTR374MCTRV3DSNelement, "Mechatronics");
     that.addToClicked("MCTR374MCTRV3DSN", "Mechatronics");
      MCTR374MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine144());
      that.removeLine(getLine146());
      that.removeLine(getLine171());
     that.unHighlightElement(MCTR374MCTRV3DSNelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR374MCTRV3DSN", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR374MCTRV3DSNelement, category);
}
      MCTR374MCTRV3DSNflag=false
  }
};
$scope.MECE350MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE350MCTRV3DSNTime <= 200) { 
        MECE350MCTRV3DSNTime = currentTime;
        return;
    }
MECE350MCTRV3DSNTime = currentTime;
  var MECE350MCTRV3DSNelement = document.getElementById("MECE350MCTRV3DSN");
 if (!MECE350MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MECE350MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MECE350MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MECE350MCTRV3DSN")[i];
        if (MECE350MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE350MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine147());
      that.addLine(getLine151());
     that.highlightElement(MECE350MCTRV3DSNelement, "EngineeringSciences");
     that.addToClicked("MECE350MCTRV3DSN", "EngineeringSciences");
      MECE350MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine147());
      that.removeLine(getLine151());
     that.unHighlightElement(MECE350MCTRV3DSNelement, "EngineeringSciences");
     var category = that.removeFromClicked("MECE350MCTRV3DSN", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MECE350MCTRV3DSNelement, category);
}
      MECE350MCTRV3DSNflag=false
  }
};
$scope.MECE360MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE360MCTRV3DSNTime <= 200) { 
        MECE360MCTRV3DSNTime = currentTime;
        return;
    }
MECE360MCTRV3DSNTime = currentTime;
  var MECE360MCTRV3DSNelement = document.getElementById("MECE360MCTRV3DSN");
 if (!MECE360MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MECE360MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MECE360MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MECE360MCTRV3DSN")[i];
        if (MECE360MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE360MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine148());
      that.addLine(getLine149());
      that.addLine(getLine150());
      that.addLine(getLine151());
      that.addLine(getLine158());
      that.addLine(getLine166());
      that.addLine(getLine175());
     that.highlightElement(MECE360MCTRV3DSNelement, "EngineeringDesign");
     that.addToClicked("MECE360MCTRV3DSN", "EngineeringDesign");
      MECE360MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine148());
      that.removeLine(getLine149());
      that.removeLine(getLine150());
      that.removeLine(getLine151());
      that.removeLine(getLine158());
      that.removeLine(getLine166());
      that.removeLine(getLine175());
     that.unHighlightElement(MECE360MCTRV3DSNelement, "EngineeringDesign");
     var category = that.removeFromClicked("MECE360MCTRV3DSN", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MECE360MCTRV3DSNelement, category);
}
      MECE360MCTRV3DSNflag=false
  }
};
$scope.MECE390MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE390MCTRV3DSNTime <= 200) { 
        MECE390MCTRV3DSNTime = currentTime;
        return;
    }
MECE390MCTRV3DSNTime = currentTime;
  var MECE390MCTRV3DSNelement = document.getElementById("MECE390MCTRV3DSN");
 if (!MECE390MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MECE390MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MECE390MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MECE390MCTRV3DSN")[i];
        if (MECE390MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE390MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine152());
      that.addLine(getLine153());
      that.addLine(getLine162());
      that.addLine(getLine163());
      that.addLine(getLine176());
     that.highlightElement(MECE390MCTRV3DSNelement, "Math");
     that.addToClicked("MECE390MCTRV3DSN", "Math");
      MECE390MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine152());
      that.removeLine(getLine153());
      that.removeLine(getLine162());
      that.removeLine(getLine163());
      that.removeLine(getLine176());
     that.unHighlightElement(MECE390MCTRV3DSNelement, "Math");
     var category = that.removeFromClicked("MECE390MCTRV3DSN", "Math");
  if (category != "") { 
     that.highlightElement(MECE390MCTRV3DSNelement, category);
}
      MECE390MCTRV3DSNflag=false
  }
};
$scope.ENGM401MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM401MCTRV3DSNTime <= 200) { 
        ENGM401MCTRV3DSNTime = currentTime;
        return;
    }
ENGM401MCTRV3DSNTime = currentTime;
  var ENGM401MCTRV3DSNelement = document.getElementById("ENGM401MCTRV3DSN");
 if (!ENGM401MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("ENGM401MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("ENGM401MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("ENGM401MCTRV3DSN")[i];
        if (ENGM401MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM401MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine168());
     that.highlightElement(ENGM401MCTRV3DSNelement, "Other");
     that.addToClicked("ENGM401MCTRV3DSN", "Other");
      ENGM401MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine168());
     that.unHighlightElement(ENGM401MCTRV3DSNelement, "Other");
     var category = that.removeFromClicked("ENGM401MCTRV3DSN", "Other");
  if (category != "") { 
     that.highlightElement(ENGM401MCTRV3DSNelement, category);
}
      ENGM401MCTRV3DSNflag=false
  }
};
$scope.MCTR300MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR300MCTRV3DSNTime <= 200) { 
        MCTR300MCTRV3DSNTime = currentTime;
        return;
    }
MCTR300MCTRV3DSNTime = currentTime;
  var MCTR300MCTRV3DSNelement = document.getElementById("MCTR300MCTRV3DSN");
 if (!MCTR300MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MCTR300MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MCTR300MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MCTR300MCTRV3DSN")[i];
        if (MCTR300MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR300MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine154());
      that.addLine(getLine155());
      that.addLine(getLine156());
      that.addLine(getLine177());
     that.highlightElement(MCTR300MCTRV3DSNelement, "Mechatronics");
     that.addToClicked("MCTR300MCTRV3DSN", "Mechatronics");
      MCTR300MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine154());
      that.removeLine(getLine155());
      that.removeLine(getLine156());
      that.removeLine(getLine177());
     that.unHighlightElement(MCTR300MCTRV3DSNelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR300MCTRV3DSN", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR300MCTRV3DSNelement, category);
}
      MCTR300MCTRV3DSNflag=false
  }
};
$scope.MCTR332MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR332MCTRV3DSNTime <= 200) { 
        MCTR332MCTRV3DSNTime = currentTime;
        return;
    }
MCTR332MCTRV3DSNTime = currentTime;
  var MCTR332MCTRV3DSNelement = document.getElementById("MCTR332MCTRV3DSN");
 if (!MCTR332MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MCTR332MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MCTR332MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MCTR332MCTRV3DSN")[i];
        if (MCTR332MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR332MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine157());
     that.highlightElement(MCTR332MCTRV3DSNelement, "Mechatronics");
     that.addToClicked("MCTR332MCTRV3DSN", "Mechatronics");
      MCTR332MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine157());
     that.unHighlightElement(MCTR332MCTRV3DSNelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR332MCTRV3DSN", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR332MCTRV3DSNelement, category);
}
      MCTR332MCTRV3DSNflag=false
  }
};
$scope.MCTR365MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR365MCTRV3DSNTime <= 200) { 
        MCTR365MCTRV3DSNTime = currentTime;
        return;
    }
MCTR365MCTRV3DSNTime = currentTime;
  var MCTR365MCTRV3DSNelement = document.getElementById("MCTR365MCTRV3DSN");
 if (!MCTR365MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MCTR365MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MCTR365MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MCTR365MCTRV3DSN")[i];
        if (MCTR365MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR365MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine158());
      that.addLine(getLine159());
      that.addLine(getLine160());
      that.addLine(getLine167());
     that.highlightElement(MCTR365MCTRV3DSNelement, "Mechatronics");
     that.addToClicked("MCTR365MCTRV3DSN", "Mechatronics");
      MCTR365MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine158());
      that.removeLine(getLine159());
      that.removeLine(getLine160());
      that.removeLine(getLine167());
     that.unHighlightElement(MCTR365MCTRV3DSNelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR365MCTRV3DSN", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR365MCTRV3DSNelement, category);
}
      MCTR365MCTRV3DSNflag=false
  }
};
$scope.MCTR370MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR370MCTRV3DSNTime <= 200) { 
        MCTR370MCTRV3DSNTime = currentTime;
        return;
    }
MCTR370MCTRV3DSNTime = currentTime;
  var MCTR370MCTRV3DSNelement = document.getElementById("MCTR370MCTRV3DSN");
 if (!MCTR370MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MCTR370MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MCTR370MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MCTR370MCTRV3DSN")[i];
        if (MCTR370MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR370MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine161());
      that.addLine(getLine162());
     that.highlightElement(MCTR370MCTRV3DSNelement, "Mechatronics");
     that.addToClicked("MCTR370MCTRV3DSN", "Mechatronics");
      MCTR370MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine161());
      that.removeLine(getLine162());
     that.unHighlightElement(MCTR370MCTRV3DSNelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR370MCTRV3DSN", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR370MCTRV3DSNelement, category);
}
      MCTR370MCTRV3DSNflag=false
  }
};
$scope.MECE420MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE420MCTRV3DSNTime <= 200) { 
        MECE420MCTRV3DSNTime = currentTime;
        return;
    }
MECE420MCTRV3DSNTime = currentTime;
  var MECE420MCTRV3DSNelement = document.getElementById("MECE420MCTRV3DSN");
 if (!MECE420MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MECE420MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MECE420MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MECE420MCTRV3DSN")[i];
        if (MECE420MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE420MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine160());
      that.addLine(getLine163());
      that.addLine(getLine165());
      that.addLine(getLine169());
      that.addLine(getLine172());
     that.highlightElement(MECE420MCTRV3DSNelement, "EngineeringSciences");
     that.addToClicked("MECE420MCTRV3DSN", "EngineeringSciences");
      MECE420MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine160());
      that.removeLine(getLine163());
      that.removeLine(getLine165());
      that.removeLine(getLine169());
      that.removeLine(getLine172());
     that.unHighlightElement(MECE420MCTRV3DSNelement, "EngineeringSciences");
     var category = that.removeFromClicked("MECE420MCTRV3DSN", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MECE420MCTRV3DSNelement, category);
}
      MECE420MCTRV3DSNflag=false
  }
};
$scope.ComplementaryElectiveMCTRV3DSN0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveMCTRV3DSN0Time <= 200) { 
        ComplementaryElectiveMCTRV3DSN0Time = currentTime;
        return;
    }
ComplementaryElectiveMCTRV3DSN0Time = currentTime;
  var ComplementaryElectiveMCTRV3DSN0element = document.getElementById("ComplementaryElectiveMCTRV3DSN0");
 if (!ComplementaryElectiveMCTRV3DSN0flag) {
     if (that.MCTRV3DSNClickedMap.get("ComplementaryElectiveMCTRV3DSN0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("ComplementaryElectiveMCTRV3DSN0").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("ComplementaryElectiveMCTRV3DSN0")[i];
        if (ComplementaryElectiveMCTRV3DSN0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveMCTRV3DSN0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveMCTRV3DSN0element, "COMP");
     that.addToClicked("ComplementaryElectiveMCTRV3DSN0", "COMP");
      ComplementaryElectiveMCTRV3DSN0flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveMCTRV3DSN0element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveMCTRV3DSN0", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveMCTRV3DSN0element, category);
}
      ComplementaryElectiveMCTRV3DSN0flag=false
  }
};
$scope.ENGG404MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG404MCTRV3DSNTime <= 200) { 
        ENGG404MCTRV3DSNTime = currentTime;
        return;
    }
ENGG404MCTRV3DSNTime = currentTime;
  var ENGG404MCTRV3DSNelement = document.getElementById("ENGG404MCTRV3DSN");
 if (!ENGG404MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("ENGG404MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("ENGG404MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("ENGG404MCTRV3DSN")[i];
        if (ENGG404MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG404MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG404MCTRV3DSNelement, "EngineeringProfession");
     that.addToClicked("ENGG404MCTRV3DSN", "EngineeringProfession");
      ENGG404MCTRV3DSNflag=true
  }
 else {
     that.unHighlightElement(ENGG404MCTRV3DSNelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG404MCTRV3DSN", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG404MCTRV3DSNelement, category);
}
      ENGG404MCTRV3DSNflag=false
  }
};
$scope.ITSElectiveMCTRV3DSN0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ITSElectiveMCTRV3DSN0Time <= 200) { 
        ITSElectiveMCTRV3DSN0Time = currentTime;
        return;
    }
ITSElectiveMCTRV3DSN0Time = currentTime;
  var ITSElectiveMCTRV3DSN0element = document.getElementById("ITSElectiveMCTRV3DSN0");
 if (!ITSElectiveMCTRV3DSN0flag) {
     if (that.MCTRV3DSNClickedMap.get("ITSElectiveMCTRV3DSN0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("ITSElectiveMCTRV3DSN0").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("ITSElectiveMCTRV3DSN0")[i];
        if (ITSElectiveMCTRV3DSN0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ITSElectiveMCTRV3DSN0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ITSElectiveMCTRV3DSN0element, "ITS");
     that.addToClicked("ITSElectiveMCTRV3DSN0", "ITS");
      ITSElectiveMCTRV3DSN0flag=true
  }
 else {
     that.unHighlightElement(ITSElectiveMCTRV3DSN0element, "ITS");
     var category = that.removeFromClicked("ITSElectiveMCTRV3DSN0", "ITS");
  if (category != "") { 
     that.highlightElement(ITSElectiveMCTRV3DSN0element, category);
}
      ITSElectiveMCTRV3DSN0flag=false
  }
};
$scope.MATE201MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE201MCTRV3DSNTime <= 200) { 
        MATE201MCTRV3DSNTime = currentTime;
        return;
    }
MATE201MCTRV3DSNTime = currentTime;
  var MATE201MCTRV3DSNelement = document.getElementById("MATE201MCTRV3DSN");
 if (!MATE201MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MATE201MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MATE201MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MATE201MCTRV3DSN")[i];
        if (MATE201MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE201MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine164());
     that.highlightElement(MATE201MCTRV3DSNelement, "NaturalSciences");
     that.addToClicked("MATE201MCTRV3DSN", "NaturalSciences");
      MATE201MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine164());
     that.unHighlightElement(MATE201MCTRV3DSNelement, "NaturalSciences");
     var category = that.removeFromClicked("MATE201MCTRV3DSN", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(MATE201MCTRV3DSNelement, category);
}
      MATE201MCTRV3DSNflag=false
  }
};
$scope.MCTR460MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR460MCTRV3DSNTime <= 200) { 
        MCTR460MCTRV3DSNTime = currentTime;
        return;
    }
MCTR460MCTRV3DSNTime = currentTime;
  var MCTR460MCTRV3DSNelement = document.getElementById("MCTR460MCTRV3DSN");
 if (!MCTR460MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MCTR460MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MCTR460MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MCTR460MCTRV3DSN")[i];
        if (MCTR460MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR460MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine165());
      that.addLine(getLine170());
     that.highlightElement(MCTR460MCTRV3DSNelement, "Mechatronics");
     that.addToClicked("MCTR460MCTRV3DSN", "Mechatronics");
      MCTR460MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine165());
      that.removeLine(getLine170());
     that.unHighlightElement(MCTR460MCTRV3DSNelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR460MCTRV3DSN", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR460MCTRV3DSNelement, category);
}
      MCTR460MCTRV3DSNflag=false
  }
};
$scope.MECE460MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE460MCTRV3DSNTime <= 200) { 
        MECE460MCTRV3DSNTime = currentTime;
        return;
    }
MECE460MCTRV3DSNTime = currentTime;
  var MECE460MCTRV3DSNelement = document.getElementById("MECE460MCTRV3DSN");
 if (!MECE460MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MECE460MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MECE460MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MECE460MCTRV3DSN")[i];
        if (MECE460MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE460MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine166());
      that.addLine(getLine167());
      that.addLine(getLine168());
      that.addLine(getLine174());
     that.highlightElement(MECE460MCTRV3DSNelement, "EngineeringDesign");
     that.addToClicked("MECE460MCTRV3DSN", "EngineeringDesign");
      MECE460MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine166());
      that.removeLine(getLine167());
      that.removeLine(getLine168());
      that.removeLine(getLine174());
     that.unHighlightElement(MECE460MCTRV3DSNelement, "EngineeringDesign");
     var category = that.removeFromClicked("MECE460MCTRV3DSN", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MECE460MCTRV3DSNelement, category);
}
      MECE460MCTRV3DSNflag=false
  }
};
$scope.ENGG400MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG400MCTRV3DSNTime <= 200) { 
        ENGG400MCTRV3DSNTime = currentTime;
        return;
    }
ENGG400MCTRV3DSNTime = currentTime;
  var ENGG400MCTRV3DSNelement = document.getElementById("ENGG400MCTRV3DSN");
 if (!ENGG400MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("ENGG400MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("ENGG400MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("ENGG400MCTRV3DSN")[i];
        if (ENGG400MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG400MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG400MCTRV3DSNelement, "EngineeringProfession");
     that.addToClicked("ENGG400MCTRV3DSN", "EngineeringProfession");
      ENGG400MCTRV3DSNflag=true
  }
 else {
     that.unHighlightElement(ENGG400MCTRV3DSNelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG400MCTRV3DSN", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG400MCTRV3DSNelement, category);
}
      ENGG400MCTRV3DSNflag=false
  }
};
$scope.MCTR461MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR461MCTRV3DSNTime <= 200) { 
        MCTR461MCTRV3DSNTime = currentTime;
        return;
    }
MCTR461MCTRV3DSNTime = currentTime;
  var MCTR461MCTRV3DSNelement = document.getElementById("MCTR461MCTRV3DSN");
 if (!MCTR461MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MCTR461MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MCTR461MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MCTR461MCTRV3DSN")[i];
        if (MCTR461MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR461MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine169());
      that.addLine(getLine170());
      that.addLine(getLine173());
     that.highlightElement(MCTR461MCTRV3DSNelement, "Mechatronics");
     that.addToClicked("MCTR461MCTRV3DSN", "Mechatronics");
      MCTR461MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine169());
      that.removeLine(getLine170());
      that.removeLine(getLine173());
     that.unHighlightElement(MCTR461MCTRV3DSNelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR461MCTRV3DSN", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR461MCTRV3DSNelement, category);
}
      MCTR461MCTRV3DSNflag=false
  }
};
$scope.MCTR465MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MCTR465MCTRV3DSNTime <= 200) { 
        MCTR465MCTRV3DSNTime = currentTime;
        return;
    }
MCTR465MCTRV3DSNTime = currentTime;
  var MCTR465MCTRV3DSNelement = document.getElementById("MCTR465MCTRV3DSN");
 if (!MCTR465MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MCTR465MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MCTR465MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MCTR465MCTRV3DSN")[i];
        if (MCTR465MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MCTR465MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine171());
      that.addLine(getLine172());
      that.addLine(getLine173());
     that.highlightElement(MCTR465MCTRV3DSNelement, "Mechatronics");
     that.addToClicked("MCTR465MCTRV3DSN", "Mechatronics");
      MCTR465MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine171());
      that.removeLine(getLine172());
      that.removeLine(getLine173());
     that.unHighlightElement(MCTR465MCTRV3DSNelement, "Mechatronics");
     var category = that.removeFromClicked("MCTR465MCTRV3DSN", "Mechatronics");
  if (category != "") { 
     that.highlightElement(MCTR465MCTRV3DSNelement, category);
}
      MCTR465MCTRV3DSNflag=false
  }
};
$scope.MECE461MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE461MCTRV3DSNTime <= 200) { 
        MECE461MCTRV3DSNTime = currentTime;
        return;
    }
MECE461MCTRV3DSNTime = currentTime;
  var MECE461MCTRV3DSNelement = document.getElementById("MECE461MCTRV3DSN");
 if (!MECE461MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MECE461MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MECE461MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MECE461MCTRV3DSN")[i];
        if (MECE461MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE461MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine174());
     that.highlightElement(MECE461MCTRV3DSNelement, "EngineeringDesign");
     that.addToClicked("MECE461MCTRV3DSN", "EngineeringDesign");
      MECE461MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine174());
     that.unHighlightElement(MECE461MCTRV3DSNelement, "EngineeringDesign");
     var category = that.removeFromClicked("MECE461MCTRV3DSN", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MECE461MCTRV3DSNelement, category);
}
      MECE461MCTRV3DSNflag=false
  }
};
$scope.MECE465MCTRV3DSNListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE465MCTRV3DSNTime <= 200) { 
        MECE465MCTRV3DSNTime = currentTime;
        return;
    }
MECE465MCTRV3DSNTime = currentTime;
  var MECE465MCTRV3DSNelement = document.getElementById("MECE465MCTRV3DSN");
 if (!MECE465MCTRV3DSNflag) {
     if (that.MCTRV3DSNClickedMap.get("MECE465MCTRV3DSN").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("MECE465MCTRV3DSN").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("MECE465MCTRV3DSN")[i];
        if (MECE465MCTRV3DSNelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE465MCTRV3DSNelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine175());
      that.addLine(getLine176());
      that.addLine(getLine177());
     that.highlightElement(MECE465MCTRV3DSNelement, "EngineeringSciences");
     that.addToClicked("MECE465MCTRV3DSN", "EngineeringSciences");
      MECE465MCTRV3DSNflag=true
  }
 else {
      that.removeLine(getLine175());
      that.removeLine(getLine176());
      that.removeLine(getLine177());
     that.unHighlightElement(MECE465MCTRV3DSNelement, "EngineeringSciences");
     var category = that.removeFromClicked("MECE465MCTRV3DSN", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MECE465MCTRV3DSNelement, category);
}
      MECE465MCTRV3DSNflag=false
  }
};
$scope.ProgramTechnicalElectiveMCTRV3DSN0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveMCTRV3DSN0Time <= 200) { 
        ProgramTechnicalElectiveMCTRV3DSN0Time = currentTime;
        return;
    }
ProgramTechnicalElectiveMCTRV3DSN0Time = currentTime;
  var ProgramTechnicalElectiveMCTRV3DSN0element = document.getElementById("ProgramTechnicalElectiveMCTRV3DSN0");
 if (!ProgramTechnicalElectiveMCTRV3DSN0flag) {
     if (that.MCTRV3DSNClickedMap.get("ProgramTechnicalElectiveMCTRV3DSN0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("ProgramTechnicalElectiveMCTRV3DSN0").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("ProgramTechnicalElectiveMCTRV3DSN0")[i];
        if (ProgramTechnicalElectiveMCTRV3DSN0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveMCTRV3DSN0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveMCTRV3DSN0element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveMCTRV3DSN0", "PROG");
      ProgramTechnicalElectiveMCTRV3DSN0flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveMCTRV3DSN0element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveMCTRV3DSN0", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveMCTRV3DSN0element, category);
}
      ProgramTechnicalElectiveMCTRV3DSN0flag=false
  }
};
$scope.ProgramTechnicalElectiveMCTRV3DSN1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveMCTRV3DSN1Time <= 200) { 
        ProgramTechnicalElectiveMCTRV3DSN1Time = currentTime;
        return;
    }
ProgramTechnicalElectiveMCTRV3DSN1Time = currentTime;
  var ProgramTechnicalElectiveMCTRV3DSN1element = document.getElementById("ProgramTechnicalElectiveMCTRV3DSN1");
 if (!ProgramTechnicalElectiveMCTRV3DSN1flag) {
     if (that.MCTRV3DSNClickedMap.get("ProgramTechnicalElectiveMCTRV3DSN1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.MCTRV3DSNClickedMap.get("ProgramTechnicalElectiveMCTRV3DSN1").length; i++) { 
        var cate = that.MCTRV3DSNClickedMap.get("ProgramTechnicalElectiveMCTRV3DSN1")[i];
        if (ProgramTechnicalElectiveMCTRV3DSN1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveMCTRV3DSN1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveMCTRV3DSN1element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveMCTRV3DSN1", "PROG");
      ProgramTechnicalElectiveMCTRV3DSN1flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveMCTRV3DSN1element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveMCTRV3DSN1", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveMCTRV3DSN1element, category);
}
      ProgramTechnicalElectiveMCTRV3DSN1flag=false
  }
};
$scope.CHEM103MCTRV3DSNRCListener = function () {
  var element = document.getElementById("CHEM103MCTRV3DSNdesc");
 if (!CHEM103MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM103MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM103MCTRV3DSNrflag=false
  }
};
$scope.ENGG100MCTRV3DSNRCListener = function () {
  var element = document.getElementById("ENGG100MCTRV3DSNdesc");
 if (!ENGG100MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG100MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG100MCTRV3DSNrflag=false
  }
};
$scope.ENGG130MCTRV3DSNRCListener = function () {
  var element = document.getElementById("ENGG130MCTRV3DSNdesc");
 if (!ENGG130MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG130MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG130MCTRV3DSNrflag=false
  }
};
$scope.ENGL199MCTRV3DSNRCListener = function () {
  var element = document.getElementById("ENGL199MCTRV3DSNdesc");
 if (!ENGL199MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGL199MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGL199MCTRV3DSNrflag=false
  }
};
$scope.MATH100MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MATH100MCTRV3DSNdesc");
 if (!MATH100MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH100MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH100MCTRV3DSNrflag=false
  }
};
$scope.PHYS130MCTRV3DSNRCListener = function () {
  var element = document.getElementById("PHYS130MCTRV3DSNdesc");
 if (!PHYS130MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS130MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS130MCTRV3DSNrflag=false
  }
};
$scope.CHEM105MCTRV3DSNRCListener = function () {
  var element = document.getElementById("CHEM105MCTRV3DSNdesc");
 if (!CHEM105MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM105MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM105MCTRV3DSNrflag=false
  }
};
$scope.ENCMP100MCTRV3DSNRCListener = function () {
  var element = document.getElementById("ENCMP100MCTRV3DSNdesc");
 if (!ENCMP100MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENCMP100MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENCMP100MCTRV3DSNrflag=false
  }
};
$scope.ENGG160MCTRV3DSNRCListener = function () {
  var element = document.getElementById("ENGG160MCTRV3DSNdesc");
 if (!ENGG160MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG160MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG160MCTRV3DSNrflag=false
  }
};
$scope.ENPH131MCTRV3DSNRCListener = function () {
  var element = document.getElementById("ENPH131MCTRV3DSNdesc");
 if (!ENPH131MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENPH131MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENPH131MCTRV3DSNrflag=false
  }
};
$scope.MATH101MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MATH101MCTRV3DSNdesc");
 if (!MATH101MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH101MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH101MCTRV3DSNrflag=false
  }
};
$scope.MATH102MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MATH102MCTRV3DSNdesc");
 if (!MATH102MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH102MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH102MCTRV3DSNrflag=false
  }
};
$scope.CIVE270MCTRV3DSNRCListener = function () {
  var element = document.getElementById("CIVE270MCTRV3DSNdesc");
 if (!CIVE270MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE270MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE270MCTRV3DSNrflag=false
  }
};
$scope.ECE210MCTRV3DSNRCListener = function () {
  var element = document.getElementById("ECE210MCTRV3DSNdesc");
 if (!ECE210MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE210MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE210MCTRV3DSNrflag=false
  }
};
$scope.ECE240MCTRV3DSNRCListener = function () {
  var element = document.getElementById("ECE240MCTRV3DSNdesc");
 if (!ECE240MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE240MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE240MCTRV3DSNrflag=false
  }
};
$scope.MATH201MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MATH201MCTRV3DSNdesc");
 if (!MATH201MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH201MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH201MCTRV3DSNrflag=false
  }
};
$scope.MATH209MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MATH209MCTRV3DSNdesc");
 if (!MATH209MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH209MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH209MCTRV3DSNrflag=false
  }
};
$scope.MCTR202MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MCTR202MCTRV3DSNdesc");
 if (!MCTR202MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR202MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR202MCTRV3DSNrflag=false
  }
};
$scope.MCTR200MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MCTR200MCTRV3DSNdesc");
 if (!MCTR200MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR200MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR200MCTRV3DSNrflag=false
  }
};
$scope.MCTR274MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MCTR274MCTRV3DSNdesc");
 if (!MCTR274MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR274MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR274MCTRV3DSNrflag=false
  }
};
$scope.MECE230MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MECE230MCTRV3DSNdesc");
 if (!MECE230MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE230MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE230MCTRV3DSNrflag=false
  }
};
$scope.MECE250MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MECE250MCTRV3DSNdesc");
 if (!MECE250MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE250MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE250MCTRV3DSNrflag=false
  }
};
$scope.MECE260MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MECE260MCTRV3DSNdesc");
 if (!MECE260MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE260MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE260MCTRV3DSNrflag=false
  }
};
$scope.MECE265MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MECE265MCTRV3DSNdesc");
 if (!MECE265MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE265MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE265MCTRV3DSNrflag=false
  }
};
$scope.ECE315MCTRV3DSNRCListener = function () {
  var element = document.getElementById("ECE315MCTRV3DSNdesc");
 if (!ECE315MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE315MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE315MCTRV3DSNrflag=false
  }
};
$scope.ECE342MCTRV3DSNRCListener = function () {
  var element = document.getElementById("ECE342MCTRV3DSNdesc");
 if (!ECE342MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE342MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE342MCTRV3DSNrflag=false
  }
};
$scope.MCTR374MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MCTR374MCTRV3DSNdesc");
 if (!MCTR374MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR374MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR374MCTRV3DSNrflag=false
  }
};
$scope.MECE350MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MECE350MCTRV3DSNdesc");
 if (!MECE350MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE350MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE350MCTRV3DSNrflag=false
  }
};
$scope.MECE360MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MECE360MCTRV3DSNdesc");
 if (!MECE360MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE360MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE360MCTRV3DSNrflag=false
  }
};
$scope.MECE390MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MECE390MCTRV3DSNdesc");
 if (!MECE390MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE390MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE390MCTRV3DSNrflag=false
  }
};
$scope.ENGM401MCTRV3DSNRCListener = function () {
  var element = document.getElementById("ENGM401MCTRV3DSNdesc");
 if (!ENGM401MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM401MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM401MCTRV3DSNrflag=false
  }
};
$scope.MCTR300MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MCTR300MCTRV3DSNdesc");
 if (!MCTR300MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR300MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR300MCTRV3DSNrflag=false
  }
};
$scope.MCTR332MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MCTR332MCTRV3DSNdesc");
 if (!MCTR332MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR332MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR332MCTRV3DSNrflag=false
  }
};
$scope.MCTR365MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MCTR365MCTRV3DSNdesc");
 if (!MCTR365MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR365MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR365MCTRV3DSNrflag=false
  }
};
$scope.MCTR370MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MCTR370MCTRV3DSNdesc");
 if (!MCTR370MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR370MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR370MCTRV3DSNrflag=false
  }
};
$scope.MECE420MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MECE420MCTRV3DSNdesc");
 if (!MECE420MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE420MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE420MCTRV3DSNrflag=false
  }
};
$scope.ComplementaryElectiveMCTRV3DSN0RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveMCTRV3DSN0desc");
 if (!ComplementaryElectiveMCTRV3DSN0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveMCTRV3DSN0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveMCTRV3DSN0rflag=false
  }
};
$scope.ENGG404MCTRV3DSNRCListener = function () {
  var element = document.getElementById("ENGG404MCTRV3DSNdesc");
 if (!ENGG404MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG404MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG404MCTRV3DSNrflag=false
  }
};
$scope.ITSElectiveMCTRV3DSN0RCListener = function () {
  var element = document.getElementById("ITSElectiveMCTRV3DSN0desc");
 if (!ITSElectiveMCTRV3DSN0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ITSElectiveMCTRV3DSN0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ITSElectiveMCTRV3DSN0rflag=false
  }
};
$scope.MATE201MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MATE201MCTRV3DSNdesc");
 if (!MATE201MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE201MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE201MCTRV3DSNrflag=false
  }
};
$scope.MCTR460MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MCTR460MCTRV3DSNdesc");
 if (!MCTR460MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR460MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR460MCTRV3DSNrflag=false
  }
};
$scope.MECE460MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MECE460MCTRV3DSNdesc");
 if (!MECE460MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE460MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE460MCTRV3DSNrflag=false
  }
};
$scope.ENGG400MCTRV3DSNRCListener = function () {
  var element = document.getElementById("ENGG400MCTRV3DSNdesc");
 if (!ENGG400MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG400MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG400MCTRV3DSNrflag=false
  }
};
$scope.MCTR461MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MCTR461MCTRV3DSNdesc");
 if (!MCTR461MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR461MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR461MCTRV3DSNrflag=false
  }
};
$scope.MCTR465MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MCTR465MCTRV3DSNdesc");
 if (!MCTR465MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MCTR465MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MCTR465MCTRV3DSNrflag=false
  }
};
$scope.MECE461MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MECE461MCTRV3DSNdesc");
 if (!MECE461MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE461MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE461MCTRV3DSNrflag=false
  }
};
$scope.MECE465MCTRV3DSNRCListener = function () {
  var element = document.getElementById("MECE465MCTRV3DSNdesc");
 if (!MECE465MCTRV3DSNrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE465MCTRV3DSNrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE465MCTRV3DSNrflag=false
  }
};
$scope.ProgramTechnicalElectiveMCTRV3DSN0RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveMCTRV3DSN0desc");
 if (!ProgramTechnicalElectiveMCTRV3DSN0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveMCTRV3DSN0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveMCTRV3DSN0rflag=false
  }
};
$scope.ProgramTechnicalElectiveMCTRV3DSN1RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveMCTRV3DSN1desc");
 if (!ProgramTechnicalElectiveMCTRV3DSN1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveMCTRV3DSN1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveMCTRV3DSN1rflag=false
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