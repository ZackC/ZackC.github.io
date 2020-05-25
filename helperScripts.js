/*Change the title bar size on a resize event*/
function showFrameworkRepairCitation() {
  citation = "@inproceedings{CokerFrameFix2020,\n";
  citation += "&nbsp&nbspauthor = {Coker, Zack and Sunshine, Joshua and {Le Goues}, Claire},\n";
  citation += "&nbsp&nbsptitle = {FrameFix: Automatically Repairing Statically-Detected Directive Violations in Framework Applications},\n";
  citation += "&nbsp&nbspbooktitle = {(under submission)},\n";
 citation += "&nbsp&nbspseries = {},\n";
 citation += "&nbsp&nbspyear = {},\n";
 citation += "&nbsp&nbsppages = {},\n";
 citation += "}";
 return citation;
}


function showFrameworkDebuggingCitation() {
  citation = "@inproceedings{CokerQualitative2019,\n";
  citation += "&nbsp&nbspauthor = {Coker, Zack and Widder, David Gray and {Le Goues}, Claire and Bogart, Christopher and Sunshine, Joshua},\n";
  citation += "&nbsp&nbsptitle = {A Qualitative Study on Framework Debugging},\n";
  citation += "&nbsp&nbspbooktitle = {International Conference on Software Maintenance and Evolution},\n";
 citation += "&nbsp&nbspseries = {ICSME '19},\n";
 citation += "&nbsp&nbspyear = {2019},\n";
 citation += "&nbsp&nbsppages = {568-579},\n";
 citation += "}";
 return citation;
}

function showPlanReuseCitation() {
  citation = "@inproceedings{KinneerManaging2018,\n";
  citation += "&nbsp&nbspauthor = {Kinneer, Cody and Coker, Zack and Jiacheng, Wang and Garlan, David and {Le Goues}, Claire},\n";
  citation += "&nbsp&nbsptitle = {Managing Uncertainty in Self-Adaptive Systems with Plan Reuse and Stochastic Search},\n";
  citation += "&nbsp&nbspbooktitle = {Software Engineering for Adaptive and Self-Managing Systems},\n";
 citation += "&nbsp&nbspseries = {SEAMS '18},\n";
 citation += "&nbsp&nbspyear = {2018},\n";
 citation += "&nbsp&nbsppages = {40--50},\n";
 citation += "}";
 return citation;
}

function showBehaviorCitation() {
  citation = "@inproceedings{CokerBehavior2017,\n";
  citation += "&nbsp&nbspauthor = {Coker, Zack and Damevski, Kostadin and {Le Goues}, Claire and Kraft, Nicholas A. and Shepherd, David and Pollock, Lori},\n";
  citation += "&nbsp&nbsptitle = {Behavior Metrics for Prioritizing Investigations of Exceptions},\n";
  citation += "&nbsp&nbspbooktitle = {International Conference on Software Maintenance and Evolution},\n";
 citation += "&nbsp&nbspseries = {ICSME '17},\n";
 citation += "&nbsp&nbspyear = {2017},\n";
 citation += "&nbsp&nbsppages = {554--563},\n";
 citation += "}";
 return citation;
}


function showIntegrationCitation() {
  citation = "@inproceedings{SotoAnalyzing2017,\n";
  citation += "&nbsp&nbspauthor = {Soto, Mauricio and Coker, Zack and {Le~Goues}, Claire},\n";
  citation += "&nbsp&nbsptitle = {Analyzing the Impact of Social Attributes on Commit Integration Success},\n";
  citation += "&nbsp&nbspbooktitle = {Mining Software Respositories},\n";
 citation += "&nbsp&nbspseries = {MSR '17},\n";
 citation += "&nbsp&nbspyear = {2017},\n";
 citation += "pages = {483--486},\n";
 citation += "}";
 return citation;
}

function showSandboxCitation() {
  citation = "@inproceedings{CokerEvaluating2015,\n";
  citation += "&nbsp&nbspauthor = {Coker, Zack and Maass, Michael and Ding, Tianyuan and {Le Goues}, Claire and Sunshine, Joshua},\n";
  citation += "&nbsp&nbsptitle = {Evaluating the Flexibility of the Java Sandbox},\n";
  citation += "&nbsp&nbspbooktitle = {Annual Computer Security Applications Conference},\n";
 citation += "&nbsp&nbspseries = {ACSAC '15},\n";
 citation += "&nbsp&nbspyear = {2015},\n";
 citation += "&nbsp&nbsppages = {1--10}\n";
 citation += "}";
 return citation;
}

function showPositionCitation() {
  citation = "@inproceedings{CokerSASS2015,\n";
  citation += "&nbsp&nbspauthor = {Coker, Zack and Garlan, David and {Le Goues}, Claire},\n";
  citation += "&nbsp&nbsptitle = {SASS: Self-adaptation Using Stochastic Search},\n";
  citation += "&nbsp&nbspbooktitle = {Software Engineering for Adaptive and Self-Managing Systems},\n";
  citation += "&nbsp&nbspseries = {SEAMS '15},\n";
  citation += "&nbsp&nbspyear = {2015},\n";
  citation += "&nbsp&nbsppages = {168--174},\n";
  citation += "}";
 return citation;
};

function showProgramCitation() {
  citation = "@inproceedings{CokerProgram2013,\n";
  citation += "&nbsp&nbspauthor = {Coker, Zack and Hafiz, Munawar},\n";
  citation += "&nbsp&nbsptitle = {Program Transformations to Fix {C} Integers},\n";
  citation += "&nbsp&nbspbooktitle = {International Conference on Software Engineering},\n";
  citation += "&nbsp&nbspseries = {ICSE '13},\n";
  citation += "&nbsp&nbspyear = {2013},\n";
  citation += "&nbsp&nbsppages = {792--801},\n";
  citation += "}";
  return citation;
};

