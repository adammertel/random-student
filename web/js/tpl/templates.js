this["Templates"] = this["Templates"] || {};
this["Templates"]["history"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <tr>\r\n    <td>"
    + alias3(((helper = (helper = helpers.studentId || (depth0 != null ? depth0.studentId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"studentId","hash":{},"data":data}) : helper)))
    + "</td>\r\n    <td>"
    + alias3(((helper = (helper = helpers.action || (depth0 != null ? depth0.action : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"action","hash":{},"data":data}) : helper)))
    + "</td>\r\n    <td>"
    + alias3(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"time","hash":{},"data":data}) : helper)))
    + "</td>\r\n</tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<h5>Logs</h5>\r\n<table>\r\n  <thead>\r\n    <th>student</th>\r\n    <th>action</th>\r\n    <th>time</th>\r\n  </thead>\r\n";
  stack1 = ((helper = (helper = helpers.logs || (depth0 != null ? depth0.logs : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"logs","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.logs) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</table>\r\n";
},"useData":true});
this["Templates"]["modal"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div id=\"result-modal\" class=\"reveal-modal\" data-reveal aria-labelledby=\"firstModalTitle\" aria-hidden=\"true\" role=\"dialog\">\r\n  <h2 id=\"firstModalTitle\">"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\r\n</div>\r\n";
},"useData":true});
this["Templates"]["table"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.studentrRow,depth0,{"name":"studentrRow","data":data,"indent":"      ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<table>\r\n  <thead>\r\n    <th>id</th>\r\n    <th>name</th>\r\n    <th>counter</th>\r\n    <th>active</th>\r\n  </thead>\r\n  <tbody>\r\n";
  stack1 = ((helper = (helper = helpers.students || (depth0 != null ? depth0.students : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"students","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.students) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </tbody>\r\n</table>\r\n";
},"usePartial":true,"useData":true});
this["Templates"]["_studentrow"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "        <a class=\"tiny label secondary\" onclick="
    + alias2((helpers.incrementCounterManually || (depth0 && depth0.incrementCounterManually) || alias1).call(depth0,(depth0 != null ? depth0.id : depth0),{"name":"incrementCounterManually","hash":{},"data":data}))
    + ">+</a>\r\n        <a class=\"tiny label secondary\" onclick="
    + alias2((helpers.decrementCounterManually || (depth0 && depth0.decrementCounterManually) || alias1).call(depth0,(depth0 != null ? depth0.id : depth0),{"name":"decrementCounterManually","hash":{},"data":data}))
    + ">-</a>\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "        <a class=\"tiny button success\" onclick="
    + this.escapeExpression((helpers.toggleActiveStudentFunction || (depth0 && depth0.toggleActiveStudentFunction) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.id : depth0),{"name":"toggleActiveStudentFunction","hash":{},"data":data}))
    + ">active</a>\r\n";
},"5":function(depth0,helpers,partials,data) {
    return "        <a class=\"tiny button alert\" onclick="
    + this.escapeExpression((helpers.toggleActiveStudentFunction || (depth0 && depth0.toggleActiveStudentFunction) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.id : depth0),{"name":"toggleActiveStudentFunction","hash":{},"data":data}))
    + ">not active</a>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "<tr class="
    + alias2((helpers.activeStudent || (depth0 && depth0.activeStudent) || alias1).call(depth0,(depth0 != null ? depth0.active : depth0),{"name":"activeStudent","hash":{},"data":data}))
    + ">\r\n    <td>"
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "</td>\r\n    <td>"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\r\n    <td>\r\n      "
    + alias2(((helper = (helper = helpers.counter || (depth0 != null ? depth0.counter : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"counter","hash":{},"data":data}) : helper)))
    + "\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </td>\r\n    <td>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "    </td>\r\n</tr>\r\n";
},"useData":true});