function getThesisProposalAbstractText(){
  abstractText = "Professional developers use software frameworks for the benefits of\n";
  abstractText += "architectural reuse: the process of applying previously proven designs to new\n";
  abstractText += "applications in a given domain. Unfortunately, for frameworks to support\n";
  abstractText += "architectural reuse, frameworks must impose constraints on developers’\n";
  abstractText += "applications. The constraints derive from the assumptions that frameworks make\n";
  abstractText += "to interact with a diverse set of applications. To investigate how framework\n";
  abstractText += "imposed constraints affect developers, I conducted a human study on debugging\n";
  abstractText += "violations of framework constraints. From this study, I found that the most\n";
  abstractText += "time-consuming difficulty developers faced was caused by the state restrictions\n";
  abstractText += "on objects in the framework. I also found that developers had difficulty fixing\n";
  abstractText += "state-based framework bugs, even when provided the failure location, implying\n";
  abstractText += "that fixing the bug is the hardest step of the framework application debugging\n";
  abstractText += "process. To address this issue, I propose FrameFix: a technique to automatically\n";
  abstractText += "repair state violations in frameworks. The central innovations are a language\n";
  abstractText += "for specifying constraints along with a hybrid (static/dynamic) analysis to\n";
  abstractText += "identify and localize violations in framework clients. I will then evaluate the\n";
  abstractText += "accuracy of the generated repairs on sample programs with framework state\n";
  abstractText += "violations. The ultimate goal of the tool is to provide a way for framework\n";
  abstractText += "designers to improve developer experience and reduce the challenges of framework\n";
  abstractText += "development.\n";
  return abstractText;
}

window.onload = function() {
  var createCitationFunction;
  $("#navbar").width($("#container").width());
  $("#navbar")[0].style.opacity = 1;
  createCitationFunction = function(button, index)  {
    button.click(function () {
      onCitationClick(index);
    });
  };

  createCitationFunction($("#frameworkRepairCitation"),'frameworkRepair');
  createCitationFunction($("#frameworkDebuggingCitation"),'frameworkDebugging');
  createCitationFunction($("#planReuseCitation"),'planReuse');
  createCitationFunction($("#behaviorCitation"),'behavior');
  createCitationFunction($("#integrationCitation"),'integration');
  createCitationFunction($("#sandboxCitation"),'sandbox');
  createCitationFunction($("#positionCitation"),'position');
  createCitationFunction($("#programCitation"),'program');

  $("#thesisProposalAbstract").click(function () {
    createAndShowOverlayDiv(getThesisProposalAbstractText());
  });
    
};

function onCitationClick(citationIndex) {
  citationFuncDict = {
    'frameworkRepair': showFrameworkRepairCitation,
    'frameworkDebugging': showFrameworkDebuggingCitation,
    'planReuse': showPlanReuseCitation,
    'behavior': showBehaviorCitation,
    'integration': showIntegrationCitation,
    'sandbox': showSandboxCitation,
    'position': showPositionCitation,
    'program': showProgramCitation
  };
  createAndShowOverlayDiv(citationFuncDict[citationIndex]());
}

var f1 = debounce(function() {
    c = $("#container");
    $("#navbar").width(c.width());
  },25);

$(window).resize(function() {
  f1()
});

//essenstially copied from underscore.js
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later,wait);
    if (callNow) func.apply(context,args);
  };
};

var f2 = debounce(function() {
  if ($(this).scrollTop() > 50) {
    $("#navbar").addClass("fix-bar");
  } else {
    $("#navbar").removeClass("fix-bar");
  }
},25);

$(window).scroll(function(e) {
  f2();
  });

//Doesn't have to be for citations only, that was just
//the first use of this function
function createAndShowOverlayDiv(citationText) {
  var overlayDiv, citationDiv, citationLines, c;
  $("<div id='overlayDiv'></div>").fadeTo(0,0).appendTo("body").fadeTo("slow", 0.5);
  overlayDiv = $("#overlayDiv");
  overlayDiv.css({
    'opacity': 0,
    'position': 'fixed',
    'top': 0,
    'background-color': 'black',
    'height': $(document).height(),
    'width': '100%',
    'z-index': 5000
  });
  //can't increase the opacity of cildren div so citation div can't be a cild of overlayDiv
  $("<div id='citationDiv'></div>").hide().appendTo("body").fadeIn("slow");
  citationDiv = $("#citationDiv");
  if ($("body").width() < 900){
    citationDiv.css({
      'opacity':  1,
      'position': 'fixed',
      'background-color': 'white',
      'color': 'black',
      'z-index': 8000,
      'left': '0%',
      'top': '0%',
      'width': '100%',
      'border-radius': '12px',
      'padding': '10px'
    });
  } else {
    citationDiv.css({
      'opacity':  1,
      'position': 'fixed',
      'background-color': 'white',
      'color': 'black',
      'z-index': 8000,
      'left': '35%',
      'top': '40%',
      'width': '30%',
      'border-radius': '12px',
      'padding': '10px'
    });
  }
  //debugger;
  citationLines = citationText.split('\n');
  citationText = citationLines.join('<br>');
  citationDiv.append('<p>' + citationText + '</p><button id="close">Close</button>');
  $("#close").ready(function(){
    $(document).on("click", "#close", function(){
      citationDiv.fadeOut("slow",function(){
        citationDiv.remove();
      });
      overlayDiv.fadeOut("slow", function(){
        overlayDiv.remove();
      });
    });
  });
}



